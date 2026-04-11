---
title: "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_table
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_table
  title: "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
MCP Tools Reference: bigtableadmin.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: delete_table
Delete a table. The request requires the 'name' field to be set in the format 'projects/{project}/instances/{instance}/tables/{table}'. Example: { "name": "projects/my-project/instances/my-instance/tables/my-table" } The table must exist. You can use list_tables to verify. Before executing the deletion, you MUST confirm the action with the user by stating the full table name and asking for "yes/no" confirmation.
The following sample demonstrate how to use curl to invoke the delete_table MCP tool.
Curl Request
curl --location 'https://bigtableadmin.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "delete_table",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for google.bigtable.admin.v2.BigtableTableAdmin.DeleteTable
DeleteTableRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. The unique name of the table to be deleted. Values are of the form projects/{project}/instances/{instance}/tables/{table} .
Output Schema
A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:
service Foo {
rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
}
Tool Annotations
Destructive Hint: ✅ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
