---
title: "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/list_indexes
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/list_indexes
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
Tool: list_indexes
List Firestore indexes.
The following sample demonstrate how to use curl to invoke the list_indexes MCP tool.
Curl Request
curl --location 'https://firestore.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_indexes",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
The request for FirestoreAdmin.ListIndexes .
ListIndexesRequest
JSON representation
{
"parent" : string ,
"filter" : string ,
"pageSize" : integer ,
"pageToken" : string
}
Fields
parent
string
Required. A parent name of the form projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}
filter
string
The filter to apply to list results.
pageSize
integer
The number of results to return.
pageToken
string
A page token, returned from a previous call to FirestoreAdmin.ListIndexes , that may be used to get the next page of results.
Output Schema
The response for FirestoreAdmin.ListIndexes .
ListIndexesResponse
JSON representation
{
"indexes" : [
{
object ( Index )
}
] ,
"nextPageToken" : string
}
Fields
indexes[]
object ( Index )
The requested indexes.
nextPageToken
string
A page token that may be used to request another page of results. If blank, this is the last page.
Index
JSON representation
{
"name" : string ,
"queryScope" : enum ( QueryScope ) ,
"apiScope" : enum ( ApiScope ) ,
"fields" : [
{
object ( IndexField )
}
] ,
"state" : enum ( State ) ,
"density" : enum ( Density ) ,
"multikey" : boolean ,
"shardCount" : integer ,
"unique" : boolean
}
Fields
name
string
Output only. A server defined name for this index. The form of this name for composite indexes will be: projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id} For single field indexes, this field will be empty.
queryScope
enum ( QueryScope )
Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection ID.
Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection ID as this index.
apiScope
enum ( ApiScope )
The API scope supported by this index.
fields[]
object ( IndexField )
The fields supported by this index.
For composite indexes, this requires a minimum of 2 and a maximum of 100 fields. The last field entry is always for the field path __name__ . If, on creation, __name__ was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the __name__ will be ordered ASCENDING (unless explicitly specified).
For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.
state
enum ( State )
Output only. The serving state of the index.
density
enum ( Density )
Immutable. The density configuration of the index.
multikey
boolean
Optional. Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors.
Note this field only applies to index with MONGODB_COMPATIBLE_API ApiScope.
shardCount
integer
Optional. The number of shards for the index.
unique
boolean
Optional. Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.
IndexField
JSON representation
{
"fieldPath" : string ,
// Union field value_mode can be only one of the following:
"order" : enum ( Order ) ,
"arrayConfig" : enum ( ArrayConfig ) ,
"vectorConfig" : {
object ( VectorConfig )
}
// End of list of possible types for union field value_mode .
}
Fields
fieldPath
string
Can be name . For single field indexes, this must match the name of the field or may be omitted.
Union field value_mode . How the field value is indexed. value_mode can be only one of the following:
order
enum ( Order )
Indicates that this field supports ordering by the specified order or comparing using =, !=, <, <=, >, >=.
arrayConfig
enum ( ArrayConfig )
Indicates that this field supports operations on array_value s.
vectorConfig
object ( VectorConfig )
Indicates that this field supports nearest neighbor and distance operations on vector.
VectorConfig
JSON representation
{
"dimension" : integer ,
// Union field type can be only one of the following:
"flat" : {
object ( FlatIndex )
}
// End of list of possible types for union field type .
}
Fields
dimension
integer
Required. The vector dimension this configuration applies to.
The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.
Union field type . The type of index used. type can be only one of the following:
flat
object ( FlatIndex )
Indicates the vector index is a flat index.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-19 UTC."],[],[]]
