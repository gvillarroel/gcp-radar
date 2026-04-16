---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.159Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "gcp.managed.allowedMCPServices organization policy control"
feature_slug: "gcp-managed-allowedmcpservices-organization-policy-control"
latest_feature_date: "2026-02-17"
deprecation_date: "2026-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-iam"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
keywords:
  - "allowedmcpservices"
  - "policy"
  - "organization"
  - "control"
  - "managed"
  - "usage"
---

# gcp.managed.allowedMCPServices organization policy control

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Control of MCP usage via organization policies using the gcp.managed.allowedMCPServices constraint is deprecated, with IAM deny policies recommended instead; deprecated on 2026-03-17.

## Extended Definition

Control of MCP usage via organization policies using the gcp.managed.allowedMCPServices constraint is deprecated, with IAM deny policies recommended instead; deprecated on 2026-03-17.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation)
- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)

## Supporting Pages

### Organization policy control of MCP servers deprecation | Google Cloud MCP servers | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation)
- Source ID: `feature-recovery-http`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The custom constraint gcp.managed.allowedMCPServices and organization policy control of MCP use were deprecated on February 17, 2026 and shut down on March 17, 2026.
- Organization policy control of MCP servers deprecation | Google Cloud MCP servers | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Google Cloud MCP servers Start free Overview Guides Resources Technology areas More Overview Guides Resources Cross-product tools More Console Google Cloud MCP servers All resources Stability commitment Quotas and system limits Release notes Deprecation Deprecations Organization policy control of MCP servers deprecation AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Developer tools Google Cloud MCP servers Resources Send feedback Organization policy control of MCP servers deprecation Stay organized with collections Save and categorize content based on your preferences.
- Use Identity and Access Management (IAM) deny policies to manage control over who can use Google and Google Cloud MCP servers.
- For more information, see Control MCP use with IAM .

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- External key considerations When you use a Cloud EKM key, Google has no control over the availability of your externally-managed key in the external key management partner system.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Spanner.
- Using Cloud KMS keys gives you control over their protection level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
- Using Cloud KMS also lets you track key usage , view audit logs, and control key lifecycles.

### Control MCP use with Identity and Access Management | Google Cloud MCP servers | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- Source ID: `feature-recovery-direct-http`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Control MCP use with Identity and Access Management | Google Cloud MCP servers | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Google Cloud MCP servers Start free Overview Guides Resources Technology areas More Overview Guides Resources Cross-product tools More Console Discover Google Cloud MCP servers overview Supported products Get started Enable MCP servers Authenticate to MCP servers Manage Manage MCP servers Control access AI security and safety Access control with IAM Control MCP use with IAM Prevent read-write MCP tool use Configure Configure MCP in an AI application Monitor Google Cloud MCP servers Audit logging Use Cloud Trace to Monitor MCP tool use Troubleshoot Known issues AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Control MCP use with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- Tools that create, modify, or delete resources aren't permitted. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Deny read-write tools" , "expression" : "api.getAttribute('mcp.googleapis.com/tool.isReadOnly', false) == false" , } } } ] } After the policy is applied to a Google Cloud project, when an MCP client makes a tool call to a tool that isn't annotated as read-only , the request fails and an HTTP client error is returned.
- The following IAM deny policy prevents use of MCP tools from all services except one service for all users. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Only Allow access to the following service's MCP tools" , "expression" : "resource.service != ' SERVICE_NAME '" } } } ] } Replace SERVICE_NAME with the name of the service that you want to allow&mdash;for example, compute.googleapis.com .
- Allow MCP use by Client ID The following IAM deny policy prevents use of MCP tools by all principals except for a specific client ID. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Allow MCP tool use by the following client ID." , "expression" : "request.auth.oauth.client_id == ' CLIENT_ID '" } } } ] } Replace CLIENT_ID with the client ID&mdash;for example, my-client-id .

