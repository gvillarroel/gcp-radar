# CloudFunctions2Function KMS key

Product: Config Connector
Feature slug: `cloudfunctions2function-kms-key`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Connector added the kmsKeyName field to CloudFunctions2Function.

## Lifecycle

- Latest feature date: 2023-09-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt (evidence: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
