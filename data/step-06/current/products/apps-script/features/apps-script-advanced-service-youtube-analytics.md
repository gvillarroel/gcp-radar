---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.782Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Advanced Service: YouTube Analytics"
feature_slug: "apps-script-advanced-service-youtube-analytics"
latest_feature_date: "2013-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/analyticsadmin"
  - "https://developers.google.com/apps-script/advanced/analyticsdata"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "youtube"
  - "analytics"
  - "advanced"
  - "script"
  - "added"
  - "apps"
  - "for"
  - "the"
---

# Apps Script Advanced Service: YouTube Analytics

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added support for the YouTube Analytics Advanced Service in Apps Script.

## Extended Definition

Added support for the YouTube Analytics Advanced Service in Apps Script.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)
- [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Analytics Admin Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the AnalyticsAdmin service uses the same objects, methods, and parameters as the public API.
- Sample code demonstrates how to list Google Analytics accounts accessible by a user using the accounts.list() method. programmatically within Google Apps Script using the Analytics Admin service.
- Page Summary outlined flag The Analytics Admin service in Apps Script allows programmatic access to Google Analytics 4 configuration data via the Google Analytics Admin API v1.
- The Analytics Admin service lets you use the Google Analytics Admin API v1 in Google Apps Script.

### Analytics Data Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the AnalyticsData service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The Analytics Data service allows Google Analytics users to programmatically access Google Analytics 4 (GA4) report data through the Google Analytics Data API v1 in Apps Script.
- The Analytics Data service lets you use the Google Analytics Data API v1 in Google Apps Script.
- This is an advanced service that requires enabling before use in Apps Script.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- Feature Added seven new advanced services : + Admin SDK Directory service + Admin SDK Reports service + Fusion Tables service + Google+ Domains service + Mirror service + YouTube service + YouTube Analytics service December 02, 2013 Fixed Issue 3101 : Removed the SitesApp method Site.deleteSite() , which was never functional.

