---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.474Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "IBM MQ connector trigger"
feature_slug: "ibm-mq-connector-trigger"
latest_feature_date: "2023-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/using-integration-connectors"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event"
keywords:
  - "ibm"
  - "mq"
  - "introduced"
  - "connector"
  - "application"
  - "integration"
  - "trigger"
  - "an"
---

# IBM MQ connector trigger

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration introduced an IBM MQ connector trigger in preview so integrations can be invoked by IBM MQ events.

## Extended Definition

Application Integration introduced an IBM MQ connector trigger in preview so integrations can be invoked by IBM MQ events.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/using-integration-connectors](https://docs.cloud.google.com/application-integration/docs/using-integration-connectors)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)

## Supporting Pages

### "Use Integration Connectors \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/using-integration-connectors](https://docs.cloud.google.com/application-integration/docs/using-integration-connectors)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- These connectors let you quickly and securely connect to the Google Cloud services and other business applications from your integrations.
- By using connectors available in Integration Connectors, you get the following benefits: Standardized interfaces Integration Connectors provide standardized interfaces for entities and actions.
- Home Documentation Application development Application Integration Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Use Integration Connectors This document describes the benefits of using Integration Connectors, supported connectors, and the pricing information.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Limitations Gemini in Application Integration is subject to the following limitations: If the connection in your integration has more than 1000 entities, then that connector isn't included in the recommendations by Gemini.
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.

### "Invoke an integration for a Salesforce Change Data Capture (CDC) event \_\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Add an edge connection from the Data Mapping element to the Insert row to Cloud SQL Connector element with the following edge condition: $OpportunityIsClosed$ = TRUE Add another edge connection from the Data Mapping element to the Cloud Pub/Sub Connector element with the following edge condition: $OpportunityIsClosed$ = FALSE Test the integration To test the new integration: Click Test in the integration designer toolbar, and then select the Salesforce Trigger .
- Configure a Connectors task with a Cloud SQL for MySQL connection Perform the following steps to configure a Connectors task to insert records into an existing Cloud SQL table using the Cloud SQL for MySQL connection : Select +Add a task/trigger > Tasks in the integration designer to display the list of available tasks.
- In this quickstart, you will use the Salesforce trigger to invoke an integration in Application Integration for a Salesforce Change Data Capture (CDC) event as shown in the following figure: A Salesforce trigger is subscribed to the Salesforce opportunity channel.
- Invoke an integration for a Salesforce Change Data Capture (CDC) event Learn how to create a sample integration in Application Integration using the Salesforce trigger .

