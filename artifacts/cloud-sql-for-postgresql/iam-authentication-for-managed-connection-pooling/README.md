# IAM authentication for Managed Connection Pooling

Product: Cloud SQL for PostgreSQL
Feature slug: `iam-authentication-for-managed-connection-pooling`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IAM authentication for Managed Connection Pooling lets users secure pooled connections with IAM-based authentication.

## Lifecycle

- Latest feature date: 2025-09-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-mcp](https://docs.cloud.google.com/sql/docs/postgres/configure-mcp)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
