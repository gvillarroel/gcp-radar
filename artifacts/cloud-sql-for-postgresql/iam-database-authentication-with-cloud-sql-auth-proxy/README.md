# IAM database authentication with Cloud SQL Auth Proxy

Product: Cloud SQL for PostgreSQL
Feature slug: `iam-database-authentication-with-cloud-sql-auth-proxy`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL supports IAM database authentication through the Cloud SQL Auth Proxy with automatic OAuth 2.0 token refresh.

## Lifecycle

- Latest feature date: 2021-04-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- encrypt
- iam
- identity
- permission
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
