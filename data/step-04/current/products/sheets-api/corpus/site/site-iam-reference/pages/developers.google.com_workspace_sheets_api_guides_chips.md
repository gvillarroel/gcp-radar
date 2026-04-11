---
title: "Smart chips \_|\_ Google Sheets \_|\_ Google for Developers"
url: https://developers.google.com/workspace/sheets/api/guides/chips
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/sheets/api/scopes
source_metadata:
  url: https://developers.google.com/workspace/sheets/api/guides/chips
  title: "Smart chips \_|\_ Google Sheets \_|\_ Google for Developers"
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
Smart chips
Stay organized with collections
Save and categorize content based on your preferences.
This guide describes how and why to use the Google Sheets API to add and manage smart chips in your spreadsheets.
What is a smart chip?
With smart chips, you can bring rich, interactive data from other Google Workspace applications directly into Sheets. Smart chips provide users with quick access to information and actions, transforming a cell link into a dynamic object. To learn more, see Insert smart chips in your Google Sheets .
Add a smart chip
Chips are represented as chip runs, which are part of CellData , so you can insert a chip using the existing spreadsheets.batchUpdate method by supplying an UpdateCellsRequest or AppendCellsRequest .
The request must include the chipRuns field. A chip run describes a chip's properties and where it is located within the cell's text.
When writing chipRuns , you must also provide a userEnteredValue that contains placeholder characters ( @ ) for each chip you intend to add. Each run in the chipRuns array will correspond to one of the placeholders. Non-chipped runs can be omitted on write.
The following example shows how to write a file chip, a people chip, and plain text into a single cell, A1.
* {JSON}
{
"updateCells" : {
"rows" : [
{
"values" : [
{
"userEnteredValue" : {
"stringValue" : "@ is the owner of @."
},
"chipRuns" : [
{
"chip" : {
"personProperties" : {
"email" : "johndoe@gmail.com" ,
"displayFormat" : "DEFAULT"
}
}
},
{
"startIndex" : 18 ,
"chip" : {
"richLinkProperties" : {
"uri" : "https://docs.google.com/document/d/YOUR_DOCUMENT_ID/edit"
}
}
}
]
}
]
}
],
"fields" : "userEnteredValue,chipRuns" ,
"range" : {
"startRowIndex" : 0 ,
"startColumnIndex" : 0
}
}
}
Configure chip properties
A chip object can have one of the following property types:
personProperties
Use this to create a person chip.
email : (Required) The email address of the person to link.
displayFormat : (Optional) The preferred display format for the person's name. Can be one of the following:
DEFAULT : Standard "First Name Last Name" format.
LAST_NAME_COMMA_FIRST_NAME : "Last Name, First Name" format.
EMAIL : The person's email address.
richLinkProperties
Use this to create a rich link chip. While the API can read links to various Google services (like YouTube or Calendar), only links to Google Drive files can be written as chips.
uri : (Required) The URI of the resource. For writing, this must be a Google Drive file link. URIs cannot exceed 2000 bytes.
Note: Writing Drive file chips requires your application to be authorized with at least one of the drive.file , drive.readonly , or drive OAuth scopes.
Read a smart chip
To read a smart chip's data, use the spreadsheets.get method and include sheets.data.rowData.values(chipRuns) in the fields parameter.
The chipRuns array in the response will contain objects for all subsections of the cell's text.
Chipped runs: These sections will have a populated chip object containing either personProperties or richLinkProperties .
Non-chipped runs: Plain text sections will also have a run object, but its chip field will be empty.
To get the display text of a chip, add formattedValue as a field.
Update a smart chip
To update or replace a smart chip, you have to overwrite the cell's contents. Use the same UpdateCellsRequest or AppendCellsRequest as you would for adding a chip, providing a new userEnteredValue and chipRun . This will replace the existing chip in the cell.
Important: Writing a new userEnteredValue to a cell will erase all previous chipRuns from that cell. You must supply a new set of runs to persist or modify the chips.
Use smart chips with other Sheets features
Tables : Smart chips can be used as a table column type to track project owners (People chip), or related documents (File chip).
Filters : You can filter ranges based on the text value of the smart chips within them.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
