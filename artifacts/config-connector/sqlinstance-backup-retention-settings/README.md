# SQLInstance backup retention settings

Product: Config Connector
Feature slug: `sqlinstance-backup-retention-settings`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports backupRetentionSettings and transactionLogRetentionDays in SQLInstance backup configuration.

## Lifecycle

- Latest feature date: 2021-03-25
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
