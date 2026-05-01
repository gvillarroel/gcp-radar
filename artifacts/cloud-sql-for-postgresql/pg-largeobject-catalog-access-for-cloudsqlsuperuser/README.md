# pg_largeobject catalog access for cloudsqlsuperuser

Product: Cloud SQL for PostgreSQL
Feature slug: `pg-largeobject-catalog-access-for-cloudsqlsuperuser`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Users with the cloudsqlsuperuser role can access the pg_largeobject system catalog.

## Lifecycle

- Latest feature date: 2022-06-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- iam
- identity
- logging
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
