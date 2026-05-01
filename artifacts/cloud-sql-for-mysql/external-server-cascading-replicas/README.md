# External server cascading replicas

Product: Cloud SQL for MySQL
Feature slug: `external-server-cascading-replicas`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cascading Replicas became generally available for migrations from external servers, allowing migrated replicas to have read replicas before promotion.

## Lifecycle

- Latest feature date: 2023-04-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- certificate
- iam
- key
- logging
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
