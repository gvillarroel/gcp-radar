---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.639Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Forms Service"
feature_slug: "forms-service"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html"
  - "https://developers.google.com/apps-script/guides/sheets"
keywords:
  - "forms"
  - "was"
  - "added"
  - "create"
  - "modify"
  - "programmatically"
---

# Forms Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Forms Service was added to create and modify Google Forms programmatically.

## Extended Definition

Forms Service was added to create and modify Google Forms programmatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- [https://developers.google.com/apps-script/guides/sheets](https://developers.google.com/apps-script/guides/sheets)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Added Forms Service , which allows scripts to create and modify Google Forms.
- June 14, 2012 Feature Added the ability to create, modify, and remove Embedded Charts in Google Sheets.
- Added Drive Service , which allows scripts to create and modify files and folders in Google Drive.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.

### HTML Service: Create and Serve HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Code.gs // Use this code for Google Docs, Slides, Forms, or Sheets. function onOpen() { SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp. .createMenu('Dialog') .addItem('Open', 'openDialog') .addToUi(); } function openDialog() { var html = HtmlService.createHtmlOutputFromFile('Index'); SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp. .showModalDialog(html, 'Dialog title'); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> Hello, World! <input type="button" value="Close" onclick="google.script.host.close()" /> </body> </html> The first time you want to display this user interface, you must either run the onOpen function manually in the script editor or reload the window for the Docs, Sheets, or Forms editor (which closes the script editor).
- In Google Forms, custom user interfaces are only visible to an editor who opens the form to modify it, not to a user who opens the form to respond.
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> Hello, World! </body> </html> Once that basic framework is in place, all you have to do is save a version of your script , then deploy your script as a web app .
- The HTML service can also display dialogs or sidebars as user interfaces in Google Docs, Sheets, Slides, or Forms if the script is container-bound, requiring a function that passes the HTML file as an HtmlOutput object to the showModalDialog() or showSidebar() methods of the Ui object.

### Extend Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets](https://developers.google.com/apps-script/guides/sheets)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Apps Script interacts with Sheets in two ways: any script can create or modify a spreadsheet if the script's user has appropriate permissions for it, and a script can also be bound to a spreadsheet.
- Get started Apps Script includes special APIs to programmatically create, read, and edit Sheets.
- You can programmatically create, read, and edit Google Sheets using Apps Script APIs.
- The following example sets the font style of a range: function formatMySpreadsheet () { // Set the font style of the cells in the range of B2:C2 to be italic. const ss = SpreadsheetApp . getActiveSpreadsheet (); const sheet = ss . getSheets ()[ 0 ]; const cell = sheet . getRange ( 'B2:C2' ); cell . setFontStyle ( 'italic' ); } Data validation Access existing data-validation rules in Sheets or create new rules.

