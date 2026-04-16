---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.577Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Gmail drafts management"
feature_slug: "gmail-drafts-management"
latest_feature_date: "2017-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
  - "https://developers.google.com/apps-script/advanced/gmail"
keywords:
  - "gmail"
  - "drafts"
  - "management"
  - "apps"
  - "script"
  - "adds"
  - "gmaildraft"
  - "creating"
---

# Gmail drafts management

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Gmail service adds GmailDraft support for creating, editing, deleting, and sending draft messages and replies.

## Extended Definition

Apps Script Gmail service adds GmailDraft support for creating, editing, deleting, and sending draft messages and replies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- [https://developers.google.com/apps-script/advanced/gmail](https://developers.google.com/apps-script/advanced/gmail)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- Change The quota for the number of email recipients for scripts running from consumer (gmail.com) or free Google Apps accounts has been reduced from 500 to 100 per day.
- The Apps Script IDE has received significant enhancements, such as improved version management, better debugging tools, and a redesigned interface.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- UpdateDraftActionResponseBuilder Methods Method Return type Brief description build() Update Draft Action Response Builds the current update draft action response and validates it. set Send Status(sendStatus) Update Draft Action Response Builder Sets the enum field that determines whether or not the email sends after the update action. set Update Draft Bcc Recipients Action(updateDraftBccRecipientsAction) Update Draft Action Response Builder Sets an action that updates the email Bcc recipients of a draft. set Update Draft Body Action(updateDraftBodyAction) Update Draft Action Response Builder Set an action that updates the email body of a draft. set Update Draft Cc Recipients Action(updateDraftCcRecipientsAction) Update Draft Action Response Builder Sets an action that updates the Cc recipients of a draft. set Update Draft Subject Action(updateDraftSubjectAction) Update Draft Action Response Builder Sets an action that updates the subject line of a draft. set Update Draft To Recipients Action(updateDraftToRecipientsAction) Update Draft Action Response Builder Sets an action that updates the To recipients of a draft.
- VariableData Methods Method Return type Brief description add Boolean Value(value) Variable Data Adds a boolean value to the variable data. add Email Address(emailAddress) Variable Data Adds an email address to the variable data. add Float Value(value) Variable Data Adds a float value to the variable data. add Google User(googleUser) Variable Data Adds a google user to the variable data. add Integer Value(value) Variable Data Adds an integer value to the variable data. add Resource Data(resourceData) Variable Data Adds a Resource Data value to the variable data. add Resource Reference(resourceReference) Variable Data Adds a resource reference ID to the variable data. add String Value(value) Variable Data Adds a string value to the variable data. add Timestamp Value(value) Variable Data Adds a Time Stamp value to the variable data. add Workflow Text Format(workflowTextFormat) Variable Data Adds a Workflow Text Format value to the variable data.
- ValueMetadata Methods Method Return type Brief description add Castable Type(dataType) Value Metadata Adds a optional allowed types that can be dynamically casted for a variable data to this value metadata. add Enum Value(enumValue) Value Metadata Adds an optional string value to the allowed enum values of a variable, this field can only be set if the Data Type is set to String type. set Default Value(defaultValue) Value Metadata Sets the optional default value of the variable, example, if the variable type is boolean, defaultValue may be set to " true " or " false ".
- ReturnOutputVariablesAction Methods Method Return type Brief description add Variable Data(key, value) Return Output Variables Action Adds a variable data keyed by its variable name, a value is overwritten if the key already exists. set Log(log) Return Output Variables Action Sets the Log of the executed workflow action to the end user at Workflow's activity feed. set Variable Data Map(variables) Return Output Variables Action Sets the map of the variable data keyed by variable name, a value is overwritten if the key already exists.

### Advanced Gmail Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/gmail](https://developers.google.com/apps-script/advanced/gmail)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Advanced Gmail Service Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Advanced Gmail service allows using the Gmail API in Apps Script to find and modify threads, messages, and labels.
- Much like Apps Script's built-in Gmail service , this API lets scripts find and modify threads, messages, and labels in a Gmail mailbox.
- Like all advanced services in Apps Script, the advanced Gmail service uses the same objects, methods, and parameters as the public API.

