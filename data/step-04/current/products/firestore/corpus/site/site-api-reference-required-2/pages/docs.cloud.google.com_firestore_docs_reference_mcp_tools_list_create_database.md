---
title: "MCP Tools Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/reference/mcp/tools_list/create_database
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
Tool: create_database
Create a Firestore database.
The following sample demonstrate how to use curl to invoke the create_database MCP tool.
Curl Request
curl --location 'https://firestore.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "create_database",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
The request for FirestoreAdmin.CreateDatabase .
CreateDatabaseRequest
JSON representation
{
"parent" : string ,
"database" : {
object ( Database )
} ,
"databaseId" : string
}
Fields
parent
string
Required. A parent name of the form projects/{project_id}
database
object ( Database )
Required. The Database to create.
databaseId
string
Required. The ID to use for the database, which will become the final component of the database's resource name.
This value should be 4-63 characters. Valid characters are /[a-z][0-9]-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database ID is also valid if the database is Standard edition.
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
