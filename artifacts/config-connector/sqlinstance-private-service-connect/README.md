# SQLInstance Private Service Connect

Product: Config Connector
Feature slug: `sqlinstance-private-service-connect`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports Private Service Connect configuration and related status fields on SQLInstance resources.

## Lifecycle

- Latest feature date: 2023-09-06
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

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqldatabase](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqldatabase)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqluser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqluser)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
