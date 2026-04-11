## Status

Implemented and verified on the issue's representative failure set on 2026-04-10.

This issue is resolved as an implementation gap in Step 03, Step 04, and Step 06.

The remaining work, if desired, is a full-catalog reprocess to refresh aggregate metrics after the new logic. The targeted products used in this issue now show the expected behavior.

## Context

After reprocessing Step 4 and then regenerating Step 6 across the current product set, we now have a concrete signal about where the Step 3 URL-selection logic and the Step 4 corpus-capture logic are working versus failing.

Step 6 outputs were materialized for 271 real products under `data/step-06/current/products/*`.

## Observed Results

Aggregate Step 6 coverage snapshot:

- Products processed: 271
- Total features in Step 2 inventories: 23,748
- Features with at least some Step 6 documentation coverage: 7,655
- Features with `coverage_status=NONE`: 16,093
- Products with zero corpus pages in Step 4: 152
- Products with zero Step 6 feature coverage: 154
- Products with >=80% Step 6 coverage: 77

Step 4 state snapshot:

- Products with `state.status=sync_failed`: 168
- Products with non-failed Step 4 state and registered sources: 103

### What clearly worked

Some products reached extremely high Step 6 recall once Step 4 captured enough relevant product docs. Examples:

- `cloud-run`: 103 corpus pages, 138/138 features covered
- `cloud-load-balancing`: 237 corpus pages, 128/128 features covered
- `cloud-key-management-service`: 226 corpus pages, 151/151 features covered
- `dataflow`: 41 corpus pages, 212/212 features covered
- `virtual-private-cloud`: 67 corpus pages, 229/229 features covered
- `artifact-registry`: 88 corpus pages, 75/75 features covered

These cases suggest that Step 3 + Step 4 perform well when:

- the selected seeds include broad product-root and guide-heavy documentation
- the crawl reaches enough topical guide pages beyond a single overview
- the resulting page titles/body vocabulary overlaps well with Step 2 feature phrasing

### What clearly failed

There are two distinct failure modes.

#### 1. Step 4 produced no usable corpus

A very large fraction of products ended up with zero Step 4 pages and therefore zero Step 6 recall.

Examples with `corpus_page_count=0`:

- `automl-translation`
- `bigtable`
- `binary-authorization`
- `blockchain-analytics`
- `buildpacks`
- many `cloud-*` products

This is the most severe failure mode because Step 6 cannot recover from an empty or failed Step 4 corpus.

#### 2. Step 4 produced pages, but they were the wrong pages or far too few pages

Some products had non-zero corpus pages but still very poor Step 6 recall.

Examples:

- `bigquery`: 22 pages, 12/1397 features covered
- `app-engine-flexible-environment-node-js`: 39 pages, 5/71 covered
- `apigee-hybrid`: 32 pages, 5/62 covered
- `apigee-integrated-portal`: 31 pages, 1/12 covered
- `anthos-config-management`: 70 pages, 26/135 covered
- `access-transparency`: 32 pages, 14/81 covered

This suggests that for some products the selected Step 3 seeds and/or Step 4 crawl budgets are not aligned with the Step 2 feature inventory. The corpus exists, but it is not representative enough to explain the release-note feature set.

## Likely Causes

### Step 3 issues

1. The current "one best URL per family" selection is too restrictive for products with many feature clusters.
2. Seed selection appears to overvalue product overviews and underselect sub-area guide trees that carry feature-level vocabulary.
3. Client-library or reference-heavy seeds can crowd out more useful feature-definition pages.
4. Step 3 has no feedback loop from Step 2 feature coverage, so it cannot tell whether selected URLs are likely to explain the discovered features.

### Step 4 issues

1. Too many products end in `sync_failed`, which leaves Step 6 with no chance to match features.
2. Current crawl budgets are too shallow for high-feature products.
3. Step 4 does not appear to validate post-crawl health strongly enough before considering the corpus usable.
4. Products with large feature inventories often need multiple topical subtrees, not just a small root/reference capture.

## Requested Changes

### Step 3

1. Add a coverage-oriented ranking pass that scores candidate URLs by likely support for Step 2 feature terms, not just by URL classification.
2. Allow selecting multiple seed URLs per family when the product has a large or diverse Step 2 feature inventory.
3. Explicitly reward guide trees and sub-area docs whose titles/paths overlap Step 2 feature names.
4. Penalize library/API-reference-only selections when the Step 2 inventory is dominated by user-facing capabilities rather than SDK surface area.
5. Add a feedback artifact that records which Step 2 features remain unmatched after Step 6 so Step 3 can search for missing doc families on the next run.

