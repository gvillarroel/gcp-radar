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
- IAM role and permission mappings for each feature
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
- `data/step-02/current/<product-slug>.md`
- `data/step-02/.state/current/assistant-results.json`
- `data/step-02/.state/current/product-state.json`

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

- `data/step-02/current/<product-slug>.md`

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
- `data/step-06/current/products/<product-slug>/coverage-feedback.json`
- `data/step-06/current/products/<product-slug>/features/<feature-slug>.md`
- `data/step-06/.state/current/products/<product-slug>/state.json`

Each Step 06 feature entry should contain:

- the Step 02 feature identity and summary
- the keyword phrases used to match documentation pages
- candidate documentation pages and final supporting pages
- a coverage status for the feature definition
- the extended definition text
- the real official documentation URLs used as evidence
- one feature-level Markdown file per Step 02 feature
- coverage feedback for uncovered or weakly covered feature themes

Expected storage location:

- `data/step-06/`

### Step 7: Step 06 Quality Gate

Run a product-level and feature-level quality gate over Step 06 outputs before
promotion to later stages.

This gate should detect:

- unsupported or weakly supported feature definitions
- features backed only by generic or contaminated pages
- exact identifiers that never appear in the cited evidence
- cross-runtime contamination in runtime-specific product families
- features that require upstream fixes in Step 02, Step 03, Step 04, or Step 06

Current canonical Step 07 inputs:

- `data/step-06/current/products/<product-slug>/extended-features.json`

Current canonical Step 07 output layout:

- `data/step-07/current/index.json`
- `data/step-07/current/products/<product-slug>/gate.json`
- `data/step-07/current/products/<product-slug>/gate.md`

Each Step 07 product output should contain:

- product-level pass or fail status
- per-feature findings with stable rule identifiers
- explicit failure and warning counts
- suggested upstream steps to improve for each failure class

Expected storage location:

- `data/step-07/`

Step 07 is a quality gate, not final artifact promotion. A passing product can
still carry warnings that need review before source-of-truth acceptance.

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

Current canonical Step 08 inputs:

- `data/step-06/current/products/<product-slug>/extended-features.json`
- `data/step-07/current/products/<product-slug>/gate.json`
- `data/step-05/current/roles/index.json`
- `data/step-05/current/permissions/index.json`
- `data/step-04/current/products/<product-slug>/selection.json`
- `data/step-04/current/products/<product-slug>/state.json`

Current canonical Step 08 output layout:

- `data/step-08/current/index.json`
- `data/step-08/current/products/<product-slug>/card.json`
- `data/step-08/current/products/<product-slug>/card.md`

IAM mapping status must use:

- `explicit` when a role or permission appears in feature evidence and exists in Step 05
- `derived_from_permission_prefix` when only product-level permission prefix association is defensible
- `unknown` when no defensible mapping exists

Every Step 08 feature card must preserve the IAM detail needed for final
review:

- mapping status
- explicit roles found in feature evidence
- explicit permissions found in feature evidence
- derived roles and permissions when only permission-prefix evidence is
  available
- missing roles or permissions that appeared in evidence but were not present
  in the Step 05 inventory

Only `explicit` roles and permissions may be described as evidence-backed
feature requirements. `derived_from_permission_prefix` mappings are related IAM
signals, not confirmed feature requirements. `unknown` means the final output
must state that no defensible IAM mapping was found.

### Step 9: Source-Of-Truth Artifact Organization

Organize validated documentation under `artifacts/` by product and then by feature.

Expected structure:

- `artifacts/<product>/`
- `artifacts/<product>/<feature>/`

Each feature directory should contain the validated documentation for that feature.

This content is the source of truth for final reporting.

Current canonical Step 09 input:

- `data/step-08/current/products/<product-slug>/card.json`

Current canonical Step 09 output layout:

- `data/step-09/current/index.json`
- `artifacts/<product-slug>/card.json`
- `artifacts/<product-slug>/index.md`
- `artifacts/<product-slug>/promotion.json`
- `artifacts/<product-slug>/<feature-slug>/README.md`
- `artifacts/<product-slug>/<feature-slug>/card.json`

When Step 09 is run with a product filter, only the filtered products are
reprocessed. The Step 09 index is still reconciled from the complete promoted
artifact inventory under `artifacts/`, and records the filtered run scope in
`processed_product_count` and `processed_products`.

Features can be promoted only when they pass Step 07, have official Google
evidence links, have a non-empty technical summary, do not carry unaccepted
blocking warnings, and do not contain non-official security capability
evidence links.

Step 09 must also reject a processed product before writing promoted artifacts
when its service card contains source links or security capability evidence
links that are not official Google HTTP(S) URLs.

For each processed product, Step 09 removes stale feature artifact directories
under `artifacts/<product-slug>/` that are not present in the current promotion
manifest. Product artifact directories must therefore contain only the service
card, product index, promotion manifest, and directories for currently promoted
features.

Each promoted feature artifact must include an IAM section that lists the
feature's explicit roles and permissions when available. When IAM is derived or
unknown, the artifact must say that clearly instead of implying a requirement.
Each promoted feature artifact README must also render security capabilities
from the feature card. When a capability carries official Google evidence
links, those links must be visible in the README so security review does not
require opening JSON.

