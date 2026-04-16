---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.630Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "GmailMessage plain text body access"
feature_slug: "gmailmessage-plain-text-body-access"
latest_feature_date: "2013-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/docs/tabs"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
keywords:
  - "gmailmessage"
  - "plain"
  - "text"
  - "body"
  - "access"
  - "can"
  - "now"
  - "return"
---

# GmailMessage plain text body access

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

GmailMessage can now return message content without HTML formatting.

## Extended Definition

GmailMessage can now return message content without HTML formatting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- August 05, 2013 Feature Added the method GmailMessage.getPlainBody() , which returns the content of the message without HTML formatting.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
- Fixed an issue where a popup dialog with the text "Error encountered: An unexpected error occurred" was displayed when the change handler for a ListBox was called , but no app was returned by the change handler.

### Work with tabs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Includes all child tabs . / function getAllTabs ( doc ) { const allTabs = []; // Iterate over all tabs and recursively add any child tabs to // generate a flat list of Tabs . for ( const tab of doc . getTabs ()) { addCurrentAndChildTabs ( tab , allTabs ); } return allTabs ; } / Adds the provided tab to the list of all tabs , and recurses through and adds all child tabs . / function addCurrentAndChildTabs ( tab , allTabs ) { allTabs . push ( tab ); for ( const childTab of tab . getChildTabs ()) { addCurrentAndChildTabs ( childTab , allTabs ); } } Read tab content from the first tab in the document This is similar to reading all tabs. / Logs all text contents from the first tab in the active document . / function logAllText () { // Generate a list of all the tabs in the document , including any // nested child tabs . const doc = DocumentApp . getActiveDocument (); const allTabs = getAllTabs ( doc ); // Log the content from the first tab in the document . const firstTab = allTabs [ 0 ]; // Get the DocumentTab from the generic Tab object . const documentTab = firstTab . asDocumentTab (); // Get the body from the DocumentTab . const body = documentTab . getBody (); // Get the body text and log it to the console . console . log ( body . getText ()); } Update tab contents in the first tab The following partial code sample shows how to target a specific tab when making updates. / Inserts text into the first tab of the active document . / function insertTextInFirstTab () { // Get the first tab 's body. const doc = DocumentApp . getActiveDocument (); const firstTab = doc . getTabs ()[ 0 ]; const firstDocumentTab = firstTab . asDocumentTab (); const firstTabBody = firstDocumentTab . getBody (); // Append a paragraph and a page break to the first tab 's body // section . firstTabBody . appendParagraph ( "A paragraph." ); firstTabBody . appendPageBreak (); } Update tab contents in the active or selected tab The following partial code sample shows how to target the active tab when making updates. / Inserts text into the active / selected tab of the active document . / function insertTextInActiveTab () { // Get the active / selected tab 's body. const doc = DocumentApp . getActiveDocument (); const activeTab = doc . getActiveTab (); const activeDocumentTab = activeTab . asDocumentTab (); const activeTabBody = activeDocumentTab . getBody (); // Append a paragraph and a page break to the active tab 's body // section . activeTabBody . appendParagraph ( "A paragraph." ); activeTabBody . appendPageBreak (); } Set a cursor position or selection range in the active tab The following partial code sample shows how to update the cursor position or the selection range within the user's active tab.
- DocumentApp . openById ( 'abc123456' ) can also // be used instead of DocumentApp . getActiveDocument () . const doc = DocumentApp . getActiveDocument (); const allTabs = getAllTabs ( doc ); // Log the content from each tab in the document . for ( const tab of allTabs ) { // Get the DocumentTab from the generic Tab object . const documentTab = tab . asDocumentTab (); // Get the body from the given DocumentTab . const body = documentTab . getBody (); // Get the body text and log it to the console . console . log ( body . getText ()); } } / Returns a flat list of all tabs in the document , in the order they would appear in the UI ( i . e . top - down ordering ) .
- The following methods fall into this category: Document.addBookmark Document.addFooter Document.addHeader Document.addNamedRange Document.getBody Document.getBookmark Document.getBookmarks Document.getFooter Document.getFootnotes Document.getHeader Document.getNamedRangeById Document.getNamedRanges Document.getNamedRanges Document.newPosition Document.newRange With the additional structural hierarchy of tabs, these methods no longer semantically represent the text content from all tabs in the document.
- For example: // Print the text from the body of the active tab. const doc = DocumentApp . getActiveDocument (); const documentTab = doc . getActiveTab (). asDocumentTab (); const body = documentTab . getBody (); console . log ( body . getText ()); Changes to user selection The concept of the user's selection is only relevant and can only be used or changed by scripts that are bound to a document.

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Methods Method Return type Brief description new Accessory Widget() Accessory Widget Creates a new Accessory Widget . new Action() Action Creates a new Action . new Action Response Builder() Action Response Builder Creates a Action Response Builder . new Addon Compose Ui Action Response Builder() Addon Compose Ui Action Response Builder Creates a Addon Compose Ui Action Response Builder . new Attachment() Attachment Creates a Attachment . new Calendar Event Action Response Builder() Calendar Event Action Response Builder Creates a Calendar Event Action Response Builder . new Chat Data Action Builder() Chat Data Actions Response Builder Creates a Chat Data Actions Response Builder . new Chat Message() Chat Message Creates a Chat Message . new Compose Action Response Builder() Compose Action Response Builder Creates a Compose Action Response Builder . new Create Message Action() Create Message Action Creates a Create Message Action . new Drive Items Selected Action Response Builder() Drive Items Selected Action Response Builder Creates a Drive Items Selected Action Response Builder . new Editor File Scope Action Response Builder() Editor File Scope Action Response Builder Creates a Editor File Scope Action Response Builder . new Link Preview() Link Preview Creates a Link Preview . new Navigation() Navigation Creates a Navigation . new Notification() Notification Creates a Notification . new Open Link() Open Link Creates a Open Link . new Render Action Builder() Render Action Builder Creates a new Render Action Builder . new Universal Action Response Builder() Universal Action Response Builder Creates a Universal Action Response Builder . new Update Draft Action Response Builder() Update Draft Action Response Builder Creates a Update Draft Action Response Builder . new Update Draft Bcc Recipients Action() Update Draft Bcc Recipients Action Creates a Update Draft Bcc Recipients Action ; new Update Draft Body Action() Update Draft Body Action Creates a Update Draft Body Action . new Update Draft Cc Recipients Action() Update Draft Cc Recipients Action Creates a Update Draft Cc Recipients Action . new Update Draft Subject Action() Update Draft Subject Action Creates a Update Draft Subject Action . new Update Draft To Recipients Action() Update Draft To Recipients Action Creates a Update Draft To Recipients Action . new Update Inline Preview Action() Update Inline Preview Action Creates a Update Inline Preview Action . new Update Message Action() Update Message Action Creates a Update Message Action .
- ChatMessage Methods Method Return type Brief description add Accessory Widget(accessoryWidget) Chat Message Sets the accessoryWidget for this action. add Card With Id(cardWithId) Chat Message Sets the card of the message. set Text(text) Chat Message Sets the text of the message.
- UpdateDraftActionResponseBuilder Methods Method Return type Brief description build() Update Draft Action Response Builds the current update draft action response and validates it. set Send Status(sendStatus) Update Draft Action Response Builder Sets the enum field that determines whether or not the email sends after the update action. set Update Draft Bcc Recipients Action(updateDraftBccRecipientsAction) Update Draft Action Response Builder Sets an action that updates the email Bcc recipients of a draft. set Update Draft Body Action(updateDraftBodyAction) Update Draft Action Response Builder Set an action that updates the email body of a draft. set Update Draft Cc Recipients Action(updateDraftCcRecipientsAction) Update Draft Action Response Builder Sets an action that updates the Cc recipients of a draft. set Update Draft Subject Action(updateDraftSubjectAction) Update Draft Action Response Builder Sets an action that updates the subject line of a draft. set Update Draft To Recipients Action(updateDraftToRecipientsAction) Update Draft Action Response Builder Sets an action that updates the To recipients of a draft.
- VariableData Methods Method Return type Brief description add Boolean Value(value) Variable Data Adds a boolean value to the variable data. add Email Address(emailAddress) Variable Data Adds an email address to the variable data. add Float Value(value) Variable Data Adds a float value to the variable data. add Google User(googleUser) Variable Data Adds a google user to the variable data. add Integer Value(value) Variable Data Adds an integer value to the variable data. add Resource Data(resourceData) Variable Data Adds a Resource Data value to the variable data. add Resource Reference(resourceReference) Variable Data Adds a resource reference ID to the variable data. add String Value(value) Variable Data Adds a string value to the variable data. add Timestamp Value(value) Variable Data Adds a Time Stamp value to the variable data. add Workflow Text Format(workflowTextFormat) Variable Data Adds a Workflow Text Format value to the variable data.

