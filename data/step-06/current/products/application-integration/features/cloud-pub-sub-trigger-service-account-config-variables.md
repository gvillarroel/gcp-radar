---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.475Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cloud Pub/Sub trigger service account config variables"
feature_slug: "cloud-pub-sub-trigger-service-account-config-variables"
latest_feature_date: "2024-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-servicenow-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-api-trigger"
keywords:
  - "account"
  - "config"
  - "configuration"
  - "variables"
  - "trigger"
---

# Cloud Pub/Sub trigger service account config variables

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Cloud Pub/Sub trigger configuration now supports a config variable for the service account.

## Extended Definition

Cloud Pub/Sub trigger configuration now supports a config variable for the service account.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger](https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-servicenow-trigger](https://docs.cloud.google.com/application-integration/docs/configure-servicenow-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-api-trigger](https://docs.cloud.google.com/application-integration/docs/configure-api-trigger)

## Supporting Pages

### Salesforce trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger](https://docs.cloud.google.com/application-integration/docs/configure-salesforce-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 173
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a new Salesforce instance To configure a new Salesforce instance, perform the following steps: In the editable properties of the trigger, click Select a Salesforce instance configuration > + Add new Salesforce instance configuration .
- Create a new Salesforce channel To configure a new Salesforce channel, perform the following steps: In the editable properties of the trigger, click Select a Salesforce channel configuration > + Add new Salesforce channel configuration .
- Configure the Salesforce trigger To configure the Salesforce trigger, perform the following steps: Click Salesforce trigger in the integration editor to view the trigger configuration pane.
- Prerequisite steps to use Platform events Before configuring your Application Integration trigger to use Platform events, complete the following steps in Salesforce: Create a Platform Event Update permissions for the Platform Event Create a Platform event To create a Platform event, perform the following steps: Log in to your Salesforce instance with your sysadmin credentials.

### API trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-api-trigger](https://docs.cloud.google.com/application-integration/docs/configure-api-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Application Integration automatically adds variables created from the API trigger configuration pane to that specific trigger as input or output variables.
- Note : You can create input and output variables from both the Variables pane and the API trigger configuration pane.
- Configuring an API trigger in your integration enables you to do the following: Set request and response payload using trigger specific input and output variables.
- The API trigger configuration pane appears showing the following fields: Label: The visible name of the API trigger in your integration.

### ServiceNow trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-servicenow-trigger](https://docs.cloud.google.com/application-integration/docs/configure-servicenow-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information about how to configure a ServiceNow trigger using a new ServiceNow connection, See Configure ServiceNow trigger using a new connection To configure a ServiceNow trigger using an existing ServiceNow connection, perform the following steps: Click the ServiceNow trigger element in the integration editor to open the trigger configuration pane.
- Configure ServiceNow trigger using a new connection To configure the ServiceNow trigger using a new ServiceNow connection, perform the following steps: Click the ServiceNow trigger element in the integration editor to open the trigger configuration pane.
- The following image shows a sample layout of the ServiceNow trigger configuration pane: Trigger output variable For each event, the ServiceNow trigger generates a ConnectorEventPayload output variable which you can use in your downstream tasks.
- The following image shows a sample ServiceNow business rule with the update ticket event type: Trigger output The ServiceNow trigger takes a couple of minutes to complete the event subscription configuration.

