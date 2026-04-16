---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.552Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Slides page element ordering and accessibility metadata"
feature_slug: "slides-page-element-ordering-and-accessibility-metadata"
latest_feature_date: "2018-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/slides/moving-elements"
  - "https://developers.google.com/apps-script/advanced/slides"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "slides"
  - "page"
  - "element"
  - "ordering"
  - "accessibility"
  - "metadata"
  - "apps"
  - "script"
---

# Slides page element ordering and accessibility metadata

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Slides service adds methods to control Z-order and set titles and descriptions on page elements.

## Extended Definition

Apps Script Slides service adds methods to control Z-order and set titles and descriptions on page elements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/slides/moving-elements](https://developers.google.com/apps-script/guides/slides/moving-elements)
- [https://developers.google.com/apps-script/advanced/slides](https://developers.google.com/apps-script/advanced/slides)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Size and position page elements \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/slides/moving-elements](https://developers.google.com/apps-script/guides/slides/moving-elements)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Apps Script, use: setTransform() to set the affine transform of page elements (similar to ABSOLUTE mode); preconcatenateTransform() to pre-concatenate an affine transform to the current transform of page elements (similar to RELATIVE mode).
- In Apps Script, use: getInherentWidth() and getInherentHeight() for the inherent (native) size of page elements; getTransform() for the affine transform of the page elements.
- Home Google Workspace Apps Script Guides Send feedback Size and position page elements Stay organized with collections Save and categorize content based on your preferences.
- Replacing the third line in the preceding script with the following script produces the same result: shape . setWidth ( 55 ); shape . setRotation ( 90 ). setHeight ( 60 ). setLeft ( 100 ); shape . setWidth ( 50 ). setTop ( 200 ); Scale a page element Instead of using setWidth() and setHeight() to set the size of the shape to an absolute value, scaleWidth() and scaleHeight() can be used to stretch or squeeze a page element with a relative scaling factor. shape . scaleHeight ( 0.5 ). scaleWidth ( 2 ); The following figure depicts how the preceding code works on a 45°-rotated square shape.

### Advanced Slides Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/slides](https://developers.google.com/apps-script/advanced/slides)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Advanced Slides service allows Apps Script to read and edit content in Google Slides by accessing the Slides API.
- It is equivalent to the Add a text box to a slide recipe sample. advanced/slides.gs View on GitHub / Add a new text box with text to a page. @param {string} presentationId The presentation ID. @param {string} pageId The page ID. @return {Object} response @see https://developers.google.com/slides/api/reference/rest/v1/presentations/batchUpdate / function addTextBox ( presentationId , pageId ) { // You can specify the ID to use for elements you create, // as long as the ID is unique. const pageElementId = Utilities . getUuid (); const requests = [ { createShape : { objectId : pageElementId , shapeType : "TEXT BOX" , elementProperties : { pageObjectId : pageId , size : { width : { magnitude : 150 , unit : "PT" , }, height : { magnitude : 50 , unit : "PT" , }, }, transform : { scaleX : 1 , scaleY : 1 , translateX : 200 , translateY : 100 , unit : "PT" , }, }, }, }, { insertText : { objectId : pageElementId , text : "My Added Text Box" , insertionIndex : 0 , }, }, ]; try { const response = Slides .
- It is equivalent to the Read element object IDs from a page recipe sample. advanced/slides.gs View on GitHub / Read page element IDs. @param {string} presentationId The presentation to read from. @param {string} pageId The page to read from. @return {Object} response @see https://developers.google.com/slides/api/reference/rest/v1/presentations.pages/get / function readPageElementIds ( presentationId , pageId ) { // You can use a field mask to limit the data the API retrieves // in a get request, or what fields are updated in an batchUpdate. try { const response = Slides .
- Home Google Workspace Apps Script Reference Send feedback Advanced Slides Service Stay organized with collections Save and categorize content based on your preferences.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- February 13, 2018 Feature The Slides service has been extended with the following new methods: Layout.insertGroup(group) Layout.insertImage(image) Layout.insertLine(line) Layout.insertPageElement(pageElement) Layout.insertShape(shape) Layout.insertSheetsChart(sheetsChart) Layout.insertTable(table) Layout.insertVideo(video) Layout.insertWordArt(wordArt) Master.insertGroup(group) Master.insertImage(image) Master.insertLine(line) Master.insertPageElement(pageElement) Master.insertShape(shape) Master.insertSheetsChart(sheetsChart) Master.insertTable(table) Master.insertVideo(video) Master.insertWordArt(wordArt) Page.insertGroup(group) Page.insertImage(image) Page.insertLine(line) Page.insertPageElement(pageElement) Page.insertShape(shape) Page.insertSheetsChart(sheetsChart) Page.insertTable(table) Page.insertVideo(video) Page.insertWordArt(wordArt) Presentation.appendSlide(slide) Presentation.insertSlide(insertionIndex, slide) Slide.insertGroup(group) Slide.insertImage(image) Slide.insertLine(line) Slide.insertPageElement(pageElement) Slide.insertShape(shape) Slide.insertSheetsChart(sheetsChart) Slide.insertTable(table) Slide.insertVideo(video) Slide.insertWordArt(wordArt) TextRange.appendRange(textRange) TextRange.appendRange(textRange, matchSourceFormatting) TextRange.insertRange(startOffset, textRange) TextRange.insertRange(startOffset, textRange, matchSourceFormatting) The Spreadsheet service has been extended with the following new enum class and method: CopyPasteType , an enum class describing paste types.
- Feature The Slides service has been extended with the following new classes and methods that support connector lines: ConnnectionSite Group.getConnectionSites() Image.getConnectionSites() Line.getConnectionSites() Line.getEndConnection() Line.getLineCategory() Line.getStartConnection() Line.isConnector() Line.setEndConnection(connectionSite) Line.setLineCategory(lineCategory) Line.setStartConnection(connectionSite) LineCategory.UNSUPPORTED PageElement.getConnectionSites() Shape.getConnectionSites() SheetsChart.getConnectionSites() Table.getConnectionSites() Video.getConnectionSites() WordArt.getConnectionSites() November 14, 2018 Feature The Card service has been extended with the following new classes and methods that let you to customize the background of text button widgets: TextButtonStyle TextButton.setBackgroundColor(backgroundColor) TextButton.setDisabled(disabled) TextButton.setTextButtonStyle(textButtonStyle) The Slides service has been extended with the following new methods that let you control the Z-positioning of page elements in Slides.

