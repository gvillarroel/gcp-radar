# Vertex AI Workbench managed notebooks

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-managed-notebooks`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A security patch in the M125 release fixed adm and docker permission handling for managed notebooks when root access is not enabled; Support for Vertex AI Workbench managed notebooks is deprecated, with support ending on 2025-01-30 and managed notebook instance creation removed; deprecated on 2025-01-30.

## Lifecycle

- Latest feature date: 2024-09-26
- Deprecation date: 2025-01-30
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
- armor
- auth
- certificate
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
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
