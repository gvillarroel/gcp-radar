# Storage Transfer Service IAM roles

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-iam-roles`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

New IAM roles were added to control permissions for Storage Transfer Service operations.

## Lifecycle

- Latest feature date: 2019-03-20
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))
- security (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions](https://docs.cloud.google.com/iam/docs/roles-permissions)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager)
