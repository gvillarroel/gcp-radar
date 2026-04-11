---
title: "Method: subscriptions.get \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/get
  title: "Method: subscriptions.get \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Method: subscriptions.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This method retrieves details about a specific Google Workspace subscription, providing information like its configuration and status.
An HTTP GET request is made to a specific URL, requiring the subscription's resource name as a path parameter.
The request body should be empty, and a successful response includes a Subscription object containing the subscription's details.
Authorization is necessary using one of the listed OAuth scopes, which grant access to various Chat and Meetings features depending on the chosen scope.
This feature is currently in Developer Preview and available through the Google Workspace Developer Preview Program.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Gets details about a Google Workspace subscription. To learn how to use this method, see Get details about a Google Workspace subscription .
HTTP request
GET https://workspaceevents.googleapis.com/v1beta/{name=subscriptions/*}
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
If successful, the response body contains an instance of Subscription .
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-07 UTC."],[],["This API method retrieves details about a Google Workspace subscription using a `GET` request to the specified URL. The required `name` parameter, formatted as `subscriptions/{subscription}`, is included in the URL path. The request body must be empty. A successful response returns a `Subscription` object. The method needs one of the listed OAuth scopes, related to chat and meeting spaces, for authorization. This feature is available as part of the Google Workspace Developer Preview Program.\n"]]
