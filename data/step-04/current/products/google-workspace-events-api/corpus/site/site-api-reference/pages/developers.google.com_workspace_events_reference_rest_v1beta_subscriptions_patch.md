---
title: "Method: subscriptions.patch \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1beta/subscriptions/patch
  title: "Method: subscriptions.patch \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Method: subscriptions.patch
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This API updates or renews a Google Workspace subscription using a PATCH request to the specified URL.
You can optionally specify an updateMask to target specific fields for updating and validateOnly to preview the request without applying changes.
The request body should contain a Subscription object and the successful response will include an Operation object with the updated Subscription .
Authorization requires specific OAuth scopes related to Google Chat or Google Meet, as detailed in the documentation.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
Updates or renews a Google Workspace subscription. To learn how to use this method, see Update or renew a Google Workspace subscription .
For a subscription on a Chat target resource , you can update a subscription as:
A Chat app by specifying an authorization scope that begins with chat.app andgetting one-time administrator approval. To learn more, see Authorize as a Chat app with administrator approval .
A user by specifying an authorization scope that doesn't include app in its name. To learn more, see Authorize as a Chat user .
HTTP request
PATCH https://workspaceevents.googleapis.com/v1beta/{subscription.name=subscriptions/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
subscription.name
string
Identifier. Resource name of the subscription.
Format: subscriptions/{subscription}
Query parameters
Parameters
updateMask
string ( FieldMask format)
Optional. The field to update. If omitted, updates any fields included in the request.
You can update one of the following fields in a subscription:
expireTime : The timestamp when the subscription expires.
ttl : The time-to-live (TTL) or duration of the subscription.
eventTypes : The list of event types to receive about the target resource.
When using the * wildcard (equivalent to PUT ), omitted fields are set to empty values and rejected if they're invalid.
validateOnly
boolean
Optional. If set to true , validates and previews the request, but doesn't update the subscription.
Request body
The request body contains an instance of Subscription .
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["This documentation details updating Google Workspace subscriptions via a `PATCH` HTTP request to `https://workspaceevents.googleapis.com/v1beta/{subscription.name=subscriptions/*}`. Key actions involve specifying the subscription name in the path and using `updateMask` in query parameters to selectively modify fields like `expireTime`, `ttl`, or `eventTypes`. The request body contains subscription details, while the successful response includes an `Operation` with the updated subscription. Authentication requires specific OAuth scopes. The process allows for request validation without actual modification.\n"]]
