# billing.resourceCosts.get IAM permission

Product: Cloud Billing
Feature slug: `billing-resourcecosts-get-iam-permission`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A new Cloud Billing IAM permission, billing.resourceCosts.get, was introduced to provide project-specific access to cost data such as billing reports.

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

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- key (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- private (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- security (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))
- token (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets))

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing)
