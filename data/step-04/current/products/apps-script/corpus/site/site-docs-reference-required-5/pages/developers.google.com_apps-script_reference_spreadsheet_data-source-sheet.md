---
title: "Class DataSourceSheet \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet
  title: "Class DataSourceSheet \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourceSheet
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use the DataSourceSheet class to access and modify existing data source sheets linked to a database.
New data source sheets are created using the Spreadsheet.insertDataSourceSheet(spec) method.
Key methods include adding and removing filters and sort specs, auto-resizing and setting column widths, retrieving sheet values, and managing data refreshes.
You can also get the associated data source, the current execution status, or view the data source sheet as a regular sheet object.
Specific authorization scopes are required for scripts utilizing these methods, primarily related to accessing spreadsheet data.
DataSourceSheet
Access and modify existing data source sheet. To create a new data source sheet, use Spreadsheet.insertDataSourceSheet(spec) .
Only use this class with data that's connected to a database.
Methods
Method Return type Brief description
add Filter(columnName, filterCriteria) Data Source Sheet Adds a filter applied to the data source sheet.
as Sheet() Sheet Returns the data source sheet as a regular sheet object.
auto Resize Column(columnName) Data Source Sheet Auto resizes the width of the specified column.
auto Resize Columns(columnNames) Data Source Sheet Auto resizes the width of the specified columns.
cancel Data Refresh() Data Source Sheet Cancels the data refresh associated with this object if it's currently running.
force Refresh Data() Data Source Sheet Refreshes the data of this object regardless of the current state.
get Column Width(columnName) Integer|null Returns the width of the specified column.
get Data Source() Data Source Gets the data source the object is linked to.
get Filters() Data Source Sheet Filter[] Returns all filters applied to the data source sheet.
get Sheet Values(columnName) Object[] Returns all the values for the data source sheet for the provided column name.
get Sheet Values(columnName, startRow, numRows) Object[] Returns all the values for the data source sheet for the provided column name from the provided
start row (based-1) and up to the provided num Rows .
get Sort Specs() Sort Spec[] Gets all the sort specs in the data source sheet.
get Status() Data Execution Status Gets the data execution status of the object.
refresh Data() Data Source Sheet Refreshes the data of the object.
remove Filters(columnName) Data Source Sheet Removes all filters applied to the data source sheet column.
remove Sort Spec(columnName) Data Source Sheet Removes the sort spec on a column in the data source sheet.
set Column Width(columnName, width) Data Source Sheet Sets the width of the specified column.
set Column Widths(columnNames, width) Data Source Sheet Sets the width of the specified columns.
set Sort Spec(columnName, ascending) Data Source Sheet Sets the sort spec on a column in the data source sheet.
set Sort Spec(columnName, sortOrder) Data Source Sheet Sets the sort spec on a column in the data source sheet.
wait For Completion(timeoutInSeconds) Data Execution Status Waits until the current execution completes, timing out after the provided number of seconds.
Detailed documentation
addFilter(columnName, filterCriteria)
Adds a filter applied to the data source sheet.
Parameters
Name Type Description
column Name String The name of the column to apply this filter to.
filter Criteria Filter Criteria The filter criteria to apply.
Return
DataSourceSheet — The data source sheet, for method chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
asSheet()
Returns the data source sheet as a regular sheet object.
Return
Sheet — The regular sheet.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
autoResizeColumn(columnName)
Auto resizes the width of the specified column.
Parameters
Name Type Description
column Name String The column name.
Return
DataSourceSheet — This data source sheet, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
autoResizeColumns(columnNames)
Auto resizes the width of the specified columns.
Parameters
Name Type Description
column Names String[] The list of column names to update.
Return
DataSourceSheet — This data source sheet, for chaining.
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
DataSourceSheet — The data object.
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
DataSourceSheet — The data object.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getColumnWidth(columnName)
Returns the width of the specified column.
Parameters
Name Type Description
column Name String The column name.
Return
Integer|null — The column's width, or null if the column uses the default width.
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
getFilters()
Returns all filters applied to the data source sheet.
Return
DataSourceSheetFilter[] — An array of all filters applied to the data source sheet.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getSheetValues(columnName)
Returns all the values for the data source sheet for the provided column name.
Parameters
Name Type Description
column Name String The data source column name to fetch values for.
Return
Object[] — A one-dimensional array of values.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getSheetValues(columnName, startRow, numRows)
Returns all the values for the data source sheet for the provided column name from the provided
start row (based-1) and up to the provided numRows .
Parameters
Name Type Description
column Name String The data source column name to fetch values for.
start Row Integer The row position to start fetching values from.
num Rows Integer The number of rows to fetch.
Return
Object[] — A one-dimensional array of values.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getSortSpecs()
Gets all the sort specs in the data source sheet.
Return
SortSpec[] — A list of sort specs.
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
DataSourceSheet — The data object.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
removeFilters(columnName)
Removes all filters applied to the data source sheet column.
Parameters
Name Type Description
column Name String The name of the column to remove filters from.
Return
DataSourceSheet — The data source sheet, for method chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
removeSortSpec(columnName)
Removes the sort spec on a column in the data source sheet.
Parameters
Name Type Description
column Name String The name of the column.
Return
DataSourceSheet — The data source sheet, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setColumnWidth(columnName, width)
Sets the width of the specified column.
Parameters
Name Type Description
column Name String The column name.
width Integer The new width for the column.
Return
DataSourceSheet — This data source sheet, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setColumnWidths(columnNames, width)
Sets the width of the specified columns.
Parameters
Name Type Description
column Names String[] The list of column names to update.
width Integer The new width for the columns.
Return
DataSourceSheet — This data source sheet, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setSortSpec(columnName, ascending)
Sets the sort spec on a column in the data source sheet.
Parameters
Name Type Description
column Name String The name of the column to sort.
ascending Boolean If true , sort the column in ascending order; if false , sort
the column in descending order.
Return
DataSourceSheet — The data source sheet, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setSortSpec(columnName, sortOrder)
Sets the sort spec on a column in the data source sheet.
Parameters
Name Type Description
column Name String The name of the column to sort.
sort Order Sort Order The sort order.
Return
DataSourceSheet — The data source sheet, for chaining.
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["DataSourceSheet manages sheets connected to a database. Key actions include: adding/removing filters and sort specifications, setting column widths, and resizing columns. It retrieves data source details, column values, and filters. Data can be refreshed or cancelled and the current data execution status can be checked. Sheets can be retrieved as regular sheet objects. There is an ability to wait for completion of an execution. New data source sheets can be created with `Spreadsheet.insertDataSourceSheet(spec)`.\n"]]
