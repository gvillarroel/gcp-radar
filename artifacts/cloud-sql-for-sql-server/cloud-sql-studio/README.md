# Cloud SQL Studio

Product: Cloud SQL for SQL Server
Feature slug: `cloud-sql-studio`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL Studio provides browser-based SQL data management for authorized users; Cloud SQL Studio lets authorized users run SQL queries and manage data from the Google Cloud console.

## Lifecycle

- Latest feature date: 2024-07-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/postgres/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
