# Heterogeneous cluster machine types

Product: Dataproc
Feature slug: `heterogeneous-cluster-machine-types`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports clusters whose master and worker nodes use different machine types and memory sizes.

## Lifecycle

- Latest feature date: 2016-01-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags](https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags](https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags))
- permission (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags](https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags](https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags](https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
