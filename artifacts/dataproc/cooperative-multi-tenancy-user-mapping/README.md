# Cooperative multi-tenancy user mapping

Product: Dataproc
Feature slug: `cooperative-multi-tenancy-user-mapping`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports user-to-service-account mappings for cooperative multi-tenancy when accessing Cloud Storage through the connector.

## Lifecycle

- Latest feature date: 2020-10-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/concepts/overview](https://docs.cloud.google.com/dataproc/docs/concepts/overview)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster](https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
