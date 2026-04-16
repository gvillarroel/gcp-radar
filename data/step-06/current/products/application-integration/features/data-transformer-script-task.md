---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.483Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Data Transformer Script task"
feature_slug: "data-transformer-script-task"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference"
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
keywords:
  - "jsonnet"
  - "script"
  - "transformer"
  - "based"
  - "added"
  - "task"
---

# Data Transformer Script task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added the Data Transformer Script task to support Jsonnet-based custom data-mapping templates.

## Extended Definition

Application Integration added the Data Transformer Script task to support Jsonnet-based custom data-mapping templates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)
- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)

## Supporting Pages

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Jsonnet script local f = impor t "functions" ; // Import predefined Data Transformer function library local s tr 1 = f .ex t Var( "inputVar1" ); // Access integration input variable "Inputstr1" with value "Hello" local s tr 2 = f .ex t Var( "inputVar2" ); // Access integration input variable "Inputstr2" with value "World" { Ou t pu t Var : s tr 1 + " " + s tr 2 + "!" , // Write to Jsonnet output variable "OutputVar" "output-str-var" : s tr 1 + " Integration " + s tr 2 + "!" , // Write to Jsonnet output variable "output-str-var" } Output Jsonnet usage reference Jsonnet is a purely functional language and its programs are composed of expressions.
- The Data Transformer Script editor by default imports functions , a predefined custom library containing a set of Jsonnet functions for data mapping in Application Integration.
- To open the editor, go to the Data Transformer Script task configuration pane and click Open Data Transformer Script Editor .
- The Data Transformer task provides two modes– Diagram and Script –to transform your data.

### "Data Transformer functions \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data Transformer functions This page describes the additional set of predefined Jsonnet functions for Data Transformer Script task available in Application Integration.
- Recommendation Lean how to add and configure a Data Transformer Script task ( Preview ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Preview — Data Transformer Script task This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Importing the functions library lets you use both the standard Jsonnet functions and the predefined Data Transformer functions.

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application development Application Integration Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.

