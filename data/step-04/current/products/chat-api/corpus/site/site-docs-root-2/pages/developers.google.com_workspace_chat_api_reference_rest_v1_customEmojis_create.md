---
title: "Method: customEmojis.create \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/create
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/create
  title: "Method: customEmojis.create \_|\_ Google Chat \_|\_ Google for Developers"
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
Method: customEmojis.create
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This Developer Preview feature enables the creation of custom emojis in Google Chat.
It necessitates user authentication and uses the chat.customemojis OAuth scope.
The feature functions through an HTTP POST request, utilizing gRPC Transcoding, and involves request and response bodies containing the CustomEmoji object.
To explore its functionality, refer to the "Try it!" section within the documentation.
HTTP request
Request body
Response body
Authorization scopes
Try it!
Creates a custom emoji.
Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see Learn about custom emojis in Google Chat and Manage custom emoji permissions .
Requires user authentication with the authorization scope :
https://www.googleapis.com/auth/chat.customemojis
HTTP request
POST https://chat.googleapis.com/v1/customEmojis
The URL uses gRPC Transcoding syntax.
Request body
The request body contains an instance of CustomEmoji .
Response body
If successful, the response body contains a newly created instance of CustomEmoji .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.customemojis
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document outlines how to create a custom emoji using the Google Chat API. A `POST` request to `https://chat.googleapis.com/v1/customEmojis` is required, with the request body containing `CustomEmoji` data. Successful requests return a new `CustomEmoji` instance in the response body. This action is available through the Google Workspace Developer Preview Program and requires user authentication and the `https://www.googleapis.com/auth/chat.customemojis` OAuth scope. The API uses gRPC Transcoding.\n"]]
