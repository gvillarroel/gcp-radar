# ADR 0009: Step 04 Know-Based Documentation Corpus Capture

## Status

Accepted

## Context

Step 03 produces scored official Google documentation URLs per product.

The next practical stage needs more than a ranking.
It needs a materialized documentation corpus that later extraction and validation stages can inspect repeatedly without re-running web discovery every time.

The repository also needs Step 04 to:

- keep scraping scoped to official Step 03 URLs
- organize captured documentation by product
- preserve synchronized page captures and source metadata
- avoid repeated scraping when the selected seed URLs have not changed
- reduce duplicate crawling caused by overlapping Step 03 candidates

The repository already uses the `know` tool in the broader workspace for reproducible source registration, sync, and export.

## Decision

Adopt `know` as the canonical Step 04 capture mechanism.

For each Step 03 product ranking:

- select one highest-value official seed URL per crawl family
- use a dedicated per-product `know` store under `data/step-04/current/products/<product-slug>/`
- create a local `know` key named `corpus`
- register only the selected site sources for that product
- delete previously registered site sources that are no longer selected
- synchronize only when the selected source signature has changed, when a source has never been synced, or when reprocessing is explicitly requested
- export the synchronized sources in-place inside the product-local `know` store

Adopt the following Step 04 output layout:

- `data/step-04/current/index.json`
- `data/step-04/current/products/<product-slug>/selection.json`
- `data/step-04/current/products/<product-slug>/state.json`
- `data/step-04/current/products/<product-slug>/corpus/metadata.yaml`
- `data/step-04/current/products/<product-slug>/corpus/site/<source-id>/pages.json`
- `data/step-04/current/products/<product-slug>/corpus/site/<source-id>/pages/*.md`
- `data/step-04/current/products/<product-slug>/corpus/site/<source-id>/source-metadata.yaml`

The selected crawl families are currently:

- `docs_root`
- `docs_reference`
- `api_reference`
- `iam_reference`
- `python_reference`
- `java_reference`

Step 04 source deduplication is currently handled in two ways:

- select at most one Step 03 URL per crawl family
- skip re-sync when the normalized selected-source signature is unchanged

For Step 04 `site` sources, prefer compact output:

- store final page Markdown with frontmatter under `pages/`
- store one `pages.json` index per source
- store one `source-metadata.yaml` file per source
- do not retain verbose per-page JSON sidecars or exported `library/` copies in the Step 04 corpus

For Google documentation hosts that rate-limit automated requests, Step 04 may run `know` in browser-assisted mode:

- launch a real Chrome or Brave session with remote debugging enabled
- set `KNOW_SITE_CDP_URL` to the live DevTools endpoint
- let `know` reuse browser cookies during `site` sync

For `docs.cloud.google.com`, this browser-assisted HTTP crawl is preferred over deep crawl because it preserves the intended documentation subtree more reliably and reduces anti-bot failures from the same machine.

## Consequences

Benefits:

- Step 04 now materializes a reusable official documentation corpus per product
- later extraction can read stable local files instead of re-crawling the web
- `know` preserves synchronized page captures in a stable per-product store
- repeated runs converge and skip unnecessary scraping work
- browser-assisted capture can recover multi-page sync on Google documentation hosts that block unauthenticated automation
- anti-bot pages no longer overwrite a previously healthy corpus

Costs:

- per-product stores duplicate some `know` metadata files
- overlapping documentation can still appear across selected crawl families
- later cleanup and validation stages still need to classify low-value or off-target pages
- browser-assisted capture requires an operator-managed local browser session when the host blocks normal automation
