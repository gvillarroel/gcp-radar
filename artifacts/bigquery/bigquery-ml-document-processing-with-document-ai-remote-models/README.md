# BigQuery ML document processing with Document AI remote models

Product: BigQuery
Feature slug: `bigquery-ml-document-processing-with-document-ai-remote-models`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery ML can process documents from BigQuery object tables by using Document AI-based remote models and the ML.PROCESS_DOCUMENT function.

## Lifecycle

- Latest feature date: 2024-09-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-service)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-process-document)
