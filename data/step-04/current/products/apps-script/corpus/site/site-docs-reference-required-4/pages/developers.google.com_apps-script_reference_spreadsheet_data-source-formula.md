---
title: "Class DataSourceFormula \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula
  title: "Class DataSourceFormula \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourceFormula
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use DataSourceFormula to access and modify existing data source formulas, but use Range.setFormula(formula) to create a new one.
This class is specifically for data connected to a BigQuery database.
Methods are available to cancel, force, or simply refresh data, get information about the formula and its status, and set a new formula.
Scripts using these methods require specific authorization scopes related to spreadsheets.
DataSourceFormula
Access and modify existing data source formulas. To create a new data source formula, use Range.setFormula(formula) .
Only use this class with data that's connected to a BigQuery database.
Methods
Method Return type Brief description
cancel Data Refresh() Data Source Formula Cancels the data refresh associated with this object if it's currently running.
force Refresh Data() Data Source Formula Refreshes the data of this object regardless of the current state.
get Anchor Cell() Range Returns the Range representing the cell where this data source formula is anchored.
get Data Source() Data Source Gets the data source the object is linked to.
get Display Value() String Returns the display value of the data source formula.
get Formula() String Returns the formula for this data source formula.
get Status() Data Execution Status Gets the data execution status of the object.
refresh Data() Data Source Formula Refreshes the data of the object.
set Formula(formula) Data Source Formula Updates the formula.
wait For Completion(timeoutInSeconds) Data Execution Status Waits until the current execution completes, timing out after the provided number of seconds.
Detailed documentation
cancelDataRefresh()
Cancels the data refresh associated with this object if it's currently running.
This example shows how to cancel a formula refresh.
const spreadsheet = SpreadsheetApp . getActive ();
const formula = spreadsheet . getDataSourceFormulas ()[ 0 ];
// Cancel the ongoing refresh on the formula.
formula . cancelDataRefresh ();
Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for specific data source
type.
Return
DataSourceFormula — The data object.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
forceRefreshData()
Refreshes the data of this object regardless of the current state. See refreshData() for
more details. If you want to cancel a currently running refresh of this object, see cancelDataRefresh() .
Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for specific data source
type.
Return
DataSourceFormula — The data object.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getAnchorCell()
Returns the Range representing the cell where this data source formula is anchored.
Return
Range — The anchor cell.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getDataSource()
Gets the data source the object is linked to.
Return
DataSource — The data source.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getDisplayValue()
Returns the display value of the data source formula.
Return
String — The display value.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFormula()
Returns the formula for this data source formula.
Return
String — The formula.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getStatus()
Gets the data execution status of the object.
Return
DataExecutionStatus — The data execution status.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
refreshData()
Refreshes the data of the object.
Throws an exception if currently in error state. Use DataSource#updateSpec() to update the specification. The method is
preferred over forceRefreshData() to prevent unexpected edits on data source.
Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for specific data source
type.
Return
DataSourceFormula — The data object.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFormula(formula)
Updates the formula.
Parameters
Name Type Description
formula String The new formula.
Return
DataSourceFormula — The data source formula, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
waitForCompletion(timeoutInSeconds)
Waits until the current execution completes, timing out after the provided number of seconds.
Throws an exception if the execution is not completed when timing out, but does not cancel the
data execution.
Parameters
Name Type Description
timeout In Seconds Integer The time to wait for data execution, in seconds. The maximum is 300
seconds.
Return
DataExecutionStatus — The data execution status.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