### Step 10: Final Radar Reporting

Generate final reports under `radar/` using the validated content stored in `artifacts/`.

`radar/` is the canonical home for final report outputs.

Current canonical Step 10 inputs:

- `artifacts/<product-slug>/promotion.json`
- `artifacts/<product-slug>/<feature-slug>/card.json`

Current canonical Step 10 output layout:

- `radar/index.md`
- `radar/services/index.md`
- `radar/products/<product-slug>.md`
- `radar/iam/index.md`
- `radar/security/index.md`
- `radar/coverage.md`
- `data/step-10/current/index.json`

Step 10 reports must read from promoted `artifacts/` content only.

Step 10 must fail before rewriting final reports when the promoted artifact
inventory is incomplete. Every product directory under `artifacts/` must have
a promotion manifest, every promoted product must have a service `card.json`
and product `index.md`, and every promoted feature listed in the product
promotion manifest must have its feature `card.json` and `README.md`.
Step 10 must also fail before rewriting reports when promotion manifests or
promoted cards disagree with their artifact paths, including product slugs,
service-card paths, promoted feature counts, duplicate promoted feature slugs,
skipped feature counts, duplicate skipped feature slugs, promoted/skipped
feature overlap, feature artifact paths, embedded feature-card slugs, and
`source_step08_card` provenance pointing to the canonical Step 08 product card.
Step 10 must also fail before rewriting reports when a product artifact
directory contains feature directories that are not listed in the product
promotion manifest's promoted feature inventory.
Step 10 must also fail before rewriting reports when promotion manifests or
promoted service and feature cards drift from the source-backed product,
service, feature-label, IAM, security, lifecycle, evidence, or validation
payloads in the canonical Step 08 card.
Step 10 must also reject promotion manifests, promoted service cards, and
promoted feature cards whose `schema_version` does not match the current Step
09 artifact-promotion schema.
Step 10 must also fail before rewriting reports when promoted service or
feature cards contain source links or security capability evidence links that
are not official Google HTTP(S) URLs.

Step 10 owns the generated Markdown files directly under `radar/products/`.
During report generation, stale product reports that do not match the current
promoted artifact inventory must be removed before new product reports are
written.

The final radar must make IAM review possible from the reports themselves. For
each promoted feature in each product report, Step 10 should show:

- feature name and link to the promoted feature artifact
- IAM mapping status
- explicit roles and permissions associated with the feature
- derived roles and permissions associated with the feature, labeled separately
- coverage status
- official Google evidence links

The IAM report must aggregate the same promoted feature-level role and
permission details across products, with explicit and derived IAM values in
separate columns. Product reports must not reduce IAM to only a product-level
count or a mapping-status label.
The services report must expose official Google evidence links from promoted
service cards, not just source counts, so service-level provenance remains
reviewable from the final radar output.

