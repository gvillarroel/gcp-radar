# IF EXISTS and IF NOT EXISTS clause support in Spanner DDL

Product: Spanner
Feature slug: `if-exists-and-if-not-exists-clause-support-in-spanner-ddl`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner added support for IF NOT EXISTS in CREATE TABLE, CREATE INDEX, and ALTER TABLE ADD COLUMN, and IF EXISTS in DROP TABLE and DROP INDEX for both GoogleSQL and PostgreSQL dialects.

## Lifecycle

- Latest feature date: 2023-06-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- certificate
- credential
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
