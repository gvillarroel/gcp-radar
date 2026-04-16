---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.219Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "HubSpot event subscriptions"
feature_slug: "hubspot-event-subscriptions"
latest_feature_date: "2023-11-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/reference/rest"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions"
keywords:
  - "hubspot"
  - "event"
  - "subscriptions"
  - "the"
  - "connector"
  - "supports"
  - "through"
  - "new"
---

# HubSpot event subscriptions

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The HubSpot connector supports event subscriptions through a new trigger in Application Integration.

## Extended Definition

The HubSpot connector supports event subscriptions through a new trigger in Application Integration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)

## Supporting Pages

### Connectors API \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.connections Methods create POST /v1/{parent=projects/ /locations/ }/connections Creates a new Connection in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /connections/ } Deletes a single Connection. get GET /v1/{name=projects/ /locations/ /connections/ } Gets details of a single Connection. getConnectionSchemaMetadata GET /v1/{name=projects/ /locations/ /connections/ /connectionSchemaMetadata} Gets schema metadata of a connection. getIamPolicy GET /v1/{resource=projects/ /locations/ /connections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/connections Lists Connections in a given project and location. patch PATCH /v1/{connection.name=projects/ /locations/ /connections/ } Updates the parameters of a single Connection. repairEventing POST /v1/{name=projects/ /locations/ /connections/ }:repairEventing RepaiEventing tries to repair eventing related event subscriptions. search GET /v1/{name=projects/ /locations/ /connections}:search Returns Top matching Connections for a given query. setIamPolicy POST /v1/{resource=projects/ /locations/ /connections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /connections/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.connections REST Resource: v1.projects.locations.connections.connectionSchemaMetadata REST Resource: v1.projects.locations.connections.eventSubscriptions REST Resource: v1.projects.locations.connections.runtimeActionSchemas REST Resource: v1.projects.locations.connections.runtimeEntitySchemas REST Resource: v1.projects.locations.customConnectors REST Resource: v1.projects.locations.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.endpointAttachments REST Resource: v1.projects.locations.global REST Resource: v1.projects.locations.global.customConnectors REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.global.managedZones REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.providers REST Resource: v1.projects.locations.providers.connectors REST Resource: v1.projects.locations.providers.connectors.versions REST Resource: v1.projects.locations.providers.connectors.versions.eventtypes Service: connectors.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.connections.eventSubscriptions Methods create POST /v1/{parent=projects/ /locations/ /connections/ }/eventSubscriptions Creates a new EventSubscription in a given project,location and connection. delete DELETE /v1/{name=projects/ /locations/ /connections/ /eventSubscriptions/ } Deletes a single EventSubscription. get GET /v1/{name=projects/ /locations/ /connections/ /eventSubscriptions/ } Gets details of a single EventSubscription. list GET /v1/{parent=projects/ /locations/ /connections/ }/eventSubscriptions List EventSubscriptions in a given project,location and connection. patch PATCH /v1/{eventSubscription.name=projects/ /locations/ /connections/ /eventSubscriptions/ } Updates the parameters of a single EventSubscription. retry POST /v1/{name=projects/ /locations/ /connections/ /eventSubscriptions/ }:retry RetryEventSubscription retries the registration of Subscription.
- REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions Methods create POST /v1/{parent=projects/ /locations/global/customConnectors/ }/customConnectorVersions Creates a new CustomConnectorVersion in a given project and location. get GET /v1/{name=projects/ /locations/global/customConnectors/ /customConnectorVersions/ } Gets details of a single CustomConnectorVersion. list GET /v1/{parent=projects/ /locations/global/customConnectors/ }/customConnectorVersions List CustomConnectorVersions in a given project REST Resource: v1.projects.locations.global.managedZones Methods create POST /v1/{parent=projects/ /locations/global}/managedZones Creates a new ManagedZone in a given project and location. delete DELETE /v1/{name=projects/ /locations/global/managedZones/ } Deletes a single ManagedZone. get GET /v1/{name=projects/ /locations/global/managedZones/ } Gets details of a single ManagedZone. list GET /v1/{parent=projects/ /locations/global}/managedZones List ManagedZones in a given project patch PATCH /v1/{managedZone.name=projects/ /locations/global/managedZones/ } Updates the parameters of a single ManagedZone.

