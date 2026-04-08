# ADR 0008: Step 03 Official URL Ranking

## Status

Accepted

## Context

Step 03 must identify the best official Google documentation entrypoints for each product discovered in Step 02.

The required output is not a synchronized documentation corpus.
The required output is a scored inventory of official URLs that are likely to be the right parent or seed pages for later deep crawling and cleanup.

The repository needs Step 03 to:

- search official Google documentation for each product
- surface likely parent pages such as product documentation roots, API reference roots, IAM role pages, and client-library roots
- classify the quality of those URLs under an explicit rubric
- produce stable enough results that repeated executions converge on the same best candidates

## Decision

Adopt official URL discovery and scoring as the canonical Step 03 contract.

For each Step 02 product:

- run multiple `bx web` query rounds across documentation, API, IAM, Python, and Java intents
- aggregate and deduplicate official Google candidate URLs
- score the best candidates with an API-backed rubric
- retain deterministic fallback scoring for lower-priority candidates
- record the final scored ranking per product

Adopt the following Step 03 output layout:

- `data/step-03/current/index.json`
- `data/step-03/current/products/<product-slug>/ranking.json`
- `data/step-03/current/products/<product-slug>/ranking.md`

Each Step 03 per-product ranking file should contain:

- the Step 02 source product
- the search rounds and queries used
- the candidate official URLs found
- the classification and score assigned to each URL
- the final keep or drop decision for later crawling

## Consequences

Benefits:

- Step 03 stays tightly focused on finding the right official entrypoints
- later stages can crawl only the highest-value URLs instead of broad raw captures
- the scoring rubric is inspectable and repeatable
- repeated query rounds improve coverage and expose unstable candidates

Costs:

- Step 03 depends on web search result quality
- ranking quality still needs iterative tuning as new products are added
- this stage no longer materializes the documentation corpus directly
