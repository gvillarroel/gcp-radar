---
title: "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table
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
Tool: create_table
Create a new table in the specified instance.
The following sample demonstrate how to use curl to invoke the create_table MCP tool.
Curl Request
curl --location 'https://bigtableadmin.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "create_table",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for Bigtable.CreateTable
CreateTableRequest
JSON representation
{
"projectId" : string ,
"instanceId" : string ,
"tableId" : string ,
"columnFamilies" : [
string
]
}
Fields
projectId
string
Required. The project ID (e.g., "my-project"). If not known from the context, the Agent should attempt to get the current project ID from the gcloud config by running gcloud config get-value project . If the attempt fails, prompt the user for the project ID.
instanceId
string
Required. The instance ID within the project where the table will be created (e.g., "my-instance").
tableId
string
Required. The ID to be used when referring to the new table within its instance, e.g., just mytable .
columnFamilies[]
string
Optional. The names of the column families to be created in the table. Example: ["cf1", "cf2"] . The tool mapping will apply a default garbage collection policy (e.g., keeping only the latest version) to each column family.
Output Schema
A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
Table
JSON representation
{
"name" : string ,
"clusterStates" : {
string : {
object ( ClusterState )
} ,
...
} ,
"columnFamilies" : {
string : {
object ( ColumnFamily )
} ,
...
} ,
"granularity" : enum ( TimestampGranularity ) ,
"restoreInfo" : {
object ( RestoreInfo )
} ,
"changeStreamConfig" : {
object ( ChangeStreamConfig )
} ,
"deletionProtection" : boolean ,
"stats" : {
object ( TableStats )
} ,
"tieredStorageConfig" : {
object ( TieredStorageConfig )
} ,
"rowKeySchema" : {
object ( Struct )
} ,
// Union field automated_backup_config can be only one of the following:
"automatedBackupPolicy" : {
object ( AutomatedBackupPolicy )
}
// End of list of possible types for union field automated_backup_config .
}
Fields
name
string
The unique name of the table. Values are of the form projects/{project}/instances/{instance}/tables/[_a-zA-Z0-9][-_.a-zA-Z0-9]* . Views: NAME_ONLY , SCHEMA_VIEW , REPLICATION_VIEW , STATS_VIEW , FULL
clusterStates
map (key: string, value: object ( ClusterState ))
Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN replication_status . Views: REPLICATION_VIEW , ENCRYPTION_VIEW , FULL
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
columnFamilies
map (key: string, value: object ( ColumnFamily ))
The column families configured for this table, mapped by column family ID. Views: SCHEMA_VIEW , STATS_VIEW , FULL
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
granularity
enum ( TimestampGranularity )
Immutable. The granularity (i.e. MILLIS ) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to MILLIS . Views: SCHEMA_VIEW , FULL .
restoreInfo
object ( RestoreInfo )
Output only. If this table was restored from another data source (e.g. a backup), this field will be populated with information about the restore.
changeStreamConfig
object ( ChangeStreamConfig )
If specified, enable the change stream on this table. Otherwise, the change stream is disabled and the change stream is not retained.
deletionProtection
boolean
Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited:
The table.
The column families in the table.
The instance containing the table.
Note one can still delete the data stored in the table through Data APIs.
stats
object ( TableStats )
Output only. Only available with STATS_VIEW, this includes summary statistics about the entire table contents. For statistics about a specific column family, see ColumnFamilyStats in the mapped ColumnFamily collection above.
tieredStorageConfig
object ( TieredStorageConfig )
Rules to specify what data is stored in each storage tier. Different tiers store data differently, providing different trade-offs between cost and performance. Different parts of a table can be stored separately on different tiers. If a config is specified, tiered storage is enabled for this table. Otherwise, tiered storage is disabled. Only SSD instances can configure tiered storage.
rowKeySchema
object ( Struct )
The row key schema for this table. The schema is used to decode the raw row key bytes into a structured format. The order of field declarations in this schema is important, as it reflects how the raw row key bytes are structured. Currently, this only affects how the key is read via a GoogleSQL query from the ExecuteQuery API.
For a SQL query, the _key column is still read as raw bytes. But queries can reference the key fields by name, which will be decoded from _key using provided type and encoding. Queries that reference key fields will fail if they encounter an invalid row key.
For example, if _key = "some_id#2024-04-30#\x00\x13\x00\xf3" with the following schema: { fields { field_name: "id" type { string { encoding: utf8_bytes {} } } } fields { field_name: "date" type { string { encoding: utf8_bytes {} } } } fields { field_name: "product_code" type { int64 { encoding: big_endian_bytes {} } } } encoding { delimited_bytes { delimiter: "#" } } }
The decoded key parts would be: id = "some_id", date = "2024-04-30", product_code = 1245427 The query "SELECT _key, product_code FROM table" will return two columns: /------------------------------------------------------\ | _key | product_code | | --------------------------------------|--------------| | "some_id#2024-04-30#\x00\x13\x00\xf3" | 1245427 | ------------------------------------------------------/
The schema has the following invariants: (1) The decoded field values are order-preserved. For read, the field values will be decoded in sorted mode from the raw bytes. (2) Every field in the schema must specify a non-empty name. (3) Every field must specify a type with an associated encoding. The type is limited to scalar types only: Array, Map, Aggregate, and Struct are not allowed. (4) The field names must not collide with existing column family names and reserved keywords "_key" and "_timestamp".
The following update operations are allowed for row_key_schema: - Update from an empty schema to a new schema. - Remove the existing schema. This operation requires setting the ignore_warnings flag to true , since it might be a backward incompatible change. Without the flag, the update request will fail with an INVALID_ARGUMENT error. Any other row key schema update operation (e.g. update existing schema columns names or types) is currently unsupported.
Union field automated_backup_config .
automated_backup_config can be only one of the following:
automatedBackupPolicy
object ( AutomatedBackupPolicy )
If specified, automated backups are enabled for this table. Otherwise, automated backups are disabled.
ClusterStatesEntry
JSON representation
{
"key" : string ,
"value" : {
object ( ClusterState )
}
}
Fields
key
string
value
object ( ClusterState )
ClusterState
JSON representation
{
"replicationState" : enum ( ReplicationState ) ,
"encryptionInfo" : [
{
object ( EncryptionInfo )
}
]
}
Fields
replicationState
enum ( ReplicationState )
Output only. The state of replication for the table in this cluster.
encryptionInfo[]
object ( EncryptionInfo )
Output only. The encryption information for the table in this cluster. If the encryption key protecting this resource is customer managed, then its version can be rotated in Cloud Key Management Service (Cloud KMS). The primary version of the key and its status will be reflected here when changes propagate from Cloud KMS.
EncryptionInfo
JSON representation
{
"encryptionType" : enum ( EncryptionType ) ,
"encryptionStatus" : {
object ( Status )
} ,
"kmsKeyVersion" : string
}
Fields
encryptionType
enum ( EncryptionType )
Output only. The type of encryption used to protect this resource.
encryptionStatus
object ( Status )
Output only. The status of encrypt/decrypt calls on underlying data for this resource. Regardless of status, the existing data is always encrypted at rest.
kmsKeyVersion
string
Output only. The version of the Cloud KMS key specified in the parent cluster that is in use for the data underlying this table.
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
Any
JSON representation
{
"typeUrl" : string ,
"value" : string
}
Fields
typeUrl
string
A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in path/google.protobuf.Duration ). The name should be in a canonical form (e.g., leading "." is not accepted).
In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme http , https , or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:
If no scheme is provided, https is assumed.
An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error.
Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.)
Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. As of May 2023, there are no widely used type server implementations and no plans to implement one.
Schemes other than http , https (or the empty scheme) might be used with implementation specific semantics.
value
string ( bytes format)
Must be a valid serialized protocol buffer of the above specified type.
A base64-encoded string.
ColumnFamiliesEntry
JSON representation
{
"key" : string ,
"value" : {
object ( ColumnFamily )
}
}
Fields
key
string
value
object ( ColumnFamily )
ColumnFamily
JSON representation
{
"gcRule" : {
object ( GcRule )
} ,
"stats" : {
object ( ColumnFamilyStats )
} ,
"valueType" : {
object ( Type )
}
}
Fields
gcRule
object ( GcRule )
Garbage collection rule specified as a protobuf. Must serialize to at most 500 bytes.
NOTE: Garbage collection executes opportunistically in the background, and so it's possible for reads to return a cell even if it matches the active GC expression for its family.
stats
object ( ColumnFamilyStats )
Output only. Only available with STATS_VIEW, this includes summary statistics about column family contents. For statistics over an entire table, see TableStats above.
valueType
object ( Type )
The type of data stored in each of this family's cell values, including its full encoding. If omitted, the family only serves raw untyped bytes.
For now, only the Aggregate type is supported.
Aggregate can only be set at family creation and is immutable afterwards.
This field is mutually exclusive with sql_type .
If value_type is Aggregate , written data must be compatible with: * value_type.input_type for AddInput mutations
GcRule
JSON representation
{
// Union field rule can be only one of the following:
"maxNumVersions" : integer ,
"maxAge" : string ,
"intersection" : {
object ( Intersection )
} ,
"union" : {
object ( Union )
}
// End of list of possible types for union field rule .
}
Fields
Union field rule . Garbage collection rules. rule can be only one of the following:
maxNumVersions
integer
Delete all cells in a column except the most recent N.
maxAge
string ( Duration format)
Delete cells in a column older than the given age. Values must be at least one millisecond, and will be truncated to microsecond granularity.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
intersection
object ( Intersection )
Delete cells that would be deleted by every nested rule.
union
object ( Union )
Delete cells that would be deleted by any nested rule.
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
Intersection
JSON representation
{
"rules" : [
{
object ( GcRule )
}
]
}
Fields
rules[]
object ( GcRule )
Only delete cells which would be deleted by every element of rules .
Union
JSON representation
{
"rules" : [
{
object ( GcRule )
}
]
}
Fields
rules[]
object ( GcRule )
Delete cells which would be deleted by any element of rules .
ColumnFamilyStats
JSON representation
{
"averageColumnsPerRow" : number ,
"averageCellsPerColumn" : number ,
"logicalDataBytes" : string
}
Fields
averageColumnsPerRow
number
How many column qualifiers are present in this column family, averaged over all rows in the table.
e.g. For column family "family" in a table with 3 rows:
A row with cells in "family:col" and "other:col" (1 column in "family")
A row with cells in "family:col", "family:other_col", and "other:data" (2 columns in "family")
A row with cells in "other:col" (0 columns in "family", "family" not present)
would report (1 + 2 + 0)/3 = 1.5 in this field.
averageCellsPerColumn
number
How many cells are present per column qualifier in this column family, averaged over all rows containing any column in the column family.
e.g. For column family "family" in a table with 3 rows:
A row with 3 cells in "family:col" and 1 cell in "other:col" (3 cells / 1 column in "family")
A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (8 cells / 2 columns in "family")
A row with 3 cells in "other:col" (0 columns in "family", "family" not present)
would report (3 + 8 + 0)/(1 + 2 + 0) = 3.66 in this field.
logicalDataBytes
string ( int64 format)
How much space the data in the column family occupies. This is roughly how many bytes would be needed to read the contents of the entire column family (e.g. by streaming all contents out).
Type
JSON representation
{
// Union field kind can be only one of the following:
"bytesType" : {
object ( Bytes )
} ,
"stringType" : {
object ( String )
} ,
"int64Type" : {
object ( Int64 )
} ,
"float32Type" : {
object ( Float32 )
} ,
"float64Type" : {
object ( Float64 )
} ,
"boolType" : {
object ( Bool )
} ,
"timestampType" : {
object ( Timestamp )
} ,
"dateType" : {
object ( Date )
} ,
"aggregateType" : {
object ( Aggregate )
} ,
"structType" : {
object ( Struct )
} ,
"arrayType" : {
object ( Array )
} ,
"mapType" : {
object ( Map )
} ,
"protoType" : {
object ( Proto )
} ,
"enumType" : {
object ( Enum )
} ,
"geographyType" : {
object ( Geography )
}
// End of list of possible types for union field kind .
}
Fields
Union field kind . The kind of type that this represents. kind can be only one of the following:
bytesType
object ( Bytes )
Bytes
stringType
object ( String )
String
int64Type
object ( Int64 )
Int64
float32Type
object ( Float32 )
Float32
float64Type
object ( Float64 )
Float64
boolType
object ( Bool )
Bool
timestampType
object ( Timestamp )
Timestamp
dateType
object ( Date )
Date
aggregateType
object ( Aggregate )
Aggregate
structType
object ( Struct )
Struct
arrayType
object ( Array )
Array
mapType
object ( Map )
Map
protoType
object ( Proto )
Proto
enumType
object ( Enum )
Enum
geographyType
object ( Geography )
Geography
Bytes
JSON representation
{
"encoding" : {
object ( Encoding )
}
}
Fields
encoding
object ( Encoding )
The encoding to use when converting to or from lower level types.
Encoding
JSON representation
{
// Union field encoding can be only one of the following:
"raw" : {
object ( Raw )
}
// End of list of possible types for union field encoding .
}
Fields
Union field encoding . Which encoding to use. encoding can be only one of the following:
raw
object ( Raw )
Use Raw encoding.
Raw
JSON representation
{
"escapeNulls" : boolean
}
Fields
escapeNulls
boolean
If set, allows NULL values to be encoded as the empty string "".
The actual empty string, or any value which only contains the null byte 0x00 , has one more null byte appended.
String
JSON representation
{
"encoding" : {
object ( Encoding )
}
}
Fields
encoding
object ( Encoding )
The encoding to use when converting to or from lower level types.
Encoding
JSON representation
{
// Union field encoding can be only one of the following:
"utf8Raw" : {
object ( Utf8Raw )
} ,
"utf8Bytes" : {
object ( Utf8Bytes )
}
// End of list of possible types for union field encoding .
}
Fields
Union field encoding . Which encoding to use. encoding can be only one of the following:
utf8Raw (deprecated)
object ( Utf8Raw )
This item is deprecated!
Deprecated: if set, converts to an empty utf8_bytes .
utf8Bytes
object ( Utf8Bytes )
Use Utf8Bytes encoding.
Utf8Bytes
JSON representation
{
"nullEscapeChar" : string
}
Fields
nullEscapeChar
string
Single-character escape sequence used to support NULL values.
If set, allows NULL values to be encoded as the empty string "".
The actual empty string, or any value where every character equals null_escape_char , has one more null_escape_char appended.
If null_escape_char is set and does not equal the ASCII null character 0x00 , then the encoding will not support sorted mode.
.
Int64
JSON representation
{
"encoding" : {
object ( Encoding )
}
}
Fields
encoding
object ( Encoding )
The encoding to use when converting to or from lower level types.
Encoding
JSON representation
{
// Union field encoding can be only one of the following:
"bigEndianBytes" : {
object ( BigEndianBytes )
} ,
"orderedCodeBytes" : {
object ( OrderedCodeBytes )
}
// End of list of possible types for union field encoding .
}
Fields
Union field encoding . Which encoding to use. encoding can be only one of the following:
bigEndianBytes
object ( BigEndianBytes )
Use BigEndianBytes encoding.
orderedCodeBytes
object ( OrderedCodeBytes )
Use OrderedCodeBytes encoding.
BigEndianBytes
JSON representation
{
"bytesType" : {
object ( Bytes )
}
}
Fields
bytesType (deprecated)
object ( Bytes )
This item is deprecated!
Deprecated: ignored if set.
Timestamp
JSON representation
{
"encoding" : {
object ( Encoding )
}
}
Fields
encoding
object ( Encoding )
The encoding to use when converting to or from lower level types.
Encoding
JSON representation
{
// Union field encoding can be only one of the following:
"unixMicrosInt64" : {
object ( Encoding )
}
// End of list of possible types for union field encoding .
}
Fields
Union field encoding . Which encoding to use. encoding can be only one of the following:
unixMicrosInt64
object ( Encoding )
Encodes the number of microseconds since the Unix epoch using the given Int64 encoding. Values must be microsecond-aligned.
Compatible with:
Java Instant.truncatedTo() with ChronoUnit.MICROS
Aggregate
JSON representation
{
"inputType" : {
object ( Type )
} ,
"stateType" : {
object ( Type )
} ,
// Union field aggregator can be only one of the following:
"sum" : {
object ( Sum )
} ,
"hllppUniqueCount" : {
object ( HyperLogLogPlusPlusUniqueCount )
} ,
"max" : {
object ( Max )
} ,
"min" : {
object ( Min )
}
// End of list of possible types for union field aggregator .
}
Fields
inputType
object ( Type )
Type of the inputs that are accumulated by this Aggregate . Use AddInput mutations to accumulate new inputs.
stateType
object ( Type )
Output only. Type that holds the internal accumulator state for the Aggregate . This is a function of the input_type and aggregator chosen.
Union field aggregator . Which aggregator function to use. The configured types must match. aggregator can be only one of the following:
sum
object ( Sum )
Sum aggregator.
hllppUniqueCount
object ( HyperLogLogPlusPlusUniqueCount )
HyperLogLogPlusPlusUniqueCount aggregator.
max
object ( Max )
Max aggregator.
min
object ( Min )
Min aggregator.
Struct
JSON representation
{
"fields" : [
{
object ( Field )
}
] ,
"encoding" : {
object ( Encoding )
}
}
Fields
fields[]
object ( Field )
The names and types of the fields in this struct.
encoding
object ( Encoding )
The encoding to use when converting to or from lower level types.
Field
JSON representation
{
"fieldName" : string ,
"type" : {
object ( Type )
}
}
Fields
fieldName
string
The field name (optional). Fields without a field_name are considered anonymous and cannot be referenced by name.
type
object ( Type )
The type of values in this field.
Encoding
JSON representation
{
// Union field encoding can be only one of the following:
"singleton" : {
object ( Singleton )
} ,
"delimitedBytes" : {
object ( DelimitedBytes )
} ,
"orderedCodeBytes" : {
object ( OrderedCodeBytes )
}
// End of list of possible types for union field encoding .
}
Fields
Union field encoding . Which encoding to use. encoding can be only one of the following:
singleton
object ( Singleton )
Use Singleton encoding.
delimitedBytes
object ( DelimitedBytes )
Use DelimitedBytes encoding.
orderedCodeBytes
object ( OrderedCodeBytes )
User OrderedCodeBytes encoding.
DelimitedBytes
JSON representation
{
"delimiter" : string
}
Fields
delimiter
string ( bytes format)
Byte sequence used to delimit concatenated fields. The delimiter must contain at least 1 character and at most 50 characters.
A base64-encoded string.
Array
JSON representation
{
"elementType" : {
object ( Type )
}
}
Fields
elementType
object ( Type )
The type of the elements in the array. This must not be Array .
Map
JSON representation
{
"keyType" : {
object ( Type )
} ,
"valueType" : {
object ( Type )
}
}
Fields
keyType
object ( Type )
The type of a map key. Only Bytes , String , and Int64 are allowed as key types.
valueType
object ( Type )
The type of the values in a map.
Proto
JSON representation
{
"schemaBundleId" : string ,
"messageName" : string
}
Fields
schemaBundleId
string
The ID of the schema bundle that this proto is defined in.
messageName
string
The fully qualified name of the protobuf message, including package. In the format of "foo.bar.Message".
Enum
JSON representation
{
"schemaBundleId" : string ,
"enumName" : string
}
Fields
schemaBundleId
string
The ID of the schema bundle that this enum is defined in.
enumName
string
The fully qualified name of the protobuf enum message, including package. In the format of "foo.bar.EnumMessage".
RestoreInfo
JSON representation
{
"sourceType" : enum ( RestoreSourceType ) ,
// Union field source_info can be only one of the following:
"backupInfo" : {
object ( BackupInfo )
}
// End of list of possible types for union field source_info .
}
Fields
sourceType
enum ( RestoreSourceType )
The type of the restore source.
Union field source_info . Information about the source used to restore the table. source_info can be only one of the following:
backupInfo
object ( BackupInfo )
Information about the backup used to restore the table. The backup may no longer exist.
BackupInfo
JSON representation
{
"backup" : string ,
"startTime" : string ,
"endTime" : string ,
"sourceTable" : string ,
"sourceBackup" : string
}
Fields
backup
string
Output only. Name of the backup.
startTime
string ( Timestamp format)
Output only. The time that the backup was started. Row data in the backup will be no older than this timestamp.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Output only. This time that the backup was finished. Row data in the backup will be no newer than this timestamp.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
sourceTable
string
Output only. Name of the table the backup was created from.
sourceBackup
string
Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects/ /instances/ /clusters/ /backups/
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
ChangeStreamConfig
JSON representation
{
"retentionPeriod" : string
}
Fields
retentionPeriod
string ( Duration format)
How long the change stream should be retained. Change stream data older than the retention period will not be returned when reading the change stream from the table. Values must be at least 1 day and at most 7 days, and will be truncated to microsecond granularity.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
TableStats
JSON representation
{
"rowCount" : string ,
"averageColumnsPerRow" : number ,
"averageCellsPerColumn" : number ,
"logicalDataBytes" : string
}
Fields
rowCount
string ( int64 format)
How many rows are in the table.
averageColumnsPerRow
number
How many (column family, column qualifier) combinations are present per row in the table, averaged over all rows in the table.
e.g. A table with 2 rows:
A row with cells in "family:col" and "other:col" (2 distinct columns)
A row with cells in "family:col", "family:other_col", and "other:data" (3 distinct columns)
would report (2 + 3)/2 = 2.5 in this field.
averageCellsPerColumn
number
How many cells are present per column (column family, column qualifier) combinations, averaged over all columns in all rows in the table.
e.g. A table with 2 rows:
A row with 3 cells in "family:col" and 1 cell in "other:col" (4 cells / 2 columns)
A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (15 cells / 3 columns)
would report (4 + 15)/(2 + 3) = 3.8 in this field.
logicalDataBytes
string ( int64 format)
This is roughly how many bytes would be needed to read the entire table (e.g. by streaming all contents out).
AutomatedBackupPolicy
JSON representation
{
"retentionPeriod" : string ,
"frequency" : string
}
Fields
retentionPeriod
string ( Duration format)
Required. How long the automated backups should be retained. Values must be at least 3 days and at most 90 days.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
frequency
string ( Duration format)
How frequently automated backups should occur. The only supported value at this time is 24 hours. An undefined frequency is treated as 24 hours.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
TieredStorageConfig
JSON representation
{
"infrequentAccess" : {
object ( TieredStorageRule )
}
}
Fields
infrequentAccess
object ( TieredStorageRule )
Rule to specify what data is stored in the infrequent access(IA) tier. The IA tier allows storing more data per node with reduced performance.
TieredStorageRule
JSON representation
{
// Union field rule can be only one of the following:
"includeIfOlderThan" : string
// End of list of possible types for union field rule .
}
Fields
Union field rule . Rules to specify what data is stored in this tier. rule can be only one of the following:
includeIfOlderThan
string ( Duration format)
Include cells older than the given age. For the infrequent access tier, this value must be at least 30 days.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
