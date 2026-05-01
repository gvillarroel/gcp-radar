# Single-project budget edit controls

Product: Cloud Billing
Feature slug: `single-project-budget-edit-controls`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Introduces controls that let billing account users prevent project users from modifying single-project budgets.

## Lifecycle

- Latest feature date: 2023-10-23
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

## Security Capabilities

- access
- iam
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets)
- [https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets](https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets)
