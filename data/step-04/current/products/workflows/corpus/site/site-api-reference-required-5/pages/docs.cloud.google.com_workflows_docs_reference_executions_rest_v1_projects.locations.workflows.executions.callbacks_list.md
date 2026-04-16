---
title: "Method: projects.locations.workflows.executions.callbacks.list \_|\_ Workflows\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.callbacks/list
knowledge_key: corpus
source_id: site-api-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/text/url_encode_plus
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.callbacks/list
  title: "Method: projects.locations.workflows.executions.callbacks.list \_|\_ Workflows\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Method: projects.locations.workflows.executions.callbacks.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Callback
JSON representation
Try it!
Returns a list of active callbacks that belong to the execution with the given name. The returned callbacks are ordered by callback ID.
HTTP request
GET https://workflowexecutions.googleapis.com/v1/{parent=projects/*/locations/*/workflows/*/executions/*}/callbacks
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Name of the execution for which the callbacks should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
Authorization requires the following IAM permission on the specified resource parent :
workflows.callbacks.list
Query parameters
Parameters
pageSize
integer
Maximum number of callbacks to return per call. The default value is 100 and is also the maximum value.
pageToken
string
A page token, received from a previous callbacks.list call. Provide this to retrieve the subsequent page.
Note that pagination is applied to dynamic data. The list of callbacks returned can change between page requests if callbacks are created or deleted.
Request body
The request body must be empty.
Response body
RPC response object for the callbacks.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"callbacks" : [
{
object ( Callback )
}
] ,
"nextPageToken" : string
}
Fields
callbacks[]
object ( Callback )
The callbacks which match the request.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Callback
An instance of a Callback created by an execution.
JSON representation
{
"name" : string ,
"method" : string ,
"availablePayloads" : [
string
] ,
"waiters" : string
}
Fields
name
string
Output only. The resource name of the callback. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/callback/{callback}
method
string
Output only. The method accepted by the callback. For example: GET, POST, PUT.
availablePayloads[]
string
Output only. The payloads received by the callback that have not been processed by a waiting execution step.
waiters
string ( int64 format)
Output only. Number of execution steps waiting on this callback.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
