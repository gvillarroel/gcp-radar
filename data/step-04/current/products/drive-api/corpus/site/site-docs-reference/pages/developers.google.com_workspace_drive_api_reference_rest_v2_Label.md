---
title: "Label \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2/Label
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2/Label
  title: "Label \_|\_ Google Drive \_|\_ Google for Developers"
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
Label
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Field
JSON representation
Representation of a label and label fields.
JSON representation
{
"fields" : {
string : {
object ( Field )
} ,
...
} ,
"id" : string ,
"revisionId" : string ,
"kind" : string
}
Fields
fields
map (key: string, value: object ( Field ))
A map of the fields on the label, keyed by the field's ID.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
id
string
The ID of the label.
revisionId
string
The revision ID of the label.
kind
string
This is always drive#label
Field
Representation of field, which is a typed key-value pair.
JSON representation
{
"dateString" : [
string
] ,
"integer" : [
string
] ,
"selection" : [
string
] ,
"text" : [
string
] ,
"user" : [
{
object ( User )
}
] ,
"kind" : string ,
"id" : string ,
"valueType" : string
}
Fields
dateString[]
string
Only present if valueType is dateString . RFC 3339 formatted date: YYYY-MM-DD.
integer[]
string ( int64 format)
Only present if valueType is integer .
selection[]
string
Only present if valueType is selection
text[]
string
Only present if valueType is text .
user[]
object ( User )
Only present if valueType is user .
kind
string
This is always drive#labelField .
id
string
The identifier of this label field.
valueType
string
The field type. While new values may be supported in the future, the following are currently allowed:
dateString
integer
selection
text
user
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
