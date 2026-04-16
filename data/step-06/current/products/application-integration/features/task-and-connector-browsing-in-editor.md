---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.471Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Task and connector browsing in editor"
feature_slug: "task-and-connector-browsing-in-editor"
latest_feature_date: "2024-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
  - "https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task"
keywords:
  - "browsing"
  - "lets"
  - "editor"
  - "connector"
  - "task"
---

# Task and connector browsing in editor

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The Application Integration editor now lets users search, browse, and select tasks and connectors from the Tasks list.

## Extended Definition

The Application Integration editor now lets users search, browse, and select tasks and connectors from the Tasks list.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)

## Supporting Pages

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connectors task The Connectors task lets you quickly and securely connect to the various Google Cloud services and other business applications from your integration using the out-of-the-box connectors available in Integration Connectors .
- In the integration editor navigation bar, click Tasks to view the list of available tasks and connectors.
- To configure an existing connection, complete the following steps in the Connectors Task Editor page.
- The following image shows a sample layout of the Connectors Task Editor page.

### "Insert data into BigQuery using a For Each Parallel task \_|\_ Application\

- URL: [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Do the following in your Google Cloud project: Grant the following roles to the service account that you want to use to create the connection: roles/bigquery.dataEditor roles/bigquery.readSessionUser roles/secretmanager.viewer roles/secretmanager.secretAccessor Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) If these services have not been enabled for your project previously, you are prompted to enable them when creating the connection in the Create Connection page.
- Add a For Each Parallel task To add a For Each Parallel task in the integration, complete the following steps: Select +Add a task/trigger > Tasks in the integration editor to display the list of available tasks.
- Configure the For Each Parallel task To configure the For Each Parallel task, complete the following steps: In the integration editor, click the For Each Parallel task to view the task configuration pane.
- Add a Data Mapping task To add a Data Mapping task in the integration, complete the following steps: Select +Add a task/trigger > Tasks in the integration editor to display the list of available tasks.

### Apps Script task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task](https://docs.cloud.google.com/application-integration/docs/configure-apps-script-task)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the integration editor navigation bar, click Tasks to view the list of available tasks and connectors.
- Syntax: getTaskParameter(value) Example: // Read an integration variable AppsScriptTask . getTaskParameter ( ' EmployeeIDKey ' ); To view all the functions available in the AppsScriptTask library, hover over the AppsScriptTask menu item in your Apps Script editor, click More more vert > Open in a new tab .
- To view all the functions available in the AppsScriptTaskTest library, hover over the AppsScriptTaskTest menu item in your Apps Script editor, click More more vert > Open in a new tab .
- Apps Script task The Apps Script task lets you run Google Apps Script from your integration.

