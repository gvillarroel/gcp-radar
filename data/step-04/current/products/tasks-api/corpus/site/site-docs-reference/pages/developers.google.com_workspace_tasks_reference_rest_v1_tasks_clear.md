---
title: "Method: tasks.clear \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/clear
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks/clear
  title: "Method: tasks.clear \_|\_ Google Tasks \_|\_ Google for Developers"
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
Method: tasks.clear
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
HTTP request
POST https://tasks.googleapis.com/tasks/v1/lists/{tasklist}/clear
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
tasklist
string
Task list identifier.
Request body
The request body must be empty.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/tasks
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-13 UTC."],[],[]]
