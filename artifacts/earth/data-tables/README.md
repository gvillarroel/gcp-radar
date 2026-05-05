# Data tables

Product: Earth
Feature slug: `data-tables`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can view vector data layers as tabular data, inspect features in the table, and identify them on the map.

## Lifecycle

- Latest feature date: 2025-10-13
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- key (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- private (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- role (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- security (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))
- token (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview), [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground))

## Official Evidence

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
