# Managed notebooks executor job support

Product: Vertex AI Workbench
Feature slug: `managed-notebooks-executor-job-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Workbench supports job execution through the managed notebooks executor for custom training and Spark.

## Lifecycle

- Latest feature date: 2022-04-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom), [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/tabular](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/tabular), [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/tabular](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/tabular)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
