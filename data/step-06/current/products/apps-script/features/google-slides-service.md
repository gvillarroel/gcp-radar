---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.577Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Google Slides service"
feature_slug: "google-slides-service"
latest_feature_date: "2017-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/slides/presentations"
  - "https://developers.google.com/apps-script/guides/slides/editing-styling"
keywords:
  - "slides"
  - "apps"
  - "script"
  - "adds"
  - "including"
  - "presentation"
  - "editing"
  - "add"
---

# Google Slides service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script adds support for the Google Slides service, including presentation editing and Slides add-on development.

## Extended Definition

Apps Script adds support for the Google Slides service, including presentation editing and Slides add-on development.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/slides/presentations](https://developers.google.com/apps-script/guides/slides/presentations)
- [https://developers.google.com/apps-script/guides/slides/editing-styling](https://developers.google.com/apps-script/guides/slides/editing-styling)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- You can now use Apps Script to create and edit presentations and their contents; you can also build add-ons for Google Slides .
- Page Summary outlined flag Several Apps Script services have been updated, including the Spreadsheet, Forms, Calendar, Docs, Chat, and Google Workspace Add-ons services, adding new features and capabilities.
- September 26, 2017 Feature Added Apps Script support for the Google Slides service .

### Structure of a presentation \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/slides/presentations](https://developers.google.com/apps-script/guides/slides/presentations)
- Source ID: `site-docs-root-3`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Guides Send feedback Structure of a presentation Stay organized with collections Save and categorize content based on your preferences.
- A Page can be one of the following types: Page type Description Slide The pages that users see and flip between when the presentation is rendered on a screen.
- Page Summary outlined flag A Google Slides Presentation is composed of pages, and a Page can have one or more page elements.
- There are various types of pages a presentation can contain, including Slide, Master, Layout, NotesPage, and NotesMasters.

### Edit and style text \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/slides/editing-styling](https://developers.google.com/apps-script/guides/slides/editing-styling)
- Source ID: `site-docs-root-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following script demonstrates the use of these functions: slides/style/style.gs View on GitHub try { // Get the first slide of active presentation const slide = SlidesApp . getActivePresentation (). getSlides ()[ 0 ]; // Insert shape in the slide with dimensions const shape = slide . insertShape ( SlidesApp .
- CENTER ); } } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with an error %s " , err . message ); } List styling Similar to ParagraphStyle , ListStyle can be used for styling all paragraphs which overlap the parent text range. slides/style/style.gs View on GitHub try { // Get the first slide of active presentation const slide = SlidesApp . getActivePresentation (). getSlides ()[ 0 ]; // Insert shape in the slide with dimensions const shape = slide . insertShape ( SlidesApp .
- The following example creates a text box on the first slide with four paragraphs, then center aligns the first three paragraphs. slides/style/style.gs View on GitHub try { // Get the first slide of active presentation const slide = SlidesApp . getActivePresentation (). getSlides ()[ 0 ]; // Insert shape in the slide with dimensions const shape = slide . insertShape ( SlidesApp .
- The TextStyle object covers the same text as its parent TextRange . slides/style/style.gs View on GitHub try { // Get the first slide of active presentation const slide = SlidesApp . getActivePresentation (). getSlides ()[ 0 ]; // Insert shape in the slide with dimensions const shape = slide . insertShape ( SlidesApp .

