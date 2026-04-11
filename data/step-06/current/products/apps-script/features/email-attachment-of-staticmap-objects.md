---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.807Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Email attachment of StaticMap objects"
feature_slug: "email-attachment-of-staticmap-objects"
latest_feature_date: "2013-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/quotas"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration"
keywords:
  - "staticmap"
  - "attaching"
  - "attachment"
  - "email"
  - "objects"
  - "added"
  - "of"
  - "for"
---

# Email attachment of StaticMap objects

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added support for attaching StaticMap objects directly in emails.

## Extended Definition

Added support for attaching StaticMap objects directly in emails.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Updated the script failure notification emails to include the name and a link of the spreadsheet that contains the failed script in response to this issue Increased the allowed attachment size for emails sent via GmailApp and MailApp from 5MB to 25MB.
- Feature Added the ability to directly attach StaticMap objects in emails.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.

### Quotas for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Feature Consumer accounts (e.g., gmail.com) Google Workspace accounts Script runtime 6 min / execution 6 min / execution Custom function runtime 30 sec / execution 30 sec / execution Google Workspace add-on runtime 30 sec / execution 30 sec / execution Simultaneous executions per user 30 / user 30 / user Simultaneous executions per script 1,000 1,000 Email attachments 250 / msg 250 / msg Email body size 200 KB / msg 400 KB / msg Email recipients per message 50 / msg 50 / msg Email total attachments size 25 MB / msg 25 MB / msg Properties value size 9 KB / val 9 KB / val Properties total storage 500 KB / property store 500 KB / property store Triggers 20 / user / script 20 / user / script URL Fetch response size 50 MB / call 50 MB / call URL Fetch headers 100 / call 100 / call URL Fetch header size 8 KB / call 8 KB / call URL Fetch POST size 50 MB / call 50 MB / call URL Fetch URL length 2 KB / call 2 KB / call Versions 200 / script 200 / script Gemini Alpha program: Add-ons that extend Workspace Studio have an execution timeout of 2 minutes.
- Monitor quota usage To monitor your script's quota consumption and execution health, use the following methods: Email quota : Use MailApp.getRemainingDailyQuota() to check the number of remaining email recipients you can send to for the rest of the day.
- Feature Consumer accounts (for example, gmail.com) Google Workspace accounts Calendar events created 5,000 / day 10,000 / day Contacts created 1,000 / day 2,000 / day Documents created 250 / day 1,500 / day Files converted 2,000 / day 4,000 / day Email recipients per day (for example, with MailApp) 100 / day 1,500 / day Email recipients per day within domain (for example, with MailApp) 100 / day 2,000 / day Email read/write (excluding send) 20,000 / day 50,000 / day Groups read 2,000 / day 10,000 / day JDBC connection 10,000 / day 50,000 / day JDBC failed connection 100 / day 500 / day Presentations created 250 / day 1,500 / day Properties read/write 50,000 / day 500,000 / day Slides created 250 / day 1,500 / day Spreadsheets created 250 / day 3,200 / day Triggers total runtime 90 min / day 6 hr / day URL Fetch calls 20,000 / day 100,000 / day Static Map render 1,000 / day 10,000 / day Google Map Direction query 1,000 / day 10,000 / day Google Map Geocode calls 1,000 / day 10,000 / day Translate calls 5,000 / day 20,000 / day Google Map elevation samples query 1,000 / day 10,000 / day Apps Script projects 50 / day 50 / day Additional limits apply for trial accounts.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

### Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Migrate emails from Gmail to a Google Group This sample gets three RFC 822 formatted messages from the each of the latest three threads in the user's Gmail inbox, creates a blob from the email content (including attachments), and inserts it in a Google Group in the domain. advanced/adminSDK.gs View on GitHub / Gets three RFC822 formatted messages from the each of the latest three threads in the user's Gmail inbox, creates a blob from the email content (including attachments), and inserts it in a Google Group in the domain. / function migrateMessages () { // TODO (developer) - Replace groupId value with yours const groupId = "exampleGroup@example.com" ; const messagesToMigrate = getRecentMessagesContent (); for ( const messageContent of messagesToMigrate ) { const contentBlob = Utilities . newBlob ( messageContent , "message/rfc822" ); AdminGroupsMigration .
- By default, fetches 3 messages from the latest 3 threads. @return {Array} the messages' content. / function getRecentMessagesContent () { const NUM THREADS = 3 ; const NUM MESSAGES = 3 ; const threads = GmailApp . getInboxThreads ( 0 , NUM THREADS ); const messages = GmailApp . getMessagesForThreads ( threads ); const messagesContent = []; for ( let i = 0 ; i < messages . length ; i ++ ) { for ( let j = 0 ; j < NUM MESSAGES ; j ++ ) { const message = messages [ i ][ j ]; if ( message ) { messagesContent . push ( message . getRawContent ()); } } } return messagesContent ; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- This API gives administrators of Google Workspace domains (including resellers) the ability to migrate emails from public folders and distribution lists to Google Groups discussion archives.

