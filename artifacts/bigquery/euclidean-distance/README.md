# EUCLIDEAN_DISTANCE

Product: BigQuery
Feature slug: `euclidean-distance`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The EUCLIDEAN_DISTANCE function computes Euclidean distance in BigQuery.

## Lifecycle

- Latest feature date: 2023-11-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions)
