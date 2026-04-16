---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.670Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Cache service"
feature_slug: "cache-service"
latest_feature_date: "2011-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/support/best-practices"
  - "https://developers.google.com/apps-script/advanced/analyticsdata"
keywords:
  - "cache"
  - "apps"
  - "script"
  - "includes"
  - "storing"
  - "temporary"
---

# Cache service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script includes a cache service for storing temporary data.

## Extended Definition

Apps Script includes a cache service for storing temporary data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/support/best-practices](https://developers.google.com/apps-script/guides/support/best-practices)
- [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- UrlFetch requests made by scripts that run on a time-based trigger now include an If-Modified-Since HTTP header so that Apps Script can use a cached copy of the page if one is available and the page has not changed.
- This API includes and extends the original Apps Script API.
- This change includes published Apps Script web apps.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Best Practices \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/support/best-practices](https://developers.google.com/apps-script/guides/support/best-practices)
- Source ID: `site-docs-root-3`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to use the Cache service to speed up access to a slow RSS feed. function getRssFeed () { var cache = CacheService . getScriptCache (); var cached = cache . get ( "rss-feed-contents" ); if ( cached != null ) { return cached ; } // This fetch takes 20 seconds: var result = UrlFetchApp . fetch ( "http://example.com/my-slow-rss-feed.xml" ); var contents = result . getContentText (); cache . put ( "rss-feed-contents" , contents , 1500 ); // cache for 25 minutes return contents ; } While you still wait 20 seconds if the item isn't in cache, subsequent accesses are fast until the item expires.
- Anything you accomplish within Google Apps Script itself is faster than fetching data from Google's servers or an external server, such as requests to Sheets, Docs, Sites, Sites, Translate, and UrlFetch.
- Home Google Workspace Apps Script Support Send feedback Best Practices Stay organized with collections Save and categorize content based on your preferences.
- You can use Connected Sheets to analyze large BigQuery datasets directly in Sheets, or use the BigQuery service to interact with data from Apps Script.

### Analytics Data Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsdata](https://developers.google.com/apps-script/advanced/analyticsdata)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Analytics Data service allows Google Analytics users to programmatically access Google Analytics 4 (GA4) report data through the Google Analytics Data API v1 in Apps Script.
- Home Google Workspace Apps Script Reference Send feedback Analytics Data Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the AnalyticsData service uses the same objects, methods, and parameters as the public API.
- The Analytics Data service lets you use the Google Analytics Data API v1 in Google Apps Script.

