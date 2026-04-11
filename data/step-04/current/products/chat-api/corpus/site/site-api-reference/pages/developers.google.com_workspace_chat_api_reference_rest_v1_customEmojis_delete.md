---
title: "Method: customEmojis.delete \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete
  title: "Method: customEmojis.delete \_|\_ Google Chat \_|\_ Google for Developers"
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
Method: customEmojis.delete
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Deletes a custom emoji using the DELETE HTTP request method with required user authentication.
Requires the chat.customemojis OAuth scope for authorization.
The custom emoji is identified by its resource name, specified as a path parameter called name .
The request body must be empty, and a successful deletion results in an empty response body.
This feature is currently available as a developer preview within the Google Workspace Developer Preview Program.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Deletes a custom emoji. By default, users can only delete custom emoji they created. Emoji managers assigned by the administrator can delete any custom emoji in the organization. See Learn about custom emojis in Google Chat .
Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see Learn about custom emojis in Google Chat and Manage custom emoji permissions .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.customemojis
HTTP request
DELETE https://chat.googleapis.com/v1/{name=customEmojis/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Resource name of the custom emoji to delete.
Format: customEmojis/{customEmoji}
You can use the emoji name as an alias for {customEmoji} . For example, customEmojis/:example-emoji: where :example-emoji: is the emoji name for a custom emoji.
Request body
The request body must be empty.
Response body
If successful, the response body is an empty JSON object.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.customemojis
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document details the process of deleting a custom emoji via an HTTP DELETE request to `https://chat.googleapis.com/v1/{name=customEmojis/*}`. The `name` path parameter, representing the emoji's resource name (e.g., `customEmojis/:example-emoji:`), is required. The request body must be empty. A successful deletion results in an empty response body. This action requires user authentication and the `https://www.googleapis.com/auth/chat.customemojis` OAuth scope. It's available via the Google Workspace Developer Preview Program.\n"]]
