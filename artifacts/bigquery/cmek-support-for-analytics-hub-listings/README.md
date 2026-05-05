# CMEK support for Analytics Hub listings

Product: BigQuery
Feature slug: `cmek-support-for-analytics-hub-listings`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Analytics Hub listings can include data encrypted with customer-managed encryption keys.

## Lifecycle

- Latest feature date: 2024-01-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- identity (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek), [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
