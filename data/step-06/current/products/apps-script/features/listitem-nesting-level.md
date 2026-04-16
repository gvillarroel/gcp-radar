---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.668Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "ListItem nesting level"
feature_slug: "listitem-nesting-level"
latest_feature_date: "2012-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/list-container"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/list-item"
keywords:
  - "listitem"
  - "nesting"
  - "level"
  - "supports"
  - "setting"
  - "list"
  - "items"
---

# ListItem nesting level

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

ListItem supports setting the nesting level of list items.

## Extended Definition

ListItem supports setting the nesting level of list items.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/list-container](https://developers.google.com/apps-script/reference/add-ons-response-service/list-container)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/list-item](https://developers.google.com/apps-script/reference/add-ons-response-service/list-item)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- January 24, 2012 Feature Added the setNestingLevel() method to ListItem .
- To check whether the Caja security sandbox in HTML Service supports a specific feature, see the CSS whitelist definitions in Caja's public repository .
- Added the setGlyphType() method to ListItem to support glyph types other than numeric glyphs.
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .

### Class ListContainer \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/list-container](https://developers.google.com/apps-script/reference/add-ons-response-service/list-container)
- Source ID: `site-docs-reference-3`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UNORDERED ) . addListItem ( AddOnsResponseService . newListItem () . addTextFormatElement ( AddOnsResponseService . newTextFormatElement () . setStyledText ( sampleStyledText ) )); Methods Method Return type Brief description add List Item(listItem) List Container Adds a list item to the list container. set List Nest Level(listLevel) List Container Sets the level of the list, starts from 0 for the top level, and increases by 1 for each nested list. set List Type(listType) List Container Sets the type of the list to be ordered or unordered.
- Return ListContainer — This list container object, for chaining. setListNestLevel(listLevel) Sets the level of the list, starts from 0 for the top level, and increases by 1 for each nested list.
- ListContainer Container for list items, where each list item can contain multiple TextFormatElement .
- Parameters Name Type Description list Level Integer The number of nest levels of the list.

### Class ListItem \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/list-item](https://developers.google.com/apps-script/reference/add-ons-response-service/list-item)
- Source ID: `site-docs-reference-3`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only available for Google Workspace add-ons that extend Google Workspace Studio. const listItem = AddOnsResponseService . newListItem () . addTextFormatElements ( AddOnsResponseService . newStyledText ()); Methods Method Return type Brief description add Text Format Element(textFormatElement) List Item Adds a Text Format Element to the list item.
- Home Google Workspace Apps Script Reference Send feedback Class ListItem Stay organized with collections Save and categorize content based on your preferences.
- ListItem A list item, where each list item can contain multiple TextFormatElement .
- Return ListItem — This list item object, for chaining.

