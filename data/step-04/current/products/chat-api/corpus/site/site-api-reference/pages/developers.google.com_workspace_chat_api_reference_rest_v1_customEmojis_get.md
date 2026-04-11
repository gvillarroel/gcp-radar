---
title: "Method: customEmojis.get \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/get
  title: "Method: customEmojis.get \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
Method: customEmojis.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This feature lets you retrieve details about a specific custom emoji using the emoji name or ID.
You can access this feature during the Google Workspace Developer Preview Program and it requires user authentication.
The request is made via a GET method to a specific URL with the emoji name or ID.
The response will contain information on the custom emoji in the CustomEmoji format.
You'll need specific authorization scopes related to custom emojis to use this functionality.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Returns details about a custom emoji.
Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see Learn about custom emojis in Google Chat and Manage custom emoji permissions .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.customemojis.readonly
https://www.googleapis.com/auth/chat.customemojis
HTTP request
GET https://chat.googleapis.com/v1/{name=customEmojis/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Resource name of the custom emoji.
Format: customEmojis/{customEmoji}
You can use the emoji name as an alias for {customEmoji} . For example, customEmojis/:example-emoji: where :example-emoji: is the emoji name for a custom emoji.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of CustomEmoji .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.customemojis
https://www.googleapis.com/auth/chat.customemojis.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document outlines how to retrieve details about a custom emoji via the Google Chat API. It utilizes a `GET` HTTP request to `https://chat.googleapis.com/v1/{name=customEmojis/*}`, requiring a resource name in the path parameter `name`. The request body must be empty. A successful response returns a `CustomEmoji` instance. User authentication is mandatory, needing one of the specified OAuth scopes, and the process is part of the Google Workspace Developer Preview Program.\n"]]
