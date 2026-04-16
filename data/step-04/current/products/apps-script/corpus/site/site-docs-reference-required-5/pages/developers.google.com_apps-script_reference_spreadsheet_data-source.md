---
title: "Class DataSource \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source
  title: "Class DataSource \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSource
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The DataSource class is used to access and modify existing data sources connected to a database.
You can create calculated columns and new pivot or data source tables on new sheets using this class.
The class provides methods to retrieve columns, calculated columns, and associated data source sheets.
You can refresh or cancel refreshes for linked data source objects and update the data source specification.
You can wait for data executions linked to the data source to complete within a specified timeout.
DataSource
Access and modify existing data source. To create a data source table with new data source, see
DataSourceTable .
Only use this class with data that's connected to a database.
Methods
Method Return type Brief description
cancel All Linked Data Source Object Refreshes() void Cancels all currently running refreshes of data source objects linked to this data source.
create Calculated Column(name, formula) Data Source Column Creates a calculated column.
create Data Source Pivot Table On New Sheet() Data Source Pivot Table Creates a data source pivot table from this data source in the first cell of a new sheet.
create Data Source Table On New Sheet() Data Source Table Creates a data source table from this data source in the first cell of a new sheet.
get Calculated Column By Name(columnName) Data Source Column |null Returns the calculated column in the data source that matches the column name.
get Calculated Columns() Data Source Column[] Returns all the calculated columns in the data source.
get Columns() Data Source Column[] Returns all the columns in the data source.
get Data Source Sheets() Data Source Sheet[] Returns the data source sheets associated with this data source.
get Spec() Data Source Spec Gets the data source specification.
refresh All Linked Data Source Objects() void Refreshes all data source objects linked to the data source.
update Spec(spec) Data Source Updates the data source specification and refreshes the data source objects linked with this
data source with the new specification.
update Spec(spec, refreshAllLinkedObjects) Data Source Updates the data source specification and refreshes the linked data
source sheets with the new specification.
wait For All Data Executions Completion(timeoutInSeconds) void Waits until all the current executions of the linked data source objects complete, timing out
after the provided number of seconds.
Detailed documentation
cancelAllLinkedDataSourceObjectRefreshes()
Cancels all currently running refreshes of data source objects linked to this data source.
This example shows how to cancel all the refreshes of a data source.
SpreadsheetApp . enableBigQueryExecution ();
const spreadsheet = SpreadsheetApp . getActiveSpreadsheet ();
const dataSource = spreadsheet . getDataSources ()[ 0 ];
dataSource . cancelAllLinkedDataSourceObjectRefreshes ();
Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for the specific data
source type.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
createCalculatedColumn(name, formula)
Creates a calculated column. This method is only available for BigQuery data sources.
Parameters
Name Type Description
name String The name of the calculated column.
formula String The calculated column formula.
Return
DataSourceColumn — The newly created calculated column.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
createDataSourcePivotTableOnNewSheet()
Creates a data source pivot table from this data source in the first cell of a new sheet. As a
side effect, makes the new sheet the active sheet.
Return
DataSourcePivotTable — The newly created data source pivot table.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
createDataSourceTableOnNewSheet()
Creates a data source table from this data source in the first cell of a new sheet. As a side
effect, makes the new sheet the active sheet.
This method is only available for BigQuery data sources.
Return
DataSourceTable — The newly created data source table.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getCalculatedColumnByName(columnName)
Returns the calculated column in the data source that matches the column name.
Parameters
Name Type Description
column Name String The name of the calculated column to get.
Return
DataSourceColumn |null — The calculated column that matches the column name, or null if there is no such
calculated column.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getCalculatedColumns()
Returns all the calculated columns in the data source.
Data source specs of DataSourceType.LOOKER type returns an empty array.
Return
DataSourceColumn[] — An array of all the calculated columns in the data source.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getColumns()
Returns all the columns in the data source.
Return
DataSourceColumn[] — An array of all the DataSourceColumn in the data source.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getDataSourceSheets()
Returns the data source sheets associated with this data source.
Return
DataSourceSheet[] — An array of data source sheets.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getSpec()
Gets the data source specification.
Return
DataSourceSpec — The data source specification.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
refreshAllLinkedDataSourceObjects()
Refreshes all data source objects linked to the data source.
Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for the specific data
source type.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
updateSpec(spec)
Updates the data source specification and refreshes the data source objects linked with this
data source with the new specification.
Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for the specific data
source type.
Throws an exception if the data source specification type is of a different type than the
current data source type.
Parameters
Name Type Description
spec Data Source Spec The data source specification to update with.
Return
DataSource — The data source.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
updateSpec(spec, refreshAllLinkedObjects)
Updates the data source specification and refreshes the linked data
source sheets with the new specification.
Throws an exception if the data source type is not enabled. Use SpreadsheetApp#enable...Execution() methods to enable data execution for the specific data
source type.
Throws an exception if the data source specification type is of a different type than the
current data source type.
Parameters
Name Type Description
spec Data Source Spec The data source specification to update with.
refresh All Linked Objects Boolean If true , also refreshes all the data source objects
linked with this data source.
Return
DataSource — The data source.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
waitForAllDataExecutionsCompletion(timeoutInSeconds)
Waits until all the current executions of the linked data source objects complete, timing out
after the provided number of seconds. Throws an exception if the executions are not completed
when timing out, but does not cancel the data executions.
Parameters
Name Type Description
timeout In Seconds Integer The time to wait for data executions, in seconds. The maximum is 300
seconds.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["This `DataSource` class manages data connected to a database. Key actions include creating calculated columns with formulas, and generating new data source pivot tables or tables on new sheets. It allows fetching calculated columns and all columns, retrieving associated data source sheets, and accessing the data source specification. Additionally, it enables refreshing all linked data source objects, updating the specification with or without refresh, canceling refreshes, and waiting for all data executions to complete.\n"]]
