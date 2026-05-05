# Committed Use Discount subscription ID in Detailed cost data export

Product: Cloud Billing
Feature slug: `committed-use-discount-subscription-id-in-detailed-cost-data-export`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds a subscription ID field (`subscription.instance_id`) to the Cloud Billing Detailed cost data export so CUD fees can be traced to the corresponding subscription instance.

## Lifecycle

- Latest feature date: 2024-01-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage), [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export))
- logging (evidence: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage), [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export))
- secret (evidence: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage), [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples), [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export))

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
