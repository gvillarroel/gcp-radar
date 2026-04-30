# Customer-managed encryption keys (CMEK) for Vertex AI Workbench

Product: Vertex AI Workbench
Feature slug: `customer-managed-encryption-keys-cmek-for-vertex-ai-workbench`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Workbench supports encrypting data using customer-managed encryption keys; Vertex AI Workbench supports securing instances with customer-managed encryption keys.

## Lifecycle

- Latest feature date: 2022-04-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint
- encrypt
- key

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
