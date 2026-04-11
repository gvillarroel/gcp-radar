---
title: "Method: projects.locations.resourceMaintenances.summarize \_|\_ Unified Maintenance\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/v1/projects.locations.resourceMaintenances/summarize
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/v1/projects.locations.resourceMaintenances/summarize
  title: "Method: projects.locations.resourceMaintenances.summarize \_|\_ Unified\
    \ Maintenance \_|\_ Google Cloud Documentation"
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
Method: projects.locations.resourceMaintenances.summarize
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
MaintenanceSummary
JSON representation
Stats
JSON representation
Aggregate
JSON representation
Try it!
Retrieves the statistics of a specific maintenance.
HTTP request
GET https://maintenance.googleapis.com/v1/{parent=projects/*/locations/*}/resourceMaintenances:summarize
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent of the resource maintenance. eg. projects/123/locations/*
Query parameters
Parameters
pageSize
integer
The maximum number of resource maintenances to send per page. The default page size is 20 and the maximum is 1000.
pageToken
string
The page token: If the nextPageToken from a previous response is provided, this request will send the subsequent page.
filter
string
Filter the list as specified in https://google.aip.dev/160 . Supported fields include: - state - resource.location - resource.resourceName - resource.type - maintenance.maintenanceName - maintenanceStartTime - maintenanceCompleteTime Examples: - state="SCHEDULED" - resource.location="us-central1-c" - resource.resourceName=~"*/instance-20241212-211259" - maintenanceStartTime>"2000-10-11T20:44:51Z" - state="SCHEDULED" OR resource.type="compute.googleapis.com/Instance" - maintenance.maitenanceName="eb3b709c-9ca1-5472-9fb6-800a3849eda1" AND
maintenanceCompleteTime>"2000-10-11T20:44:51Z"
orderBy
string
Order results as specified in https://google.aip.dev/132 .
Request body
The request body must be empty.
Response body
Request message for resourceMaintenances.summarize custom method.
If successful, the response body contains data with the following structure:
JSON representation
{
"maintenances" : [
{
object ( MaintenanceSummary )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
maintenances[]
object ( MaintenanceSummary )
The resulting summaries.
nextPageToken
string
If present, the next page token can be provided to a subsequent resourceMaintenances.summarize call to list the next page. If empty, there are no more pages.
unreachable[]
string
Unordered list. Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
maintenance.resourceMaintenances.list
For more information, see the IAM documentation .
MaintenanceSummary
MaintenanceSummary contains maintenance statistics calculated based on ResourceMaintenances within the scope: project and location.
JSON representation
{
"maintenanceName" : string ,
"title" : string ,
"description" : string ,
"category" : enum ( MaintenanceCategory ) ,
"maintenanceScheduledStartTime" : string ,
"maintenanceScheduledEndTime" : string ,
"maintenanceStartTime" : string ,
"maintenanceEndTime" : string ,
"userControllable" : boolean ,
"controls" : [
{
object ( MaintenanceControl )
}
] ,
"stats" : [
{
object ( Stats )
}
]
}
Fields
maintenanceName
string
Output only. The name of the maintenance.
title
string
Output only. The title of the maintenance.
description
string
Output only. The description of the maintenance.
category
enum ( MaintenanceCategory )
Output only. The category of the maintenance event.
maintenanceScheduledStartTime
string ( Timestamp format)
Output only. Scheduled start time of the maintenance. The maintenance will start at maintenanceScheduledStartTime or later, with best effort to finish before maintenanceScheduledEndTime .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
maintenanceScheduledEndTime
string ( Timestamp format)
Output only. An estimated (best effort, not guaranteed) end time of the scheduled maintenance.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
maintenanceStartTime
string ( Timestamp format)
Output only. Actual date when the maintenance started. Field present only after the state changed to RUNNING .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
maintenanceEndTime
string ( Timestamp format)
Output only. Actual date when the maintenance successfully completed. Field present only after the state changed to SUCCEEDED .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
userControllable
boolean
Output only. Indicates whether the user has some control over that maintenance, either proactively before maintenance was scheduled with maintenance policy or with reactive controls after it was scheduled (see controls field).
controls[]
object ( MaintenanceControl )
Output only. Control available for that Maintenance (might not be available for every resource that maintenance is applied to).
stats[]
object ( Stats )
Output only. Stats is a field of ResourceMaintenance used to aggregate the stats.
Stats
Stats indicates the type of aggregate and the corresponding aggregates.
JSON representation
{
"groupBy" : string ,
"aggregates" : [
{
object ( Aggregate )
}
]
}
Fields
groupBy
string
groupBy specifies the type of aggregate. For example a groupBy might be "state"
aggregates[]
object ( Aggregate )
Aggregates is a list <group, count> pairs. For example, if the groupBy is "state" a possible tuple in the aggregates list could be "SCHEDULED" : 11 ,
Aggregate
Aggregate is a <group, count> pair.
JSON representation
{
"group" : string ,
"count" : string
}
Fields
group
string
Specifies what specific value of the groupBy the count represents. For example if groupBy is "state" its corresponding group could be "SCHEDULED" .
count
string ( int64 format)
The count of the group.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-08 UTC."],[],[]]