### Azure AD (Entra ID) \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "NewPassword" : "XXX@9876" , "CurrentPassword" : "XXX@123" } If the action is successful, the ChangePassword task's connectorOutputPayload response parameter has a value similar to the following: [{ "Success" : "True" }] Example - ResetPassword In the Configure connector task dialog, click Actions .
- Selecting this, displays the following options: Enable event subscription with entity and actions : Select this option to use the connection for both event subscription and connector operations (entities and actions).
- To enable data enrichment, you must configure the connection for both event subscription and connector operations (entities and actions).
- Action: An action is a first class function that is made available to the integration through the connector interface.

### Apache Kafka \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- The Kafka connector also supports event subscription, which allows the creation of triggers when messages are received in a topic.
- For connectors that support event subscription , the connection names cannot begin with the "goog" prefix. (Optional) Description: Enter a description for the connection. (Optional) Enable Cloud Logging: Select this checkbox to store all log data of the connection.
- In the Connection Details step, provide details about the new Apache Kafka connection: Connector version: Choose an available version of the Apache Kafka connector from the list.
- Note: This connector doesn't support the Enable only event subscription option.

### "IAM roles and permissions for Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all the predefined IAM roles for Integration Connectors: Role Permissions Connector Admin ( roles/ connectors.admin ) Full access to all resources of Connectors Service. connectors.actions. connectors.actions.execute connectors.actions.list connectors.connections.create connectors.connections.delete connectors. connections. executeSqlQuery connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors. connections. setIamPolicy connectors.connections.update connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. connectors. customConnectorVersions. create connectors. customConnectorVersions. delete connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectorVersions. setIamPolicy connectors. customConnectorVersions. update connectors.customConnectors. connectors. customConnectors. create connectors. customConnectors. delete connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. customConnectors. setIamPolicy connectors. customConnectors. update connectors. endpointAttachments. connectors. endpointAttachments. create connectors. endpointAttachments. delete connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. endpointAttachments. setIamPolicy connectors. endpointAttachments. update connectors.entities. connectors.entities.create connectors.entities.delete connectors. entities. deleteEntitiesWithConditions connectors.entities.get connectors.entities.list connectors.entities.update connectors. entities. updateEntitiesWithConditions connectors.entityTypes.list connectors. eventSubscriptions. connectors. eventSubscriptions. create connectors. eventSubscriptions. delete connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors. eventSubscriptions. update connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones. connectors.managedZones.create connectors.managedZones.delete connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors. managedZones. setIamPolicy connectors.managedZones.update connectors.operations. connectors.operations.cancel connectors.operations.delete connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors.regionalSettings. connectors. regionalSettings. get connectors. regionalSettings. update connectors.runtimeconfig.get connectors. schemaMetadata. refresh connectors.settings. connectors.settings.get connectors.settings.update connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list secretmanager. secrets. getIamPolicy Connectors Viewer ( roles/ connectors.viewer ) Read-only access to Connectors all resources. connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors. regionalSettings. get connectors.runtimeconfig.get connectors.settings.get connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list Custom Connectors Admin ( roles/ connectors.customConnectorAdmin ) Custom Connector is a global resource which creates custom connector within the given target project.
- This role grants Read-only access to Event Subscription resources. connectors. eventSubscriptions. get connectors. eventSubscriptions. list Connector Invoker ( roles/ connectors.invoker ) Full Access to invoke all operations on Connections. connectors.actions. connectors.actions.execute connectors.actions.list connectors. connections. executeSqlQuery connectors.entities. connectors.entities.create connectors.entities.delete connectors. entities. deleteEntitiesWithConditions connectors.entities.get connectors.entities.list connectors.entities.update connectors. entities. updateEntitiesWithConditions connectors.entityTypes.list Connector Event Listener ( roles/ connectors.listener ) Full Access to listen events by connections. connectors. connections. listenEvent Connectors Managed Zone Admin ( roles/ connectors.managedZoneAdmin ) Managed Zone is a global resource which creates Cloud DNS Peering Zone with the given target project.
- This role grants Admin access to Connectors Subscription resources connectors. eventSubscriptions. connectors. eventSubscriptions. create connectors. eventSubscriptions. delete connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors. eventSubscriptions. update Connectors Event Subscriptions Viewer ( roles/ connectors.eventSubscriptionViewer ) Event Subscription is a regional resource which creates subscriptions on events for a given connection within the given target project.
- This role grants Read-only access to Connectors Endpoint Attachment resources connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors.locations. connectors.locations.get connectors.locations.list Connectors Event Subscriptions Admin ( roles/ connectors.eventSubscriptionAdmin ) Event Subscription is a regional resource which creates subscriptions on events for a given connection within the given target project.

