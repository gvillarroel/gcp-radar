# Automatic read replica updates during self-service maintenance

Product: Cloud SQL for PostgreSQL
Feature slug: `automatic-read-replica-updates-during-self-service-maintenance`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Automatic read replica updates apply self-service maintenance changes to read replicas when maintenance is performed on the primary instance.

## Lifecycle

- Latest feature date: 2024-02-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- certificate
- encrypt
- iam
- key
- policy
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
