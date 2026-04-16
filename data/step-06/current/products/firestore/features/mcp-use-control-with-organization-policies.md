---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.858Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "MCP use control with organization policies"
feature_slug: "mcp-use-control-with-organization-policies"
latest_feature_date: "2026-02-17"
deprecation_date: "2026-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mcp/control-mcp-use-iam"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-organization"
  - "https://docs.cloud.google.com/mcp/access-control"
keywords:
  - "mcp"
  - "use"
  - "control"
  - "organization"
  - "policies"
  - "gcp"
  - "managed"
  - "allowedmcpservices"
---

# MCP use control with organization policies

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

The gcp.managed.allowedMCPServices organization policy constraint for controlling MCP use is deprecated in favor of IAM deny policies; deprecated on 2026-03-17.

## Extended Definition

The gcp.managed.allowedMCPServices organization policy constraint for controlling MCP use is deprecated in favor of IAM deny policies; deprecated on 2026-03-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)

## Supporting Pages

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
- Source ID: `site-docs-reference-required-3`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure authorization policies for agents and MCP servers using existing security controls, such as IAM deny policies, and layer these attributes to build your security and governance policies.
- Limitations Control of MCP use with IAM has the following limitations: The resource.service , and request.auth.oauth.client id attributes are only supported for IAM deny policies.
- Example IAM policies The following sections give examples of Identity and Access Management deny policies that can be used to control MCP use.
- IAM deny policies that use the resource.service attribute must be managed with Google Cloud CLI.

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- Source ID: `site-docs-reference-required-3`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure authorization policies for agents and MCP servers using existing security controls, such as IAM deny policies, and layer these attributes to build your security and governance policies.
- Limitations Control of MCP use with IAM has the following limitations: The resource.service , and request.auth.oauth.client id attributes are only supported for IAM deny policies.
- Example IAM policies The following sections give examples of Identity and Access Management deny policies that can be used to control MCP use.
- IAM deny policies that use the resource.service attribute must be managed with Google Cloud CLI.

### "Access control with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- Source ID: `site-docs-reference-required-3`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use IAM Conditions in the following places: Allow policy role bindings, including role bindings managed by Privileged Access Manager entitlements Deny policy rules Policy bindings for principal access boundary policies For more information, see the Attribute reference for Identity and Access Management Conditions .
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Access control with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- To learn more about other management access tasks, such as revoking IAM roles or granting multiple IAM roles, see Manage access to projects, folders, and organizations in the IAM documentation.
- Google Cloud MCP servers roles and permissions The following sections describe the IAM roles required for interacting with and controlling the use of Google and Google Cloud MCP servers.

