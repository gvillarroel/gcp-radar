---
title: "REST Resource: projects.locations.resourceMaintenances \_|\_ Unified Maintenance\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/v1/projects.locations.resourceMaintenances
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/v1/projects.locations.resourceMaintenances
  title: "REST Resource: projects.locations.resourceMaintenances \_|\_ Unified Maintenance\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Unified Maintenance
Reference
Send feedback
REST Resource: projects.locations.resourceMaintenances
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ResourceMaintenance
JSON representation
Methods
Resource: ResourceMaintenance
ResourceMaintenance is a resource that represents a maintenance operation on a resource.
JSON representation
{
"name" : string ,
"resource" : {
object ( Resource )
} ,
"maintenance" : {
object ( Maintenance )
} ,
"state" : enum ( State ) ,
"createTime" : string ,
"updateTime" : string ,
"maintenanceStartTime" : string ,
"maintenanceEndTime" : string ,
"maintenanceCancelTime" : string ,
"maintenanceScheduledStartTime" : string ,
"maintenanceScheduledEndTime" : string ,
"userControllable" : boolean ,
"controls" : [
{
object ( MaintenanceControl )
}
] ,
"labels" : {
string : string ,
...
} ,
"annotations" : {
string : string ,
...
} ,
"uid" : string ,
"etag" : string
}
Fields
name
string
Identifier. The name of the resourceMaintenance resource. Format: "projects/{project}/locations/{location}/resourceMaintenance/{resource-maintenance-id}"
resource
object ( Resource )
Output only. The resource spec of the resource maintenance.
maintenance
object ( Maintenance )
Output only. The details of the maintenance.
state
enum ( State )
Output only. The state of the resource maintenance.
createTime
string ( Timestamp format)
Output only. The create time of the resource maintenance.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The update time of the resource maintenance.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
maintenanceStartTime
string ( Timestamp format)
Output only. The time when the resource maintenance has started.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
maintenanceEndTime
string ( Timestamp format)
Output only. The time when the resource maintenance has completed.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
maintenanceCancelTime
string ( Timestamp format)
Output only. The time when the resource maintenance was cancelled.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
maintenanceScheduledStartTime
string ( Timestamp format)
Output only. The time when the maintenance on the resource was scheduled to start.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
maintenanceScheduledEndTime
string ( Timestamp format)
Output only. The time when the maintenance on the resource was scheduled to end.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
userControllable
boolean
Output only. Indicates whether the user has some control over that maintenance, either proactively before maintenance was scheduled with maintenance policy or with reactive controls after it was scheduled (see controls field)
controls[]
object ( MaintenanceControl )
Output only. The controls of the maintenance.
labels
map (key: string, value: string)
Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
annotations
map (key: string, value: string)
Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.
More info: https://kubernetes.io/docs/user-guide/annotations
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
uid
string
Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
etag
string
Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
Methods
get
Retrieve a single resource maintenance.
list
Retrieve a collection of resource maintenances.
summarize
Retrieves the statistics of a specific maintenance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-08 UTC."],[],[]]
