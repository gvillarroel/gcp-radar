# FinOps hub resource-based CUD scenario simulation

Product: Cloud Billing
Feature slug: `finops-hub-resource-based-cud-scenario-simulation`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

FinOps hub now recommends resource-based CUDs and lets users simulate usage scenarios to adjust recommendations for maximum savings.

## Lifecycle

- Latest feature date: 2024-12-18
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

- [https://docs.cloud.google.com/billing/docs/how-to/billing-access](https://docs.cloud.google.com/billing/docs/how-to/billing-access)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
