# SpannerInstance processingUnits field

Product: Config Connector
Feature slug: `spannerinstance-processingunits-field`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the processingUnits field on SpannerInstance.

## Lifecycle

- Latest feature date: 2021-08-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- constraint
- firewall
- iam
- identity
- key
- kms
- logging
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/spanner/spannerinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/spanner/spannerinstance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
