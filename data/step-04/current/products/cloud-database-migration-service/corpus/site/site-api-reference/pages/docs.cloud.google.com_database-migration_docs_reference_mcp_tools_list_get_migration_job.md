---
title: "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-migration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job
  title: "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Migration Service
APIs and reference
Send feedback
MCP Tools Reference: datamigration
Stay organized with collections
Save and categorize content based on your preferences.
Tool: get_migration_job
Get details of the migration job specified by the provided resource name parameter.
The resource name parameter is in the form: projects/{project name}/locations/{location}/migrationJobs/{migration job name} , for example: projects/my-project/locations/us-central1/migrationJobs/my-migration-job .
The following sample demonstrate how to use curl to invoke the get_migration_job MCP tool.
Curl Request
curl --location 'https://datamigration.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_migration_job",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for 'GetMigrationJob' request.
GetMigrationJobRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. Name of the migration job resource to get.
Output Schema
Represents a Database Migration Service migration job object.
MigrationJob
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
"state" : enum ( State ) ,
"phase" : enum ( Phase ) ,
"type" : enum ( Type ) ,
"dumpPath" : string ,
"dumpFlags" : {
object ( DumpFlags )
} ,
"source" : string ,
"destination" : string ,
"duration" : string ,
"error" : {
object ( Status )
} ,
"sourceDatabase" : {
object ( DatabaseType )
} ,
"destinationDatabase" : {
object ( DatabaseType )
} ,
"endTime" : string ,
"conversionWorkspace" : {
object ( ConversionWorkspaceInfo )
} ,
"filter" : string ,
"cmekKeyName" : string ,
"performanceConfig" : {
object ( PerformanceConfig )
} ,
"postgresHomogeneousConfig" : {
object ( PostgresHomogeneousConfig )
} ,
"sqlserverHomogeneousMigrationJobConfig" : {
object ( SqlServerHomogeneousMigrationJobConfig )
} ,
"dumpType" : enum ( DumpType ) ,
"objectsConfig" : {
object ( MigrationJobObjectsConfig )
} ,
"purpose" : enum ( Purpose ) ,
"originalMigrationName" : string ,
// Union field connectivity can be only one of the following:
"reverseSshConnectivity" : {
object ( ReverseSshConnectivity )
} ,
"vpcPeeringConnectivity" : {
object ( VpcPeeringConnectivity )
} ,
"staticIpConnectivity" : {
object ( StaticIpConnectivity )
}
// End of list of possible types for union field connectivity .
// Union field config can be only one of the following:
"oracleToPostgresConfig" : {
object ( OracleToPostgresConfig )
} ,
"sqlserverToPostgresConfig" : {
object ( SqlServerToPostgresConfig )
} ,
"postgresToSqlserverConfig" : {
object ( PostgresToSqlServerConfig )
}
// End of list of possible types for union field config .
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
The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.
createTime
string ( Timestamp format)
Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
displayName
string
The migration job display name.
state
enum ( State )
The current migration job state.
phase
enum ( Phase )
Output only. The current migration job phase.
type
enum ( Type )
Required. The migration job type.
dumpPath
string
The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive.
dumpFlags
object ( DumpFlags )
The initial dump flags. This field and the "dump_path" field are mutually exclusive.
source
string
Required. The resource name (URI) of the source connection profile.
destination
string
Required. The resource name (URI) of the destination connection profile.
duration
string ( Duration format)
Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
error
object ( Status )
Output only. The error details in case of state FAILED.
sourceDatabase
object ( DatabaseType )
The database engine type and provider of the source.
destinationDatabase
object ( DatabaseType )
The database engine type and provider of the destination.
endTime
string ( Timestamp format)
Output only. If the migration job is completed, the time when it was completed.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
conversionWorkspace
object ( ConversionWorkspaceInfo )
The conversion workspace used by the migration.
filter
string
This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace.
cmekKeyName
string
The CMEK (customer-managed encryption key) fully qualified key name used for the migration job. This field supports all migration jobs types except for: * Mysql to Mysql (use the cmek field in the cloudsql connection profile instead). * PostrgeSQL to PostgreSQL (use the cmek field in the cloudsql connection profile instead). * PostgreSQL to AlloyDB (use the kms_key_name field in the alloydb connection profile instead). Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]
performanceConfig
object ( PerformanceConfig )
Optional. Data dump parallelism settings used by the migration.
postgresHomogeneousConfig
object ( PostgresHomogeneousConfig )
Optional. Configuration for PostgreSQL homogeneous migration.
sqlserverHomogeneousMigrationJobConfig
object ( SqlServerHomogeneousMigrationJobConfig )
Optional. Configuration for SQL Server homogeneous migration.
dumpType
enum ( DumpType )
Optional. The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only.
objectsConfig
object ( MigrationJobObjectsConfig )
Optional. The objects that need to be migrated.
purpose
enum ( Purpose )
Output only. Migration job mode. Migration jobs can be standard forward jobs or failback migration jobs.
originalMigrationName
string
Optional. A failback replication pointer to the resource name (URI) of the original migration job.
Union field connectivity . The connectivity method. connectivity can be only one of the following:
reverseSshConnectivity
object ( ReverseSshConnectivity )
The details needed to communicate to the source over Reverse SSH tunnel connectivity.
vpcPeeringConnectivity
object ( VpcPeeringConnectivity )
The details of the VPC network that the source database is located in.
staticIpConnectivity
object ( StaticIpConnectivity )
static ip connectivity data (default, no additional details needed).
Union field config . Configuration for migration. config can be only one of the following:
oracleToPostgresConfig
object ( OracleToPostgresConfig )
Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations.
sqlserverToPostgresConfig
object ( SqlServerToPostgresConfig )
Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations.
postgresToSqlserverConfig
object ( PostgresToSqlServerConfig )
Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
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
DumpFlags
JSON representation
{
"dumpFlags" : [
{
object ( DumpFlag )
}
]
}
Fields
dumpFlags[]
object ( DumpFlag )
The flags for the initial dump.
DumpFlag
JSON representation
{
"name" : string ,
"value" : string
}
Fields
name
string
The name of the flag
value
string
The value of the flag.
ReverseSshConnectivity
JSON representation
{
"vmIp" : string ,
"vmPort" : integer ,
"vm" : string ,
"vpc" : string
}
Fields
vmIp
string
Required. The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.
vmPort
integer
Required. The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.
vm
string
The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.
vpc
string
The name of the VPC to peer with the Cloud SQL private network.
VpcPeeringConnectivity
JSON representation
{
"vpc" : string
}
Fields
vpc
string
The name of the VPC network to peer with the Cloud SQL private network.
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
DatabaseType
JSON representation
{
"provider" : enum ( DatabaseProvider ) ,
"engine" : enum ( DatabaseEngine )
}
Fields
provider
enum ( DatabaseProvider )
The database provider.
engine
enum ( DatabaseEngine )
The database engine.
ConversionWorkspaceInfo
JSON representation
{
"name" : string ,
"commitId" : string
}
Fields
name
string
The resource name (URI) of the conversion workspace.
commitId
string
The commit ID of the conversion workspace.
PerformanceConfig
JSON representation
{
"dumpParallelLevel" : enum ( DumpParallelLevel )
}
Fields
dumpParallelLevel
enum ( DumpParallelLevel )
Initial dump parallelism level.
PostgresHomogeneousConfig
JSON representation
{
"isNativeLogical" : boolean ,
"maxAdditionalSubscriptions" : integer
}
Fields
isNativeLogical
boolean
Required. Whether the migration is native logical.
maxAdditionalSubscriptions
integer
Optional. Maximum number of additional subscriptions to use for the migration job.
SqlServerHomogeneousMigrationJobConfig
JSON representation
{
"backupFilePattern" : string ,
"databaseBackups" : [
{
object ( SqlServerDatabaseBackup )
}
] ,
"useDiffBackup" : boolean ,
"promoteWhenReady" : boolean ,
"dagConfig" : {
object ( SqlServerDagConfig )
}
}
Fields
backupFilePattern
string
Required. Pattern that describes the default backup naming strategy. The specified pattern should ensure lexicographical order of backups. The pattern must define one of the following capture group sets: Capture group set #1 yy/yyyy - year, 2 or 4 digits mm - month number, 1-12 dd - day of month, 1-31 hh - hour of day, 00-23 mi - minutes, 00-59 ss - seconds, 00-59 Example: For backup file TestDB_20230802_155400.trn, use pattern: (? .*)_backup_(? \d{4})(? \d{2})(? \d{2})_(? \d{2})(? \d{2})(? \d{2}).trn Capture group set #2 timestamp - unix timestamp Example: For backup file TestDB.1691448254.trn, use pattern: (? .*).(? \d*).trn or (? .*).(? \d*).trn
databaseBackups[]
object ( SqlServerDatabaseBackup )
Required. Backup details per database in Cloud Storage.
useDiffBackup
boolean
Optional. Enable differential backups.
promoteWhenReady
boolean
Optional. Promote databases when ready.
dagConfig
object ( SqlServerDagConfig )
Optional. Configuration for distributed availability group (DAG) for the SQL Server homogeneous migration.
SqlServerDatabaseBackup
JSON representation
{
"database" : string ,
"encryptionOptions" : {
object ( SqlServerEncryptionOptions )
}
}
Fields
database
string
Required. Name of a SQL Server database for which to define backup configuration.
encryptionOptions
object ( SqlServerEncryptionOptions )
Optional. Encryption settings for the database. Required if provided database backups are encrypted. Encryption settings include path to certificate, path to certificate private key, and key password.
SqlServerEncryptionOptions
JSON representation
{
"certPath" : string ,
"pvkPath" : string ,
"pvkPassword" : string
}
Fields
certPath
string
Required. Path to the Certificate (.cer) in Cloud Storage, in the form gs://bucketName/fileName . The instance must have write permissions to the bucket and read access to the file.
pvkPath
string
Required. Path to the Certificate Private Key (.pvk) in Cloud Storage, in the form gs://bucketName/fileName . The instance must have write permissions to the bucket and read access to the file.
pvkPassword
string
Required. Input only. Password that encrypts the private key.
BoolValue
JSON representation
{
"value" : boolean
}
Fields
value
boolean
The bool value.
SqlServerDagConfig
JSON representation
{
"sourceAg" : string ,
"linkedServer" : string
}
Fields
sourceAg
string
Required. The name of the source availability group. Only used by DAG migrations.
linkedServer
string
Required. The name of the linked server that points to the source SQL Server instance. Only used by DAG migrations.
OracleToPostgresConfig
JSON representation
{
"oracleSourceConfig" : {
object ( OracleSourceConfig )
} ,
"postgresDestinationConfig" : {
object ( PostgresDestinationConfig )
}
}
Fields
oracleSourceConfig
object ( OracleSourceConfig )
Optional. Configuration for Oracle source.
postgresDestinationConfig
object ( PostgresDestinationConfig )
Optional. Configuration for Postgres destination.
OracleSourceConfig
JSON representation
{
// Union field _max_concurrent_full_dump_connections can be only one of the
// following:
"maxConcurrentFullDumpConnections" : integer
// End of list of possible types for union field
// _max_concurrent_full_dump_connections .
// Union field _max_concurrent_cdc_connections can be only one of the
// following:
"maxConcurrentCdcConnections" : integer
// End of list of possible types for union field
// _max_concurrent_cdc_connections .
// Union field _skip_full_dump can be only one of the following:
"skipFullDump" : boolean
// End of list of possible types for union field _skip_full_dump .
// Union field _cdc_start_position can be only one of the following:
"cdcStartPosition" : string
// End of list of possible types for union field _cdc_start_position .
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
Union field _max_concurrent_full_dump_connections .
_max_concurrent_full_dump_connections can be only one of the following:
maxConcurrentFullDumpConnections
integer
Optional. Maximum number of connections Database Migration Service will open to the source for full dump phase.
Union field _max_concurrent_cdc_connections .
_max_concurrent_cdc_connections can be only one of the following:
maxConcurrentCdcConnections
integer
Optional. Maximum number of connections Database Migration Service will open to the source for CDC phase.
Union field _skip_full_dump .
_skip_full_dump can be only one of the following:
skipFullDump
boolean
Optional. Whether to skip full dump or not.
Union field _cdc_start_position .
_cdc_start_position can be only one of the following:
cdcStartPosition
string ( int64 format)
Optional. The schema change number (SCN) to start CDC data migration from.
Union field cdc_method . Configuration to select the CDC method. cdc_method can be only one of the following:
logMiner
object ( LogMiner )
Use LogMiner.
binaryLogParser
object ( BinaryLogParser )
Use Binary Log Parser.
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
PostgresDestinationConfig
JSON representation
{
// Union field _max_concurrent_connections can be only one of the following:
"maxConcurrentConnections" : integer
// End of list of possible types for union field _max_concurrent_connections .
// Union field _transaction_timeout can be only one of the following:
"transactionTimeout" : string
// End of list of possible types for union field _transaction_timeout .
}
Fields
Union field _max_concurrent_connections .
_max_concurrent_connections can be only one of the following:
maxConcurrentConnections
integer
Optional. Maximum number of connections Database Migration Service will open to the destination for data migration.
Union field _transaction_timeout .
_transaction_timeout can be only one of the following:
transactionTimeout
string ( Duration format)
Optional. Timeout for data migration transactions.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
SqlServerToPostgresConfig
JSON representation
{
"sqlserverSourceConfig" : {
object ( SqlServerSourceConfig )
} ,
"postgresDestinationConfig" : {
object ( PostgresDestinationConfig )
}
}
Fields
sqlserverSourceConfig
object ( SqlServerSourceConfig )
Optional. Configuration for SQL Server source.
postgresDestinationConfig
object ( PostgresDestinationConfig )
Optional. Configuration for Postgres destination.
SqlServerSourceConfig
JSON representation
{
// Union field _max_concurrent_full_dump_connections can be only one of the
// following:
"maxConcurrentFullDumpConnections" : integer
// End of list of possible types for union field
// _max_concurrent_full_dump_connections .
// Union field _max_concurrent_cdc_connections can be only one of the
// following:
"maxConcurrentCdcConnections" : integer
// End of list of possible types for union field
// _max_concurrent_cdc_connections .
// Union field _skip_full_dump can be only one of the following:
"skipFullDump" : boolean
// End of list of possible types for union field _skip_full_dump .
// Union field _cdc_start_position can be only one of the following:
"cdcStartPosition" : string
// End of list of possible types for union field _cdc_start_position .
}
Fields
Union field _max_concurrent_full_dump_connections .
_max_concurrent_full_dump_connections can be only one of the following:
maxConcurrentFullDumpConnections
integer
Optional. Maximum number of connections Database Migration Service will open to the source for full dump phase.
Union field _max_concurrent_cdc_connections .
_max_concurrent_cdc_connections can be only one of the following:
maxConcurrentCdcConnections
integer
Optional. Maximum number of connections Database Migration Service will open to the source for CDC phase.
Union field _skip_full_dump .
_skip_full_dump can be only one of the following:
skipFullDump
boolean
Optional. Whether to skip full dump or not.
Union field _cdc_start_position .
_cdc_start_position can be only one of the following:
cdcStartPosition
string
Optional. The log sequence number (LSN) to start CDC data migration from.
PostgresToSqlServerConfig
JSON representation
{
"postgresSourceConfig" : {
object ( PostgresSourceConfig )
} ,
"sqlserverDestinationConfig" : {
object ( SqlServerDestinationConfig )
}
}
Fields
postgresSourceConfig
object ( PostgresSourceConfig )
Optional. Configuration for PostgreSQL source.
sqlserverDestinationConfig
object ( SqlServerDestinationConfig )
Optional. Configuration for SQL Server destination.
PostgresSourceConfig
JSON representation
{
// Union field _skip_full_dump can be only one of the following:
"skipFullDump" : boolean
// End of list of possible types for union field _skip_full_dump .
}
Fields
Union field _skip_full_dump .
_skip_full_dump can be only one of the following:
skipFullDump
boolean
Optional. Whether to skip full dump or not.
SqlServerDestinationConfig
JSON representation
{
// Union field _max_concurrent_connections can be only one of the following:
"maxConcurrentConnections" : integer
// End of list of possible types for union field _max_concurrent_connections .
// Union field _transaction_timeout can be only one of the following:
"transactionTimeout" : string
// End of list of possible types for union field _transaction_timeout .
}
Fields
Union field _max_concurrent_connections .
_max_concurrent_connections can be only one of the following:
maxConcurrentConnections
integer
Optional. Maximum number of connections Database Migration Service will open to the destination for data migration.
Union field _transaction_timeout .
_transaction_timeout can be only one of the following:
transactionTimeout
string ( Duration format)
Optional. Timeout for data migration transactions.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
MigrationJobObjectsConfig
JSON representation
{
// Union field migration_job_object_config can be only one of the following:
"sourceObjectsConfig" : {
object ( SourceObjectsConfig )
}
// End of list of possible types for union field migration_job_object_config .
}
Fields
Union field migration_job_object_config . The config for the objects to be migrated. migration_job_object_config can be only one of the following:
sourceObjectsConfig
object ( SourceObjectsConfig )
The list of the migration job objects.
SourceObjectsConfig
JSON representation
{
"objectConfigs" : [
{
object ( SourceObjectConfig )
}
] ,
"objectsSelectionType" : enum ( ObjectsSelectionType )
}
Fields
objectConfigs[]
object ( SourceObjectConfig )
Optional. The list of the objects to be migrated.
objectsSelectionType
enum ( ObjectsSelectionType )
Optional. The objects selection type of the migration job.
SourceObjectConfig
JSON representation
{
"objectIdentifier" : {
object ( SourceObjectIdentifier )
}
}
Fields
objectIdentifier
object ( SourceObjectIdentifier )
Optional. The object identifier.
SourceObjectIdentifier
JSON representation
{
"database" : string ,
"schema" : string ,
"table" : string ,
"type" : enum ( MigrationJobObjectType )
}
Fields
database
string
Optional. The database name. This will be required only if the object uses a database name as part of its unique identifier.
schema
string
Optional. The schema name. This will be required only if the object uses a schema name as part of its unique identifier.
table
string
Optional. The table name. This will be required only if the object is a level below database or schema.
type
enum ( MigrationJobObjectType )
Required. The type of the migration job object.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
