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

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances/demote)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
