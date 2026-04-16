---
title: "Class DataSourceChart \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart
  title: "Class DataSourceChart \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourceChart
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The DataSourceChart class is used to access and modify existing data source charts linked to a BigQuery database.
You can cancel a running data refresh using cancelDataRefresh() or force a refresh regardless of state with forceRefreshData() .
The getDataSource() method retrieves the linked data source and getStatus() provides the current data execution status.
refreshData() initiates a data refresh and waitForCompletion(timeoutInSeconds) waits for the current execution to finish within a specified time limit.
DataSourceChart
Access and modify an existing data source chart.
Only use this class with data that's connected to a BigQuery database.
Methods
Method Return type Brief description
cancel Data Refresh() Data Source Chart Cancels the data refresh associated with this object if it's currently running.
force Refresh Data() Data Source Chart Refreshes the data of this object regardless of the current state.
get Data Source() Data Source Gets the data source the object is linked to.
get Status() Data Execution Status Gets the data execution status of the object.
refresh Data() Data Source Chart Refreshes the data of the object.
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
DataSourceChart — The data object.
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
DataSourceChart — The data object.
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
DataSourceChart — The data object.
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The `DataSourceChart` class manages data in charts connected to a BigQuery database. Key actions include: refreshing data using `refreshData()` or `forceRefreshData()`, canceling ongoing refreshes with `cancelDataRefresh()`, and monitoring execution status via `getStatus()`. You can also get the connected data source with `getDataSource()`. `waitForCompletion()` allows waiting for data operations to complete. All actions require specific authorization scopes and may throw exceptions if data source types are not enabled.\n"]]
