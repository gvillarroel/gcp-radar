# SQL Server 2019 default version

Product: Cloud SQL for SQL Server
Feature slug: `sql-server-2019-default-version`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

SQL Server 2019 becomes the default database version for Cloud SQL for SQL Server.

## Lifecycle

- Latest feature date: 2022-02-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
