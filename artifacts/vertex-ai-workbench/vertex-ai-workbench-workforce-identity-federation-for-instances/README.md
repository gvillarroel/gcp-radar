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

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- allow (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- armor (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- certificate (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- credential (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- firewall (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication)
