# Dataproc Metastore integration with Trino

Product: Dataproc
Feature slug: `dataproc-metastore-integration-with-trino`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports Dataproc Metastore integration with Trino.

## Lifecycle

- Latest feature date: 2023-01-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints), [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- allow (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints), [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- constraint (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints), [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- encrypt (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints), [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- key (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints), [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- kms (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints), [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- logging (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints), [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- policy (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints), [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- secret (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints), [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols)
- [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- [https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints](https://docs.cloud.google.com/dataproc-metastore/docs/org-policy-custom-constraints)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
