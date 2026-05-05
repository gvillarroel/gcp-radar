# Storage Transfer Service IAM permissions

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-iam-permissions`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Managing IAM permissions for controlling identities and their allowed actions in Storage Transfer Service.

## Lifecycle

- Latest feature date: 2017-12-07
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- key (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- private (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- role (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- security (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- token (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
