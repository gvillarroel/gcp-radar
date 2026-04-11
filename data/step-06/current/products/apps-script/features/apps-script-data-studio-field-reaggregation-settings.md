---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.687Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Data Studio: Field reaggregation settings"
feature_slug: "apps-script-data-studio-field-reaggregation-settings"
latest_feature_date: "2019-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses"
keywords:
  - "reaggregation"
  - "settings"
  - "field"
  - "studio"
  - "gained"
  - "script"
  - "apps"
  - "the"
---

# Apps Script Data Studio: Field reaggregation settings

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Data Studio service gained methods to get and set whether a field can be reaggregated.

## Extended Definition

The Data Studio service gained methods to get and set whether a field can be reaggregated.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- February 26, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support BigQuery data connectors in Sheets : BigQueryDataSourceSpec BigQueryDataSourceSpecBuilder DataExecutionErrorCode DataExecutionState DataExecutionStatus DataSourceParameterType DataSourceParameter DataSourceSpecBuilder DataSourceSpec DataSourceTable DataSourceType DataSource Range.getDataSourceTables() Sheet.getDataSourceTables() SpreadsheetApp.enableAllDataSourcesExecution() SpreadsheetApp.enableBigQueryExecution() SpreadsheetApp.newDataSourceSpec() Spreadsheet.getDataSourceTables() Spreadsheet.insertSheetWithDataSourceTable(spec) The Data Studio service has been extended with the following new methods involving reaggregation settings: Field.getIsReaggregatable() Field.setIsReaggregatable(isReaggregatable) January 22, 2019 Deprecated The deprecated UiApp service will be officially shutdown on July 15th, 2019.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Optimization service has been updated with the following batch methods: LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients) LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients) May 03, 2019 Feature The Document service has been updated to add methods to get and set the language of a document: Document.getLanguage() Document.getSupportedLanguageCodes() Document.setLanguage(languageCode) April 19, 2019 Feature The Data Studio service has been updated to add a few values to FieldType enum : HYPERLINK IMAGE IMAGE LINK April 08, 2019 Change The behavior of the Google Cloud (GCP) projects used by scripts has been altered.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Settings service lets you use the Admin SDK's Groups Settings API in Google Apps Script.
- Here, the description is modified, but various other settings can be changed in the same way. @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch / function updateGroupSettings () { const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings . newGroups (); group . description = "Newly changed group description" ; AdminGroupsSettings .

### "Method: processes.listScriptProcesses \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "deploymentId" : string , "functionName" : string , "startTime" : string , "endTime" : string , "types" : [ enum ( ProcessType ) ] , "statuses" : [ enum ( ProcessStatus ) ] , "userAccessLevels" : [ enum ( UserAccessLevel ) ] } Fields deploymentId string Optional field used to limit returned processes to those originating from projects with a specific deployment ID. functionName string Optional field used to limit returned processes to those originating from a script function with the given function name. startTime string ( Timestamp format) Optional field used to limit returned processes to those that were started on or after the given timestamp.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . types[] enum ( ProcessType ) Optional field used to limit returned processes to those having one of the specified process types. statuses[] enum ( ProcessStatus ) Optional field used to limit returned processes to those having one of the specified process statuses. userAccessLevels[] enum ( UserAccessLevel ) Optional field used to limit returned processes to those having one of the specified user access levels.
- Query parameters Parameters scriptId string The script ID of the project whose processes are listed. scriptProcessFilter object ( ListScriptProcessesFilter ) A filter used to limit the list results; only processes matching the filter criteria are returned. pageSize integer The maximum number of returned processes per page of results.
- JSON representation { "processes" : [ { object ( Process ) } ] , "nextPageToken" : string } Fields processes[] object ( Process ) List of processes matching request parameters. nextPageToken string Token for the next page of results.

