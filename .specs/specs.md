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
- Research should accumulate into a reusable local knowledge base.
- Skills used by the project should be evaluated and improved continuously.

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

1. copy the public source table into a timestamped snapshot table in the user's GCP project
2. export the snapshot table to Parquet in a user-controlled GCS bucket
3. download the Parquet shards into `data/step-01/raw/google_cloud_release_notes/<run_id>/`
4. persist a machine-readable manifest beside the downloaded shards

### Step 2: Documentation Mapping

For each discovered product or feature, map the relevant official documentation to the correct entity.

This step should answer:

- which documents belong to which product
- which documents belong to which feature
- whether a document is authoritative, supporting, or ambiguous

Expected storage location:

- `data/step-02/`

### Step 3: Structured Extraction

Extract structured facts from the mapped documentation.

The first-class extraction targets include:

- feature description
- prerequisites
- security characteristics
- IAM roles
- required permissions when explicitly documented
- service relationships
- limitations and status markers

Expected storage location:

- `data/step-03/`

### Step 4: Validation

Validate extracted facts against source evidence.

Validation should detect:

- unsupported claims
- ambiguous mappings
- stale lifecycle assumptions
- conflicting documentation

Expected storage location:

- `data/step-04/`

### Step 5: Card Construction

Build a hierarchical card or map for each product.

Each card should eventually support:

- parent-child structure
- feature inventory
- source-backed attributes
- IAM and security summaries
- traceability to evidence

Expected storage location:

- `data/step-05/`

### Step 6: Knowledge Capture

Persist reusable research findings in `Knowledge/`.

Examples:

- naming conventions
- product aliases
- recurring extraction rules
- source-quality heuristics
- interpretation guidance for Google lifecycle language

### Step 7: Skill Evaluation and Evolution

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
4. Define validation checks for lifecycle status and official-source coverage.
5. Define the first evaluation loop for project-specific skills.

## Repository Conventions

- All documentation is written in English.
- Important decisions must be recorded as ADRs.
- Canonical user-facing documentation belongs in `docs/`.
- `docs/README.md` is the official user manual for the project.
- All project data belongs under `data/`.
- Workflow scripts belong under `scripts/step-XX/`.
- Workflow data belongs under `data/step-XX/`.
- Research findings that are worth reusing belong in `Knowledge/`.
- Workflow changes must update this document.

## Open Questions

These are currently unresolved and should likely become ADRs:

- canonical storage format for cards
- canonical schema for evidence and source provenance
- internal folder structure under `data/step-XX/`
- naming conventions for scripts and stages
- evaluation dataset design for Skill Arena
