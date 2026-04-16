# Step 07 Data

This directory stores data for workflow Step 07.

Step 07 is the quality gate over Step 06 extended feature definitions.

Current canonical output layout:

- `current/index.json` for the product-level Step 07 gate index
- `current/products/<product-slug>/gate.json` for the machine-readable gate
  result
- `current/products/<product-slug>/gate.md` for the human-readable gate result

Each Step 07 product output currently contains:

- product-level pass or fail status
- per-feature pass or fail status
- feature-level findings with rule identifiers
- suggested upstream stages to improve when a feature fails
- aggregate fail and warning counts

These outputs are intended to feed targeted improvements back into:

- Step 02 when the feature inventory shape is wrong
- Step 03 when the wrong official roots were discovered
- Step 04 when the captured corpus is too narrow or too noisy
- Step 06 when the final evidence scoring still overmatches generic pages
