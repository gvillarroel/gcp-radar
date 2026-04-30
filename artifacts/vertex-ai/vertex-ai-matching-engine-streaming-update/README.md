# Vertex AI Matching Engine Streaming Update

Product: Vertex AI
Feature slug: `vertex-ai-matching-engine-streaming-update`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI Matching Engine now offers General Availability for Streaming Update, enabling real-time incremental index updates for ANN indexes; Vertex AI Matching Engine introduced preview support for Streaming Update, enabling real-time index updates for the ANN service.

## Lifecycle

- Latest feature date: 2022-12-20
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
- auth
- authorization
- iam
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
