---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.701Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script manifest-based project management"
feature_slug: "apps-script-manifest-based-project-management"
latest_feature_date: "2017-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments"
  - "https://developers.google.com/apps-script/guides/services/advanced"
keywords:
  - "direct"
  - "manifest"
  - "management"
  - "enabled"
  - "project"
  - "based"
  - "script"
  - "apps"
---

# Apps Script manifest-based project management

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Enabled direct editing of Apps Script manifests, explicit OAuth scope configuration, and manifest-driven deployment targeting script add-ons, web apps, and API executables.

## Extended Definition

Enabled direct editing of Apps Script manifests, explicit OAuth scope configuration, and manifest-driven deployment targeting script add-ons, web apps, and API executables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Now, the default GCP projects that Apps Script creates for new scripts are hidden and script owners can't access them directly.
- You can now deploy a script project directly from the project manifest.
- You can now view and explicitly edit Apps Script project manifests .
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.

### REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "scriptId" : string , "versionNumber" : integer , "manifestFileName" : string , "description" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The version number on which this deployment is based. manifestFileName string The manifest file name for this deployment. description string The description for this deployment.
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects.deployments Stay organized with collections Save and categorize content based on your preferences.
- Methods create Creates a deployment of an Apps Script project. delete Deletes a deployment of an Apps Script project. get Gets a deployment of an Apps Script project. list Lists the deployments of an Apps Script project. update Updates a deployment of an Apps Script project.
- Entry point properties per entry point type. properties can be only one of the following: webApp object ( WebAppEntryPoint ) An entry point specification for web apps. executionApi object ( ExecutionApiEntryPoint ) An entry point specification for Apps Script API execution calls. addOn object ( AddOnEntryPoint ) Add-on properties.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Enable advanced services To use an advanced Google service, follow these instructions: Step 1: Enable the advanced service Enable an advanced service using the Apps Script editor or by editing the manifest.
- Step 2: Enable the Google Cloud API (Standard Google Cloud project projects only) If using a default Google Cloud project (created automatically by Apps Script), skip this step.
- Home Google Workspace Apps Script Guides Send feedback Advanced Google services Stay organized with collections Save and categorize content based on your preferences.
- Before using an advanced service, you must enable it in your script project and ensure the corresponding API is enabled in your associated Cloud Platform project.

