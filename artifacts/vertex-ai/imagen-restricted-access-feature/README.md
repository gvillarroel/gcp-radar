# Imagen restricted access feature

Product: Vertex AI
Feature slug: `imagen-restricted-access-feature`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Imagen on Vertex AI announced restricted access availability for additional GA features.

## Lifecycle

- Latest feature date: 2023-08-29
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
- certificate
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
