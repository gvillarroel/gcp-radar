# FinOps hub underutilized Compute Engine reservation recommendations

Product: Cloud Billing
Feature slug: `finops-hub-underutilized-compute-engine-reservation-recommendations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

FinOps hub now provides recommendations to modify or delete underutilized on-demand Compute Engine reservations after low utilization persists for at least seven days.

## Lifecycle

- Latest feature date: 2024-09-27
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
- `resourcemanager.projects.list`

## Security Capabilities

- access
- audit
- auth
- iam
- identity
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/billing-access](https://docs.cloud.google.com/billing/docs/how-to/billing-access)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing)
