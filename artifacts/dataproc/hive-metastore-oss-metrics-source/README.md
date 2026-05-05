# Hive Metastore OSS metrics source

Product: Dataproc
Feature slug: `hive-metastore-oss-metrics-source`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataproc cluster creation supports enabling Hive Metastore OSS metrics through the metric-sources property.

## Lifecycle

- Latest feature date: 2023-01-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- confidential (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- encrypt (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- identity (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- key (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- permission (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- policy (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- private (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- security (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
