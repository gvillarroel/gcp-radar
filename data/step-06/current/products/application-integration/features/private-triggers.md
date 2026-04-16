---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.475Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Private triggers"
feature_slug: "private-triggers"
latest_feature_date: "2024-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-private-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
  - "https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger"
keywords:
  - "private"
  - "split"
  - "large"
  - "triggers"
  - "supports"
---

# Private triggers

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now supports private triggers to split large flows into multiple subflows.

## Extended Definition

Application Integration now supports private triggers to split large flows into multiple subflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-private-trigger](https://docs.cloud.google.com/application-integration/docs/configure-private-trigger)
- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)

## Supporting Pages

### Private triggers \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-private-trigger](https://docs.cloud.google.com/application-integration/docs/configure-private-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Private triggers Private triggers enable you to break large flows into various subflows.
- Private triggers can be invoked from the following flow control tasks: Call Integration For Each Loop For Each Parallel While Loop Quotas and limits The execution of private triggers shares the Maximum cumulative size of all the integration data limit, which is set to 30 MB, with the parent integration.
- Limitation If your private trigger workflow contains any of the following async tasks, then you can't trigger the private workflow from the main workflow with the SYNC execution strategy: Timer task Suspend task Approval task What's next Learn about all tasks and triggers .
- Increases security: Restrict flows to be invoked only from other integrations as private triggers cannot be triggered independently from public APIs.

### SAP ERP trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- This field identifies the type of event associated with the incoming event request. { "event type" : "user.created" , ... // other request fields ... } Select Enable private connectivity for secured connectivity between your backend application and your connection.
- Custom read table functions The connector includes a custom read-table RFC, Z CUSTOM READ TABLE that is similar to the SAP RFC READ TABLE , but with a larger buffer to address the DATA BUFFER EXCEEDED problem and bypass RFC READ TABLE limitations.
- If you want to establish a private connection to your backend systems, select Endpoint attachment from the list, and then select the required endpoint attachment from the Endpoint Attachment list.
- ELSE. lv client key = 'IC DEMO GOOGLE APIK'. lv p connections id = 'conn-event-triggers-from-sap-erp-apik'.

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.

