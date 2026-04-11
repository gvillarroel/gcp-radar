---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.836Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "GUI Builder ScrollPanel support"
feature_slug: "gui-builder-scrollpanel-support"
latest_feature_date: "2011-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
keywords:
  - "scrollpanel"
  - "component"
  - "gui"
  - "builder"
  - "added"
  - "for"
  - "the"
  - "in"
---

# GUI Builder ScrollPanel support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added support for a ScrollPanel component in the Apps Script GUI Builder.

## Extended Definition

Added support for a ScrollPanel component in the Apps Script GUI Builder.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- August 04, 2011 Feature Added support for ScrollPanel to the GUI Builder.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- The following new classes have been added to the Spreadsheet service : DataSourceChart DataSourceColumn DataSourceFormula DataSourcePivotTable DataSourceRefreshSchedule DataSourceRefreshScheduleFrequency DataSourceSheet DataSourceSheetFilter DataSourceTableColumn DataSourceTableFilter DateTimeGroupingRule PivotGroupLimit SortSpec New methods to support Connected Sheets have been added to the following classes in the Spreadsheet service : BigQueryDataSourceSpecBuilder BigQueryDataSourceSpec DataExecutionStatus DataSourceTable DataSource EmbeddedChart FilterCriteriaBuilder PivotFilter PivotGroup PivotTable PivotValue Range Sheet SpreadsheetApp Spreadsheet August 27, 2020 Feature A new class called DecoratedText has been added to the Card Service .
- Feature Added the SpreadsheetApp method DataValidationBuilder.requireFormulaSatisfied(String) , as well as an accompanying CUSTOM FORMULA value in DataValidationCriteria .

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- If you have previously stored the ID of a trigger, delete it by passing the ID as an argument to the following function. triggers/triggers.gs View on GitHub / Deletes a trigger. @param {string} triggerId The Trigger ID. @see https://developers.google.com/apps-script/guides/triggers/installable / function deleteTrigger ( triggerId ) { // Loop over all triggers. const allTriggers = ScriptApp . getProjectTriggers (); for ( let index = 0 ; index < allTriggers . length ; index ++ ) { // If the current trigger is the correct one, delete it. if ( allTriggers [ index ]. getUniqueId () === triggerId ) { ScriptApp . deleteTrigger ( allTriggers [ index ]); break ; } } } Before creating a trigger, verify that the associated function has all the necessary OAuth permissions .
- For example, a standalone script can programmatically create an installable trigger for an arbitrary Google Sheets file by calling TriggerBuilder.forSpreadsheet(key) and passing in the spreadsheet's ID.
- To create this trigger from a standalone script, replace SpreadsheetApp.getActive() with a call to SpreadsheetApp.openById(id) . triggers/triggers.gs View on GitHub / Creates a trigger for when a spreadsheet opens. @see https://developers.google.com/apps-script/guides/triggers/installable / function createSpreadsheetOpenTrigger () { const ss = SpreadsheetApp . getActive (); ScriptApp . newTrigger ( "myFunction" ). forSpreadsheet ( ss ). onOpen (). create (); } To programmatically modify an existing installable trigger, you must delete it and create a new one.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- This API gives administrators of Google Workspace domains (including resellers) the ability to manage the group settings for groups in their Google Workspace account.
- Reference For detailed information on this service, see the reference documentation for the Admin SDK Groups Settings API.
- To report issues and find other support, see the Admin SDK Groups Settings support guide .

