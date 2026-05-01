# pg_authid system catalog access

Product: Cloud SQL for PostgreSQL
Feature slug: `pg-authid-system-catalog-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Access to the pg_authid catalog table is generally available for viewing hashed passwords and other database role properties.

## Lifecycle

- Latest feature date: 2023-05-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- armor
- auth
- authorization
- iam
- identity
- key
- logging
- policy
- private
- role
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
