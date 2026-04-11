#!/usr/bin/env zx
import crypto from "node:crypto";
import os from "node:os";
import { execFile, spawn } from "node:child_process";
import { access, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

$.quote = quote;

const execFileAsync = promisify(execFile);

const schemaVersion = "step-06-extended-feature-definitions-v1";
const keywordPromptVersion = "step-06-keywords-v1";
const rerankPromptVersion = "step-06-rerank-v1";
const definitionPromptVersion = "step-06-definition-v1";
const inputStep02Root = path.resolve(process.env.GCP_RADAR_STEP06_STEP02_ROOT || "data/step-02/current");
const inputStep04Root = path.resolve(process.env.GCP_RADAR_STEP06_STEP04_ROOT || "data/step-04/current");
const outputRoot = path.resolve(process.env.GCP_RADAR_STEP06_OUTPUT_ROOT || "data/step-06/current");
const outputName = path.basename(outputRoot);
const stateRoot = path.resolve(process.env.GCP_RADAR_STEP06_STATE_ROOT || path.join("data/step-06/.state", outputName));
const outputProductsDir = path.join(outputRoot, "products");
const stateProductsDir = path.join(stateRoot, "products");
const indexFile = path.join(outputRoot, "index.json");
const keywordCacheFile = path.join(stateRoot, "keyword-cache.json");
const rerankCacheFile = path.join(stateRoot, "rerank-cache.json");
const definitionCacheFile = path.join(stateRoot, "definition-cache.json");
const maxFeatures = Number(process.env.GCP_RADAR_STEP06_MAX_FEATURES || 0);
const minBaseScore = Number(process.env.GCP_RADAR_STEP06_MIN_BASE_SCORE || 18);
const minFinalScore = Number(process.env.GCP_RADAR_STEP06_MIN_FINAL_SCORE || 20);
const maxCandidatePages = Number(process.env.GCP_RADAR_STEP06_MAX_CANDIDATE_PAGES || 6);
const maxDefinitionPages = Number(process.env.GCP_RADAR_STEP06_MAX_DEFINITION_PAGES || 3);
const maxCompetitionFeatures = Number(process.env.GCP_RADAR_STEP06_MAX_COMPETITION_FEATURES || 8);
const keywordBatchSize = Number(process.env.GCP_RADAR_STEP06_KEYWORD_BATCH_SIZE || 12);
const definitionConcurrency = Number(process.env.GCP_RADAR_STEP06_DEFINITION_CONCURRENCY || Math.min(6, Math.max(2, Math.floor((os.availableParallelism?.() ?? os.cpus().length) * 0.4))));
const piModel = process.env.GCP_RADAR_STEP06_PI_MODEL || "openai-codex/gpt-5.3-codex-spark";
const piRequestTimeoutMs = Number(process.env.GCP_RADAR_STEP06_PI_REQUEST_TIMEOUT_MS || 300000);
const disablePi = process.env.GCP_RADAR_STEP06_DISABLE_PI === "1";
const productFilter = (process.env.GCP_RADAR_STEP06_PRODUCTS || "")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);

const keywordSystemPrompt = [
  "You extract discriminative search phrases for Google Cloud feature definitions.",
  "Return JSON only.",
  "Input is one product and an array of features derived from release-note summaries.",
  "Return an array with exactly these keys for each feature: feature_name, keyword_phrases, alias_phrases, generic_terms_to_avoid.",
  "Rules:",
  "- keyword_phrases must contain 4 to 8 short phrases that are likely to appear in official documentation for that feature.",
  "- Prefer concrete nouns, API function names, productized capability names, feature-specific acronyms, and user-visible labels.",
  "- alias_phrases may contain 0 to 5 alternate phrases or abbreviations.",
  "- generic_terms_to_avoid must contain generic phrases that would overmatch many pages.",
  "- Avoid returning the product name alone as a keyword.",
  "- Keep phrases short and literal.",
].join(" ");

const rerankSystemPrompt = [
  "You review one documentation page against several candidate features from the same product.",
  "Return JSON only.",
  "Return an array of objects with exactly these keys: feature_name, relevance, rationale.",
  "Rules:",
  "- relevance must be one of: NONE, WEAK, MODERATE, STRONG.",
  "- STRONG means the page materially helps define the feature.",
  "- MODERATE means the page gives useful supporting context for the feature.",
  "- WEAK means only incidental mention or broad product context.",
  "- NONE means the page should not be used for that feature.",
  "- rationale must be one short sentence.",
].join(" ");

const definitionSystemPrompt = [
  "You synthesize an evidence-backed feature definition from official Google Cloud documentation excerpts.",
  "Return JSON only.",
  "Return an object with exactly these keys: extended_definition, coverage_status, source_links, evidence_summary.",
  "Rules:",
  "- coverage_status must be HIGH, MEDIUM, LOW, or NONE.",
  "- extended_definition must be 1 to 3 concise sentences that define the feature itself, not the product broadly.",
  "- Only use facts supported by the provided excerpts.",
  "- If evidence is weak, say so in cautious wording.",
  "- source_links must be an array of the real official page URLs used.",
  "- evidence_summary must be one short sentence describing what the cited pages contribute.",
].join(" ");

let cacheWriteQueue = Promise.resolve();

function hashValue(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function ensureDirectories() {
  await mkdir(outputProductsDir, { recursive: true });
  await mkdir(stateProductsDir, { recursive: true });
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  let lastError = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
      return;
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        await new Promise((resolve) => setTimeout(resolve, 50 * attempt));
      }
    }
  }
  throw lastError;
}

