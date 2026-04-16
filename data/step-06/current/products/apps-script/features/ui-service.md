---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.537Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UI service"
feature_slug: "ui-service"
latest_feature_date: "2019-08-07"
deprecation_date: "July 15, 2019"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html/best-practices"
  - "https://developers.google.com/apps-script/reference/spreadsheet/banding-theme"
keywords:
  - "ui"
  - "apps"
  - "script"
  - "documentation"
  - "was"
  - "removed"
  - "after"
  - "deprecated"
---

# UI service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script UI service documentation was removed after the service was deprecated and shut down; The UI service provided Apps Script user interface capabilities before HTML Service replaced it; deprecated on July 15, 2019.

## Extended Definition

Apps Script UI service documentation was removed after the service was deprecated and shut down; The UI service provided Apps Script user interface capabilities before HTML Service replaced it; deprecated on July 15, 2019.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)
- [https://developers.google.com/apps-script/reference/spreadsheet/banding-theme](https://developers.google.com/apps-script/reference/spreadsheet/banding-theme)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The deprecated SOAP service and old XML service have now been removed from autocomplete and documentation, as announced on July 9, 2013 and documented in the Apps Script sunset schedule .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .

### HTML Service: Best Practices \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Although Apps Script requires client-side code to be in .html files, you should still separate CSS and client-side JavaScript into their own files and include them in the main HTML page with a custom function.
- Home Google Workspace Apps Script Guides Send feedback HTML Service: Best Practices Stay organized with collections Save and categorize content based on your preferences.
- However, certain aspects are specific to the Apps Script environment.
- Don't — load in templates <p>List of things:</p> <? var things = getLotsOfThings(); ?> <ul> <? for (var i = 0; i < things.length; i++) { ?> <li><?= things[i] ?></li> <? } ?> </ul> Do — load asynchronously <p>List of things:</p> <ul id="things"> <li>Loading...</li> </ul> <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"> </script> <script> // The code in this function runs when the page is loaded. $(function() { google.script.run.withSuccessHandler(showThings) .getLotsOfThings(); }); function showThings(things) { var list = $('#things'); list.empty(); for (var i = 0; i < things.length; i++) { list.append('<li>' + things[i] + '</li>'); } } </script> Load resources using HTTPS In IFRAME sandbox mode , all JavaScript and CSS files must be served over HTTPS.

### Enum BandingTheme \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/banding-theme](https://developers.google.com/apps-script/reference/spreadsheet/banding-theme)
- Source ID: `site-docs-reference-required-4`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Enum BandingTheme Stay organized with collections Save and categorize content based on your preferences.
- Properties Property Type Description LIGHT GREY Enum A light grey banding theme.

