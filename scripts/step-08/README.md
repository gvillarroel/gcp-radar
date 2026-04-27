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

## Validation

Validate generated product cards against the documented Step 08 card contract:

```bash
node scripts/step-08/validate-product-cards.mjs
```

Use `GCP_RADAR_STEP08_PRODUCTS=compute-engine,firestore` to validate a subset.
The validator is offline and reports failures with the card file and JSON pointer.
The machine-readable schema is documented at `data/step-08/card.schema.json`.
