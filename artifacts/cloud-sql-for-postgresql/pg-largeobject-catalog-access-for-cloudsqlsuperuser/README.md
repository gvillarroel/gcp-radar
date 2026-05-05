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

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions), [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions](https://docs.cloud.google.com/sql/docs/mysql/roles-and-permissions)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-users](https://docs.cloud.google.com/sql/docs/postgres/create-manage-users)
