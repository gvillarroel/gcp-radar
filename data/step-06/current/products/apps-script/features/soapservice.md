---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.794Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "SoapService"
feature_slug: "soapservice"
latest_feature_date: "2013-07-09"
deprecation_date: "2013-07-09"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
keywords:
  - "soapservice"
  - "deprecates"
  - "deprecated"
  - "script"
  - "apps"
  - "the"
  - "on"
  - "in"
---

# SoapService

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecates the SoapService in Apps Script; deprecated on 2013-07-09.

## Extended Definition

Deprecates the SoapService in Apps Script; deprecated on 2013-07-09.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse](https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)

## Supporting Pages

### ExecutionResponse \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse](https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a Document or a Calendar ); they can only return primitive types such as a string , number , array , object , or boolean .
- Only primitive types like string, number, array, object, or boolean can be returned by functions called using the Apps Script API.
- Page Summary outlined flag ExecutionResponse represents the return value of a function executed using the Apps Script API.
- JSON representation An object that provides the return value of a function executed using the Apps Script API.

### Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Migration service in Apps Script allows administrators to migrate emails from public folders and distribution lists to Google Groups discussion archives.
- Like all advanced services in Apps Script, the Admin SDK Groups Migration service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Migration service lets you use the Admin SDK's Groups Migration API in Google Apps Script.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Groups Migration Service Stay organized with collections Save and categorize content based on your preferences.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Here, the description is modified, but various other settings can be changed in the same way. @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch / function updateGroupSettings () { const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings . newGroups (); group . description = "Newly changed group description" ; AdminGroupsSettings .
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Groups Settings Service Stay organized with collections Save and categorize content based on your preferences.
- Here, the description is modified, but various other settings can be changed in the same way. advanced/adminSDK.gs View on GitHub / Updates group's settings.

