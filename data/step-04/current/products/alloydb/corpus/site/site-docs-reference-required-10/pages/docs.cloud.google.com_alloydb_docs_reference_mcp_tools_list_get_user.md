---
title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_user
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_user
  title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
MCP Tools Reference: alloydb
Stay organized with collections
Save and categorize content based on your preferences.
Tool: get_user
Get a user in a given project, location, and cluster
The following sample demonstrate how to use curl to invoke the get_user MCP tool.
Curl Request
curl --location 'https://alloydb.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_user",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Message for getting a User
GetUserRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. The name of the resource. For the required format, see the comment on the User.name field.
Output Schema
Message describing User object.
User
JSON representation
{
"name" : string ,
"password" : string ,
"databaseRoles" : [
string
] ,
"userType" : enum ( UserType ) ,
"keepExtraRoles" : boolean
}
Fields
name
string
Output only. Name of the resource in the form of projects/{project}/locations/{location}/cluster/{cluster}/users/{user}.
password
string
Input only. Password for the user.
databaseRoles[]
string
Optional. List of database roles this user has. The database role strings are subject to the PostgreSQL naming conventions.
userType
enum ( UserType )
Optional. Type of this user.
keepExtraRoles
boolean
Input only. If the user already exists and it has additional roles, keep them granted.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
