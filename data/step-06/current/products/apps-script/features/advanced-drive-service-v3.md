---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.512Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Advanced Drive service v3"
feature_slug: "advanced-drive-service-v3"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/drive"
  - "https://developers.google.com/apps-script/advanced/drive-labels"
  - "https://developers.google.com/apps-script/guides/services/advanced"
keywords:
  - "advanced"
  - "drive"
  - "v3"
  - "lets"
  - "apps"
  - "script"
  - "call"
  - "version"
---

# Advanced Drive service v3

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The advanced Drive service v3 lets Apps Script call version 3 of the Google Drive API.

## Extended Definition

The advanced Drive service v3 lets Apps Script call version 3 of the Google Drive API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)

## Supporting Pages

### Advanced Drive Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The advanced Drive service lets you use the Google Drive API in Google Apps Script.
- Home Google Workspace Apps Script Reference Send feedback Advanced Drive Service Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The advanced Drive service in Apps Script allows interaction with the Google Drive API for file and folder manipulation.
- Like all advanced services in Apps Script, the advanced Drive service uses the same objects, methods, and parameters as the public API.

### Advanced Drive Labels Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code is provided to demonstrate listing labels, getting a specific label, and listing labels applied to a Drive item. using the Drive Labels advanced service in Google Apps Script.
- Home Google Workspace Apps Script Reference Send feedback Advanced Drive Labels Service Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Google Drive Labels advanced service in Apps Script allows you to create and manage labels for Drive files and folders.
- Like all advanced services in Apps Script, the Drive Labels API service uses the same objects, methods, and parameters as the public API.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to enable the Google Drive advanced service, add the enabledAdvancedServices field to the dependencies object: { "timeZone" : "America/Denver" , "dependencies" : { "enabledAdvancedServices" : [ { "userSymbol" : "Drive" , "version" : "v3" , "serviceId" : "drive" } ] }, "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" } After you enable an advanced service, it's available in autocomplete.
- How method signatures are determined Advanced services generally use the same objects, method names, and parameters as the corresponding public APIs, although method signatures are translated for use in Apps Script.
- Enable advanced services To use an advanced Google service, follow these instructions: Step 1: Enable the advanced service Enable an advanced service using the Apps Script editor or by editing the manifest.
- Support for advanced services Because advanced services are thin wrappers around Google APIs, any issue encountered while using them is usually an issue with the underlying API, not with Apps Script.

