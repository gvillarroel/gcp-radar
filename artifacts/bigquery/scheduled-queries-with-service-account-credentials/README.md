# Scheduled queries with service account credentials

Product: BigQuery
Feature slug: `scheduled-queries-with-service-account-credentials`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery scheduled queries can use service account credentials; BigQuery scheduled queries can run using service account credentials.

## Lifecycle

- Latest feature date: 2020-08-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials))
- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference), [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries), [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-json-credentials)
