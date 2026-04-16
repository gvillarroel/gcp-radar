---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.472Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "SAP ERP trigger"
feature_slug: "sap-erp-trigger"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger"
keywords:
  - "generally"
  - "connector"
  - "available"
  - "event"
  - "trigger"
---

# SAP ERP trigger

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The SAP ERP connector event trigger is generally available for Application Integration.

## Extended Definition

The SAP ERP connector event trigger is generally available for Application Integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger](https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger)
- [https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger](https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger)

## Supporting Pages

### SAP ERP trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 201
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure SAP ERP trigger using an existing connection The SAP ERP trigger is an Connector Event trigger , therefore you can only use a SAP ERP connection with event subscription enabled to configure the trigger.
- To configure the SAP ERP trigger , you can either use an existing SAP ERP connection available in Integration Connectors, or create a new SAP ERP connection using the inline connection creation option.
- SAP ERP trigger The SAP ERP trigger is a Connector Event trigger SAP ERP connector lets you perform insert, delete, update, and read operations on SAP ERP data.
- Provide the following configuration details in the Connector Event Trigger Editor page: Region: Select the region of your SAP ERP connection.

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
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To configure the Azure AD trigger , you can either use an existing Azure AD connection available in Integration Connectors, or create a new Azure AD connection using the inline connection creation option.
- Note that the Azure AD trigger is an Connector Event trigger , therefore you can only use an Azure AD connection with event subscription enabled to configure the trigger.
- The Azure AD trigger is a Connector Event trigger that lets you invoke an integration based on the Azure AD events that you've subscribed to in your Azure AD connection.
- Trigger output variable For each event, the Azure AD trigger generates a ConnectorEventPayload output variable which you can use in your downstream tasks.

