# Step 03 Data

This directory stores data for workflow Step 03.

Step 03 is currently intended for official documentation URL discovery and scoring.

Current canonical output layout:

- `current/index.json` for the Step 03 ranking index
- `current/products/<product-slug>/ranking.json` for one scored ranking per product
- `current/products/<product-slug>/ranking.md` for a human-readable summary

Each product ranking currently contains:

- the Step 02 source product
- the search rounds and queries used to discover candidate pages
- the official Google URLs found for that product
- a rubric-based classification and quality score for each URL
- a final keep or drop recommendation for later deep crawling

These outputs are intermediate discovery artifacts.
They are useful inputs for Step 04 cleanup, but they are not yet validated source-of-truth artifacts.
