---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.487Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Sheets - Append integration task"
feature_slug: "sheets-append-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task"
keywords:
  - "append"
  - "sheets"
  - "preview"
  - "added"
  - "task"
---

# Sheets - Append integration task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added a Sheets Append integration task in preview.

## Extended Definition

Application Integration added a Sheets Append integration task in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task)

## Supporting Pages

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Configure JavaScript tasks Preview — BigQuery Connector This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- To add an edge condition or to append new tasks to your integration using Gemini, perform the following steps: In the Google Cloud, go to the Application Integration page.
- Add edge conditions and append additional tasks You can use Gemini to append new tasks and to add edge conditions to your existing integration flow.

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.

### Data Mapping task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task)
- Source ID: `site-docs-root-2`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data type Supported mapping functions Boolean AND , EQUALS , NAND , NOR , NOT , OR , TO JSON , TO STRING , XNOR , XOR Boolean array APPEND , APPEND ALL , CONTAINS , FILTER , FOR EACH , GET , REMOVE , REMOVE AT , SET , SIZE , TO JSON , TO SET Double ADD , DIVIDE , CEIL , EQUALS , EXPONENT , GREATER THAN , GREATER THAN EQUAL TO , FLOOR , LESS THAN , LESS THAN EQUAL TO , MOD , MULTIPLY , ROUND , SUBTRACT , TO JSON , TO STRING Double array APPEND , APPEND ALL , AVG , CONTAINS , FILTER , FOR EACH , GET , MAX , MIN , REMOVE , REMOVE AT , SET , SIZE , SUM , TO JSON , TO SET Integer ADD , DIVIDE , EPOCH TO HUMAN READABLE TIME , EQUALS , EXPONENT , GREATER THAN , GREATER THAN EQUAL TO , LESS THAN , LESS THAN EQUAL TO , MOD , MULTIPLY , SUBTRACT , TO DOUBLE , TO JSON , TO STRING Integer array APPEND , APPEND ALL , AVG , CONTAINS , FILTER , FOR EACH , GET , MAX , MIN , REMOVE , REMOVE AT , SET , SIZE , SUM , TO JSON , TO SET JSON APPEND ELEMENT , FLATTEN , FILTER , FOR EACH , GET ELEMENT , GET PROPERTY , MERGE , REMOVE PROPERTY , RESOLVE TEMPLATE , SET PROPERTY, SIZE , TO BOOLEAN , TO BOOLEAN ARRAY , TO DOUBLE , TO DOUBLE ARRAY , TO INT , TO INT ARRAY , TO STRING , TO STRING ARRAY String CONCAT , CONTAINS , DECODE BASE64 STRING , EQUALS , EQUALS IGNORE CASE , LENGTH , REPLACE ALL , RESOLVE TEMPLATE , SPLIT , SUBSTRING , TO BASE 64 , TO BOOLEAN , TO DOUBLE , TO INT , TO JSON , TO LOWERCASE , TO UPPERCASE String array APPEND , APPEND ALL , CONTAINS , FILTER , FOR EACH , GET , REMOVE , REMOVE AT , SET , SIZE , TO JSON , TO SET For more information about each of the data mapping functions, see Data Mapping Functions Reference .
- The completed data mapping is available to view from the Data Mapping task configuration pane, as shown in the following image: Supported data types and mapping functions Application Integration supports the following data types for variables in the Data Mapping task: String and String array Integer and Integer array Double and Double array Boolean and Boolean array JSON The following table lists the data mapping functions available for each of the data types.
- Data Mapping task The Data Mapping task lets you perform variable assignments in your integration, get and set properties of json objects, and apply nested transform functions to values.
- Configure the Data Mapping task To configure a Data Mapping task, perform the following steps: In the Google Cloud console, go to the Application Integration page.

