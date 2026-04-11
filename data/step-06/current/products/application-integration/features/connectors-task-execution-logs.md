---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.488Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Connectors task execution logs"
feature_slug: "connectors-task-execution-logs"
latest_feature_date: "2023-05-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event"
  - "https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
keywords:
  - "visibility"
  - "adds"
  - "connectors"
  - "execution"
  - "logs"
  - "tasks"
  - "task"
  - "for"
---

# Connectors task execution logs

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Cloud logs support for Connectors tasks adds visibility into execution logs for failed Connectors tasks in Application Integration.

## Extended Definition

Cloud logs support for Connectors tasks adds visibility into execution logs for failed Connectors tasks in Application Integration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)

## Supporting Pages

### "Invoke an integration for a Salesforce Change Data Capture (CDC) event \_\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Each entry includes details for the execution attempt, including: Integration name Execution ID Status Start time Duration Integration version Trigger ID Click the expander arrow ( > ) next to the executed integration to view an expanded list of tasks and variables in the integration, along with task status and variable payloads.
- Configure a Connectors task with a Cloud SQL for MySQL connection Perform the following steps to configure a Connectors task to insert records into an existing Cloud SQL table using the Cloud SQL for MySQL connection : Select +Add a task/trigger > Tasks in the integration designer to display the list of available tasks.
- Configure a Connectors task with a Cloud Pub/Sub connection Perform the following steps to configure a Connectors task to publish a Pub/Sub message using the Cloud Pub/Sub connection : Select +Add a task/trigger > Tasks in the integration designer to display the list of available tasks.
- The following steps describe how to configure the trigger, tasks, connectors, and data mappings required to run a complete integration.

### "Insert data into BigQuery using a For Each Parallel task \_|\_ Application\

- URL: [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- In this tutorial, you'll complete the following tasks: Set up a BigQuery connection Set up a sub-integration Set up the main integration Test your integration Before you begin Ensure that you have access to Application Integration.
- Add a For Each Parallel task To add a For Each Parallel task in the integration, complete the following steps: Select +Add a task/trigger > Tasks in the integration editor to display the list of available tasks.
- In the On each execution section, for Where to map individual array elements , enter the name of the variable in the data mapping task in the sub-integration.
- Do the following in your Google Cloud project: Grant the following roles to the service account that you want to use to create the connection: roles/bigquery.dataEditor roles/bigquery.readSessionUser roles/secretmanager.viewer roles/secretmanager.secretAccessor Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) If these services have not been enabled for your project previously, you are prompted to enable them when creating the connection in the Create Connection page.

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Create a new ServiceNow account Perform the following steps to configure a Connectors task that adds a new account to your ServiceNow instance: In the integration editor, click Tasks to display a list of available tasks.
- Update Salesforce opportunity Once you have generated the new order number, you update the source Salesforce opportunity Configure the Salesforce connector Perform the following steps to configure a Connectors task that updates the existing Salesforce opportunity: In the integration editor, click Tasks to display a list of available tasks.
- Connect to the Salesforce account Perform the following steps to add and configure a Connectors task to retrieve the opportunity details using the Salesforce connection: In the integration editor, click Tasks to display a list of available tasks.
- Connect to the BigQuery table Perform the following steps to configure a Connectors task that reads the BigQuery Accounts tables using the BigQuery connection: In the integration editor, click Tasks to display a list of available tasks.