Final-output validation must confirm that the promoted artifact inventory,
`data/step-09/current/index.json`, `data/step-10/current/index.json`, and
`radar/products/*.md` agree exactly. Stale product reports, missing product
reports, mismatched Step 09 or Step 10 counts, and radar references to
intermediate `data/step-*` paths are validation failures. The Step 09 index
must use the current Step 09 schema version, record the same Step 08 root and
artifacts root that final-output validation is checking, and its product list
must not contain duplicate or stale entries. The Step 10 index must also use
the current Step 10 schema version, record the same artifacts root and radar
root that final-output validation is checking, and its product report list must
not contain duplicate entries.
The Step 08 index must use the current Step 08 schema version, record the same
Step 08 output root that final-output validation is checking, and keep its
product inventory, feature totals, IAM status totals, card paths, and
per-product summary fields aligned with the generated Step 08 product cards.
The fixed Step 10 report paths recorded in `data/step-10/current/index.json`
must match the canonical radar report layout and resolve to existing files.
Every external HTTP(S) link in generated radar Markdown must resolve to an
official Google host.
Every external HTTP(S) link in promoted artifact Markdown must resolve to an
official Google host.
Promoted evidence source links must also use the `http` or `https` scheme;
host-only matches using other URL schemes are not authoritative evidence.
Security capability evidence links embedded in promoted service and feature
artifact cards must also use `http` or `https` official Google URLs.
Promoted feature cards must still satisfy the Step 09 promotion eligibility
contract during final-output validation: Step 07 must have passed, failure
count must be zero, a technical summary must be present, source links must be
official Google URLs, and any warning rules on the promoted feature must be
listed in the product promotion manifest's accepted warning rules.
Every feature listed in a promotion manifest must have both a promoted
`card.json` and `README.md` artifact.
Each promoted feature README must include at least one official Google evidence
link from its promoted feature card so artifact-level review can verify the
feature without opening JSON.
Each promoted feature README must also keep its IAM mapping status and rendered
IAM detail aligned with its promoted feature card, including explicit roles and
permissions, derived IAM qualifiers, and unknown-IAM qualifiers.
Each promoted feature README must also keep its rendered product name, feature
slug, coverage status, and lifecycle lines aligned with its promoted feature
card so human-readable artifacts cannot drift from their canonical JSON cards.
Each promoted feature README must also keep its rendered security capability
names and official Google security evidence links aligned with its promoted
feature card.
Promoted service and feature artifact cards must keep their embedded slugs
consistent with their artifact path and promotion manifest so final reports
cannot aggregate a card under the wrong product or feature identity. Their
`source_step08_card` provenance must also match the canonical Step 08 product
card path being validated and resolve to an existing card.
Promotion manifests, promoted service cards, and promoted feature cards must
use the current Step 09 artifact-promotion schema version.
Promoted service and feature artifact cards must also keep their source-backed
payload fields aligned with that Step 08 product card, so the source-of-truth
artifact layer cannot drift from the validated card-construction stage while
retaining correct-looking provenance.
Each product promotion manifest must also keep its embedded product slug,
service-card path, promoted feature count, promoted feature slugs, promoted
artifact paths, and `source_step08_card` provenance consistent with the
artifact directory that contains it. Its skipped feature count must also match
the skipped feature list, and a feature slug must not appear in both the
promoted and skipped feature lists.
Promotion manifests must also keep their rendered product name and promoted or
skipped feature names aligned with the promoted artifact cards and canonical
Step 08 product card, because those manifest labels feed final radar reports.
Each product artifact index must link every promoted feature README for that
product, must link the promoted service card, and must not link feature README
files or service-card paths outside the product's promotion manifest.
Each product artifact index must also keep its product title, Step 08
provenance line, promoted feature count, Step 07 status, corpus health, latest
feature date, official source-link count, and feature link labels aligned with
the promotion manifest, promoted service card, and canonical Step 08 product
card.
Radar Markdown links that target promoted `artifacts/` content must resolve to
existing files or directories. Each product report must also link every
promoted feature README for that product, must include at least one official
Google evidence link from each promoted feature card, must link the promoted
service card and product artifact index, must keep its promoted and skipped
feature summary counts aligned with the promotion manifest, and must not link
feature README files outside the product's promoted feature inventory. Product
reports and the IAM report must keep explicit IAM evidence separate from
derived IAM signals. The IAM report must link every promoted feature artifact
and must not retain feature artifact links outside the promoted artifact
inventory. The IAM report rows must also keep each promoted feature's product
name, mapping status, explicit roles, explicit permissions, derived roles, and
derived permissions aligned with the promoted feature card values rendered by
Step 10. Each product report's feature rows must also keep each promoted
feature's IAM mapping status, explicit roles, explicit permissions, derived
roles, derived permissions, coverage status, and rendered source links aligned
with the promoted feature card values. Each product report must also keep its
rendered title, latest feature date, and service IAM status summary aligned
with the promoted artifact manifest and service card. The services report must link every
promoted product service card and must not keep stale service-card links
outside the promoted artifact inventory.
When a promoted service card has official Google source links, the services
report must include at least one of those service evidence links.
Each services report row must keep the service status, promoted feature count,
latest feature date, explicit IAM count, derived IAM count, unknown IAM count,
and rendered official source links aligned with the promoted service card and
promotion manifest.
The root radar index must link every promoted product report and service card,
must not retain stale product or service-card links outside the promoted
artifact inventory, and must keep its service-card and promoted-feature summary
counts aligned with the promoted artifact inventory. Each root index product
row must also keep the product name, promoted feature count, latest feature
date, product report link, and service-card link aligned with promoted
artifacts.
The coverage report must include each promoted product slug and must keep its
promoted, skipped, explicit IAM, derived IAM, and unknown IAM counts aligned
with the promoted artifact manifests and feature cards.
The security report must link every promoted feature artifact that contains
security capability signals, must not retain stale promoted-feature links, and
must include official Google evidence links for those security signals when
the promoted feature card provides them. Each security report row must also
keep the promoted feature's product name, capability list, and rendered
evidence links aligned with the promoted feature card.

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

## Index Semantics

For stages that write `data/step-XX/current/index.json`, the index describes the
latest invocation of that stage. It might be a targeted rerun over a product
subset.

The broader on-disk workspace inventory is the set of product outputs under the
stage's documented `current/` layout. Progress reports must say whether they
are using the latest-run index or a scan of on-disk product outputs.

## Current Near-Term Deliverables

1. Expand Step 05 beyond the current limited IAM sample into the full
   predefined-role inventory.
2. Add a workspace-inventory summary that distinguishes latest-run indexes from
   on-disk product outputs.
3. Triage Step 07 failures, audit Step 07 warnings, and decide which warning
   classes block promotion.
4. Promote a small reviewed product subset into `artifacts/` before attempting
   catalog-wide promotion.
5. Define the first evaluation loop for project-specific skills.

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
- canonical schema for promoted evidence and source provenance
- file conventions within `artifacts/<product>/<feature>/`
- report conventions within `radar/`
- Step 07 failure triage workflow
- Step 07 warning classes that should block promotion
- full-catalog workspace inventory summary format
- evaluation dataset design for Skill Arena
