# Cloud Billing reports availability

Product: Cloud Billing
Feature slug: `cloud-billing-reports-availability`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Billing reports became generally available, enabling users to chart billing account spending; Cloud Billing reports became available in beta, providing quick charting of billing account cloud spending.

## Lifecycle

- Latest feature date: 2018-04-24
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

- access (evidence: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports), [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup))
- iam (evidence: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports), [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup))
- key (evidence: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports), [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup))
- permission (evidence: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports), [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup))
- role (evidence: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports), [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup))

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/onboarding-checklist](https://docs.cloud.google.com/billing/docs/onboarding-checklist)
