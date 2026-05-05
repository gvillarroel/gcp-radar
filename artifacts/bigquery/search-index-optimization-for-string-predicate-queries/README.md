# Search index optimization for string predicate queries

Product: BigQuery
Feature slug: `search-index-optimization-for-string-predicate-queries`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery search indexes can optimize some queries that use equals, IN, LIKE, or STARTS_WITH with string literals.

## Lifecycle

- Latest feature date: 2023-07-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/collation-concepts)
