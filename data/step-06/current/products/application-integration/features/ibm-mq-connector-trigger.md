---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.478Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "IBM MQ connector trigger"
feature_slug: "ibm-mq-connector-trigger"
latest_feature_date: "2023-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger"
keywords:
  - "introduced"
  - "connector"
  - "trigger"
  - "preview"
---

# IBM MQ connector trigger

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration introduced an IBM MQ connector trigger in preview so integrations can be invoked by IBM MQ events.

## Extended Definition

Application Integration introduced an IBM MQ connector trigger in preview so integrations can be invoked by IBM MQ events.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger](https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger](https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger](https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger)

## Supporting Pages

### Azure AD trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger](https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin If you plan to create or configure a new connection for the Azure AD trigger , make sure that you have the following IAM role on the project: Connector Admin ( roles/connectors.admin ) For information about granting roles, see Manage access .
- To configure the Azure AD trigger , you can either use an existing Azure AD connection available in Integration Connectors, or create a new Azure AD connection using the inline connection creation option.
- Note that the Azure AD trigger is an Connector Event trigger , therefore you can only use an Azure AD connection with event subscription enabled to configure the trigger.
- The Azure AD trigger is a Connector Event trigger that lets you invoke an integration based on the Azure AD events that you've subscribed to in your Azure AD connection.

### HubSpot trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger](https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin If you plan to create or configure a new connection for the HubSpot trigger , make sure that you have the following Identity and Access Management (IAM) role on the project: Connector Admin ( roles/connectors.admin ) For information about granting roles, see Manage access .
- The following image shows a sample layout of the HubSpot trigger configuration pane: Trigger output variable For each event, the HubSpot trigger generates a ConnectorEventPayload output variable which you can use in your downstream tasks.
- To configure the HubSpot trigger , you can either use an existing HubSpot connection available in Integration Connectors, or create a new HubSpot connection using the inline connection creation option.
- HubSpot trigger Preview — HubSpot trigger This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Apache Kafka trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger](https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin If you plan to create or configure a new connection for the Apache Kafka trigger , make sure that you have the following Identity and Access Management (IAM) role on the project: Connector Admin ( roles/connectors.admin ) For information about granting roles, see Manage access .
- To configure the Apache Kafka trigger , you can either use an existing Apache Kafka connection available in Integration Connectors, or create a new Apache Kafka connection using the inline connection creation option.
- The Apache Kafka trigger is a Connector Event trigger that lets you invoke an integration based on the Apache Kafka events that you've subscribed to in your Apache Kafka connection.
- Note that the Apache Kafka trigger is an Connector Event trigger , therefore you can only use a Apache Kafka connection with event subscription enabled to configure the trigger.

