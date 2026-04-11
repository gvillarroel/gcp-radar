---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.790Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsList.find method"
feature_slug: "docslist-find-method"
latest_feature_date: "2013-08-05"
deprecation_date: "2013-08-05"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/bigquery"
  - "https://developers.google.com/apps-script/advanced/calendar"
keywords:
  - "query"
  - "find"
  - "deprecates"
  - "docslist"
  - "start"
  - "deprecated"
  - "max"
  - "method"
---

# DocsList.find method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecates DocsList.find(query, start, max); deprecated on 2013-08-05.

## Extended Definition

Deprecates DocsList.find(query, start, max); deprecated on 2013-08-05.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/bigquery](https://developers.google.com/apps-script/advanced/bigquery)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated Deprecated the DocsList methods find(query, start, max) , getAllFiles(start, max) , getAllFolders(start, max) , getFiles(start, max) , getFilesByType(fileType, start, max) , and getFolders(start, max) .
- April 05, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support text finding, checkboxes, and other features: TextFinder RecalculationInterval SheetType DataValidationBuilder.requireCheckbox() DataValidationBuilder.requireCheckbox(checkedValue) DataValidationBuilder.requireCheckbox(checkedValue, uncheckedValue) A clearRanges() method has been added to the all the embedded chart type builder classes, such as EmbeddedAreaChartBuilder.clearRanges() EmbeddedChart.getChartId() RangeList.check() RangeList.insertCheckboxes() RangeList.insertCheckboxes(checkedValue) RangeList.insertCheckboxes(checkedValue, uncheckedValue) RangeList.removeCheckboxes() RangeList.uncheck() Range.check() Range.createTextFinder(findText) Range.getDataRegion() Range.getDataRegion(dimension) Range.insertCheckboxes() Range.insertCheckboxes(checkedValue) Range.insertCheckboxes(checkedValue, uncheckedValue) Range.removeCheckboxes() Range.uncheck() Sheet.createTextFinder(findText) Sheet.getType() Spreadsheet.createTextFinder(findText) Spreadsheet.getIterativeCalculationConvergenceThreshold() Spreadsheet.getMaxIterativeCalculationCycles() Spreadsheet.getRecalculationInterval() Spreadsheet.isIterativeCalculationEnabled() Spreadsheet.moveChartToObjectSheet(chart) Spreadsheet.setIterativeCalculationConvergenceThreshold(minThreshold) Spreadsheet.setIterativeCalculationEnabled(isEnabled) Spreadsheet.setMaxIterativeCalculationCycles(maxIterations) Spreadsheet.setRecalculationInterval(recalculationInterval) The Data Studio service has been extended with the following new classes and methods that support configuring BigQuery connectors: BigQueryConfig BigQueryParameterType CommunityConnector.newBigQueryConfig() The Notification objects in the Card service no longer have a type that you must set.
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.
- November 01, 2022 Deprecated Apps Script has sunset the following methods: getChatThreads() getChatThreads(start, max) There isn't a replacement method to get this data with Apps Script.

### BigQuery Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/bigquery](https://developers.google.com/apps-script/advanced/bigquery)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery service utilizes the same objects, methods, and parameters as the public API. within Apps Script using the Google BigQuery API.
- Like all advanced services in Apps Script, the BigQuery service uses the same objects, methods, and parameters as the public API.
- Jobs . getQueryResults ( projectId , jobId , { pageToken : queryResults . pageToken , }); rows = rows . concat ( queryResults . rows ); } if ( ! rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "BigQuery Results" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = queryResults . schema . fields . map (( field ) = > field . name ); sheet . appendRow ( headers ); // Append the results. const data = new Array ( rows . length ); for ( let i = 0 ; i < rows . length ; i ++ ) { const cols = rows [ i ]. f ; data [ i ] = new Array ( cols . length ); for ( let j = 0 ; j < cols . length ; j ++ ) { data [ i ][ j ] = cols [ j ]. v ; } } sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( data ); console . log ( "Results spreadsheet created: %s" , spreadsheet . getUrl ()); } Load CSV data This sample creates a new table and loads a CSV file from Google Drive into it. advanced/bigquery.gs View on GitHub / Loads a CSV into BigQuery / function loadCsv () { // Replace this value with the project ID listed in the Google // Cloud Platform project. const projectId = "XXXXXXXX" ; // Create a dataset in the BigQuery UI (https://bigquery.cloud.google.com) // and enter its ID below. const datasetId = "YYYYYYYY" ; // Sample CSV file of Google Trends data conforming to the schema below. // https://docs.google.com/file/d/0BwzA1Orbvy5WMXFLaTR1Z1p2UDg/edit const csvFileId = "0BwzA1Orbvy5WMXFLaTR1Z1p2UDg" ; // Create the table. const tableId = pets ${ new Date (). getTime () } ; let table = { tableReference : { projectId : projectId , datasetId : datasetId , tableId : tableId , }, schema : { fields : [ { name : "week" , type : "STRING" }, { name : "cat" , type : "INTEGER" }, { name : "dog" , type : "INTEGER" }, { name : "bird" , type : "INTEGER" }, ], }, }; try { table = BigQuery .
- Run query This sample queries a list of the daily top Google Search terms. advanced/bigquery.gs View on GitHub / Runs a BigQuery query and logs the results in a spreadsheet. / function runQuery () { // Replace this value with the project ID listed in the Google // Cloud Platform project. const projectId = "XXXXXXXX" ; const request = { // TODO (developer) - Replace query with yours query : "SELECT refresh date AS Day, term AS Top Term, rank " + "FROM bigquery-public-data.google trends.top terms " + "WHERE rank = 1 " + "AND refresh date >= DATE SUB(CURRENT DATE(), INTERVAL 2 WEEK) " + "GROUP BY Day, Top Term, rank " + "ORDER BY Day DESC;" , useLegacySql : false , }; let queryResults = BigQuery .

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Events . list ( calendarId , { timeMin : now . toISOString (), singleEvents : true , orderBy : "startTime" , maxResults : 10 , }); if ( ! events . items events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . start . date ) { // All-day event. const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); continue ; } const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } } Conditionally modifying an event The following example shows how to conditionally update a Calendar event using the If-Match header.
- Events . list ( calendarId , options ); } catch ( e ) { // Check to see if the sync token was invalidated by the server; // if so, perform a full sync instead. if ( e . message === "Sync token is no longer valid, a full sync is required." ) { properties . deleteProperty ( "syncToken" ); logSyncedEvents ( calendarId , true ); return ; } throw new Error ( e . message ); } if ( events . items && events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . status === "cancelled" ) { console . log ( "Event id %s was cancelled." , event . id ); return ; } if ( event . start . date ) { const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); return ; } // Events that don't last all day; they have defined start times. const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } pageToken = events . nextPageToken ; } while ( pageToken ); properties . setProperty ( "syncToken" , events . nextSyncToken ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If the sync token is missing or invalid, log all events from up to a month ago (a full sync). @param {string} calendarId The ID of the calender to retrieve events from. @param {boolean} fullSync If true, throw out any existing sync token and perform a full sync; if false, use the existing sync token if possible. / function logSyncedEvents ( calendarId , fullSync ) { const properties = PropertiesService . getUserProperties (); const options = { maxResults : 100 , }; const syncToken = properties . getProperty ( "syncToken" ); if ( syncToken && ! fullSync ) { options . syncToken = syncToken ; } else { // Sync events up to thirty days in the past. options . timeMin = getRelativeDate ( - 30 , 0 ). toISOString (); } // Retrieve events one page at a time. let events ; let pageToken ; do { try { options . pageToken = pageToken ; events = Calendar .
- CalendarList . list ({ maxResults : 100 , pageToken : pageToken , }); if ( ! calendars . items calendars . items . length === 0 ) { console . log ( "No calendars found." ); return ; } // Print the calendar id and calendar summary for ( const calendar of calendars . items ) { console . log ( "%s (ID: %s)" , calendar . summary , calendar . id ); } pageToken = calendars . nextPageToken ; } while ( pageToken ); } Listing events The following example demonstrates how to list the next 10 upcoming events in the user's default calendar. advanced/calendar.gs View on GitHub / Lists the next 10 upcoming events in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/list / function listNext10Events () { const calendarId = "primary" ; const now = new Date (); const events = Calendar .

