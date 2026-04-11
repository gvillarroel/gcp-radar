---
title: "Method: media.upload \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/media/upload
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/media/upload
  title: "Method: media.upload \_|\_ Google Chat \_|\_ Google for Developers"
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
Method: media.upload
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Uploads an attachment to a Google Chat space, supporting files up to 200 MB.
Uses an HTTP POST request to a specific URI with the space ID as a path parameter.
Requires a JSON request body specifying the filename of the attachment.
The response includes an attachmentDataRef object referencing the uploaded file.
Requires specific authorization scopes for user authentication.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Uploads an attachment. For an example, see Upload media as a file attachment .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.messages.create
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.import (import mode spaces only)
You can upload attachments up to 200 MB. Certain file types aren't supported. For details, see File types blocked by Google Chat .
HTTP request
Upload URI, for media upload requests: POST https://chat.googleapis.com/upload/v1/{parent=spaces/*}/attachments:upload
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Resource name of the Chat space in which the attachment is uploaded. Format "spaces/{space}".
Request body
The request body contains data with the following structure:
JSON representation
{
"filename" : string
}
Fields
filename
string
Required. The filename of the attachment, including the file extension.
Response body
Response of uploading an attachment.
If successful, the response body contains data with the following structure:
JSON representation
{
"attachmentDataRef" : {
object ( AttachmentDataRef )
}
}
Fields
attachmentDataRef
object ( AttachmentDataRef )
Reference to the uploaded attachment.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.messages.create
https://www.googleapis.com/auth/chat.messages
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document details the process for uploading attachments in Google Chat, limited to 200MB with certain file types restricted. The HTTP request uses `POST` to `https://chat.googleapis.com/upload/v1/{parent=spaces/*}/attachments:upload`, requiring a `parent` path parameter specifying the target space. The request body must include the attachment's `filename`. A successful upload returns an `attachmentDataRef` object. Authorization requires specific OAuth scopes like `chat.import`, `chat.messages.create`, or `chat.messages`.\n"]]
