# AlloyDB federated queries

Product: BigQuery
Feature slug: `alloydb-federated-queries`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery can query data in AlloyDB by using federated queries; BigQuery supports querying data in AlloyDB through federated queries.

## Lifecycle

- Latest feature date: 2024-08-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- iam
- logging
- permission

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
