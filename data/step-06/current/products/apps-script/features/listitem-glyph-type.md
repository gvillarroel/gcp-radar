---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.667Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "ListItem glyph type"
feature_slug: "listitem-glyph-type"
latest_feature_date: "2012-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/list-item"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/list-container"
keywords:
  - "listitem"
  - "glyph"
  - "type"
  - "supports"
  - "setting"
  - "list"
  - "types"
  - "beyond"
---

# ListItem glyph type

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

ListItem supports setting list glyph types beyond numeric glyphs.

## Extended Definition

ListItem supports setting list glyph types beyond numeric glyphs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/list-item](https://developers.google.com/apps-script/reference/add-ons-response-service/list-item)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/list-container](https://developers.google.com/apps-script/reference/add-ons-response-service/list-container)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Added the setGlyphType() method to ListItem to support glyph types other than numeric glyphs.
- Fixed Issue 2565 : DocsList.createFile() no longer allows the creation of files with invalid MIME types or Google document MIME types.
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Class ListItem \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/list-item](https://developers.google.com/apps-script/reference/add-ons-response-service/list-item)
- Source ID: `site-docs-reference-3`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only available for Google Workspace add-ons that extend Google Workspace Studio. const listItem = AddOnsResponseService . newListItem () . addTextFormatElements ( AddOnsResponseService . newStyledText ()); Methods Method Return type Brief description add Text Format Element(textFormatElement) List Item Adds a Text Format Element to the list item.
- Home Google Workspace Apps Script Reference Send feedback Class ListItem Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Type Description text Format Element Text Format Element The Text Format Element to add to the list item.
- ListItem A list item, where each list item can contain multiple TextFormatElement .

### Class ListContainer \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/list-container](https://developers.google.com/apps-script/reference/add-ons-response-service/list-container)
- Source ID: `site-docs-reference-3`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UNORDERED ) . addListItem ( AddOnsResponseService . newListItem () . addTextFormatElement ( AddOnsResponseService . newTextFormatElement () . setStyledText ( sampleStyledText ) )); Methods Method Return type Brief description add List Item(listItem) List Container Adds a list item to the list container. set List Nest Level(listLevel) List Container Sets the level of the list, starts from 0 for the top level, and increases by 1 for each nested list. set List Type(listType) List Container Sets the type of the list to be ordered or unordered.
- Only available for Google Workspace add-ons that extend Google Workspace Studio. const listContainer = AddOnsResponseService . newListContainer () . setListType ( AddOnsResponseService .
- Return ListContainer — This list container object, for chaining. setListType(listType) Sets the type of the list to be ordered or unordered.
- Parameters Name Type Description list Item List Item The List Item to be added to the list container.

