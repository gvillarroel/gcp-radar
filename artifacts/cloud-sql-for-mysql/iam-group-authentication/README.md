# IAM group authentication

Product: Cloud SQL for MySQL
Feature slug: `iam-group-authentication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IAM group authentication lets you add IAM groups to Cloud SQL instances and manage database access at the group level; IAM group authentication lets Cloud SQL for MySQL instances use IAM groups for database authentication and access management.

## Lifecycle

- Latest feature date: 2024-07-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication), [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam))

## Official Evidence

- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
