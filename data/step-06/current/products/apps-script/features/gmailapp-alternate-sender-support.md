---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.814Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "GmailApp alternate sender support"
feature_slug: "gmailapp-alternate-sender-support"
latest_feature_date: "2012-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration"
keywords:
  - "alternate"
  - "sender"
  - "alias"
  - "gmailapp"
  - "gmail"
  - "script"
  - "added"
  - "apps"
---

# GmailApp alternate sender support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script added Gmail alias support by enabling GmailApp.getAliases() and allowing the selected alias to be used via the "from" option in GmailApp.sendEmail().

## Extended Definition

Apps Script added Gmail alias support by enabling GmailApp.getAliases() and allowing the selected alias to be used via the "from" option in GmailApp.sendEmail().

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the ability to list alternate sender addresses using GmailApp.getAliases() and use them in GmailApp.sendEmail() with the advanced option "from".
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Admin SDK Directory service in Apps Script allows administrators of Google Workspace domains to manage devices, groups, users, and other entities.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Directory Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Admin SDK Directory service uses the same objects, methods, and parameters as the public API.
- This is an advanced service that requires specific enabling steps for both the service in Apps Script and the Admin SDK on your domain.

### Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- By default, fetches 3 messages from the latest 3 threads. @return {Array} the messages' content. / function getRecentMessagesContent () { const NUM THREADS = 3 ; const NUM MESSAGES = 3 ; const threads = GmailApp . getInboxThreads ( 0 , NUM THREADS ); const messages = GmailApp . getMessagesForThreads ( threads ); const messagesContent = []; for ( let i = 0 ; i < messages . length ; i ++ ) { for ( let j = 0 ; j < NUM MESSAGES ; j ++ ) { const message = messages [ i ][ j ]; if ( message ) { messagesContent . push ( message . getRawContent ()); } } } return messagesContent ; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Page Summary outlined flag The Admin SDK Groups Migration service in Apps Script allows administrators to migrate emails from public folders and distribution lists to Google Groups discussion archives.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Groups Migration Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Admin SDK Groups Migration service uses the same objects, methods, and parameters as the public API.

