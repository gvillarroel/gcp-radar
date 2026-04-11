---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.466Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Task and connector browsing in editor"
feature_slug: "task-and-connector-browsing-in-editor"
latest_feature_date: "2024-08-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "browsing"
  - "editor"
  - "connector"
  - "application"
  - "task"
  - "and"
  - "the"
  - "in"
---

# Task and connector browsing in editor

Product: Application Integration
Coverage: LOW

## Step 02 Summary

The Application Integration editor now lets users search, browse, and select tasks and connectors from the Tasks list.

## Extended Definition

The Application Integration editor now lets users search, browse, and select tasks and connectors from the Tasks list.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### "Insert data into BigQuery using a For Each Parallel task \_|\_ Application\

- URL: [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connect the integration elements Next, add edge connections to connect the API Trigger to the Data Mapping task and the Data Mapping task to the Connectors task.
- To select three random entries from the sample dataset and store them in a way that you can pass them to the integration, enter the following commands in your Cloud Shell terminal: AUTH=$(gcloud auth print-access-token) export SAMPLE DOCS=$(jq $(r=$((RANDOM % 1000)) ; echo ".[$r:$((r + 3))]") < bq-sample-dataset.json jq -Rs '.') generate post data() { cat <<EOF { "triggerId": "api trigger/process-records API 1", "inputParameters": { "records": { "jsonValue": $SAMPLE DOCS } } } EOF } To start the testing, enter the following command in your Cloud Shell terminal: curl -X POST \ https://integrations.googleapis.com/v1/projects/ project id /locations/ region /integrations/process-records:execute \ -H "Authorization: Bearer $AUTH" \ -H "Content-Type: application/json" \ -d "$(generate post data)" In this command, replace: project id with the project ID of your Google Cloud project. region with the region where you created your integration.
- Do the following in your Google Cloud project: Grant the following roles to the service account that you want to use to create the connection: roles/bigquery.dataEditor roles/bigquery.readSessionUser roles/secretmanager.viewer roles/secretmanager.secretAccessor Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) If these services have not been enabled for your project previously, you are prompted to enable them when creating the connection in the Create Connection page.
- Enter the following command in your Cloud Shell terminal: wget https://raw.githubusercontent.com/GoogleCloudPlatform/application-integration-samples/main/assets/bq-sample-dataset.json To verify that the sample data was downloaded, enter the following command in your Cloud Shell terminal: ls -la bq-sample-dataset.json The downloaded file is listed in the Cloud Shell terminal.

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- To add and configure a Data Mapping task, perform the following steps: In the integration editor, click Tasks to view the list of available tasks.
- Add an API trigger in the main integration In the integration editor, click Triggers to view the list of available tasks and triggers.
- Go to Tasks and click and place the Send Email element in the integration editor.
- Add and configure a For Each Loop task In the integration editor, click Tasks .

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- Note: Gemini suggests one or more integration flows that qualifies your prompt: If you have enabled API Hub and Integration Connectors and met all prerequisites , then recommendations will contain Call REST Endpoint and Connectors tasks.

