---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.848Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Sheet row and column dimension methods"
feature_slug: "sheet-row-and-column-dimension-methods"
latest_feature_date: "2010-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/adsense"
keywords:
  - "dimension"
  - "column"
  - "row"
  - "methods"
  - "sheet"
  - "added"
  - "and"
  - "to"
---

# Sheet row and column dimension methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added methods to retrieve row heights and column widths via Sheet.getRowHeight() and Sheet.getColumnWidth().

## Extended Definition

Added methods to retrieve row heights and column widths via Sheet.getRowHeight() and Sheet.getColumnWidth().

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)

## Supporting Pages

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.
- This means that a custom function written in one spreadsheet can't be used in other spreadsheets unless you use one of the following methods: Click Extensions > Apps Script to open the script editor, then copy the script text from the original spreadsheet and paste it into the script editor of another spreadsheet.
- Similarly, the following custom function efficiently fetches live content from the Internet and uses a two-dimensional array to display two columns of results with just a single function call.
- For example, the DOUBLE() function shown earlier can be rewritten to accept a single cell or range of cells as follows: / Multiplies the input value by 2. @param {number Array<Array<number>>} input The value or range of cells to multiply. @return The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return Array . isArray ( input ) ? input . map ( row = > row . map ( cell = > cell 2 )) : input 2 ; } This approach uses the map method of JavaScript's Array object on the two-dimensional array of cells to get each row, then for each row, it uses map again to return double each cell's value.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Feature Added the following class, enum, and methods to the Spreadsheet service, to give precise control over protected sheets and ranges: Protection ProtectionType Range.canEdit() Range.isEndColumnBounded() Range.isEndRowBounded() Range.isStartColumnBounded() Range.isStartRowBounded() Range.protect() Sheet.getProtections(type) Sheet.protect() Spreadsheet.getProtections(type) Fixed Issue 4617 : HTML service pages that use the new IFRAME sandbox mode now render correctly in Firefox.
- Feature Added two new methods to the Sheet class for getting frozen rows and columns: Sheet.getFrozenRows() and Sheet.getFrozenColumns() .

### AdSense Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reports . generate ( accountName , { // Specify the desired ad client using a filter. filters : [ AD CLIENT ID== ${ escapeFilterParameter ( adClientReportingDimensionId ) } , ], metrics : [ "PAGE VIEWS" , "AD REQUESTS" , "AD REQUESTS COVERAGE" , "CLICKS" , "AD REQUESTS CTR" , "COST PER CLICK" , "AD REQUESTS RPM" , "ESTIMATED EARNINGS" , ], dimensions : [ "DATE" ], ... dateToJson ( "startDate" , oneWeekAgo ), ... dateToJson ( "endDate" , today ), // Sort by ascending date. orderBy : [ "+DATE" ], }); if ( ! report . rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "AdSense Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. sheet . appendRow ( report . headers . map (( header ) = > header . name )); // Append the results. sheet . getRange ( 2 , 1 , report . rows . length , report . headers . length ) . setValues ( report . rows . map (( row ) = > row . cells . map (( cell ) = > cell . value ))); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Escape special characters for a parameter being used in a filter. @param {string} parameter The parameter to be escaped. @return {string} The escaped parameter. / function escapeFilterParameter ( parameter ) { return parameter . replace ( "\\" , "\\\\" ). replace ( "," , "\\," ); } / Returns the JSON representation of a Date object (as a google.type.Date). @param {string} paramName the name of the date parameter @param {Date} value the date @return {object} formatted date / function dateToJson ( paramName , value ) { return { [ ${ paramName } .year ] : value . getFullYear (), [ ${ paramName } .month ] : value . getMonth () + 1 , [ ${ paramName } .day ] : value . getDate (), }; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Adunits . list ( adClientName , { pageSize : 50 , pageToken : pageToken , }); if ( ! response . adUnits ) { console . log ( "No ad units found for this ad client." ); return ; } for ( const adUnit of response . adUnits ) { console . log ( 'Found ad unit with resource name "%s" and display name "%s".' , adUnit . name , adUnit . displayName , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } Generate a report This sample generates a report over your AdSense account and outputs the results to a spreadsheet. advanced/adsense.gs View on GitHub / Generates a spreadsheet report for a specific ad client in an account. @param {string} accountName The resource name of the account. @param {string} adClientReportingDimensionId The reporting dimension ID of the ad client. / function generateReport ( accountName , adClientReportingDimensionId ) { // Prepare report. const today = new Date (); const oneWeekAgo = new Date ( today . getTime () - 7 24 60 60 1000 ); const report = AdSense .
- Adclients . list ( accountName , { pageToken : pageToken , }); if ( ! response . adClients ) { console . log ( "No ad clients found for this account." ); return ; } for ( const adClient of response . adClients ) { console . log ( 'Found ad client for product "%s" with resource name "%s".' , adClient . productCode , adClient . name , ); console . log ( "Reporting dimension ID: %s" , adClient . reportingDimensionId ?? "None" , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } List ad units This sample lists all of the ad units for a given ad client.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