function writeJsonQueued(filePath, value) {
  cacheWriteQueue = cacheWriteQueue.then(() => writeJson(filePath, value));
  return cacheWriteQueue;
}

async function hasPi() {
  return (await $({ quiet: true, nothrow: true })`pi --version`).exitCode === 0;
}

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function normalizeWhitespace(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function normalizeText(text) {
  return normalizeWhitespace(text)
    .toLowerCase()
    .replace(/[`*_>#~[\]{}()]/g, " ")
    .replace(/[^\p{L}\p{N}.:/_-]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(/[^a-z0-9]+/i)
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);
}

function sanitizeTableCell(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { frontmatter: {}, body: markdown };
  }

  const frontmatter = {};
  for (const rawLine of match[1].split(/\r?\n/)) {
    const separator = rawLine.indexOf(":");
    if (separator <= 0) {
      continue;
    }

    const key = rawLine.slice(0, separator).trim();
    const rawValue = rawLine.slice(separator + 1).trim();
    frontmatter[key] = rawValue.replace(/^"(.*)"$/, "$1");
  }

  return {
    frontmatter,
    body: markdown.slice(match[0].length),
  };
}

function stripMarkdown(text) {
  return String(text || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^>\s?/gm, " ")
    .replace(/^#+\s+/gm, "")
    .replace(/\|/g, " ")
    .replace(/[*_~]/g, " ")
    .replace(/\r?\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitIntoSentences(text) {
  return normalizeWhitespace(text)
    .split(/(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 30);
}

function parseStep02Markdown(markdown, productSlug) {
  const productNameMatch = markdown.match(/^#\s+(.+)\r?$/m);
  const rowCountMatch = markdown.match(/Source rows considered:\s+(\d+)/);
  const featureCountMatch = markdown.match(/Unique features:\s+(\d+)/);
  const lines = markdown.split(/\r?\n/);
  const features = [];

  for (const line of lines) {
    const match = line.match(/^\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|$/);
    if (!match || match[1] === "---" || match[1] === "Latest feature date") {
      continue;
    }

    features.push({
      latest_feature_date: match[1].trim(),
      feature_name: match[2].replace(/\\\|/g, "|").trim(),
      deprecation_date: match[3].trim(),
      feature_summary: match[4].replace(/\\\|/g, "|").trim(),
      feature_slug: slugify(match[2]),
    });
  }

  return {
    schema_version: schemaVersion,
    product_name: productNameMatch?.[1]?.trim() || productSlug,
    product_slug: productSlug,
    source_row_count: Number(rowCountMatch?.[1] || 0),
    feature_count: Number(featureCountMatch?.[1] || features.length),
    features,
  };
}

async function loadStep02Product(productSlug) {
  const filePath = path.join(inputStep02Root, `${productSlug}.md`);
  const content = await readFile(filePath, "utf8");
  return {
    ...parseStep02Markdown(content, productSlug),
    step02_path: filePath,
  };
}

async function loadCorpusPages(productSlug) {
  const siteRoot = path.join(inputStep04Root, "products", productSlug, "corpus", "site");
  if (!(await exists(siteRoot))) {
    return [];
  }

  const sourceDirs = (await readdir(siteRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const pages = [];
  for (const sourceId of sourceDirs) {
    const pagesJsonPath = path.join(siteRoot, sourceId, "pages.json");
    const listedPages = await readJson(pagesJsonPath, []);
    for (const item of listedPages) {
      const relativeMarkdownPath = String(item?.path || "");
      if (!relativeMarkdownPath) {
        continue;
      }

      const markdownPath = path.join(siteRoot, sourceId, relativeMarkdownPath);
      if (!(await exists(markdownPath))) {
        continue;
      }

      const rawMarkdown = await readFile(markdownPath, "utf8");
      const { frontmatter, body } = parseFrontmatter(rawMarkdown);
      const pageUrl = String(frontmatter.url || item.url || "").trim();
      const pageTitle = normalizeWhitespace(String(frontmatter.title || item.title || ""));
      const cleanBody = stripMarkdown(body);
      const normalizedBody = normalizeText(cleanBody);
      const normalizedTitle = normalizeText(pageTitle);
      const normalizedUrl = normalizeText(pageUrl);

      pages.push({
        page_id: hashValue(`${sourceId}:${pageUrl}:${relativeMarkdownPath}`),
        source_id: sourceId,
        relative_markdown_path: path.join("products", productSlug, "corpus", "site", sourceId, relativeMarkdownPath).replace(/\\/g, "/"),
        markdown_path: markdownPath,
        url: pageUrl,
        title: pageTitle,
        body: cleanBody,
        normalized_body: normalizedBody,
        normalized_title: normalizedTitle,
        normalized_url: normalizedUrl,
      });
    }
  }

  const preferredPagesByUrl = new Map();
  for (const page of pages) {
    const current = preferredPagesByUrl.get(page.url);
    if (!current) {
      preferredPagesByUrl.set(page.url, page);
      continue;
    }

    const currentPreference = sourcePreferenceScore(current.source_id);
    const nextPreference = sourcePreferenceScore(page.source_id);
    if (nextPreference > currentPreference || (nextPreference === currentPreference && page.body.length > current.body.length)) {
      preferredPagesByUrl.set(page.url, page);
    }
  }

  return [...preferredPagesByUrl.values()];
}

function sourcePreferenceScore(sourceId) {
  if (sourceId === "site-docs") {
    return 4;
  }
  if (sourceId === "site-reference") {
    return 3;
  }
  if (sourceId === "site-access-control") {
    return 2;
  }
  return 1;
}

function featureText(feature) {
  return normalizeText(`${feature.feature_name} ${feature.feature_summary}`);
}

function buildPhraseDocumentFrequency(features) {
  const frequencies = new Map();

  for (const feature of features) {
    const text = featureText(feature);
    const tokens = new Set(tokenize(text));
    for (const token of tokens) {
      frequencies.set(token, (frequencies.get(token) || 0) + 1);
    }
  }

  return frequencies;
}

function keywordCacheKey(productName, feature) {
  return hashValue(JSON.stringify({
    prompt_version: keywordPromptVersion,
    product_name: productName,
    feature_name: feature.feature_name,
    feature_summary: feature.feature_summary,
  }));
}

function rerankCacheKey(productName, page, featureSet) {
  return hashValue(JSON.stringify({
    prompt_version: rerankPromptVersion,
    product_name: productName,
    page_url: page.url,
    page_title: page.title,
    feature_names: featureSet.map((feature) => feature.feature_name),
  }));
}

function definitionCacheKey(productName, feature, supportingPages) {
  return hashValue(JSON.stringify({
    prompt_version: definitionPromptVersion,
    product_name: productName,
    feature_name: feature.feature_name,
    feature_summary: feature.feature_summary,
    page_urls: supportingPages.map((page) => page.url),
  }));
}

function chunk(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

async function runPi(prompt, systemPrompt) {
  const promptFile = path.join(stateRoot, `pi-${hashValue(prompt)}.txt`);
  await writeFile(promptFile, prompt, "utf8");

  const script = [
    "$ProgressPreference = 'SilentlyContinue'",
    `Get-Content "${promptFile.replace(/\\/g, "\\\\")}" -Raw | pi -p --no-session --model "${piModel}" --system-prompt @'`,
    systemPrompt,
    "'@",
  ].join("\n");

  const encodedCommand = Buffer.from(script, "utf16le").toString("base64");
  const result = await new Promise((resolve, reject) => {
    const child = spawn("powershell", ["-NoProfile", "-EncodedCommand", encodedCommand], {
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    });

    let stdout = "";
    let stderr = "";
    let settled = false;

    const timeoutHandle = setTimeout(async () => {
      if (settled) {
        return;
      }

      settled = true;
      await execFileAsync("taskkill", ["/PID", String(child.pid), "/T", "/F"], {
        windowsHide: true,
      }).catch(() => null);
      reject(new Error(`pi request timed out after ${piRequestTimeoutMs} ms`));
    }, piRequestTimeoutMs);

    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", (error) => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(timeoutHandle);
      reject(error);
    });
    child.on("close", (code) => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(timeoutHandle);
      if (code !== 0) {
        reject(new Error(stderr.trim() || `powershell exited with code ${code}`));
        return;
      }
      resolve(stdout.trim());
    });
  }).finally(async () => {
    await rm(promptFile, { force: true });
  });

  return JSON.parse(result);
}

