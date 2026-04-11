---
title: "REST Resource: users.drafts \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts
  title: "REST Resource: users.drafts \_|\_ Gmail \_|\_ Google for Developers"
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
REST Resource: users.drafts
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Draft
JSON representation
Methods
Resource: Draft
A draft email in the user's mailbox.
JSON representation
{
"id" : string ,
"message" : {
object ( Message )
}
}
Fields
id
string
The immutable ID of the draft.
message
object ( Message )
The message content of the draft.
Methods
create
Creates a new draft with the DRAFT label.
delete
Immediately and permanently deletes the specified draft.
get
Gets the specified draft.
list
Lists the drafts in the user's mailbox.
send
Sends the specified, existing draft to the recipients in the To , Cc , and Bcc headers.
update
Replaces a draft's content.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
