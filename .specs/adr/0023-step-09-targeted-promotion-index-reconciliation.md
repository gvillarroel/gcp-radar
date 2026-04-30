# ADR 0023: Step 09 Targeted Promotion Index Reconciliation

## Status

Accepted

## Context

Step 09 supports targeted promotion through `GCP_RADAR_STEP09_PRODUCTS`.
Final-output validation also requires `data/step-09/current/index.json` to
match the full promoted artifact inventory under `artifacts/`.

When a targeted Step 09 run writes an index containing only the products it
processed, the promoted artifacts can remain correct while the final validation
contract fails because the index no longer describes every promoted product.

## Decision

Step 09 may process a targeted product subset, but its run index must be
reconciled from the complete artifact inventory after processing finishes.

The canonical script, `scripts/step-09/promote-validated-artifacts.mjs`, now:

- promotes only the requested Step 08 product cards when
  `GCP_RADAR_STEP09_PRODUCTS` is set
- scans `artifacts/` for product directories with `promotion.json`
- writes `data/step-09/current/index.json` from that full promoted artifact
  inventory
- records `processed_product_count` and `processed_products` so the latest run
  scope remains visible
- counts stale feature artifact cleanup only for products processed in the
  current run

## Consequences

Benefits:

- targeted Step 09 reruns can preserve final-output validation compatibility
- the Step 09 index remains a reliable summary of promoted artifacts
- latest-run scope remains explicit without weakening the final validation
  contract

Costs:

- the Step 09 index is no longer a pure list of only processed products when a
  product filter is used
- consumers that need the latest run scope must read `processed_products`
  instead of assuming `products` contains only the targeted subset
