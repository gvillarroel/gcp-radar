# TPU support

Product: Dataflow
Feature slug: `tpu-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataflow supports TPUs to accelerate inference workloads on frameworks such as PyTorch, JAX, and TensorFlow.

## Lifecycle

- Latest feature date: 2025-08-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- identity
- permission

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- [https://docs.cloud.google.com/dataflow/docs/guides/input-and-output-error-codes](https://docs.cloud.google.com/dataflow/docs/guides/input-and-output-error-codes)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
