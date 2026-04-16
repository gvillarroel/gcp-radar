---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.642Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "doPost request body access"
feature_slug: "dopost-request-body-access"
latest_feature_date: "2013-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses"
  - "https://developers.google.com/apps-script/guides/html/communication"
keywords:
  - "dopost"
  - "request"
  - "body"
  - "access"
  - "object"
  - "passed"
  - "now"
  - "includes"
---

# doPost request body access

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The request object passed to doPost now includes the POST body through e.postData.getDataAsString().

## Extended Definition

The request object passed to doPost now includes the POST body through e.postData.getDataAsString().

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- [https://developers.google.com/apps-script/guides/html/communication](https://developers.google.com/apps-script/guides/html/communication)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- May 09, 2013 Feature Issue 2158 : The request object passed in to doPost() methods now contains the POST body.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Change When an add-on is installed from the store, the onInstall() simple trigger is now passed an event parameter , e , which includes an authMode property.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### "HTML Service: Communicate with Server Functions \_|\_ Apps Script \_|\_\

- URL: [https://developers.google.com/apps-script/guides/html/communication](https://developers.google.com/apps-script/guides/html/communication)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getUnreadEmails() { // 'got' instead of 'get' throws an error. return GmailApp.gotInboxUnreadCount(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function onFailure(error) { var div = document.getElementById('output'); div.innerHTML = "ERROR: " + error.message; } google.script.run.withFailureHandler(onFailure) .getUnreadEmails(); </script> </head> <body> <div id="output"></div> </body> </html> User objects To reuse the same success or failure handler for multiple calls to the server, call withUserObject(object) to specify an object that's passed to the handler as a second parameter.
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function processForm(formObject) { var formBlob = formObject.myFile; var driveFile = DriveApp.createFile(formBlob); return driveFile.getUrl(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> // Prevent forms from submitting. function preventFormSubmit() { var forms = document.querySelectorAll('form'); for (var i = 0; i < forms.length; i++) { forms[i].addEventListener('submit', function(event) { event.preventDefault(); }); } } window.addEventListener('load', preventFormSubmit); function handleFormSubmit(formObject) { google.script.run.withSuccessHandler(updateUrl).processForm(formObject); } function updateUrl(url) { var div = document.getElementById('output'); div.innerHTML = '<a href="' + url + '">Got it!</a>'; } </script> </head> <body> <form id="myForm" onsubmit="handleFormSubmit(this)"> <input name="myFile" type="file" /> <input type="submit" value="Submit" /> </form> <div id="output"></div> </body> </html> Script runners Think of google.script.run as a builder for a "script runner." If you add a success handler, failure handler, or user object to a script runner, you aren't changing the existing runner; instead, you get back a new script runner with new behavior.
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getBankBalance() { var email = Session.getActiveUser().getEmail() return deepSecret (email); } function deepSecret (email) { // Do some secret calculations return email + ' has $1,000,000 in the bank.'; } var obj = { objectMethod: function() { // More secret calculations } }; Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function onSuccess(balance) { var div = document.getElementById('output'); div.innerHTML = balance; } google.script.run.withSuccessHandler(onSuccess) .getBankBalance(); </script> </head> <body> <div id="output">No result yet...</div> </body> </html> Resize dialogs in Google Workspace applications Custom dialog boxes in Google Docs, Google Sheets, or Forms can be resized by calling the google.script.host methods setWidth(width) or setHeight(height) in client-side code. (To set the initial size of a dialog, use the HtmlOutput methods setWidth(width) and setHeight(height) .) Note that dialogs don't re-center in the parent window when resized, and it is not possible to resize sidebars .
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getEmail() { return Session.getActiveUser().getEmail(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function updateButton(email, button) { button.value = 'Clicked by ' + email; } </script> </head> <body> <input type="button" value="Not Clicked" onclick="google.script.run .withSuccessHandler(updateButton) .withUserObject(this) .getEmail()" /> <input type="button" value="Not Clicked" onclick="google.script.run .withSuccessHandler(updateButton) .withUserObject(this) .getEmail()" /> </body> </html> Forms If you call a server function with a form element as a parameter, the form becomes a single object with field names as keys and field values as values.

### "Method: processes.listScriptProcesses \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "processes" : [ { object ( Process ) } ] , "nextPageToken" : string } Fields processes[] object ( Process ) List of processes matching request parameters. nextPageToken string Token for the next page of results.
- The ListScriptProcessesFilter object allows for filtering processes by deployment ID, function name, start and end time, process types, statuses, and user access levels.
- HTTP request Query parameters Request body Response body JSON representation Authorization Scopes ListScriptProcessesFilter JSON representation Try it!
- Request body The request body must be empty.

