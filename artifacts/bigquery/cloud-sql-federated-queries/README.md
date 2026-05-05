# Cloud SQL federated queries

Product: BigQuery
Feature slug: `cloud-sql-federated-queries`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports federated queries against Cloud SQL data; BigQuery supports federated queries across BigQuery and Cloud SQL data.

## Lifecycle

- Latest feature date: 2020-05-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console), [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console), [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console), [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console), [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console), [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam), [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console), [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
