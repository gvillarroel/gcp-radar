# Workbench end-user and service account authentication

Product: Vertex AI Workbench
Feature slug: `workbench-end-user-and-service-account-authentication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Workbench supports both end-user and service account authentication.

## Lifecycle

- Latest feature date: 2022-04-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl), [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl), [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl), [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl), [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
