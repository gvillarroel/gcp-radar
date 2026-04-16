---
title: "Class DataSourceColumn \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-column
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-column
  title: "Class DataSourceColumn \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourceColumn
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use the DataSourceColumn class to access and modify data source columns that are connected to a database.
You can retrieve the associated data source, formula, and name of a data source column.
You can check if a column has an array dependency or is a calculated column.
For calculated columns, you can remove the column or set its formula and name.
Scripts using these methods may require specific authorization scopes.
DataSourceColumn
Access and modify a data source column.
Only use this class with data that's connected to a database.
Methods
Method Return type Brief description
get Data Source() Data Source Gets the data source associated with the data source column.
get Formula() String Gets the formula for the data source column.
get Name() String Gets the name for the data source column.
has Array Dependency() Boolean Returns whether the column has an array dependency.
is Calculated Column() Boolean Returns whether the column is a calculated column.
remove() void Removes the data source column.
set Formula(formula) Data Source Column Sets the formula for the data source column.
set Name(name) Data Source Column Sets the name of the data source column.
Detailed documentation
getDataSource()
Gets the data source associated with the data source column.
Return
DataSource — The data source.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFormula()
Gets the formula for the data source column. Returns an empty string if the data source column
is not a calculated column .
Return
String — The formula.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getName()
Gets the name for the data source column.
Return
String — The column name.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
hasArrayDependency()
Returns whether the column has an array dependency.
Return
Boolean — true if the column has an array dependency, or false otherwise.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
isCalculatedColumn()
Returns whether the column is a calculated column.
Return
Boolean — true if the column is a calculated column, or false otherwise.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
remove()
Removes the data source column.
Only supported for calculated columns .
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFormula(formula)
Sets the formula for the data source column.
Only supported for calculated columns .
Parameters
Name Type Description
formula String The new formula.
Return
DataSourceColumn — The data source column, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setName(name)
Sets the name of the data source column.
Only supported for calculated columns .
Parameters
Name Type Description
name String The name to set.
Return
DataSourceColumn — The data source column, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
