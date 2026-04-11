---
title: "Method: tasks.list \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/list
  title: "Method: tasks.list \_|\_ Google Tasks \_|\_ Google for Developers"
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
Method: tasks.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Tasks
JSON representation
Try it!
Returns all tasks in the specified task list. Doesn't return assigned tasks by default (from Docs, Chat Spaces). A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
HTTP request
GET https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/tasks
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
tasklist
string
Task list identifier.
Query parameters
Parameters
completedMax
string
Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
completedMin
string
Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
dueMax
string
Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
dueMin
string
Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
maxResults
integer
Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).
pageToken
string
Token specifying the result page to return. Optional.
showCompleted
boolean
Flag indicating whether completed tasks are returned in the result. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps. Optional. The default is True.
showDeleted
boolean
Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
showHidden
boolean
Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
updatedMin
string
Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
showAssigned
boolean
Optional. Flag indicating whether tasks assigned to the current user are returned in the result. Optional. The default is False.
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
object ( Task )
}
]
}
Fields
kind
string
Type of the resource. This is always "tasks#tasks".
etag
string
ETag of the resource.
nextPageToken
string
Token used to access the next page of this result.
items[]
object ( Task )
Collection of tasks.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/tasks
https://www.googleapis.com/auth/tasks.readonly
For more information, see the Authorization guide .
Tasks
JSON representation
{
"kind" : string ,
"etag" : string ,
"nextPageToken" : string ,
"items" : [
{
object ( Task )
}
]
}
Fields
kind
string
Type of the resource. This is always "tasks#tasks".
etag
string
ETag of the resource.
nextPageToken
string
Token used to access the next page of this result.
items[]
object ( Task )
Collection of tasks.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-10 UTC."],[],[]]
