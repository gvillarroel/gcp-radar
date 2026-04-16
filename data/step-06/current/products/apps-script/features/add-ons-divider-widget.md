---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.521Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Add-ons divider widget"
feature_slug: "add-ons-divider-widget"
latest_feature_date: "2021-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget"
keywords:
  - "add"
  - "ons"
  - "divider"
  - "widget"
  - "lets"
  - "developers"
  - "insert"
  - "visual"
---

# Add-ons divider widget

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The add-ons divider widget lets developers insert visual dividers into add-on cards with Card Service.

## Extended Definition

The add-ons divider widget lets developers insert visual dividers into add-on cards with Card Service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget)

## Supporting Pages

### Class InsertWidget \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget)
- Source ID: `site-docs-reference-3`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Developers cans insert a widget into a card by passing a InsertWidget to ModifyCard Only available for Google Workspace add-ons that extend Google Workspace Studio.
- Sample usage: const newWidget = CardService . newDecoratedText (). setText ( 'New Widget' ); const insertWidget = AddOnsResponseService . newInsertWidget () . insertAboveWidget ( 'sample id' ) . setWidget ( newWidget ); const modifyCard = AddOnsResponseService . newModifyCard (). setInsertWidget ( insertWidget ); Methods Method Return type Brief description insert Above Widget(widgetId) Insert Widget Sets the widget ID, and the new widget is inserted above the widget with the given ID. insert Below Widget(widgetId) Insert Widget Sets the widget ID, and the new widget is inserted below the widget with the given ID. set Widget(widget) Insert Widget Sets the Widget to be inserted.
- Return InsertWidget — The insert widget object, for chaining. insertBelowWidget(widgetId) Sets the widget ID, and the new widget is inserted below the widget with the given ID.
- Home Google Workspace Apps Script Reference Send feedback Class InsertWidget Stay organized with collections Save and categorize content based on your preferences.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- For more information, refer to the following documentation: Enum EventTransparency Class CalendarEvent Class CalendarEventSeries November 27, 2024 Feature The Calendar service now has a getEventType() method that lets developers differentiate regular events from other types of events like out-of-office and working location events.
- June 01, 2021 Feature A new divider widget has been added for Google Workspace Add-ons.
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .

### Class AccessoryWidget \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget)
- Source ID: `site-docs-reference-3`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PHONE ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "phone" ))) . addButton ( CardService . newTextButton () . setText ( "Robot" ) . setIconUrl ( "https://developers.google.com/chat/images/quickstart-app-avatar.png" ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "robot" ))); const accessoryWidget = AddOnsResponseService . newAccessoryWidget () . addWidget ( widget ); Methods Method Return type Brief description add Widget(widget) Accessory Widget Sets the widget for this action.
- Available for Google Workspace add-ons that extend Google Chat. const widget = CardService . newButtonSet () . addButton ( CardService . newImageButton () . setIcon ( CardService .
- Home Google Workspace Apps Script Reference Send feedback Class AccessoryWidget Stay organized with collections Save and categorize content based on your preferences.
- Accessory widgets are interactive widgets that appear at the bottom of a message.

