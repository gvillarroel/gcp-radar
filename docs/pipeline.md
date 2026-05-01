# Pipeline Detail

## Purpose

This document explains the execution model of `gcp-radar` in operational
terms: what each step consumes, what it produces, and how later stages feed
back into earlier ones.

## Pipeline Overview

```mermaid
flowchart LR
    S1["Step 01\nAcquire source snapshots"] --> S2["Step 02\nBuild per-product feature inventories"]
    S2 --> S3["Step 03\nRank official documentation URLs"]
    S3 --> S4["Step 04\nCapture curated documentation corpora"]
    IAM["Google Cloud IAM\nvia gcloud"] --> S5["Step 05\nMaterialize IAM inventory"]
    S4 --> S6["Step 06\nGenerate extended feature definitions"]
    S5 --> S7["Step 07\nQuality gate"]
    S6 --> S7
    S7 --> S8["Step 08+\nCards, artifacts, and reports"]
```

## Index Semantics

`current/index.json` files are latest-run indexes. They describe the most recent
stage invocation, which can be a targeted product subset.

The on-disk workspace inventory is the set of product outputs under each
stage's documented `current/` layout. Progress summaries must label which view
they are using.

## Step 01

### Goal

Capture raw official source material into a stable local snapshot that can be
replayed and audited.

### Typical Inputs

- official Google release notes
- official product feeds or source pages

### Typical Outputs

- raw machine-readable snapshots under `data/step-01/`
- normalized source inventories for later steps

### Quality Bar

- deterministic enough to rerun
- explicit source provenance
- no silent dependency on manual browsing state

## Step 02

### Goal

Convert raw source signals into per-product feature inventories.

### Typical Inputs

- Step 01 snapshots

### Typical Outputs

- one markdown file per product under `data/step-02/current/`
- per-product feature counts, summaries, and date signals

### Why It Matters

Step 02 is the first place where product identity becomes concrete. Later
stages depend on it for query generation, coverage hints, and product-family
specific filtering.

## Step 03

### Goal

Find the best official documentation roots and references for each product.

### What It Actually Does

Step 03 is not a full crawler. It is a ranking stage.

It tries to answer:

- What page should represent the product root?
- What page should represent the main product reference?
- What API, IAM, Python, and Java pages are worth keeping?
- Which URLs are official but actually belong to a neighboring product?

### Inputs

- Step 02 feature inventories
- official Google web search results

### Outputs

- `ranking.json`
- `ranking.md`
- global Step 03 index

### Key Heuristics

- prefer crawlable parent pages over deep leaves
- prefer official roots on `docs.cloud.google.com` and `developers.google.com`
- penalize cross-product contamination
- use Step 02 vocabulary to reward feature-aligned pages

### Known Risk

A page can be official and still be a bad seed for corpus building if it is too
narrow, too deep, or not representative of the product.

## Step 04

### Goal

Build a practical documentation corpus for each product from the Step 03
ranking.

### What It Actually Does

Step 04 selects a small number of seeds by family and captures pages through
`know`.

The main concern is not maximum crawl volume. It is useful coverage with low
contamination.

### Inputs

- Step 03 rankings
- Step 02 feature inventory for budget shaping

### Outputs

- `selection.json`
- `state.json`
- per-product `corpus/`
- global Step 04 index

### Operational Signals

- `source_failures`
- `selected_sources_signature`
- `corpus_health`

These fields matter because they make failures reproducible and show whether a
reprocess changed the selected documentation surface.

## Step 05

### Goal

Collect IAM role and permission information directly from Google Cloud tooling.

### Inputs

- authenticated Google Cloud CLI access
- `gcloud iam roles list`
- `gcloud iam roles describe`

### Outputs

- machine-readable IAM inventories under `data/step-05/`

### Why It Exists Separately

Some IAM information is better captured from live tooling than from product
documentation alone.

## Step 06

### Goal

Generate extended feature definitions backed by the documentation corpus.

### Inputs

- Step 02 feature inventories
- Step 04 corpora

### Outputs

