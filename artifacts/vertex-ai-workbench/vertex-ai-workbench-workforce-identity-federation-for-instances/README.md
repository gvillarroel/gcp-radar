# Vertex AI Workbench Workforce Identity Federation for instances

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-workforce-identity-federation-for-instances`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI Workbench instances can now use Workforce Identity Federation, allowing instance creation and management using credentials from external identity providers.

## Lifecycle

- Latest feature date: 2024-06-03
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
