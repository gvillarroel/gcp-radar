# Cloud Billing Carbon Footprint dashboard

Product: Cloud Billing
Feature slug: `cloud-billing-carbon-footprint-dashboard`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Billing introduces a Carbon Footprint dashboard in FinOps hub to display estimated greenhouse gas emissions for Google Cloud usage.

## Lifecycle

- Latest feature date: 2024-07-01
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

- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing)
