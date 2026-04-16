---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.604Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script gallery in old Google Sheets"
feature_slug: "script-gallery-in-old-google-sheets"
latest_feature_date: "2014-06-20"
deprecation_date: "2014-06-20"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
keywords:
  - "script"
  - "gallery"
  - "old"
  - "sheets"
  - "version"
  - "distributed"
  - "scripts"
  - "before"
---

# Script gallery in old Google Sheets

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The script gallery in the old version of Google Sheets distributed scripts before add-ons replaced it; deprecated on 2014-06-20.

## Extended Definition

The script gallery in the old version of Google Sheets distributed scripts before add-ons replaced it; deprecated on 2014-06-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- As explained in the blog post , the add-on store in the new version of Sheets gives developers wider distribution, automatic updates, and several other features not available in the script gallery.
- This allows scripts to specify whether a dialog in Google Docs, Forms, or the new version of Sheets should prevent the user from interacting with anything other than the dialog.
- March 27, 2014 Fixed Issue 3691 : In the new version of Google Sheets, scripts can now run for 6 minutes instead of 5 minutes.
- Additionally, for new scripts, before you can deploy them as a web app, you must first save a version of the script.

### Fix errors in your converted code \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- It is partially supported in Apps Scripts that supports only a subset of the values ( does not support xlLegendPositionCorner and xlLegendPositionCustom ). @ param { string } position / function handle legend position error ( position ) { // Please comment the throw statement and return a supported position value // instead. // Values that are supported here are xlLegendPositionTop, // xlLegendPositionLeft, xlLegendPositionBottom, xlLegendPositionRight. throw new Error ( 'Google Sheets does not support legend position: ' + position ); } Fix partially supported API errors Define the handle <API name> error function to replace the unsupported values with an acceptable workaround for your needs.
- It is partially supported in Apps Scripts that supports only a subset of the values ( does not support xlLegendPositionCorner and xlLegendPositionCustom ). @ param { string } position / function handle legend position error ( position ) { // Please comment the throw statement and return a supported position value // instead. // Values that are supported here are xlLegendPositionTop, // xlLegendPositionLeft, xlLegendPositionBottom, xlLegendPositionRight. throw new Error ( 'Google Sheets does not support legend position: ' + position ); } Manual work needed Manual work needed means that the VBA API can be converted into Apps Script, but it needs a workaround.
- Suppose there are two files being opened by workbook.open in the VBA code: File 1: C:\Data\abc.xlsx File 2: C:\Data\xyz.xlsx The following code shows how the Macro Converter replaces Workbook.open with Apps Script everywhere Workbook.open is used to open File 1: var spreadSheetId = handle mso excel get google spreadsheet id ( "C:\Data \a bc.xlsx" ); var spreadSheet = SpreadsheetApp . openById ( spreadSheetId ); The below error is added to the unimplemented constructs.gs file in the Apps Script project: / Method to return the spreadsheet id manually . @ param { string } FileName ID of the spreadsheet to be opened . @ return { string } return the spreadsheet id . / function handle mso excel get google spreadsheet id ( FileName ) { // Upload the Excel files being opened by the API to Google Drive and convert // them to Google Sheets . // Determine the spreadsheet ID of the Google Sheets file created . // Implement this method to return the corresponding spreadsheet ID when given // the original file path as parameter . throw new Error ( 'Please return the spreadsheet ID corresponding to filename: ' + FileName ); return ' ' ; } As instructed by the comments in the previous sample, you need to convert the target files to Sheets files on Drive.
- The corresponding Google Spreadsheet IDs are highlighted in the following list: File #1: C:\Data\abc.xlsx becomes https://docs.google.com/spreadsheets/d/ abc123Abc123Abc123abc File #2: C:\Data\xyz.xlsx becomes https://docs.google.com/spreadsheets/d/ xyz456Xyz456xYz456xyZ Then, modify the code in the Apps Script function to open the files by ID: / Method to return the spreadsheet id manually . @ param { string } FileName ID of the spreadsheet to be opened . @ return { string } return the spreadsheet id . / function handle mso excel get google spreadsheet id ( FileName ) { // Upload the Excel files being opened by the API to Google Drive and convert // them to Google Sheets . // Determine the spreadsheet ID of the Google Sheets file created . // Implement this method to return the corresponding spreadsheet ID when given // the original file path as parameter if ( Filename . indexOf ( "abc.xlsx" ) >= 0 ) { return "abc123Abc123Abc123abc" ; } else if ( Filename . indexOf ( "xyz.xlsx" ) >= 0 ) { return "xyz456Xyz456xYz456xyZ" ; } Intentional error Intentional errors are added to your converted code to mimic the error behavior of your original VBA code.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- While Rhino provided a convenient way for Apps Script to execute developer scripts, it also tied Apps Script to a specific JavaScript version ( ES5 ).
- The new runtime recognizes these function definition formats: function normalFunction () {} async function asyncFunction () {} function generatorFunction () {} var varFunction = function () {} let letFunction = function () {} const constFunction = function () {} var namedVarFunction = function alternateNameVarFunction () {} let namedLetFunction = function alternateNameLetFunction () {} const namedConstFunction = function alternateNameConstFunction () {} var varAsyncFunction = async function () {} let letAsyncFunction = async function () {} const constAsyncFunction = async function () {} var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {} let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {} const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {} var varGeneratorFunction = function () {} let letGeneratorFunction = function () {} const constGeneratorFunction = function () {} var namedVarGeneratorFunction = function alternateNameVarGeneratorFunction () {} let namedLetGeneratorFunction = function alternateNameLetGeneratorFunction () {} const namedConstGeneratorFunction = function alternateNameConstGeneratorFunction () {} var varLambda = () => {} let letLambda = () => {} const constLambda = () => {} var varAsyncLambda = async () => {} let letAsyncLambda = async () => {} const constAsyncLambda = async () => {} Call object methods from triggers and callbacks Scripts using V8 can call object methods and class static methods from places where you could already call library methods.
- V8 syntax examples The following is a short list of popular syntactical features available to scripts using the V8 runtime. let and const The let and const keywords allow you to define block scope local variables and block scope constants, respectively. // V8 runtime let s = "hello" ; if ( s === "hello" ) { s = "world" ; console . log ( s ); // Prints "world" } console . log ( s ); // Prints "hello" const N = 100 ; N = 5 ; // Results in TypeError Arrow functions Arrow functions provide a compact way of defining functions within expressions. // Rhino runtime function square ( x ) { return x x ; } console . log ( square ( 5 )); // Outputs 25 // V8 runtime const square = x => x x ; console . log ( square ( 5 )); // Outputs 25 // Outputs [ 1 , 4 , 9 ] console . log ([ 1 , 2 , 3 ] . map ( x => x x )); Classes Classes provide a means to conceptually organize code with inheritance.
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.

