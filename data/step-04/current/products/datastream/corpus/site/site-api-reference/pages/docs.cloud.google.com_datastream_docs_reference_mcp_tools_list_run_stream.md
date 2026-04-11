---
title: "MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream
  title: "MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Reference
Send feedback
MCP Tools Reference: datastream
Stay organized with collections
Save and categorize content based on your preferences.
Tool: run_stream
Starts an already created stream, specified by the provided resource name parameter.
Parameters
name : The resource name of the stream to start.
name should be in the format of: 'projects/{project name}/locations/{location}/streams/{stream name}', for example: 'projects/my-project/locations/us-central1/streams/my-streams'.
force : Whether to run the stream without running prior configuration verification. The default is false .
Returns
This tool returns a long-running operation. Use the get_operation tool with the returned operation name to poll its status until it completes. Operation may take several minutes; do not check more often than every ten seconds.
The following sample demonstrate how to use curl to invoke the run_stream MCP tool.
Curl Request
curl --location 'https://datastream.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "run_stream",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for running a stream.
RunStreamRequest
JSON representation
{
"name" : string ,
"cdcStrategy" : {
object ( CdcStrategy )
} ,
"force" : boolean
}
Fields
name
string
Required. Name of the stream resource to start, in the format: projects/{project_id}/locations/{location}/streams/{stream_name}
cdcStrategy
object ( CdcStrategy )
Optional. The CDC strategy of the stream. If not set, the system's default value will be used.
force
boolean
Optional. Update the stream without validating it.
CdcStrategy
JSON representation
{
// Union field start_position can be only one of the following:
"mostRecentStartPosition" : {
object ( MostRecentStartPosition )
} ,
"nextAvailableStartPosition" : {
object ( NextAvailableStartPosition )
} ,
"specificStartPosition" : {
object ( SpecificStartPosition )
}
// End of list of possible types for union field start_position .
}
Fields
Union field start_position . The position to start reading from when starting, resuming, or recovering the stream. If not set, the system's default value will be used. start_position can be only one of the following:
mostRecentStartPosition
object ( MostRecentStartPosition )
Optional. Start replicating from the most recent position in the source.
nextAvailableStartPosition
object ( NextAvailableStartPosition )
Optional. Resume replication from the next available position in the source.
specificStartPosition
object ( SpecificStartPosition )
Optional. Start replicating from a specific position in the source.
SpecificStartPosition
JSON representation
{
// Union field position can be only one of the following:
"mysqlLogPosition" : {
object ( MysqlLogPosition )
} ,
"oracleScnPosition" : {
object ( OracleScnPosition )
} ,
"sqlServerLsnPosition" : {
object ( SqlServerLsnPosition )
} ,
"mysqlGtidPosition" : {
object ( MysqlGtidPosition )
} ,
"mongodbChangeStreamPosition" : {
object ( MongodbChangeStreamPosition )
}
// End of list of possible types for union field position .
}
Fields
Union field position .
position can be only one of the following:
mysqlLogPosition
object ( MysqlLogPosition )
MySQL specific log position to start replicating from.
oracleScnPosition
object ( OracleScnPosition )
Oracle SCN to start replicating from.
sqlServerLsnPosition
object ( SqlServerLsnPosition )
SqlServer LSN to start replicating from.
mysqlGtidPosition
object ( MysqlGtidPosition )
MySQL GTID set to start replicating from.
mongodbChangeStreamPosition
object ( MongodbChangeStreamPosition )
MongoDB change stream position to start replicating from.
MysqlLogPosition
JSON representation
{
"logFile" : string ,
// Union field _log_position can be only one of the following:
"logPosition" : integer
// End of list of possible types for union field _log_position .
}
Fields
logFile
string
Required. The binary log file name.
Union field _log_position .
_log_position can be only one of the following:
logPosition
integer
Optional. The position within the binary log file. Default is head of file.
OracleScnPosition
JSON representation
{
"scn" : string
}
Fields
scn
string ( int64 format)
Required. SCN number from where Logs will be read
SqlServerLsnPosition
JSON representation
{
"lsn" : string
}
Fields
lsn
string
Required. Log sequence number (LSN) from where Logs will be read
MysqlGtidPosition
JSON representation
{
"gtidSet" : string
}
Fields
gtidSet
string
Required. The gtid set to start replication from.
MongodbChangeStreamPosition
JSON representation
{
"startTime" : string
}
Fields
startTime
string ( Timestamp format)
Required. The timestamp to start change stream from.
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
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
