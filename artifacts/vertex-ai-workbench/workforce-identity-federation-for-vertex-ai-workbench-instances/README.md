# Workforce Identity Federation for Vertex AI Workbench instances

Product: Vertex AI Workbench
Feature slug: `workforce-identity-federation-for-vertex-ai-workbench-instances`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Makes Workforce Identity Federation generally available for creating and managing Vertex AI Workbench instances using external identity provider credentials.

## Lifecycle

- Latest feature date: 2025-10-01
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
- armor
- auth
- authorization
- certificate
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication)
