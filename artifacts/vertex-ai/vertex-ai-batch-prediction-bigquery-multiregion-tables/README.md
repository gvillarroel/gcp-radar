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

- access
- allow
- audit
- auth
- authorization
- credential
- iam
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
