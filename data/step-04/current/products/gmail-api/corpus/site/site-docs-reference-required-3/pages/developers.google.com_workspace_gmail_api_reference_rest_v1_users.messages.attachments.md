---
title: "REST Resource: users.messages.attachments \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages.attachments
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages.attachments
  title: "REST Resource: users.messages.attachments \_|\_ Gmail \_|\_ Google for Developers"
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
REST Resource: users.messages.attachments
Stay organized with collections
Save and categorize content based on your preferences.
Resource: MessagePartBody
JSON representation
Methods
Resource: MessagePartBody
The body of a single MIME message part.
JSON representation
{
"attachmentId" : string ,
"size" : integer ,
"data" : string
}
Fields
attachmentId
string
When present, contains the ID of an external attachment that can be retrieved in a separate messages.attachments.get request. When not present, the entire content of the message part body is contained in the data field.
size
integer
Number of bytes for the message part data (encoding notwithstanding).
data
string ( bytes format)
The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.
A base64-encoded string.
Methods
get
Gets the specified message attachment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
