# Batch Data Access audit logs

Product: Batch
Feature slug: `batch-data-access-audit-logs`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Batch now provides Data Access audit logs in Preview, enabling auditing of data-access actions for Batch operations.

## Lifecycle

- Latest feature date: 2022-09-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.get`
- `accessapproval.requests.list`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- audit
- iam
- identity
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval)
