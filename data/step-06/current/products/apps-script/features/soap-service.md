---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.606Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "SOAP service"
feature_slug: "soap-service"
latest_feature_date: "2014-04-10"
deprecation_date: "2014-04-10"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/tables"
  - "https://developers.google.com/apps-script/reference/spreadsheet/cell-image"
keywords:
  - "soap"
  - "provided"
  - "apps"
  - "script"
  - "integration"
  - "based"
  - "web"
  - "deprecated"
---

# SOAP service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The SOAP service provided Apps Script integration with SOAP-based web services; deprecated on 2014-04-10.

## Extended Definition

The SOAP service provided Apps Script integration with SOAP-based web services; deprecated on 2014-04-10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The deprecated SOAP service and old XML service have now been removed from autocomplete and documentation, as announced on July 9, 2013 and documented in the Apps Script sunset schedule .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Apps Script Support Send feedback Apps Script Sunset Schedule Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag Apps Script features are marked as deprecated before they are shut down, allowing time for migration to supported alternatives.
- Once a sunset date for an Apps Script feature is announced, the feature is considered deprecated, but is available for use until the sunset date.
- The table above lists deprecated Apps Script features, their deprecation and sunset dates, and the expected behavior after sunset.

### Class CellImage \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image)
- Source ID: `site-docs-reference-required-4`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IMAGE ) { const newImage = value . toBuilder () . setSourceUrl ( 'https://www.gstatic.com/images/branding/productlogos/apps script/v10/web-64dp/logo apps script color 1x web 64dp.png' , ) . build (); const newRange = ss . getRange ( "Sheet1!A2" ); newRange . setValue ( newImage ); } Return CellImageBuilder — A builder that creates an image value type based on the given image properties.
- Home Google Workspace Apps Script Reference Send feedback Class CellImage Stay organized with collections Save and categorize content based on your preferences.
- Methods Method Return type Brief description get Alt Text Description() String Returns the alt text description for this image. get Alt Text Title() String Returns the alt text title for this image. get Content Url() String Returns a Google-hosted URL to the image. to Builder() Cell Image Builder Creates a cell image builder based on the current image properties.
- Key methods include retrieving alt text ( getAltTextDescription , getAltTextTitle ), getting a Google-hosted content URL ( getContentUrl ), and creating a builder based on current properties ( toBuilder ).

