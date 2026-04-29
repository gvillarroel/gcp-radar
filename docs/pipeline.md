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
coverage, and official evidence links. `radar/iam/index.md` must aggregate the
same promoted feature-level role and permission details across products.

During regeneration, Step 10 removes stale Markdown files directly under
`radar/products/` when they do not correspond to a currently promoted artifact
product. That keeps the product report directory aligned with the promoted
source-of-truth inventory before final-output validation runs.

Final validation checks the report boundary after Step 10. The promoted product
directories under `artifacts/`, the product reports under `radar/products/`,
and `data/step-10/current/index.json` must describe the same product inventory
and feature counts. Stale or missing product reports fail validation. Radar
Markdown links to promoted `artifacts/` content must resolve to existing files
or directories. Every feature listed in a promotion manifest must have both its
promoted `card.json` and `README.md`. Product artifact indexes and product
reports must link every promoted feature README for their product and must not
retain feature README links that are no longer in that product's promotion
manifest.

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
