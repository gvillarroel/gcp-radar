---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.223Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Pub/Sub connector PublishMessage topic name optionality"
feature_slug: "pub-sub-connector-publishmessage-topic-name-optionality"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/reference/rest"
keywords:
  - "pub"
  - "sub"
  - "connector"
  - "publishmessage"
  - "topic"
  - "name"
  - "optionality"
  - "the"
---

# Pub/Sub connector PublishMessage topic name optionality

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The Pub/Sub connector PublishMessage action allows the topic name input parameter to be optional.

## Extended Definition

The Pub/Sub connector PublishMessage action allows the topic name input parameter to be optional.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)

## Supporting Pages

### Apache Kafka \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For connectors that support event subscription , the connection names cannot begin with the "goog" prefix. (Optional) Description: Enter a description for the connection. (Optional) Enable Cloud Logging: Select this checkbox to store all log data of the connection.
- Input parameters Parameter name Required Data type Description Topic Yes String Name of the topic to which you want to publish the message.
- Enter the following details: Dead-letter project ID: The Google Cloud project ID where you have configured the dead-letter Pub/Sub topic.
- The Kafka connector also supports event subscription, which allows the creation of triggers when messages are received in a topic.

### Azure AD (Entra ID) \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- OAuth 2.0 Client Credentials connection type Field name Details Location us-central1 Connector Azure AD (Entra ID) Connector version 1 Connection Name azure-ad-client-credentials Enable Cloud Logging Yes Service Account XXXX@serviceaccount Azure Tenant 9b25e811-f983-4982-82e4-263c1ca48112 Minimum number of nodes 2 Maximum number of nodes 50 Authentication Yes OAuth 2.0 - Client credentials with client secret Yes Client Id XXXX Client Secret XXXX Secret version 1 OAuth 2.0 Client credentials with JWT bearer connection type Field name Details Location europe-west1 Connector Azure AD (Entra ID) Connector version 1 Connection Name azure-jwt Enable Cloud Logging Yes Service Account XXXX@serviceaccount Azure Tenant 9b25e811-f983-4982-82e4-263c1ca48112 Minimum number of nodes 2 Maximum number of nodes 50 Authentication Yes OAuth 2.0 - Client credentials with JWT bearer Yes Private Key XXXX Secret version 1 Client Id XXXX When you use the OAuth 2.0 Client credentials with JWT bearer connection type, complete the following tasks: Create a self signed certificate and download both the private key certificate and public key.
- Enter the following details: Dead-letter project ID: The Google Cloud project ID where you have configured the dead-letter Pub/Sub topic.
- If you configure dead-letter, the connection writes the unprocessed events to the specified Pub/Sub topic .
- Dead-letter topic: The Pub/Sub topic where you want to write the details of the unprocessed event.

### AlloyDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Username and password Username : Username for connector Password : Secret Manager Secret containing the password associated with the connector.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description database STRING True The name of the AlloyDB database. browse partitions BOOLEAN False By default, the provider exposes the super table and its partitions by metadata.
- The following diagram shows a sample setup of AlloyDB for public connectivity: Note: If you want to establish the public connection with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

### Connectors API \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.projects.locations.customConnectors.customConnectorVersions Methods delete DELETE /v1/{name=projects/ /locations/ /customConnectors/ /customConnectorVersions/ } Deletes a single CustomConnectorVersion. deprecate POST /v1/{name=projects/ /locations/ /customConnectors/ /customConnectorVersions/ }:deprecate Deprecates a single CustomConnectorVersion. publish POST /v1/{name=projects/ /locations/ /customConnectors/ /customConnectorVersions/ }:publish Publish request for the CustomConnectorVersion. withdraw POST /v1/{name=projects/ /locations/ /customConnectors/ /customConnectorVersions/ }:withdraw Withdraw the publish request for the CustomConnectorVersion.
- REST Resource: v1.projects.locations.connections Methods create POST /v1/{parent=projects/ /locations/ }/connections Creates a new Connection in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /connections/ } Deletes a single Connection. get GET /v1/{name=projects/ /locations/ /connections/ } Gets details of a single Connection. getConnectionSchemaMetadata GET /v1/{name=projects/ /locations/ /connections/ /connectionSchemaMetadata} Gets schema metadata of a connection. getIamPolicy GET /v1/{resource=projects/ /locations/ /connections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/connections Lists Connections in a given project and location. patch PATCH /v1/{connection.name=projects/ /locations/ /connections/ } Updates the parameters of a single Connection. repairEventing POST /v1/{name=projects/ /locations/ /connections/ }:repairEventing RepaiEventing tries to repair eventing related event subscriptions. search GET /v1/{name=projects/ /locations/ /connections}:search Returns Top matching Connections for a given query. setIamPolicy POST /v1/{resource=projects/ /locations/ /connections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /connections/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.connections REST Resource: v1.projects.locations.connections.connectionSchemaMetadata REST Resource: v1.projects.locations.connections.eventSubscriptions REST Resource: v1.projects.locations.connections.runtimeActionSchemas REST Resource: v1.projects.locations.connections.runtimeEntitySchemas REST Resource: v1.projects.locations.customConnectors REST Resource: v1.projects.locations.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.endpointAttachments REST Resource: v1.projects.locations.global REST Resource: v1.projects.locations.global.customConnectors REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.global.managedZones REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.providers REST Resource: v1.projects.locations.providers.connectors REST Resource: v1.projects.locations.providers.connectors.versions REST Resource: v1.projects.locations.providers.connectors.versions.eventtypes Service: connectors.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions Methods create POST /v1/{parent=projects/ /locations/global/customConnectors/ }/customConnectorVersions Creates a new CustomConnectorVersion in a given project and location. get GET /v1/{name=projects/ /locations/global/customConnectors/ /customConnectorVersions/ } Gets details of a single CustomConnectorVersion. list GET /v1/{parent=projects/ /locations/global/customConnectors/ }/customConnectorVersions List CustomConnectorVersions in a given project REST Resource: v1.projects.locations.global.managedZones Methods create POST /v1/{parent=projects/ /locations/global}/managedZones Creates a new ManagedZone in a given project and location. delete DELETE /v1/{name=projects/ /locations/global/managedZones/ } Deletes a single ManagedZone. get GET /v1/{name=projects/ /locations/global/managedZones/ } Gets details of a single ManagedZone. list GET /v1/{parent=projects/ /locations/global}/managedZones List ManagedZones in a given project patch PATCH /v1/{managedZone.name=projects/ /locations/global/managedZones/ } Updates the parameters of a single ManagedZone.

