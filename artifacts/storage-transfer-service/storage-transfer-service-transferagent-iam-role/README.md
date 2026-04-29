# Storage Transfer Service transferAgent IAM role

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-transferagent-iam-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Storage Transfer Service introduced the predefined roles/storagetransfer.transferAgent role to provide minimum required permissions for transfer agent communication and simplify permission assignment.

## Lifecycle

- Latest feature date: 2022-04-12
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
- logging
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer](https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer)
- [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control)
