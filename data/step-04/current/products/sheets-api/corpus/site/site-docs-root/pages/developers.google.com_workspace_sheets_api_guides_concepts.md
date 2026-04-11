---
title: "Google Sheets API Overview \_|\_ Google for Developers"
url: https://developers.google.com/workspace/sheets/api/guides/concepts
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/sheets/api/guides/concepts
source_metadata:
  url: https://developers.google.com/workspace/sheets/api/guides/concepts
  title: "Google Sheets API Overview \_|\_ Google for Developers"
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
Google Sheets API Overview
Stay organized with collections
Save and categorize content based on your preferences.
The Google Sheets API is a RESTful interface that lets you read and modify a
spreadsheet's data. The Sheets API lets you:
Create spreadsheets
Read and write spreadsheet cell values
Update spreadsheet formatting
Manage Connected Sheets
The following is a list of common terms used in the Sheets API:
Spreadsheet
The primary object in Google Sheets. It can contain multiple Sheets , each
with structured information contained in Cells . The
spreadsheets
resource represents a spreadsheet. It contains a unique spreadsheetId
value.
Spreadsheet ID
The unique identifier for a spreadsheet. It's a particular string
containing letters, numbers, and some special characters that reference a
spreadsheet and it can be derived from the spreadsheet's URL. Spreadsheet
IDs are stable, even if the spreadsheet name changes.
https://docs.google.com/spreadsheets/d/ SPREADSHEET_ID /edit?gid= SHEET_ID #gid= SHEET_ID
Sheet
A page or tab within a spreadsheet. The
Sheets resource
represents a sheet. It contains a unique numeric sheetId value and sheet
title as part of the
SheetProperties
object.
Sheet ID
The unique identifier for a specific sheet within a spreadsheet. It's a
particular integer containing numbers that reference a sheet and it can be
derived from the spreadsheet's URL. Sheet IDs are stable, even if the sheet
name changes. For an example, see Spreadsheet ID .
Cell
An individual field of text or data within a sheet. Cells are arranged in rows
and columns, and can be grouped as a range of cells. The
Cells
resource represents each cell, but it doesn't have a unique ID value.
Instead, row and column coordinates identify the cells.
A1 notation
A syntax used to define a cell or range of cells with a string that
contains the sheet name plus the starting and ending cell coordinates using
column letters and row numbers. This method is the most common and useful
when referencing an absolute range of cells.
Sheet1!A1:B2 refers to all the cells in the first two rows and columns of Sheet1.
Sheet1!A:A refers to all the cells in the first column of Sheet1.
Sheet1!1:2 refers to all the cells in the first two rows of Sheet1.
Sheet1!A5:A refers to all the cells of the first column of Sheet 1, from row 5 onward.
A1:B2 refers to all the cells in the first two rows and columns of the first visible sheet.
Sheet1 refers to all the cells in Sheet1.
'Jon's_Data'!A1:D5 refers to all the cells in the first five rows and four columns of a sheet named "Jon's_Data."
'My Custom Sheet'!A:A refers to all the cells in the first column of a sheet named "My Custom Sheet."
'My Custom Sheet' refers to all the cells in "My Custom Sheet".
Single quotes are required for sheet names with spaces or special characters.
Tip : Where possible, use distinct names for objects in your spreadsheets. For example, A1 (without quotes) refers to cell A1 in the first visible sheet. 'A1' refers to a sheet with the name A1. Similarly, Sheet1 refers to a sheet with the name Sheet1. However, if there's a named range titled "Sheet1", then Sheet1 refers to the named range and 'Sheet1' refers to the sheet.
R1C1 notation
A syntax used to define a cell or range of cells with a string that
contains the sheet name plus the starting and ending cell coordinates using
row numbers and column numbers. This method is less common than A1 notation,
but can be useful when referencing a range of cells relative to a given
cell's position.
Sheet1!R1C1:R2C2 refers to the first two cells in the top two rows of Sheet1.
R1C1:R2C2 refers to the first two cells in the top two rows of the first visible sheet.
Sheet1!R[3]C[1] refers to the cell that is three rows below and one column to the right of the current cell.
Named range
A defined cell or range of cells with a custom name to simplify references
throughout an application. A
FilterView
resource represents a named range.
Protected range
A defined cell or range of cells that cannot be modified. A
ProtectedRange
resource represents a protected range.
Related topics
To learn about developing with Google Workspace APIs, including handling
authentication and authorization, refer to Develop on
Google Workspace .
To learn how to configure and run a Sheets API app, try the
JavaScript quickstart .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
