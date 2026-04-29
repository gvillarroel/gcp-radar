# effective_cache_size flag

Product: Cloud SQL for PostgreSQL
Feature slug: `effective-cache-size-flag`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports the effective_cache_size database flag.

## Lifecycle

- Latest feature date: 2020-12-16
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

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
