---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.703Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Groups service membership query APIs"
feature_slug: "groups-service-membership-query-apis"
latest_feature_date: "2017-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/bigquery"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
keywords:
  - "membership"
  - "query"
  - "expanded"
  - "groups"
  - "methods"
  - "apis"
  - "with"
  - "the"
---

# Groups service membership query APIs

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Expanded the Groups service with methods to list and check group membership via Group.getGroups and Group.hasGroup.

## Extended Definition

Expanded the Groups service with methods to list and check group membership via Group.getGroups and Group.hasGroup.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/bigquery](https://developers.google.com/apps-script/advanced/bigquery)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- April 05, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support text finding, checkboxes, and other features: TextFinder RecalculationInterval SheetType DataValidationBuilder.requireCheckbox() DataValidationBuilder.requireCheckbox(checkedValue) DataValidationBuilder.requireCheckbox(checkedValue, uncheckedValue) A clearRanges() method has been added to the all the embedded chart type builder classes, such as EmbeddedAreaChartBuilder.clearRanges() EmbeddedChart.getChartId() RangeList.check() RangeList.insertCheckboxes() RangeList.insertCheckboxes(checkedValue) RangeList.insertCheckboxes(checkedValue, uncheckedValue) RangeList.removeCheckboxes() RangeList.uncheck() Range.check() Range.createTextFinder(findText) Range.getDataRegion() Range.getDataRegion(dimension) Range.insertCheckboxes() Range.insertCheckboxes(checkedValue) Range.insertCheckboxes(checkedValue, uncheckedValue) Range.removeCheckboxes() Range.uncheck() Sheet.createTextFinder(findText) Sheet.getType() Spreadsheet.createTextFinder(findText) Spreadsheet.getIterativeCalculationConvergenceThreshold() Spreadsheet.getMaxIterativeCalculationCycles() Spreadsheet.getRecalculationInterval() Spreadsheet.isIterativeCalculationEnabled() Spreadsheet.moveChartToObjectSheet(chart) Spreadsheet.setIterativeCalculationConvergenceThreshold(minThreshold) Spreadsheet.setIterativeCalculationEnabled(isEnabled) Spreadsheet.setMaxIterativeCalculationCycles(maxIterations) Spreadsheet.setRecalculationInterval(recalculationInterval) The Data Studio service has been extended with the following new classes and methods that support configuring BigQuery connectors: BigQueryConfig BigQueryParameterType CommunityConnector.newBigQueryConfig() The Notification objects in the Card service no longer have a type that you must set.
- October 10, 2017 Feature The Calendar service has been extended with the following new methods: CalendarApp.createAllDayEvent(title, startDate, endDate) CalendarApp.createAllDayEvent(title, startDate, endDate, options) CalendarApp.getEventById(iCalId) Calendar.createAllDayEvent(title, startDate, endDate) Calendar.createAllDayEvent(title, startDate, endDate, options) Calendar.getEventById(iCalId) CalendarEvent.setAllDayDates(startDate, endDate) The Groups service has been extended with the following new methods: Group.getGroups() Group.hasGroup(group) Group.hasGroup(email) The Spreadsheet service has been extended with the following new methods and classes: AutoFillSeries enumeration Range.autoFill(destination, series) Range.autoFillToNeighbor(series) Sheet.moveColumns(columnSpec, destinationIndex) Sheet.moveRows(rowSpec, destinationIndex) October 06, 2017 Change Add-ons now require OAuth Client Verification prior to beginning the publication process.
- February 26, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support BigQuery data connectors in Sheets : BigQueryDataSourceSpec BigQueryDataSourceSpecBuilder DataExecutionErrorCode DataExecutionState DataExecutionStatus DataSourceParameterType DataSourceParameter DataSourceSpecBuilder DataSourceSpec DataSourceTable DataSourceType DataSource Range.getDataSourceTables() Sheet.getDataSourceTables() SpreadsheetApp.enableAllDataSourcesExecution() SpreadsheetApp.enableBigQueryExecution() SpreadsheetApp.newDataSourceSpec() Spreadsheet.getDataSourceTables() Spreadsheet.insertSheetWithDataSourceTable(spec) The Data Studio service has been extended with the following new methods involving reaggregation settings: Field.getIsReaggregatable() Field.setIsReaggregatable(isReaggregatable) January 22, 2019 Deprecated The deprecated UiApp service will be officially shutdown on July 15th, 2019.
- The Spreadsheet service has been extended with the following new methods to support Groups: Range.collapseGroups() Range.expandGroups() Range.shiftColumnGroupDepth(delta) Range.shiftRowGroupDepth(delta) Sheet.collapseAllColumnGroups() Sheet.collapseAllRowGroups() Sheet.expandAllColumnGroups() Sheet.expandAllRowGroups() Sheet.expandColumnGroupsUpToDepth(groupDepth) Sheet.expandRowGroupsUpToDepth(groupDepth) Sheet.getColumnGroup(columnIndex, groupDepth) Sheet.getColumnGroupControlPosition() Sheet.getColumnGroupDepth(columnIndex) Sheet.getRowGroup(rowIndex, groupDepth) Sheet.getRowGroupControlPosition() Sheet.getRowGroupDepth(rowIndex) Sheet.setColumnGroupControlPosition(position) Sheet.setRowGroupControlPosition(position) April 11, 2018 Announcement Macros for Google Sheets are now becoming available for users, and will finish rolling out over then next few weeks.

### BigQuery Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/bigquery](https://developers.google.com/apps-script/advanced/bigquery)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery service utilizes the same objects, methods, and parameters as the public API. within Apps Script using the Google BigQuery API.
- Jobs . getQueryResults ( projectId , jobId , { pageToken : queryResults . pageToken , }); rows = rows . concat ( queryResults . rows ); } if ( ! rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "BigQuery Results" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = queryResults . schema . fields . map (( field ) = > field . name ); sheet . appendRow ( headers ); // Append the results. const data = new Array ( rows . length ); for ( let i = 0 ; i < rows . length ; i ++ ) { const cols = rows [ i ]. f ; data [ i ] = new Array ( cols . length ); for ( let j = 0 ; j < cols . length ; j ++ ) { data [ i ][ j ] = cols [ j ]. v ; } } sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( data ); console . log ( "Results spreadsheet created: %s" , spreadsheet . getUrl ()); } Load CSV data This sample creates a new table and loads a CSV file from Google Drive into it. advanced/bigquery.gs View on GitHub / Loads a CSV into BigQuery / function loadCsv () { // Replace this value with the project ID listed in the Google // Cloud Platform project. const projectId = "XXXXXXXX" ; // Create a dataset in the BigQuery UI (https://bigquery.cloud.google.com) // and enter its ID below. const datasetId = "YYYYYYYY" ; // Sample CSV file of Google Trends data conforming to the schema below. // https://docs.google.com/file/d/0BwzA1Orbvy5WMXFLaTR1Z1p2UDg/edit const csvFileId = "0BwzA1Orbvy5WMXFLaTR1Z1p2UDg" ; // Create the table. const tableId = pets ${ new Date (). getTime () } ; let table = { tableReference : { projectId : projectId , datasetId : datasetId , tableId : tableId , }, schema : { fields : [ { name : "week" , type : "STRING" }, { name : "cat" , type : "INTEGER" }, { name : "dog" , type : "INTEGER" }, { name : "bird" , type : "INTEGER" }, ], }, }; try { table = BigQuery .
- Run query This sample queries a list of the daily top Google Search terms. advanced/bigquery.gs View on GitHub / Runs a BigQuery query and logs the results in a spreadsheet. / function runQuery () { // Replace this value with the project ID listed in the Google // Cloud Platform project. const projectId = "XXXXXXXX" ; const request = { // TODO (developer) - Replace query with yours query : "SELECT refresh date AS Day, term AS Top Term, rank " + "FROM bigquery-public-data.google trends.top terms " + "WHERE rank = 1 " + "AND refresh date >= DATE SUB(CURRENT DATE(), INTERVAL 2 WEEK) " + "GROUP BY Day, Top Term, rank " + "ORDER BY Day DESC;" , useLegacySql : false , }; let queryResults = BigQuery .
- Like all advanced services in Apps Script, the BigQuery service uses the same objects, methods, and parameters as the public API.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Groups . patch ( group , groupId ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Get a group's settings This sample gets a group's settings and logs them to the console. advanced/adminSDK.gs View on GitHub / Gets a group's settings and logs them to the console. / function getGroupSettings () { // TODO (developer) - Replace groupId value with yours const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings .
- Groups . get ( groupId ); console . log ( JSON . stringify ( group , null , 2 )); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Update a group's settings This sample shows how a group's settings can be changed.
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.

