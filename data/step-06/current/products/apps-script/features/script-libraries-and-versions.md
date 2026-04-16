---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.661Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script Libraries and Versions"
feature_slug: "script-libraries-and-versions"
latest_feature_date: "2012-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions"
keywords:
  - "script"
  - "libraries"
  - "versions"
  - "apps"
  - "launched"
  - "reusable"
  - "together"
  - "version"
---

# Script Libraries and Versions

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script launched reusable script libraries together with version management.

## Extended Definition

Apps Script launched reusable script libraries together with version management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- May 21, 2012 Feature Launched Script Libraries and Versions in response to this feature request .
- To learn more, refer to the following: Google Workspace Updates blog : View & compare script versions with Apps Script project history Developer documentation : Versions June 12, 2023 Feature Third-party smart chips and link previews are now generally available.
- December 06, 2023 Feature ( Generally available ): You can now delete versions in your Apps Script project from the project history page in the Apps Script IDE.
- August 23, 2023 Feature You can now view previously deployed script versions and compare them to the current script version in the Apps Script IDE.

### Method: projects.versions.list \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.list Stay organized with collections Save and categorize content based on your preferences.
- Response body If successful, the response body contains data with the following structure: Response with the list of the versions for the specified script project.
- HTTP request GET https://script.googleapis.com/v1/projects/{scriptId}/versions The URL uses gRPC Transcoding syntax.
- Page Summary outlined flag You can list the versions of a script project using a GET request to the specified URL.

### REST Resource: projects.versions \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects.versions Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "scriptId" : string , "versionNumber" : integer , "description" : string , "createTime" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The incremental ID that is created by Apps Script when a version is created.
- Methods create Creates a new immutable version using the current code, with a unique version number. get Gets a version of a script project. list List the versions of a script project.
- This is system assigned number and is immutable once created. description string The description for this version. createTime string ( Timestamp format) When the version was created.

