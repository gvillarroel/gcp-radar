---
title: "Connectors API \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
  title: "Connectors API \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Reference
Send feedback
Connectors API
Stay organized with collections
Save and categorize content based on your preferences.
Enables users to create and manage connections to Google Cloud services and third-party business applications using the Connectors interface.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.connections
REST Resource: v1.projects.locations.connections.connectionSchemaMetadata
REST Resource: v1.projects.locations.connections.eventSubscriptions
REST Resource: v1.projects.locations.connections.runtimeActionSchemas
REST Resource: v1.projects.locations.connections.runtimeEntitySchemas
REST Resource: v1.projects.locations.customConnectors
REST Resource:
v1.projects.locations.customConnectors.customConnectorVersions
REST Resource: v1.projects.locations.endpointAttachments
REST Resource: v1.projects.locations.global
REST Resource: v1.projects.locations.global.customConnectors
REST Resource:
v1.projects.locations.global.customConnectors.customConnectorVersions
REST Resource: v1.projects.locations.global.managedZones
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.providers
REST Resource: v1.projects.locations.providers.connectors
REST Resource: v1.projects.locations.providers.connectors.versions
REST Resource:
v1.projects.locations.providers.connectors.versions.eventtypes
Service: connectors.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://connectors.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://connectors.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
getRegionalSettings
GET /v1/{name=projects/*/locations/*/regionalSettings}
GetRegionalSettings gets settings of a region.
getRuntimeConfig
GET /v1/{name=projects/*/locations/*/runtimeConfig}
Gets the runtimeConfig of a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
updateRegionalSettings
PATCH /v1/{regionalSettings.name=projects/*/locations/*/regionalSettings}
Update the settings of a region.
REST Resource: v1.projects.locations.connections
Methods
create
POST /v1/{parent=projects/*/locations/*}/connections
Creates a new Connection in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/connections/*}
Deletes a single Connection.
get
GET /v1/{name=projects/*/locations/*/connections/*}
Gets details of a single Connection.
getConnectionSchemaMetadata
GET /v1/{name=projects/*/locations/*/connections/*/connectionSchemaMetadata}
Gets schema metadata of a connection.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/connections/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/connections
Lists Connections in a given project and location.
patch
PATCH /v1/{connection.name=projects/*/locations/*/connections/*}
Updates the parameters of a single Connection.
repairEventing
POST /v1/{name=projects/*/locations/*/connections/*}:repairEventing
RepaiEventing tries to repair eventing related event subscriptions.
search
GET /v1/{name=projects/*/locations/*/connections}:search
Returns Top matching Connections for a given query.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/connections/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/connections/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.connections.connectionSchemaMetadata
Methods
getAction
GET /v1/{name=projects/*/locations/*/connections/*/connectionSchemaMetadata}:getAction
Get action.
getEntityType
GET /v1/{name=projects/*/locations/*/connections/*/connectionSchemaMetadata}:getEntityType
Get entity type.
listActions
GET /v1/{name=projects/*/locations/*/connections/*/connectionSchemaMetadata}:listActions
List actions.
listEntityTypes
GET /v1/{name=projects/*/locations/*/connections/*/connectionSchemaMetadata}:listEntityTypes
List entity types.
refresh
POST /v1/{name=projects/*/locations/*/connections/*/connectionSchemaMetadata}:refresh
Refresh runtime schema of a connection.
REST Resource: v1.projects.locations.connections.eventSubscriptions
Methods
create
POST /v1/{parent=projects/*/locations/*/connections/*}/eventSubscriptions
Creates a new EventSubscription in a given project,location and connection.
delete
DELETE /v1/{name=projects/*/locations/*/connections/*/eventSubscriptions/*}
Deletes a single EventSubscription.
get
GET /v1/{name=projects/*/locations/*/connections/*/eventSubscriptions/*}
Gets details of a single EventSubscription.
list
GET /v1/{parent=projects/*/locations/*/connections/*}/eventSubscriptions
List EventSubscriptions in a given project,location and connection.
patch
PATCH /v1/{eventSubscription.name=projects/*/locations/*/connections/*/eventSubscriptions/*}
Updates the parameters of a single EventSubscription.
retry
POST /v1/{name=projects/*/locations/*/connections/*/eventSubscriptions/*}:retry
RetryEventSubscription retries the registration of Subscription.
REST Resource: v1.projects.locations.connections.runtimeActionSchemas
Methods
list
GET /v1/{parent=projects/*/locations/*/connections/*}/runtimeActionSchemas
List schema of a runtime actions filtered by action name.
REST Resource: v1.projects.locations.connections.runtimeEntitySchemas
Methods
list
GET /v1/{parent=projects/*/locations/*/connections/*}/runtimeEntitySchemas
List schema of a runtime entities filtered by entity name.
REST Resource: v1.projects.locations.customConnectors
Methods
validateCustomConnectorSpec
POST /v1/{parent=projects/*/locations/*}/customConnectors:validateCustomConnectorSpec
Validates a Custom Connector Spec.
REST Resource: v1.projects.locations.customConnectors.customConnectorVersions
Methods
delete
DELETE /v1/{name=projects/*/locations/*/customConnectors/*/customConnectorVersions/*}
Deletes a single CustomConnectorVersion.
deprecate
POST /v1/{name=projects/*/locations/*/customConnectors/*/customConnectorVersions/*}:deprecate
Deprecates a single CustomConnectorVersion.
publish
POST /v1/{name=projects/*/locations/*/customConnectors/*/customConnectorVersions/*}:publish
Publish request for the CustomConnectorVersion.
withdraw
POST /v1/{name=projects/*/locations/*/customConnectors/*/customConnectorVersions/*}:withdraw
Withdraw the publish request for the CustomConnectorVersion.
REST Resource: v1.projects.locations.endpointAttachments
Methods
create
POST /v1/{parent=projects/*/locations/*}/endpointAttachments
Creates a new EndpointAttachment in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/endpointAttachments/*}
Deletes a single EndpointAttachment.
get
GET /v1/{name=projects/*/locations/*/endpointAttachments/*}
Gets details of a single EndpointAttachment.
list
GET /v1/{parent=projects/*/locations/*}/endpointAttachments
List EndpointAttachments in a given project
patch
PATCH /v1/{endpointAttachment.name=projects/*/locations/*/endpointAttachments/*}
Updates the parameters of a single EndpointAttachment.
REST Resource: v1.projects.locations.global
Methods
getSettings
GET /v1/{name=projects/*/locations/global/settings}
GetGlobalSettings gets settings of a project.
updateSettings
PATCH /v1/{globalSettings.name=projects/*/locations/global/settings}
Update the global settings of a project.
REST Resource: v1.projects.locations.global.customConnectors
Methods
create
POST /v1/{parent=projects/*/locations/global}/customConnectors
Creates a new CustomConnector in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/global/customConnectors/*}
Deletes a single CustomConnector.
get
GET /v1/{name=projects/*/locations/global/customConnectors/*}
Gets details of a single CustomConnector.
list
GET /v1/{parent=projects/*/locations/global}/customConnectors
List CustomConnectorVersions in a given project
patch
PATCH /v1/{customConnector.name=projects/*/locations/global/customConnectors/*}
Updates the parameters of a CustomConnector.
REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions
Methods
create
POST /v1/{parent=projects/*/locations/global/customConnectors/*}/customConnectorVersions
Creates a new CustomConnectorVersion in a given project and location.
get
GET /v1/{name=projects/*/locations/global/customConnectors/*/customConnectorVersions/*}
Gets details of a single CustomConnectorVersion.
list
GET /v1/{parent=projects/*/locations/global/customConnectors/*}/customConnectorVersions
List CustomConnectorVersions in a given project
REST Resource: v1.projects.locations.global.managedZones
Methods
create
POST /v1/{parent=projects/*/locations/global}/managedZones
Creates a new ManagedZone in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/global/managedZones/*}
Deletes a single ManagedZone.
get
GET /v1/{name=projects/*/locations/global/managedZones/*}
Gets details of a single ManagedZone.
list
GET /v1/{parent=projects/*/locations/global}/managedZones
List ManagedZones in a given project
patch
PATCH /v1/{managedZone.name=projects/*/locations/global/managedZones/*}
Updates the parameters of a single ManagedZone.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.providers
Methods
get
GET /v1/{name=projects/*/locations/*/providers/*}
Gets details of a provider.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/providers/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/providers
Lists Providers in a given project and location.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/providers/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/providers/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.providers.connectors
Methods
get
GET /v1/{name=projects/*/locations/*/providers/*/connectors/*}
Gets details of a single Connector.
list
GET /v1/{parent=projects/*/locations/*/providers/*}/connectors
Lists Connectors in a given project and location.
REST Resource: v1.projects.locations.providers.connectors.versions
Methods
fetchAuthSchema
GET /v1/{name=projects/*/locations/*/providers/*/connectors/*/versions/*}:fetchAuthSchema
fetch and return the list of auth config variables required to override the connection backend auth.
get
GET /v1/{name=projects/*/locations/*/providers/*/connectors/*/versions/*}
Gets details of a single connector version.
list
GET /v1/{parent=projects/*/locations/*/providers/*/connectors/*}/versions
Lists Connector Versions in a given project and location.
REST Resource: v1.projects.locations.providers.connectors.versions.eventtypes
Methods
get
GET /v1/{name=projects/*/locations/*/providers/*/connectors/*/versions/*/eventtypes/*}
Gets details of a single event type.
list
GET /v1/{parent=projects/*/locations/*/providers/*/connectors/*/versions/*}/eventtypes
Lists Event Types in a given Connector Version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
