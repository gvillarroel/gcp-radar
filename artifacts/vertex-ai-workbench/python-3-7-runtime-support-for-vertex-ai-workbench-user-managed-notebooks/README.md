# Python 3.7 runtime support for Vertex AI Workbench user-managed notebooks

Product: Vertex AI Workbench
Feature slug: `python-3-7-runtime-support-for-vertex-ai-workbench-user-managed-notebooks`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Python 3.7 support was removed from Vertex AI Workbench user-managed notebooks; deprecated on 2023-12-14.

## Lifecycle

- Latest feature date: 2023-12-14
- Deprecation date: 2023-12-14
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

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
