# Project Specs

## Project

`gcp-radar`

## Mission

Build a reliable, evidence-backed, hierarchical knowledge map of Google Cloud Platform products and features using official Google sources.

The repository should gradually produce structured "cards" for GCP products and features that describe:

- product identity
- feature identity
- lifecycle status and dates
- supporting documentation
- security capabilities
- IAM roles and permissions
- relationships to parent products or adjacent features

## Guiding Principles

- Official Google sources are the authority.
- Every important extracted fact should be traceable to evidence.
- The workflow should be scriptable end to end.
- Workflow scripts should default to a CLI-first orchestration style.
- Workflow scripts should favor simplicity, short length, and easy readability over extra robustness when the tradeoff is acceptable.
- Research should accumulate into a reusable local knowledge base.
- Skills used by the project should be evaluated and improved continuously.

## Implementation Pattern

The default implementation pattern is minimal orchestration around external tools.

Prefer:

- thin scripts
- short scripts
- top-to-bottom readability
- direct CLI invocation
- structured capture of command output such as JSON
- minimal in-script logic until additional validation or compatibility logic is required

This pattern is preferred because it makes delegation and orchestration simpler across multiple tools and stages.

## Project Inputs

Expected primary sources include:

- Google Cloud official documentation
- Google Cloud release notes
- official product pages
- official IAM and security documentation
- official API or catalog sources when available
- BigQuery-accessible Google datasets when they are official and relevant

## Target Outputs

The project should eventually generate structured artifacts representing:

- products
- features
- lifecycle metadata
- evidence links
- IAM role mappings
- security capability mappings
- hierarchical product-feature trees

The exact storage format can evolve, but it must remain explicit, script-friendly, and documented through ADRs when decisions are made.

All project data should be stored under `data/`.

Data organization should follow the workflow stages, using step-oriented directories.

Validated source-of-truth documentation should live under `artifacts/`.

Final reports derived from those validated artifacts should live under `radar/`.

## Planned Workflow

### Step 1: Product and Feature Discovery

Identify the initial list of GCP products and features from official Google sources.

The current expected starting point is:

- release notes
- BigQuery-accessible source material if it reflects official Google release-note or catalog data

The first implemented Step 01 source is:

- `bigquery-public-data.google_cloud_release_notes.release_notes`

This step should aim to produce:

- normalized product names
- normalized feature names
- stable IDs when available
- initial lifecycle status
- relevant dates such as launch, deprecation, or discontinuation markers

Expected storage location:

- `data/step-01/`

Expected acquisition contract for the release-notes source:

1. maintain a canonical local file at `data/step-01/raw/google_cloud_release_notes/current/release_notes.parquet`
2. maintain sync state at `data/step-01/raw/google_cloud_release_notes/current/state.json`
3. determine the local cutoff from the canonical local state
4. query only rows newer than that cutoff
5. export the delta to Parquet in a user-controlled GCS bucket
6. download the delta into `data/step-01/raw/google_cloud_release_notes/deltas/<run_id>/`
7. merge the delta into the canonical local Parquet file

When Parquet export requires type normalization for compatibility, the normalization must be applied explicitly and kept stable across runs.

The current incremental cutoff is based on `published_at`.

### Step 2: Product and Feature Segregation

Segregate the Step 01 release-note evidence into stable per-product markdown inventories.

This step should answer:

- which product each release-note row belongs to
- which feature candidate each row most likely describes
- which product-level markdown file should hold that row

Current implemented Step 02 input:

- `data/step-01/raw/google_cloud_release_notes/current/release_notes.parquet`

Current canonical Step 02 output layout:

- `data/step-02/current/index.md`
- `data/step-02/current/products/<product-slug>.md`

Each per-product Step 02 markdown file currently contains:

- the product identity
- one deduplicated row per observed feature candidate
- latest observed feature dates
- deprecation dates when a matching deprecation event is found
- concise feature summaries derived from release-note evidence

Expected storage location:

- `data/step-02/`

### Step 3: Official Documentation URL Discovery

Discover and score the best official Google documentation URLs for each Step 02 product.

This step should identify, when available:

- the product documentation root or overview page
- the best API reference parent page
- the IAM roles and permissions page
- the Python client-library root page
- the Java client-library root page
- other official parent pages that are good seeds for later deep crawling

Current implemented Step 03 input:

- `data/step-02/current/products/<product-slug>.md`

Current canonical Step 03 output layout:

- `data/step-03/current/index.json`
- `data/step-03/current/products/<product-slug>/ranking.json`
- `data/step-03/current/products/<product-slug>/ranking.md`

Each Step 03 per-product ranking should contain:

- the Step 02 product identity
- the search rounds and queries used to discover candidate pages
- the candidate official URLs found
- a rubric-based classification and score for each candidate
- a final keep or drop recommendation for later crawling

Current operational lessons for Step 03:

