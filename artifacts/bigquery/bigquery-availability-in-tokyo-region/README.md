# BigQuery availability in Tokyo region

Product: BigQuery
Feature slug: `bigquery-availability-in-tokyo-region`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery is available in the Tokyo region (asia-northeast1).

## Lifecycle

- Latest feature date: 2018-04-17
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
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
