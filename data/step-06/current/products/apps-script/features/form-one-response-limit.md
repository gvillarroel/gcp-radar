---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.598Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Form one-response limit"
feature_slug: "form-one-response-limit"
latest_feature_date: "2014-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/triggers/events"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/list"
keywords:
  - "form"
  - "one"
  - "response"
  - "limit"
  - "forms"
  - "can"
  - "get"
  - "set"
---

# Form one-response limit

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Forms can get and set whether respondents are limited to one response per user.

## Extended Definition

Forms can get and set whether respondents are limited to one response per user.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/list](https://developers.google.com/apps-script/api/reference/rest/v1/processes/list)

## Supporting Pages

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Presentation user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Google Forms events The Forms-specific triggers let scripts respond when a user edits a form or submits a response.
- FormResponse source A Form object, representing the Forms file to which the script is bound.
- LIMITED source A Form object, representing the Forms file to which the script is bound.
- This page details the fields within the event object for various trigger types across different Google services like Sheets, Docs, Slides, Forms, Calendar, and Workspace add-ons.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Forms service now has the following method: Form.deleteResponse(responseId) The Utilities service now has the following methods: Utilities.computeDigest(algorithm, value) , where value is a Byte array Utilities.computeHmacSha256Signature(value, key) , where value and key are Byte arrays Utilities.computeHmacSignature(algorithm, value, key) , where value and key are Byte arrays Change The quota limits for UrlFetch GET response size and POST size have been increased to 50MB / call.
- July 28, 2017 Feature Added a Spreadsheet.getFormUrl() method that returns the URLs of Forms send responses to this Sheet or Spreadsheet.
- Form.setLimitOneResponsePerUser(enabled) : Sets whether the form allows only one response per respondent.
- Form.hasLimitOneResponsePerUser() : Determines whether the form allows only one response per respondent.

### Method: processes.list \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/list](https://developers.google.com/apps-script/api/reference/rest/v1/processes/list)
- Source ID: `site-api-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "scriptId" : string , "deploymentId" : string , "projectName" : string , "functionName" : string , "startTime" : string , "endTime" : string , "types" : [ enum ( ProcessType ) ] , "statuses" : [ enum ( ProcessStatus ) ] , "userAccessLevels" : [ enum ( UserAccessLevel ) ] } Fields scriptId string Optional field used to limit returned processes to those originating from projects with a specific script ID. deploymentId string Optional field used to limit returned processes to those originating from projects with a specific deployment ID. projectName string Optional field used to limit returned processes to those originating from projects with project names containing a specific string. functionName string Optional field used to limit returned processes to those originating from a script function with the given function name. startTime string ( Timestamp format) Optional field used to limit returned processes to those that were started on or after the given timestamp.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . endTime string ( Timestamp format) Optional field used to limit returned processes to those that completed on or before the given timestamp.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . types[] enum ( ProcessType ) Optional field used to limit returned processes to those having one of the specified process types. statuses[] enum ( ProcessStatus ) Optional field used to limit returned processes to those having one of the specified process statuses. userAccessLevels[] enum ( UserAccessLevel ) Optional field used to limit returned processes to those having one of the specified user access levels.

