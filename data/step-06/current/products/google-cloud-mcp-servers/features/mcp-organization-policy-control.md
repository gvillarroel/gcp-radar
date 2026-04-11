---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:46.899Z"
product_name: "Google Cloud MCP servers"
product_slug: "google-cloud-mcp-servers"
feature_name: "MCP organization policy control"
feature_slug: "mcp-organization-policy-control"
latest_feature_date: "2026-03-17"
deprecation_date: "2026-03-17"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/mcp/control-mcp-use-iam"
  - "https://docs.cloud.google.com/mcp/prevent-read-write-tool-use"
  - "https://docs.cloud.google.com/mcp/monitor-mcp-tool-use-with-cloud-trace"
keywords:
  - "mcp"
  - "organization"
  - "policy"
  - "control"
  - "for"
  - "use"
  - "via"
  - "the"
---

# MCP organization policy control

Product: Google Cloud MCP servers
Coverage: LOW

## Step 02 Summary

Organization policy control for MCP use via the gcp.managed.allowedMCPServices custom constraint; Organization policy control for MCP use via the gcp.managed.allowedMCPServices custom constraint; deprecated on 2026-03-17.

## Extended Definition

Organization policy control for MCP use via the gcp.managed.allowedMCPServices custom constraint; Organization policy control for MCP use via the gcp.managed.allowedMCPServices custom constraint; deprecated on 2026-03-17.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/prevent-read-write-tool-use](https://docs.cloud.google.com/mcp/prevent-read-write-tool-use)
- [https://docs.cloud.google.com/mcp/monitor-mcp-tool-use-with-cloud-trace](https://docs.cloud.google.com/mcp/monitor-mcp-tool-use-with-cloud-trace)

## Supporting Pages

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- The following IAM deny policy prevents use of MCP tools from all services except one service for all users. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Only Allow access to the following service's MCP tools" , "expression" : "resource.service != ' SERVICE NAME '" } } } ] } Replace SERVICE NAME with the name of the service that you want to allow—for example, compute.googleapis.com .
- Allow MCP use by Client ID The following IAM deny policy prevents use of MCP tools by all principals except for a specific client ID. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Allow MCP tool use by the following client ID." , "expression" : "request.auth.oauth.client id == ' CLIENT ID '" } } } ] } Replace CLIENT ID with the client ID—for example, my-client-id .
- Deny MCP use by service The following IAM deny policy prevents use of MCP tools from a specific service for all users. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Deny all MCP tool use from this service" , "expression" : "resource.service == ' SERVICE NAME '" } } } ] } Replace SERVICE NAME with the service name—for example, bigquery.googleapis.com .
- Deny all MCP tool use The following IAM deny policy prevents use of Google and Google Cloud MCP server tools by all users. { "displayName" : "Deny access to MCP tools for all users" , "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ] } } ] } After the policy is applied to a Google Cloud project, when a client calls tools/call , the request fails and an HTTP client error is returned.

### "Prevent read-write MCP tool use \_|\_ Google Cloud MCP servers \_|\_ Google\

- URL: [https://docs.cloud.google.com/mcp/prevent-read-write-tool-use](https://docs.cloud.google.com/mcp/prevent-read-write-tool-use)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Control MCP use with IAM attributes The following attributes can be used in your Identity and Access Management deny policies: tool.isReadOnly : a resource attribute that indicates whether the invoked tool only reads data. request.auth.oauth.client id : the OAuth client ID. resource.service : the name of service—for example, bigquery.googleapis.com .
- Limitations Control of MCP use with IAM has the following limitations: The resource.service , and request.auth.oauth.client id attributes are only supported for IAM deny policies.
- Apply a deny policy To apply a deny policy to a Google Cloud project, add the policy to a file named policy.json , and then run the following command: gcloud iam policies create mcp-deny-policy \ --attachment-point = cloudresourcemanager.googleapis.com/projects/ PROJECT ID \ --kind = denypolicies \ --policy-file = policy.json For more information, see Deny policies .
- You can configure authorization policies for agents and MCP servers using existing security controls, such as IAM deny policies, and layer these attributes to build your security and governance policies.

### "Use Cloud Trace to monitor MCP tool use \_|\_ Google Cloud MCP servers \_\

- URL: [https://docs.cloud.google.com/mcp/monitor-mcp-tool-use-with-cloud-trace](https://docs.cloud.google.com/mcp/monitor-mcp-tool-use-with-cloud-trace)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- For MCP, this value is always execute tool because the only supported operation is tools/call . gen ai.tool.name The name of the MCP tool that was invoked. jsonrpc.protocol.version The version of the JSON-RPC protocol. jsonrpc.request.id The unique ID used for the JSON-RPC invocation. mcp.method.name The MCP operation name.
- Example use-cases for Cloud Trace You can use Cloud Trace to answer questions like the following: Which Google MCP servers and tools does your project invoke?
- For example, tools/call . mcp.protocol.version The version of the MCP protocol used.
- This value is always gcp . gcp.mcp.server.id The Uniform Resource Name (URN) of the MCP server. gcp.project id The ID of the Google Cloud project where the telemetry data is sent.

