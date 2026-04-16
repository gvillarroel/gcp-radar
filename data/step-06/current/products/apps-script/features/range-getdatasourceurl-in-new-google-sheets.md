---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.607Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Range.getDataSourceUrl() in new Google Sheets"
feature_slug: "range-getdatasourceurl-in-new-google-sheets"
latest_feature_date: "2014-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors"
  - "https://developers.google.com/apps-script/guides/sheets/connected-sheets"
  - "https://developers.google.com/apps-script/advanced/sheets"
keywords:
  - "range"
  - "getdatasourceurl"
  - "sheets"
  - "method"
  - "version"
---

# Range.getDataSourceUrl() in new Google Sheets

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Range.getDataSourceUrl() method is supported in the new version of Google Sheets.

## Extended Definition

The Range.getDataSourceUrl() method is supported in the new version of Google Sheets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets)
- [https://developers.google.com/apps-script/advanced/sheets](https://developers.google.com/apps-script/advanced/sheets)

## Supporting Pages

### Fix errors in your converted code \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Suppose there are two files being opened by workbook.open in the VBA code: File 1: C:\Data\abc.xlsx File 2: C:\Data\xyz.xlsx The following code shows how the Macro Converter replaces Workbook.open with Apps Script everywhere Workbook.open is used to open File 1: var spreadSheetId = handle mso excel get google spreadsheet id ( "C:\Data \a bc.xlsx" ); var spreadSheet = SpreadsheetApp . openById ( spreadSheetId ); The below error is added to the unimplemented constructs.gs file in the Apps Script project: / Method to return the spreadsheet id manually . @ param { string } FileName ID of the spreadsheet to be opened . @ return { string } return the spreadsheet id . / function handle mso excel get google spreadsheet id ( FileName ) { // Upload the Excel files being opened by the API to Google Drive and convert // them to Google Sheets . // Determine the spreadsheet ID of the Google Sheets file created . // Implement this method to return the corresponding spreadsheet ID when given // the original file path as parameter . throw new Error ( 'Please return the spreadsheet ID corresponding to filename: ' + FileName ); return ' ' ; } As instructed by the comments in the previous sample, you need to convert the target files to Sheets files on Drive.
- The corresponding Google Spreadsheet IDs are highlighted in the following list: File #1: C:\Data\abc.xlsx becomes https://docs.google.com/spreadsheets/d/ abc123Abc123Abc123abc File #2: C:\Data\xyz.xlsx becomes https://docs.google.com/spreadsheets/d/ xyz456Xyz456xYz456xyZ Then, modify the code in the Apps Script function to open the files by ID: / Method to return the spreadsheet id manually . @ param { string } FileName ID of the spreadsheet to be opened . @ return { string } return the spreadsheet id . / function handle mso excel get google spreadsheet id ( FileName ) { // Upload the Excel files being opened by the API to Google Drive and convert // them to Google Sheets . // Determine the spreadsheet ID of the Google Sheets file created . // Implement this method to return the corresponding spreadsheet ID when given // the original file path as parameter if ( Filename . indexOf ( "abc.xlsx" ) >= 0 ) { return "abc123Abc123Abc123abc" ; } else if ( Filename . indexOf ( "xyz.xlsx" ) >= 0 ) { return "xyz456Xyz456xYz456xyZ" ; } Intentional error Intentional errors are added to your converted code to mimic the error behavior of your original VBA code.
- If the API is critical for the workflow the user can implement the unimplemented handler method in the generated code, else comment out the throw statement. @param {Object} CallingObject represents the parent object using which the API has been called. @param {string} Password @param {boolean} DrawingObjects @param {boolean} Contents @param {boolean} Scenarios @param {boolean} UserInterfaceOnly / function api chart protect ( CallingObject , Password , DrawingObjects , Contents , Scenarios , UserInterfaceOnly ) { var ranges = CallingObject . getChart (). getRanges (); for ( var i = 0 ; i ranges . length ; i ++ ) { // Note that this does not lock the range for the document owner . ranges [ i ] . protect (); } } Example 2: Unsupported object type When the object type is unknown, the unimplemented API error is added to the variant resolution.gs file.
- If the API is critical for the workflow the user can implement the unimplemented handler method in the generated code, else comment out the throw statement. @param {Object} CallingObject represents the parent object using which the API has been called. @param {string} Password @param {boolean} DrawingObjects @param {boolean} Contents @param {boolean} Scenarios @param {boolean} UserInterfaceOnly / function api chart protect ( CallingObject , Password , DrawingObjects , Contents , Scenarios , UserInterfaceOnly ) { ThrowException ( ' API chart . protect not supported yet . ' ); } Even though you can’t protect a chart, you can protect the data range of the chart so that the data can’t be changed.

### Use Connected Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the most common DataSource actions and how to create them in Google Apps Script: Action Apps Script class Method to use Connect a sheet to a supported data source DataSourceSpec SpreadsheetApp.newDataSourceSpec() Choose a data source DataSource Spreadsheet.insertDataSourceSheet().getDataSource() Add a data source sheet DataSourceSheet Spreadsheet.insertDataSourceSheet() Add a pivot table DataSourcePivotTable Range.insertDataSourcePivotTable() Pull data into an extract DataSourceTable Range.insertDataSourceTable() Use a formula DataSourceFormula Range.setFormula() Add a chart DataSourceChart Sheet.insertDataSourceChart() Add required authorization scopes To access BigQuery data, include the enableBigQueryExecution() method in your Apps Script code.
- Common actions with Connected Sheets, such as connecting to a data source or adding charts, are performed using specific DataSource classes and methods in Apps Script.
- Replace <YOUR PROJECT ID> with a valid Google Cloud project ID. // Add data source with query parameter. function addDataSource () { SpreadsheetApp . enableBigQueryExecution (); var spreadsheet = SpreadsheetApp . getActive (); // Add a new sheet and use A1 cell as the parameter cell. var parameterCell = spreadsheet . insertSheet ( 'parameterSheet' ). getRange ( 'A1' ); parameterCell . setValue ( 'Duke' ); // Add data source with query parameter. var dataSourceSpec = SpreadsheetApp . newDataSourceSpec () . asBigQuery () . setProjectId ( '<YOUR PROJECT ID>' ) . setRawQuery ( 'select from bigquery-public-data.ncaa basketball.mbb historical tournament games WHERE win school ncaa = @SCHOOL' ) . setParameterFromCell ( 'SCHOOL' , 'parameterSheet!A1' ) . build (); var dataSourceSheet = spreadsheet . insertDataSourceSheet ( dataSourceSpec ); dataSourceSheet . asSheet (). setName ( 'ncaa data' ); } // Function used to configure event trigger to refresh data source sheet. function refreshOnParameterEdit ( e ) { var editedRange = e . range ; if ( editedRange . getSheet (). getName () != 'parameterSheet' ) { return ; } // Check that the edited range includes A1. if ( editedRange . getRow () > 1 editedRange . getColumn () > 1 ) { return ; } var spreadsheet = e . source ; SpreadsheetApp . enableBigQueryExecution (); spreadsheet . getSheetByName ( 'ncaa data' ). asDataSourceSheet (). refreshData (); } In the preceding sample, the addDataSource() function adds a data source to the spreadsheet.
- SpreadsheetApp . enableBigQueryExecution (); var spreadsheet = SpreadsheetApp . create ( 'Test connected sheets' ); Logger . log ( 'New test spreadsheet: %s' , spreadsheet . getUrl ()); // Build data source spec by selecting a table. var dataSourceSpec = SpreadsheetApp . newDataSourceSpec () . asBigQuery () . setProjectId ( '<YOUR PROJECT ID>' ) . setTableProjectId ( 'bigquery-public-data' ) . setDatasetId ( 'ncaa basketball' ) . setTableId ( 'mbb historical tournament games' ) . build (); // Add data source and its associated data source sheet. var dataSourceSheet = spreadsheet . insertDataSourceSheet ( dataSourceSpec ); var dataSource = dataSourceSheet . getDataSource (); Looker To add a Looker data source to a spreadsheet, insert a data source sheet with a data source spec.

### Advanced Sheets Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/sheets](https://developers.google.com/apps-script/advanced/sheets)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It is equivalent to the Write to multiple ranges recipe sample. advanced/sheets.gs View on GitHub / Write to multiple, disjoint data ranges. @param {string} spreadsheetId The spreadsheet ID to write to. @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate / function writeToMultipleRanges ( spreadsheetId = yourspreadsheetId ) { // Specify some values to write to the sheet. const columnAValues = [[ "Item" , "Wheel" , "Door" , "Engine" ]]; const rowValues = [ [ "Cost" , "Stocked" , "Ship Date" ], [ "$20.50" , "4" , "3/1/2016" ], ]; const request = { valueInputOption : "USER ENTERED" , data : [ { range : "Sheet1!A1:A4" , majorDimension : "COLUMNS" , values : columnAValues , }, { range : "Sheet1!B1:D2" , majorDimension : "ROWS" , values : rowValues , }, ], }; try { const response = Sheets .
- Logs the values. @param {string} spreadsheetId The spreadsheet ID to read from. @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get / function readRange ( spreadsheetId = yourspreadsheetId ) { try { const response = Sheets .
- Sample code The following sample code uses version 4 of the API; this is the only version of the Sheets API available as an advanced service in Apps Script.
- Read values from a range The following example demonstrates how to read data values from a specified range in a sheet with the Sheets advanced service.

