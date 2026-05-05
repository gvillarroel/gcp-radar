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

- access (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- audit (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- auth (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- iam (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- identity (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- logging (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- permission (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- policy (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- private (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- role (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))
- security (evidence: [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub), [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard), [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing))

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/finops-hub](https://docs.cloud.google.com/billing/docs/how-to/finops-hub)
- [https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard](https://docs.cloud.google.com/billing/docs/how-to/finops-recommendations-dashboard)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/billing](https://docs.cloud.google.com/iam/docs/roles-permissions/billing)
