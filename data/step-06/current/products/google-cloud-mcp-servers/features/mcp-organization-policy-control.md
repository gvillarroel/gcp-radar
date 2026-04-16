---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:48.600Z"
product_name: "Google Cloud MCP servers"
product_slug: "google-cloud-mcp-servers"
feature_name: "MCP organization policy control"
feature_slug: "mcp-organization-policy-control"
latest_feature_date: "2026-03-17"
deprecation_date: "2026-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mcp/access-control"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-iam"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-organization"
keywords:
  - "mcp"
  - "organization"
  - "policy"
  - "control"
  - "use"
  - "via"
  - "gcp"
  - "managed"
---

# MCP organization policy control

Product: Google Cloud MCP servers
Coverage: MEDIUM

## Step 02 Summary

Organization policy control for MCP use via the gcp.managed.allowedMCPServices custom constraint; Organization policy control for MCP use via the gcp.managed.allowedMCPServices custom constraint; deprecated on 2026-03-17.

## Extended Definition

Organization policy control for MCP use via the gcp.managed.allowedMCPServices custom constraint; Organization policy control for MCP use via the gcp.managed.allowedMCPServices custom constraint; deprecated on 2026-03-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)

## Supporting Pages

### "Access control with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- You can control MCP use based on project resource tags, read-only, or read-write tool use.
- You can use IAM Conditions in the following places: Allow policy role bindings, including role bindings managed by Privileged Access Manager entitlements Deny policy rules Policy bindings for principal access boundary policies For more information, see the Attribute reference for Identity and Access Management Conditions .
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Access control with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- To learn more about other management access tasks, such as revoking IAM roles or granting multiple IAM roles, see Manage access to projects, folders, and organizations in the IAM documentation.

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Control MCP use with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- Example IAM policies The following sections give examples of Identity and Access Management deny policies that can be used to control MCP use.
- For information on how to attach a deny policy to an organization or folder, see Attachment point .
- Tools that create, modify, or delete resources aren't permitted. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Deny read-write tools" , "expression" : "api.getAttribute('mcp.googleapis.com/tool.isReadOnly', false) == false" , } } } ] } After the policy is applied to a Google Cloud project, when an MCP client makes a tool call to a tool that isn't annotated as read-only , the request fails and an HTTP client error is returned.

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
- Source ID: `site-docs-reference-required-2`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Control MCP use with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- Example IAM policies The following sections give examples of Identity and Access Management deny policies that can be used to control MCP use.
- For information on how to attach a deny policy to an organization or folder, see Attachment point .
- Tools that create, modify, or delete resources aren't permitted. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Deny read-write tools" , "expression" : "api.getAttribute('mcp.googleapis.com/tool.isReadOnly', false) == false" , } } } ] } After the policy is applied to a Google Cloud project, when an MCP client makes a tool call to a tool that isn't annotated as read-only , the request fails and an HTTP client error is returned.

