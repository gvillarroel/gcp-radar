---
title: "Configure POP and IMAP settings with the Gmail API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/guides
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings
  title: "Configure POP and IMAP settings with the Gmail API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
Configure POP and IMAP settings with the Gmail API
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to manage POP and IMAP protocols using the
Gmail API.
POP and IMAP are two ways to read your Gmail messages in other email
clients. POP is an older technology that can only be used for a single computer.
POP-based emails are downloaded and you decide how often you want to download
new ones. IMAP can be used across multiple devices and emails are synced in real
time.
You can use the
settings resource of
the Gmail API to configure how Gmail handles POP and
IMAP protocols:
settings.getPop
settings.updatePop
settings.getImap
settings.updateImap
POP
You can manage POP settings for an account using the
PopSettings object.
Enable and disable access
Control access with the
accessWindow
field. This field determines whether POP is enabled and which messages the API
retrieves.
Value
Effect
disabled
No messages are accessible through POP
allMail
All unfetched messages are accessible through POP
fromNowOn
Only new messages are accessible through POP
Message disposition
Configure the disposition of messages that the API retrieves with the
disposition
field.
Value
Effect
archive
Move messages out of the INBOX
leaveInInbox
Do nothing; leave messages unread in the INBOX
markRead
Leave the message in the INBOX and mark it as read
trash
Move the message to the TRASH
IMAP
You can manage IMAP settings for an account using the
ImapSettings object.
Enable and disable access
Control access with the boolean
enabled
field. This field determines whether IMAP is enabled for the account.
Message disposition
Configure the disposition of a message when it is marked as deleted and expunged
from the last visible IMAP folder with the
expungeBehavior
field.
Value
Effect
archive
Move messages marked as deleted out of the INBOX
deleteForever
Permanently delete messages marked as deleted
trash
Move messages marked as deleted to the TRASH
If the boolean
autoExpunge
field is true , Gmail immediately expunges a message when it is
marked as deleted in IMAP. Otherwise, messages remain until the IMAP client
explicitly requests their removal.
Related topics
IMAP, POP, and SMTP for Gmail IMAP API
Choose your IMAP email client settings for Gmail
Read Gmail messages on other email clients using POP
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
