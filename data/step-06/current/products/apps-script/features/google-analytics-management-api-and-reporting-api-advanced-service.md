---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.498Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Google Analytics Management API and Reporting API advanced service"
feature_slug: "google-analytics-management-api-and-reporting-api-advanced-service"
latest_feature_date: "2025-06-04"
deprecation_date: "2025-06-04"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/analyticsadmin"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/adsense"
keywords:
  - "analytics"
  - "management"
  - "reporting"
  - "advanced"
  - "provides"
  - "apps"
  - "script"
  - "access"
---

# Google Analytics Management API and Reporting API advanced service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Google Analytics Management API and Reporting API advanced service provides Apps Script access to Universal Analytics administration and reporting APIs; deprecated on 2025-06-04.

## Extended Definition

The Google Analytics Management API and Reporting API advanced service provides Apps Script access to Universal Analytics administration and reporting APIs; deprecated on 2025-06-04.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)

## Supporting Pages

### Analytics Admin Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/analyticsadmin](https://developers.google.com/apps-script/advanced/analyticsadmin)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code demonstrates how to list Google Analytics accounts accessible by a user using the accounts.list() method. programmatically within Google Apps Script using the Analytics Admin service.
- Page Summary outlined flag The Analytics Admin service in Apps Script allows programmatic access to Google Analytics 4 configuration data via the Google Analytics Admin API v1.
- Like all advanced services in Apps Script, the AnalyticsAdmin service uses the same objects, methods, and parameters as the public API.
- Sample code Run a report The sample lists all the Google Analytics accounts available to a user by calling the accounts.list() method. advanced/analyticsAdmin.gs View on GitHub / Logs the Google Analytics accounts accessible by the current user. / function listAccounts () { try { accounts = AnalyticsAdmin .

### AdSense Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The AdSense service in Apps Script uses the AdSense Management API to allow users to access account structure information and run performance reports.
- Like all advanced services in Apps Script, the AdSense service uses the same objects, methods, and parameters as the public API.
- The AdSense service lets you use the AdSense Management API in Google Apps Script.
- Adunits . list ( adClientName , { pageSize : 50 , pageToken : pageToken , }); if ( ! response . adUnits ) { console . log ( "No ad units found for this ad client." ); return ; } for ( const adUnit of response . adUnits ) { console . log ( 'Found ad unit with resource name "%s" and display name "%s".' , adUnit . name , adUnit . displayName , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } Generate a report This sample generates a report over your AdSense account and outputs the results to a spreadsheet. advanced/adsense.gs View on GitHub / Generates a spreadsheet report for a specific ad client in an account. @param {string} accountName The resource name of the account. @param {string} adClientReportingDimensionId The reporting dimension ID of the ad client. / function generateReport ( accountName , adClientReportingDimensionId ) { // Prepare report. const today = new Date (); const oneWeekAgo = new Date ( today . getTime () - 7 24 60 60 1000 ); const report = AdSense .

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- For more information refer to the following: Columns for Apps Script Columns for HTTP runtimes May 02, 2024 Feature To subscribe to events using Apps Script, you can now use the Advanced Google Workspace Events service.

