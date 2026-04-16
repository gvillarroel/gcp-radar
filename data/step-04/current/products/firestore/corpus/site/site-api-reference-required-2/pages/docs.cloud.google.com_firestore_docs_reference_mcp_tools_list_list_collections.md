---
title: "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/list_collections
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/list_collections
  title: "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore
Reference
Send feedback
MCP Tools Reference: firestore.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: list_collections
List all the collection IDs underneath a document.
The following sample demonstrate how to use curl to invoke the list_collections MCP tool.
Curl Request
curl --location 'https://firestore.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_collections",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
The request for Firestore.ListCollectionIds .
ListCollectionIdsRequest
JSON representation
{
"parent" : string ,
"pageSize" : integer ,
"pageToken" : string ,
// Union field consistency_selector can be only one of the following:
"readTime" : string
// End of list of possible types for union field consistency_selector .
}
Fields
parent
string
Required. The parent document. In the format: projects/{project_id}/databases/{database_id}/documents/{document_path} . For example: projects/my-project/databases/my-database/documents/chatrooms/my-chatroom
pageSize
integer
The maximum number of results to return.
pageToken
string
A page token. Must be a value from ListCollectionIdsResponse .
Union field consistency_selector . The consistency mode for this request. If not set, defaults to strong consistency. consistency_selector can be only one of the following:
readTime
string ( Timestamp format)
Reads documents as they were at the given time.
This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Timestamp
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be between -62135596800 and 253402300799 inclusive (which corresponds to 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z).
nanos
integer
Non-negative fractions of a second at nanosecond resolution. This field is the nanosecond portion of the duration, not an alternative to seconds. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be between 0 and 999,999,999 inclusive.
Output Schema
The response from Firestore.ListCollectionIds .
ListCollectionIdsResponse
JSON representation
{
"collectionIds" : [
string
] ,
"nextPageToken" : string
}
Fields
collectionIds[]
string
The collection ids.
nextPageToken
string
A page token that may be used to continue the list.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-10 UTC."],[],[]]
