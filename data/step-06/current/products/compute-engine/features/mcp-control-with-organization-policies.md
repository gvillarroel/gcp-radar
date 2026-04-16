---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.090Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "MCP control with organization policies"
feature_slug: "mcp-control-with-organization-policies"
latest_feature_date: "2026-02-17"
deprecation_date: "2026-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation"
  - "https://docs.cloud.google.com/mcp/deprecations"
  - "https://docs.cloud.google.com/mcp/access-control"
keywords:
  - "mcp"
  - "control"
  - "organization"
  - "policies"
  - "gcp"
  - "managed"
  - "allowedmcpservices"
  - "constraint"
---

# MCP control with organization policies

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Using organization policies and the gcp.managed.allowedMCPServices constraint to control MCP use is being retired in favor of IAM deny policies; deprecated on 2026-03-17.

## Extended Definition

Using organization policies and the gcp.managed.allowedMCPServices constraint to control MCP use is being retired in favor of IAM deny policies; deprecated on 2026-03-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation)
- [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations)
- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)

## Supporting Pages

### "Organization policy control of MCP servers deprecation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation)
- Source ID: `site-docs-reference-required-4`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The custom constraint gcp.managed.allowedMCPServices and organization policy control of MCP use were deprecated on February 17, 2026 and shut down on March 17, 2026.
- Home Documentation Developer tools Google Cloud MCP servers Resources Send feedback Organization policy control of MCP servers deprecation Stay organized with collections Save and categorize content based on your preferences.
- Use Identity and Access Management (IAM) deny policies to manage control over who can use Google and Google Cloud MCP servers.
- For more information, see Control MCP use with IAM .

### Deprecations \_|\_ Google Cloud MCP servers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations)
- Source ID: `site-docs-reference-required-4`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Feature Deprecated date Shutdown date Details The custom constraint gcp.managed.allowedMCPServices and organization policy control of MCP use February 17, 2026 March 17, 2026 See Organization policy control of MCP servers deprecation .
- Home Documentation Developer tools Google Cloud MCP servers Resources Send feedback Deprecations Stay organized with collections Save and categorize content based on your preferences.
- The Google Cloud Platform Terms of Service (section "Discontinuation of Services") defines the deprecation policy that applies to Google Cloud MCP servers.
- For details, see the Google Developers Site Policies .

### "Access control with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- Source ID: `site-docs-reference-required-4`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Access control with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- Google Cloud MCP servers roles and permissions The following sections describe the IAM roles required for interacting with and controlling the use of Google and Google Cloud MCP servers.
- Google and Google Cloud remote MCP servers use Identity and Access Management (IAM) to control access to resources at different levels of your resource hierarchy.
- For Google and Google Cloud remote MCP servers, access control can be configured at the project level and at the individual resource level.

