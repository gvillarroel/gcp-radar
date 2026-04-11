---
title: "REST Resource: matters.holds.accounts \_|\_ Google Vault \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds.accounts
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/vault/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds.accounts
  title: "REST Resource: matters.holds.accounts \_|\_ Google Vault \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Vault
Reference
Send feedback
REST Resource: matters.holds.accounts
Stay organized with collections
Save and categorize content based on your preferences.
Resource: HeldAccount
JSON representation
Methods
Resource: HeldAccount
An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service.
To work with Vault resources, the account must have the required Vault privileges and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the View All Matters privilege.
JSON representation
{
"accountId" : string ,
"holdTime" : string ,
"email" : string ,
"firstName" : string ,
"lastName" : string
}
Fields
accountId
string
The account ID, as provided by the Admin SDK .
holdTime
string ( Timestamp format)
Output only. When the account was put on hold.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
email
string
The primary email address of the account. If used as an input, this takes precedence over accountId .
firstName
string
Output only. The first name of the account holder.
lastName
string
Output only. The last name of the account holder.
Methods
create
Adds an account to a hold.
delete
Removes an account from a hold.
list
Lists the accounts covered by a hold.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-17 UTC."],[],[]]
