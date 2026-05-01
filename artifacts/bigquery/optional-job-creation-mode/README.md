# Optional job creation mode

Product: BigQuery
Feature slug: `optional-job-creation-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Optional job creation mode speeds up eligible small queries by automatically optimizing them and using a cache to reduce latency.

## Lifecycle

- Latest feature date: 2025-05-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- encrypt
- iam
- key
- kms
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
