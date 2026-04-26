# Step 08 Scripts

Step 08 builds product-level cards from validated Step 06 feature definitions and Step 07 quality gates.

Current script:

- `build-product-cards.mjs`

Usage:

```bash
zx scripts/step-08/build-product-cards.mjs
```

Optional controls:

- `GCP_RADAR_STEP08_PRODUCTS`: comma-separated product slugs to generate
- `GCP_RADAR_STEP08_STEP06_ROOT`: override Step 06 input root
- `GCP_RADAR_STEP08_STEP07_ROOT`: override Step 07 input root
- `GCP_RADAR_STEP08_OUTPUT_ROOT`: override Step 08 output root
