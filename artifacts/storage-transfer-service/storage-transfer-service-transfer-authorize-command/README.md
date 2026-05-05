# Storage Transfer Service transfer authorize command

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-transfer-authorize-command`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Storage Transfer Service added a gcloud transfer authorize command to inspect and grant required transfer permissions.

## Lifecycle

- Latest feature date: 2022-03-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- key (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- private (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- role (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- security (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))
- token (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)
