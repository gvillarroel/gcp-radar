---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.634Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "XmlService"
feature_slug: "xmlservice"
latest_feature_date: "2013-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/external"
  - "https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors"
keywords:
  - "xmlservice"
  - "was"
  - "added"
  - "replacement"
  - "old"
  - "xml"
---

# XmlService

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

XmlService was added as the replacement for the old Xml service.

## Extended Definition

XmlService was added as the replacement for the old Xml service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/external](https://developers.google.com/apps-script/guides/services/external)
- [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added XmlService to replace the old Xml service.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- April 05, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support text finding, checkboxes, and other features: TextFinder RecalculationInterval SheetType DataValidationBuilder.requireCheckbox() DataValidationBuilder.requireCheckbox(checkedValue) DataValidationBuilder.requireCheckbox(checkedValue, uncheckedValue) A clearRanges() method has been added to the all the embedded chart type builder classes, such as EmbeddedAreaChartBuilder.clearRanges() EmbeddedChart.getChartId() RangeList.check() RangeList.insertCheckboxes() RangeList.insertCheckboxes(checkedValue) RangeList.insertCheckboxes(checkedValue, uncheckedValue) RangeList.removeCheckboxes() RangeList.uncheck() Range.check() Range.createTextFinder(findText) Range.getDataRegion() Range.getDataRegion(dimension) Range.insertCheckboxes() Range.insertCheckboxes(checkedValue) Range.insertCheckboxes(checkedValue, uncheckedValue) Range.removeCheckboxes() Range.uncheck() Sheet.createTextFinder(findText) Sheet.getType() Spreadsheet.createTextFinder(findText) Spreadsheet.getIterativeCalculationConvergenceThreshold() Spreadsheet.getMaxIterativeCalculationCycles() Spreadsheet.getRecalculationInterval() Spreadsheet.isIterativeCalculationEnabled() Spreadsheet.moveChartToObjectSheet(chart) Spreadsheet.setIterativeCalculationConvergenceThreshold(minThreshold) Spreadsheet.setIterativeCalculationEnabled(isEnabled) Spreadsheet.setMaxIterativeCalculationCycles(maxIterations) Spreadsheet.setRecalculationInterval(recalculationInterval) The Data Studio service has been extended with the following new classes and methods that support configuring BigQuery connectors: BigQueryConfig BigQueryParameterType CommunityConnector.newBigQueryConfig() The Notification objects in the Card service no longer have a type that you must set.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.

### External APIs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/external](https://developers.google.com/apps-script/guides/services/external)
- Source ID: `site-docs-root-2`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parse XML If an external API returns a raw XML response for a request, access the XML response using the method HTTPResponse.getContentText() . // Make request to API and get response before this point. var xml = response . getContentText (); var doc = XmlService . parse ( xml ); When making XML requests to an API, use the XmlService methods to construct the XML to send. var root = XmlService . createElement ( 'entry' ) . setAttribute ( 'keywords' , 'dog, skateboard' ); var group = XmlService . createElement ( 'group' ) . setAttribute ( 'title' , 'Dog Skateboarding' ) . setAttribute ( 'description' , 'My dog gets some serious air' ); root . addContent ( group ); var document = XmlService . createDocument ( root ); var payload = XmlService . getPrettyFormat (). format ( document ); // Make request to API with payload after this point.
- Handling XML responses and requests uses getContentText() and the XmlService methods.

### Fix errors in your converted code \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Suppose there are two files being opened by workbook.open in the VBA code: File 1: C:\Data\abc.xlsx File 2: C:\Data\xyz.xlsx The following code shows how the Macro Converter replaces Workbook.open with Apps Script everywhere Workbook.open is used to open File 1: var spreadSheetId = handle mso excel get google spreadsheet id ( "C:\Data \a bc.xlsx" ); var spreadSheet = SpreadsheetApp . openById ( spreadSheetId ); The below error is added to the unimplemented constructs.gs file in the Apps Script project: / Method to return the spreadsheet id manually . @ param { string } FileName ID of the spreadsheet to be opened . @ return { string } return the spreadsheet id . / function handle mso excel get google spreadsheet id ( FileName ) { // Upload the Excel files being opened by the API to Google Drive and convert // them to Google Sheets . // Determine the spreadsheet ID of the Google Sheets file created . // Implement this method to return the corresponding spreadsheet ID when given // the original file path as parameter . throw new Error ( 'Please return the spreadsheet ID corresponding to filename: ' + FileName ); return ' ' ; } As instructed by the comments in the previous sample, you need to convert the target files to Sheets files on Drive.
- The corresponding Google Spreadsheet IDs are highlighted in the following list: File #1: C:\Data\abc.xlsx becomes https://docs.google.com/spreadsheets/d/ abc123Abc123Abc123abc File #2: C:\Data\xyz.xlsx becomes https://docs.google.com/spreadsheets/d/ xyz456Xyz456xYz456xyZ Then, modify the code in the Apps Script function to open the files by ID: / Method to return the spreadsheet id manually . @ param { string } FileName ID of the spreadsheet to be opened . @ return { string } return the spreadsheet id . / function handle mso excel get google spreadsheet id ( FileName ) { // Upload the Excel files being opened by the API to Google Drive and convert // them to Google Sheets . // Determine the spreadsheet ID of the Google Sheets file created . // Implement this method to return the corresponding spreadsheet ID when given // the original file path as parameter if ( Filename . indexOf ( "abc.xlsx" ) >= 0 ) { return "abc123Abc123Abc123abc" ; } else if ( Filename . indexOf ( "xyz.xlsx" ) >= 0 ) { return "xyz456Xyz456xYz456xyZ" ; } Intentional error Intentional errors are added to your converted code to mimic the error behavior of your original VBA code.
- Because this object type isn’t supported in Apps Script, the converted code creates the following functions in the unimplemented constructs.gs file that you need to define. api application commandbars() api commandbars item() The functions are called in the converted code as shown below: PrintName ( api commandbars item ( api application commandbars (), "Standard" ))) Here ’ s how the new functions are added to the unimplemented construct . gs file : function api application commandbars ( CallingObject ) { ThrowException ( 'API application.commandbars not supported yet.' ); } function api commandbars item ( CallingObject , index ) { ThrowException ( 'API commandbars.item not supported yet.' ); } To get the new functions to work, take the following steps: 3.1 Define a new object type that creates the functionalities of CommandBars and a new collection of CommandBars similar to what exists in VBA.
- If the API is critical for the workflow the user can implement the unimplemented handler method in the generated code, else comment out the throw statement. @param {Object} CallingObject represents the parent object using which the API has been called. @param {string} Password @param {boolean} DrawingObjects @param {boolean} Contents @param {boolean} Scenarios @param {boolean} UserInterfaceOnly / function api chart protect ( CallingObject , Password , DrawingObjects , Contents , Scenarios , UserInterfaceOnly ) { var ranges = CallingObject . getChart (). getRanges (); for ( var i = 0 ; i ranges . length ; i ++ ) { // Note that this does not lock the range for the document owner . ranges [ i ] . protect (); } } Example 2: Unsupported object type When the object type is unknown, the unimplemented API error is added to the variant resolution.gs file.

