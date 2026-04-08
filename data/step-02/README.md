# Step 02 Data

This directory stores data for workflow Step 02.

Step 02 is currently intended for product and feature segregation.

Current canonical output layout:

- `current/index.md` for the generated product index
- `current/products/<product-slug>.md` for one markdown file per product
- `current/cache/assistant-results.json` for optional cached assistant-derived feature names and summaries

The current Step 02 generator maps each release-note entry from the canonical Step 01 Parquet file to:

- a product
- an inferred feature candidate name
- an inferred one-sentence objective summary

These outputs are intermediate segregation artifacts. They are useful inputs for Step 03 documentation acquisition, but the inferred feature names are not yet canonical validated feature identities.
