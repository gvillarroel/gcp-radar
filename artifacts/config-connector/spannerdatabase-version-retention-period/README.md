# SpannerDatabase version retention period

Product: Config Connector
Feature slug: `spannerdatabase-version-retention-period`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the versionRetentionPeriod field for SpannerDatabase resources.

## Lifecycle

- Latest feature date: 2022-09-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- constraint
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/spanner/spannerdatabase](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/spanner/spannerdatabase)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
