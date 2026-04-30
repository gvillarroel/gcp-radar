# Vertex AI Data Labeling

Product: Vertex AI
Feature slug: `vertex-ai-data-labeling`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI Data Labeling enabled users to create and manage dataset annotations within the Vertex AI service; deprecated on 2024-07-01.

## Lifecycle

- Latest feature date: 2023-06-30
- Deprecation date: 2024-07-01
- Status: deprecation_noted

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
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations)
