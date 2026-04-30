# Vertex AI resource-level IAM for Featurestore and EntityType

Product: Vertex AI
Feature slug: `vertex-ai-resource-level-iam-for-featurestore-and-entitytype`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI now supports applying IAM policies directly at the Featurestore and EntityType resource level.

## Lifecycle

- Latest feature date: 2023-02-13
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
- auth
- authorization
- iam
- identity
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
