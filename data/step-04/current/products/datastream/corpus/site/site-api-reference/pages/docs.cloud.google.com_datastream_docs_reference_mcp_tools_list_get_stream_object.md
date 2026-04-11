---
title: "MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream_object
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream_object
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
Tool: get_stream_object
Get details of the stream object specified by the provided resource name parameter.
The resource name parameter is in the form: projects/{project name}/locations/{location}/streams/{stream name}/objects/{stream object name} , for example: projects/my-project/locations/us-central1/streams/my-stream/objects/my-stream-object .
The following sample demonstrate how to use curl to invoke the get_stream_object MCP tool.
Curl Request
curl --location 'https://datastream.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_stream_object",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for fetching a specific stream object.
GetStreamObjectRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. The name of the stream object resource to get.
Output Schema
A specific stream object (e.g a specific DB table).
StreamObject
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"displayName" : string ,
"errors" : [
{
object ( Error )
}
] ,
"backfillJob" : {
object ( BackfillJob )
} ,
"sourceObject" : {
object ( SourceObjectIdentifier )
} ,
"customizationRules" : [
{
object ( CustomizationRule )
}
]
}
Fields
name
string
Output only. Identifier. The object resource's name.
createTime
string ( Timestamp format)
Output only. The creation time of the object.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The last update time of the object.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
displayName
string
Required. Display name.
errors[]
object ( Error )
Output only. Active errors on the object.
backfillJob
object ( BackfillJob )
The latest backfill job that was initiated for the stream object.
sourceObject
object ( SourceObjectIdentifier )
The object identifier in the data source.
customizationRules[]
object ( CustomizationRule )
Output only. The customization rules for the object. These rules are derived from the parent Stream's rule_sets and represent the intended configuration for the object.
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
Error
JSON representation
{
"reason" : string ,
"errorUuid" : string ,
"message" : string ,
"errorTime" : string ,
"details" : {
string : string ,
...
}
}
Fields
reason
string
A title that explains the reason for the error.
errorUuid
string
A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses.
message
string
A message containing more information about the error that occurred.
errorTime
string ( Timestamp format)
The time when the error occurred.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
details
map (key: string, value: string)
Additional information about the error.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
DetailsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
BackfillJob
JSON representation
{
"state" : enum ( State ) ,
"trigger" : enum ( Trigger ) ,
"lastStartTime" : string ,
"lastEndTime" : string ,
"errors" : [
{
object ( Error )
}
]
}
Fields
state
enum ( State )
Output only. Backfill job state.
trigger
enum ( Trigger )
Backfill job's triggering reason.
lastStartTime
string ( Timestamp format)
Output only. Backfill job's start time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
lastEndTime
string ( Timestamp format)
Output only. Backfill job's end time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
errors[]
object ( Error )
Output only. Errors which caused the backfill job to fail.
SourceObjectIdentifier
JSON representation
{
// Union field source_identifier can be only one of the following:
"oracleIdentifier" : {
object ( OracleObjectIdentifier )
} ,
"mysqlIdentifier" : {
object ( MysqlObjectIdentifier )
} ,
"postgresqlIdentifier" : {
object ( PostgresqlObjectIdentifier )
} ,
"sqlServerIdentifier" : {
object ( SqlServerObjectIdentifier )
} ,
"salesforceIdentifier" : {
object ( SalesforceObjectIdentifier )
} ,
"mongodbIdentifier" : {
object ( MongodbObjectIdentifier )
} ,
"spannerIdentifier" : {
object ( SpannerObjectIdentifier )
}
// End of list of possible types for union field source_identifier .
}
Fields
Union field source_identifier . The identifier for an object in the data source. source_identifier can be only one of the following:
oracleIdentifier
object ( OracleObjectIdentifier )
Oracle data source object identifier.
mysqlIdentifier
object ( MysqlObjectIdentifier )
Mysql data source object identifier.
postgresqlIdentifier
object ( PostgresqlObjectIdentifier )
PostgreSQL data source object identifier.
sqlServerIdentifier
object ( SqlServerObjectIdentifier )
SQLServer data source object identifier.
salesforceIdentifier
object ( SalesforceObjectIdentifier )
Salesforce data source object identifier.
mongodbIdentifier
object ( MongodbObjectIdentifier )
MongoDB data source object identifier.
spannerIdentifier
object ( SpannerObjectIdentifier )
Spanner data source object identifier.
OracleObjectIdentifier
JSON representation
{
"schema" : string ,
"table" : string
}
Fields
schema
string
Required. The schema name.
table
string
Required. The table name.
MysqlObjectIdentifier
JSON representation
{
"database" : string ,
"table" : string
}
Fields
database
string
Required. The database name.
table
string
Required. The table name.
PostgresqlObjectIdentifier
JSON representation
{
"schema" : string ,
"table" : string
}
Fields
schema
string
Required. The schema name.
table
string
Required. The table name.
SqlServerObjectIdentifier
JSON representation
{
"schema" : string ,
"table" : string
}
Fields
schema
string
Required. The schema name.
table
string
Required. The table name.
SalesforceObjectIdentifier
JSON representation
{
"objectName" : string
}
Fields
objectName
string
Required. The object name.
MongodbObjectIdentifier
JSON representation
{
"database" : string ,
"collection" : string
}
Fields
database
string
Required. The database name.
collection
string
Required. The collection name.
SpannerObjectIdentifier
JSON representation
{
"schema" : string ,
"table" : string
}
Fields
schema
string
Optional. The schema name.
table
string
Required. The table name.
CustomizationRule
JSON representation
{
// Union field rule can be only one of the following:
"bigqueryPartitioning" : {
object ( BigQueryPartitioning )
} ,
"bigqueryClustering" : {
object ( BigQueryClustering )
}
// End of list of possible types for union field rule .
}
Fields
Union field rule . The rule to apply. rule can be only one of the following:
bigqueryPartitioning
object ( BigQueryPartitioning )
BigQuery partitioning rule.
bigqueryClustering
object ( BigQueryClustering )
BigQuery clustering rule.
BigQueryPartitioning
JSON representation
{
"requirePartitionFilter" : boolean ,
// Union field partitioning can be only one of the following:
"integerRangePartition" : {
object ( IntegerRangePartition )
} ,
"timeUnitPartition" : {
object ( TimeUnitPartition )
} ,
"ingestionTimePartition" : {
object ( IngestionTimePartition )
}
// End of list of possible types for union field partitioning .
}
Fields
requirePartitionFilter
boolean
Optional. If true, queries over the table require a partition filter.
Union field partitioning . Partitioning to apply on the table. partitioning can be only one of the following:
integerRangePartition
object ( IntegerRangePartition )
Integer range partitioning.
timeUnitPartition
object ( TimeUnitPartition )
Time unit column partitioning.
ingestionTimePartition
object ( IngestionTimePartition )
Ingestion time partitioning.
IntegerRangePartition
JSON representation
{
"column" : string ,
"start" : string ,
"end" : string ,
"interval" : string
}
Fields
column
string
Required. The partitioning column.
start
string ( int64 format)
Required. The starting value for range partitioning (inclusive).
end
string ( int64 format)
Required. The ending value for range partitioning (exclusive).
interval
string ( int64 format)
Required. The interval of each range within the partition.
TimeUnitPartition
JSON representation
{
"column" : string ,
"partitioningTimeGranularity" : enum ( PartitioningTimeGranularity )
}
Fields
column
string
Required. The partitioning column.
partitioningTimeGranularity
enum ( PartitioningTimeGranularity )
Optional. Partition granularity.
IngestionTimePartition
JSON representation
{
"partitioningTimeGranularity" : enum ( PartitioningTimeGranularity )
}
Fields
partitioningTimeGranularity
enum ( PartitioningTimeGranularity )
Optional. Partition granularity
BigQueryClustering
JSON representation
{
"columns" : [
string
]
}
Fields
columns[]
string
Required. Column names to set as clustering columns.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
