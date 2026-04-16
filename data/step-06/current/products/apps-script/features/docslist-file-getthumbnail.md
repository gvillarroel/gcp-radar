---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.655Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsList File.getThumbnail"
feature_slug: "docslist-file-getthumbnail"
latest_feature_date: "2012-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html/communication"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder"
keywords:
  - "docslist"
  - "file"
  - "getthumbnail"
  - "objects"
  - "can"
  - "now"
  - "return"
  - "thumbnail"
---

# DocsList File.getThumbnail

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DocsList File objects can now return a thumbnail image.

## Extended Definition

DocsList File objects can now return a thumbnail image.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html/communication](https://developers.google.com/apps-script/guides/html/communication)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added a getThumbnail() method to the DocsList service's File class .
- PageProtection Spreadsheet.getSheetProtection() Spreadsheet.setSheetProtection(permissions) Sheet.getSheetProtection() Sheet.setSheetProtection(permissions) Replaced the method SpreadsheetApp.open(file) , which takes a File object from the deprecated DocsList service as a parameter, with a version that takes a File object from the Drive service instead.
- Many of these methods duplicate the effect of existing color methods, but let you use Color objects instead of strings as parameters and return types: The Banding class now has 16 new methods that manipulate color in the banding columns and rows using Color objects.
- The File class now has the following methods: file.getTargetId() : Gets a shortcut's file ID. file.getTargetMimeType() : Returns the mime type of the item a shortcut points to. file.moveTo(destination) : Moves a file to a specified destination folder.

### "Class EditorFileScopeActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Return EditorFileScopeActionResponse — A validated EditorFileScopeActionResponse . requestFileScopeForActiveDocument() Requests the drive.file scope for the current active Editor document. // Display a permissions dialog to the user, requesting drive.file scope for // the current document on behalf of this add-on.
- Methods Method Return type Brief description build() Editor File Scope Action Response Builds the current Editor action response. request File Scope For Active Document() Editor File Scope Action Response Builder Requests the drive.file scope for the current active Editor document.
- EditorFileScopeActionResponseBuilder A builder for EditorFileScopeActionResponse objects.
- Return EditorFileScopeActionResponseBuilder — This object, for chaining.

### "HTML Service: Communicate with Server Functions \_|\_ Apps Script \_|\_\

- URL: [https://developers.google.com/apps-script/guides/html/communication](https://developers.google.com/apps-script/guides/html/communication)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getUnreadEmails() { // 'got' instead of 'get' throws an error. return GmailApp.gotInboxUnreadCount(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function onFailure(error) { var div = document.getElementById('output'); div.innerHTML = "ERROR: " + error.message; } google.script.run.withFailureHandler(onFailure) .getUnreadEmails(); </script> </head> <body> <div id="output"></div> </body> </html> User objects To reuse the same success or failure handler for multiple calls to the server, call withUserObject(object) to specify an object that's passed to the handler as a second parameter.
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function processForm(formObject) { var formBlob = formObject.myFile; var driveFile = DriveApp.createFile(formBlob); return driveFile.getUrl(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> // Prevent forms from submitting. function preventFormSubmit() { var forms = document.querySelectorAll('form'); for (var i = 0; i < forms.length; i++) { forms[i].addEventListener('submit', function(event) { event.preventDefault(); }); } } window.addEventListener('load', preventFormSubmit); function handleFormSubmit(formObject) { google.script.run.withSuccessHandler(updateUrl).processForm(formObject); } function updateUrl(url) { var div = document.getElementById('output'); div.innerHTML = '<a href="' + url + '">Got it!</a>'; } </script> </head> <body> <form id="myForm" onsubmit="handleFormSubmit(this)"> <input name="myFile" type="file" /> <input type="submit" value="Submit" /> </form> <div id="output"></div> </body> </html> Script runners Think of google.script.run as a builder for a "script runner." If you add a success handler, failure handler, or user object to a script runner, you aren't changing the existing runner; instead, you get back a new script runner with new behavior.
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getBankBalance() { var email = Session.getActiveUser().getEmail() return deepSecret (email); } function deepSecret (email) { // Do some secret calculations return email + ' has $1,000,000 in the bank.'; } var obj = { objectMethod: function() { // More secret calculations } }; Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function onSuccess(balance) { var div = document.getElementById('output'); div.innerHTML = balance; } google.script.run.withSuccessHandler(onSuccess) .getBankBalance(); </script> </head> <body> <div id="output">No result yet...</div> </body> </html> Resize dialogs in Google Workspace applications Custom dialog boxes in Google Docs, Google Sheets, or Forms can be resized by calling the google.script.host methods setWidth(width) or setHeight(height) in client-side code. (To set the initial size of a dialog, use the HtmlOutput methods setWidth(width) and setHeight(height) .) Note that dialogs don't re-center in the parent window when resized, and it is not possible to resize sidebars .
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getEmail() { return Session.getActiveUser().getEmail(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function updateButton(email, button) { button.value = 'Clicked by ' + email; } </script> </head> <body> <input type="button" value="Not Clicked" onclick="google.script.run .withSuccessHandler(updateButton) .withUserObject(this) .getEmail()" /> <input type="button" value="Not Clicked" onclick="google.script.run .withSuccessHandler(updateButton) .withUserObject(this) .getEmail()" /> </body> </html> Forms If you call a server function with a form element as a parameter, the form becomes a single object with field names as keys and field values as values.

