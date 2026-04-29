# Cloud Billing Anomaly Detection

Product: Cloud Billing
Feature slug: `cloud-billing-anomaly-detection`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Billing Anomaly Detection is generally available with expanded capabilities including auto-generated thresholds, configurable deviation-percentage thresholds, and email alerts for billing administrators; Cloud Billing adds Anomaly Detection in the Anomalies dashboard to surface unexpected cost spikes and provide root cause analysis by service, region, and SKU.

## Lifecycle

- Latest feature date: 2025-10-30
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
- secret

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/resolve-issues](https://docs.cloud.google.com/billing/docs/how-to/resolve-issues)
