# Access Transparency for Vertex AI

Product: Vertex AI
Feature slug: `access-transparency-for-vertex-ai`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI now offers Access Transparency, providing visibility into Google staff access to customer data and support activities.

## Lifecycle

- Latest feature date: 2021-07-27
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

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency)
