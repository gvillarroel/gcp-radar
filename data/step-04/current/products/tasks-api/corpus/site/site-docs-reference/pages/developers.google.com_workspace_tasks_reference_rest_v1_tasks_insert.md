---
title: "Method: tasks.insert \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/insert
  title: "Method: tasks.insert \_|\_ Google Tasks \_|\_ Google for Developers"
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
Method: tasks.insert
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Creates a new task on the specified task list. Tasks assigned from Docs or Chat Spaces cannot be inserted from Tasks Public API; they can only be created by assigning them from Docs or Chat Spaces. A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
HTTP request
POST https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/tasks
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
tasklist
string
Task list identifier.
Query parameters
Parameters
parent
string
Parent task identifier. If the task is created at the top level, this parameter is omitted. An assigned task cannot be a parent task, nor can it have a parent. Setting the parent to an assigned task results in failure of the request. Optional.
previous
string
Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
Request body
The request body contains an instance of Task .
Response body
If successful, the response body contains a newly created instance of Task .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/tasks
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-13 UTC."],[],[]]
