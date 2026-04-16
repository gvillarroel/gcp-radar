---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.568Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Slides text range insertion and appending"
feature_slug: "slides-text-range-insertion-and-appending"
latest_feature_date: "2018-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/slides/editing-styling"
  - "https://developers.google.com/apps-script/advanced/slides"
keywords:
  - "slides"
  - "text"
  - "range"
  - "insertion"
  - "appending"
  - "apps"
  - "script"
  - "adds"
---

# Slides text range insertion and appending

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Slides service adds methods to append and insert text ranges with optional source formatting preservation.

## Extended Definition

Apps Script Slides service adds methods to append and insert text ranges with optional source formatting preservation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/slides/editing-styling](https://developers.google.com/apps-script/guides/slides/editing-styling)
- [https://developers.google.com/apps-script/advanced/slides](https://developers.google.com/apps-script/advanced/slides)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- February 13, 2018 Feature The Slides service has been extended with the following new methods: Layout.insertGroup(group) Layout.insertImage(image) Layout.insertLine(line) Layout.insertPageElement(pageElement) Layout.insertShape(shape) Layout.insertSheetsChart(sheetsChart) Layout.insertTable(table) Layout.insertVideo(video) Layout.insertWordArt(wordArt) Master.insertGroup(group) Master.insertImage(image) Master.insertLine(line) Master.insertPageElement(pageElement) Master.insertShape(shape) Master.insertSheetsChart(sheetsChart) Master.insertTable(table) Master.insertVideo(video) Master.insertWordArt(wordArt) Page.insertGroup(group) Page.insertImage(image) Page.insertLine(line) Page.insertPageElement(pageElement) Page.insertShape(shape) Page.insertSheetsChart(sheetsChart) Page.insertTable(table) Page.insertVideo(video) Page.insertWordArt(wordArt) Presentation.appendSlide(slide) Presentation.insertSlide(insertionIndex, slide) Slide.insertGroup(group) Slide.insertImage(image) Slide.insertLine(line) Slide.insertPageElement(pageElement) Slide.insertShape(shape) Slide.insertSheetsChart(sheetsChart) Slide.insertTable(table) Slide.insertVideo(video) Slide.insertWordArt(wordArt) TextRange.appendRange(textRange) TextRange.appendRange(textRange, matchSourceFormatting) TextRange.insertRange(startOffset, textRange) TextRange.insertRange(startOffset, textRange, matchSourceFormatting) The Spreadsheet service has been extended with the following new enum class and method: CopyPasteType , an enum class describing paste types.
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
- The following is a full list of the removed classes and methods: Charts service CategoryFilterBuilder Control DashboardPanel DashboardPanelBuilder Chart.getId() Chart.getType() Charts.newCategoryFilter() Charts.newDashboardPanel() Charts.newNumberRangeFilter() Charts.newStringFilter() NumberRangeFilterBuilder.build() NumberRangeFilterBuilder.setDataTable(tableBuilder) NumberRangeFilterBuilder.setDataTable(table) NumberRangeFilterBuilder.setFilterColumnIndex(columnIndex) NumberRangeFilterBuilder.setFilterColumnLabel(columnLabel) NumberRangeFilterBuilder.setLabel(label) NumberRangeFilterBuilder.setLabelSeparator(labelSeparator) NumberRangeFilterBuilder.setLabelStacking(orientation) StringFilterBuilder.build() StringFilterBuilder.setDataTable(tableBuilder) StringFilterBuilder.setDataTable(table) StringFilterBuilder.setFilterColumnIndex(columnIndex) StringFilterBuilder.setFilterColumnLabel(columnLabel) StringFilterBuilder.setLabel(label) StringFilterBuilder.setLabelSeparator(labelSeparator) StringFilterBuilder.setLabelStacking(orientation) Spreadsheet service EmbeddedChart.getId() EmbeddedChart.getType() EmbeddedChart.setId(id) Change The Slides service class RgbColor and the enumeration ColorType have been moved from the Slides service to the Base script service.

### Edit and style text \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/slides/editing-styling](https://developers.google.com/apps-script/guides/slides/editing-styling)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TEXT BOX , 100 , 200 , 300 , 60 , ); const textRange = shape . getText (); textRange . setText ( "Hello world!" ); textRange . clear ( 6 , 11 ); // Insert text in TEXT BOX textRange . insertText ( 6 , "galaxy" ); console . log ( Start: ${ textRange . getStartIndex () } ; End: ${ textRange . getEndIndex () } ; Content: ${ textRange . asString () } , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with an error %s " , err . message ); } This script creates a text box on the first slide and sets its text content to "Hello world!".
- CENTER ); } } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with an error %s " , err . message ); } List styling Similar to ParagraphStyle , ListStyle can be used for styling all paragraphs which overlap the parent text range. slides/style/style.gs View on GitHub try { // Get the first slide of active presentation const slide = SlidesApp . getActivePresentation (). getSlides ()[ 0 ]; // Insert shape in the slide with dimensions const shape = slide . insertShape ( SlidesApp .
- TEXT BOX , 50 , 50 , 300 , 300 , ); const textRange = shape . getText (); // Set the text in the shape/TEXT BOX textRange . setText ( "Paragraph 1\nParagraph2\nParagraph 3\nParagraph 4" ); const paragraphs = textRange . getParagraphs (); // Style the paragraph alignment center. for ( let i = 0 ; i < = 3 ; i ++ ) { const paragraphStyle = paragraphs [ i ]. getRange (). getParagraphStyle (); paragraphStyle . setParagraphAlignment ( SlidesApp .
- TEXT BOX , 50 , 50 , 300 , 300 , ); // Add and style the list const textRange = shape . getText (); textRange . appendText ( "Item 1\n" ) . appendText ( "\tItem 2\n" ) . appendText ( "\t\tItem 3\n" ) . appendText ( "Item 4" ); // Preset patterns of glyphs for lists in text. textRange . getListStyle () . applyListPreset ( SlidesApp .

