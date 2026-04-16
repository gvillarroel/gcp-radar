---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.676Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Utilities CSV parsing"
feature_slug: "utilities-csv-parsing"
latest_feature_date: "2011-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/guides/docs/tabs"
keywords:
  - "utilities"
  - "csv"
  - "parsing"
  - "includes"
  - "method"
  - "text"
---

# Utilities CSV parsing

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Utilities includes a method for parsing CSV text.

## Extended Definition

Utilities includes a method for parsing CSV text.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)

## Supporting Pages

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Unavailable APIs The following standard JavaScript APIs are NOT available in the Apps Script V8 runtime: Timers : setTimeout , setInterval , clearTimeout , clearInterval Streams : ReadableStream , WritableStream , TextEncoder , TextDecoder Web APIs : fetch , FormData , File , Blob , URL , URLSearchParams , DOMException , atob , btoa Crypto : crypto , SubtleCrypto Global Objects : window , navigator , performance , process (Node.js) Use the following Apps Script APIs as alternatives: Timers : Use Utilities.sleep for synchronous pauses.
- The new runtime recognizes these function definition formats: function normalFunction () {} async function asyncFunction () {} function generatorFunction () {} var varFunction = function () {} let letFunction = function () {} const constFunction = function () {} var namedVarFunction = function alternateNameVarFunction () {} let namedLetFunction = function alternateNameLetFunction () {} const namedConstFunction = function alternateNameConstFunction () {} var varAsyncFunction = async function () {} let letAsyncFunction = async function () {} const constAsyncFunction = async function () {} var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {} let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {} const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {} var varGeneratorFunction = function () {} let letGeneratorFunction = function () {} const constGeneratorFunction = function () {} var namedVarGeneratorFunction = function alternateNameVarGeneratorFunction () {} let namedLetGeneratorFunction = function alternateNameLetGeneratorFunction () {} const namedConstGeneratorFunction = function alternateNameConstGeneratorFunction () {} var varLambda = () => {} let letLambda = () => {} const constLambda = () => {} var varAsyncLambda = async () => {} let letAsyncLambda = async () => {} const constAsyncLambda = async () => {} Call object methods from triggers and callbacks Scripts using V8 can call object methods and class static methods from places where you could already call library methods.
- Classes in V8 are primarily syntactical sugar over the JavaScript prototype-based inheritance. // V8 runtime class Rectangle { constructor ( width , height ) { // class constructor this . width = width ; this . height = height ; } logToConsole () { // class method console . log ( Rectangle ( width =$ { this . width }, height =$ { this . height }) ); } } const r = new Rectangle ( 10 , 20 ); r . logToConsole (); // Outputs Rectangle ( width = 10 , height = 20 ) Destructuring assignments Destructuring assignment expressions are a quick way to unpack values from arrays and objects into distinct variables. // Rhino runtime var data = { a : 12 , b : false , c : 'blue' }; var a = data . a ; var c = data . c ; console . log ( a , c ); // Outputs 12 "blue" var a = [ 1 , 2 , 3 ]; var x = a [ 0 ]; var y = a [ 1 ]; var z = a [ 2 ]; console . log ( x , y , z ); // Outputs 1 2 3 // V8 runtime const data = { a : 12 , b : false , c : 'blue' }; const { a , c } = data ; console . log ( a , c ); // Outputs 12 "blue" const array = [ 1 , 2 , 3 ]; const [ x , y , z ] = array ; console . log ( x , y , z ); // Outputs 1 2 3 Template literals Template literals are string literals that allow embedded expressions.
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- The Spreadsheet API adds a new NamedRange type and the following related methods: NamedRange.getName() gets the name of the named range NamedRange.setName(name) sets the name of the named range NamedRange.getRange() gets the underlying range associated with the named range NamedRange.setRange(range) sets the underlying range associated with the named range NamedRange.remove() deletes the named range Spreadsheet.getNamedRanges() gets an array of all the named ranges in the spreadsheet Sheet.getNamedRanges() gets an array of all the named ranges in the sheet Protection.setNamedRange(range) associates an existing protected range with an existing named range The Utilities API includes a new getUuid() method that generates a unique identifier.
- Feature Added a method in Utilities class that parses CSV text.
- The new classes and methods include: BandingTheme Banding BooleanCondition BooleanCriteria ConditionalFormatRuleBuilder ConditionalFormatRule Dimension Direction FilterCriteriaBuilder FilterCriteria Filter GradientCondition InterpolationType PivotFilter PivotGroup PivotTableSummarizeFunction PivotTable PivotTableDisplayType PivotValue RangeList RelativeDate Selection TextDirection TextRotation TextToColumnsDelimiter WrapStrategy EmbeddedChartBuilder.setHiddenDimensionStrategy(strategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setNumHeaders(headers) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setMergeStrategy(mergeStrategy) (also in each of the type-specific chart builder classes) EmbeddedChartBuilder.setTransposeRowsAndColumns(transpose) (also in each of the type-specific chart builder classes) Range.activateAsCurrentCell() Range.applyColumnBanding() Range.applyColumnBanding(bandingTheme) Range.applyColumnBanding(bandingTheme, showHeader, showFooter) Range.applyRowBanding() Range.applyRowBanding(bandingTheme) Range.applyRowBanding(bandingTheme, showHeader, showFooter) Range.createFilter() Range.createPivotTable(sourceData) Range.deleteCells(shiftDimension) Range.getBandings() Range.getNextDataCell(direction) Range.getTextDirection() Range.getTextDirections() Range.getTextRotation() Range.getTextRotations() Range.getWrapStrategies() Range.getWrapStrategy() Range.insertCells(shiftDimension) Range.setShowHyperlink(showHyperlink) Range.setTextDirection(direction) Range.setTextDirections(directions) Range.setTextRotation(degrees) Range.setTextRotation(rotation) Range.setTextRotations(rotations) Range.setVerticalText(isVertical) Range.setWrapStrategies(strategies) Range.setWrapStrategy(strategy) Range.setTextToColumns() Range.setTextToColumns(delimiter) Range.setTextToColumns(delimiter) Sheet.autoResizeColumns(startColumns, numColumns) Sheet.autoResizeRows(startRows, numRows) Sheet.clearConditionalFormatRules() Sheet.getActiveRangeList() Sheet.getBandings() Sheet.getConditionalFormatRules() Sheet.getCurrentCell() Sheet.getFilter() Sheet.getPivotTables() Sheet.getRangeList(a1Notations) Sheet.getSelection() Sheet.hasHiddenGridlines() Sheet.isRightToLeft() Sheet.setActiveRangeList(rangeList) Sheet.setColumnWidths(startColumn numColumns, width) Sheet.setConditionalFormatRules(rules) Sheet.setCurrentCell(cell) Sheet.setHiddenGridlines(hideGridlines) Sheet.setRightToLeft(rightToLeft) Sheet.setRowHeights(startRow, numRows, height) Spreadsheet.getActiveRangeList() Spreadsheet.getBandings() Spreadsheet.getCurrentCell() Spreadsheet.getRangeList(a1Notations) Spreadsheet.getSelection() Spreadsheet.setActiveRangeList(rangeList) Spreadsheet.setCurrentCell(cell) Feature The Charts service has been extended to support EmbeddedCharts in Google Sheets with the enums ChartHiddenDimensionStrategy and ChartMergeStrategy .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Work with tabs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Includes all child tabs . / function getAllTabs ( doc ) { const allTabs = []; // Iterate over all tabs and recursively add any child tabs to // generate a flat list of Tabs . for ( const tab of doc . getTabs ()) { addCurrentAndChildTabs ( tab , allTabs ); } return allTabs ; } / Adds the provided tab to the list of all tabs , and recurses through and adds all child tabs . / function addCurrentAndChildTabs ( tab , allTabs ) { allTabs . push ( tab ); for ( const childTab of tab . getChildTabs ()) { addCurrentAndChildTabs ( childTab , allTabs ); } } Read tab content from the first tab in the document This is similar to reading all tabs. / Logs all text contents from the first tab in the active document . / function logAllText () { // Generate a list of all the tabs in the document , including any // nested child tabs . const doc = DocumentApp . getActiveDocument (); const allTabs = getAllTabs ( doc ); // Log the content from the first tab in the document . const firstTab = allTabs [ 0 ]; // Get the DocumentTab from the generic Tab object . const documentTab = firstTab . asDocumentTab (); // Get the body from the DocumentTab . const body = documentTab . getBody (); // Get the body text and log it to the console . console . log ( body . getText ()); } Update tab contents in the first tab The following partial code sample shows how to target a specific tab when making updates. / Inserts text into the first tab of the active document . / function insertTextInFirstTab () { // Get the first tab 's body. const doc = DocumentApp . getActiveDocument (); const firstTab = doc . getTabs ()[ 0 ]; const firstDocumentTab = firstTab . asDocumentTab (); const firstTabBody = firstDocumentTab . getBody (); // Append a paragraph and a page break to the first tab 's body // section . firstTabBody . appendParagraph ( "A paragraph." ); firstTabBody . appendPageBreak (); } Update tab contents in the active or selected tab The following partial code sample shows how to target the active tab when making updates. / Inserts text into the active / selected tab of the active document . / function insertTextInActiveTab () { // Get the active / selected tab 's body. const doc = DocumentApp . getActiveDocument (); const activeTab = doc . getActiveTab (); const activeDocumentTab = activeTab . asDocumentTab (); const activeTabBody = activeDocumentTab . getBody (); // Append a paragraph and a page break to the active tab 's body // section . activeTabBody . appendParagraph ( "A paragraph." ); activeTabBody . appendPageBreak (); } Set a cursor position or selection range in the active tab The following partial code sample shows how to update the cursor position or the selection range within the user's active tab.
- The following methods fall into this category: Document.addBookmark Document.addFooter Document.addHeader Document.addNamedRange Document.getBody Document.getBookmark Document.getBookmarks Document.getFooter Document.getFootnotes Document.getHeader Document.getNamedRangeById Document.getNamedRanges Document.getNamedRanges Document.newPosition Document.newRange With the additional structural hierarchy of tabs, these methods no longer semantically represent the text content from all tabs in the document.
- Access text content within a specific Tab Instead of using the text methods off of Document , it is recommended to use the methods that are available off of the DocumentTab class instead (which is available through the Tab.asDocumentTab method).
- Changes to Document Class structure In the past, documents did not have a concept of tabs, so the Document Class exposed methods to directly access and modify the text contents of the document.

