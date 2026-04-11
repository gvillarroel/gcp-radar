---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.312Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Admin API MCP server"
feature_slug: "bigtable-admin-api-mcp-server"
latest_feature_date: "2026-02-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp"
keywords:
  - "server"
  - "mcp"
  - "admin"
  - "api"
  - "bigtable"
  - "now"
  - "the"
  - "is"
---

# Bigtable Admin API MCP server

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The Bigtable Admin API MCP server is now available in preview to let agents and AI applications perform data-related tasks.

## Extended Definition

The Bigtable Admin API MCP server is now available in preview to let agents and AI applications perform data-related tasks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp)

## Supporting Pages

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list tables", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesRequest JSON representation { "parent" : string , "view" : enum ( View ) , "pageSize" : integer , "pageToken" : string } Fields parent string Required.
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Output Schema Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesResponse JSON representation { "tables" : [ { object ( Table ) } ] , "nextPageToken" : string } Fields tables[] object ( Table ) The tables present in the requested instance. nextPageToken string Set if not all tables could be returned in a single response.
- Otherwise, the change stream is disabled and the change stream is not retained. deletionProtection boolean Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: The table.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get table", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for google.bigtable.admin.v2.BigtableTableAdmin.GetTable GetTableRequest JSON representation { "name" : string , "view" : enum ( View ) } Fields name string Required.
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Otherwise, the change stream is disabled and the change stream is not retained. deletionProtection boolean Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: The table.
- Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.

### "MCP Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The bigtableadmin.googleapis.com MCP server has the following MCP endpoint: https://bigtableadmin.googleapis.com/mcp MCP Tools An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
- MCP server for Bigtable Admin API Server Endpoints An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection.
- The bigtableadmin.googleapis.com MCP server has the following tools: MCP Tools create instance Create a new instance in the specified project.
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/list", "jsonrpc": "2.0", "id": 1 }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

