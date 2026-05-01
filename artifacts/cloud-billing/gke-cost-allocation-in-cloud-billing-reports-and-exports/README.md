# GKE cost allocation in Cloud Billing reports and exports

Product: Cloud Billing
Feature slug: `gke-cost-allocation-in-cloud-billing-reports-and-exports`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Google Kubernetes Engine costs became generally available in Cloud Billing reports and BigQuery detailed export, including filtering by cluster and namespace labels.

## Lifecycle

- Latest feature date: 2022-10-14
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
- key
- logging
- permission
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown](https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