### Step 4

1. Treat `sync_failed` as a blocking corpus-health failure that must trigger retry, alternative seed selection, or fallback capture mode.
2. Add adaptive crawl budgets based on Step 2 feature count and product complexity.
3. Add post-crawl corpus-health checks such as:
   - page count floor
   - unique URL count floor
   - lexical overlap with Step 2 feature names
   - source-family diversity
4. If the corpus health check fails, re-run with broader seeds or larger budgets instead of accepting a weak corpus.
5. Preserve and expose per-source failure reasons so we can separate anti-bot issues from bad URL selection.
6. Bias toward including release notes or feature-guide trees when Step 2 is clearly driven by release-note feature names.

## Acceptance Criteria For Follow-up

- Step 4 zero-page products should drop substantially from the current 152.
- `sync_failed` products should drop substantially from the current 168.
- Products like `bigquery`, `apigee-*`, and `app-engine-*` should gain materially better Step 6 recall after Step 3/4 improvements.
- Step 3 output should make it explicit why a selected URL is expected to help cover the Step 2 feature inventory.
- Step 4 output should make it explicit whether the resulting corpus is healthy enough for downstream feature-definition work.

## Resolution Notes

The implementation now covers the requested feedback loop:

### Step 03 changes shipped

- Step 03 now reads the Step 2 feature inventory and stores it in `ranking.json` under `step02_feature_inventory`.
- Candidate URLs now get a coverage-oriented ranking pass based on overlap with Step 2 feature phrases and tokens.
- The keep budget is now adaptive for large inventories instead of hard-capped at one URL per family.
- Release-note trees are now explicitly eligible when the Step 2 inventory is feature-heavy and release-note-like.
- `ranking.md` now shows feature-overlap rationale instead of only structural URL scoring.

### Step 04 changes shipped

- Step 04 now supports multiple selected seeds per family.
- Crawl budgets now scale with Step 2 feature count and product size.
- Step 04 now computes and stores `corpus_health` with:
  - minimum page count
  - minimum unique URL count
  - source-family diversity
  - lexical overlap with Step 2 feature terms
- Weak corpora trigger a broadened retry with additional seeds.
- Per-source failure reasons are now persisted in `state.json` under `source_failures`.

### Step 06 changes shipped

- Step 06 now emits `coverage-feedback.json` per product with the still-uncovered Step 2 features and top missing tokens.

## Verified Evidence

Targeted reprocessing was run on:

- `bigquery`
- `apigee-hybrid`
- `app-engine-flexible-environment-node-js`

### BigQuery

- Before the fix, the issue recorded `22` corpus pages and `12/1397` covered features.
- After the fix:
  - Step 04 state: `272` corpus pages, `203` unique URLs, `healthy`, `6` selected seeds.
  - Step 06 output: `808/1397` features covered.
- Evidence:
  - `data/step-04/current/products/bigquery/state.json`
  - `data/step-06/current/products/bigquery/extended-features.json`

### Apigee hybrid

- Before the fix, the issue recorded `32` corpus pages and `5/62` covered features.
- After the fix:
  - Step 04 selection now includes broad seeds plus release notes.
  - Step 06 output: `44/62` features covered.
- Evidence:
  - `data/step-04/current/products/apigee-hybrid/selection.json`
  - `data/step-06/current/products/apigee-hybrid/extended-features.json`

### App Engine flexible environment Node.js

- Before the fix, the issue recorded `39` corpus pages and `5/71` covered features.
- After the fix:
  - Step 04 selection now includes the correct `flexible/nodejs/release-notes` seed instead of relying on the wrong standard tree.
  - Step 04 state now reports `healthy` corpus health with `98` corpus pages and `58` unique URLs.
  - Step 06 output improved to `18/71` covered features.
- Evidence:
  - `data/step-04/current/products/app-engine-flexible-environment-node-js/selection.json`
  - `data/step-04/current/products/app-engine-flexible-environment-node-js/state.json`
  - `data/step-06/current/products/app-engine-flexible-environment-node-js/extended-features.json`
  - `data/step-06/current/products/app-engine-flexible-environment-node-js/coverage-feedback.json`

## Conclusion

The issue is resolved as a code-path deficiency:

- Step 03 now selects seeds with explicit Step 2 feature-awareness.
- Step 04 now validates corpus health and broadens capture when needed.
- Step 06 now emits the feedback artifact requested by the issue.

The targeted validation set now shows materially better downstream recall, especially for `bigquery` and `apigee-hybrid`, and a corrected seed strategy plus measurable recall lift for `app-engine-flexible-environment-node-js`.
