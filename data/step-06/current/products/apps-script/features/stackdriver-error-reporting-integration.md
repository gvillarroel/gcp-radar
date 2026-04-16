---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.580Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Stackdriver Error Reporting integration"
feature_slug: "stackdriver-error-reporting-integration"
latest_feature_date: "2017-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors"
  - "https://developers.google.com/apps-script/reference/spreadsheet/data-execution-error-code"
keywords:
  - "stackdriver"
  - "error"
  - "reporting"
  - "integration"
  - "apps"
  - "script"
  - "enables"
  - "collection"
---

# Stackdriver Error Reporting integration

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script enables collection of exception and error reports through Stackdriver Error Reporting.

## Extended Definition

Apps Script enables collection of exception and error reports through Stackdriver Error Reporting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- [https://developers.google.com/apps-script/reference/spreadsheet/data-execution-error-code](https://developers.google.com/apps-script/reference/spreadsheet/data-execution-error-code)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Enabled the collection of exception and error reports using Stackdriver Error Reporting .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.

### Fix errors in your converted code \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Apps Script Guides Send feedback Fix errors in your converted code Stay organized with collections Save and categorize content based on your preferences.
- Suppose there are two files being opened by workbook.open in the VBA code: File 1: C:\Data\abc.xlsx File 2: C:\Data\xyz.xlsx The following code shows how the Macro Converter replaces Workbook.open with Apps Script everywhere Workbook.open is used to open File 1: var spreadSheetId = handle mso excel get google spreadsheet id ( "C:\Data \a bc.xlsx" ); var spreadSheet = SpreadsheetApp . openById ( spreadSheetId ); The below error is added to the unimplemented constructs.gs file in the Apps Script project: / Method to return the spreadsheet id manually . @ param { string } FileName ID of the spreadsheet to be opened . @ return { string } return the spreadsheet id . / function handle mso excel get google spreadsheet id ( FileName ) { // Upload the Excel files being opened by the API to Google Drive and convert // them to Google Sheets . // Determine the spreadsheet ID of the Google Sheets file created . // Implement this method to return the corresponding spreadsheet ID when given // the original file path as parameter . throw new Error ( 'Please return the spreadsheet ID corresponding to filename: ' + FileName ); return ' ' ; } As instructed by the comments in the previous sample, you need to convert the target files to Sheets files on Drive.
- The corresponding Google Spreadsheet IDs are highlighted in the following list: File #1: C:\Data\abc.xlsx becomes https://docs.google.com/spreadsheets/d/ abc123Abc123Abc123abc File #2: C:\Data\xyz.xlsx becomes https://docs.google.com/spreadsheets/d/ xyz456Xyz456xYz456xyZ Then, modify the code in the Apps Script function to open the files by ID: / Method to return the spreadsheet id manually . @ param { string } FileName ID of the spreadsheet to be opened . @ return { string } return the spreadsheet id . / function handle mso excel get google spreadsheet id ( FileName ) { // Upload the Excel files being opened by the API to Google Drive and convert // them to Google Sheets . // Determine the spreadsheet ID of the Google Sheets file created . // Implement this method to return the corresponding spreadsheet ID when given // the original file path as parameter if ( Filename . indexOf ( "abc.xlsx" ) >= 0 ) { return "abc123Abc123Abc123abc" ; } else if ( Filename . indexOf ( "xyz.xlsx" ) >= 0 ) { return "xyz456Xyz456xYz456xyZ" ; } Intentional error Intentional errors are added to your converted code to mimic the error behavior of your original VBA code.
- Because this object type isn’t supported in Apps Script, the converted code creates the following functions in the unimplemented constructs.gs file that you need to define. api application commandbars() api commandbars item() The functions are called in the converted code as shown below: PrintName ( api commandbars item ( api application commandbars (), "Standard" ))) Here ’ s how the new functions are added to the unimplemented construct . gs file : function api application commandbars ( CallingObject ) { ThrowException ( 'API application.commandbars not supported yet.' ); } function api commandbars item ( CallingObject , index ) { ThrowException ( 'API commandbars.item not supported yet.' ); } To get the new functions to work, take the following steps: 3.1 Define a new object type that creates the functionalities of CommandBars and a new collection of CommandBars similar to what exists in VBA.

### Enum DataExecutionErrorCode \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/data-execution-error-code](https://developers.google.com/apps-script/reference/spreadsheet/data-execution-error-code)
- Source ID: `site-docs-reference-required-4`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Enum DataExecutionErrorCode Stay organized with collections Save and categorize content based on your preferences.
- Properties Property Type Description DATA EXECUTION ERROR CODE UNSUPPORTED Enum A data execution error code that is not supported in Apps Script.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["DataExecutionErrorCode enumerates errors during data execution.
- Errors include TIME OUT, TOO MANY ROWS/COLUMNS/CELLS, ENGINE failure, PARAMETER INVALID, UNSUPPORTED DATA TYPE, DUPLICATE COLUMN NAMES, INTERRUPTED, OTHER, TOO MANY CHARS PER CELL, DATA NOT FOUND, PERMISSION DENIED, NONE, and DATA EXECUTION ERROR CODE UNSUPPORTED.

