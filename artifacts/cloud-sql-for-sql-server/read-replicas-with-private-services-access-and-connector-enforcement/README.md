# Read replicas with private services access and connector enforcement

Product: Cloud SQL for SQL Server
Feature slug: `read-replicas-with-private-services-access-and-connector-enforcement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports creating read replicas for instances that use private services access and connector enforcement.

## Lifecycle

- Latest feature date: 2024-10-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- private (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview), [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing), [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
