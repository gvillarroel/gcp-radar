# One-click budget creation and alert setup

Product: Cloud Billing
Feature slug: `one-click-budget-creation-and-alert-setup`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Billing now supports creating a first budget in one step from the Billing Overview page with recommended alert thresholds and alerting at 50%, 75%, 100%, and 150% spend levels.

## Lifecycle

- Latest feature date: 2024-03-07
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
- [https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients](https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients)
- [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
