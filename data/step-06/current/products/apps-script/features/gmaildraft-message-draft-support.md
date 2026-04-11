---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.706Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "GmailDraft message draft support"
feature_slug: "gmaildraft-message-draft-support"
latest_feature_date: "2017-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage"
keywords:
  - "gmaildraft"
  - "draft"
  - "message"
  - "enabling"
  - "gmail"
  - "added"
  - "the"
  - "to"
---

# GmailDraft message draft support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added GmailDraft to the Gmail service, enabling scripts to create, edit, delete, and send new drafts and draft replies.

## Extended Definition

Added GmailDraft to the Gmail service, enabling scripts to create, edit, delete, and send new drafts and draft replies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- [https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage](https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- September 15, 2017 Feature Added GmailDraft to the Gmail service.
- Feature Added the ability to set the subject line via the subject field in the advanced arguments for GmailMessage.forward() .
- The Slides service has been extended with the following new methods to support concrete color schemes: ColorScheme.setConcreteColor(type, color) ColorScheme.setConcreteColor(type, red, green, blue) ColorScheme.setConcreteColor(type, hexColor) The Spreadsheet service has been extended with the following new methods to support trimming whitespace and removing duplicate values: RangeList.trimWhitespace() Range.removeDuplicates() Range.removeDuplicates(columnsToCompare) Range.trimWhitespace() May 20, 2019 Feature The Gmail service has been updated with the GmailMessage.getHeader(name) method that can retrieve a RFC 2822 header from a message.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Members . insert ( member , groupEmail ); console . log ( "User %s added as a member of group %s." , userEmail , groupEmail , ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Users . insert ( user ); console . log ( "User %s created with ID %s." , user . primaryEmail , user . id ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Create alias This sample creates an alias (nickname) for a user. advanced/adminSDK.gs View on GitHub / Creates an alias (nickname) for a user. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users.aliases/insert / function createAlias () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; let alias = { alias : "chica@example.com" , }; try { alias = AdminDirectory .
- Aliases . insert ( alias , userEmail ); console . log ( "Created alias %s for user %s." , alias . alias , userEmail ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } List all groups This sample lists all the groups in the domain. advanced/adminSDK.gs View on GitHub / Lists all the groups in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/groups/list / function listAllGroups () { let pageToken ; let page ; do { page = AdminDirectory .
- Users . get ( userEmail ); console . log ( "User data:\n %s" , JSON . stringify ( user , null , 2 )); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Add user This sample adds a new user to the domain, including only the required information.

### LocalizedMessage \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage](https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "locale" : string , "message" : string } Fields locale string The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- JSON representation If the Accept-Language header in the incoming request is not "English", then errors returned by the Apps Script API include this message.
- Page Summary outlined flag Apps Script API errors include a LocalizedMessage with translated error text if the Accept-Language header is not "English".

