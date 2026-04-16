---
title: "REST Resource: children \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2/children
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2/children
  title: "REST Resource: children \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Reference
Send feedback
REST Resource: children
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ChildReference
JSON representation
Methods
Resource: ChildReference
A reference to a folder's child.
Some resource methods (such as children.get ) require a childId . Use the children.list method to retrieve the ID of the child.
JSON representation
{
"id" : string ,
"selfLink" : string ,
"kind" : string ,
"childLink" : string
}
Fields
id
string
The ID of the child.
selfLink
string
Output only. A link back to this reference.
kind
string
Output only. This is always drive#childReference .
childLink
string
Output only. A link to the child.
Methods
delete
Removes a child from a folder.
get
Gets a specific child reference.
insert
Inserts a file into a folder.
list
Lists a folder's children.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-03 UTC."],[],[]]
