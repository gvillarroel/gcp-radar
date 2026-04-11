---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.480Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Dataflow - Create Job integration task"
feature_slug: "dataflow-create-job-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task"
keywords:
  - "dataflow"
  - "create"
  - "job"
  - "application"
  - "integration"
  - "added"
  - "task"
  - "in"
---

# Dataflow - Create Job integration task

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration added a Dataflow Create Job integration task in preview.

## Extended Definition

Application Integration added a Dataflow Create Job integration task in preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)

## Supporting Pages

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Invoke a sub-integration using a For Each Loop task To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me --> This quickstart shows you how to create an integration that uses a For Each Loop task to invoke a sub-integration.
- Connect the elements in the sub-integration Now that you have added and configured the required tasks and triggers in the sub-integration, add a connection (edge) between the elements.
- Create the sub-integration In the Google Cloud console, go to the Application Integration page.
- Add and configure a Data Mapping task The Data Mapping task lets you perform variable assignments in your integration, get and set properties of json objects, and apply nested transform functions to values.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- If you plan to create an integration using Apigee API Hub APIs that are in a host project, ensure that you have provisioned the API Hub in your project and that the Application Integration service account has the required role to access the APIs in the other project.

### "Insert data into BigQuery using a For Each Parallel task \_|\_ Application\

- URL: [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Insert data into BigQuery using a For Each Parallel task In this tutorial you'll create an Application Integration and a sub-integration to process a series of records.
- To select three random entries from the sample dataset and store them in a way that you can pass them to the integration, enter the following commands in your Cloud Shell terminal: AUTH=$(gcloud auth print-access-token) export SAMPLE DOCS=$(jq $(r=$((RANDOM % 1000)) ; echo ".[$r:$((r + 3))]") < bq-sample-dataset.json jq -Rs '.') generate post data() { cat <<EOF { "triggerId": "api trigger/process-records API 1", "inputParameters": { "records": { "jsonValue": $SAMPLE DOCS } } } EOF } To start the testing, enter the following command in your Cloud Shell terminal: curl -X POST \ https://integrations.googleapis.com/v1/projects/ project id /locations/ region /integrations/process-records:execute \ -H "Authorization: Bearer $AUTH" \ -H "Content-Type: application/json" \ -d "$(generate post data)" In this command, replace: project id with the project ID of your Google Cloud project. region with the region where you created your integration.
- In this tutorial, you'll complete the following tasks: Set up a BigQuery connection Set up a sub-integration Set up the main integration Test your integration Before you begin Ensure that you have access to Application Integration.
- Create the main integration To create the main integration, complete the following steps: In the Google Cloud console, go to the Application Integration page.

