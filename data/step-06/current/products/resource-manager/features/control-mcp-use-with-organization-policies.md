---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.017Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Control MCP use with organization policies"
feature_slug: "control-mcp-use-with-organization-policies"
latest_feature_date: "2026-02-15"
deprecation_date: "2026-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mcp/control-mcp-use-iam"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-organization"
keywords:
  - "control"
  - "mcp"
  - "use"
  - "organization"
  - "policies"
  - "gcp"
  - "managed"
  - "allowedmcpservices"
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

- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)

## Supporting Pages

### "Access control for projects with IAM \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IAM lets you control who (users) has what access (roles) to which resources by setting allow policies.
- The role is granted on the organization resource or folder that contains the projects: Method Required permission(s) resourcemanager.projects.create resourcemanager.projects.create resourcemanager.projects.delete resourcemanager.projects.delete resourcemanager.projects.get resourcemanager.projects.get Granting this permission will also grant access to get the name of the billing account associated with the project through the Billing API method billing.projects.getBillingInfo . resourcemanager.projects.getIamPolicy resourcemanager.projects.getIamPolicy resourcemanager.projects.list resourcemanager.projects.list resourcemanager.projects.search resourcemanager.projects.get resourcemanager.projects.setIamPolicy resourcemanager.projects.setIamPolicy resourcemanager.projects.testIamPermissions Does not require any permission. resourcemanager.projects.undelete resourcemanager.projects.undelete resourcemanager.projects.patch To update a project's metadata, requires resourcemanager.projects.update permission.
- Lowest-level resources where you can grant this role: Project iam.policybindings. iam.policybindings.get iam.policybindings.list resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Browser ( roles/ browser ) Read access to browse the hierarchy for a project, including the folder, organization, and allow policy.
- Lowest-level resources where you can grant this role: Project resourcemanager.folders.get resourcemanager.folders.list resourcemanager. organizations. get resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list Basic roles Use basic roles only when necessary.

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- Source ID: `site-docs-reference-required-3`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- You can configure authorization policies for agents and MCP servers using existing security controls, such as IAM deny policies, and layer these attributes to build your security and governance policies.
- Limitations Control of MCP use with IAM has the following limitations: The resource.service , and request.auth.oauth.client id attributes are only supported for IAM deny policies.
- Example IAM policies The following sections give examples of Identity and Access Management deny policies that can be used to control MCP use.
- Apply a deny policy To apply a deny policy to a Google Cloud project, add the policy to a file named policy.json , and then run the following command: gcloud iam policies create mcp-deny-policy \ --attachment-point = cloudresourcemanager.googleapis.com/projects/ PROJECT ID \ --kind = denypolicies \ --policy-file = policy.json For more information, see Deny policies .

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
- Source ID: `site-docs-reference-required-6`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- You can configure authorization policies for agents and MCP servers using existing security controls, such as IAM deny policies, and layer these attributes to build your security and governance policies.
- Limitations Control of MCP use with IAM has the following limitations: The resource.service , and request.auth.oauth.client id attributes are only supported for IAM deny policies.
- Example IAM policies The following sections give examples of Identity and Access Management deny policies that can be used to control MCP use.
- Apply a deny policy To apply a deny policy to a Google Cloud project, add the policy to a file named policy.json , and then run the following command: gcloud iam policies create mcp-deny-policy \ --attachment-point = cloudresourcemanager.googleapis.com/projects/ PROJECT ID \ --kind = denypolicies \ --policy-file = policy.json For more information, see Deny policies .

