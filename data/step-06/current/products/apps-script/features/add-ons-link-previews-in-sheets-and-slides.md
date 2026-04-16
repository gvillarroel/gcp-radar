---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.511Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Add-ons link previews in Sheets and Slides"
feature_slug: "add-ons-link-previews-in-sheets-and-slides"
latest_feature_date: "2024-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/macros"
  - "https://developers.google.com/apps-script/guides/dialogs"
keywords:
  - "add"
  - "ons"
  - "link"
  - "previews"
  - "sheets"
  - "slides"
  - "workspace"
  - "can"
---

# Add-ons link previews in Sheets and Slides

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Google Workspace Add-ons can show link previews with smart chips in Google Sheets and Slides; Google Workspace Add-ons can show link previews with smart chips in Google Sheets and Slides.

## Extended Definition

Google Workspace Add-ons can show link previews with smart chips in Google Sheets and Slides; Google Workspace Add-ons can show link previews with smart chips in Google Sheets and Slides.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/macros](https://developers.google.com/apps-script/guides/sheets/macros)
- [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- January 18, 2024 Feature ( Generally available ): Google Workspace Add-ons now support link previews in Google Sheets and Slides.
- Google Workspace Add-ons now support link previews in Google Sheets and Slides.
- To learn more, refer to the following: Google Workspace Updates blog : View & compare script versions with Apps Script project history Developer documentation : Versions June 12, 2023 Feature Third-party smart chips and link previews are now generally available.
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .

### Google Sheets Macros \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/macros](https://developers.google.com/apps-script/guides/sheets/macros)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Macros are limited to bound scripts in Google Sheets and cannot be used in standalone scripts, web apps, add-ons, libraries, or other Google Workspace applications.
- Home Google Workspace Apps Script Guides Send feedback Google Sheets Macros Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag Google Sheets macros automate UI interactions and can be linked to keyboard shortcuts or accessed via the Extensions menu.
- Define macros in Sheets Google Workspace add-ons You cannot distribute macro definitions using a Sheets Google Workspace add-on .

### "Dialogs and Sidebars in Google Workspace Documents \_|\_ Apps Script \_\

- URL: [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show dialog' , 'showDialog' ) . addToUi (); } function showDialog () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setWidth ( 400 ) . setHeight ( 300 ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showModalDialog ( html , 'My custom dialog' ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> Custom sidebars A sidebar can display an HTML service user interface inside a Docs, Forms, Slides, and Sheets editor.
- YES ) { // User clicked "Yes". ui . alert ( "Confirmation received." ); } else { // User clicked "No" or X in the title bar. ui . alert ( "Permission denied." ); } } Prompt dialogs A prompt is a prebuilt dialog that opens inside a Docs, Sheets, Slides, or Forms editor.
- Toasts are only available in Sheets. function showToast () { SpreadsheetApp . getActiveSpreadsheet (). toast ( "Task completed successfully." ); } Custom dialogs A custom dialog can display an HTML service user interface inside a Docs, Sheets, Slides, or Forms editor.
- As shown in the following example, Docs, Forms, Slides, and Sheets all use the method Ui.prompt , which is available in three variants.

