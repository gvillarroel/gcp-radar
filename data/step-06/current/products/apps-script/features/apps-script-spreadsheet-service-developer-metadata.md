---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.694Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Spreadsheet service: Developer metadata"
feature_slug: "apps-script-spreadsheet-service-developer-metadata"
latest_feature_date: "2018-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/analyticsdata"
  - "https://developers.google.com/apps-script/guides/triggers"
keywords:
  - "metadata"
  - "developer"
  - "spreadsheet"
  - "classes"
  - "gained"
  - "script"
  - "apps"
  - "and"
---

# Apps Script Spreadsheet service: Developer metadata

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Spreadsheet gained developer metadata classes and APIs to add, find, and retrieve metadata associated with spreadsheet objects.

## Extended Definition

Spreadsheet gained developer metadata classes and APIs to add, find, and retrieve metadata associated with spreadsheet objects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- The following is a full list of the removed classes and methods: Charts service CategoryFilterBuilder Control DashboardPanel DashboardPanelBuilder Chart.getId() Chart.getType() Charts.newCategoryFilter() Charts.newDashboardPanel() Charts.newNumberRangeFilter() Charts.newStringFilter() NumberRangeFilterBuilder.build() NumberRangeFilterBuilder.setDataTable(tableBuilder) NumberRangeFilterBuilder.setDataTable(table) NumberRangeFilterBuilder.setFilterColumnIndex(columnIndex) NumberRangeFilterBuilder.setFilterColumnLabel(columnLabel) NumberRangeFilterBuilder.setLabel(label) NumberRangeFilterBuilder.setLabelSeparator(labelSeparator) NumberRangeFilterBuilder.setLabelStacking(orientation) StringFilterBuilder.build() StringFilterBuilder.setDataTable(tableBuilder) StringFilterBuilder.setDataTable(table) StringFilterBuilder.setFilterColumnIndex(columnIndex) StringFilterBuilder.setFilterColumnLabel(columnLabel) StringFilterBuilder.setLabel(label) StringFilterBuilder.setLabelSeparator(labelSeparator) StringFilterBuilder.setLabelStacking(orientation) Spreadsheet service EmbeddedChart.getId() EmbeddedChart.getType() EmbeddedChart.setId(id) Change The Slides service class RgbColor and the enumeration ColorType have been moved from the Slides service to the Base script service.

### Analytics Data Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Properties . runReport ( request , properties/ ${ propertyId } , ); if ( ! report . rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "Google Analytics Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const dimensionHeaders = report . dimensionHeaders . map (( dimensionHeader ) = > { return dimensionHeader . name ; }); const metricHeaders = report . metricHeaders . map (( metricHeader ) = > { return metricHeader . name ; }); const headers = [... dimensionHeaders , ... metricHeaders ]; sheet . appendRow ( headers ); // Append the results. const rows = report . rows . map (( row ) = > { const dimensionValues = row . dimensionValues . map (( dimensionValue ) = > { return dimensionValue . value ; }); const metricValues = row . metricValues . map (( metricValues ) = > { return metricValues . value ; }); return [... dimensionValues , ... metricValues ]; }); sheet . getRange ( 2 , 1 , report . rows . length , headers . length ). setValues ( rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } catch ( e ) { // TODO (Developer) - Handle exception console . log ( "Failed with error: %s" , e . error ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Google Workspace Apps Script Reference Send feedback Analytics Data Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the AnalyticsData service uses the same objects, methods, and parameters as the public API.
- Creates a sheet with the report. / function runReport () { / TODO(developer): Uncomment this variable and replace with your Google Analytics 4 property ID before running the sample. / const propertyId = "YOUR-GA4-PROPERTY-ID" ; try { const metric = AnalyticsData . newMetric (); metric . name = "activeUsers" ; const dimension = AnalyticsData . newDimension (); dimension . name = "city" ; const dateRange = AnalyticsData . newDateRange (); dateRange . startDate = "2020-03-31" ; dateRange . endDate = "today" ; const request = AnalyticsData . newRunReportRequest (); request . dimensions = [ dimension ]; request . metrics = [ metric ]; request . dateRanges = dateRange ; const report = AnalyticsData .

### Simple Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, if an empty cell is selected, the onSelectionChange(e) function sets the cell's background to red. triggers/triggers.gs View on GitHub / The event handler triggered when the selection changes in the spreadsheet. @param {Event} e The onSelectionChange event. @see https://developers.google.com/apps-script/guides/triggers#onselectionchangee / function onSelectionChange ( e ) { // Set background to red if a single empty cell is selected. const range = e . range ; if ( range . getNumRows () === 1 && range . getNumColumns () === 1 && range . getCell ( 1 , 1 ). getValue () === "" ) { range . setBackground ( "red" ); } } doGet(e) and doPost(e) The doGet(e) trigger runs automatically when a user visits a web app or a program sends an HTTP GET request to a web app. doPost(e) runs when a program sends an HTTP POST request to a web app.
- For example, the onEdit(e) function below sets a comment on the cell that records the last time it was edited. triggers/triggers.gs View on GitHub / The event handler triggered when editing the spreadsheet. @param {Event} e The onEdit event. @see https://developers.google.com/apps-script/guides/triggers#onedite / function onEdit ( e ) { // Set a comment on the edited cell to indicate when it was changed. const range = e . range ; range . setNote ( Last modified: ${ new Date () } ); } The onEdit() trigger only queues up to 2 trigger events. onSelectionChange(e) The onSelectionChange(e) trigger runs automatically when a user changes the selection in a spreadsheet.
- These restrictions don't apply to doGet(e) or doPost(e) . onOpen(e) The onOpen(e) trigger runs automatically when a user opens a spreadsheet, document, presentation, or form that they have permission to edit. (The trigger does not run when responding to a form, only when opening the form to edit it.) onOpen(e) is most commonly used to add custom menu items to Google Sheets, Slides, Docs, or Forms. triggers/triggers.gs View on GitHub / The event handler triggered when opening the spreadsheet. @param {Event} e The onOpen event. @see https://developers.google.com/apps-script/guides/triggers#onopene / function onOpen ( e ) { // Add a custom menu to the spreadsheet.
- Learn more about authorization . triggers/triggers.gs View on GitHub / The event handler triggered when installing the add-on. @param {Event} e The onInstall event. @see https://developers.google.com/apps-script/guides/triggers#oninstalle / function onInstall ( e ) { onOpen ( e ); } onEdit(e) The onEdit(e) trigger runs automatically when a user changes the value of any cell in a spreadsheet.

