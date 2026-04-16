---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.630Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsList paginated listing methods"
feature_slug: "docslist-paginated-listing-methods"
latest_feature_date: "2013-08-05"
deprecation_date: "2013-08-05"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/quickstart/js"
  - "https://developers.google.com/apps-script/quickstart/vertex-ai"
keywords:
  - "docslist"
  - "paginated"
  - "listing"
  - "methods"
  - "used"
  - "start"
  - "max"
  - "pagination"
---

# DocsList paginated listing methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DocsList methods that used start and max pagination arguments were deprecated in favor of DriveApp or paging-specific alternatives; deprecated on 2013-08-05.

## Extended Definition

DocsList methods that used start and max pagination arguments were deprecated in favor of DriveApp or paging-specific alternatives; deprecated on 2013-08-05.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/quickstart/js](https://developers.google.com/apps-script/api/quickstart/js)
- [https://developers.google.com/apps-script/quickstart/vertex-ai](https://developers.google.com/apps-script/quickstart/vertex-ai)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated Deprecated the DocsList methods find(query, start, max) , getAllFiles(start, max) , getAllFolders(start, max) , getFiles(start, max) , getFilesByType(fileType, start, max) , and getFolders(start, max) .
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .
- February 13, 2018 Feature The Slides service has been extended with the following new methods: Layout.insertGroup(group) Layout.insertImage(image) Layout.insertLine(line) Layout.insertPageElement(pageElement) Layout.insertShape(shape) Layout.insertSheetsChart(sheetsChart) Layout.insertTable(table) Layout.insertVideo(video) Layout.insertWordArt(wordArt) Master.insertGroup(group) Master.insertImage(image) Master.insertLine(line) Master.insertPageElement(pageElement) Master.insertShape(shape) Master.insertSheetsChart(sheetsChart) Master.insertTable(table) Master.insertVideo(video) Master.insertWordArt(wordArt) Page.insertGroup(group) Page.insertImage(image) Page.insertLine(line) Page.insertPageElement(pageElement) Page.insertShape(shape) Page.insertSheetsChart(sheetsChart) Page.insertTable(table) Page.insertVideo(video) Page.insertWordArt(wordArt) Presentation.appendSlide(slide) Presentation.insertSlide(insertionIndex, slide) Slide.insertGroup(group) Slide.insertImage(image) Slide.insertLine(line) Slide.insertPageElement(pageElement) Slide.insertShape(shape) Slide.insertSheetsChart(sheetsChart) Slide.insertTable(table) Slide.insertVideo(video) Slide.insertWordArt(wordArt) TextRange.appendRange(textRange) TextRange.appendRange(textRange, matchSourceFormatting) TextRange.insertRange(startOffset, textRange) TextRange.insertRange(startOffset, textRange, matchSourceFormatting) The Spreadsheet service has been extended with the following new enum class and method: CopyPasteType , an enum class describing paste types.
- Feature The Slides service has been extended with the following new classes and methods that support connector lines: ConnnectionSite Group.getConnectionSites() Image.getConnectionSites() Line.getConnectionSites() Line.getEndConnection() Line.getLineCategory() Line.getStartConnection() Line.isConnector() Line.setEndConnection(connectionSite) Line.setLineCategory(lineCategory) Line.setStartConnection(connectionSite) LineCategory.UNSUPPORTED PageElement.getConnectionSites() Shape.getConnectionSites() SheetsChart.getConnectionSites() Table.getConnectionSites() Video.getConnectionSites() WordArt.getConnectionSites() November 14, 2018 Feature The Card service has been extended with the following new classes and methods that let you to customize the background of text button widgets: TextButtonStyle TextButton.setBackgroundColor(backgroundColor) TextButton.setDisabled(disabled) TextButton.setTextButtonStyle(textButtonStyle) The Slides service has been extended with the following new methods that let you control the Z-positioning of page elements in Slides.

### JavaScript quickstart \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/quickstart/js](https://developers.google.com/apps-script/api/quickstart/js)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the index.html file, paste the following sample code: apps-script/quickstart/index.html View on GitHub <!DOCTYPE html> <html> <head> <title>Google Apps Script API Quickstart</title> <meta charset="utf-8" /> </head> <body> <p>Google Apps Script API Quickstart</p> <!--Add buttons to initiate auth sequence and sign out--> <button id="authorize button" onclick="handleAuthClick()">Authorize</button> <button id="signout button" onclick="handleSignoutClick()">Sign Out</button> <pre id="content" style="white-space: pre-wrap;"></pre> <script type="text/javascript"> / exported gapiLoaded / / exported gisLoaded / / exported handleAuthClick / / exported handleSignoutClick / // TODO(developer): Set to client ID and API key from the Developer Console const CLIENT ID = '<YOUR CLIENT ID>'; const API KEY = '<YOUR API KEY>'; // Discovery doc URL for APIs used by the quickstart const DISCOVERY DOC = 'https://script.googleapis.com/$discovery/rest?version=v1'; // Authorization scopes required by the API; multiple scopes can be // included, separated by spaces. const SCOPES = 'https://www.googleapis.com/auth/script.projects'; let tokenClient; let gapiInited = false; let gisInited = false; document.getElementById('authorize button').style.visibility = 'hidden'; document.getElementById('signout button').style.visibility = 'hidden'; / Callback after api.js is loaded. / function gapiLoaded() { gapi.load('client', initializeGapiClient); } / Callback after the API client is loaded.
- Run the sample In your working directory, install the http-server package: npm install http-server In your working directory, start a web server: npx http-server -p 8000 In your browser, navigate to http://localhost:8000 .
- Page Summary outlined flag This quickstart demonstrates how to create a JavaScript web application that interacts with the Google Apps Script API using a simplified authentication method suitable for testing.
- Home Google Workspace Apps Script Guides Send feedback JavaScript quickstart Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Generate text using Vertex AI \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/quickstart/vertex-ai](https://developers.google.com/apps-script/quickstart/vertex-ai)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To avoid incurring charges to your Google Cloud account for the resources used in this quickstart, we recommend that you delete the Cloud project.
- Home Google Workspace Apps Script Samples Send feedback Quickstart: Generate text using Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, we recommend that you delete the Cloud project.
- If you used an existing project for this tutorial, when you delete it, you also delete any other work you've done in the project.