function fallbackKeywords(feature) {
  const baseTokens = [...new Set(tokenize(`${feature.feature_name} ${feature.feature_summary}`))]
    .filter((token) => !["bigquery", "google", "cloud", "feature", "support", "service", "data"].includes(token))
    .slice(0, 8);

  return {
    feature_name: feature.feature_name,
    keyword_phrases: baseTokens,
    alias_phrases: [],
    generic_terms_to_avoid: [],
  };
}

function arrayOfStrings(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .map((entry) => String(entry || "").trim())
    .filter(Boolean);
}

function phraseSpecificityScore(phrase, phraseDocumentFrequency) {
  const tokens = [...new Set(tokenize(phrase))];
  if (tokens.length === 0) {
    return 0;
  }

  return tokens.reduce((sum, token) => {
    const frequency = phraseDocumentFrequency.get(token) || 1;
    return sum + (1 / frequency);
  }, 0) + (phrase.length / 40);
}

async function ensureKeywords(productName, features, keywordCache, phraseDocumentFrequency) {
  const uncached = features.filter((feature) => !keywordCache[keywordCacheKey(productName, feature)]);

  if (disablePi) {
    for (const feature of uncached) {
      keywordCache[keywordCacheKey(productName, feature)] = {
        prompt_version: keywordPromptVersion,
        feature_name: feature.feature_name,
        keyword_phrases: fallbackKeywords(feature).keyword_phrases,
        generic_terms_to_avoid: [],
      };
    }
    if (uncached.length > 0) {
      await writeJsonQueued(keywordCacheFile, keywordCache);
    }
    return;
  }

  for (const batch of chunk(uncached, keywordBatchSize)) {
    const prompt = JSON.stringify({
      product_name: productName,
      features: batch.map((feature) => ({
        feature_name: feature.feature_name,
        feature_summary: feature.feature_summary,
      })),
    }, null, 2);

    let response;
    try {
      response = await runPi(prompt, keywordSystemPrompt);
    } catch {
      response = batch.map((feature) => fallbackKeywords(feature));
    }

    const byName = new Map((Array.isArray(response) ? response : []).map((item) => [String(item?.feature_name || "").trim(), item]));
    for (const feature of batch) {
      const key = keywordCacheKey(productName, feature);
      const item = byName.get(feature.feature_name) || fallbackKeywords(feature);
      const phrases = [
        ...arrayOfStrings(item.keyword_phrases),
        ...arrayOfStrings(item.alias_phrases),
      ];

      const uniquePhrases = [...new Set(phrases
        .map((phrase) => normalizeWhitespace(phrase))
        .filter(Boolean)
        .filter((phrase) => normalizeText(phrase) !== "bigquery")
      )];

      const filteredPhrases = uniquePhrases
        .map((phrase) => ({
          phrase,
          normalized: normalizeText(phrase),
          specificity: phraseSpecificityScore(phrase, phraseDocumentFrequency),
        }))
        .filter((entry) => entry.normalized.length >= 2)
        .sort((a, b) => b.specificity - a.specificity || b.phrase.length - a.phrase.length)
        .slice(0, 8);

      keywordCache[key] = {
        prompt_version: keywordPromptVersion,
        feature_name: feature.feature_name,
        keyword_phrases: filteredPhrases.map((entry) => entry.phrase),
        generic_terms_to_avoid: arrayOfStrings(item.generic_terms_to_avoid).map((phrase) => normalizeWhitespace(phrase)),
      };
    }

    await writeJsonQueued(keywordCacheFile, keywordCache);
  }
}

