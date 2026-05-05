# TF_IDF function

Product: BigQuery
Feature slug: `tf-idf-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The TF_IDF function computes TF-IDF values for text data in BigQuery.

## Lifecycle

- Latest feature date: 2024-03-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-tf-idf)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions)
