---
title: "Method: processes.listScriptProcesses \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses
  title: "Method: processes.listScriptProcesses \_|\_ Apps Script \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Method: processes.listScriptProcesses
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page provides details on how to list a script's executed processes, including their type and status.
The HTTP request method is GET and the URL uses gRPC Transcoding syntax.
Query parameters are used to filter the results by script ID, a script process filter object, page size, and page token.
The response body contains a list of Process resources and a token for the next page of results.
The ListScriptProcessesFilter object allows for filtering processes by deployment ID, function name, start and end time, process types, statuses, and user access levels.
HTTP request
Query parameters
Request body
Response body
JSON representation
Authorization Scopes
ListScriptProcessesFilter
JSON representation
Try it!
List information about a script's executed processes, such as process type and current status.
HTTP request
GET https://script.googleapis.com/v1/processes:listScriptProcesses
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
scriptId
string
The script ID of the project whose processes are listed.
scriptProcessFilter
object ( ListScriptProcessesFilter )
A filter used to limit the list results; only processes matching the filter criteria are returned.
pageSize
integer
The maximum number of returned processes per page of results. Defaults to 50.
pageToken
string
The token for continuing a previous list request on the next page. This should be set to the value of nextPageToken from a previous response.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Response with the list of Process resources.
JSON representation
{
"processes" : [
{
object ( Process )
}
] ,
"nextPageToken" : string
}
Fields
processes[]
object ( Process )
List of processes matching request parameters.
nextPageToken
string
Token for the next page of results. If empty, there are no more pages remaining.
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/script.processes
For more information, see the OAuth 2.0 Overview .
ListScriptProcessesFilter
Filter used to further specify which processes to list. Only processes that match all the specified conditions are returned.
JSON representation
{
"deploymentId" : string ,
"functionName" : string ,
"startTime" : string ,
"endTime" : string ,
"types" : [
enum ( ProcessType )
] ,
"statuses" : [
enum ( ProcessStatus )
] ,
"userAccessLevels" : [
enum ( UserAccessLevel )
]
}
Fields
deploymentId
string
Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
functionName
string
Optional field used to limit returned processes to those originating from a script function with the given function name.
startTime
string ( Timestamp format)
Optional field used to limit returned processes to those that were started on or after the given timestamp.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
endTime
string ( Timestamp format)
Optional field used to limit returned processes to those that completed on or before the given timestamp.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
types[]
enum ( ProcessType )
Optional field used to limit returned processes to those having one of the specified process types.
statuses[]
enum ( ProcessStatus )
Optional field used to limit returned processes to those having one of the specified process statuses.
userAccessLevels[]
enum ( UserAccessLevel )
Optional field used to limit returned processes to those having one of the specified user access levels.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
