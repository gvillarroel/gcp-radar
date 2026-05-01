# Cloud Billing Cost Breakdown Reports

Product: Cloud Billing
Feature slug: `cloud-billing-cost-breakdown-reports`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Introduces Cost Breakdown reports to provide a summary view of invoice savings from usage-based discounts and credits.

## Lifecycle

- Latest feature date: 2019-06-26
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

- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
