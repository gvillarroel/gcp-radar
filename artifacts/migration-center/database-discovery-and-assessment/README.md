# Database discovery and assessment

Product: Migration Center
Feature slug: `database-discovery-and-assessment`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Migration Center can discover and assess Microsoft SQL Server, MySQL, and PostgreSQL databases; Migration Center can discover and assess Microsoft SQL Server, MySQL, and PostgreSQL databases.

## Lifecycle

- Latest feature date: 2024-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- audit
- iam
- identity
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/migrationcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/migrationcenter)
- [https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview](https://docs.cloud.google.com/migration-center/docs/discovery-and-assessment-overview)
- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
