# 96-core machine types

Product: Cloud SQL for SQL Server
Feature slug: `96-core-machine-types`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for SQL Server supports machine types with up to 96 CPU cores.

## Lifecycle

- Latest feature date: 2020-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- armor
- auth
- authorization
- certificate
- iam
- identity
- key
- logging
- policy
- private
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
- [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
