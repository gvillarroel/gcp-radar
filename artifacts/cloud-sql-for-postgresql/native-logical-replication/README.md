# Native logical replication

Product: Cloud SQL for PostgreSQL
Feature slug: `native-logical-replication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports native PostgreSQL logical replication.

## Lifecycle

- Latest feature date: 2021-08-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- certificate
- encrypt
- key
- logging
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
