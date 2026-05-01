# vacuum_multixact_failsafe_age flag

Product: Cloud SQL for PostgreSQL
Feature slug: `vacuum-multixact-failsafe-age-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The vacuum_multixact_failsafe_age flag sets the maximum multixact age before VACUUM takes extraordinary measures to avoid multixact wraparound failure.

## Lifecycle

- Latest feature date: 2023-12-13
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
- encrypt
- iam
- identity
- key
- permission
- policy
- private
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
