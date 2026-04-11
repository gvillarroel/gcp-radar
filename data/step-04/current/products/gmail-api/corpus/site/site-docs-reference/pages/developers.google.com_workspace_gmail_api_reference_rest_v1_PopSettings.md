---
title: "PopSettings \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/PopSettings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/PopSettings
  title: "PopSettings \_|\_ Gmail \_|\_ Google for Developers"
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
PopSettings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AccessWindow
Disposition
POP settings for an account.
JSON representation
{
"accessWindow" : enum ( AccessWindow ) ,
"disposition" : enum ( Disposition )
}
Fields
accessWindow
enum ( AccessWindow )
The range of messages which are accessible via POP.
disposition
enum ( Disposition )
The action that will be executed on a message after it has been fetched via POP.
AccessWindow
A range of messages that are accessible via POP.
Enums
accessWindowUnspecified
Unspecified range.
disabled
Indicates that no messages are accessible via POP.
fromNowOn
Indicates that unfetched messages received after some past point in time are accessible via POP.
allMail
Indicates that all unfetched messages are accessible via POP.
Disposition
Specifies what Gmail should do with a message after it has been fetched via POP.
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
