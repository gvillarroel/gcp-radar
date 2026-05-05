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

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- certificate (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- firewall (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes)
