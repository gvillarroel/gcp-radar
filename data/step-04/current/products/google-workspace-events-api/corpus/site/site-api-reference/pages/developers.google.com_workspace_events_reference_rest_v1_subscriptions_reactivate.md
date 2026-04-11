---
title: "Method: subscriptions.reactivate \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/reactivate
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/reactivate
  title: "Method: subscriptions.reactivate \_|\_ Google Workspace \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Method: subscriptions.reactivate
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Reactivates a suspended Google Workspace subscription, resetting its state to ACTIVE after the suspension error is resolved.
Requires a POST request to https://workspaceevents.googleapis.com/v1/{name=subscriptions/*}:reactivate , with the subscription name provided as a path parameter.
The request body should be empty, and a successful response includes an Operation object with the updated Subscription details.
Authorization requires one of the specified OAuth scopes, such as https://www.googleapis.com/auth/chat.spaces or similar, for access and interaction with Google Workspace resources.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Reactivates a suspended Google Workspace subscription.
This method resets your subscription's State field to ACTIVE . Before you use this method, you must fix the error that suspended the subscription. This method will ignore or reject any subscription that isn't currently in a suspended state. To learn how to use this method, see Reactivate a Google Workspace subscription .
For a subscription on a Chat target resource , you can reactivate a subscription as:
A Chat app by specifying an authorization scope that begins with chat.app and getting one-time administrator approval. To learn more, see Authorize as a Chat app with administrator approval .
A user by specifying an authorization scope that doesn't include app in its name. To learn more, see Authorize as a Chat user .
HTTP request
POST https://workspaceevents.googleapis.com/v1/{name=subscriptions/*}:reactivate
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Resource name of the subscription.
Format: subscriptions/{subscription}
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Operation .
The metadata field contains an empty array.
The response field contains an updated instance of Subscription .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages.reactions.readonly
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.app.memberships.readonly
https://www.googleapis.com/auth/chat.app.messages.readonly
https://www.googleapis.com/auth/chat.app.spaces
https://www.googleapis.com/auth/chat.app.spaces.readonly
https://www.googleapis.com/auth/meetings.space.created
https://www.googleapis.com/auth/meetings.space.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["This outlines the process to reactivate a suspended Google Workspace subscription via a `POST` request to the specified URL using gRPC Transcoding. The `name` path parameter, representing the subscription's resource name, is required. The request body must be empty. A successful response returns an `Operation` instance, with an empty `metadata` field, and an updated `Subscription` in the `response` field. This process requires specific OAuth scopes for authorization.\n"]]
