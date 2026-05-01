# Budget-linked Billing Reports target amount display

Product: Cloud Billing
Feature slug: `budget-linked-billing-reports-target-amount-display`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Adds display of the selected budget's target amount as a visual marker when opening Billing Reports directly from a budget.

## Lifecycle

- Latest feature date: 2021-05-10
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
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetAmount.BudgetAmountCase](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetAmount.BudgetAmountCase)
