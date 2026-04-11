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

## What We Learned

The current Step 03 implementation has shown a few repeatable patterns:

- parent documentation roots are usually better Step 04 seeds than deep guide or class-level pages
- some products require host-specific handling, especially `developers.google.com/workspace`, `developers.google.com/maps`, and `developers.google.com/earth-engine`
- the same query strategy does not work for every product family; family-specific query templates and exclusions materially improve ranking quality
- false IAM candidates are common for products with overlapping names, so Step 03 must explicitly filter adjacent-product pages
- Step 02 feature inventories are useful as ranking signals because they help distinguish broad but relevant pages from unrelated official pages

Step 03 should therefore be treated as a learned ranking system, not as a one-time search dump.
