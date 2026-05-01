# Cloud SQL integration

Product: Managed Service for Microsoft Active Directory
Feature slug: `cloud-sql-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Managed Microsoft AD supports integration with Cloud SQL.

## Lifecycle

- Latest feature date: 2021-06-21
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
- key
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/access-control](https://docs.cloud.google.com/managed-microsoft-ad/docs/access-control)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)
