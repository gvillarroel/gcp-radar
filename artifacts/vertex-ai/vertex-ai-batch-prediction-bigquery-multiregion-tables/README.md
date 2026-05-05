# Vertex AI batch prediction BigQuery multiregion tables

Product: Vertex AI
Feature slug: `vertex-ai-batch-prediction-bigquery-multiregion-tables`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI now supports using a multi-region BigQuery table as input or output for batch prediction requests.

## Lifecycle

- Latest feature date: 2023-06-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- allow (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- audit (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- credential (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
