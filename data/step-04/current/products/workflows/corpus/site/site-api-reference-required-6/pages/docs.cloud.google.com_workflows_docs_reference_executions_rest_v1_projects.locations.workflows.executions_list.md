---
title: "Method: projects.locations.workflows.executions.list \_|\_ Workflows \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list
knowledge_key: corpus
source_id: site-api-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/time/parse
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/list
  title: "Method: projects.locations.workflows.executions.list \_|\_ Workflows \_\
    |\_ Google Cloud Documentation"
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
Method: projects.locations.workflows.executions.list
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
Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
HTTP request
GET https://workflowexecutions.googleapis.com/v1/{parent=projects/*/locations/*/workflows/*}/executions
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}
Authorization requires the following IAM permission on the specified resource parent :
workflows.executions.list
Query parameters
Parameters
pageSize
integer
Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 1000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
pageToken
string
A page token, received from a previous executions.list call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to executions.list must match the call that provided the page token.
Note that pagination is applied to dynamic data. The list of executions returned can change between page requests.
view
enum ( ExecutionView )
Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
filter
string
Optional. Filters applied to the [Executions.ListExecutions] results. The following fields are supported for filtering: executionId , state , createTime , startTime , endTime , duration , workflowRevisionId , stepName , label , and disableConcurrencyQuotaOverflowBuffering . For details, see AIP-160 . For more information, see Filter executions .
For example, if you are using the Google APIs Explorer:
state="SUCCEEDED"
or
startTime>"2023-08-01" AND state="FAILED"
orderBy
string
Optional. Comma-separated list of fields that specify the ordering applied to the [Executions.ListExecutions] results. By default the ordering is based on descending createTime . The following fields are supported for ordering: executionId , state , createTime , startTime , endTime , duration , and workflowRevisionId . For details, see AIP-132 .
Request body
The request body must be empty.
Response body
Response for the executions.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"executions" : [
{
object ( Execution )
}
] ,
"nextPageToken" : string
}
Fields
executions[]
object ( Execution )
The executions which match the request.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
