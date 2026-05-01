# Single-User mode startup for Vertex AI Workbench instances

Product: Vertex AI Workbench
Feature slug: `single-user-mode-startup-for-vertex-ai-workbench-instances`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Opening a managed notebook instance in Single User mode starts more reliably without unnecessary delays.

## Lifecycle

- Latest feature date: 2022-08-17
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
- certificate
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

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
