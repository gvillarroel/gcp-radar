---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.804Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Sheet.showSheet() method"
feature_slug: "sheet-showsheet-method"
latest_feature_date: "2013-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/advanced/adsense"
keywords:
  - "showsheet"
  - "scripts"
  - "sheet"
  - "method"
  - "added"
  - "so"
  - "can"
  - "the"
---

# Sheet.showSheet() method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added the Sheet.showSheet() method so scripts can make a spreadsheet sheet visible again.

## Extended Definition

Added the Sheet.showSheet() method so scripts can make a spreadsheet sheet visible again.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- August 04, 2015 Feature Added the following methods to the Spreadsheet service to let scripts control "warning-based" protection for spreadsheet ranges (which means that every user can edit data in the area, except editing prompts the user to confirm the edit): Protection.isWarningOnly() Protection.setWarningOnly(warningOnly) June 30, 2015 Feature Added two variations of the method computeRsaSha256Signature to the Utilities global object to let scripts sign a string using the RSA SHA-256 algorithm.
- April 30, 2024 Feature The cancelDataRefresh() method has been added to the following classes of the Spreadsheet service: DataSourceChart DataSourceFormula DataSourcePivotTable DataSourceSheet DataSourceTable The cancelDataRefresh() method cancels the data refresh associated with the object it's called on if the refresh is currently running.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Consequently, they can only call services that don't have access to personal data, specifically the following: Supported services Notes Cache Works, but not particularly useful in custom functions HTML Can generate HTML, but can't display it (rarely useful) JDBC Language Lock Works, but not particularly useful in custom functions Maps Can calculate directions, but not display maps Properties getUserProperties() only gets the properties of the spreadsheet owner.
- This means that a custom function written in one spreadsheet can't be used in other spreadsheets unless you use one of the following methods: Click Extensions > Apps Script to open the script editor, then copy the script text from the original spreadsheet and paste it into the script editor of another spreadsheet.
- This means that anyone with permission to edit the spreadsheet can also edit any Apps Script code attached to it.
- Duration values in Sheets also become Date objects, but working with them can be complicated .

### AdSense Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The accounts are specified as resource names, for example, accounts/pub-12345 , that can be used in other methods, such as listing ad clients .
- Reports . generate ( accountName , { // Specify the desired ad client using a filter. filters : [ AD CLIENT ID== ${ escapeFilterParameter ( adClientReportingDimensionId ) } , ], metrics : [ "PAGE VIEWS" , "AD REQUESTS" , "AD REQUESTS COVERAGE" , "CLICKS" , "AD REQUESTS CTR" , "COST PER CLICK" , "AD REQUESTS RPM" , "ESTIMATED EARNINGS" , ], dimensions : [ "DATE" ], ... dateToJson ( "startDate" , oneWeekAgo ), ... dateToJson ( "endDate" , today ), // Sort by ascending date. orderBy : [ "+DATE" ], }); if ( ! report . rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "AdSense Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. sheet . appendRow ( report . headers . map (( header ) = > header . name )); // Append the results. sheet . getRange ( 2 , 1 , report . rows . length , report . headers . length ) . setValues ( report . rows . map (( row ) = > row . cells . map (( cell ) = > cell . value ))); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Escape special characters for a parameter being used in a filter. @param {string} parameter The parameter to be escaped. @return {string} The escaped parameter. / function escapeFilterParameter ( parameter ) { return parameter . replace ( "\\" , "\\\\" ). replace ( "," , "\\," ); } / Returns the JSON representation of a Date object (as a google.type.Date). @param {string} paramName the name of the date parameter @param {Date} value the date @return {object} formatted date / function dateToJson ( paramName , value ) { return { [ ${ paramName } .year ] : value . getFullYear (), [ ${ paramName } .month ] : value . getMonth () + 1 , [ ${ paramName } .day ] : value . getDate (), }; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Adunits . list ( adClientName , { pageSize : 50 , pageToken : pageToken , }); if ( ! response . adUnits ) { console . log ( "No ad units found for this ad client." ); return ; } for ( const adUnit of response . adUnits ) { console . log ( 'Found ad unit with resource name "%s" and display name "%s".' , adUnit . name , adUnit . displayName , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } Generate a report This sample generates a report over your AdSense account and outputs the results to a spreadsheet. advanced/adsense.gs View on GitHub / Generates a spreadsheet report for a specific ad client in an account. @param {string} accountName The resource name of the account. @param {string} adClientReportingDimensionId The reporting dimension ID of the ad client. / function generateReport ( accountName , adClientReportingDimensionId ) { // Prepare report. const today = new Date (); const oneWeekAgo = new Date ( today . getTime () - 7 24 60 60 1000 ); const report = AdSense .
- You can get the account resource name by using the List accounts sample code. advanced/adsense.gs View on GitHub / Logs available Ad clients for an account. @param {string} accountName The resource name of the account that owns the collection of ad clients. / function listAdClients ( accountName ) { let pageToken ; do { const response = AdSense .

