---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.624Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "InlineImage link URL methods"
feature_slug: "inlineimage-link-url-methods"
latest_feature_date: "2013-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/docs"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink"
keywords:
  - "inlineimage"
  - "link"
  - "url"
  - "methods"
  - "inline"
  - "images"
  - "documentapp"
  - "can"
---

# InlineImage link URL methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Inline images in DocumentApp can now get and set hyperlink URLs.

## Extended Definition

Inline images in DocumentApp can now get and set hyperlink URLs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/docs](https://developers.google.com/apps-script/guides/docs)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink](https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the DocumentApp methods InlineImage.getLinkUrl() and InlineImage.setLinkUrl(url) .
- September 09, 2013 Deprecated Deprecated the DocumentApp methods getFootnotes() , getLinkUrl() , setLinkUrl(url) , and isAtDocumentEnd() in the classes FooterSection , FootnoteSection , and HeaderSection , as well as the methods getNextSibling() and getPreviousSibling() in the classes FooterSection and HeaderSection .
- September 26, 2011 Feature Added support for inlineImages when sending emails with MailApp.sendEmail() .
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .

### Extend Google Docs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs](https://developers.google.com/apps-script/guides/docs)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Both of these functions use the getActiveDocument and getActiveTab methods, which only apply to scripts created inside a Docs document; in a stand-alone script, use DocumentApp.create , openById , or openByUrl , combined with Document.getTab , instead.
- HeaderSection ListItem HorizontalRule InlineDrawing InlineImage Text UnsupportedElement (page number, etc.) Paragraph HorizontalRule InlineDrawing InlineImage Text UnsupportedElement (page number, etc.) Table TableRow TableCell Paragraph ...
- FooterSection ListItem HorizontalRule InlineDrawing InlineImage Text UnsupportedElement (page number, etc.) Paragraph HorizontalRule InlineDrawing InlineImage Text UnsupportedElement (page number, etc.) Table TableRow TableCell Paragraph ...
- EquationFunctionArgumentSeparator EquationSymbol Text EquationSymbol Text Footnote HorizontalRule InlineDrawing InlineImage PageBreak Text Paragraph Equation EquationFunction EquationFunction ...

### Class Hyperlink \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink](https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink)
- Source ID: `site-docs-reference-3`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only available for Google Workspace add-ons that extend Google Workspace Studio. const hyperLink = AddOnsResponseService . newHyperlink () . setText ( "Hyperlink text" ) . setLink ( "https://www.google.com" ); Methods Method Return type Brief description set Link(link) Hyperlink Sets the destination URL of the hyperlink. set Text(text) Hyperlink Sets the text of the hyperlink.
- Home Google Workspace Apps Script Reference Send feedback Class Hyperlink Stay organized with collections Save and categorize content based on your preferences.
- Return Hyperlink — This hyperlink object, for chaining. setText(text) Sets the text of the hyperlink.
- Parameters Name Type Description link String The destination URL of the hyperlink.