function countOccurrences(haystack, needle) {
  if (!haystack || !needle) {
    return 0;
  }

  let count = 0;
  let index = 0;
  while (index >= 0) {
    index = haystack.indexOf(needle, index);
    if (index < 0) {
      break;
    }
    count += 1;
    index += needle.length;
  }

  return count;
}

function scorePageForFeature(feature, keywordEntry, page) {
  const normalizedFeatureName = normalizeText(feature.feature_name);
  const normalizedSummary = normalizeText(feature.feature_summary);
  const phrases = [
    normalizedFeatureName,
    ...arrayOfStrings(keywordEntry?.keyword_phrases).map((phrase) => normalizeText(phrase)),
  ].filter(Boolean);

  let score = 0;
  let matchedPhrases = [];

  for (const phrase of [...new Set(phrases)]) {
    const titleHits = countOccurrences(page.normalized_title, phrase);
    const urlHits = countOccurrences(page.normalized_url, phrase);
    const bodyHits = countOccurrences(page.normalized_body, phrase);
    const phraseScore = (titleHits * 14) + (urlHits * 10) + Math.min(5, bodyHits) * 4;

    if (phraseScore > 0) {
      score += phraseScore;
      matchedPhrases.push({
        phrase,
        title_hits: titleHits,
        url_hits: urlHits,
        body_hits: bodyHits,
      });
    }
  }

  if (matchedPhrases.length === 0) {
    return {
      page_id: page.page_id,
      url: page.url,
      title: page.title,
      source_id: page.source_id,
      markdown_path: page.markdown_path,
      relative_markdown_path: page.relative_markdown_path,
      base_score: 0,
      matched_phrases: [],
    };
  }

  const summaryTokens = tokenize(normalizedSummary).filter((token) => !["bigquery", "google", "cloud"].includes(token));
  const titleTokenHits = summaryTokens.filter((token) => page.normalized_title.includes(token)).length;
  const bodyTokenHits = summaryTokens.filter((token) => page.normalized_body.includes(token)).length;
  score += Math.min(titleTokenHits, 3) * 2;
  score += Math.min(bodyTokenHits, 4);

  if (page.normalized_title.includes("overview") || page.normalized_title.includes("introduction")) {
    score += 2;
  }

  return {
    page_id: page.page_id,
    url: page.url,
    title: page.title,
    source_id: page.source_id,
    markdown_path: page.markdown_path,
    relative_markdown_path: page.relative_markdown_path,
    base_score: score,
    matched_phrases: matchedPhrases
      .sort((a, b) => (b.title_hits + b.url_hits + b.body_hits) - (a.title_hits + a.url_hits + a.body_hits))
      .slice(0, 6),
  };
}

function extractEvidenceSnippets(page, keywordEntry) {
  const phrases = arrayOfStrings(keywordEntry?.keyword_phrases)
    .map((phrase) => normalizeText(phrase))
    .filter(Boolean);

  const sentences = splitIntoSentences(page.body);
  const matches = [];

  for (const sentence of sentences) {
    const normalizedSentence = normalizeText(sentence);
    const hitCount = phrases.filter((phrase) => normalizedSentence.includes(phrase)).length;
    if (hitCount > 0) {
      matches.push({ sentence, hitCount });
    }
  }

  return matches
    .sort((a, b) => b.hitCount - a.hitCount || b.sentence.length - a.sentence.length)
    .slice(0, 4)
    .map((match) => match.sentence);
}

async function rerankPageCompetition(productName, page, featureSet, rerankCache) {
  if (disablePi) {
    return featureSet.map((feature) => ({
      feature_name: feature.feature_name,
      relevance: "MODERATE",
      rationale: "Fast mode kept the lexical match without page-level LLM reranking.",
    }));
  }

  const cacheKey = rerankCacheKey(productName, page, featureSet);
  if (rerankCache[cacheKey]) {
    return rerankCache[cacheKey];
  }

  const prompt = JSON.stringify({
    product_name: productName,
    page: {
      title: page.title,
      url: page.url,
      excerpt: page.body.slice(0, 2500),
    },
    candidate_features: featureSet.map((feature) => ({
      feature_name: feature.feature_name,
      feature_summary: feature.feature_summary,
    })),
  }, null, 2);

  let response;
  try {
    response = await runPi(prompt, rerankSystemPrompt);
  } catch {
    response = featureSet.map((feature) => ({
      feature_name: feature.feature_name,
      relevance: "WEAK",
      rationale: "Fallback relevance because reranking failed.",
    }));
  }

  rerankCache[cacheKey] = Array.isArray(response) ? response : [];
  await writeJsonQueued(rerankCacheFile, rerankCache);
  return rerankCache[cacheKey];
}

