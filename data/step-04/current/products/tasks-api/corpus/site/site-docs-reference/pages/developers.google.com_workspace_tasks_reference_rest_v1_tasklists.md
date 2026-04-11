---
title: "REST Resource: tasklists \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasklists
  title: "REST Resource: tasklists \_|\_ Google Tasks \_|\_ Google for Developers"
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
REST Resource: tasklists
Stay organized with collections
Save and categorize content based on your preferences.
Resource: TaskList
JSON representation
Methods
Resource: TaskList
JSON representation
{
"kind" : string ,
"id" : string ,
"etag" : string ,
"title" : string ,
"updated" : string ,
"selfLink" : string
}
Fields
kind
string
Output only. Type of the resource. This is always "tasks#taskList".
id
string
Task list identifier.
etag
string
ETag of the resource.
title
string
Title of the task list. Maximum length allowed: 1024 characters.
updated
string
Output only. Last modification time of the task list (as a RFC 3339 timestamp).
selfLink
string
Output only. URL pointing to this task list. Used to retrieve, update, or delete this task list.
Methods
delete
Deletes the authenticated user's specified task list.
get
Returns the authenticated user's specified task list.
insert
Creates a new task list and adds it to the authenticated user's task lists.
list
Returns all the authenticated user's task lists.
patch
Updates the authenticated user's specified task list.
update
Updates the authenticated user's specified task list.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-13 UTC."],[],[]]
