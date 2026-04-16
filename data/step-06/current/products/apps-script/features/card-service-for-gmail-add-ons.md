---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.573Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Card Service for Gmail add-ons"
feature_slug: "card-service-for-gmail-add-ons"
latest_feature_date: "2017-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
  - "https://developers.google.com/apps-script/guides/html/restrictions"
keywords:
  - "card"
  - "gmail"
  - "add"
  - "ons"
  - "apps"
  - "script"
  - "adds"
  - "building"
---

# Card Service for Gmail add-ons

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script adds a Card Service for building Gmail add-on interfaces with widget-based UI instead of HTML or CSS.

## Extended Definition

Apps Script adds a Card Service for building Gmail add-on interfaces with widget-based UI instead of HTML or CSS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- [https://developers.google.com/apps-script/guides/html/restrictions](https://developers.google.com/apps-script/guides/html/restrictions)

## Supporting Pages

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- UpdateInlinePreviewAction Methods Method Return type Brief description add Card With Id(cardWithId) Update Inline Preview Action Adds the card for this action. add Expiration(ttl) Update Inline Preview Action Adds the expiration for this action.
- Action Methods Method Return type Brief description add Modify Card(modifyCard) Action Adds a ModifyCard operation to the action. add Navigation(navigation) Action Adds a card navigation to the action.
- VariableData Methods Method Return type Brief description add Boolean Value(value) Variable Data Adds a boolean value to the variable data. add Email Address(emailAddress) Variable Data Adds an email address to the variable data. add Float Value(value) Variable Data Adds a float value to the variable data. add Google User(googleUser) Variable Data Adds a google user to the variable data. add Integer Value(value) Variable Data Adds an integer value to the variable data. add Resource Data(resourceData) Variable Data Adds a Resource Data value to the variable data. add Resource Reference(resourceReference) Variable Data Adds a resource reference ID to the variable data. add String Value(value) Variable Data Adds a string value to the variable data. add Timestamp Value(value) Variable Data Adds a Time Stamp value to the variable data. add Workflow Text Format(workflowTextFormat) Variable Data Adds a Workflow Text Format value to the variable data.
- ModifyCard Methods Method Return type Brief description set Insert Section(insertSection) Modify Card Sets the Insert Section for this modify card object. set Insert Widget(insertWidget) Modify Card Sets the Insert Widget for this modify card object. set Remove Section(removeSection) Modify Card Sets the Remove Section for this modify card object. set Remove Widget(removeWidget) Modify Card Sets the Remove Widget for this modify card object. set Replace Section(replacementSection) Modify Card Sets the replacement Card Section for this modify card object, the replacement section should have the same id as an existing card section. set Replace Widget(replacementWidget) Modify Card Sets the replacement widget for this modify card object, the replacement widget should have the same id as an existing widget. set Update Widget(updateWidget) Modify Card Sets the Update Widget for this modify card object.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- For more information refer to the following: Columns for Apps Script Columns for other runtimes February 20, 2024 Feature (Developer Preview) : Google Chat apps now support Google Apps Script's Card Service.

### HTML Service: Restrictions \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/restrictions](https://developers.google.com/apps-script/guides/html/restrictions)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To protect users from malicious HTML or JavaScript, the HTML service uses iframes to sandbox web apps or custom user interfaces for Google Docs, Google Sheets, and Forms.
- Home Google Workspace Apps Script Guides Send feedback HTML Service: Restrictions Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag Apps Script uses iframes to sandbox HTML-service web apps and custom user interfaces for security.
- IFRAME ); } top.html <!DOCTYPE html> <html> <body> <div> <a href="http://google.com" target=" top">Click Me!</a> </div> </body> </html> You can also override this attribute using the <base> tag within the head section of the enclosing web page: <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> <div> <a href="http://google.com">Click Me!</a> </div> </body> </html> HTTPS required for active content "Active" content like scripts, external stylesheets, and XmlHttpRequests must be loaded over HTTPS, not HTTP.

