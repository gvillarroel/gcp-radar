---
title: "Method: subscriptions.create \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/create
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
Creates a Google Workspace subscription using an HTTP POST request to a specified URL.
Allows validation and preview of the request without creating a subscription using the validateOnly query parameter.
Requires providing a Subscription object in the request body and returns an Operation object in the response, containing the new subscription details.
Requires specific authorization scopes, such as chat and meeting related scopes, for access control and permissions.
Is currently available as part of the Google Workspace Developer Preview Program.
HTTP request
Query parameters
Request body
Response body
Authorization scopes
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Creates a Google Workspace subscription. To learn how to use this method, see Create a Google Workspace subscription .
For a subscription on a Chat target resource , you can create a subscription as:
A Chat app by specifying an authorization scope that begins with chat.app and getting one-time administrator approval. To learn more, see Authorize as a Chat app with administrator approval .
A user by specifying an authorization scope that doesn't include app in its name. To learn more, see Authorize as a Chat user .
HTTP request
POST https://workspaceevents.googleapis.com/v1beta/subscriptions
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
https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/drive.file
https://www.googleapis.com/auth/drive.metadata
https://www.googleapis.com/auth/drive.metadata.readonly
https://www.googleapis.com/auth/drive.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["This document details creating a Google Workspace subscription via a `POST` request to `https://workspaceevents.googleapis.com/v1beta/subscriptions`. The request includes optional `validateOnly` query parameter for previewing. The request body requires a `Subscription` instance, and successful responses return an `Operation` instance, which contains an array and a new `Subscription` instance. Creating subscription needs to use one of the authorization scopes. This feature is in developer preview.\n"]]
