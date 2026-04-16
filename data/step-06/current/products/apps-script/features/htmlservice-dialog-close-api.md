---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.652Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "HtmlService dialog close API"
feature_slug: "htmlservice-dialog-close-api"
latest_feature_date: "2012-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/dialogs"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html/communication"
keywords:
  - "htmlservice"
  - "dialog"
  - "close"
  - "pages"
  - "can"
  - "now"
  - "containing"
  - "dialogs"
---

# HtmlService dialog close API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

HtmlService pages can now close their containing dialogs programmatically.

## Extended Definition

HtmlService pages can now close their containing dialogs programmatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html/communication](https://developers.google.com/apps-script/guides/html/communication)

## Supporting Pages

### "Dialogs and Sidebars in Google Workspace Documents \_|\_ Apps Script \_\

- URL: [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show sidebar' , 'showSidebar' ) . addToUi (); } function showSidebar () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setTitle ( 'My custom sidebar' ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showSidebar ( html ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> File-open dialogs Google Picker is a JavaScript API that lets users select or upload Google Drive files.
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show dialog' , 'showDialog' ) . addToUi (); } function showDialog () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setWidth ( 400 ) . setHeight ( 300 ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showModalDialog ( html , 'My custom dialog' ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> Custom sidebars A sidebar can display an HTML service user interface inside a Docs, Forms, Slides, and Sheets editor.
- Page Summary outlined flag Bound scripts in Google Docs, Sheets, or Forms can display prebuilt alerts and prompts, along with custom dialogs and sidebars using HTML service pages.
- Prompt dialogs are prebuilt and include a message, text-input field, and an "OK" button, also suspending the script until closed.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Added the ability to close containing dialogs from HtmlService pages.
- Change In Google Docs, Forms, and the new version of Sheets , showing a dialog now automatically closes any other dialogs opened by a script.
- Feature Added the following Session methods, which allow scripts to determine the user's locale and time zone: getActiveUserLocale() getActiveUserTimeZone() January 21, 2014 Feature The new SpreadsheetApp method Spreadsheet.getUi() allows scripts to access the spreadsheet's user-interface environment in order to add features like menus, dialogs, and sidebars.
- Added a getUi method to DocumentApp and FormApp , which returns a Ui object that allows the script to add features like menus, dialogs, and sidebars to the Docs or Forms editor.

### "HTML Service: Communicate with Server Functions \_|\_ Apps Script \_|\_\

- URL: [https://developers.google.com/apps-script/guides/html/communication](https://developers.google.com/apps-script/guides/html/communication)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getBankBalance() { var email = Session.getActiveUser().getEmail() return deepSecret (email); } function deepSecret (email) { // Do some secret calculations return email + ' has $1,000,000 in the bank.'; } var obj = { objectMethod: function() { // More secret calculations } }; Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function onSuccess(balance) { var div = document.getElementById('output'); div.innerHTML = balance; } google.script.run.withSuccessHandler(onSuccess) .getBankBalance(); </script> </head> <body> <div id="output">No result yet...</div> </body> </html> Resize dialogs in Google Workspace applications Custom dialog boxes in Google Docs, Google Sheets, or Forms can be resized by calling the google.script.host methods setWidth(width) or setHeight(height) in client-side code. (To set the initial size of a dialog, use the HtmlOutput methods setWidth(width) and setHeight(height) .) Note that dialogs don't re-center in the parent window when resized, and it is not possible to resize sidebars .
- Close dialogs and sidebars in Google Workspace If you use the HTML service to display a dialog or sidebar in Google Docs, Sheets, or Forms, you cannot close the interface by calling window.close .
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function processForm(formObject) { var formBlob = formObject.myFile; var driveFile = DriveApp.createFile(formBlob); return driveFile.getUrl(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> // Prevent forms from submitting. function preventFormSubmit() { var forms = document.querySelectorAll('form'); for (var i = 0; i < forms.length; i++) { forms[i].addEventListener('submit', function(event) { event.preventDefault(); }); } } window.addEventListener('load', preventFormSubmit); function handleFormSubmit(formObject) { google.script.run.withSuccessHandler(updateUrl).processForm(formObject); } function updateUrl(url) { var div = document.getElementById('output'); div.innerHTML = '<a href="' + url + '">Got it!</a>'; } </script> </head> <body> <form id="myForm" onsubmit="handleFormSubmit(this)"> <input name="myFile" type="file" /> <input type="submit" value="Submit" /> </form> <div id="output"></div> </body> </html> Script runners Think of google.script.run as a builder for a "script runner." If you add a success handler, failure handler, or user object to a script runner, you aren't changing the existing runner; instead, you get back a new script runner with new behavior.
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getEmail() { return Session.getActiveUser().getEmail(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function updateButton(email, button) { button.value = 'Clicked by ' + email; } </script> </head> <body> <input type="button" value="Not Clicked" onclick="google.script.run .withSuccessHandler(updateButton) .withUserObject(this) .getEmail()" /> <input type="button" value="Not Clicked" onclick="google.script.run .withSuccessHandler(updateButton) .withUserObject(this) .getEmail()" /> </body> </html> Forms If you call a server function with a form element as a parameter, the form becomes a single object with field names as keys and field values as values.

