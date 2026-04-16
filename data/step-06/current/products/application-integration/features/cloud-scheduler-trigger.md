---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.493Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cloud Scheduler trigger"
feature_slug: "cloud-scheduler-trigger"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
  - "https://docs.cloud.google.com/application-integration/docs/configure-api-trigger"
keywords:
  - "scheduler"
  - "scheduled"
  - "periods"
  - "time"
  - "executions"
  - "enables"
  - "trigger"
---

# Cloud Scheduler trigger

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The Cloud Scheduler trigger enables scheduled integration executions using time periods or intervals across multiple regions.

## Extended Definition

The Cloud Scheduler trigger enables scheduled integration executions using time periods or intervals across multiple regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger](https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger)
- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/configure-api-trigger](https://docs.cloud.google.com/application-integration/docs/configure-api-trigger)

## Supporting Pages

### "Cloud Scheduler trigger \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger](https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Scheduler trigger The Cloud Scheduler trigger lets you schedule your integration executions for defined time periods or regular intervals across multiple regions.
- Additionally, the Cloud Scheduler trigger also lets you deploy cross-region cron jobs to schedule your integration executions.
- A Cloud Scheduler job is created using the following naming convention to avoid any job duplication errors: INTEGRATION NAME V INTEGRATION VERSION CLOUD SCHEDULER TRIGGER NUMBER Example : DemoIntegration V1 1 Trigger logs A Cloud Scheduler trigger generates logs at the start and end of each integration execution.
- For example, if you have provisioned your integration in us-central1 , you can use the Cloud Scheduler trigger to deploy a cron job in asia-east1 (or any of the supported Google Cloud regions for Cloud Scheduler ) to call your integration's endpoint at us-central1 .

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.

### API trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-api-trigger](https://docs.cloud.google.com/application-integration/docs/configure-api-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example The following example invokes an integration in us-east1 region containing the test API 1 API trigger in the demo-project Google Cloud project: curl -X POST \ -H "authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" \ -H "X-Server-Timeout: 300" -d '{"trigger id":"api trigger/test API 1"}' \ "https://us-east1-integrations.googleapis.com/v1/projects/demo-project/locations/us-central1/integrations/-:execute" Considerations When using the API trigger, the cumulative size of all the input variables can be a maximum of 8 MB.
- Syntax curl -X POST \ -H "authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Server-Timeout: TIMEOUT SECONDS " \ -d '{"trigger id":"api trigger/ TRIGGER NAME "}' \ "https:// LOCATION -integrations.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /integrations/-:execute" Replace the following: TIMEOUT SECONDS : The timeout in seconds for the API call.
- Configuring an API trigger in your integration enables you to do the following: Set request and response payload using trigger specific input and output variables.
- API trigger API triggers are used to directly invoke executions for integrations.

