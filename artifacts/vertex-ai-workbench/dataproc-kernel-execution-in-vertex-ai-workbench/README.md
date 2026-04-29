# Dataproc kernel execution in Vertex AI Workbench

Product: Vertex AI Workbench
Feature slug: `dataproc-kernel-execution-in-vertex-ai-workbench`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dataproc kernels were fixed to function correctly in Vertex AI Workbench instances.

## Lifecycle

- Latest feature date: 2023-11-16
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
- certificate
- encrypt
- firewall
- iam
- identity
- key
- kms
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
