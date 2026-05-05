# Cloud Billing Catalog API

Product: Cloud Billing
Feature slug: `cloud-billing-catalog-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Billing Catalog API provides programmatic access to pricing metadata for Google Cloud Platform SKUs.

## Lifecycle

- Latest feature date: 2018-02-27
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

- access (evidence: [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage))
- auth (evidence: [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage))
- iam (evidence: [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage))
- logging (evidence: [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage))
- permission (evidence: [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage))
- policy (evidence: [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage))
- private (evidence: [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage))
- role (evidence: [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage))

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/access-control](https://docs.cloud.google.com/billing/docs/access-control)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)
