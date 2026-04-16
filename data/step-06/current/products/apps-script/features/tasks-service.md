---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.673Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Tasks service"
feature_slug: "tasks-service"
latest_feature_date: "2011-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/tasks"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses"
keywords:
  - "tasks"
  - "apps"
  - "script"
  - "includes"
  - "managing"
  - "task"
  - "lists"
---

# Tasks service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script includes a service for managing tasks and task lists.

## Extended Definition

Apps Script includes a service for managing tasks and task lists.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/tasks](https://developers.google.com/apps-script/advanced/tasks)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)

## Supporting Pages

### Tasks Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tasks](https://developers.google.com/apps-script/advanced/tasks)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Tasks Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Tasks service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The Tasks service in Apps Script allows you to use the Google Tasks API to manage tasks in Gmail.
- The Tasks service lets you use the Google Tasks API in Google Apps Script.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Added the Tasks Services , which allow users to manage tasks and task lists.
- This API includes and extends the original Apps Script API.
- This change includes published Apps Script web apps.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### "Method: processes.listScriptProcesses \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: processes.listScriptProcesses Stay organized with collections Save and categorize content based on your preferences.
- Query parameters Parameters scriptId string The script ID of the project whose processes are listed. scriptProcessFilter object ( ListScriptProcessesFilter ) A filter used to limit the list results; only processes matching the filter criteria are returned. pageSize integer The maximum number of returned processes per page of results.
- The ListScriptProcessesFilter object allows for filtering processes by deployment ID, function name, start and end time, process types, statuses, and user access levels.
- HTTP request Query parameters Request body Response body JSON representation Authorization Scopes ListScriptProcessesFilter JSON representation Try it!

