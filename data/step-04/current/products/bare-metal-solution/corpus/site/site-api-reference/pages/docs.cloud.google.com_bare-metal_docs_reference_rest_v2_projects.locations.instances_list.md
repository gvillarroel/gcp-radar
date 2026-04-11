---
title: "Method: projects.locations.instances.list \_|\_ Bare Metal Solution \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.instances/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.instances/list
  title: "Method: projects.locations.instances.list \_|\_ Bare Metal Solution \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Reference
Send feedback
Method: projects.locations.instances.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization Scopes
Try it!
List servers in a given project and location.
HTTP request
GET https://baremetalsolution.googleapis.com/v2/{parent=projects/*/locations/*}/instances
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value for ListInstancesRequest.
Query parameters
Parameters
pageSize
integer
Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
pageToken
string
A token identifying a page of results from the server.
filter
string
List filter.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Response message for the list of servers.
JSON representation
{
"instances" : [
{
object ( Instance )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
instances[]
object ( Instance )
The list of servers.
nextPageToken
string
A token identifying a page of results from the server.
unreachable[]
string
Locations that could not be reached.
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
