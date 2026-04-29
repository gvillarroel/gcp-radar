# SQLInstance allocated IP range

Product: Config Connector
Feature slug: `sqlinstance-allocated-ip-range`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports setting an allocated IP range on SQLInstance resources through spec.settings.ipConfiguration.allocatedIpRange.

## Lifecycle

- Latest feature date: 2022-01-19
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
