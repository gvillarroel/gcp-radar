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

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))
- allow (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
