---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.823Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Standalone Apps Script projects"
feature_slug: "standalone-apps-script-projects"
latest_feature_date: "2012-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list"
keywords:
  - "com"
  - "standalone"
  - "projects"
  - "launched"
  - "script"
  - "apps"
  - "for"
  - "and"
---

# Standalone Apps Script projects

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script launched script.google.com and support for creating standalone scripts not bound to a specific container app.

## Extended Definition

Apps Script launched script.google.com and support for creating standalone scripts not bound to a specific container app.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- June 27, 2012 Feature Launched script.google.com and the ability to create standalone scripts that are not bound to a container like Google Sheets or Google Sites.
- Now, the default GCP projects that Apps Script creates for new scripts are hidden and script owners can't access them directly.

### Method: projects.versions.get \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization Scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/script.projects https://www.googleapis.com/auth/script.projects.readonly For more information, see the OAuth 2.0 Overview .
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.get Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- HTTP request GET https://script.googleapis.com/v1/projects/{scriptId}/versions/{versionNumber} The URL uses gRPC Transcoding syntax.

### Method: projects.deployments.list \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.deployments.list Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- Authorization Scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/script.deployments https://www.googleapis.com/auth/script.deployments.readonly For more information, see the OAuth 2.0 Overview .
- Response body If successful, the response body contains data with the following structure: Response with the list of deployments for the specified Apps Script project.

