# ADR 0013: Step 08 product card schema

## Status

Accepted

## Context

The pipeline already produces Step 06 extended feature definitions and Step 07 quality gates, but it lacked a durable per-product card output. The project goal requires hierarchical cards that summarize each Google product, its feature inventory, evidence links, lifecycle dates, and validation state.

## Decision

Add Step 08 as the first product-card construction layer.

The canonical Step 08 output lives under `data/step-08/current`:

- `index.json` and `index.md` for product discovery
- `products/<product-slug>/card.json` for the machine-readable product card
- `products/<product-slug>/card.md` for a compact human-readable card

The v1 card schema is intentionally derived only from existing validated inputs:

- Step 06 extended feature definitions
- Step 07 quality-gate results

Each product card contains:

- product identity
- feature count
- quality-gate summary
- coverage summary
- lifecycle summary
- security-signal summary
- compact feature inventory with evidence URLs

## Consequences

- Step 08 can be regenerated without additional external access.
- The product cards are evidence-backed by earlier stages instead of inventing new facts.
- IAM and security fields remain signal summaries in v1; richer role/permission mapping can be added after Step 05-to-product mapping is implemented.
- Later promotion to `artifacts/` and `radar/` can consume this stable card layer.
