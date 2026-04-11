---
title: "AutoForwarding \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding
  title: "AutoForwarding \_|\_ Gmail \_|\_ Google for Developers"
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
AutoForwarding
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Disposition
Auto-forwarding settings for an account.
JSON representation
{
"enabled" : boolean ,
"emailAddress" : string ,
"disposition" : enum ( Disposition )
}
Fields
enabled
boolean
Whether all incoming mail is automatically forwarded to another address.
emailAddress
string
Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.
disposition
enum ( Disposition )
The state that a message should be left in after it has been forwarded.
Disposition
Specifies what Gmail should do with a message after it has been automatically forwarded.
Enums
dispositionUnspecified
Unspecified disposition.
leaveInInbox
Leave the message in the INBOX .
archive
Archive the message.
trash
Move the message to the TRASH .
markRead
Leave the message in the INBOX and mark it as read.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
