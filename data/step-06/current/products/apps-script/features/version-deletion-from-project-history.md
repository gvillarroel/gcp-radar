---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.513Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Version deletion from project history"
feature_slug: "version-deletion-from-project-history"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create"
keywords:
  - "version"
  - "deletion"
  - "project"
  - "history"
  - "lets"
  - "users"
  - "remove"
  - "undeployed"
---

# Version deletion from project history

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Version deletion from project history lets users remove undeployed script versions from the Apps Script IDE.

## Extended Definition

Version deletion from project history lets users remove undeployed script versions from the Apps Script IDE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, refer to the following: Google Workspace Updates blog : View & compare script versions with Apps Script project history Developer documentation : Versions June 12, 2023 Feature Third-party smart chips and link previews are now generally available.
- December 06, 2023 Feature ( Generally available ): You can now delete versions in your Apps Script project from the project history page in the Apps Script IDE.
- If your script reaches the versions limit, or you want to clean up your script project, delete undeployed versions that you no longer need.
- March 07, 2024 Feature (Generally Available) : You can now delete multiple unused versions at the same time from the Project History page.

### Method: projects.versions.list \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.list Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains data with the following structure: Response with the list of the versions for the specified script project.
- HTTP request GET https://script.googleapis.com/v1/projects/{scriptId}/versions The URL uses gRPC Transcoding syntax.
- Page Summary outlined flag You can list the versions of a script project using a GET request to the specified URL.

### Method: projects.versions.create \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.create Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag A new immutable version of a script project is created using a POST request to a specific URL.
- HTTP request POST https://script.googleapis.com/v1/projects/{scriptId}/versions The URL uses gRPC Transcoding syntax.
- Request body The request body contains data with the following structure: JSON representation { "versionNumber" : integer , "description" : string , "createTime" : string } Fields versionNumber integer The incremental ID that is created by Apps Script when a version is created.

