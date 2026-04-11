# Step 04 Data

This directory stores data for workflow Step 04.

Step 04 currently materializes a per-product official documentation corpus from the best Step 03 URLs by using the `know` tool.

Current canonical output layout:

- `current/index.json` for the Step 04 corpus index
- `current/products/<product-slug>/selection.json` for the selected seed URLs and crawl settings
- `current/products/<product-slug>/state.json` for the rescrape skip state
- `current/products/<product-slug>/corpus/metadata.yaml` for the product-local `know` key metadata
- `current/products/<product-slug>/corpus/site/<source-id>/pages.json` for the captured page inventory
- `current/products/<product-slug>/corpus/site/<source-id>/pages/*.md` for captured page text
- `current/products/<product-slug>/corpus/site/<source-id>/source-metadata.yaml` for minimal source-level sync metadata

Each product corpus currently contains:

- the Step 03 ranking input path
- the selected official Google seed URLs
- one crawl budget per selected source family
- synchronized multi-page captures produced by `know sync`
- compact `site` output by default, keeping only final Markdown pages plus source metadata

Operational note:

- for `docs.cloud.google.com`, Step 04 can run in browser-assisted mode by setting `KNOW_SITE_CDP_URL` to a live Chrome or Brave DevTools endpoint
- in that mode, `know` reuses the browser session cookies during site sync, which reduces CAPTCHA or `sorry` responses and preserves multi-page capture reliability
- anti-bot responses are treated as sync failures so a blocked run does not overwrite an already healthy corpus

These outputs are still intermediate workflow data.
They are the local documentation corpus used by later extraction and validation stages, not yet validated source-of-truth artifacts.

## What We Learned

The current Step 04 runs have established a few practical rules:

- Step 04 failures are often seed-quality problems, not crawler-capacity problems
- broad roots plus narrow reference seeds work better than a single "best" URL
- products on Google developer hosts can sync successfully, but they are more sensitive to bad intermediate hub pages than `docs.cloud.google.com`
- preserving `source_failures`, `selected_sources_signature`, and `corpus_health` makes it possible to improve the pipeline incrementally without losing reproducibility
- a successful sync is not enough by itself; the captured corpus must still be checked for breadth, diversity, and feature-token overlap before Step 06 consumes it

In practice, Step 04 should be treated as corpus curation with capture state, not only as a scraping stage.
