---
title: "Method: projects.locations.resourceMaintenances.list \_|\_ Unified Maintenance\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/v1/projects.locations.resourceMaintenances/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/v1/projects.locations.resourceMaintenances/list
  title: "Method: projects.locations.resourceMaintenances.list \_|\_ Unified Maintenance\
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
Method: projects.locations.resourceMaintenances.list
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
Try it!
Retrieve a collection of resource maintenances.
HTTP request
GET https://maintenance.googleapis.com/v1/{parent=projects/*/locations/*}/resourceMaintenances
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent of the resource maintenance.
Query parameters
Parameters
pageSize
integer
The maximum number of resource maintenances to send per page.
pageToken
string
The page token: If the nextPageToken from a previous response is provided, this request will send the subsequent page.
filter
string
Filter the list as specified in https://google.aip.dev/160 .
orderBy
string
Order results as specified in https://google.aip.dev/132 .
Request body
The request body must be empty.
Response body
The response structure for the resourceMaintenances.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"resourceMaintenances" : [
{
object ( ResourceMaintenance )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
resourceMaintenances[]
object ( ResourceMaintenance )
The resulting resource maintenances.
nextPageToken
string
If present, the next page token can be provided to a subsequent resourceMaintenances.list call to list the next page. If empty, there are no more pages.
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
maintenance.resourceMaintenances.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-08 UTC."],[],[]]
