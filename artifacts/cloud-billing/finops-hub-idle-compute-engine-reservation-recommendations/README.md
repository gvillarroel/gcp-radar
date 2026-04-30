# FinOps Hub idle Compute Engine reservation recommendations

Product: Cloud Billing
Feature slug: `finops-hub-idle-compute-engine-reservation-recommendations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

FinOps Hub now provides recommendations to modify or delete idle on-demand Compute Engine reservations when no resources have been consumed for at least seven days.

## Lifecycle

- Latest feature date: 2024-06-24
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
- auth
- iam
- identity
- logging
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control)
- [https://docs.cloud.google.com/billing/docs/how-to/billing-access](https://docs.cloud.google.com/billing/docs/how-to/billing-access)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
