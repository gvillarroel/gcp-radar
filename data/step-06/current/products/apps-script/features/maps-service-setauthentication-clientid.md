---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.636Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Maps service setAuthentication(clientId"
feature_slug: "maps-service-setauthentication-clientid"
latest_feature_date: "2026-03-05"
deprecation_date: "2026-05-31"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/list"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list"
keywords:
  - "setauthentication"
  - "clientid"
  - "signingkey"
  - "maps"
  - "deprecated"
  - "method"
  - "is"
  - "the"
---

# Maps service setAuthentication(clientId

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Maps service method setAuthentication(clientId, signingKey) is deprecated and scheduled for removal; deprecated on 2026-05-31.

## Extended Definition

The Maps service method setAuthentication(clientId, signingKey) is deprecated and scheduled for removal; deprecated on 2026-05-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/list](https://developers.google.com/apps-script/api/reference/rest/v1/processes/list)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- March 05, 2026 Deprecated Deprecated: The method setAuthentication(clientId, signingKey) has been deprecated and is scheduled for sunset in June 2026.
- Feature Generally Available: To authenticate to the Maps service, you can now use an API key with the new methods setAuthenticationByKey(apiKey) and setAuthenticationByKey(apiKey, signingKey) .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- February 26, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support BigQuery data connectors in Sheets : BigQueryDataSourceSpec BigQueryDataSourceSpecBuilder DataExecutionErrorCode DataExecutionState DataExecutionStatus DataSourceParameterType DataSourceParameter DataSourceSpecBuilder DataSourceSpec DataSourceTable DataSourceType DataSource Range.getDataSourceTables() Sheet.getDataSourceTables() SpreadsheetApp.enableAllDataSourcesExecution() SpreadsheetApp.enableBigQueryExecution() SpreadsheetApp.newDataSourceSpec() Spreadsheet.getDataSourceTables() Spreadsheet.insertSheetWithDataSourceTable(spec) The Data Studio service has been extended with the following new methods involving reaggregation settings: Field.getIsReaggregatable() Field.setIsReaggregatable(isReaggregatable) January 22, 2019 Deprecated The deprecated UiApp service will be officially shutdown on July 15th, 2019.

### Method: processes.list \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/list](https://developers.google.com/apps-script/api/reference/rest/v1/processes/list)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The request method is a GET request to https://script.googleapis.com/v1/processes .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- Query parameters Parameters userProcessFilter object ( ListUserProcessesFilter ) A filter used to limit the list results; only processes matching the filter criteria are returned. pageSize integer The maximum number of returned processes per page of results.
- JSON representation { "processes" : [ { object ( Process ) } ] , "nextPageToken" : string } Fields processes[] object ( Process ) List of processes matching request parameters. nextPageToken string Token for the next page of results.

### Method: projects.deployments.list \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- JSON representation { "deployments" : [ { object ( Deployment ) } ] , "nextPageToken" : string } Fields deployments[] object ( Deployment ) The list of deployments. nextPageToken string The token that can be used in the next call to get the next page of results.
- Authorization Scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/script.deployments https://www.googleapis.com/auth/script.deployments.readonly For more information, see the OAuth 2.0 Overview .
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