function rerankWeight(relevance) {
  switch (relevance) {
    case "STRONG":
      return 18;
    case "MODERATE":
      return 8;
    case "WEAK":
      return -4;
    case "NONE":
      return -1000;
    default:
      return 0;
  }
}

async function mapWithConcurrency(items, concurrency, worker) {
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      await worker(items[currentIndex], currentIndex);
    }
  }

  const workerCount = Math.max(1, Math.min(concurrency, items.length || 1));
  await Promise.all(Array.from({ length: workerCount }, () => runWorker()));
}

async function generateDefinition(productName, feature, supportingPages, definitionCache, keywordEntry) {
  if (disablePi) {
    return {
      extended_definition: feature.feature_summary,
      coverage_status: supportingPages.length >= 2 ? "MEDIUM" : supportingPages.length === 1 ? "LOW" : "NONE",
      source_links: supportingPages.map((page) => page.url).filter(Boolean),
      evidence_summary: supportingPages.length > 0
        ? `Fast-mode lexical matching selected ${supportingPages.length} supporting page(s) from the Step 04 corpus.`
        : "No supporting pages passed the Step 06 ranking thresholds.",
    };
  }

  const cacheKey = definitionCacheKey(productName, feature, supportingPages);
  if (definitionCache[cacheKey]) {
    return definitionCache[cacheKey];
  }

  const prompt = JSON.stringify({
    product_name: productName,
    feature: {
      feature_name: feature.feature_name,
      feature_summary: feature.feature_summary,
      latest_feature_date: feature.latest_feature_date,
      deprecation_date: feature.deprecation_date,
      keyword_phrases: arrayOfStrings(keywordEntry?.keyword_phrases),
    },
    supporting_pages: supportingPages.map((page) => ({
      title: page.title,
      url: page.url,
      evidence_snippets: page.evidence_snippets,
    })),
  }, null, 2);

  let response;
  try {
    response = await runPi(prompt, definitionSystemPrompt);
  } catch {
    response = {
      extended_definition: feature.feature_summary,
      coverage_status: "LOW",
      source_links: supportingPages.map((page) => page.url),
      evidence_summary: "Fallback definition because synthesis failed.",
    };
  }

  definitionCache[cacheKey] = response;
  await writeJsonQueued(definitionCacheFile, definitionCache);
  return definitionCache[cacheKey];
}

function buildMarkdown(product, features) {
  const covered = features.filter((feature) => feature.coverage_status !== "NONE").length;
  const lines = [
    `# ${product.product_name}`,
    "",
    "Extended Step 06 feature definitions generated by combining Step 02 feature inventories with the Step 04 official documentation corpus.",
    "",
    `Source rows considered in Step 02: ${product.source_row_count}`,
    `Step 02 features considered: ${features.length}`,
    `Corpus-backed definitions: ${covered}`,
    `Features without supporting corpus pages: ${features.length - covered}`,
    "",
    "| Latest feature date | Feature | Coverage | Sources | Extended definition |",
    "| --- | --- | --- | --- | --- |",
  ];

  for (const feature of features) {
    const sourcesCell = feature.source_links.length > 0
      ? feature.source_links.map((url) => `[source](${url})`).join("<br>")
      : "";
    lines.push(`| ${sanitizeTableCell(feature.latest_feature_date)} | ${sanitizeTableCell(feature.feature_name)} | ${sanitizeTableCell(feature.coverage_status)} | ${sanitizeTableCell(sourcesCell)} | ${sanitizeTableCell(feature.extended_definition)} |`);
  }

  lines.push("");
  return `${lines.join("\n")}\n`;
}

function yamlScalar(value) {
  const text = String(value ?? "");
  if (text === "") {
    return '""';
  }

  return `"${text
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, "\\n")}"`;
}

function buildFeatureFrontmatter(product, feature) {
  const lines = [
    "---",
    `schema_version: ${yamlScalar(schemaVersion)}`,
    `generated_at: ${yamlScalar(new Date().toISOString())}`,
    `product_name: ${yamlScalar(product.product_name)}`,
    `product_slug: ${yamlScalar(product.product_slug)}`,
    `feature_name: ${yamlScalar(feature.feature_name)}`,
    `feature_slug: ${yamlScalar(feature.feature_slug)}`,
    `latest_feature_date: ${yamlScalar(feature.latest_feature_date)}`,
    `deprecation_date: ${yamlScalar(feature.deprecation_date)}`,
    `coverage_status: ${yamlScalar(feature.coverage_status)}`,
    "source_links:",
  ];

  if (feature.source_links.length === 0) {
    lines.push('  - ""');
  } else {
    for (const url of feature.source_links) {
      lines.push(`  - ${yamlScalar(url)}`);
    }
  }

  lines.push("keywords:");
  if (feature.keywords.length === 0) {
    lines.push('  - ""');
  } else {
    for (const keyword of feature.keywords) {
      lines.push(`  - ${yamlScalar(keyword)}`);
    }
  }

  lines.push("---", "");
  return lines.join("\n");
}

