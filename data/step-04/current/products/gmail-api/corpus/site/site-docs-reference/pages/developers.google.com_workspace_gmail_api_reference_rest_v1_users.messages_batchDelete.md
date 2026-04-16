---
title: "Method: users.messages.batchDelete \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchDelete
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchDelete
  title: "Method: users.messages.batchDelete \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
Method: users.messages.batchDelete
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
HTTP request
POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/batchDelete
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
userId
string
The user's email address. The special value me can be used to indicate the authenticated user.
Request body
The request body contains data with the following structure:
JSON representation
{
"ids" : [
string
]
}
Fields
ids[]
string
The IDs of the messages to delete.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://mail.google.com/
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-05 UTC."],[],[]]
