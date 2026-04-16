---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.473Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "SAP Gateway trigger"
feature_slug: "sap-gateway-trigger"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger"
keywords:
  - "gateway"
  - "generally"
  - "connector"
  - "available"
  - "event"
  - "trigger"
---

# SAP Gateway trigger

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The SAP Gateway connector event trigger is generally available for Application Integration.

## Extended Definition

The SAP Gateway connector event trigger is generally available for Application Integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger](https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)

## Supporting Pages

### Apache Kafka trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger](https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To configure the Apache Kafka trigger , you can either use an existing Apache Kafka connection available in Integration Connectors, or create a new Apache Kafka connection using the inline connection creation option.
- The Apache Kafka trigger is a Connector Event trigger that lets you invoke an integration based on the Apache Kafka events that you've subscribed to in your Apache Kafka connection.
- Note that the Apache Kafka trigger is an Connector Event trigger , therefore you can only use a Apache Kafka connection with event subscription enabled to configure the trigger.
- Trigger output variable For each event, the Apache Kafka trigger generates a ConnectorEventPayload output variable (in JSON format) which you can use in your downstream tasks.

### SAP ERP trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure SAP ERP trigger using an existing connection The SAP ERP trigger is an Connector Event trigger , therefore you can only use a SAP ERP connection with event subscription enabled to configure the trigger.
- To configure the SAP ERP trigger , you can either use an existing SAP ERP connection available in Integration Connectors, or create a new SAP ERP connection using the inline connection creation option.
- SAP ERP trigger The SAP ERP trigger is a Connector Event trigger SAP ERP connector lets you perform insert, delete, update, and read operations on SAP ERP data.
- Provide the following configuration details in the Connector Event Trigger Editor page: Region: Select the region of your SAP ERP connection.

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.