- `extended-features.json`
- `coverage-feedback.json`
- per-product state in `data/step-06/`

### What Makes Step 06 Valuable

Step 06 is both an extraction stage and a measurement stage.

It tells us:

- which features have support
- which features remain uncovered
- which tokens or concepts are missing from the current corpus

That feedback is what drives the improvement loop for Steps 03 and 04.

## Step 07

### Goal

Evaluate Step 06 feature definitions before any artifact promotion.

### Inputs

- Step 06 `extended-features.json` files
- Step 04 corpus pages for selected evidence checks

### Outputs

- `gate.json`
- `gate.md`
- global Step 07 latest-run index
- global triage artifacts:
  - `data/step-07/current/triage.json`
  - `data/step-07/current/triage.md`

### What Makes Step 07 Valuable

Step 07 separates "generated" from "acceptable for promotion".

It records:

- product-level pass or fail status
- feature-level failures and warnings
- exact rule identifiers
- suggested upstream stages for repair

A passing gate is still not final source-of-truth acceptance. Warnings must be
reviewed before promotion into `artifacts/`.

### Triage Workflow

Run `scripts/step-07/summarize-quality-gate-triage.mjs` after any Step 07
evaluation. The triage output groups findings by product, rule, severity,
suggested upstream step, and failing feature. Use it to choose targeted repair
batches instead of reading every product gate manually.

Repair order should follow failing product count first, then project priority.
For this cycle the priority order is Spanner, Dialogflow, Google Distributed
Cloud VMware, Cloud Logging, Google Meet, App Engine Java, and then remaining
one-failure products.

Do not lower Step 07 fail thresholds to make failures disappear. Fix the
upstream evidence path:

- if exact identifier evidence exists in Step 04, tune Step 06 ranking or final
  source-link selection
- if product-specific evidence is missing from Step 04, improve Step 03 seeds or
  Step 04 capture
- if official evidence uses an equivalent spelling, add a narrowly scoped
  identifier or dedicated-evidence variant

Warnings remain promotion-review input even when all failures are cleared.

## Feedback Loop

```mermaid
flowchart TD
    A["Step 02 feature inventory"] --> B["Step 03 ranked documentation seeds"]
    B --> C["Step 04 corpus capture"]
    C --> D["Step 06 extended feature definitions"]
    D --> E["coverage-feedback.json"]
    D --> G["Step 07 gate findings"]
    E --> F["Missing themes, missing auth pages, weak roots, weak references"]
    G --> F
    F --> B
    F --> C
    F --> D
```

## Promotion Path

The later stages turn intermediate research into durable outputs.

```mermaid
flowchart LR
    A["data/step-06 feature outputs"] --> B["Step 07 quality gate"]
    B --> C["Step 08 cards"]
    C --> D["Step 09 promotion review"]
    D --> E["artifacts/<product>/<feature>/"]
    E --> F["Step 10 radar reports"]
```

## Step 08

### Goal

Build product and feature cards from generated definitions, gate findings, IAM
inventory, and corpus provenance.

### Inputs

- Step 06 extended feature definitions
- Step 07 gate outputs
- Step 05 IAM inventory
- Step 04 corpus metadata

### Outputs

- `data/step-08/current/products/<product-slug>/card.json`
- `data/step-08/current/products/<product-slug>/card.md`

### Quality Bar

IAM data must be explicitly classified as `explicit`,
`derived_from_permission_prefix`, or `unknown`.

Each feature card must carry the IAM detail required by downstream artifacts:
explicit roles, explicit permissions, derived roles, derived permissions, and
any role or permission mentions that were not found in the Step 05 inventory.
Only explicit mappings may be treated as evidence-backed required IAM for the
feature. Derived mappings are related IAM signals and must be labeled as such.

## Step 09

### Goal

Promote validated card content into source-of-truth artifacts.

### Inputs

- Step 08 product cards

### Outputs

- `artifacts/<product-slug>/<feature-slug>/README.md`
- `artifacts/<product-slug>/<feature-slug>/card.json`
- `artifacts/<product-slug>/card.json`
- `artifacts/<product-slug>/index.md`
- `data/step-09/current/index.json`

