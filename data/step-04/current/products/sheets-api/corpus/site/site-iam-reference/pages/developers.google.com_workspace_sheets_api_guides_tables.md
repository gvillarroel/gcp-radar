---
title: "Tables \_|\_ Google Sheets \_|\_ Google for Developers"
url: https://developers.google.com/workspace/sheets/api/guides/tables
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/sheets/api/scopes
source_metadata:
  url: https://developers.google.com/workspace/sheets/api/guides/tables
  title: "Tables \_|\_ Google Sheets \_|\_ Google for Developers"
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
Tables
Stay organized with collections
Save and categorize content based on your preferences.
This guide describes how and why to use the Google Sheets API to create tables
in your spreadsheets.
What is a table?
With tables, you can simplify data creation and reduce the need to repeatedly
format, input, and update data by automatically applying format and structure to
ranges of data.
Tables have many features, such as headers, footers, column types, filters,
views, table references, and table names. See more in the
feature announcement ,
and learn about using tables in Sheets .
You can use tables for tasks such as Project Tracking, Event Planning, and
Inventory management.
Add a table
To add a table, use the
batchUpdate
method, supplying an
addTable
request. You use this request to add a table to the spreadsheet.
The following example creates a table named "Project Tracker" at the specified
range with 2 set columns. A percent column in the first column and a dropdown
column type in the second column.
{
"addTable" : {
"table" : {
"name" : "Project Tracker" ,
"tableId" : "123" ,
"range" : {
"sheetId" : 0 ,
"startColumnIndex" : 0 ,
"endColumnIndex" : 5 ,
"startRowIndex" : 0 ,
"endRowIndex" : 5 ,
},
"columnProperties" : [
{
"columnIndex" : 0 ,
"columnName" : "Column 1" ,
"columnType" : "PERCENT"
},
{
"columnIndex" : 1 ,
"columnName" : "Column 2" ,
"columnType" : "DROPDOWN" ,
"dataValidationRule" : {
"condition" : {
"type" : "ONE_OF_LIST" ,
"values" : [
{
"userEnteredValue" : "Not Started"
},
{
"userEnteredValue" : "In Progress"
},
{
"userEnteredValue" : "Complete"
}
]
}
}
}
],
}
}
}
Column types
Tables have column types
such as numeric, date, dropdown, smart chip, checkbox. The rating and
checkbox column types populate with default values of 0 and FALSE
respectively.
Dropdown column type
The dropdown column type creates a chip dropdown. If a column type is set as
dropdown, the dataValidationRule for the column must be set with a
ONE_OF_LIST condition. Other column types shouldn't set the `dataValidationRule
field.
Update a table
Use the spreadsheets.batchUpdate
method and supply an UpdateTableRequest .
Modify the table size
Use the UpdateTableRequest
method to modify the range that the table has to add new rows/columns.
If you need to add a new row or column within the table, use the
InsertRangeRequest
or the
InsertDimensionRequest
If you need to delete a table row you can use DeleteRangeRequest
otherwise you can use DeleteDimensionRequest
to delete an entire row from the spreadsheet.
Note: If using InsertRangeRequest/DeleteRangeRequest, the range in the request
must cover the entire row(s) if deleting a row or entire column(s) if deleting
a column.
Toggle the table footer
If you're updating an existing table without a footer to add a footer, the
range expands by 1 row. If you're updating an existing table with a footer
and removing the footer, the range shrinks by 1 row.
Append values to a table
Use AppendCellsRequest
with tableId to add rows to the end of a table. This appends the values to
the first free row and is aware of full rows and footers. If there are no
empty rows, this inserts rows to the end of the table and before any footer,
if applicable.
Delete a table
Use the spreadsheets.batchUpdate
method and supply a
DeleteTableRequest .
Use the DeleteTableRequest
to delete the entire table and the contents of the table.
Use the DeleteBandingRequest
to remove the table formatting but keep the data.
Use tables with other Sheets features
Other API features that support tables being their backing data include
filters ,
filter views , and
protected ranges .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
