---
title: "Method: subscriptions.delete \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/delete
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
This method deletes a Google Workspace subscription using a DELETE request to the specified URL.
The request requires a name path parameter specifying the subscription to delete and optional query parameters for validation, error handling, and etag verification.
An empty request body is required, and a successful response returns an Operation object indicating the deletion status.
Authorization requires one of the listed OAuth scopes, providing access to various Google Chat and Meet functionalities.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Deletes a Google Workspace subscription. To learn how to use this method, see Delete a Google Workspace subscription .
HTTP request
DELETE https://workspaceevents.googleapis.com/v1/{name=subscriptions/*}
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
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-10 UTC."],[],["To delete a Google Workspace subscription, send a `DELETE` request to `https://workspaceevents.googleapis.com/v1/{name=subscriptions/*}`, specifying the subscription's resource name in the `name` path parameter. The request body must be empty. Optional query parameters include `validateOnly`, `allowMissing`, and `etag` for validation, handling missing subscriptions, and matching server etags. Successful responses return an `Operation` instance with empty `metadata` and `response` fields. Requires specific OAuth scopes for authorization.\n"]]
