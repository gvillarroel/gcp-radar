---
title: "Method: projects.locations.fleetPackages.rollouts.list \_|\_ Config Sync \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages.rollouts/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages.rollouts/list
  title: "Method: projects.locations.fleetPackages.rollouts.list \_|\_ Config Sync\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Reference
Send feedback
Method: projects.locations.fleetPackages.rollouts.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Lists Rollouts in a given project, location, and Fleet Package.
HTTP request
GET https://configdelivery.googleapis.com/v1alpha/{parent=projects/*/locations/*/fleetPackages/*}/rollouts
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value for ListRolloutsRequest
Query parameters
Parameters
pageSize
integer
Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
pageToken
string
Optional. A token identifying a page of results the server should return.
filter
string
Optional. Filtering results
orderBy
string
Optional. Hint for how to order the results
Request body
The request body must be empty.
Response body
Message for response to listing Rollouts
If successful, the response body contains data with the following structure:
JSON representation
{
"rollouts" : [
{
object ( Rollout )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
rollouts[]
object ( Rollout )
The list of Rollouts
nextPageToken
string
A token identifying a page of results the server should return.
unreachable[]
string
Unordered list. Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]