function buildFeatureMarkdown(product, feature) {
  const supportingPages = feature.reranked_pages || feature.supporting_pages || [];
  const lines = [
    buildFeatureFrontmatter(product, feature),
    `# ${feature.feature_name}`,
    "",
    `Product: ${product.product_name}`,
    `Coverage: ${feature.coverage_status}`,
    "",
    "## Step 02 Summary",
    "",
    feature.feature_summary,
    "",
    "## Extended Definition",
    "",
    feature.extended_definition,
    "",
  ];

  if (feature.evidence_summary) {
    lines.push("## Evidence Summary", "", feature.evidence_summary, "");
  }

  lines.push("## Source Links", "");
  if (feature.source_links.length === 0) {
    lines.push("No supporting official source links were selected.", "");
  } else {
    for (const url of feature.source_links) {
      lines.push(`- [${url}](${url})`);
    }
    lines.push("");
  }

  lines.push("## Supporting Pages", "");
  if (supportingPages.length === 0) {
    lines.push("No supporting pages passed the Step 06 ranking thresholds.", "");
  } else {
    for (const page of supportingPages) {
      lines.push(`### ${page.title || page.url}`);
      lines.push("");
      lines.push(`- URL: [${page.url}](${page.url})`);
      lines.push(`- Source ID: \`${page.source_id}\``);
      lines.push(`- Final score: ${page.final_score}`);
      lines.push(`- Re-rank relevance: ${page.rerank_relevance || "N/A"}`);
      if (page.rerank_rationale) {
        lines.push(`- Re-rank rationale: ${page.rerank_rationale}`);
      }
      if (Array.isArray(page.evidence_snippets) && page.evidence_snippets.length > 0) {
        lines.push("", "Evidence snippets:");
        for (const snippet of page.evidence_snippets) {
          lines.push(`- ${snippet}`);
        }
      }
      lines.push("");
    }
  }

  return `${lines.join("\n")}\n`;
}

async function writeFeatureFiles(product, featureFilesDir, features) {
  await mkdir(featureFilesDir, { recursive: true });
  for (const feature of features) {
    const featureFile = path.join(featureFilesDir, `${feature.feature_slug || slugify(feature.feature_name)}.md`);
    await writeFile(featureFile, buildFeatureMarkdown(product, feature), "utf8");
  }
}

function buildCoverageFeedback(product, features) {
  const uncovered = features.filter((feature) => feature.coverage_status === "NONE");
  const tokenCounts = new Map();
  for (const feature of uncovered) {
    const tokens = new Set(tokenize(`${feature.feature_name} ${feature.feature_summary}`));
    for (const token of tokens) tokenCounts.set(token, (tokenCounts.get(token) || 0) + 1);
  }
  return {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    product_name: product.product_name,
    product_slug: product.product_slug,
    feature_count: features.length,
    uncovered_feature_count: uncovered.length,
    uncovered_features: uncovered.slice(0, 200).map((feature) => ({
      latest_feature_date: feature.latest_feature_date,
      feature_name: feature.feature_name,
      feature_summary: feature.feature_summary,
      keywords: feature.keywords,
    })),
    top_missing_tokens: [...tokenCounts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 40)
      .map(([token, count]) => ({ token, count })),
  };
}

