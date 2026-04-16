---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.544Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Data Studio BigQuery connector configuration"
feature_slug: "data-studio-bigquery-connector-configuration"
latest_feature_date: "2019-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments"
keywords:
  - "studio"
  - "bigquery"
  - "connector"
  - "configuration"
  - "apps"
  - "script"
  - "adds"
  - "classes"
---

# Data Studio BigQuery connector configuration

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Data Studio service adds BigQuery connector configuration classes and builder methods.

## Extended Definition

Apps Script Data Studio service adds BigQuery connector configuration classes and builder methods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- April 05, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support text finding, checkboxes, and other features: TextFinder RecalculationInterval SheetType DataValidationBuilder.requireCheckbox() DataValidationBuilder.requireCheckbox(checkedValue) DataValidationBuilder.requireCheckbox(checkedValue, uncheckedValue) A clearRanges() method has been added to the all the embedded chart type builder classes, such as EmbeddedAreaChartBuilder.clearRanges() EmbeddedChart.getChartId() RangeList.check() RangeList.insertCheckboxes() RangeList.insertCheckboxes(checkedValue) RangeList.insertCheckboxes(checkedValue, uncheckedValue) RangeList.removeCheckboxes() RangeList.uncheck() Range.check() Range.createTextFinder(findText) Range.getDataRegion() Range.getDataRegion(dimension) Range.insertCheckboxes() Range.insertCheckboxes(checkedValue) Range.insertCheckboxes(checkedValue, uncheckedValue) Range.removeCheckboxes() Range.uncheck() Sheet.createTextFinder(findText) Sheet.getType() Spreadsheet.createTextFinder(findText) Spreadsheet.getIterativeCalculationConvergenceThreshold() Spreadsheet.getMaxIterativeCalculationCycles() Spreadsheet.getRecalculationInterval() Spreadsheet.isIterativeCalculationEnabled() Spreadsheet.moveChartToObjectSheet(chart) Spreadsheet.setIterativeCalculationConvergenceThreshold(minThreshold) Spreadsheet.setIterativeCalculationEnabled(isEnabled) Spreadsheet.setMaxIterativeCalculationCycles(maxIterations) Spreadsheet.setRecalculationInterval(recalculationInterval) The Data Studio service has been extended with the following new classes and methods that support configuring BigQuery connectors: BigQueryConfig BigQueryParameterType CommunityConnector.newBigQueryConfig() The Notification objects in the Card service no longer have a type that you must set.
- February 26, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support BigQuery data connectors in Sheets : BigQueryDataSourceSpec BigQueryDataSourceSpecBuilder DataExecutionErrorCode DataExecutionState DataExecutionStatus DataSourceParameterType DataSourceParameter DataSourceSpecBuilder DataSourceSpec DataSourceTable DataSourceType DataSource Range.getDataSourceTables() Sheet.getDataSourceTables() SpreadsheetApp.enableAllDataSourcesExecution() SpreadsheetApp.enableBigQueryExecution() SpreadsheetApp.newDataSourceSpec() Spreadsheet.getDataSourceTables() Spreadsheet.insertSheetWithDataSourceTable(spec) The Data Studio service has been extended with the following new methods involving reaggregation settings: Field.getIsReaggregatable() Field.setIsReaggregatable(isReaggregatable) January 22, 2019 Deprecated The deprecated UiApp service will be officially shutdown on July 15th, 2019.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- VariableData Methods Method Return type Brief description add Boolean Value(value) Variable Data Adds a boolean value to the variable data. add Email Address(emailAddress) Variable Data Adds an email address to the variable data. add Float Value(value) Variable Data Adds a float value to the variable data. add Google User(googleUser) Variable Data Adds a google user to the variable data. add Integer Value(value) Variable Data Adds an integer value to the variable data. add Resource Data(resourceData) Variable Data Adds a Resource Data value to the variable data. add Resource Reference(resourceReference) Variable Data Adds a resource reference ID to the variable data. add String Value(value) Variable Data Adds a string value to the variable data. add Timestamp Value(value) Variable Data Adds a Time Stamp value to the variable data. add Workflow Text Format(workflowTextFormat) Variable Data Adds a Workflow Text Format value to the variable data.
- ValueMetadata Methods Method Return type Brief description add Castable Type(dataType) Value Metadata Adds a optional allowed types that can be dynamically casted for a variable data to this value metadata. add Enum Value(enumValue) Value Metadata Adds an optional string value to the allowed enum values of a variable, this field can only be set if the Data Type is set to String type. set Default Value(defaultValue) Value Metadata Sets the optional default value of the variable, example, if the variable type is boolean, defaultValue may be set to " true " or " false ".
- ReturnOutputVariablesAction Methods Method Return type Brief description add Variable Data(key, value) Return Output Variables Action Adds a variable data keyed by its variable name, a value is overwritten if the key already exists. set Log(log) Return Output Variables Action Sets the Log of the executed workflow action to the end user at Workflow's activity feed. set Variable Data Map(variables) Return Output Variables Action Sets the map of the variable data keyed by variable name, a value is overwritten if the key already exists.
- RenderActionBuilder Methods Method Return type Brief description build() Render Action Builds the current render action and validates it. set Action(action) Render Action Builder Sets the action that add-ons can use to update the UI to the render action. set Host App Action(hostAppAction) Render Action Builder Sets the Host App Action handled by individual host apps to the render action.

### REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- Source ID: `site-api-reference`
- Final score: 53
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Entry point properties per entry point type. properties can be only one of the following: webApp object ( WebAppEntryPoint ) An entry point specification for web apps. executionApi object ( ExecutionApiEntryPoint ) An entry point specification for Apps Script API execution calls. addOn object ( AddOnEntryPoint ) Add-on properties.
- Methods create Creates a deployment of an Apps Script project. delete Deletes a deployment of an Apps Script project. get Gets a deployment of an Apps Script project. list Lists the deployments of an Apps Script project. update Updates a deployment of an Apps Script project.
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects.deployments Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag A Deployment resource represents a single script deployment and includes its ID, configuration, update time, and entry points.

