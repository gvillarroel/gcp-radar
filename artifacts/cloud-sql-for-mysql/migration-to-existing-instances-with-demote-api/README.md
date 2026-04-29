# Migration to existing instances with demote API

Product: Cloud SQL for MySQL
Feature slug: `migration-to-existing-instances-with-demote-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports migrating data to an already existing instance by using the demote API to turn it into a read replica for an external database server.

## Lifecycle

- Latest feature date: 2023-11-17
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
- key
- policy
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
