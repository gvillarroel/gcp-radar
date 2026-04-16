---
title: "Method: projects.locations.workflows.executions.stepEntries.list \_|\_ Workflows\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries/list
  title: "Method: projects.locations.workflows.executions.stepEntries.list \_|\_ Workflows\
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
Method: projects.locations.workflows.executions.stepEntries.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Returns a list of step entries for a workflow execution. Entries are ordered by createTime .
HTTP request
GET https://workflowexecutions.googleapis.com/v1/{parent=projects/*/locations/*/workflows/*/executions/*}/stepEntries
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Name of the workflow execution to list entries for. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
Authorization requires the following IAM permission on the specified resource parent :
workflows.stepEntries.list
Query parameters
Parameters
pageSize
integer
Optional. Number of step entries to return per call. The default max is 1000.
pageToken
string
Optional. A page token, received from a previous stepEntries.list call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to stepEntries.list must match the call that provided the page token.
skip
integer
Optional. The number of step entries to skip. It can be used with or without a pageToken. If used with a pageToken, then it indicates the number of step entries to skip starting from the requested page.
filter
string
Optional. Filters applied to the [StepEntries.ListStepEntries] results. The following fields are supported for filtering: entryId , createTime , updateTime , routine , step , stepType , state , parent . For details, see AIP-160 .
For example, if you are using the Google APIs Explorer:
state="SUCCEEDED"
or
createTime>"2023-08-01" AND state="FAILED"
orderBy
string
Optional. Comma-separated list of fields that specify the ordering applied to the [StepEntries.ListStepEntries] results. By default the ordering is based on ascending entryId . The following fields are supported for ordering: entryId , createTime , updateTime , routine , step , stepType , state . For details, see AIP-132 .
Request body
The request body must be empty.
Response body
Response message for ExecutionHistory.ListStepEntries.
If successful, the response body contains data with the following structure:
JSON representation
{
"stepEntries" : [
{
object ( StepEntry )
}
] ,
"nextPageToken" : string ,
"totalSize" : integer
}
Fields
stepEntries[]
object ( StepEntry )
The list of entries.
nextPageToken
string
A token to retrieve next page of results. Pass this value in the ListStepEntriesRequest.page_token field in the subsequent call to stepEntries.list method to retrieve the next page of results.
totalSize
integer
Indicates the total number of step entries that match the request filter. For running executions, this number indicates the number of step entries that are executed so far.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
