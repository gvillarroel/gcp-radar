# GROUP BY ALL

Product: BigQuery
Feature slug: `group-by-all`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

BigQuery SQL now generally supports the GROUP BY ALL clause; BigQuery supports the GROUP BY ALL clause to infer grouping keys from SELECT items.

## Lifecycle

- Latest feature date: 2025-05-13
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
- auth
- authorization
- iam
- key
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
