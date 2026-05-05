# Data lineage list view

Product: Data Catalog
Feature slug: `data-lineage-list-view`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The data lineage list view displays full lineage information in a single table.

## Lifecycle

- Latest feature date: 2024-08-12
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- key (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- private (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- role (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- security (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))
- token (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)
