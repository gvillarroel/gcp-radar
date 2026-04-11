---
title: "ImapSettings \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/ImapSettings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/ImapSettings
  title: "ImapSettings \_|\_ Gmail \_|\_ Google for Developers"
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
ImapSettings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ExpungeBehavior
IMAP settings for an account.
JSON representation
{
"enabled" : boolean ,
"autoExpunge" : boolean ,
"expungeBehavior" : enum ( ExpungeBehavior ) ,
"maxFolderSize" : integer
}
Fields
enabled
boolean
Whether IMAP is enabled for the account.
autoExpunge
boolean
If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted.
expungeBehavior
enum ( ExpungeBehavior )
The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.
maxFolderSize
integer
An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.
ExpungeBehavior
Enums
expungeBehaviorUnspecified
Unspecified behavior.
archive
Archive messages marked as deleted.
trash
Move messages marked as deleted to the trash.
deleteForever
Immediately and permanently delete messages marked as deleted. The expunged messages cannot be recovered.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
