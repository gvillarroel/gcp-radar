---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.540Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Gmail message header access"
feature_slug: "gmail-message-header-access"
latest_feature_date: "2019-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message"
  - "https://developers.google.com/apps-script/advanced/gmail"
keywords:
  - "gmail"
  - "message"
  - "header"
  - "access"
  - "apps"
  - "script"
  - "adds"
  - "gmailmessage"
---

# Gmail message header access

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Gmail service adds GmailMessage.getHeader() to retrieve RFC 2822 message headers.

## Extended Definition

Apps Script Gmail service adds GmailMessage.getHeader() to retrieve RFC 2822 message headers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message)
- [https://developers.google.com/apps-script/advanced/gmail](https://developers.google.com/apps-script/advanced/gmail)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- The Slides service has been extended with the following new methods to support concrete color schemes: ColorScheme.setConcreteColor(type, color) ColorScheme.setConcreteColor(type, red, green, blue) ColorScheme.setConcreteColor(type, hexColor) The Spreadsheet service has been extended with the following new methods to support trimming whitespace and removing duplicate values: RangeList.trimWhitespace() Range.removeDuplicates() Range.removeDuplicates(columnsToCompare) Range.trimWhitespace() May 20, 2019 Feature The Gmail service has been updated with the GmailMessage.getHeader(name) method that can retrieve a RFC 2822 header from a message.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.

### Class ChatMessage \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message)
- Source ID: `site-docs-reference-3`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available for Google Workspace add-ons that extend Google Chat. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); Methods Method Return type Brief description add Accessory Widget(accessoryWidget) Chat Message Sets the accessoryWidget for this action. add Card With Id(cardWithId) Chat Message Sets the card of the message. set Text(text) Chat Message Sets the text of the message.
- Return ChatMessage — This object, for chaining. addCardWithId(cardWithId) Sets the card of the message. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ); const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ); Parameters Name Type Description card With Id Card With Id The cardWithId to set.
- Home Google Workspace Apps Script Reference Send feedback Class ChatMessage Stay organized with collections Save and categorize content based on your preferences.
- Return ChatMessage — This object, for chaining. setText(text) Sets the text of the message. const message = AddOnsResponseService . newChatMessage () . setText ( "Example text" ); Parameters Name Type Description text String The text part of a message.

### Advanced Gmail Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/gmail](https://developers.google.com/apps-script/advanced/gmail)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Advanced Gmail service allows using the Gmail API in Apps Script to find and modify threads, messages, and labels.
- Much like Apps Script's built-in Gmail service , this API lets scripts find and modify threads, messages, and labels in a Gmail mailbox.
- Messages . list ( userId , options ); const messages = response . messages ; console . log ( "Unread Messages:" ); for ( const message of messages ) { console . log ( - Message ID: ${ message . id } ); } } catch ( err ) { // Log any errors to the Apps Script execution log. console . log ( Failed with error: ${ err . message } ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Notice the use of page tokens to access the full list of results. advanced/gmail.gs View on GitHub / Gets a history record ID associated with the most recently sent message, then logs all the message IDs that have changed since that message was sent. / function logRecentHistory () { try { // Get the history ID associated with the most recent // sent message. const sent = Gmail .

