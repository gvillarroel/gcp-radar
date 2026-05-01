# App Hub integration with Cloud Billing reports and FinOps hub

Product: Cloud Billing
Feature slug: `app-hub-integration-with-cloud-billing-reports-and-finops-hub`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

App Hub applications are now integrated into Cloud Billing cost reports and FinOps hub for application-level cost analysis and optimization insights.

## Lifecycle

- Latest feature date: 2025-04-29
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
- [https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights](https://docs.cloud.google.com/billing/docs/how-to/finops-utilization-insights)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
