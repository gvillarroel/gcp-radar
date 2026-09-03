# ADR 0006: Step 03 Structured Extraction Layout

## Status

Accepted

## Context

Step 03 is intended to convert the Step 02 product markdown mapping outputs into explicit, machine-readable structures.

Before this decision, Step 03 existed only as a placeholder in `scripts/step-03/` and `data/step-03/`.

The project needs a stable intermediate format that:

- is easy to generate from the canonical Step 02 markdown files
- is easy to inspect and diff
- preserves traceability back to the Step 02 source file
- prepares the repository for later validation and artifact promotion stages

## Decision

Adopt the following Step 03 output layout:

- `data/step-03/current/index.json` as the canonical structured extraction index
- `data/step-03/current/products/<product-slug>.json` as the canonical structured extraction file for each product

The canonical Step 03 input is:

- `data/step-02/current/products/<product-slug>.md`

Each per-product Step 03 JSON file should contain:

- schema version
- extraction timestamp
- product name
- product slug
- source path to the Step 02 markdown file
- feature count
- a `features` array

Each extracted feature object should contain:

- feature name
- feature slug
- feature summary
- latest feature date
- deprecation date when present
- a conservative lifecycle status inferred from the Step 02 row
- evidence pointing back to the originating Step 02 markdown row

The initial lifecycle status vocabulary is intentionally conservative:

- `feature_observed` when a feature row has no deprecation date
- `deprecation_noted` when a deprecation date is present

This avoids over-claiming validation status before Step 04.

## Consequences

Benefits:

- Step 03 gains a stable, script-friendly JSON contract
- downstream validation can operate on explicit machine-readable fields
- feature-level evidence remains traceable to Step 02 outputs
- the extraction step remains deterministic and easy to inspect

Costs:

- Step 03 currently depends on the Step 02 markdown table shape remaining stable
- evidence still traces to Step 02 mapping output rather than directly to raw Step 01 rows
- lifecycle status remains intentionally conservative until validation logic is added
