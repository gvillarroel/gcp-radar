---
title: "Class DataSourceTableColumn \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-table-column
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-table-column
  title: "Class DataSourceTableColumn \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Class DataSourceTableColumn
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
DataSourceTableColumn allows you to access and modify existing columns in a DataSourceTable .
This class should only be used with data connected to a database.
You can get the associated data source column or remove the column from the table using the available methods.
Using the methods of this class requires specific authorization scopes for spreadsheets.
DataSourceTableColumn
Access and modify an existing column in a DataSourceTable . To add columns to a data
source table, use DataSourceTable.addColumns(columnNames) .
Only use this class with data that's connected to a database.
Methods
Method Return type Brief description
get Data Source Column() Data Source Column Gets the data source column.
remove() void Removes the column from the Data Source Table .
Detailed documentation
getDataSourceColumn()
Gets the data source column.
Return
DataSourceColumn — The data source column.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
remove()
Removes the column from the DataSourceTable .
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["This class manages existing columns in a DataSourceTable, which is linked to a database. Key actions include retrieving a specific column using `getDataSourceColumn()` and removing a column entirely with `remove()`. Adding new columns is done through `DataSourceTable.addColumns(columnNames)`. The methods require authorization with specific scopes related to spreadsheet access: `https://www.googleapis.com/auth/spreadsheets.currentonly` and `https://www.googleapis.com/auth/spreadsheets`. It is used with data connected to a database.\n"]]
