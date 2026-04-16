---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.514Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Classic Google Sites service"
feature_slug: "classic-google-sites-service"
latest_feature_date: "2023-09-19"
deprecation_date: "2023-09-19"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/tables"
  - "https://developers.google.com/apps-script/api/concepts"
keywords:
  - "classic"
  - "sites"
  - "provides"
  - "apps"
  - "script"
  - "integration"
  - "deprecated"
  - "2023"
---

# Classic Google Sites service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The classic Google Sites service provides Apps Script integration with classic Sites; deprecated on 2023-09-19.

## Extended Definition

The classic Google Sites service provides Apps Script integration with classic Sites; deprecated on 2023-09-19.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.
- September 19, 2023 Deprecated The classic Google Sites service has been deprecated due to the transition from classic Sites to new Sites .
- October 21, 2010 Feature Added integration with Google Sites, so that Apps Script can now be run from within Google Sites.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Sites service September 19, 2023 September 24, 2024 Service no longer functions. getChatThreads() , getChatThreads(start, max) July 8, 2022 November 1, 2022 These methods are unavailable and existing scripts fail when using these methods.
- Page Summary outlined flag Apps Script features are marked as deprecated before they are shut down, allowing time for migration to supported alternatives.
- Once a sunset date for an Apps Script feature is announced, the feature is considered deprecated, but is available for use until the sunset date.
- The table above lists deprecated Apps Script features, their deprecation and sunset dates, and the expected behavior after sunset.

### Introduction \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)
- Source ID: `site-docs-root`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use this resource to monitor script executions initiated using the scripts.run method. scripts — The endpoint that provides methods to remotely execute Apps Script functions.
- You can programmatically create, modify, and deploy Google Apps Script projects, and execute Apps Script functions remotely—actions that otherwise require using the Apps Script editor or its UI.
- Home Google Workspace Apps Script Guides Send feedback Introduction Stay organized with collections Save and categorize content based on your preferences.
- Overview of the API The Apps Script API is divided into several resources, each with a specific purpose and set of requests you can make.

