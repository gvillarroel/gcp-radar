---
title: "Method: media.download \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download
  title: "Method: media.download \_|\_ Google Chat \_|\_ Google for Developers"
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
Method: media.download
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Downloads uploaded media, excluding Google Drive files, using the /v1/media/{+name}?alt=media URI.
To download, use a GET request specifying the media's resource name in the URL path.
The response provides the file content as bytes, supporting partial downloads via the Range header.
Authorization requires a Chat scope like chat.bot , chat.messages , or chat.messages.readonly .
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
Downloads uploaded media, but not Google Drive files. Download is supported on the URI /v1/media/{+name}?alt=media . To export bytes from a Google Drive file, see the files.export method in Google Drive.
HTTP request
GET https://chat.googleapis.com/v1/media/{resourceName=**}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
resourceName
string
Name of the media that you are downloading. For more information, see spaces.messages.attachments.attachmentDataRef .
Request body
The request body must be empty.
Response body
If successful, this method returns the file content as bytes.
To download only part of a file, use the Range header with a byte range . For example: Range: bytes=500-999 .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-02-27 UTC."],[],["The core functionality involves downloading uploaded media via a `GET` HTTP request to `/v1/media/{resourceName}`. The `resourceName` path parameter specifies the media to download. The request body must be empty. A successful response returns the file content as bytes. Partial downloads are supported using the `Range` header. Access requires specific OAuth scopes: `chat.bot`, `chat.messages`, or `chat.messages.readonly`. Google Drive files utilize a separate files.export method.\n"]]
