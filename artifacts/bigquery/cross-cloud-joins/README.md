# Cross-cloud joins

Product: BigQuery
Feature slug: `cross-cloud-joins`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports joins across Google Cloud and BigQuery Omni regions; BigQuery supports queries that join data across Google Cloud and BigQuery Omni regions.

## Lifecycle

- Latest feature date: 2024-02-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
