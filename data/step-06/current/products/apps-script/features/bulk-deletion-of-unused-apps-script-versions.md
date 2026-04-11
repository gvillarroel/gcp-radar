---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.649Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Bulk deletion of unused Apps Script versions"
feature_slug: "bulk-deletion-of-unused-apps-script-versions"
latest_feature_date: "2024-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions"
keywords:
  - "unused"
  - "bulk"
  - "versions"
  - "projects"
  - "deletion"
  - "script"
  - "apps"
  - "of"
---

# Bulk deletion of unused Apps Script versions

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Projects can now delete multiple unused versions at once from the Project History page.

## Extended Definition

Projects can now delete multiple unused versions at once from the Project History page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions)

## Supporting Pages

### Method: projects.versions.get \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.get Stay organized with collections Save and categorize content based on your preferences.
- Authorization Scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/script.projects https://www.googleapis.com/auth/script.projects.readonly For more information, see the OAuth 2.0 Overview .
- HTTP request GET https://script.googleapis.com/v1/projects/{scriptId}/versions/{versionNumber} The URL uses gRPC Transcoding syntax.
- Page Summary outlined flag This page details how to get a specific version of an Apps Script project using a REST API request.

### Method: projects.versions.create \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.create Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://script.googleapis.com/v1/projects/{scriptId}/versions The URL uses gRPC Transcoding syntax.
- Request body The request body contains data with the following structure: JSON representation { "versionNumber" : integer , "description" : string , "createTime" : string } Fields versionNumber integer The incremental ID that is created by Apps Script when a version is created.
- Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/script.projects For more information, see the OAuth 2.0 Overview .

### REST Resource: projects.versions \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects.versions Stay organized with collections Save and categorize content based on your preferences.
- Methods create Creates a new immutable version using the current code, with a unique version number. get Gets a version of a script project. list List the versions of a script project.
- JSON representation { "scriptId" : string , "versionNumber" : integer , "description" : string , "createTime" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The incremental ID that is created by Apps Script when a version is created.
- Page Summary outlined flag A Version is a snapshot of a script project, similar to a read-only branched release, used when creating deployments.

