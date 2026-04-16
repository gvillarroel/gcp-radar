---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.611Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Modal and modeless dialog API"
feature_slug: "modal-and-modeless-dialog-api"
latest_feature_date: "2014-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/dialogs"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html"
keywords:
  - "modal"
  - "modeless"
  - "dialog"
  - "ui"
  - "class"
  - "can"
  - "show"
  - "dialogs"
---

# Modal and modeless dialog API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Ui class can show modal or modeless dialogs with explicit dialog titles.

## Extended Definition

The Ui class can show modal or modeless dialogs with explicit dialog titles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)

## Supporting Pages

### "Dialogs and Sidebars in Google Workspace Documents \_|\_ Apps Script \_\

- URL: [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show dialog' , 'showDialog' ) . addToUi (); } function showDialog () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setWidth ( 400 ) . setHeight ( 300 ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showModalDialog ( html , 'My custom dialog' ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> Custom sidebars A sidebar can display an HTML service user interface inside a Docs, Forms, Slides, and Sheets editor.
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show sidebar' , 'showSidebar' ) . addToUi (); } function showSidebar () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setTitle ( 'My custom sidebar' ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showSidebar ( html ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> File-open dialogs Google Picker is a JavaScript API that lets users select or upload Google Drive files.
- Toasts are only available in Sheets. function showToast () { SpreadsheetApp . getActiveSpreadsheet (). toast ( "Task completed successfully." ); } Custom dialogs A custom dialog can display an HTML service user interface inside a Docs, Sheets, Slides, or Forms editor.
- IFRAME ); SpreadsheetApp . getUi (). showModalDialog ( html , "Select a file" ); } // Ensure the Drive API is enabled. if ( !

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- StateTokenBuilder ScriptApp.getOAuthToken() `ScriptApp.newStateToken() Added the method showModalDialog(userInterface, title) to the Ui class, and replaced the method showDialog(userInterface) with showModelessDialog(userInterface, title) .
- Change In Google Docs, Forms, and the new version of Sheets , showing a dialog now automatically closes any other dialogs opened by a script.
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .
- Feature Added the following Session methods, which allow scripts to determine the user's locale and time zone: getActiveUserLocale() getActiveUserTimeZone() January 21, 2014 Feature The new SpreadsheetApp method Spreadsheet.getUi() allows scripts to access the spreadsheet's user-interface environment in order to add features like menus, dialogs, and sidebars.

### HTML Service: Create and Serve HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- The HTML service can also display dialogs or sidebars as user interfaces in Google Docs, Sheets, Slides, or Forms if the script is container-bound, requiring a function that passes the HTML file as an HtmlOutput object to the showModalDialog() or showSidebar() methods of the Ui object.
- Code.gs // Use this code for Google Docs, Slides, Forms, or Sheets. function onOpen() { SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp. .createMenu('Dialog') .addItem('Open', 'openDialog') .addToUi(); } function openDialog() { var html = HtmlService.createHtmlOutputFromFile('Index'); SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp. .showModalDialog(html, 'Dialog title'); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> Hello, World! <input type="button" value="Close" onclick="google.script.host.close()" /> </body> </html> The first time you want to display this user interface, you must either run the onOpen function manually in the script editor or reload the window for the Docs, Sheets, or Forms editor (which closes the script editor).
- Instead, the function that opens the user interface must pass your HTML file as an HtmlOutput object to the showModalDialog or showSidebar methods of the Ui object for the active document, form, or spreadsheet.
- Serve HTML as a Google Docs, Sheets, Google Slides, or Forms user interface The HTML service can display a dialog or sidebar in Google Docs, Sheets, Slides, or Forms if your script is container-bound to the file.

