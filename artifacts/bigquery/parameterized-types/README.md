# Parameterized types

Product: BigQuery
Feature slug: `parameterized-types`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports parameterized data types such as bounded STRING and BYTES and precision-constrained NUMERIC and BIGNUMERIC types; Parameterized types let BigQuery define STRING, BYTES, NUMERIC, and BIGNUMERIC values with explicit length, precision, or scale constraints.

## Lifecycle

- Latest feature date: 2021-11-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