### Advanced Slides Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/slides](https://developers.google.com/apps-script/advanced/slides)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It is equivalent to the Add a text box to a slide recipe sample. advanced/slides.gs View on GitHub / Add a new text box with text to a page. @param {string} presentationId The presentation ID. @param {string} pageId The page ID. @return {Object} response @see https://developers.google.com/slides/api/reference/rest/v1/presentations/batchUpdate / function addTextBox ( presentationId , pageId ) { // You can specify the ID to use for elements you create, // as long as the ID is unique. const pageElementId = Utilities . getUuid (); const requests = [ { createShape : { objectId : pageElementId , shapeType : "TEXT BOX" , elementProperties : { pageObjectId : pageId , size : { width : { magnitude : 150 , unit : "PT" , }, height : { magnitude : 50 , unit : "PT" , }, }, transform : { scaleX : 1 , scaleY : 1 , translateX : 200 , translateY : 100 , unit : "PT" , }, }, }, }, { insertText : { objectId : pageElementId , text : "My Added Text Box" , insertionIndex : 0 , }, }, ]; try { const response = Slides .
- It is equivalent to the Format text in a shape or textbox recipe sample. advanced/slides.gs View on GitHub / Format the text in a shape. @param {string} presentationId The presentation ID. @param {string} shapeId The shape ID. @return {Object} replies @see https://developers.google.com/slides/api/reference/rest/v1/presentations/batchUpdate / function formatShapeText ( presentationId , shapeId ) { const requests = [ { updateTextStyle : { objectId : shapeId , fields : "foregroundColor,bold,italic,fontFamily,fontSize,underline" , style : { foregroundColor : { opaqueColor : { themeColor : "ACCENT5" , }, }, bold : true , italic : true , underline : true , fontFamily : "Corsiva" , fontSize : { magnitude : 18 , unit : "PT" , }, }, textRange : { type : "ALL" , }, }, }, ]; try { const response = Slides .
- Home Google Workspace Apps Script Reference Send feedback Advanced Slides Service Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Advanced Slides service allows Apps Script to read and edit content in Google Slides by accessing the Slides API.

