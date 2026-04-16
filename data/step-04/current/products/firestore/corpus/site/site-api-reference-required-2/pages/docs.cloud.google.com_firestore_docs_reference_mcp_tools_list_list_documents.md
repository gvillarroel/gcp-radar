---
title: "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/list_documents
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/list_documents
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
Tool: list_documents
List documents from a Firestore database.
The following sample demonstrate how to use curl to invoke the list_documents MCP tool.
Curl Request
curl --location 'https://firestore.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_documents",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
The request for Firestore.ListDocuments .
ListDocumentsRequest
JSON representation
{
"parent" : string ,
"collectionId" : string ,
"pageSize" : integer ,
"pageToken" : string ,
"orderBy" : string ,
"mask" : {
object ( DocumentMask )
} ,
"showMissing" : boolean ,
// Union field consistency_selector can be only one of the following:
"transaction" : string ,
"readTime" : string
// End of list of possible types for union field consistency_selector .
}
Fields
parent
string
Required. The parent resource name. In the format: projects/{project_id}/databases/{database_id}/documents or projects/{project_id}/databases/{database_id}/documents/{document_path} .
For example: projects/my-project/databases/my-database/documents or projects/my-project/databases/my-database/documents/chatrooms/my-chatroom
collectionId
string
Optional. The collection ID, relative to parent , to list.
For example: chatrooms or messages .
This is optional, and when not provided, Firestore will list documents from all collections under the provided parent .
pageSize
integer
Optional. The maximum number of documents to return in a single response.
Firestore may return fewer than this value.
pageToken
string
Optional. A page token, received from a previous ListDocuments response.
Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of page_size ) must match the values set in the request that generated the page token.
orderBy
string
Optional. The optional ordering of the documents to return.
For example: priority desc, __name__ desc .
This mirrors the ORDER BY used in Firestore queries but in a string representation. When absent, documents are ordered based on __name__ ASC .
mask
object ( DocumentMask )
Optional. The fields to return. If not set, returns all fields.
If a document has a field that is not present in this mask, that field will not be returned in the response.
showMissing
boolean
If the list should show missing documents.
A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, create_time , or update_time set.
Requests with show_missing may not specify where or order_by .
Union field consistency_selector . The consistency mode for this transaction. If not set, defaults to strong consistency. consistency_selector can be only one of the following:
transaction
string ( bytes format)
Perform the read as part of an already active transaction.
A base64-encoded string.
readTime
string ( Timestamp format)
Perform the read at the provided time.
This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
DocumentMask
JSON representation
{
"fieldPaths" : [
string
]
}
Fields
fieldPaths[]
string
The list of field paths in the mask. See Document.fields for a field path syntax reference.
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
The response for Firestore.ListDocuments .
ListDocumentsResponse
JSON representation
{
"documents" : [
{
object ( Document )
}
] ,
"nextPageToken" : string
}
Fields
documents[]
object ( Document )
The Documents found.
nextPageToken
string
A token to retrieve the next page of documents.
If this field is omitted, there are no subsequent pages.
Document
JSON representation
{
"name" : string ,
"fields" : {
string : {
object ( Value )
} ,
...
} ,
"createTime" : string ,
"updateTime" : string
}
Fields
name
string
The resource name of the document, for example projects/{project_id}/databases/{database_id}/documents/{document_path} .
fields
map (key: string, value: object ( Value ))
The document's fields.
The map keys represent field names.
Field names matching the regular expression __.*__ are reserved. Reserved field names are forbidden except in certain documented contexts. The field names, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty.
Field paths may be used in other contexts to refer to structured fields defined here. For map_value , the field path is represented by a dot-delimited ( . ) string of segments. Each segment is either a simple field name (defined below) or a quoted field name. For example, the structured field "foo" : { map_value: { "x&y" : { string_value: "hello"
}}} would be represented by the field path foo.`x&y` .
A simple field name contains only characters a to z , A to Z , 0 to 9 , or _ , and must not start with 0 to 9 . For example, foo_bar_17 .
A quoted field name starts and ends with ` and may contain any character. Some characters, including ` , must be escaped using a \ . For example, `x&y` represents x&y and `bak\`tik` represents bak`tik .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
createTime
string ( Timestamp format)
Output only. The time at which the document was created.
This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the read_time of a query.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time at which the document was last changed.
This value is initially set to the create_time then increases monotonically with each change to the document. It can also be compared to values from other documents and the read_time of a query.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
FieldsEntry
JSON representation
{
"key" : string ,
"value" : {
object ( Value )
}
}
Fields
key
string
value
object ( Value )
Value
JSON representation
{
// Union field value_type can be only one of the following:
"nullValue" : null ,
"booleanValue" : boolean ,
"integerValue" : string ,
"doubleValue" : number ,
"timestampValue" : string ,
"stringValue" : string ,
"bytesValue" : string ,
"referenceValue" : string ,
"geoPointValue" : {
object ( LatLng )
} ,
"arrayValue" : {
object ( ArrayValue )
} ,
"mapValue" : {
object ( MapValue )
} ,
"fieldReferenceValue" : string ,
"variableReferenceValue" : string ,
"functionValue" : {
object ( Function )
} ,
"pipelineValue" : {
object ( Pipeline )
}
// End of list of possible types for union field value_type .
}
Fields
Union field value_type . Must have a value set. value_type can be only one of the following:
nullValue
null
A null value.
booleanValue
boolean
A boolean value.
integerValue
string ( int64 format)
An integer value.
doubleValue
number
A double value.
timestampValue
string ( Timestamp format)
A timestamp value.
Precise only to microseconds. When stored, any additional precision is rounded down.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
stringValue
string
A string value.
The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes of the UTF-8 representation are considered by queries.
bytesValue
string ( bytes format)
A bytes value.
Must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes are considered by queries.
A base64-encoded string.
referenceValue
string
A reference to a document. For example: projects/{project_id}/databases/{database_id}/documents/{document_path} .
geoPointValue
object ( LatLng )
A geo point value representing a point on the surface of Earth.
arrayValue
object ( ArrayValue )
An array value.
Cannot directly contain another array value, though can contain a map which contains another array.
mapValue
object ( MapValue )
A map value.
fieldReferenceValue
string
Value which references a field.
This is considered relative (vs absolute) since it only refers to a field and not a field within a particular document.
Requires:
Must follow [field reference][FieldReference.field_path] limitations.
Not allowed to be used when writing documents.
variableReferenceValue
string
Pointer to a variable defined elsewhere in a pipeline.
Unlike field_reference_value which references a field within a document, this refers to a variable, defined in a separate namespace than the fields of a document.
functionValue
object ( Function )
A value that represents an unevaluated expression.
Requires:
Not allowed to be used when writing documents.
pipelineValue
object ( Pipeline )
A value that represents an unevaluated pipeline.
Requires:
Not allowed to be used when writing documents.
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
LatLng
JSON representation
{
"latitude" : number ,
"longitude" : number
}
Fields
latitude
number
The latitude in degrees. It must be in the range [-90.0, +90.0].
longitude
number
The longitude in degrees. It must be in the range [-180.0, +180.0].
ArrayValue
JSON representation
{
"values" : [
{
object ( Value )
}
]
}
Fields
values[]
object ( Value )
Values in the array.
MapValue
JSON representation
{
"fields" : {
string : {
object ( Value )
} ,
...
}
}
Fields
fields
map (key: string, value: object ( Value ))
The map's fields.
The map keys represent field names. Field names matching the regular expression __.*__ are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
FieldsEntry
JSON representation
{
"key" : string ,
"value" : {
object ( Value )
}
}
Fields
key
string
value
object ( Value )
Function
JSON representation
{
"name" : string ,
"args" : [
{
object ( Value )
}
] ,
"options" : {
string : {
object ( Value )
} ,
...
}
}
Fields
name
string
Required. The name of the function to evaluate.
Requires:
must be in snake case (lower case with underscore separator).
args[]
object ( Value )
Optional. Ordered list of arguments the given function expects.
options
map (key: string, value: object ( Value ))
Optional. Optional named arguments that certain functions may support.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
OptionsEntry
JSON representation
{
"key" : string ,
"value" : {
object ( Value )
}
}
Fields
key
string
value
object ( Value )
Pipeline
JSON representation
{
"stages" : [
{
object ( Stage )
}
]
}
Fields
stages[]
object ( Stage )
Required. Ordered list of stages to evaluate.
Stage
JSON representation
{
"name" : string ,
"args" : [
{
object ( Value )
}
] ,
"options" : {
string : {
object ( Value )
} ,
...
}
}
Fields
name
string
Required. The name of the stage to evaluate.
Requires:
must be in snake case (lower case with underscore separator).
args[]
object ( Value )
Optional. Ordered list of arguments the given stage expects.
options
map (key: string, value: object ( Value ))
Optional. Optional named arguments that certain functions may support.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
OptionsEntry
JSON representation
{
"key" : string ,
"value" : {
object ( Value )
}
}
Fields
key
string
value
object ( Value )
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-26 UTC."],[],[]]
