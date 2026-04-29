# Migration to existing Cloud SQL instances

Product: Cloud SQL for PostgreSQL
Feature slug: `migration-to-existing-cloud-sql-instances`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Migration to existing Cloud SQL instances lets Database Migration Service move data into an already created Cloud SQL instance, including instances created with IaC tools; Migration to existing Cloud SQL instances lets you migrate data into an already created instance by using the demote API.

## Lifecycle

- Latest feature date: 2023-12-14
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
- key
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
