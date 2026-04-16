---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.486Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Firestore - Batch Get integration task"
feature_slug: "firestore-batch-get-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-connectors-task"
keywords:
  - "firestore"
  - "batch"
  - "preview"
  - "added"
  - "task"
---

# Firestore - Batch Get integration task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added a Firestore Batch Get integration task in preview.

## Extended Definition

Application Integration added a Firestore Batch Get integration task in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)

## Supporting Pages

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Data Transformer task Preview — BigQuery Connector This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- In the Data Transformer (preview) Task Editor page, select one of the following options: By default, the Diagram mode opens.
- In addition, you can also use the supported transformations to transform your data into meaningful variables and formats to make them accessible to other tasks or triggers in your integration.
- Configure the Data Transformer task To add a Data Transformer task to your integration, perform the following steps: In the Google Cloud console, go to the Application Integration page.

### Connectors task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-connectors-task](https://docs.cloud.google.com/application-integration/docs/configure-connectors-task)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the JSON snippet of a row data to be added in a table: { "employee first name": "John", "employee emailID": "test-05@test.com" } In this example, employee first name and employee emailID are the column names with the corresponding values John and test-05@test.com . filterClause String Restricts the result of the operations based on a condition.
- To configure the Task Input or Task Output variables, click the respective variable to open the Configure Variable pane and perform the following steps: Enter the variable value in the Default Value field. (Optional) Select Use as an input to integration or Use as an output to integration .
- The dynamic authentication header should be in the following JSON format: { "task1" :{ "oauth2 auth code flow.access token" : "token value" }, "task2" :{ "oauth2 auth code flow.userename" : "username value" }} In this format, taskN corresponds to the Task ID in integrationVersion .
- Configure task input and output variables The Connectors task configuration pane displays Task Input and Task Output variables that are automatically generated based on the Entity and Operation or Action selected in the Configure connector task dialog.

