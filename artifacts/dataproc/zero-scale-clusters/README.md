# Zero-scale clusters

Product: Dataproc
Feature slug: `zero-scale-clusters`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports zero-scale clusters that use only secondary workers and can scale down to zero when idle.

## Lifecycle

- Latest feature date: 2025-05-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags](https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags)
- [https://docs.cloud.google.com/dataproc/docs/api-libraries-overview](https://docs.cloud.google.com/dataproc/docs/api-libraries-overview)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
