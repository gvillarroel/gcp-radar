# ADR 0001: Step 10 radar product card layout

## Status

Accepted

## Context

The repository already produces intermediate Step 08 product cards, but the final `radar/` reports need a stable human-facing layout that is narrower, more reviewable, and explicitly focused on per-feature IAM guidance.

Recent manual radar reports for Batch and Resource Manager converged on a useful two-file pattern:

- a concise product summary page
- a first curated feature page with IAM role mappings

This layout needs to be recorded so future automations do not invent new filenames or omit feature-level IAM notes.

## Decision

Step 10 product reports under `radar/` use this canonical per-product layout:

- `radar/<product-slug>/card.md`
- `radar/<product-slug>/features-1.md`

`card.md` is the concise product report and should summarize:

- product identity
- product quality and scope
- key capabilities
- the product IAM model
- primary official sources

`features-1.md` is the first curated feature page and should:

- list a limited, reviewable set of product features
- include one IAM role mapping per listed feature
- distinguish direct Google guidance from conservative service-level inference
- cite official Google sources for every row

## Consequences

- Final radar outputs become structurally consistent across products.
- Step 10 can evolve independently from Step 08 without changing the intermediate card schema.
- Reviewers can compare products using the same `card.md` and `features-1.md` pattern.
