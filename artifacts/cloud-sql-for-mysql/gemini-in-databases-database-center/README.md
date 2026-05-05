# Gemini in Databases Database Center

Product: Cloud SQL for MySQL
Feature slug: `gemini-in-databases-database-center`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Database Center is an AI-assisted dashboard that provides a centralized view across a database fleet.

## Lifecycle

- Latest feature date: 2024-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/databases/list)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)