### Quality Bar

Promotion requires Step 07 pass status, official Google evidence links, a
non-empty summary, and no unaccepted blocking warning class.

For every processed product, Step 09 prunes feature directories under
`artifacts/<product-slug>/` that are not part of the current promotion manifest.
This keeps the artifact inventory coherent when a previously promoted feature
becomes skipped after gate, source, or warning-policy changes.

When `GCP_RADAR_STEP09_PRODUCTS` is used for a targeted rerun, the processing
scope is limited to the requested products, but the Step 09 index is reconciled
from the complete promoted artifact inventory after the run. The index fields
`processed_product_count` and `processed_products` record the latest run scope;
the `products` list remains the full promoted artifact inventory required by
final-output validation.

Promoted feature documentation must include an IAM section. That section must
list explicit roles and permissions when the evidence supports them. If the
mapping is derived or unknown, the artifact must say so directly and avoid
presenting derived IAM data as a required access grant.

## Step 10

### Goal

Generate final radar reports from promoted artifacts only.

### Inputs

- promoted artifact cards under `artifacts/`

### Outputs

- `radar/index.md`
- `radar/services/index.md`
- `radar/products/<product-slug>.md`
- `radar/iam/index.md`
- `radar/security/index.md`
- `radar/coverage.md`

Product reports must include feature-level IAM detail, not just aggregate IAM
counts. Each feature row should show the mapping status, roles, permissions,
coverage, and official evidence links. Explicit IAM values and derived IAM
signals must be shown in separate columns so derived permission-prefix matches
are not presented as feature requirements. `radar/iam/index.md` must aggregate
the same promoted feature-level role and permission details across products.

Step 10 fails before rewriting reports if a promotion manifest points at an
incomplete promoted artifact inventory. A promoted product must have
`artifacts/<product-slug>/card.json`, and every promoted feature listed in the
manifest must have both `artifacts/<product-slug>/<feature-slug>/card.json`
and `artifacts/<product-slug>/<feature-slug>/README.md`.

During regeneration, Step 10 removes stale Markdown files directly under
`radar/products/` when they do not correspond to a currently promoted artifact
product. That keeps the product report directory aligned with the promoted
source-of-truth inventory before final-output validation runs.

