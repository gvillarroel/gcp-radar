---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.365Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable HBase migration tooling"
feature_slug: "cloud-bigtable-hbase-migration-tooling"
latest_feature_date: "2022-08-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table"
keywords:
  - "tooling"
  - "migration"
  - "hbase"
  - "new"
  - "available"
  - "bigtable"
  - "is"
  - "to"
---

# Cloud Bigtable HBase migration tooling

Product: Bigtable
Coverage: LOW

## Step 02 Summary

New tooling is available to migrate Bigtable workloads from HBase clusters on other Google Cloud services.

## Extended Definition

New tooling is available to migrate Bigtable workloads from HBase clusters on other Google Cloud services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)

## Supporting Pages

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list tables", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesRequest JSON representation { "parent" : string , "view" : enum ( View ) , "pageSize" : integer , "pageToken" : string } Fields parent string Required.
- Output Schema Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesResponse JSON representation { "tables" : [ { object ( Table ) } ] , "nextPageToken" : string } Fields tables[] object ( Table ) The tables present in the requested instance. nextPageToken string Set if not all tables could be returned in a single response.
- Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create table", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for Bigtable.CreateTable CreateTableRequest JSON representation { "projectId" : string , "instanceId" : string , "tableId" : string , "columnFamilies" : [ string ] } Fields projectId string Required.
- Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- The following update operations are allowed for row key schema: - Update from an empty schema to a new schema. - Remove the existing schema.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get table", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for google.bigtable.admin.v2.BigtableTableAdmin.GetTable GetTableRequest JSON representation { "name" : string , "view" : enum ( View ) } Fields name string Required.
- Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- The following update operations are allowed for row key schema: - Update from an empty schema to a new schema. - Remove the existing schema.

