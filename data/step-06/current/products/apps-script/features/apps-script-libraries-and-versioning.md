---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.824Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script libraries and versioning"
feature_slug: "apps-script-libraries-and-versioning"
latest_feature_date: "2012-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest"
  - "https://developers.google.com/apps-script/overview"
keywords:
  - "versioning"
  - "libraries"
  - "launched"
  - "script"
  - "apps"
  - "and"
---

# Apps Script libraries and versioning

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script launched Script Libraries and script versioning support.

## Extended Definition

Apps Script launched Script Libraries and script versioning support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)
- [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Announcement Launched the Google Apps Script Dashboard so that developers can view service health and quota limits.
- Launched the Html Service , which you can use to create web apps using HTML, CSS, and JavaScript.
- May 21, 2012 Feature Launched Script Libraries and Versions in response to this feature request .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Apps Script API \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Apps Script API Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag This API manages and executes Google Apps Script projects.
- Manages and executes Google Apps Script projects.
- REST Resource: v1.projects Methods create POST /v1/projects Creates a new, empty script project with no script files and a base manifest file. get GET /v1/projects/{scriptId} Gets a script project's metadata. getContent GET /v1/projects/{scriptId}/content Gets the content of the script project, including the code source and metadata for each script file. getMetrics GET /v1/projects/{scriptId}/metrics Get metrics data for scripts, such as number of executions and active users. updateContent PUT /v1/projects/{scriptId}/content Updates the content of the specified script project.

### Google Apps Script overview \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Google Apps Script is a rapid application development platform for creating business applications that integrate with Google Workspace, using modern JavaScript and built-in libraries for popular Google applications.
- If you're new to JavaScript, Codecademy offers a number of JavaScript courses . (These courses weren't developed by and aren't associated with Google.) What can Apps Script do?
- Apps Script is versatile and can be used to add custom features to Google Docs, Sheets, and Forms, build web apps, interact with other Google services, and create add-ons.
- Home Google Workspace Apps Script Guides Send feedback Google Apps Script overview Stay organized with collections Save and categorize content based on your preferences.

