---
title: "Class DataSourceTable \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-table
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-table
  title: "Class DataSourceTable \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourceTable
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The DataSourceTable class is used to access and modify existing data source tables, specifically with BigQuery data sources.
You can create a new data source table using Spreadsheet.insertSheetWithDataSourceTable(spec) and access it via dataSheet.getDataSourceTables()[0] .
Data source tables allow adding columns, filters, and sort specifications to the data.
You can refresh the data in a DataSourceTable using refreshData() or forceRefreshData() , and cancel a refresh with cancelDataRefresh() .
The status of data execution for a DataSourceTable can be retrieved using getStatus() and you can wait for completion using waitForCompletion() .
DataSourceTable
Access and modify existing data source table. To create a new data source table on a new sheet,
use Spreadsheet.insertSheetWithDataSourceTable(spec) .
Only use this class with BigQuery data sources.
This example shows how to create a new data source table.
SpreadsheetApp . enableBigQueryExecution ();
const spreadsheet = SpreadsheetApp . getActive ();
const spec = SpreadsheetApp . newDataSourceSpec ()
. asBigQuery ()
. setProjectId ( 'big_query_project' )
. setRawQuery ( 'select @FIELD from table limit @LIMIT' )
. setParameterFromCell ( 'FIELD' , 'Sheet1!A1' )
. setParameterFromCell ( 'LIMIT' , 'namedRangeCell' )
. build ();
// Starts data execution asynchronously.
const dataSheet = spreadsheet . insertSheetWithDataSourceTable ( spec );
const dataSourceTable = dataSheet . getDataSourceTables ()[ 0 ];
// waitForCompletion() blocks script execution until data execution completes.
dataSourceTable . waitForCompletion ( 60 );
// Check status after execution.
Logger . log (
'Data execution state: %s.' ,
dataSourceTable . getStatus (). getExecutionState (),
);
This example shows how to edit a data source.
SpreadsheetApp . enableBigQueryExecution ();
const dataSheet = SpreadsheetApp . getActive (). getSheetByName ( 'Data Sheet 1' );
const dataSourceTable = dataSheet . getDataSourceTables ()[ 0 ];
const dataSource = dataSourceTable . getDataSource ();
const newSpec = dataSource . getSpec ()
. copy ()
. asBigQuery ()
. setRawQuery ( 'select name from table limit 2' )
. removeAllParameters ()
. build ();
// Updates data source specification and starts data execution asynchronously.
dataSource . updateSpec ( newSpec );
// Check status during execution.
Logger . log (
'Data execution state: %s.' ,
dataSourceTable . getStatus (). getExecutionState (),
);
// waitForCompletion() blocks script execution until data execution completes.
dataSourceTable . waitForCompletion ( 60 );
// Check status after execution.
Logger . log (
'Data execution state: %s.' ,
dataSourceTable . getStatus (). getExecutionState (),
);
Methods
Method Return type Brief description
add Columns(columnNames) Data Source Table Adds columns to the data source table.
add Filter(columnName, filterCriteria) Data Source Table Adds a filter applied to the data source table.
add Sort Spec(columnName, ascending) Data Source Table Adds a sort spec on a column in the data source table.
add Sort Spec(columnName, sortOrder) Data Source Table Adds a sort spec on a column in the data source table.
cancel Data Refresh() Data Source Table Cancels the data refresh associated with this object if it's currently running.
force Refresh Data() Data Source Table Refreshes the data of this object regardless of the current state.
get Columns() Data Source Table Column[] Gets all the data source columns added to the data source table.
get Data Source() Data Source Gets the data source the object is linked to.
get Filters() Data Source Table Filter[] Returns all filters applied to the data source table.
get Range() Range Gets the Range this data source table spans.
get Row Limit() Integer|null Returns the row limit for the data source table.
get Sort Specs() Sort Spec[] Gets all the sort specs in the data source table.
get Status() Data Execution Status Gets the data execution status of the object.
is Syncing All Columns() Boolean Returns whether the data source table is syncing all columns in the associated data source.
refresh Data() Data Source Table Refreshes the data of the object.
remove All Columns() Data Source Table Removes all the columns in the data source table.
remove All Sort Specs() Data Source Table Removes all the sort specs in the data source table.
set Row Limit(rowLimit) Data Source Table Updates the row limit for the data source table.
sync All Columns() Data Source Table Sync all current and future columns in the associated data source to the data source table.
wait For Completion(timeoutInSeconds) Data Execution Status Waits until the current execution completes, timing out after the provided number of seconds.
Detailed documentation
addColumns(columnNames)
Adds columns to the data source table.
Parameters
Name Type Description
column Names String[] The list of the names of the columns to add.
Return
DataSourceTable — The data source table, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
addFilter(columnName, filterCriteria)
Adds a filter applied to the data source table.
Parameters
Name Type Description
column Name String The name of the column to apply this filter to.
filter Criteria Filter Criteria The filter criteria to apply.
Return
DataSourceTable — The data source table, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
addSortSpec(columnName, ascending)
Adds a sort spec on a column in the data source table.
Parameters
Name Type Description
column Name String The name of the column to sort.
ascending Boolean If true , sort the column in ascending order; if false , sort
the column in descending order.
Return
DataSourceTable — The data source sheet, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
addSortSpec(columnName, sortOrder)
Adds a sort spec on a column in the data source table.
Parameters
Name Type Description
column Name String The name of the column to sort.
sort Order Sort Order The sort order.
Return
DataSourceTable — The data source sheet, for chaining.
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
DataSourceTable — The data object.
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
DataSourceTable — The data object.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getColumns()
Gets all the data source columns added to the data source table.
Return
DataSourceTableColumn[] — A list of data source table columns.
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
Returns all filters applied to the data source table.
Return
DataSourceTableFilter[] — An array of all filters applied to the data source table.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getRange()
Gets the Range this data source table spans.
Return
Range — The range.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getRowLimit()
Returns the row limit for the data source table.
Return
Integer|null — The row limit for the data source table, or null if no limit is set and the
table uses the default max limit as in Google Sheets UI.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getSortSpecs()
Gets all the sort specs in the data source table.
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
isSyncingAllColumns()
Returns whether the data source table is syncing all columns in the associated data source.
Return
Boolean — True if the data source table is syncing all columns in the associated data
source, or false otherwise.
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
DataSourceTable — The data object.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
removeAllColumns()
Removes all the columns in the data source table.
Return
DataSourceTable — The data source table, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
removeAllSortSpecs()
Removes all the sort specs in the data source table.
Return
DataSourceTable — The data source sheet, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setRowLimit(rowLimit)
Updates the row limit for the data source table. If the provided row limit is null ,
then updates the data source table to use the default max row limit as in Google Sheets UI.
Parameters
Name Type Description
row Limit Integer The new row limit for the data table. If null , updates the table to use
the default row limit.
Return
DataSourceTable — The data source table, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
syncAllColumns()
Sync all current and future columns in the associated data source to the data source table.
Return
DataSourceTable — The data source table, for chaining.
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
