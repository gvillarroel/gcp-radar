# Vertex AI Model Registry model copy across projects (Preview)

Product: Vertex AI
Feature slug: `vertex-ai-model-registry-model-copy-across-projects-preview`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Allows copying tuned Gemini 1.5 Pro 002 and Gemini 1.5 Flash 002 adapter models between Google Cloud projects; Adds Preview support in Vertex AI Model Registry for copying models across different projects and regions.

## Lifecycle

- Latest feature date: 2024-12-17
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
- encrypt
- iam
- key
- logging
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
