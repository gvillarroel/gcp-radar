---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.775Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Ui.showModalDialog"
feature_slug: "ui-showmodaldialog"
latest_feature_date: "2014-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/guides/menus"
keywords:
  - "showmodaldialog"
  - "modal"
  - "userinterface"
  - "title"
  - "dialog"
  - "added"
  - "ui"
  - "for"
---

# Ui.showModalDialog

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added Ui.showModalDialog(userInterface, title) for modal dialog display in Docs, Forms, and the new Sheets UI.

## Extended Definition

Added Ui.showModalDialog(userInterface, title) for modal dialog display in Docs, Forms, and the new Sheets UI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- StateTokenBuilder ScriptApp.getOAuthToken() `ScriptApp.newStateToken() Added the method showModalDialog(userInterface, title) to the Ui class, and replaced the method showDialog(userInterface) with showModelessDialog(userInterface, title) .
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Feature Added the UiService method DocsListDialog.setOAuthToken(oAuthToken) , which sets an OAuth 2.0 token to use when fetching data for the dialog, on behalf of the user whose content should be shown.
- Added a getUi method to DocumentApp and FormApp , which returns a Ui object that allows the script to add features like menus, dialogs, and sidebars to the Docs or Forms editor.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.
- Note: While Apps Script supports standard JSDoc for autocomplete in the editor, the Google Sheets UI has specific limitations regarding which tags and syntax are displayed in the spreadsheet's formula helper. / Multiplies the input value by 2. @param {number} input The value to multiply. @return {number} The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } Advanced This section covers advanced custom function topics.
- For examples of custom functions, see the following tutorials: Calculate sale price of discounted items (quickstart) Calculate a tiered pricing discount Calculate driving distance & convert meters to miles Summarize data from multiple sheets Fact-check statements with an ADK AI agent and Gemini model Getting started Custom functions are created using standard JavaScript.
- Function naming In addition to the standard conventions for naming JavaScript functions, be aware of the following: The name of a custom function must be distinct from the names of built-in functions like SUM() .

### Custom Menus in Google Workspace \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- For more information on the types of dialogs you can open, see the guide to dialogs and sidebars . function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp, SlidesApp or FormApp. ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menuItem1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menuItem2' )) . addToUi (); } function menuItem1 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the first menu item!' ); } function menuItem2 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the second menu item!' ); } A document, spreadsheet, presentation, or form can only contain one menu with a given name.
- Custom menus can be added to Google Docs, Sheets, Slides, or Forms and are tied to specific script functions.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Custom menus in Docs, Sheets, Slides, or Forms Apps Script can add new menus in Docs, Sheets, Slides, or Forms, with each menu item tied to a function in a script. (In Forms, custom menus are visible only to an editor who opens the form to modify it, not to a user who opens the form to respond.) Only bound scripts can create menus.

