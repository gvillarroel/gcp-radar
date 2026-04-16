---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.575Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Manifest-based deployments"
feature_slug: "manifest-based-deployments"
latest_feature_date: "2017-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/update"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create"
keywords:
  - "manifest"
  - "based"
  - "deployments"
  - "apps"
  - "script"
  - "lets"
  - "developers"
  - "deploy"
---

# Manifest-based deployments

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script lets developers deploy script projects directly from the project manifest.

## Extended Definition

Apps Script lets developers deploy script projects directly from the project manifest.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/update](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/update)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create)

## Supporting Pages

### Method: projects.deployments.update \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/update](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/update)
- Source ID: `site-api-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.deployments.update Stay organized with collections Save and categorize content based on your preferences.
- Request body The request body contains data with the following structure: JSON representation { "deploymentConfig" : { "scriptId" : string , "versionNumber" : integer , "manifestFileName" : string , "description" : string } } Fields deploymentConfig.versionNumber integer The version number on which this deployment is based. deploymentConfig.manifestFileName string The manifest file name for this deployment. deploymentConfig.description string The description for this deployment.
- Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/script.deployments For more information, see the OAuth 2.0 Overview .
- HTTP request PUT https://script.googleapis.com/v1/projects/{deploymentConfig.scriptId}/deployments/{deploymentId} The URL uses gRPC Transcoding syntax.

### Method: projects.deployments.create \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.deployments.create Stay organized with collections Save and categorize content based on your preferences.
- Request body The request body contains data with the following structure: JSON representation { "versionNumber" : integer , "manifestFileName" : string , "description" : string } Fields versionNumber integer The version number on which this deployment is based. manifestFileName string The manifest file name for this deployment. description string The description for this deployment.
- Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/script.deployments For more information, see the OAuth 2.0 Overview .
- Page Summary outlined flag This content describes how to create a deployment of an Apps Script project using an HTTP POST request to the specified URL.

### REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects.deployments Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "scriptId" : string , "versionNumber" : integer , "manifestFileName" : string , "description" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The version number on which this deployment is based. manifestFileName string The manifest file name for this deployment. description string The description for this deployment.
- Methods create Creates a deployment of an Apps Script project. delete Deletes a deployment of an Apps Script project. get Gets a deployment of an Apps Script project. list Lists the deployments of an Apps Script project. update Updates a deployment of an Apps Script project.
- DeploymentConfig defines how a deployment is configured, including the script ID, version number, manifest file name, and description.

