---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.672Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Prediction service"
feature_slug: "prediction-service"
latest_feature_date: "2011-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/spreadsheet/cell-image"
  - "https://developers.google.com/apps-script/guides/client-verification"
keywords:
  - "prediction"
  - "apps"
  - "script"
  - "includes"
  - "accessing"
  - "hosted"
  - "machine"
  - "learning"
---

# Prediction service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script includes a prediction service for accessing hosted machine learning capabilities.

## Extended Definition

Apps Script includes a prediction service for accessing hosted machine learning capabilities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image)
- [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Added the Prediction Services , which allow users to access a cloud hosted machine learning service that makes it easy to build smart apps.
- This API includes and extends the original Apps Script API.
- This change includes published Apps Script web apps.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Class CellImage \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image)
- Source ID: `site-docs-reference-required-4`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IMAGE ) { const newImage = value . toBuilder () . setSourceUrl ( 'https://www.gstatic.com/images/branding/productlogos/apps script/v10/web-64dp/logo apps script color 1x web 64dp.png' , ) . build (); const newRange = ss . getRange ( "Sheet1!A2" ); newRange . setValue ( newImage ); } Return CellImageBuilder — A builder that creates an image value type based on the given image properties.
- Methods Method Return type Brief description get Alt Text Description() String Returns the alt text description for this image. get Alt Text Title() String Returns the alt text title for this image. get Content Url() String Returns a Google-hosted URL to the image. to Builder() Cell Image Builder Creates a cell image builder based on the current image properties.
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets getContentUrl() Returns a Google-hosted URL to the image.
- Key methods include retrieving alt text ( getAltTextDescription , getAltTextTitle ), getting a Google-hosted content URL ( getContentUrl ), and creating a builder based on current properties ( toBuilder ).

### OAuth Client Verification \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the following articles: Unverified Apps OAuth Application Verification FAQ Google API Services: User Data Policy Figure 1 : Unverified app screen Figure 2 : Unverified app authorization flow This change applies to Google OAuth web clients, including those used by all Apps Script projects.
- Unverified apps Google Workspace add-ons, web apps, and other deployments (such as apps that use the Apps Script API ) may need verification. add-ons are no longer verified as part of the Google Workspace add-on review process , and must be verified prior to publishing an add-on.
- Page Summary outlined flag Google requires verification for Google OAuth clients requesting certain sensitive OAuth scopes, though Apps Script projects within the same Google Workspace domain or customer are exempt.
- Unverified Apps Script projects using sensitive scopes and accessed by users outside the domain will display an "unverified app" screen and have a cap on the number of unverified users.

