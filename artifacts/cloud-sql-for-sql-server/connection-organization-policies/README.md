# connection organization policies

Product: Cloud SQL for SQL Server
Feature slug: `connection-organization-policies`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL lets organizations define policies that control access to and from Cloud SQL instances.

## Lifecycle

- Latest feature date: 2019-12-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- role (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
