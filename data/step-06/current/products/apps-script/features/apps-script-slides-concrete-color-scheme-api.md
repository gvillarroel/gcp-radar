---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.684Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Slides concrete color scheme API"
feature_slug: "apps-script-slides-concrete-color-scheme-api"
latest_feature_date: "2019-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest"
  - "https://developers.google.com/apps-script/advanced/calendar"
keywords:
  - "concrete"
  - "scheme"
  - "slides"
  - "color"
  - "script"
  - "api"
  - "apps"
  - "the"
---

# Apps Script Slides concrete color scheme API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Slides service gained methods to set concrete theme colors on a presentation’s color scheme.

## Extended Definition

The Slides service gained methods to set concrete theme colors on a presentation’s color scheme.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- The Slides service has been extended with the following new methods to support concrete color schemes: ColorScheme.setConcreteColor(type, color) ColorScheme.setConcreteColor(type, red, green, blue) ColorScheme.setConcreteColor(type, hexColor) The Spreadsheet service has been extended with the following new methods to support trimming whitespace and removing duplicate values: RangeList.trimWhitespace() Range.removeDuplicates() Range.removeDuplicates(columnsToCompare) Range.trimWhitespace() May 20, 2019 Feature The Gmail service has been updated with the GmailMessage.getHeader(name) method that can retrieve a RFC 2822 header from a message.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The following is a full list of the removed classes and methods: Charts service CategoryFilterBuilder Control DashboardPanel DashboardPanelBuilder Chart.getId() Chart.getType() Charts.newCategoryFilter() Charts.newDashboardPanel() Charts.newNumberRangeFilter() Charts.newStringFilter() NumberRangeFilterBuilder.build() NumberRangeFilterBuilder.setDataTable(tableBuilder) NumberRangeFilterBuilder.setDataTable(table) NumberRangeFilterBuilder.setFilterColumnIndex(columnIndex) NumberRangeFilterBuilder.setFilterColumnLabel(columnLabel) NumberRangeFilterBuilder.setLabel(label) NumberRangeFilterBuilder.setLabelSeparator(labelSeparator) NumberRangeFilterBuilder.setLabelStacking(orientation) StringFilterBuilder.build() StringFilterBuilder.setDataTable(tableBuilder) StringFilterBuilder.setDataTable(table) StringFilterBuilder.setFilterColumnIndex(columnIndex) StringFilterBuilder.setFilterColumnLabel(columnLabel) StringFilterBuilder.setLabel(label) StringFilterBuilder.setLabelSeparator(labelSeparator) StringFilterBuilder.setLabelStacking(orientation) Spreadsheet service EmbeddedChart.getId() EmbeddedChart.getType() EmbeddedChart.setId(id) Change The Slides service class RgbColor and the enumeration ColorType have been moved from the Slides service to the Base script service.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .

### Apps Script API \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.deployments Methods create POST /v1/projects/{scriptId}/deployments Creates a deployment of an Apps Script project. delete DELETE /v1/projects/{scriptId}/deployments/{deploymentId} Deletes a deployment of an Apps Script project. get GET /v1/projects/{scriptId}/deployments/{deploymentId} Gets a deployment of an Apps Script project. list GET /v1/projects/{scriptId}/deployments Lists the deployments of an Apps Script project. update PUT /v1/projects/{deploymentConfig.scriptId}/deployments/{deploymentId} Updates a deployment of an Apps Script project.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://script.googleapis.com REST Resource: v1.processes Methods list GET /v1/processes List information about processes made by or on behalf of a user, such as process type and current status. listScriptProcesses GET /v1/processes:listScriptProcesses List information about a script's executed processes, such as process type and current status.
- REST Resource: v1.processes REST Resource: v1.projects REST Resource: v1.projects.deployments REST Resource: v1.projects.versions REST Resource: v1.scripts Service: script.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery document: https://script.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The advanced Calendar service in Apps Script allows access to the public Google Calendar API, offering more features than the built-in service, such as setting event background colors.
- Much like Apps Script's built-in Calendar service , this API allows scripts to access and modify the user's Google Calendar, including additional calendars that the user is subscribed to.
- Like all advanced services in Apps Script, the advanced Calendar service uses the same objects, methods, and parameters as the public API.
- The advanced Calendar service lets you use the public Google Calendar API in Google Apps Script.

