---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.493Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "JavaScript task"
feature_slug: "javascript-task"
latest_feature_date: "2023-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-javascript-task"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
keywords:
  - "snippets"
  - "lets"
  - "javascript"
  - "mapping"
  - "users"
  - "custom"
  - "task"
---

# JavaScript task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The JavaScript task lets users add custom JavaScript snippets for mapping logic, variable assignment, and integration variable manipulation.

## Extended Definition

The JavaScript task lets users add custom JavaScript snippets for mapping logic, variable assignment, and integration variable manipulation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-javascript-task](https://docs.cloud.google.com/application-integration/docs/configure-javascript-task)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)

## Supporting Pages

### JavaScript task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-javascript-task](https://docs.cloud.google.com/application-integration/docs/configure-javascript-task)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The JavaScript task lets you write custom JavaScript code snippets for your integration.
- In the parameters field, locate the parameter named script . "taskConfigs": [{ "task": "JavaScriptTask", "taskId": 1, "parameters": { "script": { "key": "script", "value": { "stringValue": "function that is called during the JavaScriptTask execution" } }" }] In this parameters field, add parameters that are used in the JavaScriptTask field by using the following template: "ParamName": { "key": "ParamName", "value": { "stringValue": "$ParamName$" } } To upload the integration version, make a call to the projects.locations.integrations.versions.upload method with the updated integration version file.
- In the parameters field, locate the parameter named script . "taskConfigs": [{ "task": "JavaScriptTask", "taskId": 1, "parameters": { "script": { "key": "script", "value": { "stringValue": "function that is called during the JavaScriptTask execution" } }" }] In this parameters field, add parameters that are used in the JavaScriptTask field by using the following template: "ParamName": { "key": "ParamName", "value": { "stringValue": "$ParamName$" } } Save the changes that you made to the integration version file.
- What's next Learn about the following: Configuring JavaScript tasks with Gemini assistance All tasks and triggers Testing and publishing integrations Error handling Integration execution logs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Edit a JavaScript task The JavaScript task lets you write custom JavaScript code snippets for your integration.
- Add a JavaScript task The JavaScript task lets you write custom JavaScript code snippets for your integration.
- When you confirm the prompt, the data mapping task is replaced by a JavaScript task .
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- If your result set has a large number of pages, you can consider using the While Loop task to get the next page and using the Data Mapping task to automatically assign page token values to the listEntitiesPageToken input parameter after each run.
- Connectors task The Connectors task lets you quickly and securely connect to the various Google Cloud services and other business applications from your integration using the out-of-the-box connectors available in Integration Connectors .
- If you want to use an integration variable, you must first configure a Data Mapping task to create a mapping between the integration variable and the filter clause.
- Action: Execute custom SQL query To create a custom query, follow these steps: Follow the detailed instructions to add a connectors task .

