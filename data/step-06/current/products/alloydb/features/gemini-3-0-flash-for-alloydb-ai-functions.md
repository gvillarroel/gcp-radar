---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.567Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Gemini 3.0 Flash for AlloyDB AI functions"
feature_slug: "gemini-3-0-flash-for-alloydb-ai-functions"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing"
keywords:
  - "Gemini Flash for AI functions"
  - "generative AI function model"
  - "Gemini 3.0 Flash"
  - "Gemini Flash"
  - "AI.GENERATE model"
  - "AlloyDB AI functions"
  - "AI.GENERATE"
---

# Gemini 3.0 Flash for AlloyDB AI functions

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB now supports using the Gemini 3.0 Flash preview model when invoking generative AI functions like AI.GENERATE.

## Extended Definition

AlloyDB now supports using the Gemini 3.0 Flash preview model when invoking generative AI functions like AI.GENERATE.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)

## Supporting Pages

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fetch results from the output cursor and store them LOOP FETCH result cursor INTO rec ; EXIT WHEN NOT FOUND ; INSERT INTO filtered results VALUES ( rec . input , rec . output ); END LOOP ; CLOSE result cursor ; END $$ ; Text generation and summarization AlloyDB AI offers text generation operators like scalar ai.generate and array-based and cursor-based ai.generate .
- This feature includes built-in functions for the following: Filtering ( ai.if ) Semantic ranking ( ai.rank ) Text generation ( ai.generate ) These AI functions use the AlloyDB AI query engine to help your application process data using artificial intelligence models at various scales, from single-row responses to large-scale database operations.
- Perform text generation using scalar functions The ai.generate function produces text by combining provided data with the user's prompt. -- Function Signature FUNCTION ai . generate ( prompt TEXT , model id VARCHAR ( 100 ) DEFAULT NULL ) RETURNS TEXT For example, you can use the following query to generate a concise summary of each user review.
- Review: ' review ) AS review summary FROM user reviews ; Perform text generation using array-based functions The following query uses UNNEST and ai.generate to summarize multiple reviews efficiently.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now use Gemini 3.0 Flash ( Preview ) when you call generative AI functions in AlloyDB, such as AI.GENERATE .
- You can combine natural language phrases with SQL queries, like ai.if() for filters and joins, ai.rank() for ordering using ranking models, and ai.generate() for generating summaries of your data, and generate multimodal embeddings.
- This feature includes out-of-the-box functions for filtering ( ai.if ), semantic ranking ( ai.rank ), generation ( ai.generate ), and forecasting ( ai.forecast ).
- May 21, 2025 Feature AlloyDB AI query engine ( Preview ) lets you combine natural language with SQL using operators like ai.if , ai.rank , and ai.generate .

### AI functions overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The AlloyDB AI functions ( Preview ) integrates with Vertex AI to bring intelligent filtering, semantic ranking, and text generation to your operational data in real time.
- How the AI functions works When you embed an AI operator like ai.if() , ai.rank() , or ai.generate() into your SQL query, the AI functions ( Preview ) detects it.
- Using the ai.generate() ( Preview ) operator, you can ask a foundation model to summarize a product review, or to transform data directly in your query.

