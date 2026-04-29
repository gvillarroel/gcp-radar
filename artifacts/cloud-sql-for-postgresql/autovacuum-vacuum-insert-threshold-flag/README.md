# autovacuum_vacuum_insert_threshold flag

Product: Cloud SQL for PostgreSQL
Feature slug: `autovacuum-vacuum-insert-threshold-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The autovacuum_vacuum_insert_threshold flag sets the minimum number of inserted tuples needed before VACUUM runs on a table.

## Lifecycle

- Latest feature date: 2023-12-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- certificate
- credential
- encrypt
- key
- policy

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
