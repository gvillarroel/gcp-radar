---
title: "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_backup
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster/apis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_backup
  title: "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Reference
Send feedback
MCP Tools Reference: redis.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: get_backup
Get detailed information about a Memorystore for Redis Cluster backup.
The following sample demonstrate how to use curl to invoke the get_backup MCP tool.
Curl Request
curl --location 'https://redis.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_backup",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for GetBackup .
GetBackupRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. Redis backup resource name using the form: projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}
Output Schema
Backup of a cluster.
Backup
JSON representation
{
"name" : string ,
"createTime" : string ,
"cluster" : string ,
"clusterUid" : string ,
"totalSizeBytes" : string ,
"expireTime" : string ,
"engineVersion" : string ,
"backupFiles" : [
{
object ( BackupFile )
}
] ,
"nodeType" : enum ( NodeType ) ,
"replicaCount" : integer ,
"shardCount" : integer ,
"backupType" : enum ( BackupType ) ,
"state" : enum ( State ) ,
"encryptionInfo" : {
object ( EncryptionInfo )
} ,
"uid" : string
}
Fields
name
string
Identifier. Full resource path of the backup. the last part of the name is the backup id with the following format: [YYYYMMDDHHMMSS]_[Shorted Cluster UID] OR customer specified while backup cluster. Example: 20240515123000_1234
createTime
string ( Timestamp format)
Output only. The time when the backup was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
cluster
string
Output only. Cluster resource path of this backup.
clusterUid
string
Output only. Cluster uid of this backup.
totalSizeBytes
string ( int64 format)
Output only. Total size of the backup in bytes.
expireTime
string ( Timestamp format)
Output only. The time when the backup will expire.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
engineVersion
string
Output only. redis-7.2, valkey-7.5
backupFiles[]
object ( BackupFile )
Output only. List of backup files of the backup.
nodeType
enum ( NodeType )
Output only. Node type of the cluster.
replicaCount
integer
Output only. Number of replicas for the cluster.
shardCount
integer
Output only. Number of shards for the cluster.
backupType
enum ( BackupType )
Output only. Type of the backup.
state
enum ( State )
Output only. State of the backup.
encryptionInfo
object ( EncryptionInfo )
Output only. Encryption information of the backup.
uid
string
Output only. System assigned unique identifier of the backup.
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
BackupFile
JSON representation
{
"fileName" : string ,
"sizeBytes" : string ,
"createTime" : string
}
Fields
fileName
string
Output only. e.g: .rdb
sizeBytes
string ( int64 format)
Output only. Size of the backup file in bytes.
createTime
string ( Timestamp format)
Output only. The time when the backup file was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
EncryptionInfo
JSON representation
{
"encryptionType" : enum ( Type ) ,
"kmsKeyVersions" : [
string
] ,
"kmsKeyPrimaryState" : enum ( KmsKeyState ) ,
"lastUpdateTime" : string
}
Fields
encryptionType
enum ( Type )
Output only. Type of encryption.
kmsKeyVersions[]
string
Output only. KMS key versions that are being used to protect the data at-rest.
kmsKeyPrimaryState
enum ( KmsKeyState )
Output only. The state of the primary version of the KMS key perceived by the system. This field is not populated in backups.
lastUpdateTime
string ( Timestamp format)
Output only. The most recent time when the encryption info was updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
