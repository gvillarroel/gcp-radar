# ADR 0022: Step 09 Stale Feature Artifact Cleanup

## Status

Accepted

## Context

Step 09 promotes validated Step 08 cards into the `artifacts/` source-of-truth
layer. Promotion eligibility can change when Step 07 gate output, evidence
links, summaries, or accepted warning rules change.

Before this decision, a normal Step 09 rerun wrote the current promotion
manifest and current promoted feature artifacts, but it did not remove feature
directories that were promoted by an earlier run and skipped by the current
run. Final-output validation treats those stale directories as errors because
they are not present in the product promotion manifest.

## Decision

Step 09 owns the feature directories directly under each processed
`artifacts/<product-slug>/` directory.

After calculating and writing the current promoted feature set for a processed
product, the canonical Step 09 script removes any feature artifact directory
under that product directory whose slug is not listed in the current promotion
manifest.

The cleanup is narrower than `GCP_RADAR_STEP09_CLEAN_PRODUCT_ARTIFACTS=1`:

- default stale-feature cleanup removes only unpromoted feature directories
- explicit product clean removes the entire product artifact directory before
  promotion

The Step 09 run index records the number of stale feature artifact directories
removed and their paths.

## Consequences

Benefits:

- normal Step 09 reruns keep `artifacts/` aligned with promotion manifests
- Step 10 can generate radar reports from a coherent promoted artifact
  inventory
- final-output validation no longer depends on a full product clean after
  promotion eligibility shrinks

Costs:

- manually maintained directories directly under `artifacts/<product-slug>/`
  are not supported unless they are promoted feature artifact directories
