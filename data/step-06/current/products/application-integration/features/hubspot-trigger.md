---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.474Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "HubSpot trigger"
feature_slug: "hubspot-trigger"
latest_feature_date: "2023-11-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event"
keywords:
  - "hubspot"
  - "application"
  - "integration"
  - "trigger"
  - "preview"
  - "added"
  - "for"
  - "in"
---

# HubSpot trigger

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration added a HubSpot trigger in preview for starting integrations from HubSpot events.

## Extended Definition

Application Integration added a HubSpot trigger in preview for starting integrations from HubSpot events.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)

## Supporting Pages

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connect the elements in the sub-integration Now that you have added and configured the required tasks and triggers in the sub-integration, add a connection (edge) between the elements.
- To add and configure the API trigger, perform the following steps: In the integration editor, click Triggers to view the list of available triggers.
- Connect the elements in the main integration Add an edge from the API trigger element to the For Each Loop element.
- For this quickstart, select api trigger/ForEachSendEmailSubIntegration API 1 .

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- After you have met all prerequisites , to replace or modify an existing task in your integration using Gemini, perform the following steps: In the Google Cloud console, go to the Application Integration page.
- To generate an integration description summary of your integration using Gemini, perform the following steps: In the Google Cloud console, go to the Application Integration page.

### "Invoke an integration for a Salesforce Change Data Capture (CDC) event \_\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In this quickstart, you will use the Salesforce trigger to invoke an integration in Application Integration for a Salesforce Change Data Capture (CDC) event as shown in the following figure: A Salesforce trigger is subscribed to the Salesforce opportunity channel.
- Invoke an integration for a Salesforce Change Data Capture (CDC) event Learn how to create a sample integration in Application Integration using the Salesforce trigger .
- Add an edge connection from the Data Mapping element to the Insert row to Cloud SQL Connector element with the following edge condition: $OpportunityIsClosed$ = TRUE Add another edge connection from the Data Mapping element to the Cloud Pub/Sub Connector element with the following edge condition: $OpportunityIsClosed$ = FALSE Test the integration To test the new integration: Click Test in the integration designer toolbar, and then select the Salesforce Trigger .
- Each entry includes details for the execution attempt, including: Integration name Execution ID Status Start time Duration Integration version Trigger ID Click the expander arrow ( > ) next to the executed integration to view an expanded list of tasks and variables in the integration, along with task status and variable payloads.

