---
title: "Method: tasklists.list \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists/list
  title: "Method: tasklists.list \_|\_ Google Tasks \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Tasks
Reference
Send feedback
Method: tasklists.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
JSON representation
Authorization scopes
TaskLists
JSON representation
Try it!
Returns all the authenticated user's task lists. A user can have up to 2000 lists at a time.
HTTP request
GET https://tasks.googleapis.com/tasks/v1/users/@me/lists
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
maxResults
integer
Maximum number of task lists returned on one page. Optional. The default is 1000 (max allowed: 1000).
pageToken
string
Token specifying the result page to return. Optional.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
JSON representation
{
"kind" : string ,
"etag" : string ,
"nextPageToken" : string ,
"items" : [
{
object ( TaskList )
}
]
}
Fields
kind
string
Type of the resource. This is always "tasks#taskLists".
etag
string
ETag of the resource.
nextPageToken
string
Token that can be used to request the next page of this result.
items[]
object ( TaskList )
Collection of task lists.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/tasks
https://www.googleapis.com/auth/tasks.readonly
For more information, see the Authorization guide .
TaskLists
JSON representation
{
"kind" : string ,
"etag" : string ,
"nextPageToken" : string ,
"items" : [
{
object ( TaskList )
}
]
}
Fields
kind
string
Type of the resource. This is always "tasks#taskLists".
etag
string
ETag of the resource.
nextPageToken
string
Token that can be used to request the next page of this result.
items[]
object ( TaskList )
Collection of task lists.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-13 UTC."],[],[]]
