---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.836Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UrlShortener Service"
feature_slug: "urlshortener-service"
latest_feature_date: "2011-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses"
  - "https://developers.google.com/apps-script/guides/services/quotas"
keywords:
  - "urlshortener"
  - "creating"
  - "script"
  - "added"
  - "apps"
  - "for"
  - "and"
  - "the"
---

# UrlShortener Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script added the UrlShortener service for creating and managing goo.gl short URLs.

## Extended Definition

Apps Script added the UrlShortener service for creating and managing goo.gl short URLs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- November 03, 2022 Feature Apps Script added a new method to the Utilities class . parseDate(date, timeZone, format ) parses a provided string date according to the specification described in the Java Standard Edition SimpleDateFormat class .
- Added support for registering Apps Script web apps in the Chrome Web Store , making it quick and simple to publish and distribute your web apps.
- July 22, 2013 Feature Added DriveApp and FormApp to the services tracked on the Apps Script Dashboard .

### "Method: processes.listScriptProcesses \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The ListScriptProcessesFilter object allows for filtering processes by deployment ID, function name, start and end time, process types, statuses, and user access levels.
- JSON representation { "deploymentId" : string , "functionName" : string , "startTime" : string , "endTime" : string , "types" : [ enum ( ProcessType ) ] , "statuses" : [ enum ( ProcessStatus ) ] , "userAccessLevels" : [ enum ( UserAccessLevel ) ] } Fields deploymentId string Optional field used to limit returned processes to those originating from projects with a specific deployment ID. functionName string Optional field used to limit returned processes to those originating from a script function with the given function name. startTime string ( Timestamp format) Optional field used to limit returned processes to those that were started on or after the given timestamp.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . endTime string ( Timestamp format) Optional field used to limit returned processes to those that completed on or before the given timestamp.

### Quotas for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Monitor quota usage To monitor your script's quota consumption and execution health, use the following methods: Email quota : Use MailApp.getRemainingDailyQuota() to check the number of remaining email recipients you can send to for the rest of the day.
- Google Cloud console : If your Apps Script project uses a standard Google Cloud project , you can monitor service-specific quotas and API usage in the Google Cloud console .
- Home Google Workspace Apps Script Reference Send feedback Quotas for Google Services Stay organized with collections Save and categorize content based on your preferences.
- Execution monitoring : Use the Apps Script dashboard to view your script's execution history and health.

