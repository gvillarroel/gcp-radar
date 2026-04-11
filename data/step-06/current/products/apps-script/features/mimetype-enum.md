---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.797Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "MimeType enum"
feature_slug: "mimetype-enum"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/File"
keywords:
  - "constants"
  - "mimetype"
  - "mime"
  - "enum"
  - "type"
  - "adds"
  - "for"
---

# MimeType enum

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds a MimeType enum for MIME-type constants.

## Extended Definition

Adds a MimeType enum for MIME-type constants.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Added a MimeType enum , which provides access to MIME -type declarations without typing the strings explicitly.
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .
- February 13, 2018 Feature The Slides service has been extended with the following new methods: Layout.insertGroup(group) Layout.insertImage(image) Layout.insertLine(line) Layout.insertPageElement(pageElement) Layout.insertShape(shape) Layout.insertSheetsChart(sheetsChart) Layout.insertTable(table) Layout.insertVideo(video) Layout.insertWordArt(wordArt) Master.insertGroup(group) Master.insertImage(image) Master.insertLine(line) Master.insertPageElement(pageElement) Master.insertShape(shape) Master.insertSheetsChart(sheetsChart) Master.insertTable(table) Master.insertVideo(video) Master.insertWordArt(wordArt) Page.insertGroup(group) Page.insertImage(image) Page.insertLine(line) Page.insertPageElement(pageElement) Page.insertShape(shape) Page.insertSheetsChart(sheetsChart) Page.insertTable(table) Page.insertVideo(video) Page.insertWordArt(wordArt) Presentation.appendSlide(slide) Presentation.insertSlide(insertionIndex, slide) Slide.insertGroup(group) Slide.insertImage(image) Slide.insertLine(line) Slide.insertPageElement(pageElement) Slide.insertShape(shape) Slide.insertSheetsChart(sheetsChart) Slide.insertTable(table) Slide.insertVideo(video) Slide.insertWordArt(wordArt) TextRange.appendRange(textRange) TextRange.appendRange(textRange, matchSourceFormatting) TextRange.insertRange(startOffset, textRange) TextRange.insertRange(startOffset, textRange, matchSourceFormatting) The Spreadsheet service has been extended with the following new enum class and method: CopyPasteType , an enum class describing paste types.
- For more information, refer to the following documentation: Enum EventTransparency Class CalendarEvent Class CalendarEventSeries November 27, 2024 Feature The Calendar service now has a getEventType() method that lets developers differentiate regular events from other types of events like out-of-office and working location events.

### "Method: processes.listScriptProcesses \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "deploymentId" : string , "functionName" : string , "startTime" : string , "endTime" : string , "types" : [ enum ( ProcessType ) ] , "statuses" : [ enum ( ProcessStatus ) ] , "userAccessLevels" : [ enum ( UserAccessLevel ) ] } Fields deploymentId string Optional field used to limit returned processes to those originating from projects with a specific deployment ID. functionName string Optional field used to limit returned processes to those originating from a script function with the given function name. startTime string ( Timestamp format) Optional field used to limit returned processes to those that were started on or after the given timestamp.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . types[] enum ( ProcessType ) Optional field used to limit returned processes to those having one of the specified process types. statuses[] enum ( ProcessStatus ) Optional field used to limit returned processes to those having one of the specified process statuses. userAccessLevels[] enum ( UserAccessLevel ) Optional field used to limit returned processes to those having one of the specified user access levels.
- The ListScriptProcessesFilter object allows for filtering processes by deployment ID, function name, start and end time, process types, statuses, and user access levels.
- List information about a script's executed processes, such as process type and current status.

### File \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "type" : enum ( FileType ) , "source" : string , "lastModifyUser" : { object ( User ) } , "createTime" : string , "updateTime" : string , "functionSet" : { object ( FunctionSet ) } } Fields name string The name of the file.
- The file extension is not part of the file name, which can be identified from the type field. type enum ( FileType ) The type of the file. source string The file content. lastModifyUser object ( User ) The user who modified the file most recently.
- Files can be of different types, such as server-side Javascript, HTML, or JSON for the project's manifest.
- Enums ENUM TYPE UNSPECIFIED Undetermined file type; never actually used.

