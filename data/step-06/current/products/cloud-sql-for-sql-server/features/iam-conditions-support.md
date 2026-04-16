---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.581Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "IAM Conditions support"
feature_slug: "iam-conditions-support"
latest_feature_date: "2021-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mcp/access-control"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-iam"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-organization"
keywords:
  - "iam"
  - "conditions"
  - "enables"
  - "conditional"
  - "attribute"
  - "based"
  - "access"
  - "control"
---

# IAM Conditions support

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

IAM Conditions support enables conditional, attribute-based access control for Cloud SQL resources, including instances.

## Extended Definition

IAM Conditions support enables conditional, attribute-based access control for Cloud SQL resources, including instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)

## Supporting Pages

### "Access control with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- Source ID: `site-docs-reference-required-3`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity and Access Management conditions let you define and enforce conditional, attribute-based access control.
- You can use IAM Conditions in the following places: Allow policy role bindings, including role bindings managed by Privileged Access Manager entitlements Deny policy rules Policy bindings for principal access boundary policies For more information, see the Attribute reference for Identity and Access Management Conditions .
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Access control with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- This means you can grant access to principals only if specified conditions are met, such as the time of the request, the resource name, the resource type, or the tags attached to the resource.

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
- Source ID: `site-docs-reference-required-3`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Control MCP use with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- Deny policy attributes The following attributes can be used in your Identity and Access Management deny policies: tool.isReadOnly : a resource attribute that indicates whether the invoked tool only reads data. request.auth.oauth.client id : the OAuth client ID. resource.service : the name of service—for example, bigquery.googleapis.com .
- You can configure authorization policies for agents and MCP servers using existing security controls, such as IAM deny policies, and layer these attributes to build your security and governance policies.
- Limitations Control of MCP use with IAM has the following limitations: The resource.service , and request.auth.oauth.client id attributes are only supported for IAM deny policies.

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- Source ID: `site-docs-reference-required-3`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Control MCP use with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- Deny policy attributes The following attributes can be used in your Identity and Access Management deny policies: tool.isReadOnly : a resource attribute that indicates whether the invoked tool only reads data. request.auth.oauth.client id : the OAuth client ID. resource.service : the name of service—for example, bigquery.googleapis.com .
- You can configure authorization policies for agents and MCP servers using existing security controls, such as IAM deny policies, and layer these attributes to build your security and governance policies.
- Limitations Control of MCP use with IAM has the following limitations: The resource.service , and request.auth.oauth.client id attributes are only supported for IAM deny policies.

