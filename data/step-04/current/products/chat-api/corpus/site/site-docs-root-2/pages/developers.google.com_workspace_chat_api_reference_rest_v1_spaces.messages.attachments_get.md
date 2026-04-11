---
title: "Method: spaces.messages.attachments.get \_|\_ Google Chat \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments/get
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments/get
  title: "Method: spaces.messages.attachments.get \_|\_ Google Chat \_|\_ Google for\
    \ Developers"
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
Method: spaces.messages.attachments.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieves metadata of a message attachment, with the actual attachment data fetched separately using the media API.
Requires the chat.bot OAuth scope and app authentication for access.
Uses a GET request to the specified URL with the attachment's resource name as a path parameter.
Returns an Attachment object in the response body upon successful execution.
Refer to the provided links for a practical example and further details on media download and authorization.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Gets the metadata of a message attachment. The attachment data is fetched using the media API . For an example, see Get metadata about a message attachment .
Requires app authentication with the authorization scope :
https://www.googleapis.com/auth/chat.bot
HTTP request
GET https://chat.googleapis.com/v1/{name=spaces/*/messages/*/attachments/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Resource name of the attachment, in the form spaces/{space}/messages/{message}/attachments/{attachment} .
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Attachment .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/chat.bot
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This describes retrieving message attachment metadata via a `GET` request to `https://chat.googleapis.com/v1/{name=spaces/*/messages/*/attachments/*}`. The `name` parameter, specifying the attachment's resource location, is required. The request body must be empty. A successful response returns an `Attachment` instance. Accessing this data mandates the `https://www.googleapis.com/auth/chat.bot` OAuth scope. The actual attachment data can be downloaded using the linked media API.\n"]]
