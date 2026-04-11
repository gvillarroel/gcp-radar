---
title: "VacationSettings \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings
  title: "VacationSettings \_|\_ Gmail \_|\_ Google for Developers"
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
VacationSettings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.
JSON representation
{
"enableAutoReply" : boolean ,
"responseSubject" : string ,
"responseBodyPlainText" : string ,
"responseBodyHtml" : string ,
"restrictToContacts" : boolean ,
"restrictToDomain" : boolean ,
"startTime" : string ,
"endTime" : string
}
Fields
enableAutoReply
boolean
Flag that controls whether Gmail automatically replies to messages.
responseSubject
string
Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.
responseBodyPlainText
string
Response body in plain text format. If both responseBodyPlainText and responseBodyHtml are specified, responseBodyHtml will be used.
responseBodyHtml
string
Response body in HTML format. Gmail will sanitize the HTML before storing it. If both responseBodyPlainText and responseBodyHtml are specified, responseBodyHtml will be used.
restrictToContacts
boolean
Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.
restrictToDomain
boolean
Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for Google Workspace users.
startTime
string ( int64 format)
An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both startTime and endTime are specified, startTime must precede endTime .
endTime
string ( int64 format)
An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both startTime and endTime are specified, startTime must precede endTime .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
