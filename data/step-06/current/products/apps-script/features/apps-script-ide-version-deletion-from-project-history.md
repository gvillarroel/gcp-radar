---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.651Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script IDE version deletion from project history"
feature_slug: "apps-script-ide-version-deletion-from-project-history"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get"
keywords:
  - "deletion"
  - "history"
  - "version"
  - "project"
  - "ide"
  - "script"
  - "from"
  - "apps"
---

# Apps Script IDE version deletion from project history

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Users can delete script versions from the Project History page in the Apps Script IDE.

## Extended Definition

Users can delete script versions from the Project History page in the Apps Script IDE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- December 06, 2023 Feature ( Generally available ): You can now delete versions in your Apps Script project from the project history page in the Apps Script IDE.
- To learn more, refer to the following: Google Workspace Updates blog : View & compare script versions with Apps Script project history Developer documentation : Versions June 12, 2023 Feature Third-party smart chips and link previews are now generally available.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.

### Method: projects.versions.create \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.create Stay organized with collections Save and categorize content based on your preferences.
- Request body The request body contains data with the following structure: JSON representation { "versionNumber" : integer , "description" : string , "createTime" : string } Fields versionNumber integer The incremental ID that is created by Apps Script when a version is created.
- Page Summary outlined flag A new immutable version of a script project is created using a POST request to a specific URL.
- HTTP request POST https://script.googleapis.com/v1/projects/{scriptId}/versions The URL uses gRPC Transcoding syntax.

### Method: projects.versions.get \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.get Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag This page details how to get a specific version of an Apps Script project using a REST API request.
- HTTP request GET https://script.googleapis.com/v1/projects/{scriptId}/versions/{versionNumber} The URL uses gRPC Transcoding syntax.
- Path parameters Parameters scriptId string The script project's Drive ID. versionNumber integer The version number.

