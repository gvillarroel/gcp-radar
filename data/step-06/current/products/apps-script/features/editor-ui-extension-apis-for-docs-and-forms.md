---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.638Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Editor UI extension APIs for Docs and Forms"
feature_slug: "editor-ui-extension-apis-for-docs-and-forms"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/dialogs"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/menus"
keywords:
  - "editor"
  - "ui"
  - "extension"
  - "apis"
  - "docs"
  - "forms"
  - "documentapp"
  - "formapp"
---

# Editor UI extension APIs for Docs and Forms

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DocumentApp and FormApp can now return a Ui object for adding menus, dialogs, and sidebars to editors.

## Extended Definition

DocumentApp and FormApp can now return a Ui object for adding menus, dialogs, and sidebars to editors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)

## Supporting Pages

### "Dialogs and Sidebars in Google Workspace Documents \_|\_ Apps Script \_\

- URL: [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show dialog' , 'showDialog' ) . addToUi (); } function showDialog () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setWidth ( 400 ) . setHeight ( 300 ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showModalDialog ( html , 'My custom dialog' ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> Custom sidebars A sidebar can display an HTML service user interface inside a Docs, Forms, Slides, and Sheets editor.
- YES ) { // User clicked "Yes". ui . alert ( "Confirmation received." ); } else { // User clicked "No" or X in the title bar. ui . alert ( "Permission denied." ); } } Prompt dialogs A prompt is a prebuilt dialog that opens inside a Docs, Sheets, Slides, or Forms editor.
- Toasts are only available in Sheets. function showToast () { SpreadsheetApp . getActiveSpreadsheet (). toast ( "Task completed successfully." ); } Custom dialogs A custom dialog can display an HTML service user interface inside a Docs, Sheets, Slides, or Forms editor.
- Alert dialogs An alert is a prebuilt dialog that opens inside a Docs, Sheets, Slides, or Forms editor.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Added a getUi method to DocumentApp and FormApp , which returns a Ui object that allows the script to add features like menus, dialogs, and sidebars to the Docs or Forms editor.
- Added the client-side HTML-service method google.script.host.editor.focus() , which allows scripts to switch browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
- May 13, 2013 Feature The script editor is now available within Google Docs and the Google Forms editor, and both Docs and Forms can now be containers for scripts.
- Issue 3332 : The DocumentApp method setHeading() now applies heading styles in the same way that the Google Docs editor does.

### Custom Menus in Google Workspace \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom menus in Docs, Sheets, Slides, or Forms Apps Script can add new menus in Docs, Sheets, Slides, or Forms, with each menu item tied to a function in a script. (In Forms, custom menus are visible only to an editor who opens the form to modify it, not to a user who opens the form to respond.) Only bound scripts can create menus.
- For more information on the types of dialogs you can open, see the guide to dialogs and sidebars . function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp, SlidesApp or FormApp. ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menuItem1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menuItem2' )) . addToUi (); } function menuItem1 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the first menu item!' ); } function menuItem2 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the second menu item!' ); } A document, spreadsheet, presentation, or form can only contain one menu with a given name.
- The most common example is running a script from a custom menu item in Google Docs, Google Sheets, Google Slides, or Google Forms, but script functions can also be triggered by clicking on images and drawings in Sheets.
- Custom menus can be added to Google Docs, Sheets, Slides, or Forms and are tied to specific script functions.

