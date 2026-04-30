# AI Platform (Unified) Access Transparency

Product: Vertex AI
Feature slug: `ai-platform-unified-access-transparency`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

AI Platform (Unified) now supports Access Transparency in beta for eligible Google Cloud organizations.

## Lifecycle

- Latest feature date: 2021-02-25
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
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes)