- prefer crawlable parent documentation roots over deep leaf pages, because Step 04 depends on seeds that can expand into broad product corpora
- treat `developers.google.com` product families as first-class official sources, not only `docs.cloud.google.com`
- use product-family-specific exclusions to avoid false positives from adjacent Google products that share overlapping vocabulary
- prefer real API reference parent pages such as `reference/rest/v3` over intermediate hub pages when the hub pages repeatedly fail in Step 04 sync
- prefer product auth or scope pages as IAM evidence for Workspace-style APIs when Cloud IAM role pages do not exist
- use Step 02 feature inventories to bias Step 03 toward pages that match the product's actual feature surface, not only generic overviews

Expected storage location:

- `data/step-03/`

### Step 4: Documentation Corpus Capture

Materialize a per-product documentation corpus from the best official Step 03 URLs before structured extraction.

This step should:

- select a minimal non-redundant set of Step 03 seed URLs for each product
- crawl those official URLs into a product-assigned folder using the `know` tool
- preserve both the raw synchronized pages and the exported Markdown library
- avoid repeated scraping when the selected seed set has not changed
- record crawl settings and source provenance for later cleanup and validation
- support browser-assisted capture when Google documentation hosts block plain automated scraping

This step should still help surface:

- irrelevant pages that slipped in through navigation or crawl depth
- duplicate or overlapping pages
- pages that belong to a different product or feature
- pages that should be retained as primary evidence versus supporting context

Current canonical Step 04 input:

- `data/step-03/current/products/<product-slug>/ranking.json`

Current canonical Step 04 output layout:

- `data/step-04/current/index.json`
- `data/step-04/current/products/<product-slug>/selection.json`
- `data/step-04/current/products/<product-slug>/state.json`
- `data/step-04/current/products/<product-slug>/corpus/metadata.yaml`
- `data/step-04/current/products/<product-slug>/corpus/site/<source-id>/pages.json`
- `data/step-04/current/products/<product-slug>/corpus/site/<source-id>/pages/*.md`
- `data/step-04/current/products/<product-slug>/corpus/site/<source-id>/source-metadata.yaml`

Each Step 04 per-product corpus should contain:

- the selected Step 03 seed URLs and crawl settings
- the synchronized page captures produced by `know`
- enough state to skip rescraping when the selected source signature is unchanged
- compact site output by default, so the stored corpus is final Markdown plus minimal sync metadata rather than verbose intermediate exports

Current operational guidance for Step 04:

- prefer normal `know` site sync when the target host allows it
- when `docs.cloud.google.com` returns anti-bot or `sorry` pages, run `know` with `KNOW_SITE_CDP_URL` pointed at a live Chrome or Brave session that already has the documentation pages open
- treat anti-bot pages as failed syncs and preserve the previous healthy corpus instead of overwriting it

Current operational lessons for Step 04:

- Step 04 reliability depends heavily on Step 03 seed quality; broad parent pages consistently outperform deep leaf seeds
- browser-assisted capture is often required for Google documentation hosts that block repeated automated syncs
- the best seed is not always the nominal reference hub; some products work better from a specific REST root or overview page
- multi-seed selection per family improves corpus coverage for large products, especially when one seed covers concepts and another covers templates, guides, or reference trees
- failed seeds should be preserved in `source_failures` so they can feed Step 03 ranking improvements instead of being silently discarded
- corpus-health checks are necessary because a successful sync can still produce a weak corpus for Step 06

Expected storage location:

- `data/step-04/`

### Step 5: IAM Role and Permission Inventory

Materialize a reproducible inventory of Google Cloud IAM predefined roles and
their included permissions by using `gcloud`.

This stage exists because the canonical role-to-permission mapping is exposed
directly by Google through IAM role metadata, which is more complete and more
stable for repeated reprocessing than trying to infer the full inventory only
from Step 04 documentation pages.

The first implemented Step 05 source is:

- `gcloud iam roles list`
- `gcloud iam roles describe`

This step should aim to produce:

- the current predefined role inventory exposed by Google Cloud IAM
- the included permissions for each role
- grouped permission indexes in machine-readable formats
- optional Parquet exports for downstream analytics
- enough machine-readable state to rerun the extraction when Google changes the
  role catalog in the future

Expected storage location:

- `data/step-05/`

Current canonical Step 05 output layout:

- `data/step-05/current/index.json`
- `data/step-05/current/state.json`
- `data/step-05/current/roles/index.json`
- `data/step-05/current/roles/items/<role-slug>.json`
- `data/step-05/current/permissions/index.json`
- `data/step-05/current/permissions/groups/<permission-group>.json`
- `data/step-05/current/exports/roles.parquet`
- `data/step-05/current/exports/permissions.parquet`
- `data/step-05/current/exports/role-permissions.parquet`

Expected acquisition contract for the Step 05 IAM source:

