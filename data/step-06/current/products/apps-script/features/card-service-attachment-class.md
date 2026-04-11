---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.658Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Card Service Attachment class"
feature_slug: "card-service-attachment-class"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/advanced/analyticsadmin"
keywords:
  - "attachment"
  - "introduces"
  - "adding"
  - "card"
  - "class"
  - "an"
  - "for"
  - "in"
---

# Card Service Attachment class

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Introduces an Attachment class in Card Service for adding custom attachments to Google Calendar events in Workspace add-ons.

## Extended Definition

Introduces an Attachment class in Card Service for adding custom attachments to Google Calendar events in Workspace add-ons.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- The following new classes have been added to the Spreadsheet service : DataSourceChart DataSourceColumn DataSourceFormula DataSourcePivotTable DataSourceRefreshSchedule DataSourceRefreshScheduleFrequency DataSourceSheet DataSourceSheetFilter DataSourceTableColumn DataSourceTableFilter DateTimeGroupingRule PivotGroupLimit SortSpec New methods to support Connected Sheets have been added to the following classes in the Spreadsheet service : BigQueryDataSourceSpecBuilder BigQueryDataSourceSpec DataExecutionStatus DataSourceTable DataSource EmbeddedChart FilterCriteriaBuilder PivotFilter PivotGroup PivotTable PivotValue Range Sheet SpreadsheetApp Spreadsheet August 27, 2020 Feature A new class called DecoratedText has been added to the Card Service .
- March 24, 2022 Feature For Google Workspace Add-ons, an Attachment class has been added to the Card Service that lets you add custom attachments to Calendar events.
- August 23, 2021 Feature The Document Service has added support for smart chips by adding three new classes: Date - An element representing a formatted date.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- This API gives administrators of Google Workspace domains (including resellers) the ability to manage the group settings for groups in their Google Workspace account.
- Sample code is provided for getting and updating a group's settings.
- Apps Script to manage group settings for Google Workspace domains.

### Analytics Admin Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Reference For detailed information on this service, see the Google Analytics Admin API v1 .
- Accounts . list (); if ( ! accounts . items ! accounts . items . length ) { console . log ( "No accounts found." ); return ; } for ( let i = 0 ; i < accounts . items . length ; i ++ ) { const account = accounts . items [ i ]; console . log ( 'Account: name "%s", displayName "%s".' , account . name , account . displayName , ); } } catch ( e ) { // TODO (Developer) - Handle exception console . log ( "Failed with error: %s" , e . error ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Sample code Run a report The sample lists all the Google Analytics accounts available to a user by calling the accounts.list() method. advanced/analyticsAdmin.gs View on GitHub / Logs the Google Analytics accounts accessible by the current user. / function listAccounts () { try { accounts = AnalyticsAdmin .

