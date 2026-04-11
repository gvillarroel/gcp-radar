---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.699Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Sheets service API expansion"
feature_slug: "apps-script-sheets-service-api-expansion"
latest_feature_date: "2018-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/api/reference/rest"
keywords:
  - "expansion"
  - "expanded"
  - "sheets"
  - "script"
  - "with"
  - "api"
  - "apps"
  - "the"
---

# Apps Script Sheets service API expansion

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Expanded the Sheets service with new classes and range methods to support more script-driven spreadsheet actions such as banding, conditional formatting, filtering, pivot tables, and text/wrap/rotation operations.

## Extended Definition

Expanded the Sheets service with new classes and range methods to support more script-driven spreadsheet actions such as banding, conditional formatting, filtering, pivot tables, and text/wrap/rotation operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)

## Supporting Pages

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Next steps Plan travels with an AI agent accessible across Google Workspace Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons Custom functions in Sheets Extending Sheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .
- In the Apps Script project, go to Project Settings , click Edit script properties , then click Add script property to add the following script properties: LOCATION with the location of the Google Cloud project created in previous steps such as us-central1 .
- Page Summary outlined flag The webpage provides an advanced guide on creating a fact-check custom function for Google Sheets using Google Apps Script, powered by a Vertex AI agent and Gemini model.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Note: While Apps Script supports standard JSDoc for autocomplete in the editor, the Google Sheets UI has specific limitations regarding which tags and syntax are displayed in the spreadsheet's formula helper. / Multiplies the input value by 2. @param {number} input The value to multiply. @return {number} The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } Advanced This section covers advanced custom function topics.
- For examples of custom functions, see the following tutorials: Calculate sale price of discounted items (quickstart) Calculate a tiered pricing discount Calculate driving distance & convert meters to miles Summarize data from multiple sheets Fact-check statements with an ADK AI agent and Gemini model Getting started Custom functions are created using standard JavaScript.
- This means that a custom function written in one spreadsheet can't be used in other spreadsheets unless you use one of the following methods: Click Extensions > Apps Script to open the script editor, then copy the script text from the original spreadsheet and paste it into the script editor of another spreadsheet.
- Home Google Workspace Apps Script Guides Send feedback Custom Functions in Google Sheets Stay organized with collections Save and categorize content based on your preferences.

### Apps Script API \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Apps Script API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v1.projects Methods create POST /v1/projects Creates a new, empty script project with no script files and a base manifest file. get GET /v1/projects/{scriptId} Gets a script project's metadata. getContent GET /v1/projects/{scriptId}/content Gets the content of the script project, including the code source and metadata for each script file. getMetrics GET /v1/projects/{scriptId}/metrics Get metrics data for scripts, such as number of executions and active users. updateContent PUT /v1/projects/{scriptId}/content Updates the content of the specified script project.
- REST Resource: v1.projects.deployments Methods create POST /v1/projects/{scriptId}/deployments Creates a deployment of an Apps Script project. delete DELETE /v1/projects/{scriptId}/deployments/{deploymentId} Deletes a deployment of an Apps Script project. get GET /v1/projects/{scriptId}/deployments/{deploymentId} Gets a deployment of an Apps Script project. list GET /v1/projects/{scriptId}/deployments Lists the deployments of an Apps Script project. update PUT /v1/projects/{deploymentConfig.scriptId}/deployments/{deploymentId} Updates a deployment of an Apps Script project.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://script.googleapis.com REST Resource: v1.processes Methods list GET /v1/processes List information about processes made by or on behalf of a user, such as process type and current status. listScriptProcesses GET /v1/processes:listScriptProcesses List information about a script's executed processes, such as process type and current status.

