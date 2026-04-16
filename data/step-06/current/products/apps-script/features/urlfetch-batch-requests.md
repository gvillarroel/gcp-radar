---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.570Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UrlFetch batch requests"
feature_slug: "urlfetch-batch-requests"
latest_feature_date: "2018-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/advanced/sheets"
keywords:
  - "urlfetch"
  - "batch"
  - "requests"
  - "apps"
  - "script"
  - "adds"
  - "fetchall"
  - "making"
---

# UrlFetch batch requests

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script UrlFetch service adds fetchAll() for making multiple fetch requests in one call.

## Extended Definition

Apps Script UrlFetch service adds fetchAll() for making multiple fetch requests in one call.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/advanced/sheets](https://developers.google.com/apps-script/advanced/sheets)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- UrlFetch requests made by scripts that run on a time-based trigger now include an If-Modified-Since HTTP header so that Apps Script can use a cached copy of the page if one is available and the page has not changed.
- Range.copyTo(destination, copyPasteType, transposed) January 19, 2018 Feature The UrlFetch service now has a fetchAll method that makes multiple fetch requests.
- Added support for registering Apps Script web apps in the Chrome Web Store , making it quick and simple to publish and distribute your web apps.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.
- To achieve parallel network requests, use UrlFetchApp.fetchAll .
- Unavailable APIs The following standard JavaScript APIs are NOT available in the Apps Script V8 runtime: Timers : setTimeout , setInterval , clearTimeout , clearInterval Streams : ReadableStream , WritableStream , TextEncoder , TextDecoder Web APIs : fetch , FormData , File , Blob , URL , URLSearchParams , DOMException , atob , btoa Crypto : crypto , SubtleCrypto Global Objects : window , navigator , performance , process (Node.js) Use the following Apps Script APIs as alternatives: Timers : Use Utilities.sleep for synchronous pauses.
- As with template literals, this syntax lets you avoid string concatenations and simplify string definitions. // Rhino runtime var multiline = "This string is sort of \n " + "like a multi-line string, \n " + "but it's not really one." ; // V8 runtime const multiline = This on the other hand , actually is a multi - line string , thanks to JavaScript ES6 ; V8 runtime limitations The Apps Script V8 runtime isn't a standard Node.js or browser environment.

### Advanced Sheets Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/sheets](https://developers.google.com/apps-script/advanced/sheets)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- It is equivalent to the Add a sheet recipe sample. advanced/sheets.gs View on GitHub / Add a new sheet with some properties. @param {string} spreadsheetId The spreadsheet ID. @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate / function addSheet ( spreadsheetId = yourspreadsheetId ) { const requests = [ { addSheet : { properties : { title : "Deposits" , gridProperties : { rowCount : 20 , columnCount : 12 , }, tabColor : { red : 1.0 , green : 0.3 , blue : 0.4 , }, }, }, }, ]; try { const response = Sheets .
- Spreadsheets . batchUpdate ( { requests : requests }, spreadsheetId , ); console . log ( Created sheet with ID: ${ response . replies [ 0 ]. addSheet . properties . sheetId } , ); } catch ( e ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , e . message ); } } Create a pivot table The following example demonstrates how to create a pivot table from source data.
- It is equivalent to the Add a pivot table recipe sample. advanced/sheets.gs View on GitHub / Add a pivot table. @param {string} spreadsheetId The spreadsheet ID to add the pivot table to. @param {string} pivotSourceDataSheetId The sheet ID to get the data from. @param {string} destinationSheetId The sheet ID to add the pivot table to. @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate / function addPivotTable ( spreadsheetId = yourspreadsheetId , pivotSourceDataSheetId = yourpivotSourceDataSheetId , destinationSheetId = yourdestinationSheetId , ) { const requests = [ { updateCells : { rows : { values : [ { pivotTable : { source : { sheetId : pivotSourceDataSheetId , startRowIndex : 0 , startColumnIndex : 0 , endRowIndex : 20 , endColumnIndex : 7 , }, rows : [ { sourceColumnOffset : 0 , showTotals : true , sortOrder : "ASCENDING" , valueBucket : { buckets : [ { stringValue : "West" , }, ], }, }, { sourceColumnOffset : 1 , showTotals : true , sortOrder : "DESCENDING" , valueBucket : {}, }, ], columns : [ { sourceColumnOffset : 4 , sortOrder : "ASCENDING" , showTotals : true , valueBucket : {}, }, ], values : [ { summarizeFunction : "SUM" , sourceColumnOffset : 3 , }, ], valueLayout : "HORIZONTAL" , }, }, ], }, start : { sheetId : destinationSheetId , rowIndex : 49 , columnIndex : 0 , }, fields : "pivotTable" , }, }, ]; try { const response = Sheets .
- Spreadsheets . batchUpdate ( { requests : requests }, spreadsheetId , ); // The Pivot table will appear anchored to cell A50 of the destination sheet. } catch ( e ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , e . message ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

