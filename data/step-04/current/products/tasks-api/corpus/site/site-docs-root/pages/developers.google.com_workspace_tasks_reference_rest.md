---
title: "Google Tasks API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/overview
source_metadata:
  url: https://developers.google.com/workspace/tasks/reference/rest
  title: "Google Tasks API \_|\_ Google for Developers"
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
Google Tasks API
Stay organized with collections
Save and categorize content based on your preferences.
The Google Tasks API lets you manage your tasks and task lists.
REST Resource: tasklists
REST Resource: tasks
Service: tasks.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://tasks.googleapis.com
REST Resource: tasklists
Methods
delete
DELETE /tasks/v1/users/@me/lists/{tasklist}
Deletes the authenticated user's specified task list.
get
GET /tasks/v1/users/@me/lists/{tasklist}
Returns the authenticated user's specified task list.
insert
POST /tasks/v1/users/@me/lists
Creates a new task list and adds it to the authenticated user's task lists.
list
GET /tasks/v1/users/@me/lists
Returns all the authenticated user's task lists.
patch
PATCH /tasks/v1/users/@me/lists/{tasklist}
Updates the authenticated user's specified task list.
update
PUT /tasks/v1/users/@me/lists/{tasklist}
Updates the authenticated user's specified task list.
REST Resource: tasks
Methods
clear
POST /tasks/v1/lists/{tasklist}/clear
Clears all completed tasks from the specified task list.
delete
DELETE /tasks/v1/lists/{tasklist}/tasks/{task}
Deletes the specified task from the task list.
get
GET /tasks/v1/lists/{tasklist}/tasks/{task}
Returns the specified task.
insert
POST /tasks/v1/lists/{tasklist}/tasks
Creates a new task on the specified task list.
list
GET /tasks/v1/lists/{tasklist}/tasks
Returns all tasks in the specified task list.
move
POST /tasks/v1/lists/{tasklist}/tasks/{task}/move
Moves the specified task to another position in the destination task list.
patch
PATCH /tasks/v1/lists/{tasklist}/tasks/{task}
Updates the specified task.
update
PUT /tasks/v1/lists/{tasklist}/tasks/{task}
Updates the specified task.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-13 UTC."],[],[]]