1. list the current predefined roles with `gcloud iam roles list --format=json`
2. compare the listed role metadata against the cached local inventory
3. re-describe only new or changed roles by running `gcloud iam roles describe`
4. preserve the current described role payloads locally under `roles/items/`
5. regenerate the JSON indexes and optional Parquet exports from the full local
   inventory
6. allow a full refresh with an explicit reprocess flag

Each Step 05 role document should contain:

- the canonical role name
- the title, description, and stage
- the included permissions grouped by permission prefix
- the extraction metadata needed to trace the `gcloud` command output

The Step 05 permission-group JSON files should contain:

- the permission prefix
- the full set of permissions observed for that prefix
- the roles that currently include each permission

Later product or feature mapping stages may consume this global IAM inventory
alongside the Step 04 documentation corpus, but Step 05 itself is the
reproducible extraction of the authoritative IAM catalog.

### Step 6: Corpus-Backed Feature Definition Extension

Extend the Step 02 feature inventory by combining it with the Step 04 official documentation corpus.

This step should:

- keep the Step 02 feature list as the feature spine for the product
- extract discriminative keyword phrases for each feature
- rank likely Step 04 documentation pages that help define each feature
- re-rank shared candidate pages when several features compete for the same page
- synthesize an extended feature definition backed by real official documentation URLs from the Step 04 frontmatter

Current canonical Step 06 inputs:

- `data/step-02/current/<product-slug>.md`
- `data/step-04/current/products/<product-slug>/corpus/site/*/pages.json`
- `data/step-04/current/products/<product-slug>/corpus/site/*/pages/*.md`

Current canonical Step 06 output layout:

- `data/step-06/current/index.json`
- `data/step-06/current/products/<product-slug>/extended-features.json`
- `data/step-06/current/products/<product-slug>/extended-features.md`
- `data/step-06/.state/current/products/<product-slug>/state.json`

Each Step 06 feature entry should contain:

- the Step 02 feature identity and summary
- the keyword phrases used to match documentation pages
- candidate documentation pages and final supporting pages
- a coverage status for the feature definition
- the extended definition text
- the real official documentation URLs used as evidence

Expected storage location:

- `data/step-06/`

### Step 7: Validation

Validate extracted facts against source evidence.

Validation should detect:

- unsupported claims
- ambiguous mappings
- stale lifecycle assumptions
- conflicting documentation

Expected storage location:

- `data/step-07/`

Validated documentation that is accepted as correct should then be promoted into `artifacts/`.

### Step 8: Card Construction

Build a hierarchical card or map for each product.

Each card should eventually support:

- parent-child structure
- feature inventory
- source-backed attributes
- IAM and security summaries
- traceability to evidence

Expected storage location:

- `data/step-08/`

### Step 9: Source-Of-Truth Artifact Organization

Organize validated documentation under `artifacts/` by product and then by feature.

Expected structure:

- `artifacts/<product>/`
- `artifacts/<product>/<feature>/`

Each feature directory should contain the validated documentation for that feature.

This content is the source of truth for final reporting.

### Step 10: Final Radar Reporting

Generate final reports under `radar/` using the validated content stored in `artifacts/`.

`radar/` is the canonical home for final report outputs.

### Step 11: Knowledge Capture

Persist reusable research findings in `knowledge/`.

Examples:

- naming conventions
- product aliases
- recurring extraction rules
- source-quality heuristics
- interpretation guidance for Google lifecycle language

### Step 12: Skill Evaluation and Evolution

Use Skill Arena to evaluate and improve the skills created for this repository.

Evaluation outputs should measure whether skills improve:

- extraction quality
- evidence traceability
- mapping accuracy
- workflow reliability

## Suggested Near-Term Deliverables

1. Define the canonical schema for products, features, and evidence.
2. Implement the first `zx` scripts for Step 1 discovery.
3. Define the internal `data/step-XX/` layout for generated cards and intermediate artifacts.
4. Define the promotion rules from `data/step-XX/` outputs into `artifacts/`.
5. Define the final report structure under `radar/`.
6. Define validation checks for lifecycle status and official-source coverage.
7. Define the first evaluation loop for project-specific skills.

## Repository Conventions

- All documentation is written in English.
- All directory names are lowercase.
- Important decisions must be recorded as ADRs.
- Canonical user-facing documentation belongs in `docs/`.
- `docs/README.md` is the official user manual for the project.
- All project data belongs under `data/`.
- Workflow scripts belong under `scripts/step-XX/`.
- Workflow data belongs under `data/step-XX/`.
- Validated source-of-truth documentation belongs under `artifacts/`.
- Final reports belong under `radar/`.
- Research findings that are worth reusing belong in `knowledge/`.
- Workflow changes must update this document.

## Open Questions

These are currently unresolved and should likely become ADRs:

- canonical storage format for cards
- canonical schema for evidence and source provenance
- internal folder structure under `data/step-XX/`
- file conventions within `artifacts/<product>/<feature>/`
- report conventions within `radar/`
- naming conventions for scripts and stages
- evaluation dataset design for Skill Arena
