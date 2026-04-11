---
title: "Method: projects.locations.jobTemplates.list \_|\_ Transcoder API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/projects.locations.jobTemplates/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transcoder/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/projects.locations.jobTemplates/list
  title: "Method: projects.locations.jobTemplates.list \_|\_ Transcoder API \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Transcoder API
Reference
Send feedback
Method: projects.locations.jobTemplates.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Lists job templates in the specified region.
HTTP request
GET https://transcoder.googleapis.com/v1/{parent=projects/*/locations/*}/jobTemplates
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent location from which to retrieve the collection of job templates. Format: projects/{project}/locations/{location}
Authorization requires the following IAM permission on the specified resource parent :
transcoder.jobTemplates.list
Query parameters
Parameters
pageSize
integer
The maximum number of items to return.
pageToken
string
The nextPageToken value returned from a previous List request, if any.
filter
string
The filter expression, following the syntax outlined in https://google.aip.dev/160 .
orderBy
string
One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering .
Request body
The request body must be empty.
Response body
Response message for TranscoderService.ListJobTemplates .
If successful, the response body contains data with the following structure:
JSON representation
{
"jobTemplates" : [
{
object ( JobTemplate )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
jobTemplates[]
object ( JobTemplate )
List of job templates in the specified region.
nextPageToken
string
The pagination token.
unreachable[]
string
List of regions that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
