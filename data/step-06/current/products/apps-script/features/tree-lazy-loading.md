---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.644Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Tree lazy loading"
feature_slug: "tree-lazy-loading"
latest_feature_date: "2013-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/classroom"
  - "https://developers.google.com/apps-script/guides/services"
keywords:
  - "tree"
  - "lazy"
  - "loading"
  - "class"
  - "now"
  - "supports"
  - "reduce"
  - "ui"
---

# Tree lazy loading

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Tree class now supports lazy loading to reduce UI rendering wait times.

## Extended Definition

The Tree class now supports lazy loading to reduce UI rendering wait times.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/classroom](https://developers.google.com/apps-script/advanced/classroom)
- [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Issue 1314 : Added support for lazy loading in the Tree class, which reduces wait times in rendering the UI.
- In addition, the following ChartTypes have been added: TIMELINE BUBBLE CANDLESTICK GAUGE GEO RADAR ORG SPARKLINE STEPPED AREA TREEMAP WATERFALL March 26, 2018 Feature The Spreadsheet service has been extended with the following new methods: SpreadsheetApp.setActiveSheet(sheet, restoreSelection) Spreadsheet.setActiveSheet(sheet, restoreSelection) Deprecated The deprecated enable(restriction) method of the ScriptApp.Service class has been sunset.
- Feature Issue 1771 : Added a clear() method to the Tree and TreeItem classes.
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .

### Classroom Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/classroom](https://developers.google.com/apps-script/advanced/classroom)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Courses . list ( optionalArgs ); const courses = response . courses ; if ( ! courses courses . length === 0 ) { console . log ( "No courses found." ); return ; } // Print the course names and IDs of the available courses. for ( const course in courses ) { console . log ( "%s (%s)" , courses [ course ]. name , courses [ course ]. id ); } } catch ( err ) { // TODO (developer)- Handle Courses.list() exception from Classroom API console . log ( "Failed with error %s" , err . message ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- List courses This sample lists the first ten courses the user has access to. advanced/classroom.gs View on GitHub / Lists 10 course names and IDs. / function listCourses () { / @see https://developers.google.com/classroom/reference/rest/v1/courses/list / const optionalArgs = { pageSize : 10 , // Use other query parameters here if needed. }; try { const response = Classroom .
- Home Google Workspace Apps Script Reference Send feedback Classroom Service Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Classroom service in Apps Script allows you to use the Google Classroom API to manage courses and rosters.

### Built-in Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Each runtime supports JavaScript classes and objects that are available to your script in addition to the built-in and advanced Google services .
- Scripts make method calls in this format: GlobalObjectName.methodName(argument1, argument2, ..., argumentN); For example, a script can send an email by calling the sendEmail(recipient, subject, body) method of the Gmail service like so: GmailApp . sendEmail ( 'claire@example.com' , 'Subject line' , 'This is the body.' ); If a method returns another Apps Script class, chain method calls on one line. (Return types are shown both in autocomplete and in a method's reference documentation.) For example, the method DocumentApp.create() returns a Document ; thus, the following two sections of code are equivalent: var doc = DocumentApp . create ( 'New document' ); var body = doc . getTab ( 't.0' ) . asDocumentTab () . getBody (); body . appendParagraph ( 'New paragraph.' ); // Same result as above .
- DocumentApp . create ( 'New document' ) . getTab ( 't.0' ) . asDocumentTab () . getBody () . appendParagraph ( 'New paragraph.' ); Child classes Every service includes one or more child classes that you can't access from the top level as a global object.
- Child classes cannot be accessed directly but must be accessed by calling a method that returns an instance of that class, and some services use "interface" classes to represent generic types that can be cast to a precise class.

