---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.561Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Advanced Sheets editing APIs"
feature_slug: "advanced-sheets-editing-apis"
latest_feature_date: "2018-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/sheets"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/connected-sheets"
keywords:
  - "advanced"
  - "sheets"
  - "editing"
  - "apis"
  - "apps"
  - "script"
  - "spreadsheet"
  - "adds"
---

# Advanced Sheets editing APIs

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Spreadsheet service adds a broad set of classes and methods for advanced editing, formatting, filtering, pivoting, and selection operations.

## Extended Definition

Apps Script Spreadsheet service adds a broad set of classes and methods for advanced editing, formatting, filtering, pivoting, and selection operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/sheets](https://developers.google.com/apps-script/advanced/sheets)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets)

## Supporting Pages

### Advanced Sheets Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/sheets](https://developers.google.com/apps-script/advanced/sheets)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It is equivalent to the Add a sheet recipe sample. advanced/sheets.gs View on GitHub / Add a new sheet with some properties. @param {string} spreadsheetId The spreadsheet ID. @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate / function addSheet ( spreadsheetId = yourspreadsheetId ) { const requests = [ { addSheet : { properties : { title : "Deposits" , gridProperties : { rowCount : 20 , columnCount : 12 , }, tabColor : { red : 1.0 , green : 0.3 , blue : 0.4 , }, }, }, }, ]; try { const response = Sheets .
- Home Google Workspace Apps Script Reference Send feedback Advanced Sheets Service Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Advanced Sheets service allows accessing the Sheets API using Apps Script to read, edit, format, and present data in Google Sheets.
- Sample code The following sample code uses version 4 of the API; this is the only version of the Sheets API available as an advanced service in Apps Script.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The following updates have been made to the Spreadsheet service to support Looker in Connected Sheets from Apps Script.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- August 04, 2015 Feature Added the following methods to the Spreadsheet service to let scripts control "warning-based" protection for spreadsheet ranges (which means that every user can edit data in the area, except editing prompts the user to confirm the edit): Protection.isWarningOnly() Protection.setWarningOnly(warningOnly) June 30, 2015 Feature Added two variations of the method computeRsaSha256Signature to the Utilities global object to let scripts sign a string using the RSA SHA-256 algorithm.

### Use Connected Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It adds a Drive OAuth scope in addition to the minimum required spreadsheet and bigquery.readonly OAuth scopes: { ... "oauthScopes" : [ "https://www.googleapis.com/auth/bigquery.readonly" , "https://www.googleapis.com/auth/spreadsheets" , "https://www.googleapis.com/auth/drive" ], ... } Example: Create and refresh a data source object The following examples shows how to add a data source, create a data source object from the data source, refresh the data source object, and get the execution status.
- The following table lists the most common DataSource actions and how to create them in Google Apps Script: Action Apps Script class Method to use Connect a sheet to a supported data source DataSourceSpec SpreadsheetApp.newDataSourceSpec() Choose a data source DataSource Spreadsheet.insertDataSourceSheet().getDataSource() Add a data source sheet DataSourceSheet Spreadsheet.insertDataSourceSheet() Add a pivot table DataSourcePivotTable Range.insertDataSourcePivotTable() Pull data into an extract DataSourceTable Range.insertDataSourceTable() Use a formula DataSourceFormula Range.setFormula() Add a chart DataSourceChart Sheet.insertDataSourceChart() Add required authorization scopes To access BigQuery data, include the enableBigQueryExecution() method in your Apps Script code.
- The following sample shows the SpreadsheetApp.enableBigQueryExecution() method called within a function: function addDataSource () { SpreadsheetApp . enableBigQueryExecution (); var spreadsheet = SpreadsheetApp . getActive (); } To access Looker data, include the enableLookerExecution() method in your Apps Script code.
- To access BigQuery or Looker data, you must include enableBigQueryExecution() or enableLookerExecution() respectively in your Apps Script code, which adds the necessary OAuth scopes.

