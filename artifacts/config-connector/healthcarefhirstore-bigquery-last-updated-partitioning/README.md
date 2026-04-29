# HealthcareFHIRStore BigQuery last-updated partitioning

Product: Config Connector
Feature slug: `healthcarefhirstore-bigquery-last-updated-partitioning`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports last-updated partition configuration for HealthcareFHIRStore BigQuery stream destinations.

## Lifecycle

- Latest feature date: 2023-09-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- certificate
- identity
- permission
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
