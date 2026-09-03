# Step 07 Scripts

This directory stores scripts for workflow Step 07.

Step 07 is the quality gate that reviews Step 06 outputs before later artifact
promotion or reporting.

Current gate:

- `evaluate-step-06-quality-gate.mjs`

Purpose:

- read Step 06 extended feature outputs
- evaluate feature-level evidence quality
- classify product-level pass or fail status
- emit actionable feedback for products and features that do not meet the gate
- distinguish hard failures from softer warnings

Current canonical inputs:

- `data/step-06/current/products/<product-slug>/extended-features.json`

Current canonical outputs:

- `data/step-07/current/index.json`
- `data/step-07/current/products/<product-slug>/gate.json`
- `data/step-07/current/products/<product-slug>/gate.md`

Current gate heuristics review:

- coverage status quality
- missing supporting pages
- exact identifier support for API fields, methods, and resource names
- generic page contamination
- runtime-family contamination for App Engine products
- support-matrix style evidence versus dedicated feature pages

Usage:

```bash
zx scripts/step-07/evaluate-step-06-quality-gate.mjs
```

Optional controls:

- set `GCP_RADAR_STEP07_PRODUCTS` to limit execution to a comma-separated list
  of product slugs
- set `GCP_RADAR_STEP07_STEP06_ROOT` to override the Step 06 input root
- set `GCP_RADAR_STEP07_OUTPUT_ROOT` to override the Step 07 output root
- set `GCP_RADAR_STEP07_MAX_FAIL_RATIO` to change the per-product fail ratio
  threshold

## Quality summary

Build a concise cross-product summary of unsupported or weak feature definitions:

```bash
node scripts/step-07/build-quality-summary.mjs
```

The command writes `data/step-07/current/quality-summary.json` and
`data/step-07/current/quality-summary.md`. Each item includes product, feature,
failure or warning reason, evidence URL status, and the suggested upstream stage
to fix.
