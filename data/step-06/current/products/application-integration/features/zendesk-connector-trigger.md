---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.482Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Zendesk connector trigger"
feature_slug: "zendesk-connector-trigger"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger"
keywords:
  - "zendesk"
  - "became"
  - "connector"
  - "available"
  - "event"
  - "trigger"
  - "preview"
---

# Zendesk connector trigger

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

A Zendesk connector event trigger became available in preview in Application Integration.

## Extended Definition

A Zendesk connector event trigger became available in preview in Application Integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger](https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger](https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger](https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger)

## Supporting Pages

### Apache Kafka trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger](https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To configure the Apache Kafka trigger , you can either use an existing Apache Kafka connection available in Integration Connectors, or create a new Apache Kafka connection using the inline connection creation option.
- The Apache Kafka trigger is a Connector Event trigger that lets you invoke an integration based on the Apache Kafka events that you've subscribed to in your Apache Kafka connection.
- Note that the Apache Kafka trigger is an Connector Event trigger , therefore you can only use a Apache Kafka connection with event subscription enabled to configure the trigger.
- Trigger output variable For each event, the Apache Kafka trigger generates a ConnectorEventPayload output variable (in JSON format) which you can use in your downstream tasks.

### Azure AD trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger](https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To configure the Azure AD trigger , you can either use an existing Azure AD connection available in Integration Connectors, or create a new Azure AD connection using the inline connection creation option.
- Note that the Azure AD trigger is an Connector Event trigger , therefore you can only use an Azure AD connection with event subscription enabled to configure the trigger.
- The Azure AD trigger is a Connector Event trigger that lets you invoke an integration based on the Azure AD events that you've subscribed to in your Azure AD connection.
- Trigger output variable For each event, the Azure AD trigger generates a ConnectorEventPayload output variable which you can use in your downstream tasks.

### HubSpot trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger](https://docs.cloud.google.com/application-integration/docs/configure-hubspot-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following image shows a sample layout of the HubSpot trigger configuration pane: Trigger output variable For each event, the HubSpot trigger generates a ConnectorEventPayload output variable which you can use in your downstream tasks.
- To configure the HubSpot trigger , you can either use an existing HubSpot connection available in Integration Connectors, or create a new HubSpot connection using the inline connection creation option.
- The HubSpot trigger is a Connector Event trigger that lets you invoke an integration based on the custom HubSpot events that you've defined in your HubSpot instance.
- The HubSpot trigger is an connector event trigger , therefore you can only use a HubSpot connection with event subscription enabled to configure the trigger.

