---
title: "Method: projects.agentPools.list \_|\_ Storage Transfer Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list
  title: "Method: projects.agentPools.list \_|\_ Storage Transfer Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
Method: projects.agentPools.list
Stay organized with collections
Save and categorize content based on your preferences.
Lists agent pools.
HTTP request
GET https://storagetransfer.googleapis.com/v1/projects/{projectId}/agentPools
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
projectId
string
Required. The ID of the Google Cloud project that owns the job.
Authorization requires the following IAM permission on the specified resource projectId :
storagetransfer.agentpools.list
Query parameters
Parameters
filter
string
An optional list of query parameters specified as JSON text in the form of:
{"agentPoolNames":["agentpool1","agentpool2",...]}
Since agentPoolNames support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project.
pageSize
integer
The list page size. The max allowed value is 256 .
pageToken
string
The list page token.
Request body
The request body must be empty.
Response body
Response from agentPools.list.
If successful, the response body contains data with the following structure:
JSON representation
{
"agentPools" : [
{
object ( AgentPool )
}
] ,
"nextPageToken" : string
}
Fields
agentPools[]
object ( AgentPool )
A list of agent pools.
nextPageToken
string
The list next page token.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