async function processProduct(productSlug, caches) {
  const step02 = await loadStep02Product(productSlug);
  const corpusPages = await loadCorpusPages(productSlug);
  const outputDir = path.join(outputProductsDir, productSlug);
  const featureFilesDir = path.join(outputDir, "features");
  const stateDir = path.join(stateProductsDir, productSlug);
  const outputJsonFile = path.join(outputDir, "extended-features.json");
  const outputMarkdownFile = path.join(outputDir, "extended-features.md");
  const coverageFeedbackFile = path.join(outputDir, "coverage-feedback.json");
  const stateFile = path.join(stateDir, "state.json");

  await mkdir(outputDir, { recursive: true });
  await mkdir(featureFilesDir, { recursive: true });
  await mkdir(stateDir, { recursive: true });

  if (corpusPages.length === 0 && await exists(outputJsonFile)) {
    const existingPayload = await readJson(outputJsonFile, null);
    if (existingPayload?.product_name && Array.isArray(existingPayload.features)) {
      const normalizedFeatures = existingPayload.features.map((feature) => ({
        ...feature,
        feature_slug: feature.feature_slug || slugify(feature.feature_name),
        reranked_pages: feature.supporting_pages || [],
      }));
      await writeFeatureFiles(step02, featureFilesDir, normalizedFeatures);
      await writeJson(stateFile, {
        schema_version: schemaVersion,
        generated_at: new Date().toISOString(),
        product_name: step02.product_name,
        product_slug: productSlug,
        corpus_page_count: 0,
        feature_count: normalizedFeatures.length,
        covered_feature_count: normalizedFeatures.filter((feature) => feature.coverage_status !== "NONE").length,
        features_without_supporting_pages: normalizedFeatures.filter((feature) => (feature.reranked_pages || []).length === 0).length,
        reused_existing_payload: true,
        output_files: {
          json: path.relative(process.cwd(), outputJsonFile).replace(/\\/g, "/"),
          markdown: path.relative(process.cwd(), outputMarkdownFile).replace(/\\/g, "/"),
          coverage_feedback: path.relative(process.cwd(), coverageFeedbackFile).replace(/\\/g, "/"),
          feature_files_dir: path.relative(process.cwd(), featureFilesDir).replace(/\\/g, "/"),
        },
        feature_file_count: normalizedFeatures.length,
      });

      return {
        product_name: step02.product_name,
        product_slug: productSlug,
        corpus_page_count: 0,
        feature_count: normalizedFeatures.length,
        covered_feature_count: normalizedFeatures.filter((feature) => feature.coverage_status !== "NONE").length,
        uncovered_feature_count: normalizedFeatures.filter((feature) => feature.coverage_status === "NONE").length,
        output_json: path.relative(process.cwd(), outputJsonFile).replace(/\\/g, "/"),
        output_markdown: path.relative(process.cwd(), outputMarkdownFile).replace(/\\/g, "/"),
        feature_files_dir: path.relative(process.cwd(), featureFilesDir).replace(/\\/g, "/"),
        reused_existing_payload: true,
      };
    }
  }

  const features = step02.features.slice(0, maxFeatures > 0 ? maxFeatures : undefined);
  const phraseDocumentFrequency = buildPhraseDocumentFrequency(features);
  await ensureKeywords(step02.product_name, features, caches.keywordCache, phraseDocumentFrequency);

  const featureRecords = features.map((feature) => {
    const keywordEntry = caches.keywordCache[keywordCacheKey(step02.product_name, feature)] || fallbackKeywords(feature);
    const candidatePages = corpusPages
      .map((page) => scorePageForFeature(feature, keywordEntry, page))
      .filter((candidate) => candidate.base_score >= minBaseScore)
      .sort((a, b) => b.base_score - a.base_score || a.title.localeCompare(b.title))
      .slice(0, maxCandidatePages);

    return {
      ...feature,
      keywords: arrayOfStrings(keywordEntry.keyword_phrases),
      candidate_pages: candidatePages,
      reranked_pages: [],
      coverage_status: "NONE",
      source_links: [],
      extended_definition: feature.feature_summary,
      evidence_summary: "",
    };
  });

  const candidateByPageId = new Map();
  for (const feature of featureRecords) {
    for (const candidate of feature.candidate_pages) {
      if (!candidateByPageId.has(candidate.page_id)) {
        candidateByPageId.set(candidate.page_id, []);
      }

      candidateByPageId.get(candidate.page_id).push({
        feature_name: feature.feature_name,
        feature_summary: feature.feature_summary,
        base_score: candidate.base_score,
      });
    }
  }

  const pageById = new Map(corpusPages.map((page) => [page.page_id, page]));
  const rerankByPageId = new Map();

  for (const [pageId, candidates] of candidateByPageId.entries()) {
    const rankedCandidates = [...candidates]
      .sort((a, b) => b.base_score - a.base_score || a.feature_name.localeCompare(b.feature_name))
      .slice(0, maxCompetitionFeatures);

    if (rankedCandidates.length <= 1) {
      continue;
    }

    const page = pageById.get(pageId);
    const rerankResult = await rerankPageCompetition(step02.product_name, page, rankedCandidates, caches.rerankCache);
    rerankByPageId.set(pageId, new Map((Array.isArray(rerankResult) ? rerankResult : []).map((item) => [String(item?.feature_name || "").trim(), item])));
  }

  const definitionsNeeded = [];

  for (const feature of featureRecords) {
    const rerankedPages = feature.candidate_pages
      .map((candidate) => {
        const rerank = rerankByPageId.get(candidate.page_id)?.get(feature.feature_name);
        const finalScore = candidate.base_score + rerankWeight(String(rerank?.relevance || ""));
        return {
          ...candidate,
          rerank_relevance: String(rerank?.relevance || ""),
          rerank_rationale: String(rerank?.rationale || ""),
          final_score: finalScore,
        };
      })
      .filter((candidate) => candidate.final_score >= minFinalScore)
      .sort((a, b) => b.final_score - a.final_score || a.title.localeCompare(b.title))
      .slice(0, maxDefinitionPages);

    feature.reranked_pages = rerankedPages;
    if (rerankedPages.length === 0) {
      continue;
    }

    definitionsNeeded.push(feature);
  }

  await mapWithConcurrency(definitionsNeeded, definitionConcurrency, async (feature) => {
    const keywordEntry = caches.keywordCache[keywordCacheKey(step02.product_name, feature)] || fallbackKeywords(feature);
    const supportingPages = feature.reranked_pages.map((pageScore) => {
      const page = pageById.get(pageScore.page_id);
      return {
        ...pageScore,
        title: page?.title || pageScore.title,
        url: page?.url || pageScore.url,
        evidence_snippets: extractEvidenceSnippets(page, keywordEntry),
      };
    });

    const definition = await generateDefinition(step02.product_name, feature, supportingPages, caches.definitionCache, keywordEntry);
    feature.coverage_status = String(definition.coverage_status || "LOW").trim() || "LOW";
    feature.source_links = [...new Set(arrayOfStrings(definition.source_links).filter(Boolean))];
    if (feature.source_links.length === 0) {
      feature.source_links = supportingPages.map((page) => page.url).filter(Boolean);
    }
    feature.extended_definition = normalizeWhitespace(String(definition.extended_definition || "").trim()) || feature.feature_summary;
    feature.evidence_summary = normalizeWhitespace(String(definition.evidence_summary || "").trim());
    feature.reranked_pages = supportingPages.map((page) => ({
      url: page.url,
      title: page.title,
      source_id: page.source_id,
      markdown_path: page.relative_markdown_path,
      base_score: page.base_score,
      final_score: page.final_score,
      rerank_relevance: page.rerank_relevance,
      rerank_rationale: page.rerank_rationale,
      matched_phrases: page.matched_phrases,
      evidence_snippets: page.evidence_snippets,
    }));
  });

  const payload = {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    product_name: step02.product_name,
    product_slug: productSlug,
    inputs: {
      step02_markdown_path: path.relative(process.cwd(), step02.step02_path).replace(/\\/g, "/"),
      step04_product_dir: path.relative(process.cwd(), path.join(inputStep04Root, "products", productSlug)).replace(/\\/g, "/"),
    },
    thresholds: {
      min_base_score: minBaseScore,
      min_final_score: minFinalScore,
      max_candidate_pages: maxCandidatePages,
      max_definition_pages: maxDefinitionPages,
    },
    corpus_page_count: corpusPages.length,
    source_row_count: step02.source_row_count,
    feature_count: featureRecords.length,
    covered_feature_count: featureRecords.filter((feature) => feature.coverage_status !== "NONE").length,
    features_without_supporting_pages: featureRecords.filter((feature) => feature.reranked_pages.length === 0).length,
    features: featureRecords.map((feature) => ({
      latest_feature_date: feature.latest_feature_date,
      feature_name: feature.feature_name,
      deprecation_date: feature.deprecation_date,
      feature_summary: feature.feature_summary,
      keywords: feature.keywords,
      coverage_status: feature.coverage_status,
      extended_definition: feature.extended_definition,
      evidence_summary: feature.evidence_summary,
      source_links: feature.source_links,
      candidate_pages: feature.candidate_pages,
      supporting_pages: feature.reranked_pages,
    })),
  };
  const coverageFeedback = buildCoverageFeedback(step02, featureRecords);

  await writeJson(outputJsonFile, payload);
  await writeJson(coverageFeedbackFile, coverageFeedback);
  await writeFile(outputMarkdownFile, buildMarkdown(step02, featureRecords), "utf8");
  await writeFeatureFiles(step02, featureFilesDir, featureRecords);
  await writeJson(stateFile, {
    schema_version: schemaVersion,
    generated_at: payload.generated_at,
    product_name: step02.product_name,
    product_slug: productSlug,
    corpus_page_count: corpusPages.length,
    feature_count: featureRecords.length,
    covered_feature_count: payload.covered_feature_count,
    features_without_supporting_pages: payload.features_without_supporting_pages,
    keyword_cache_size: Object.keys(caches.keywordCache).length,
    rerank_cache_size: Object.keys(caches.rerankCache).length,
    definition_cache_size: Object.keys(caches.definitionCache).length,
    output_files: {
      json: path.relative(process.cwd(), outputJsonFile).replace(/\\/g, "/"),
      markdown: path.relative(process.cwd(), outputMarkdownFile).replace(/\\/g, "/"),
      coverage_feedback: path.relative(process.cwd(), coverageFeedbackFile).replace(/\\/g, "/"),
      feature_files_dir: path.relative(process.cwd(), featureFilesDir).replace(/\\/g, "/"),
    },
    feature_file_count: featureRecords.length,
  });

  return {
    product_name: step02.product_name,
    product_slug: productSlug,
    corpus_page_count: corpusPages.length,
    feature_count: featureRecords.length,
    covered_feature_count: payload.covered_feature_count,
    uncovered_feature_count: featureRecords.filter((feature) => feature.coverage_status === "NONE").length,
    output_json: path.relative(process.cwd(), outputJsonFile).replace(/\\/g, "/"),
    output_markdown: path.relative(process.cwd(), outputMarkdownFile).replace(/\\/g, "/"),
    feature_files_dir: path.relative(process.cwd(), featureFilesDir).replace(/\\/g, "/"),
  };
}

