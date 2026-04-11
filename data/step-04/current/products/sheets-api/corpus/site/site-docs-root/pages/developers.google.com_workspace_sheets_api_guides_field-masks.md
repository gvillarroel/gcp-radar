---
title: "Use field masks \_|\_ Google Sheets \_|\_ Google for Developers"
url: https://developers.google.com/workspace/sheets/api/guides/field-masks
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/sheets/api/guides/concepts
source_metadata:
  url: https://developers.google.com/workspace/sheets/api/guides/field-masks
  title: "Use field masks \_|\_ Google Sheets \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Sheets
Guides
Send feedback
Use field masks
Stay organized with collections
Save and categorize content based on your preferences.
Field masks are a way for API callers to list the fields that a request should
return or update. Using a
FieldMask
allows the API to avoid unnecessary work and improves performance. A field mask
is used for both the read and update methods in the Google Sheets API.
Read with a field mask
Spreadsheets can be large, and often you don't need every part of the
Spreadsheet
resource returned by a read request. You can limit what's returned in a
Sheets API response, using the fields URL parameter. For best
performance, explicitly list only the fields you
need in the reply.
The format of the fields parameter is the same as the JSON encoding of a
FieldMask .
Stated briefly, multiple different fields are comma-separated and subfields are
dot-separated. Field names can be specified in camelCase or
separated_by_underscores . For convenience, multiple subfields from the same
type can be listed within parentheses.
The following
spreadsheets.get
request example uses a field mask of
sheets.properties(sheetId,title,sheetType,gridProperties) to fetch only the
sheet ID, title,
SheetType ,
and
GridProperties
of a
SheetProperties
object on all sheets in a spreadsheet:
GET https://sheets.googleapis.com/v4/spreadsheets/ spreadsheetId ?fields=sheets.properties(sheetId,title,sheetType,gridProperties)
The response to this method call is a
Spreadsheet
object containing the components requested in the field mask. Note that
sheetType=OBJECT doesn't contain gridProperties :
{
"sheets": [
{
"properties": {
"sheetId": SHEET_ID ,
"title": " TITLE ",
"sheetType": "GRID",
"gridProperties": {
"rowCount": 1000,
"columnCount": 25
}
}
},
{
"properties": {
"sheetId": SHEET_ID ,
"title": " TITLE ",
"sheetType": "OBJECT"
}
}
]
}
Update with a field mask
Sometimes you need to update only certain fields in an object while leaving the
other fields unchanged. Update requests inside a
spreadsheets.batchUpdate
operation use field masks to tell the API which fields are being changed. The
update request ignores any fields that aren't specified in the field mask,
leaving them with their current values.
You can also unset a field by not specifying it in the updated message, but
adding the field to the mask. This clears whatever value the field previously
had.
The syntax for update field masks is the same as read field masks.
A field mask of * is treated like a wildcard
and is shorthand for specifying every field in a message. The wildcard syntax
can produce unwanted results if the API is updated in the future, as read-only
fields and newly added fields may cause errors. For production applications,
always list the specific fields being updated in field masks and avoid using *
wildcards.
The following example uses the
AddSheetRequest
to add a new sheet of type Grid , freeze the first row, and color the new
sheet's tab red:
POST https://sheets.googleapis.com/v1/spreadsheets/ spreadsheetId :batchUpdate
{
"spreadsheetId": " SPREADSHEET_ID ",
"replies": [
{
"addSheet": {
"properties": {
"sheetId": SHEET_ID ,
"title": " TITLE ",
"index": 6,
"sheetType": "GRID",
"gridProperties": {
"rowCount": 1000,
"columnCount": 26,
"frozenRowCount": 1
},
"tabColor": {
"red": 0.003921569
},
"tabColorStyle": {
"rgbColor": {
"red": 0.003921569
}
}
}
}
}
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
