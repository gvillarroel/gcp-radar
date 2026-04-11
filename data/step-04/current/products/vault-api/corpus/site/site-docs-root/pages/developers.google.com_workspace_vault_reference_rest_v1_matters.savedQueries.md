---
title: "REST Resource: matters.savedQueries \_|\_ Google Vault \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.savedQueries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/vault/guides
source_metadata:
  url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.savedQueries
  title: "REST Resource: matters.savedQueries \_|\_ Google Vault \_|\_ Google for\
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
REST Resource: matters.savedQueries
Stay organized with collections
Save and categorize content based on your preferences.
Resource: SavedQuery
JSON representation
Methods
Resource: SavedQuery
The definition of a saved query.
To work with Vault resources, the account must have the required Vault privileges and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the View All Matters privilege.
JSON representation
{
"savedQueryId" : string ,
"displayName" : string ,
"query" : {
object ( Query )
} ,
"matterId" : string ,
"createTime" : string
}
Fields
savedQueryId
string
A unique identifier for the saved query.
displayName
string
The name of the saved query.
query
object ( Query )
The search parameters of the saved query.
matterId
string
Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL.
createTime
string ( Timestamp format)
Output only. The server-generated timestamp when the saved query was created.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Methods
create
Creates a saved query.
delete
Deletes the specified saved query.
get
Retrieves the specified saved query.
list
Lists the saved queries in a matter.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-17 UTC."],[],[]]
