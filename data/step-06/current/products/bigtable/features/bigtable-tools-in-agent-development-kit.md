---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.965Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable tools in Agent Development Kit"
feature_slug: "bigtable-tools-in-agent-development-kit"
latest_feature_date: "2026-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateInstanceMetadata"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
keywords:
  - "agent"
  - "tools"
  - "development"
  - "generally"
  - "available"
---

# Bigtable tools in Agent Development Kit

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable tools in the Agent Development Kit are now generally available, enabling AI agents to discover table and instance metadata and run LLM-powered SQL queries.

## Extended Definition

Bigtable tools in the Agent Development Kit are now generally available, enabling AI agents to discover table and instance metadata and run LLM-powered SQL queries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli](https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateInstanceMetadata](https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateInstanceMetadata)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)

## Supporting Pages

### "Quickstart: Create an instance and write data with the cbt CLI \_|\_ Bigtable\

- URL: [https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli](https://docs.cloud.google.com/bigtable/docs/create-instance-write-data-cbt-cli)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### CreateInstanceMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateInstanceMetadata](https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateInstanceMetadata)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create table", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for Bigtable.CreateTable CreateTableRequest JSON representation { "projectId" : string , "instanceId" : string , "tableId" : string , "columnFamilies" : [ string ] } Fields projectId string Required.
- Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.
- If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN replication status .
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

