---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.604Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Form trigger source property"
feature_slug: "form-trigger-source-property"
latest_feature_date: "2014-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/events"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
keywords:
  - "form"
  - "trigger"
  - "source"
  - "property"
  - "events"
  - "include"
  - "so"
  - "scripts"
---

# Form trigger source property

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Form trigger events include a source property so scripts can retrieve the triggering form.

## Extended Definition

Form trigger events include a source property so scripts can retrieve the triggering form.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)

## Supporting Pages

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Presentation user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Google Forms events The Forms-specific triggers let scripts respond when a user edits a form or submits a response.
- Time-driven events Time-driven triggers (also called clock triggers) let scripts execute at a particular time or on a recurring interval.
- Google Sheets events The various Google Sheets-specific triggers let scripts respond to a user's actions in a spreadsheet.
- Events produced by installable triggers include a triggerUid to identify the specific trigger.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Added the FormTriggerBuilder class to allow scripts to respond to Forms events.
- Feature Added a source property to the event parameter for form triggers .
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .
- UrlFetch requests made by scripts that run on a time-based trigger now include an If-Modified-Since HTTP header so that Apps Script can use a cached copy of the page if one is available and the page has not changed.

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Event-driven triggers respond to various events in Google Workspace applications, such as opening, editing, or submitting forms, and can call services requiring authorization.
- Time-driven triggers let scripts execute at a particular time or on a recurring interval, as frequently as every minute or as infrequently as once per month. (An add-on can use a time-driven trigger once per hour at most.) The time might be slightly randomized—for example, if you create a recurring 9 AM trigger, Apps Script chooses a time between 9 AM and 10 AM, then keeps that timing consistent from day to day so that 24 hours elapse before the trigger fires again.
- Installable triggers, however, offer more flexibility than simple triggers: they can call services that require authorization , they offer several additional types of events including time-driven (clock) triggers, and they can be controlled programmatically.
- Page Summary outlined flag Installable triggers allow Apps Script functions to run automatically based on events, offering more flexibility and authorization capabilities than simple triggers.

