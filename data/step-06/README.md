# Step 06 Data

This directory stores data for workflow Step 06.

Step 06 currently extends the Step 02 feature inventory by combining it with the Step 04 official documentation corpus.

Current canonical output layout:

- `current/index.json` for the Step 06 product index
- `current/products/<product-slug>/extended-features.json` for the machine-readable extended inventory
- `current/products/<product-slug>/extended-features.md` for the human-readable extended inventory
- `current/products/<product-slug>/features/<feature-slug>.md` for one frontmatter-backed Markdown file per feature
- `.state/current/products/<product-slug>/state.json` for per-product processing state

Each Step 06 product output currently contains:

- the Step 02 and Step 04 input paths used
- the thresholds applied during lexical ranking and reranking
- one entry per Step 02 feature
- `pi`-derived keyword phrases for page matching
- candidate and supporting documentation pages
- a corpus-backed extended definition when supporting documentation was found
- the real official documentation URLs used as evidence links
- one feature-level Markdown document per Step 02 feature

These outputs are still intermediate workflow data.
They are the enriched feature definitions that later validation and artifact-promotion stages should review before promotion into `artifacts/`.
