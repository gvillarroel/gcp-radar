# BigQuery resource tags for IAM conditional access

Product: BigQuery
Feature slug: `bigquery-resource-tags-for-iam-conditional-access`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports tags on tables and datasets for conditionally granting or denying access with IAM policies.

## Lifecycle

- Latest feature date: 2024-06-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- identity (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-iam-policy)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
