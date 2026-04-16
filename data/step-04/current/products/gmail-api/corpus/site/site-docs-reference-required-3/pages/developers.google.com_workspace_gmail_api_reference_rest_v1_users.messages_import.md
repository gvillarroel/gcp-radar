---
title: "Method: users.messages.import \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import
  title: "Method: users.messages.import \_|\_ Gmail \_|\_ Google for Developers"
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
Method: users.messages.import
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note that the maximum size of the message is 150MB.
HTTP request
Upload URI, for media upload requests: POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages/import
Metadata URI, for metadata-only requests: POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/import
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
userId
string
The user's email address. The special value me can be used to indicate the authenticated user.
Query parameters
Parameters
internalDateSource
enum ( InternalDateSource )
Source for Gmail's internal date of the message.
neverMarkSpam
boolean
Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
processForCalendar
boolean
Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
deleted
boolean
Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.
Request body
The request body contains an instance of Message .
Response body
If successful, the response body contains an instance of Message .
Authorization scopes
Requires one of the following OAuth scopes:
https://mail.google.com/
https://www.googleapis.com/auth/gmail.modify
https://www.googleapis.com/auth/gmail.insert
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-05 UTC."],[],[]]
