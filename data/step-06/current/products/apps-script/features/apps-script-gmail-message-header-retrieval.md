---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.685Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Gmail message header retrieval"
feature_slug: "apps-script-gmail-message-header-retrieval"
latest_feature_date: "2019-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage"
  - "https://developers.google.com/apps-script/guides/services/quotas"
keywords:
  - "getheader"
  - "retrieval"
  - "gmailmessage"
  - "header"
  - "message"
  - "gmail"
  - "script"
  - "apps"
---

# Apps Script Gmail message header retrieval

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

GmailMessage.getHeader(name) was added to retrieve RFC 2822 headers from a message.

## Extended Definition

GmailMessage.getHeader(name) was added to retrieve RFC 2822 headers from a message.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage](https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage)
- [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The Slides service has been extended with the following new methods to support concrete color schemes: ColorScheme.setConcreteColor(type, color) ColorScheme.setConcreteColor(type, red, green, blue) ColorScheme.setConcreteColor(type, hexColor) The Spreadsheet service has been extended with the following new methods to support trimming whitespace and removing duplicate values: RangeList.trimWhitespace() Range.removeDuplicates() Range.removeDuplicates(columnsToCompare) Range.trimWhitespace() May 20, 2019 Feature The Gmail service has been updated with the GmailMessage.getHeader(name) method that can retrieve a RFC 2822 header from a message.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- Change Added an enhancement to GmailApp to allow retrieval of bcc addresses via GmailMessage.getBcc() .

### LocalizedMessage \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage](https://developers.google.com/apps-script/api/reference/rest/v1/LocalizedMessage)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation If the Accept-Language header in the incoming request is not "English", then errors returned by the Apps Script API include this message.
- Page Summary outlined flag Apps Script API errors include a LocalizedMessage with translated error text if the Accept-Language header is not "English".
- Home Google Workspace Apps Script Reference Send feedback LocalizedMessage Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "locale" : string , "message" : string } Fields locale string The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt .

### Quotas for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Feature Consumer accounts (e.g., gmail.com) Google Workspace accounts Script runtime 6 min / execution 6 min / execution Custom function runtime 30 sec / execution 30 sec / execution Google Workspace add-on runtime 30 sec / execution 30 sec / execution Simultaneous executions per user 30 / user 30 / user Simultaneous executions per script 1,000 1,000 Email attachments 250 / msg 250 / msg Email body size 200 KB / msg 400 KB / msg Email recipients per message 50 / msg 50 / msg Email total attachments size 25 MB / msg 25 MB / msg Properties value size 9 KB / val 9 KB / val Properties total storage 500 KB / property store 500 KB / property store Triggers 20 / user / script 20 / user / script URL Fetch response size 50 MB / call 50 MB / call URL Fetch headers 100 / call 100 / call URL Fetch header size 8 KB / call 8 KB / call URL Fetch POST size 50 MB / call 50 MB / call URL Fetch URL length 2 KB / call 2 KB / call Versions 200 / script 200 / script Gemini Alpha program: Add-ons that extend Workspace Studio have an execution timeout of 2 minutes.
- Feature Consumer accounts (for example, gmail.com) Google Workspace accounts Calendar events created 5,000 / day 10,000 / day Contacts created 1,000 / day 2,000 / day Documents created 250 / day 1,500 / day Files converted 2,000 / day 4,000 / day Email recipients per day (for example, with MailApp) 100 / day 1,500 / day Email recipients per day within domain (for example, with MailApp) 100 / day 2,000 / day Email read/write (excluding send) 20,000 / day 50,000 / day Groups read 2,000 / day 10,000 / day JDBC connection 10,000 / day 50,000 / day JDBC failed connection 100 / day 500 / day Presentations created 250 / day 1,500 / day Properties read/write 50,000 / day 500,000 / day Slides created 250 / day 1,500 / day Spreadsheets created 250 / day 3,200 / day Triggers total runtime 90 min / day 6 hr / day URL Fetch calls 20,000 / day 100,000 / day Static Map render 1,000 / day 10,000 / day Google Map Direction query 1,000 / day 10,000 / day Google Map Geocode calls 1,000 / day 10,000 / day Translate calls 5,000 / day 20,000 / day Google Map elevation samples query 1,000 / day 10,000 / day Apps Script projects 50 / day 50 / day Additional limits apply for trial accounts.
- Google Cloud console : If your Apps Script project uses a standard Google Cloud project , you can monitor service-specific quotas and API usage in the Google Cloud console .
- Exception messages If a script reaches a quota or limitation, it throws an exception with a message similar to the following: Limit exceeded: Email Attachments Per Message.

