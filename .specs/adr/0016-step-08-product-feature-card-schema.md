# ADR 0016: Step 08 Product Feature Card Schema

## Status

Accepted

## Context

Steps 01 through 07 produce broad generated evidence and quality-gate outputs,
but the repository still needs a durable card layer before promotion into
`artifacts/`.

The card layer must combine Step 06 corpus-backed feature definitions, Step 07
validation findings, Step 05 IAM role and permission inventory, and Step 04
corpus provenance.

## Decision

Adopt Step 08 as the product and feature card construction stage.

The canonical Step 08 script is:

- `scripts/step-08/build-product-feature-cards.mjs`

The canonical Step 08 outputs are:

- `data/step-08/current/index.json`
- `data/step-08/current/products/<product-slug>/card.json`
- `data/step-08/current/products/<product-slug>/card.md`

Each product card contains product identity, source input paths, corpus health,
Step 07 validation summary, IAM mapping summary, and feature cards.

Each feature card contains feature identity, summary, extended definition,
lifecycle dates, official evidence links, Step 07 findings, IAM mapping data,
and security capability signals when present.

Feature IAM mapping data must be feature-level, not only product-level. It
must preserve explicit roles, explicit permissions, derived roles, derived
permissions, and any evidence mentions that were missing from the Step 05
inventory.

Product-level IAM summaries and service-card IAM status counts are derived
from the constructed feature cards. Step 02 release-note inventory counts can
remain visible under release-note provenance, but they must not be counted as
unknown IAM feature cards when Step 06 did not produce feature-card input.

The supported IAM mapping statuses are:

- `explicit`: a role or permission is mentioned in Step 06 evidence and exists in Step 05
- `derived_from_permission_prefix`: a product permission group can be associated conservatively
- `unknown`: no defensible IAM mapping was found

Only `explicit` mappings may be presented as feature requirements. Derived
mappings are useful for review and discovery, but they remain related IAM
signals unless later official evidence confirms the role or permission for the
feature.

## Consequences

Benefits:

- card construction becomes reproducible and script-friendly
- final promotion can consume a stable schema instead of raw Step 06 output
- IAM claims remain traceable and explicitly qualified

Costs:

- Step 08 depends on the Step 05 IAM inventory being complete enough for the desired reporting scope
- derived IAM mappings must not be presented as explicit feature-level requirements
