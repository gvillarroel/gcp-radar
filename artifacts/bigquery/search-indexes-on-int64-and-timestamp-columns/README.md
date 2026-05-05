# Search indexes on INT64 and TIMESTAMP columns

Product: BigQuery
Feature slug: `search-indexes-on-int64-and-timestamp-columns`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery search indexes can be created on INT64 and TIMESTAMP columns to optimize predicates on those fields.

## Lifecycle

- Latest feature date: 2024-11-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes), [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
