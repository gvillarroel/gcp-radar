---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.707Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Stackdriver Error Reporting integration"
feature_slug: "apps-script-stackdriver-error-reporting-integration"
latest_feature_date: "2017-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
keywords:
  - "stackdriver"
  - "reporting"
  - "integration"
  - "error"
  - "enabled"
  - "script"
  - "apps"
  - "to"
---

# Apps Script Stackdriver Error Reporting integration

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Enabled Apps Script to collect exception and error reports through Stackdriver Error Reporting.

## Extended Definition

Enabled Apps Script to collect exception and error reports through Stackdriver Error Reporting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError](https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- October 21, 2010 Feature Added integration with Google Sites, so that Apps Script can now be run from within Google Sites.
- Enabled the collection of exception and error reports using Stackdriver Error Reporting .

### ExecutionError \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError](https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "scriptStackTraceElements" : [ { object ( ScriptStackTraceElement ) } ] , "errorMessage" : string , "errorType" : string } Fields scriptStackTraceElements[] object ( ScriptStackTraceElement ) An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first. errorMessage string The error message thrown by Apps Script, usually localized into the user's language. errorType string The error type, for example TypeError or ReferenceError .
- JSON representation ScriptStackTraceElement JSON representation An object that provides information about the nature of an error resulting from an attempted execution of a script function using the Apps Script API.
- Home Google Workspace Apps Script Reference Send feedback ExecutionError Stay organized with collections Save and categorize content based on your preferences.
- If a run call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains a Status object.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Admin SDK Directory service in Apps Script allows administrators of Google Workspace domains to manage devices, groups, users, and other entities.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Directory Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Admin SDK Directory service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Directory service lets you use the Admin SDK's Directory API in Google Apps Script.

