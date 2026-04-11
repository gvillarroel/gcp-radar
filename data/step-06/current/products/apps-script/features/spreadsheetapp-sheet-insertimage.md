---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.760Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "SpreadsheetApp.Sheet.insertImage"
feature_slug: "spreadsheetapp-sheet-insertimage"
latest_feature_date: "2014-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-reports"
keywords:
  - "insertimage"
  - "offsetx"
  - "spreadsheetapp"
  - "blob"
  - "column"
  - "row"
  - "sheet"
  - "added"
---

# SpreadsheetApp.Sheet.insertImage

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added Sheet.insertImage(blob, column, row[, offsetX, offsetY]) to insert image blobs into a sheet at a specific cell with optional offsets.

## Extended Definition

Added Sheet.insertImage(blob, column, row[, offsetX, offsetY]) to insert image blobs into a sheet at a specific cell with optional offsets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Added two new SpreadsheetApp methods: Sheet.insertImage(blob, column, row) : Inserts a Blob as an image in the sheet at a given row and column.
- Sheet.insertImage(blob, column, row, offsetX, offsetY) : Inserts a Blob as an image in the sheet at a given row and column, with a pixel offset.
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.
- Cannot open other spreadsheets ( SpreadsheetApp.openById() or SpreadsheetApp.openByUrl() ).
- For example, the DOUBLE() function shown earlier can be rewritten to accept a single cell or range of cells as follows: / Multiplies the input value by 2. @param {number Array<Array<number>>} input The value or range of cells to multiply. @return The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return Array . isArray ( input ) ? input . map ( row = > row . map ( cell = > cell 2 )) : input 2 ; } This approach uses the map method of JavaScript's Array object on the two-dimensional array of cells to get each row, then for each row, it uses map again to return double each cell's value.
- Consequently, they can only call services that don't have access to personal data, specifically the following: Supported services Notes Cache Works, but not particularly useful in custom functions HTML Can generate HTML, but can't display it (rarely useful) JDBC Language Lock Works, but not particularly useful in custom functions Maps Can calculate directions, but not display maps Properties getUserProperties() only gets the properties of the spreadsheet owner.

### Admin SDK Reports Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- UserUsageReport . get ( "all" , date , { parameters : parameters . join ( "," ), maxResults : 500 , pageToken : pageToken , }); if ( page . warnings ) { for ( const warning of page . warnings ) { console . log ( warning . message ); } } const reports = page . usageReports ; if ( reports ) { for ( const report of reports ) { const parameterValues = getParameterValues ( report . parameters ); const row = [ report . date , report . entity . userEmail , parameterValues [ "accounts:last login time" ], parameterValues [ "gmail:num emails received" ], parameterValues [ "drive:num items created" ], ]; rows . push ( row ); } } pageToken = page . nextPageToken ; } while ( pageToken ); if ( rows . length === 0 ) { console . log ( "No results returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "Google Workspace User Usage Report" , ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = [ "Date" , "User" , "Last Login" , "Num Emails Received" , "Num Drive Files Created" , ]; sheet . appendRow ( headers ); // Append the results. sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Gets a map of parameter names to values from an array of parameter objects. @param {Array} parameters An array of parameter objects. @return {Object} A map from parameter names to their values. / function getParameterValues ( parameters ) { return parameters . reduce (( result , parameter ) = > { const name = parameter . name ; let value ; if ( parameter . intValue !== undefined ) { value = parameter . intValue ; } else if ( parameter . stringValue !== undefined ) { value = parameter . stringValue ; } else if ( parameter . datetimeValue !== undefined ) { value = new Date ( parameter . datetimeValue ); } else if ( parameter . boolValue !== undefined ) { value = parameter . boolValue ; } result [ name ] = value ; return result ; }, {}); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Activities . list ( "all" , "login" , { startTime : startTime , endTime : endTime , maxResults : 500 , pageToken : pageToken , }); const items = page . items ; if ( items ) { for ( const item of items ) { const row = [ new Date ( item . id . time ), item . actor . email , item . events [ 0 ]. name , ]; rows . push ( row ); } } pageToken = page . nextPageToken ; } while ( pageToken ); if ( rows . length === 0 ) { console . log ( "No results returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "Google Workspace Login Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = [ "Time" , "User" , "Login Result" ]; sheet . appendRow ( headers ); // Append the results. sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } Generate user usage report This sample generates a user usage report for this day last week as a spreadsheet.
- The report includes the date, user, last login time, number of emails received, and number of drive files created. @see https://developers.google.com/admin-sdk/reports/reference/rest/v1/userUsageReport/get / function generateUserUsageReport () { const today = new Date (); const oneWeekAgo = new Date ( today . getTime () - 7 24 60 60 1000 ); const timezone = Session . getScriptTimeZone (); const date = Utilities . formatDate ( oneWeekAgo , timezone , "yyyy-MM-dd" ); const parameters = [ "accounts:last login time" , "gmail:num emails received" , "drive:num items created" , ]; const rows = []; let pageToken ; let page ; do { page = AdminReports .
- The report includes the time, user, and login result. @see https://developers.google.com/admin-sdk/reports/reference/rest/v1/activities/list / function generateLoginActivityReport () { const now = new Date (); const oneWeekAgo = new Date ( now . getTime () - 7 24 60 60 1000 ); const startTime = oneWeekAgo . toISOString (); const endTime = now . toISOString (); const rows = []; let pageToken ; let page ; do { page = AdminReports .

