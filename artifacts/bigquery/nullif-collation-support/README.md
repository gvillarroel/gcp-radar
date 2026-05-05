# NULLIF collation support

Product: BigQuery
Feature slug: `nullif-collation-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The NULLIF conditional expression supports collation, including collation-enabled comparisons with the STRUCT data type.

## Lifecycle

- Latest feature date: 2024-06-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
