---
title: "Method: users.messages.modify \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/modify
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/modify
  title: "Method: users.messages.modify \_|\_ Gmail \_|\_ Google for Developers"
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
Method: users.messages.modify
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Modifies the labels on the specified message.
HTTP request
POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id}/modify
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
userId
string
The user's email address. The special value me can be used to indicate the authenticated user.
id
string
The ID of the message to modify.
Request body
The request body contains data with the following structure:
JSON representation
{
"addLabelIds" : [
string
] ,
"removeLabelIds" : [
string
]
}
Fields
addLabelIds[]
string
A list of IDs of labels to add to this message. You can add up to 100 labels with each update.
removeLabelIds[]
string
A list IDs of labels to remove from this message. You can remove up to 100 labels with each update.
Response body
If successful, the response body contains an instance of Message .
Authorization scopes
Requires one of the following OAuth scopes:
https://mail.google.com/
https://www.googleapis.com/auth/gmail.modify
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-05 UTC."],[],[]]
