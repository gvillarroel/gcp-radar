---
title: "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/list_databases
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/list_databases
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
Tool: list_databases
List Firestore databases.
The following sample demonstrate how to use curl to invoke the list_databases MCP tool.
Curl Request
curl --location 'https://firestore.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_databases",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
A request to list the Firestore Databases in all locations for a project.
ListDatabasesRequest
JSON representation
{
"parent" : string ,
"showDeleted" : boolean
}
Fields
parent
string
Required. A parent name of the form projects/{project_id}
showDeleted
boolean
If true, also returns deleted resources.
Output Schema
The list of databases for a project.
ListDatabasesResponse
JSON representation
{
"databases" : [
{
object ( Database )
}
] ,
"unreachable" : [
string
]
}
Fields
databases[]
object ( Database )
The databases in the project.
unreachable[]
string
In the event that data about individual databases cannot be listed they will be recorded here.
An example entry might be: projects/some_project/locations/some_location This can happen if the Cloud Region that the Database resides in is currently unavailable. In this case we can't fetch all the details about the database. You may be able to get a more detailed error message (or possibly fetch the resource) by sending a 'Get' request for the resource or a 'List' request for the specific location.
Database
JSON representation
{
"name" : string ,
"uid" : string ,
"createTime" : string ,
"updateTime" : string ,
"deleteTime" : string ,
"locationId" : string ,
"type" : enum ( DatabaseType ) ,
"concurrencyMode" : enum ( ConcurrencyMode ) ,
"versionRetentionPeriod" : string ,
"earliestVersionTime" : string ,
"pointInTimeRecoveryEnablement" : enum ( PointInTimeRecoveryEnablement ) ,
"appEngineIntegrationMode" : enum ( AppEngineIntegrationMode ) ,
"keyPrefix" : string ,
"deleteProtectionState" : enum ( DeleteProtectionState ) ,
"cmekConfig" : {
object ( CmekConfig )
} ,
"previousId" : string ,
"sourceInfo" : {
object ( SourceInfo )
} ,
"tags" : {
string : string ,
...
} ,
"etag" : string ,
"databaseEdition" : enum ( DatabaseEdition ) ,
"realtimeUpdatesMode" : enum ( RealtimeUpdatesMode ) ,
"firestoreDataAccessMode" : enum ( DataAccessMode ) ,
"mongodbCompatibleDataAccessMode" : enum ( DataAccessMode ) ,
// Union field _free_tier can be only one of the following:
"freeTier" : boolean
// End of list of possible types for union field _free_tier .
}
Fields
name
string
The resource name of the Database. Format: projects/{project}/databases/{database}
uid
string
Output only. The system-generated UUID4 for this Database.
createTime
string ( Timestamp format)
Output only. The timestamp at which this database was created. Databases created before 2016 do not populate create_time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
deleteTime
string ( Timestamp format)
Output only. The timestamp at which this database was deleted. Only set if the database has been deleted.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
locationId
string
Required. The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations .
type
enum ( DatabaseType )
Required. The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose.
concurrencyMode
enum ( ConcurrencyMode )
The concurrency control mode to use for this database.
If unspecified in a CreateDatabase request, this will default based on the database edition: Optimistic for Enterprise and Pessimistic for all other databases.
versionRetentionPeriod
string ( Duration format)
Output only. The period during which past versions of data are retained in the database.
Any read or query can specify a read_time within this window, and will read the state of the database at that time.
If the PITR feature is enabled, the retention period is 7 days. Otherwise, the retention period is 1 hour.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
earliestVersionTime
string ( Timestamp format)
Output only. The earliest timestamp at which older versions of the data can be read from the database. See [version_retention_period] above; this field is populated with now - version_retention_period .
This value is continuously updated, and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
pointInTimeRecoveryEnablement
enum ( PointInTimeRecoveryEnablement )
Whether to enable the PITR feature on this database.
appEngineIntegrationMode
enum ( AppEngineIntegrationMode )
The App Engine integration mode to use for this database.
keyPrefix
string
Output only. The key_prefix for this database. This key_prefix is used, in combination with the project ID (" ~ ") to construct the application ID that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes.
This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo).
deleteProtectionState
enum ( DeleteProtectionState )
State of delete protection for the database.
cmekConfig
object ( CmekConfig )
Optional. Presence indicates CMEK is enabled for this database.
previousId
string
Output only. The database resource's prior database ID. This field is only populated for deleted databases.
sourceInfo
object ( SourceInfo )
Output only. Information about the provenance of this database.
tags
map (key: string, value: string)
Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
etag
string
This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
databaseEdition
enum ( DatabaseEdition )
Immutable. The edition of the database.
realtimeUpdatesMode
enum ( RealtimeUpdatesMode )
Immutable. The default Realtime Updates mode to use for this database.
firestoreDataAccessMode
enum ( DataAccessMode )
Optional. The Firestore API data access mode to use for this database. If not set on write: - the default value is DATA_ACCESS_MODE_DISABLED for Enterprise Edition. - the default value is DATA_ACCESS_MODE_ENABLED for Standard Edition.
mongodbCompatibleDataAccessMode
enum ( DataAccessMode )
Optional. The MongoDB compatible API data access mode to use for this database. If not set on write, the default value is DATA_ACCESS_MODE_ENABLED for Enterprise Edition. The value is always DATA_ACCESS_MODE_DISABLED for Standard Edition.
Union field _free_tier .
_free_tier can be only one of the following:
freeTier
boolean
Output only. Background: Free tier is the ability of a Firestore database to use a small amount of resources every day without being charged. Once usage exceeds the free tier limit further usage is charged.
Whether this database can make use of the free tier. Only one database per project can be eligible for the free tier.
The first (or next) database that is created in a project without a free tier database will be marked as eligible for the free tier. Databases that are created while there is a free tier database will not be eligible for the free tier.
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
CmekConfig
JSON representation
{
"kmsKeyName" : string ,
"activeKeyVersion" : [
string
]
}
Fields
kmsKeyName
string
Required. Only keys in the same location as this database are allowed to be used for encryption.
For Firestore's nam5 multi-region, this corresponds to Cloud KMS multi-region us. For Firestore's eur3 multi-region, this corresponds to Cloud KMS multi-region europe. See https://cloud.google.com/kms/docs/locations .
The expected format is projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key} .
activeKeyVersion[]
string
Output only. Currently in-use KMS key versions . During key rotation , there can be multiple in-use key versions.
The expected format is projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{key_version} .
SourceInfo
JSON representation
{
"operation" : string ,
// Union field source can be only one of the following:
"backup" : {
object ( BackupSource )
}
// End of list of possible types for union field source .
}
Fields
operation
string
The associated long-running operation. This field may not be set after the operation has completed. Format: projects/{project}/databases/{database}/operations/{operation} .
Union field source . The source from which this database is derived. source can be only one of the following:
backup
object ( BackupSource )
If set, this database was restored from the specified backup (or a snapshot thereof).
BackupSource
JSON representation
{
"backup" : string
}
Fields
backup
string
The resource name of the backup that was used to restore this database. Format: projects/{project}/locations/{location}/backups/{backup} .
TagsEntry
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
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-26 UTC."],[],[]]