Final validation checks the report boundary after Step 10. The promoted product
directories under `artifacts/`, the Step 09 promotion index, the product reports
under `radar/products/`, and `data/step-10/current/index.json` must describe
the same product inventory and feature counts. Stale or missing product reports
fail validation. The Step 09 index must record the same Step 08 root and
artifacts root being validated, use the current Step 09 schema version, and its
product list must not contain duplicate or stale product entries. The Step 10
index must record the same artifacts root and radar root being validated, use
the current Step 10 schema version, and its product report list must not
contain duplicate entries. Radar Markdown links to promoted `artifacts/` content must
resolve to existing files or directories. External HTTP(S) links in generated
radar Markdown and promoted artifact Markdown must point to official Google
hosts. Promoted evidence source links must also use the `http` or `https`
scheme; host-only matches using other URL schemes are not authoritative
evidence. Security capability evidence links embedded in promoted service and
feature artifact cards must also point to official Google URLs using `http` or
`https`. Final validation also rechecks Step 09 promotion eligibility against
the promoted feature card and the product promotion manifest: Step 07 must have
passed, failure count must be zero, a technical summary must be present, source
links must remain official Google URLs, and any warning rule on the feature
must be accepted by the promotion manifest. Every feature listed in a promotion
manifest must have both its promoted `card.json` and `README.md`.
Each promoted feature README must include at least one official Google evidence
link from its promoted feature card so artifact review remains possible from
the human-readable artifact itself.
Each promoted feature README must also keep its IAM mapping status and rendered
IAM detail aligned with its promoted feature card. Explicit role and permission
values must appear in the README when the card classifies the mapping as
explicit, and derived or unknown mappings must retain their qualifier text.
Each promoted feature README must also keep its product name, feature slug,
coverage status, and rendered lifecycle lines aligned with its promoted feature
card.
Promoted service and feature artifact cards must use embedded slugs that match
their artifact path and promotion manifest. Their `source_step08_card`
provenance must match the canonical Step 08 product card path being validated
and resolve to an existing card. Their source-backed service and feature
payload fields must also match that Step 08 card so final validation catches
artifact drift that would otherwise keep valid-looking provenance. Promotion
manifests must use a product slug, service-card path, promoted feature count,
feature slugs, artifact paths, and `source_step08_card` provenance that match
the containing artifact directory.
Promotion manifests must also keep skipped feature counts aligned with the
skipped feature list and must not list the same feature slug as both promoted
and skipped.
Promotion manifests must also keep product and feature names aligned with the
promoted cards and the canonical Step 08 card, since Step 10 uses those labels
when rendering final radar reports.
Product artifact indexes and product reports must link every promoted feature
README for their product. Product artifact indexes must also link the promoted
service card. Product artifact indexes must keep their rendered title, Step 08
provenance, summary fields, and feature link labels aligned with the promotion
manifest, promoted service card, and canonical Step 08 product card. Product
reports must also link the promoted service card and product artifact index,
and their promoted and skipped feature summary counts must match the promotion
manifest. Product reports must include at least one official Google evidence
link from each promoted feature card so evidence review can be done from the
final radar output. Product artifact indexes and product reports must not retain
feature README links that are no longer in that product's promotion manifest.
The fixed Step 10 report paths recorded in `data/step-10/current/index.json`
must match the canonical radar report layout and resolve to existing files.
Product reports and the IAM report must retain
separate explicit and derived IAM columns. The IAM report must link every
promoted feature artifact and must not retain stale feature artifact links.
Its rows must also match the promoted feature cards for product name, IAM
mapping status, explicit roles, explicit permissions, derived roles, and
derived permissions. Product report feature rows must also match promoted
feature cards for IAM mapping status, explicit roles, explicit permissions,
derived roles, derived permissions, coverage status, and rendered source links.
Product report title, latest feature date, and service IAM status summary must
also match the promoted artifact manifest and service card.
The services report must link every promoted product service card and must not
retain service-card links outside the promoted artifact inventory. When a
promoted service card has official
Google source links, the services report must include at least one of those
service evidence links. Each services report row must keep status, promoted
feature count, latest feature date, IAM counts, and rendered official source
links aligned with the promoted service card and promotion manifest. The root
radar index must link every promoted
product report and service card, must not retain stale product or service-card
links outside the promoted artifact inventory, and must keep its service-card
and promoted-feature summary counts aligned with promoted artifacts. Root
index product rows must also match promoted artifacts for product name,
promoted feature count, latest feature date, product report link, and
service-card link.
The coverage report must include product slugs and must keep promoted,
skipped, explicit IAM, derived IAM, and unknown IAM counts aligned with the
promoted artifact manifests and feature cards.
The security report must link every promoted feature with security capability
signals, must not retain stale feature artifact links, and must include
official Google evidence links for those signals when promoted feature cards
provide them. Its table rows must also keep the product name, capability list,
and rendered evidence links aligned with the promoted feature cards.

## Practical Lessons

- Step 03 quality dominates Step 04 usefulness.
- Step 04 seed choice matters more than raw crawl count.
- Step 06 is the best early warning system for weak documentation selection.
- Step 07 warnings are useful even when a product passes the gate.
- Latest-run indexes should not be used as catalog-wide progress summaries
  unless the run was full-catalog.
- Product-family-specific rules are required for large Google documentation
  surfaces such as App Engine, Vertex AI, Workspace APIs, and Apigee.

## Reading Path For Contributors

1. Read this document.
2. Read [Repository Map](C:/Users/villa/dev/gcp-radar/docs/repository-map.md).
3. Read the README under the step you are changing.
4. Check active issues under `.specs/issues/` before changing pipeline logic.
