# autovacuum_vacuum_insert_scale_factor flag

Product: Cloud SQL for PostgreSQL
Feature slug: `autovacuum-vacuum-insert-scale-factor-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The autovacuum_vacuum_insert_scale_factor flag sets a table-size fraction used with the insert threshold to decide when to run VACUUM.

## Lifecycle

- Latest feature date: 2023-12-13
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
- iam
- key
- policy

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
