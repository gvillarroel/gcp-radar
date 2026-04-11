---
title: "MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams
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
Tool: list_streams
Lists streams in a given project and location.
For example: { parent: "projects/my-project/locations/us-central1" create_time_after: 2025-10-02T10:15:33Z create_time_before: 2025-10-03T00:00:00Z display_name: bookstore page_size: 100 running: true } will return up to 100 running streams in projects/my-project/locations/us-central1 that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC, and have "bookstore" in their display name.
The following sample demonstrate how to use curl to invoke the list_streams MCP tool.
Curl Request
curl --location 'https://datastream.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_streams",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for 'ListStreams' request.
ListStreamsRequest
JSON representation
{
"parent" : string ,
"pageSize" : integer ,
"pageToken" : string ,
"createTimeAfter" : string ,
"createTimeBefore" : string ,
"displayName" : string ,
"running" : boolean ,
"failed" : boolean
}
Fields
parent
string
Required. The parent that owns the collection of streams. Must be in the format projects/*/locations/* . For example: 'projects/my-project/locations/us-central1'
pageSize
integer
Optional. Use to limit the number of streams returned. Valid values are between 1 and 1000 inclusive. Defaults to 1000 if not provided or outside of the valid range. Note that due to filtering, it is possible to get no results (but a next_page_token) so you should keep calling this method until you get a response with an empty next_page_token.
pageToken
string
Optional. A page token, received from a previous list_streams call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to list_streams must match the call that provided the page token.
createTimeAfter
string
Optional. Use to get streams that were created on or after the provided date/time, formatted as RFC-3339. Common Examples: 2023-09-24T15:30:00Z or 2023-09-24T15:30:00.000+09:00.
createTimeBefore
string
Optional. Use to get streams that were created before the provided date/time, formatted as RFC-3339. Common Examples: 2023-09-24T15:30:00Z or 2023-09-24T15:30:00.000+09:00.
displayName
string
Optional. Use to get streams whose display name contains the provided name.
running
boolean
Optional. Use to get streams that are currently in state RUNNING.
failed
boolean
Optional. Use to get streams that are currently in state FAILED or FAILED_PERMANENTLY.
Output Schema
Response message for listing streams.
ListStreamsResponse
JSON representation
{
"streams" : [
{
object ( Stream )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
streams[]
object ( Stream )
List of streams
nextPageToken
string
A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
unreachable[]
string
Locations that could not be reached.
Stream
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"displayName" : string ,
"sourceConfig" : {
object ( SourceConfig )
} ,
"destinationConfig" : {
object ( DestinationConfig )
} ,
"state" : enum ( State ) ,
"errors" : [
{
object ( Error )
}
] ,
"lastRecoveryTime" : string ,
"ruleSets" : [
{
object ( RuleSet )
}
] ,
// Union field backfill_strategy can be only one of the following:
"backfillAll" : {
object ( BackfillAllStrategy )
} ,
"backfillNone" : {
object ( BackfillNoneStrategy )
}
// End of list of possible types for union field backfill_strategy .
// Union field _customer_managed_encryption_key can be only one of the
// following:
"customerManagedEncryptionKey" : string
// End of list of possible types for union field
// _customer_managed_encryption_key .
// Union field _satisfies_pzs can be only one of the following:
"satisfiesPzs" : boolean
// End of list of possible types for union field _satisfies_pzs .
// Union field _satisfies_pzi can be only one of the following:
"satisfiesPzi" : boolean
// End of list of possible types for union field _satisfies_pzi .
}
Fields
name
string
Output only. Identifier. The stream's name.
createTime
string ( Timestamp format)
Output only. The creation time of the stream.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The last update time of the stream.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
displayName
string
Required. Display name.
sourceConfig
object ( SourceConfig )
Required. Source connection profile configuration.
destinationConfig
object ( DestinationConfig )
Required. Destination connection profile configuration.
state
enum ( State )
The state of the stream.
errors[]
object ( Error )
Output only. Errors on the Stream.
lastRecoveryTime
string ( Timestamp format)
Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
ruleSets[]
object ( RuleSet )
Optional. Rule sets to apply to the stream.
Union field backfill_strategy . Stream backfill strategy. backfill_strategy can be only one of the following:
backfillAll
object ( BackfillAllStrategy )
Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.
backfillNone
object ( BackfillNoneStrategy )
Do not automatically backfill any objects.
Union field _customer_managed_encryption_key .
_customer_managed_encryption_key can be only one of the following:
customerManagedEncryptionKey
string
Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
Union field _satisfies_pzs .
_satisfies_pzs can be only one of the following:
satisfiesPzs
boolean
Output only. Reserved for future use.
Union field _satisfies_pzi .
_satisfies_pzi can be only one of the following:
satisfiesPzi
boolean
Output only. Reserved for future use.
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
LabelsEntry
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
SourceConfig
JSON representation
{
"sourceConnectionProfile" : string ,
// Union field source_stream_config can be only one of the following:
"oracleSourceConfig" : {
object ( OracleSourceConfig )
} ,
"mysqlSourceConfig" : {
object ( MysqlSourceConfig )
} ,
"postgresqlSourceConfig" : {
object ( PostgresqlSourceConfig )
} ,
"sqlServerSourceConfig" : {
object ( SqlServerSourceConfig )
} ,
"salesforceSourceConfig" : {
object ( SalesforceSourceConfig )
} ,
"mongodbSourceConfig" : {
object ( MongodbSourceConfig )
} ,
"spannerSourceConfig" : {
object ( SpannerSourceConfig )
}
// End of list of possible types for union field source_stream_config .
}
Fields
sourceConnectionProfile
string
Required. Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
Union field source_stream_config . Stream configuration that is specific to the data source type. source_stream_config can be only one of the following:
oracleSourceConfig
object ( OracleSourceConfig )
Oracle data source configuration.
mysqlSourceConfig
object ( MysqlSourceConfig )
MySQL data source configuration.
postgresqlSourceConfig
object ( PostgresqlSourceConfig )
PostgreSQL data source configuration.
sqlServerSourceConfig
object ( SqlServerSourceConfig )
SQLServer data source configuration.
salesforceSourceConfig
object ( SalesforceSourceConfig )
Salesforce data source configuration.
mongodbSourceConfig
object ( MongodbSourceConfig )
MongoDB data source configuration.
spannerSourceConfig
object ( SpannerSourceConfig )
Spanner data source configuration.
OracleSourceConfig
JSON representation
{
"includeObjects" : {
object ( OracleRdbms )
} ,
"excludeObjects" : {
object ( OracleRdbms )
} ,
"maxConcurrentCdcTasks" : integer ,
"maxConcurrentBackfillTasks" : integer ,
// Union field large_objects_handling can be only one of the following:
"dropLargeObjects" : {
object ( DropLargeObjects )
} ,
"streamLargeObjects" : {
object ( StreamLargeObjects )
}
// End of list of possible types for union field large_objects_handling .
// Union field cdc_method can be only one of the following:
"logMiner" : {
object ( LogMiner )
} ,
"binaryLogParser" : {
object ( BinaryLogParser )
}
// End of list of possible types for union field cdc_method .
}
Fields
includeObjects
object ( OracleRdbms )
The Oracle objects to include in the stream.
excludeObjects
object ( OracleRdbms )
The Oracle objects to exclude from the stream.
maxConcurrentCdcTasks
integer
Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.
maxConcurrentBackfillTasks
integer
Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.
Union field large_objects_handling . The configuration for handle Oracle large objects. large_objects_handling can be only one of the following:
dropLargeObjects
object ( DropLargeObjects )
Drop large object values.
streamLargeObjects
object ( StreamLargeObjects )
Stream large object values.
Union field cdc_method . Configuration to select the CDC method. cdc_method can be only one of the following:
logMiner
object ( LogMiner )
Use LogMiner.
binaryLogParser
object ( BinaryLogParser )
Use Binary Log Parser.
OracleRdbms
JSON representation
{
"oracleSchemas" : [
{
object ( OracleSchema )
}
]
}
Fields
oracleSchemas[]
object ( OracleSchema )
Oracle schemas/databases in the database server.
OracleSchema
JSON representation
{
"schema" : string ,
"oracleTables" : [
{
object ( OracleTable )
}
]
}
Fields
schema
string
The schema name.
oracleTables[]
object ( OracleTable )
Tables in the schema.
OracleTable
JSON representation
{
"table" : string ,
"oracleColumns" : [
{
object ( OracleColumn )
}
]
}
Fields
table
string
The table name.
oracleColumns[]
object ( OracleColumn )
Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
OracleColumn
JSON representation
{
"column" : string ,
"dataType" : string ,
"length" : integer ,
"precision" : integer ,
"scale" : integer ,
"encoding" : string ,
"primaryKey" : boolean ,
"nullable" : boolean ,
"ordinalPosition" : integer
}
Fields
column
string
The column name.
dataType
string
The Oracle data type.
length
integer
Column length.
precision
integer
Column precision.
scale
integer
Column scale.
encoding
string
Column encoding.
primaryKey
boolean
Whether or not the column represents a primary key.
nullable
boolean
Whether or not the column can accept a null value.
ordinalPosition
integer
The ordinal position of the column in the table.
BinaryLogParser
JSON representation
{
// Union field log_file_access can be only one of the following:
"oracleAsmLogFileAccess" : {
object ( OracleAsmLogFileAccess )
} ,
"logFileDirectories" : {
object ( LogFileDirectories )
}
// End of list of possible types for union field log_file_access .
}
Fields
Union field log_file_access . Configuration to specify how the log file should be accessed. log_file_access can be only one of the following:
oracleAsmLogFileAccess
object ( OracleAsmLogFileAccess )
Use Oracle ASM.
logFileDirectories
object ( LogFileDirectories )
Use Oracle directories.
LogFileDirectories
JSON representation
{
"onlineLogDirectory" : string ,
"archivedLogDirectory" : string
}
Fields
onlineLogDirectory
string
Required. Oracle directory for online logs.
archivedLogDirectory
string
Required. Oracle directory for archived logs.
MysqlSourceConfig
JSON representation
{
"includeObjects" : {
object ( MysqlRdbms )
} ,
"excludeObjects" : {
object ( MysqlRdbms )
} ,
"maxConcurrentCdcTasks" : integer ,
"maxConcurrentBackfillTasks" : integer ,
// Union field cdc_method can be only one of the following:
"binaryLogPosition" : {
object ( BinaryLogPosition )
} ,
"gtid" : {
object ( Gtid )
}
// End of list of possible types for union field cdc_method .
}
Fields
includeObjects
object ( MysqlRdbms )
The MySQL objects to retrieve from the source.
excludeObjects
object ( MysqlRdbms )
The MySQL objects to exclude from the stream.
maxConcurrentCdcTasks
integer
Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
maxConcurrentBackfillTasks
integer
Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
Union field cdc_method . The CDC method to use for the stream. cdc_method can be only one of the following:
binaryLogPosition
object ( BinaryLogPosition )
Use Binary log position based replication.
gtid
object ( Gtid )
Use GTID based replication.
MysqlRdbms
JSON representation
{
"mysqlDatabases" : [
{
object ( MysqlDatabase )
}
]
}
Fields
mysqlDatabases[]
object ( MysqlDatabase )
Mysql databases on the server
MysqlDatabase
JSON representation
{
"database" : string ,
"mysqlTables" : [
{
object ( MysqlTable )
}
]
}
Fields
database
string
The database name.
mysqlTables[]
object ( MysqlTable )
Tables in the database.
MysqlTable
JSON representation
{
"table" : string ,
"mysqlColumns" : [
{
object ( MysqlColumn )
}
]
}
Fields
table
string
The table name.
mysqlColumns[]
object ( MysqlColumn )
MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes everything.
MysqlColumn
JSON representation
{
"column" : string ,
"dataType" : string ,
"length" : integer ,
"collation" : string ,
"primaryKey" : boolean ,
"nullable" : boolean ,
"ordinalPosition" : integer ,
"precision" : integer ,
"scale" : integer
}
Fields
column
string
The column name.
dataType
string
The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html
length
integer
Column length.
collation
string
Column collation.
primaryKey
boolean
Whether or not the column represents a primary key.
nullable
boolean
Whether or not the column can accept a null value.
ordinalPosition
integer
The ordinal position of the column in the table.
precision
integer
Column precision.
scale
integer
Column scale.
PostgresqlSourceConfig
JSON representation
{
"includeObjects" : {
object ( PostgresqlRdbms )
} ,
"excludeObjects" : {
object ( PostgresqlRdbms )
} ,
"replicationSlot" : string ,
"publication" : string ,
"maxConcurrentBackfillTasks" : integer
}
Fields
includeObjects
object ( PostgresqlRdbms )
The PostgreSQL objects to include in the stream.
excludeObjects
object ( PostgresqlRdbms )
The PostgreSQL objects to exclude from the stream.
replicationSlot
string
Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin.
publication
string
Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects.
maxConcurrentBackfillTasks
integer
Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
PostgresqlRdbms
JSON representation
{
"postgresqlSchemas" : [
{
object ( PostgresqlSchema )
}
]
}
Fields
postgresqlSchemas[]
object ( PostgresqlSchema )
PostgreSQL schemas in the database server.
PostgresqlSchema
JSON representation
{
"schema" : string ,
"postgresqlTables" : [
{
object ( PostgresqlTable )
}
]
}
Fields
schema
string
The schema name.
postgresqlTables[]
object ( PostgresqlTable )
Tables in the schema.
PostgresqlTable
JSON representation
{
"table" : string ,
"postgresqlColumns" : [
{
object ( PostgresqlColumn )
}
]
}
Fields
table
string
The table name.
postgresqlColumns[]
object ( PostgresqlColumn )
PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
PostgresqlColumn
JSON representation
{
"column" : string ,
"dataType" : string ,
"length" : integer ,
"precision" : integer ,
"scale" : integer ,
"primaryKey" : boolean ,
"nullable" : boolean ,
"ordinalPosition" : integer
}
Fields
column
string
The column name.
dataType
string
The PostgreSQL data type.
length
integer
Column length.
precision
integer
Column precision.
scale
integer
Column scale.
primaryKey
boolean
Whether or not the column represents a primary key.
nullable
boolean
Whether or not the column can accept a null value.
ordinalPosition
integer
The ordinal position of the column in the table.
SqlServerSourceConfig
JSON representation
{
"includeObjects" : {
object ( SqlServerRdbms )
} ,
"excludeObjects" : {
object ( SqlServerRdbms )
} ,
"maxConcurrentCdcTasks" : integer ,
"maxConcurrentBackfillTasks" : integer ,
// Union field cdc_method can be only one of the following:
"transactionLogs" : {
object ( SqlServerTransactionLogs )
} ,
"changeTables" : {
object ( SqlServerChangeTables )
}
// End of list of possible types for union field cdc_method .
}
Fields
includeObjects
object ( SqlServerRdbms )
The SQLServer objects to include in the stream.
excludeObjects
object ( SqlServerRdbms )
The SQLServer objects to exclude from the stream.
maxConcurrentCdcTasks
integer
Max concurrent CDC tasks.
maxConcurrentBackfillTasks
integer
Max concurrent backfill tasks.
Union field cdc_method . Configuration to select the CDC read method for the stream. cdc_method can be only one of the following:
transactionLogs
object ( SqlServerTransactionLogs )
CDC reader reads from transaction logs.
changeTables
object ( SqlServerChangeTables )
CDC reader reads from change tables.
SqlServerRdbms
JSON representation
{
"schemas" : [
{
object ( SqlServerSchema )
}
]
}
Fields
schemas[]
object ( SqlServerSchema )
SQLServer schemas in the database server.
SqlServerSchema
JSON representation
{
"schema" : string ,
"tables" : [
{
object ( SqlServerTable )
}
]
}
Fields
schema
string
The schema name.
tables[]
object ( SqlServerTable )
Tables in the schema.
SqlServerTable
JSON representation
{
"table" : string ,
"columns" : [
{
object ( SqlServerColumn )
}
]
}
Fields
table
string
The table name.
columns[]
object ( SqlServerColumn )
SQLServer columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
SqlServerColumn
JSON representation
{
"column" : string ,
"dataType" : string ,
"length" : integer ,
"precision" : integer ,
"scale" : integer ,
"primaryKey" : boolean ,
"nullable" : boolean ,
"ordinalPosition" : integer
}
Fields
column
string
The column name.
dataType
string
The SQLServer data type.
length
integer
Column length.
precision
integer
Column precision.
scale
integer
Column scale.
primaryKey
boolean
Whether or not the column represents a primary key.
nullable
boolean
Whether or not the column can accept a null value.
ordinalPosition
integer
The ordinal position of the column in the table.
SalesforceSourceConfig
JSON representation
{
"includeObjects" : {
object ( SalesforceOrg )
} ,
"excludeObjects" : {
object ( SalesforceOrg )
} ,
"pollingInterval" : string
}
Fields
includeObjects
object ( SalesforceOrg )
The Salesforce objects to retrieve from the source.
excludeObjects
object ( SalesforceOrg )
The Salesforce objects to exclude from the stream.
pollingInterval
string ( Duration format)
Required. Salesforce objects polling interval. The interval at which new changes will be polled for each object. The duration must be from 5 minutes to 24
hours , inclusive.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
SalesforceOrg
JSON representation
{
"objects" : [
{
object ( SalesforceObject )
}
]
}
Fields
objects[]
object ( SalesforceObject )
Salesforce objects in the database server.
SalesforceObject
JSON representation
{
"objectName" : string ,
"fields" : [
{
object ( SalesforceField )
}
]
}
Fields
objectName
string
The object name.
fields[]
object ( SalesforceField )
Salesforce fields. When unspecified as part of include objects, includes everything, when unspecified as part of exclude objects, excludes nothing.
SalesforceField
JSON representation
{
"name" : string ,
"dataType" : string ,
"nillable" : boolean
}
Fields
name
string
The field name.
dataType
string
The data type.
nillable
boolean
Indicates whether the field can accept nil values.
Duration
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
nanos
integer
Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 seconds field and a positive or negative nanos field. For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field. Must be from -999,999,999 to +999,999,999 inclusive.
MongodbSourceConfig
JSON representation
{
"includeObjects" : {
object ( MongodbCluster )
} ,
"excludeObjects" : {
object ( MongodbCluster )
} ,
"maxConcurrentBackfillTasks" : integer ,
"jsonMode" : enum ( MongodbJsonMode )
}
Fields
includeObjects
object ( MongodbCluster )
The MongoDB collections to include in the stream.
excludeObjects
object ( MongodbCluster )
The MongoDB collections to exclude from the stream.
maxConcurrentBackfillTasks
integer
Optional. Maximum number of concurrent backfill tasks. The number should be non-negative and less than or equal to 50. If not set (or set to 0), the system's default value is used
jsonMode
enum ( MongodbJsonMode )
Optional. MongoDB JSON mode to use for the stream.
MongodbCluster
JSON representation
{
"databases" : [
{
object ( MongodbDatabase )
}
]
}
Fields
databases[]
object ( MongodbDatabase )
MongoDB databases in the cluster.
MongodbDatabase
JSON representation
{
"database" : string ,
"collections" : [
{
object ( MongodbCollection )
}
]
}
Fields
database
string
The database name.
collections[]
object ( MongodbCollection )
Collections in the database.
MongodbCollection
JSON representation
{
"collection" : string ,
"fields" : [
{
object ( MongodbField )
}
]
}
Fields
collection
string
The collection name.
fields[]
object ( MongodbField )
Fields in the collection.
MongodbField
JSON representation
{
"field" : string
}
Fields
field
string
The field name.
SpannerSourceConfig
JSON representation
{
"changeStreamName" : string ,
"spannerRpcPriority" : enum ( SpannerRpcPriority ) ,
"fgacRole" : string ,
"maxConcurrentCdcTasks" : integer ,
"maxConcurrentBackfillTasks" : integer ,
"includeObjects" : {
object ( SpannerDatabase )
} ,
"excludeObjects" : {
object ( SpannerDatabase )
} ,
"backfillDataBoostEnabled" : boolean
}
Fields
changeStreamName
string
Required. Immutable. The change stream name to use for the stream.
spannerRpcPriority
enum ( SpannerRpcPriority )
Optional. The RPC priority to use for the stream.
fgacRole
string
Optional. The FGAC role to use for the stream.
maxConcurrentCdcTasks
integer
Optional. Maximum number of concurrent CDC tasks.
maxConcurrentBackfillTasks
integer
Optional. Maximum number of concurrent backfill tasks.
includeObjects
object ( SpannerDatabase )
Optional. The Spanner objects to retrieve from the data source. If some objects are both included and excluded, an error will be thrown.
excludeObjects
object ( SpannerDatabase )
Optional. The Spanner objects to avoid retrieving. If some objects are both included and excluded, an error will be thrown.
backfillDataBoostEnabled
boolean
Optional. Whether to use Data Boost for Spanner backfills. Defaults to false if not set.
SpannerDatabase
JSON representation
{
"schemas" : [
{
object ( SpannerSchema )
}
]
}
Fields
schemas[]
object ( SpannerSchema )
Optional. Spanner schemas in the database.
SpannerSchema
JSON representation
{
"schema" : string ,
"tables" : [
{
object ( SpannerTable )
}
]
}
Fields
schema
string
Required. The schema name.
tables[]
object ( SpannerTable )
Optional. Spanner tables in the schema.
SpannerTable
JSON representation
{
"table" : string ,
"columns" : [
{
object ( SpannerColumn )
}
]
}
Fields
table
string
Required. The table name.
columns[]
object ( SpannerColumn )
Optional. Spanner columns in the table.
SpannerColumn
JSON representation
{
"column" : string ,
"dataType" : string ,
"isPrimaryKey" : boolean ,
"ordinalPosition" : string
}
Fields
column
string
Required. The column name.
dataType
string
Optional. Spanner data type.
isPrimaryKey
boolean
Optional. Whether or not the column is a primary key.
ordinalPosition
string ( int64 format)
Optional. The ordinal position of the column in the table.
DestinationConfig
JSON representation
{
"destinationConnectionProfile" : string ,
// Union field destination_stream_config can be only one of the following:
"gcsDestinationConfig" : {
object ( GcsDestinationConfig )
} ,
"bigqueryDestinationConfig" : {
object ( BigQueryDestinationConfig )
}
// End of list of possible types for union field destination_stream_config .
}
Fields
destinationConnectionProfile
string
Required. Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
Union field destination_stream_config . Stream configuration that is specific to the data destination type. destination_stream_config can be only one of the following:
gcsDestinationConfig
object ( GcsDestinationConfig )
A configuration for how data should be loaded to Cloud Storage.
bigqueryDestinationConfig
object ( BigQueryDestinationConfig )
BigQuery destination configuration.
GcsDestinationConfig
JSON representation
{
"path" : string ,
"fileRotationMb" : integer ,
"fileRotationInterval" : string ,
// Union field file_format can be only one of the following:
"avroFileFormat" : {
object ( AvroFileFormat )
} ,
"jsonFileFormat" : {
object ( JsonFileFormat )
}
// End of list of possible types for union field file_format .
}
Fields
path
string
Path inside the Cloud Storage bucket to write data to.
fileRotationMb
integer
The maximum file size to be saved in the bucket.
fileRotationInterval
string ( Duration format)
The maximum duration for which new events are added before a file is closed and a new file is created. Values within the range of 15-60 seconds are allowed.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Union field file_format . File Format that the data should be written in. file_format can be only one of the following:
avroFileFormat
object ( AvroFileFormat )
AVRO file format configuration.
jsonFileFormat
object ( JsonFileFormat )
JSON file format configuration.
JsonFileFormat
JSON representation
{
"schemaFileFormat" : enum ( SchemaFileFormat ) ,
"compression" : enum ( JsonCompression )
}
Fields
schemaFileFormat
enum ( SchemaFileFormat )
The schema file format along JSON data files.
compression
enum ( JsonCompression )
Compression of the loaded JSON file.
BigQueryDestinationConfig
JSON representation
{
"dataFreshness" : string ,
"blmtConfig" : {
object ( BlmtConfig )
} ,
// Union field dataset_config can be only one of the following:
"singleTargetDataset" : {
object ( SingleTargetDataset )
} ,
"sourceHierarchyDatasets" : {
object ( SourceHierarchyDatasets )
}
// End of list of possible types for union field dataset_config .
// Union field write_mode can be only one of the following:
"merge" : {
object ( Merge )
} ,
"appendOnly" : {
object ( AppendOnly )
}
// End of list of possible types for union field write_mode .
}
Fields
dataFreshness
string ( Duration format)
The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
blmtConfig
object ( BlmtConfig )
Optional. Big Lake Managed Tables (BLMT) configuration.
Union field dataset_config . Target dataset(s) configuration. dataset_config can be only one of the following:
singleTargetDataset
object ( SingleTargetDataset )
Single destination dataset.
sourceHierarchyDatasets
object ( SourceHierarchyDatasets )
Source hierarchy datasets.
Union field write_mode .
write_mode can be only one of the following:
merge
object ( Merge )
The standard mode
appendOnly
object ( AppendOnly )
Append only mode
SingleTargetDataset
JSON representation
{
"datasetId" : string
}
Fields
datasetId
string
The dataset ID of the target dataset. DatasetIds allowed characters: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference .
SourceHierarchyDatasets
JSON representation
{
"datasetTemplate" : {
object ( DatasetTemplate )
} ,
// Union field _project_id can be only one of the following:
"projectId" : string
// End of list of possible types for union field _project_id .
}
Fields
datasetTemplate
object ( DatasetTemplate )
The dataset template to use for dynamic dataset creation.
Union field _project_id .
_project_id can be only one of the following:
projectId
string
Optional. The project id of the BigQuery dataset. If not specified, the project will be inferred from the stream resource.
DatasetTemplate
JSON representation
{
"location" : string ,
"datasetIdPrefix" : string ,
"kmsKeyName" : string
}
Fields
location
string
Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.
datasetIdPrefix
string
If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e.
_ .
kmsKeyName
string
Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.
BlmtConfig
JSON representation
{
"bucket" : string ,
"rootPath" : string ,
"connectionName" : string ,
"fileFormat" : enum ( FileFormat ) ,
"tableFormat" : enum ( TableFormat )
}
Fields
bucket
string
Required. The Cloud Storage bucket name.
rootPath
string
The root path inside the Cloud Storage bucket.
connectionName
string
Required. The bigquery connection. Format: {project}.{location}.{name}
fileFormat
enum ( FileFormat )
Required. The file format.
tableFormat
enum ( TableFormat )
Required. The table format.
BackfillAllStrategy
JSON representation
{
// Union field excluded_objects can be only one of the following:
"oracleExcludedObjects" : {
object ( OracleRdbms )
} ,
"mysqlExcludedObjects" : {
object ( MysqlRdbms )
} ,
"postgresqlExcludedObjects" : {
object ( PostgresqlRdbms )
} ,
"sqlServerExcludedObjects" : {
object ( SqlServerRdbms )
} ,
"salesforceExcludedObjects" : {
object ( SalesforceOrg )
} ,
"mongodbExcludedObjects" : {
object ( MongodbCluster )
} ,
"spannerExcludedObjects" : {
object ( SpannerDatabase )
}
// End of list of possible types for union field excluded_objects .
}
Fields
Union field excluded_objects . List of objects to exclude. excluded_objects can be only one of the following:
oracleExcludedObjects
object ( OracleRdbms )
Oracle data source objects to avoid backfilling.
mysqlExcludedObjects
object ( MysqlRdbms )
MySQL data source objects to avoid backfilling.
postgresqlExcludedObjects
object ( PostgresqlRdbms )
PostgreSQL data source objects to avoid backfilling.
sqlServerExcludedObjects
object ( SqlServerRdbms )
SQLServer data source objects to avoid backfilling
salesforceExcludedObjects
object ( SalesforceOrg )
Salesforce data source objects to avoid backfilling
mongodbExcludedObjects
object ( MongodbCluster )
MongoDB data source objects to avoid backfilling
spannerExcludedObjects
object ( SpannerDatabase )
Spanner data source objects to avoid backfilling.
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
RuleSet
JSON representation
{
"customizationRules" : [
{
object ( CustomizationRule )
}
] ,
"objectFilter" : {
object ( ObjectFilter )
}
}
Fields
customizationRules[]
object ( CustomizationRule )
Required. List of customization rules to apply.
objectFilter
object ( ObjectFilter )
Required. Object filter to apply the customization rules to.
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
ObjectFilter
JSON representation
{
// Union field filter_type can be only one of the following:
"sourceObjectIdentifier" : {
object ( SourceObjectIdentifier )
}
// End of list of possible types for union field filter_type .
}
Fields
Union field filter_type . The filter to apply. filter_type can be only one of the following:
sourceObjectIdentifier
object ( SourceObjectIdentifier )
Specific source object identifier.
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
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
