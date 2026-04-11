---
title: "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_backup_collection
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_backup_collection
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
Tool: get_backup_collection
Get detailed information about a Memorystore for Redis Cluster backup collection.
The following sample demonstrate how to use curl to invoke the get_backup_collection MCP tool.
Curl Request
curl --location 'https://redis.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_backup_collection",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for GetBackupCollection .
GetBackupCollectionRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. Redis backupCollection resource name using the form: projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id} where location_id refers to a Google Cloud region.
Output Schema
BackupCollection of a cluster.
BackupCollection
JSON representation
{
"name" : string ,
"clusterUid" : string ,
"cluster" : string ,
"kmsKey" : string ,
"uid" : string ,
"createTime" : string ,
"totalBackupSizeBytes" : string ,
"totalBackupCount" : string ,
"lastBackupTime" : string
}
Fields
name
string
Identifier. Full resource path of the backup collection.
clusterUid
string
Output only. The cluster uid of the backup collection.
cluster
string
Output only. The full resource path of the cluster the backup collection belongs to. Example: projects/{project}/locations/{location}/clusters/{cluster}
kmsKey
string
Output only. The KMS key used to encrypt the backups under this backup collection.
uid
string
Output only. System assigned unique identifier of the backup collection.
createTime
string ( Timestamp format)
Output only. The time when the backup collection was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
totalBackupSizeBytes
string ( int64 format)
Output only. Total size of all backups in the backup collection.
totalBackupCount
string ( int64 format)
Output only. Total number of backups in the backup collection.
lastBackupTime
string ( Timestamp format)
Output only. The last time a backup was created in the backup collection.
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
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
