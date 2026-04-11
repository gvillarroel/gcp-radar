---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:52.942Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Control MCP use with organization policies"
feature_slug: "control-mcp-use-with-organization-policies"
latest_feature_date: "2026-02-15"
deprecation_date: "2026-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-proj"
  - "https://docs.cloud.google.com/resource-manager/docs/reference/orgpolicy/rest/v2/organizations.policies"
keywords:
  - "control"
  - "mcp"
  - "use"
  - "with"
  - "organization"
  - "policies"
  - "using"
  - "the"
---

# Control MCP use with organization policies

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Organization policies using the gcp.managed.allowedMCPServices constraint are deprecated and replaced by IAM deny policies for controlling MCP use; deprecated on 2026-03-17.

## Extended Definition

Organization policies using the gcp.managed.allowedMCPServices constraint are deprecated and replaced by IAM deny policies for controlling MCP use; deprecated on 2026-03-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj)
- [https://docs.cloud.google.com/resource-manager/docs/reference/orgpolicy/rest/v2/organizations.policies](https://docs.cloud.google.com/resource-manager/docs/reference/orgpolicy/rest/v2/organizations.policies)

## Supporting Pages

### Access control for organization resources with IAM | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access control for organization resources with IAM Resource Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/resource-manager/docs/access-control-org Control IAM access for organization resources.
- Manage allow policies, grant roles, apply Organization Policy, and test permissions.

### Access control for projects with IAM | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Control resource permissions and roles using allow policies, enforcing the principle of least privilege.
- Access control for projects with IAM Resource Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/resource-manager/docs/access-control-proj Manage Google Cloud project access with IAM.

### REST Resource: organizations.policies | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/reference/orgpolicy/rest/v2/organizations.policies](https://docs.cloud.google.com/resource-manager/docs/reference/orgpolicy/rest/v2/organizations.policies)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: organizations.policies Resource Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/resource-manager/docs/reference/orgpolicy/rest/v2/organizations.policies Documentation · Security · Resource Manager · Reference · Send feedback · Resource: Policy · JSON representation · Methods · Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources.

