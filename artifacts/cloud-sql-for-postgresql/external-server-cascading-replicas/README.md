# External server cascading replicas

Product: Cloud SQL for PostgreSQL
Feature slug: `external-server-cascading-replicas`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cascading replicas are generally available for migrations from external servers, allowing migrated replicas to have read replicas before promotion.

## Lifecycle

- Latest feature date: 2023-04-06
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
- key
- policy
- secret

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
