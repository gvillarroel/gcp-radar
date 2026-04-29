# Spanner DML RETURNING and THEN RETURN support

Product: Spanner
Feature slug: `spanner-dml-returning-and-then-return-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Added support in Spanner DML for returning updated rows in the same statement using PostgreSQL RETURNING and Google Standard SQL THEN RETURN.

## Lifecycle

- Latest feature date: 2022-12-05
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
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
