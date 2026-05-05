# Cloud SQL Studio User IAM role

Product: Cloud SQL for MySQL
Feature slug: `cloud-sql-studio-user-iam-role`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL Studio access can be granted with the dedicated Cloud SQL Studio User IAM role instead of the Cloud SQL Admin role.

## Lifecycle

- Latest feature date: 2024-09-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))

## Official Evidence

- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users)
