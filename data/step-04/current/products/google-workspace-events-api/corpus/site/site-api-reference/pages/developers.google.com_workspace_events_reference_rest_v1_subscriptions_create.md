---
title: "Method: subscriptions.create \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/create
  title: "Method: subscriptions.create \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Method: subscriptions.create
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This method creates a Google Workspace subscription and provides instructions on how to use it through a provided link.
The request can be previewed without creating a subscription by setting the validateOnly query parameter to true .
A successful response includes an Operation object containing the newly created Subscription details.
Authorization requires one of the listed OAuth scopes, such as https://www.googleapis.com/auth/chat.spaces or others related to chat, messages, memberships, and meetings, with more information available in the Authorization guide.
HTTP request
Query parameters
Request body
Response body
Authorization scopes
Creates a Google Workspace subscription. To learn how to use this method, see Create a Google Workspace subscription .
For a subscription on a Chat target resource , you can create a subscription as:
A Chat app by specifying an authorization scope that begins with chat.app and getting one-time administrator approval. To learn more, see Authorize as a Chat app with administrator approval .
A user by specifying an authorization scope that doesn't include app in its name. To learn more, see Authorize as a Chat user .
HTTP request
POST https://workspaceevents.googleapis.com/v1/subscriptions
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
validateOnly
boolean
Optional. If set to true , validates and previews the request, but doesn't create the subscription.
Request body
The request body contains an instance of Subscription .
Response body
If successful, the response body contains a newly created instance of Operation .
The metadata field contains an empty array.
The response field contains a new instance of Subscription .
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["This describes how to create a Google Workspace subscription via a `POST` request to `https://workspaceevents.googleapis.com/v1/subscriptions`. The request includes an instance of `Subscription` in the body. The `validateOnly` query parameter can be used to preview the request. Successful responses contain an `Operation` instance, where `response` field has a new `Subscription`. This process requires one of several listed OAuth scopes for authorization.\n"]]
