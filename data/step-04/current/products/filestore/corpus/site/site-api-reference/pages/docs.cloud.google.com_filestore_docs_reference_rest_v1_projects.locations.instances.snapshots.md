---
title: "REST Resource: projects.locations.instances.snapshots \_|\_ Filestore \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances.snapshots
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances.snapshots
  title: "REST Resource: projects.locations.instances.snapshots \_|\_ Filestore \_\
    |\_ Google Cloud Documentation"
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
REST Resource: projects.locations.instances.snapshots
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Snapshot
JSON representation
State
Methods
Resource: Snapshot
A Filestore snapshot.
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
"filesystemUsedBytes" : string ,
"tags" : {
string : string ,
...
}
}
Fields
name
string
Output only. The resource name of the snapshot, in the format projects/{projectId}/locations/{locationId}/instances/{instanceId}/snapshots/{snapshotId} .
description
string
A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.
state
enum ( State )
Output only. The snapshot state.
createTime
string ( Timestamp format)
Output only. The time when the snapshot was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Resource labels to represent user provided metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
filesystemUsedBytes
string ( int64 format)
Output only. The amount of bytes needed to allocate a full copy of the snapshot content
tags
map (key: string, value: string)
Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
State
The snapshot state.
Enums
STATE_UNSPECIFIED
State not set.
CREATING
Snapshot is being created.
READY
Snapshot is available for use.
DELETING
Snapshot is being deleted.
Methods
create
Creates a snapshot.
delete
Deletes a snapshot.
get
Gets the details of a specific snapshot.
list
Lists all snapshots in a project for either a specified location or for all locations.
patch
Updates the settings of a specific snapshot.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-11 UTC."],[],[]]
