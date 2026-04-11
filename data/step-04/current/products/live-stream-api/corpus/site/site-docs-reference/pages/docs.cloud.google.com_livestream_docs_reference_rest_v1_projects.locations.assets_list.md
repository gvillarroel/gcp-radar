---
title: "Method: projects.locations.assets.list \_|\_ Live Stream API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.assets/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.assets/list
  title: "Method: projects.locations.assets.list \_|\_ Live Stream API \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Live Stream API
Reference
Send feedback
Method: projects.locations.assets.list
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
Returns a list of all assets in the specified region.
HTTP request
GET https://livestream.googleapis.com/v1/{parent=projects/*/locations/*}/assets
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent location for the resource, in the form of: projects/{project}/locations/{location} .
Query parameters
Parameters
pageSize
integer
Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
pageToken
string
A token identifying a page of results the server should return.
filter
string
Filtering results
orderBy
string
Hint for how to order the results
Request body
The request body must be empty.
Response body
Response message for "LivestreamService.ListAssets".
If successful, the response body contains data with the following structure:
JSON representation
{
"assets" : [
{
object ( Asset )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
assets[]
object ( Asset )
The list of Assets
nextPageToken
string
The nextPageToken value returned from a previous List request, if any.
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
livestream.assets.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
