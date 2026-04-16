---
title: "Class DataSourcePivotTable \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table
  title: "Class DataSourcePivotTable \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourcePivotTable
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use this class to access and modify existing data source pivot tables, exclusively with data connected to a database.
You can add column groups, filters, and pivot values to the data source pivot table.
Methods are available to refresh, force refresh, cancel refresh, and check the status of the data source pivot table.
The asPivotTable() method allows you to return the data source pivot table as a regular pivot table object.
DataSourcePivotTable
Access and modify existing data source pivot table. To create a new data source pivot table, use
Range.createDataSourcePivotTable(dataSource) .
Only use this class with data that's connected to a database.
Methods
Method Return type Brief description
add Column Group(columnName) Pivot Group Adds a new pivot column group based on the specified data source column.
add Filter(columnName, filterCriteria) Pivot Filter Adds a new filter based on the specified data source column with the specified filter criteria.
add Pivot Value(columnName) Pivot Value Adds a new pivot value based on the specified data source column without any summarize
function.
add Pivot Value(columnName, summarizeFunction) Pivot Value Adds a new pivot value based on the specified data source column with the specified summarize
function.
add Row Group(columnName) Pivot Group Adds a new pivot row group based on the specified data source column.
as Pivot Table() Pivot Table Returns the data source pivot table as a regular pivot table object.
cancel Data Refresh() Data Source Pivot Table Cancels the data refresh associated with this object if it's currently running.
force Refresh Data() Data Source Pivot Table Refreshes the data of this object regardless of the current state.
get Data Source() Data Source Gets the data source the object is linked to.
get Status() Data Execution Status Gets the data execution status of the object.
refresh Data() Data Source Pivot Table Refreshes the data of the object.
wait For Completion(timeoutInSeconds) Data Execution Status Waits until the current execution completes, timing out after the provided number of seconds.
Detailed documentation
addColumnGroup(columnName)
Adds a new pivot column group based on the specified data source column.
Parameters
Name Type Description
column Name String The data source column name the pivot group is based on.
Return
PivotGroup — The new pivot group.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
addFilter(columnName, filterCriteria)
Adds a new filter based on the specified data source column with the specified filter criteria.
Parameters
Name Type Description
column Name String The data source column name the filter is based on.
filter Criteria Filter Criteria The criteria the filter uses.
Return
PivotFilter — The new filter.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
addPivotValue(columnName)
Adds a new pivot value based on the specified data source column without any summarize
function. For Looker measures only.
The following code shows how you can add a Looker measure as a pivot value.
// TODO(developer): Replace with your spreadsheet ID which has a Looker data
// source.
const spreadsheet = SpreadsheetApp . openById ( 'abcd1234' );
const datasource = spreadsheet . getDataSources ()[ 0 ];
const pivotTable = datasource . createDataSourcePivotTableOnNewSheet ();
pivotTable . addPivotValue ( 'columnName' );
This method is only available for Looker data sources.
Parameters
Name Type Description
column Name String The data source column name the pivot value is based on.
Return
PivotValue — The new pivot value.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
addPivotValue(columnName, summarizeFunction)
Adds a new pivot value based on the specified data source column with the specified summarize
function.
In order to add pivot values for Looker measures, use addPivotValue(columnName) .
Parameters
Name Type Description
column Name String The data source column name the pivot value is based on.
summarize Function Pivot Table Summarize Function The summarize function the pivot value uses.
Return
PivotValue — The new pivot value.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
addRowGroup(columnName)
Adds a new pivot row group based on the specified data source column.
Parameters
Name Type Description
column Name String The data source column name the pivot group is based on.
Return
PivotGroup — The new pivot group.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
asPivotTable()
Returns the data source pivot table as a regular pivot table object.
Return
PivotTable — The pivot table.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
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
DataSourcePivotTable — The data object.
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
DataSourcePivotTable — The data object.
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
DataSourcePivotTable — The data object.
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
