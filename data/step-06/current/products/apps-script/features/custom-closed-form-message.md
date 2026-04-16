---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.619Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Custom closed-form message"
feature_slug: "custom-closed-form-message"
latest_feature_date: "2013-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/dialogs"
  - "https://developers.google.com/apps-script/guides/menus"
keywords:
  - "custom"
  - "closed"
  - "form"
  - "message"
  - "formapp"
  - "can"
  - "get"
  - "set"
---

# Custom closed-form message

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

FormApp can get and set a custom message shown when a form is closed.

## Extended Definition

FormApp can get and set a custom message shown when a form is closed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- Added support for the custom JsDoc annotation @OnlyCurrentDoc , which forces the authorization dialog to ask only for access to files in which an add-on or script is used, rather than all of a user's spreadsheets, documents, or forms.
- Change To simplify the end user experience, function names are no longer shown in the notification message for scripts that run successfully from a spreadsheet, document, or form.
- Added a getUi method to DocumentApp and FormApp , which returns a Ui object that allows the script to add features like menus, dialogs, and sidebars to the Docs or Forms editor.

### "Dialogs and Sidebars in Google Workspace Documents \_|\_ Apps Script \_\

- URL: [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show dialog' , 'showDialog' ) . addToUi (); } function showDialog () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setWidth ( 400 ) . setHeight ( 300 ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showModalDialog ( html , 'My custom dialog' ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> Custom sidebars A sidebar can display an HTML service user interface inside a Docs, Forms, Slides, and Sheets editor.
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show sidebar' , 'showSidebar' ) . addToUi (); } function showSidebar () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setTitle ( 'My custom sidebar' ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showSidebar ( html ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> File-open dialogs Google Picker is a JavaScript API that lets users select or upload Google Drive files.
- To evaluate the user's response, capture the return value for prompt , then call PromptResponse.getResponseText to retrieve the user's input, and compare the return value for PromptResponse.getSelectedButton to the Ui.Button enum. function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp. . createMenu ( "Custom Menu" ) . addItem ( "Show prompt" , "showPrompt" ) . addToUi (); } function showPrompt () { const ui = SpreadsheetApp . getUi (); // Same variations. const result = ui . prompt ( "Let's get to know each other!" , "Please enter your name:" , ui .
- To evaluate which button the user clicked, compare the return value for alert to the Ui.Button enum. function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp. . createMenu ( "Custom Menu" ) . addItem ( "Show alert" , "showAlert" ) . addToUi (); } function showAlert () { const ui = SpreadsheetApp . getUi (); // Same variations. const result = ui . alert ( "Please confirm" , "Are you sure you want to continue?" , ui .

### Custom Menus in Google Workspace \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on the types of dialogs you can open, see the guide to dialogs and sidebars . function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp, SlidesApp or FormApp. ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menuItem1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menuItem2' )) . addToUi (); } function menuItem1 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the first menu item!' ); } function menuItem2 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the second menu item!' ); } A document, spreadsheet, presentation, or form can only contain one menu with a given name.
- Custom menus in Docs, Sheets, Slides, or Forms Apps Script can add new menus in Docs, Sheets, Slides, or Forms, with each menu item tied to a function in a script. (In Forms, custom menus are visible only to an editor who opens the form to modify it, not to a user who opens the form to respond.) Only bound scripts can create menus.
- The most common example is running a script from a custom menu item in Google Docs, Google Sheets, Google Slides, or Google Forms, but script functions can also be triggered by clicking on images and drawings in Sheets.
- Custom menus can be added to Google Docs, Sheets, Slides, or Forms and are tied to specific script functions.

