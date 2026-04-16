---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.491Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Error Catcher trigger"
feature_slug: "error-catcher-trigger"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-error-catcher-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
  - "https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger"
keywords:
  - "handling"
  - "catcher"
  - "flow"
  - "invoking"
  - "error"
  - "enables"
  - "custom"
  - "trigger"
---

# Error Catcher trigger

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The Error Catcher trigger enables invoking a custom error-handling flow for failures in a trigger, task, or edge condition.

## Extended Definition

The Error Catcher trigger enables invoking a custom error-handling flow for failures in a trigger, task, or edge condition.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-error-catcher-trigger](https://docs.cloud.google.com/application-integration/docs/configure-error-catcher-trigger)
- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger](https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger)

## Supporting Pages

### Error catcher trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-error-catcher-trigger](https://docs.cloud.google.com/application-integration/docs/configure-error-catcher-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 269
- Re-rank relevance: N/A

Evidence snippets:
- Create the error catcher logic Once you have added the Error Catcher trigger in the integration designer, you can create your custom error catcher logic using the available tasks in Application Integration.
- Error catcher trigger The Error Catcher trigger lets you invoke an error catcher that is defined or customized to handle the failure of an identified trigger, task, or edge condition in your integration.
- You cannot establish an edge connection between the tasks configured inside an error catcher and the tasks or triggers used in your main integration flow.
- To use or attach an error catcher in your main integration, perform the following steps: Click the existing trigger or task in your main integration to open the trigger or task configuration pane.

### Salesforce trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger](https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use Application Integration to automate an order management flow between a customer relationship management (CRM) application and an enterprise resource planning (ERP) application, see the Automate Salesforce opportunity to BigQuery order tutorial.
- For more information, see the following tutorials: To use Application Integration to automate the business process flow of routing and assigning a Salesforce customer case, see the Automate Salesforce case routing assignments tutorial.
- Best practices Using the Salesforce trigger is recommended in cases where you want to use Salesforce notifications to trigger integrations without writing custom code to publish Salesforce events.
- Note : Confirm that you have access to the email account associated with the integration user before triggering the reset password flow.

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.

