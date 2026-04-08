# ADR 0012: Step 06 Corpus-Backed Feature Definition Extension

## Status

Accepted

## Context

Step 02 currently produces a broad per-product feature inventory derived from release notes.

Step 04 currently materializes a per-product official documentation corpus.

The workflow still lacked a canonical stage that merges those two assets into a richer feature inventory that:

- keeps the Step 02 feature list as the starting point
- finds official documentation pages that materially help define each feature
- records the real official documentation URLs that support each definition
- produces a richer per-feature definition before formal validation and artifact promotion

The repository also needs this stage to be product-scoped and scriptable so it can be piloted on one product such as `bigquery` before expanding to the full catalog.

## Decision

Adopt Step 06 as a corpus-backed feature-definition extension stage.

For each product:

- read the canonical Step 02 markdown inventory
- read the Step 04 product corpus pages and their frontmatter metadata
- use `pi` to extract discriminative per-feature keyword phrases
- rank likely documentation pages for each feature with deterministic lexical scoring
- re-rank shared pages by reviewing competing features against the same page
- synthesize an extended feature definition backed by the real official documentation URLs

Adopt the following Step 06 output layout:

- `data/step-06/current/index.json`
- `data/step-06/current/products/<product-slug>/extended-features.json`
- `data/step-06/current/products/<product-slug>/extended-features.md`
- `data/step-06/.state/current/products/<product-slug>/state.json`

Each Step 06 feature entry should contain:

- the Step 02 feature identity and summary
- the discriminative keyword phrases used for matching
- the candidate documentation pages considered
- the final supporting pages selected after reranking
- a coverage status for the resulting definition
- the extended definition text
- the real official documentation URLs used as evidence

## Consequences

Benefits:

- the workflow now has a canonical merge point between release-note feature discovery and documentation-backed definition building
- downstream validation can review explicit feature-to-document mappings instead of rediscovering them
- the real official URLs remain attached to each enriched definition
- the stage is product-scoped, which supports iterative rollout starting with `bigquery`

Costs:

- Step 06 depends on `pi` for keyword extraction and definition synthesis
- lexical ranking plus page-level reranking is heuristic and may still miss weakly named features
- products with sparse or noisy Step 04 corpora will still produce uncovered features that need later validation or corpus improvement