async function listProductSlugs() {
  const step02Files = (await readdir(inputStep02Root, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md")
    .map((entry) => entry.name.replace(/\.md$/, ""))
    .sort();

  return step02Files.filter((slug) => productFilter.length === 0 || productFilter.includes(slug.toLowerCase()));
}

async function main() {
  await ensureDirectories();

  if (!disablePi && !(await hasPi())) {
    throw new Error("pi is required for Step 06 enrichment but is not available in PATH");
  }

  const productSlugs = await listProductSlugs();
  const keywordCache = await readJson(keywordCacheFile, {});
  const rerankCache = await readJson(rerankCacheFile, {});
  const definitionCache = await readJson(definitionCacheFile, {});
  const caches = { keywordCache, rerankCache, definitionCache };
  const products = [];

  for (const productSlug of productSlugs) {
    const step04ProductDir = path.join(inputStep04Root, "products", productSlug);
    if (!(await exists(step04ProductDir))) {
      continue;
    }

    products.push(await processProduct(productSlug, caches));
  }

  await writeJson(keywordCacheFile, keywordCache);
  await writeJson(rerankCacheFile, rerankCache);
  await writeJson(definitionCacheFile, definitionCache);
  await cacheWriteQueue;
  await writeJson(indexFile, {
    schema_version: schemaVersion,
    generated_at: new Date().toISOString(),
    input_step02_root: path.relative(process.cwd(), inputStep02Root).replace(/\\/g, "/"),
    input_step04_root: path.relative(process.cwd(), inputStep04Root).replace(/\\/g, "/"),
    output_root: path.relative(process.cwd(), outputRoot).replace(/\\/g, "/"),
    pi_model: piModel,
    product_count: products.length,
    max_features: maxFeatures || null,
    products_filter: productFilter,
    products,
  });

  console.log(JSON.stringify({
    schema_version: schemaVersion,
    input_step02_root: inputStep02Root,
    input_step04_root: inputStep04Root,
    output_root: outputRoot,
    pi_model: piModel,
    product_count: products.length,
    products_filter: productFilter,
    index_file: indexFile,
  }, null, 2));
}

await main();
