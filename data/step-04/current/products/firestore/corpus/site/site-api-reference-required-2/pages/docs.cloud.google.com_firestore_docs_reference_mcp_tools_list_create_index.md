---
title: "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_index
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
Tool: create_index
Create a composite index.
The following sample demonstrate how to use curl to invoke the create_index MCP tool.
Curl Request
curl --location 'https://firestore.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "create_index",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
The request for [FirestoreAdmin.CreateIndex][].
CreateIndexRequest
JSON representation
{
"parent" : string ,
"index" : {
object ( Index )
}
}
Fields
parent
string
Required. A parent name of the form projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}
index
object ( Index )
Required. The composite index to create.
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
A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
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
"dimension" : integer
}
Fields
dimension
integer
The vector dimension this configuration applies to.
The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.
Output Schema
This resource represents a long-running operation that is the result of a network API call.
Operation
JSON representation
{
"name" : string ,
"metadata" : {
"@type" : string ,
field1 : ... ,
...
} ,
"done" : boolean ,
// Union field result can be only one of the following:
"error" : {
object ( Status )
} ,
"response" : {
"@type" : string ,
field1 : ... ,
...
}
// End of list of possible types for union field result .
}
Fields
name
string
The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id} .
metadata
object
Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
done
boolean
If the value is false , it means the operation is still in progress. If true , the operation is completed, and either error or response is available.
Union field result . The operation result, which can be either an error or a valid response . If done == false , neither error nor response is set. If done == true , exactly one of error or response can be set. Some services might not provide the result. result can be only one of the following:
error
object ( Status )
The error result of the operation in case of failure or cancellation.
response
object
The normal, successful response of the operation. If the original method returns no data on success, such as Delete , the response is google.protobuf.Empty . If the original method is standard Get / Create / Update , the response should be the resource. For other methods, the response should have the type XxxResponse , where Xxx is the original method name. For example, if the original method name is TakeSnapshot() , the inferred response type is TakeSnapshotResponse .
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Any
JSON representation
{
"typeUrl" : string ,
"value" : string
}
Fields
typeUrl
string
Identifies the type of the serialized Protobuf message with a URI reference consisting of a prefix ending in a slash and the fully-qualified type name.
Example: type.googleapis.com/google.protobuf.StringValue
This string must contain at least one / character, and the content after the last / must be the fully-qualified name of the type in canonical form, without a leading dot. Do not write a scheme on these URI references so that clients do not attempt to contact them.
The prefix is arbitrary and Protobuf implementations are expected to simply strip off everything up to and including the last / to identify the type. type.googleapis.com/ is a common default prefix that some legacy implementations require. This prefix does not indicate the origin of the type, and URIs containing it are not expected to respond to any requests.
All type URL strings must be legal URI references with the additional restriction (for the text format) that the content of the reference must consist only of alphanumeric characters, percent-encoded escapes, and characters in the following set (not including the outer backticks): /-.~_!$&()*+,;= . Despite our allowing percent encodings, implementations should not unescape them to prevent confusion with existing parsers. For example, type.googleapis.com%2FFoo should be rejected.
In the original design of Any , the possibility of launching a type resolution service at these type URLs was considered but Protobuf never implemented one and considers contacting these URLs to be problematic and a potential security issue. Do not attempt to contact type URLs.
value
string ( bytes format)
Holds a Protobuf serialization of the type described by type_url.
A base64-encoded string.
Status
JSON representation
{
"code" : integer ,
"message" : string ,
"details" : [
{
"@type" : string ,
field1 : ... ,
...
}
]
}
Fields
code
integer
The status code, which should be an enum value of google.rpc.Code .
message
string
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
details[]
object
A list of messages that carry the error details. There is a common set of message types for APIs to use.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-26 UTC."],[],[]]
