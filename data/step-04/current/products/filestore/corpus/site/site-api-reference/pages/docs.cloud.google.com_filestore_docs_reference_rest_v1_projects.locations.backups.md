---
title: "REST Resource: projects.locations.backups \_|\_ Filestore \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.backups
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.backups
  title: "REST Resource: projects.locations.backups \_|\_ Filestore \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Reference
Send feedback
REST Resource: projects.locations.backups
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Backup
JSON representation
State
Methods
Resource: Backup
A Filestore backup.
JSON representation
{
"name" : string ,
"description" : string ,
"state" : enum ( State ) ,
"createTime" : string ,
"labels" : {
string : string ,
...
} ,
"capacityGb" : string ,
"storageBytes" : string ,
"sourceInstance" : string ,
"sourceFileShare" : string ,
"sourceInstanceTier" : enum ( Tier ) ,
"downloadBytes" : string ,
"satisfiesPzs" : boolean ,
"satisfiesPzi" : boolean ,
"kmsKey" : string ,
"tags" : {
string : string ,
...
} ,
"fileSystemProtocol" : enum ( FileProtocol )
}
Fields
name
string
Output only. The resource name of the backup, in the format projects/{projectNumber}/locations/{locationId}/backups/{backupId} .
description
string
A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
state
enum ( State )
Output only. The backup state.
createTime
string ( Timestamp format)
Output only. The time when the backup was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Resource labels to represent user provided metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
capacityGb
string ( int64 format)
Output only. Capacity of the source file share when the backup was created.
storageBytes
string ( int64 format)
Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion.
sourceInstance
string
The resource name of the source Filestore instance, in the format projects/{projectNumber}/locations/{locationId}/instances/{instanceId} , used to create this backup.
sourceFileShare
string
Name of the file share in the source Filestore instance that the backup is created from.
sourceInstanceTier
enum ( Tier )
Output only. The service tier of the source Filestore instance that this backup is created from.
downloadBytes
string ( int64 format)
Output only. Amount of bytes that will be downloaded if the backup is restored. This may be different than storage bytes, since sequential backups of the same disk will share storage.
satisfiesPzs
boolean
Output only. Reserved for future use.
satisfiesPzi
boolean
Output only. Reserved for future use.
kmsKey
string
Immutable. KMS key name used for data encryption.
tags
map (key: string, value: string)
Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
fileSystemProtocol
enum ( FileProtocol )
Output only. The file system protocol of the source Filestore instance that this backup is created from.
State
The backup state.
Enums
STATE_UNSPECIFIED
State not set.
CREATING
Backup is being created.
FINALIZING
Backup has been taken and the operation is being finalized. At this point, changes to the file share will not be reflected in the backup.
READY
Backup is available for use.
DELETING
Backup is being deleted.
INVALID
Backup is not valid and cannot be used for creating new instances or restoring existing instances.
Methods
create
Creates a backup.
delete
Deletes a backup.
get
Gets the details of a specific backup.
list
Lists all backups in a project for either a specified location or for all locations.
patch
Updates the settings of a specific backup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-11 UTC."],[],[]]
