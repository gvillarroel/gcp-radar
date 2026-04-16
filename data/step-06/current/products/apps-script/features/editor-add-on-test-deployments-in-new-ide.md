---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.517Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Editor add-on test deployments in new IDE"
feature_slug: "editor-add-on-test-deployments-in-new-ide"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/clasp"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create"
keywords:
  - "editor"
  - "add"
  - "test"
  - "deployments"
  - "ide"
  - "apps"
  - "script"
  - "lets"
---

# Editor add-on test deployments in new IDE

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The new Apps Script IDE lets developers create test deployments for Editor Add-ons.

## Extended Definition

The new Apps Script IDE lets developers create test deployments for Editor Add-ons.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/clasp](https://developers.google.com/apps-script/guides/clasp)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- April 13, 2022 Feature You can now perform the following actions in the new Apps Script integrated development environment (IDE): Create test deployments for Editor Add-ons .
- It lets you manage and develop Apps Script projects locally from the command line instead of the Apps Script editor.
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.
- To get the latest product updates delivered to you, add the URL of this page to your feed reader , or add the feed URL directly: https://developers.google.com/feeds/apps-script-release-notes.xml .

### "Use the command-line interface with clasp \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/guides/clasp](https://developers.google.com/apps-script/guides/clasp)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use that number to deploy and undeploy instances of your project: clasp deploy [ version ] [ description ] clasp undeploy < deploymentId > This command updates an existing deployment with a new version and description: clasp redeploy <deploymentId> <version> <description> List deployments This command lists the script project's deployment IDs, versions, and their descriptions. clasp deployments Open the project in the Apps Script editor This command opens a script project in the Apps Script editor.
- Common clasp operations include logging in and out, creating or cloning projects, downloading or uploading projects, managing versions and deployments, and opening the project in the Apps Script editor.
- CI/CD for Apps Script with clasp and GitHub Actions This guide covers setting up automated linting, testing, and deployment for Google Apps Script projects using clasp and GitHub Actions .
- Page Summary outlined flag Clasp is an open-source tool that allows you to develop and manage Apps Script projects from your terminal instead of the Apps Script editor.

### Method: projects.versions.create \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request body The request body contains data with the following structure: JSON representation { "versionNumber" : integer , "description" : string , "createTime" : string } Fields versionNumber integer The incremental ID that is created by Apps Script when a version is created.
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.create Stay organized with collections Save and categorize content based on your preferences.
- This is system assigned number and is immutable once created. description string The description for this version. createTime string ( Timestamp format) When the version was created.
- Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/script.projects For more information, see the OAuth 2.0 Overview .

