# Vertex AI Workbench managed end-user credentials

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-managed-end-user-credentials`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Workbench instances using managed end-user credentials support had an incompatibility fix to improve compatibility with the Dataproc JupyterLab workflow; The managed end-user credentials preview feature was patched to fix an incompatibility when listing Dataproc remote kernels.

## Lifecycle

- Latest feature date: 2025-09-17
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
- certificate
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
