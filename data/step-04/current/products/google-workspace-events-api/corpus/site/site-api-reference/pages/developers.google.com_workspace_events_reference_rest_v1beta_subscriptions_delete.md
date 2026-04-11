---
title: "Method: subscriptions.delete \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/delete
  title: "Method: subscriptions.delete \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Method: subscriptions.delete
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document describes how to delete a Google Workspace subscription using the DELETE method.
The request requires specifying the subscription name in the URL path and can optionally include query parameters for validation, error handling, and Etag verification.
An empty request body is required, and a successful response will return an Operation object indicating the deletion process.
To authorize this request, you need one of the listed OAuth scopes, such as https://www.googleapis.com/auth/chat.bot or those related to Chat, Meetings, and Spaces.
This feature is part of the Google Workspace Developer Preview Program and may be subject to change.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Deletes a Google Workspace subscription. To learn how to use this method, see Delete a Google Workspace subscription .
HTTP request
DELETE https://workspaceevents.googleapis.com/v1beta/{name=subscriptions/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Resource name of the subscription to delete.
Format: subscriptions/{subscription}
Query parameters
Parameters
validateOnly
boolean
Optional. If set to true , validates and previews the request, but doesn't delete the subscription.
allowMissing
boolean
Optional. If set to true and the subscription isn't found, the request succeeds but doesn't delete the subscription.
etag
string
Optional. Etag of the subscription.
If present, it must match with the server's etag. Otherwise, request fails with the status ABORTED .
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Operation .
The metadata field contains an empty array.
The response field is empty.
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-07 UTC."],[],["This document outlines the process for deleting a Google Workspace subscription via an HTTP DELETE request to `https://workspaceevents.googleapis.com/v1beta/{name=subscriptions/*}`. The `name` path parameter is required to specify the subscription. Optional query parameters include `validateOnly`, `allowMissing`, and `etag`. The request body should be empty. A successful operation returns an Operation instance, while specific OAuth scopes are required for authorization.\n"]]
