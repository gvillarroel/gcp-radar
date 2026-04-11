---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.834Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Charts Service"
feature_slug: "charts-service"
latest_feature_date: "2011-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/ExecuteStreamResponse"
  - "https://developers.google.com/apps-script/guides/services/quotas"
keywords:
  - "dynamic"
  - "charts"
  - "chart"
  - "script"
  - "added"
  - "apps"
  - "for"
  - "the"
---

# Charts Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script added the Charts service for dynamic chart creation and embedding in apps, email, and exports.

## Extended Definition

Apps Script added the Charts service for dynamic chart creation and embedding in apps, email, and exports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/ExecuteStreamResponse](https://developers.google.com/apps-script/api/reference/rest/v1/ExecuteStreamResponse)
- [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- November 03, 2022 Feature Apps Script added a new method to the Utilities class . parseDate(date, timeZone, format ) parses a provided string date according to the specification described in the Java Standard Edition SimpleDateFormat class .

### ExecuteStreamResponse \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/ExecuteStreamResponse](https://developers.google.com/apps-script/api/reference/rest/v1/ExecuteStreamResponse)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation ScriptExecutionResult JSON representation Value JSON representation Struct JSON representation ListValue JSON representation The response for executing or debugging a function in an Apps Script project.
- Page Summary outlined flag ExecuteStreamResponse is the response for executing or debugging a function in an Apps Script project, containing an update field that holds the execution result.
- JSON representation { // Union field update can be only one of the following: "result" : { object ( ScriptExecutionResult ) } // End of list of possible types for union field update . } Fields Union field update .
- Value is a dynamically typed value representing the outcome of an executed script, supporting various types including null, number, string, boolean, struct, list, date, proto, and bytes.

### Quotas for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Feature Consumer accounts (for example, gmail.com) Google Workspace accounts Calendar events created 5,000 / day 10,000 / day Contacts created 1,000 / day 2,000 / day Documents created 250 / day 1,500 / day Files converted 2,000 / day 4,000 / day Email recipients per day (for example, with MailApp) 100 / day 1,500 / day Email recipients per day within domain (for example, with MailApp) 100 / day 2,000 / day Email read/write (excluding send) 20,000 / day 50,000 / day Groups read 2,000 / day 10,000 / day JDBC connection 10,000 / day 50,000 / day JDBC failed connection 100 / day 500 / day Presentations created 250 / day 1,500 / day Properties read/write 50,000 / day 500,000 / day Slides created 250 / day 1,500 / day Spreadsheets created 250 / day 3,200 / day Triggers total runtime 90 min / day 6 hr / day URL Fetch calls 20,000 / day 100,000 / day Static Map render 1,000 / day 10,000 / day Google Map Direction query 1,000 / day 10,000 / day Google Map Geocode calls 1,000 / day 10,000 / day Translate calls 5,000 / day 20,000 / day Google Map elevation samples query 1,000 / day 10,000 / day Apps Script projects 50 / day 50 / day Additional limits apply for trial accounts.
- Monitor quota usage To monitor your script's quota consumption and execution health, use the following methods: Email quota : Use MailApp.getRemainingDailyQuota() to check the number of remaining email recipients you can send to for the rest of the day.
- Google Cloud console : If your Apps Script project uses a standard Google Cloud project , you can monitor service-specific quotas and API usage in the Google Cloud console .
- Home Google Workspace Apps Script Reference Send feedback Quotas for Google Services Stay organized with collections Save and categorize content based on your preferences.

