---
title: "Method: operations.get \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1beta/operations/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1beta/operations/get
  title: "Method: operations.get \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Method: operations.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This API endpoint retrieves the latest state of a long-running operation, allowing clients to poll for results.
It uses a GET request with the URL https://workspaceevents.googleapis.com/v1beta/{name=operations/**} , where {name} specifies the operation resource.
The request body should be empty and a successful response returns an Operation object detailing the operation's status.
Authorization requires one of the listed OAuth scopes related to Google Chat or Google Meet, providing varying levels of access.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
HTTP request
GET https://workspaceevents.googleapis.com/v1beta/{name=operations/**}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The name of the operation resource.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages.reactions.readonly
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/meet.space.created
https://www.googleapis.com/auth/meetings.space.created
https://www.googleapis.com/auth/meetings.space.readonly
https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/drive.file
https://www.googleapis.com/auth/drive.metadata
https://www.googleapis.com/auth/drive.metadata.readonly
https://www.googleapis.com/auth/drive.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-07 UTC."],[],["This content details how to get the latest state of a long-running operation via an HTTP `GET` request to a specified URL: `https://workspaceevents.googleapis.com/v1beta/{name=operations/**}`. The `name` path parameter, a string, represents the operation resource's name. The request body should be empty. A successful response returns an `Operation` instance. Access requires one of several specified OAuth scopes. Clients are able to use this to check the result of an operation.\n"]]
