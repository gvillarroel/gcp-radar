# Cloud Asset Inventory support

Product: AlloyDB
Feature slug: `cloud-asset-inventory-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

AlloyDB integrates with Cloud Asset Inventory.

## Lifecycle

- Latest feature date: 2023-07-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search), [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration))
- auth (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search), [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration))
- authorization (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search), [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration))
- key (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search), [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration))
- token (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search), [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration))

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings](https://docs.cloud.google.com/alloydb/docs/ai/example-embeddings)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
