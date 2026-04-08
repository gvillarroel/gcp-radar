# ADR 0010: Step 05 Feature Permission Inventory Layout

## Status

Accepted

## Context

Step 05 needs a reproducible way to extract required API permissions from the
Step 04 documentation corpus.

The repository already has stable layouts for:

- Step 02 per-product feature inventories
- Step 03 per-product official URL rankings
- Step 04 per-product local documentation corpora

The next stage needs a canonical output shape that is easy to inspect, diff,
and promote into later validation and artifact stages.

## Decision

Adopt a per-product Step 05 extraction layout focused on feature-level Markdown
and machine-readable indexes.

The canonical Step 05 output layout is:

- `data/step-05/current/index.json`
- `data/step-05/current/products/<product-slug>/index.json`
- `data/step-05/current/products/<product-slug>/summary.md`
- `data/step-05/current/products/<product-slug>/features/<feature-slug>.md`

Each Step 05 feature document should contain:

- the product and feature identity
- the extraction status
- the Step 02 feature matches when available
- the required permissions extracted from official documentation
- supporting predefined roles when explicitly listed
- evidence sections with local source paths and captured excerpts
- gaps or caveats when the documentation is ambiguous or incomplete

The product-level JSON index should summarize:

- schema version
- generation time
- product identity
- source corpus location
- extracted feature list
- file paths for generated Markdown outputs

Step 05 is an extraction stage, not a validation stage.
If a feature has weak or missing evidence, record that explicitly instead of
promoting inferred permissions as final truth.

## Consequences

Benefits:

- Step 05 becomes reproducible and script-friendly
- reviewers can inspect one Markdown file per feature
- later validation can compare extracted permissions against evidence directly
- promotion into `artifacts/` can reuse the same feature-oriented layout

Costs:

- some features will remain intentionally incomplete until better evidence is in
  the Step 04 corpus
- product-specific extraction rules may still be needed while the corpus and
  heuristics evolve
