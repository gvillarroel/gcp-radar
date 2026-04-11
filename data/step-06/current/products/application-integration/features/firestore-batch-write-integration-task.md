---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.483Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Firestore - Batch Write integration task"
feature_slug: "firestore-batch-write-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
  - "https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task"
keywords:
  - "write"
  - "firestore"
  - "batch"
  - "application"
  - "integration"
  - "added"
  - "task"
  - "in"
---

# Firestore - Batch Write integration task

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration added a Firestore Batch Write integration task in preview.

## Extended Definition

Application Integration added a Firestore Batch Write integration task in preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)

## Supporting Pages

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- After you have met all prerequisites , to replace or modify an existing task in your integration using Gemini, perform the following steps: In the Google Cloud console, go to the Application Integration page.
- To add an edge condition or to append new tasks to your integration using Gemini, perform the following steps: In the Google Cloud, go to the Application Integration page.

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- Connect the elements in the sub-integration Now that you have added and configured the required tasks and triggers in the sub-integration, add a connection (edge) between the elements.
- Invoke a sub-integration using a For Each Loop task To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me --> This quickstart shows you how to create an integration that uses a For Each Loop task to invoke a sub-integration.
- Add and configure a Data Mapping task The Data Mapping task lets you perform variable assignments in your integration, get and set properties of json objects, and apply nested transform functions to values.
- Home Documentation Application development Application Integration Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Insert data into BigQuery using a For Each Parallel task \_|\_ Application\

- URL: [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- In this tutorial, you'll complete the following tasks: Set up a BigQuery connection Set up a sub-integration Set up the main integration Test your integration Before you begin Ensure that you have access to Application Integration.
- Insert data into BigQuery using a For Each Parallel task In this tutorial you'll create an Application Integration and a sub-integration to process a series of records.
- To select three random entries from the sample dataset and store them in a way that you can pass them to the integration, enter the following commands in your Cloud Shell terminal: AUTH=$(gcloud auth print-access-token) export SAMPLE DOCS=$(jq $(r=$((RANDOM % 1000)) ; echo ".[$r:$((r + 3))]") < bq-sample-dataset.json jq -Rs '.') generate post data() { cat <<EOF { "triggerId": "api trigger/process-records API 1", "inputParameters": { "records": { "jsonValue": $SAMPLE DOCS } } } EOF } To start the testing, enter the following command in your Cloud Shell terminal: curl -X POST \ https://integrations.googleapis.com/v1/projects/ project id /locations/ region /integrations/process-records:execute \ -H "Authorization: Bearer $AUTH" \ -H "Content-Type: application/json" \ -d "$(generate post data)" In this command, replace: project id with the project ID of your Google Cloud project. region with the region where you created your integration.
- Enter the following command in your Cloud Shell terminal: wget https://raw.githubusercontent.com/GoogleCloudPlatform/application-integration-samples/main/assets/bq-sample-dataset.json To verify that the sample data was downloaded, enter the following command in your Cloud Shell terminal: ls -la bq-sample-dataset.json The downloaded file is listed in the Cloud Shell terminal.

