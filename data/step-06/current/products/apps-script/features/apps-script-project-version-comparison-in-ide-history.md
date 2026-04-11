---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.652Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script project version comparison in IDE history"
feature_slug: "apps-script-project-version-comparison-in-ide-history"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create"
  - "https://developers.google.com/apps-script/api/concepts"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get"
keywords:
  - "comparison"
  - "history"
  - "version"
  - "project"
  - "ide"
  - "script"
  - "apps"
  - "in"
---

# Apps Script project version comparison in IDE history

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script now lets users view and compare previously deployed script versions against the current version in the IDE project history.

## Extended Definition

Apps Script now lets users view and compare previously deployed script versions against the current version in the IDE project history.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)
- [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get)

## Supporting Pages

### Method: projects.versions.create \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request body The request body contains data with the following structure: JSON representation { "versionNumber" : integer , "description" : string , "createTime" : string } Fields versionNumber integer The incremental ID that is created by Apps Script when a version is created.
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.create Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag A new immutable version of a script project is created using a POST request to a specific URL.
- HTTP request POST https://script.googleapis.com/v1/projects/{scriptId}/versions The URL uses gRPC Transcoding syntax.

### Introduction \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The API is divided into resources for managing projects, deployments, versions, processes, and script executions.
- You can programmatically create, modify, and deploy Google Apps Script projects, and execute Apps Script functions remotely—actions that otherwise require using the Apps Script editor or its UI.
- Use this resource to monitor script executions initiated using the scripts.run method. scripts — The endpoint that provides methods to remotely execute Apps Script functions.
- Home Google Workspace Apps Script Guides Send feedback Introduction Stay organized with collections Save and categorize content based on your preferences.

### Method: projects.versions.get \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag This page details how to get a specific version of an Apps Script project using a REST API request.
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.get Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://script.googleapis.com/v1/projects/{scriptId}/versions/{versionNumber} The URL uses gRPC Transcoding syntax.
- Path parameters Parameters scriptId string The script project's Drive ID. versionNumber integer The version number.

