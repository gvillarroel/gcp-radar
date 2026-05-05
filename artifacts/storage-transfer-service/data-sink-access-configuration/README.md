# Data sink access configuration

Product: Storage Transfer Service
Feature slug: `data-sink-access-configuration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Configuration of access to Storage Transfer Service data sinks was updated in the documentation.

## Lifecycle

- Latest feature date: 2018-08-06
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- security (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))
- token (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager)
- [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)
