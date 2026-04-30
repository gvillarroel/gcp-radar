# ON CONFLICT clause for Spanner GoogleSQL INSERT

Product: Spanner
Feature slug: `on-conflict-clause-for-spanner-googlesql-insert`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner GoogleSQL INSERT statements support the ON CONFLICT clause to handle unique constraint violations, including DO NOTHING and DO UPDATE forms.

## Lifecycle

- Latest feature date: 2026-03-03
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
- constraint
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
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
