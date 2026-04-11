---
title: "IAM roles and permissions for Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions
  title: "IAM roles and permissions for Integration Connectors \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
IAM roles and permissions for Integration Connectors
Predefined roles give granular access to specific Google Cloud resources.
These roles are created and maintained by Google. Google automatically updates their permissions
as necessary, such as when Google Cloud adds new features or services.
The following table lists all the predefined IAM roles for Integration Connectors:
Role
Permissions
Connector Admin
( roles/ connectors.admin )
Full access to all resources of Connectors Service.
connectors.actions.*
connectors.actions.execute
connectors.actions.list
connectors.connections.create
connectors.connections.delete
connectors. connections. executeSqlQuery
connectors. connections. generateOpenAPISpec
connectors.connections.get
connectors. connections. getConnectionSchemaMetadata
connectors. connections. getIamPolicy
connectors. connections. getRuntimeActionSchema
connectors. connections. getRuntimeEntitySchema
connectors.connections.list
connectors. connections. setIamPolicy
connectors.connections.update
connectors.connectors.*
connectors.connectors.get
connectors.connectors.list
connectors. customConnectorVersions.*
connectors. customConnectorVersions. create
connectors. customConnectorVersions. delete
connectors. customConnectorVersions. get
connectors. customConnectorVersions. getIamPolicy
connectors. customConnectorVersions. list
connectors. customConnectorVersions. setIamPolicy
connectors. customConnectorVersions. update
connectors.customConnectors.*
connectors. customConnectors. create
connectors. customConnectors. delete
connectors. customConnectors. get
connectors. customConnectors. getIamPolicy
connectors. customConnectors. list
connectors. customConnectors. setIamPolicy
connectors. customConnectors. update
connectors. endpointAttachments.*
connectors. endpointAttachments. create
connectors. endpointAttachments. delete
connectors. endpointAttachments. get
connectors. endpointAttachments. getIamPolicy
connectors. endpointAttachments. list
connectors. endpointAttachments. setIamPolicy
connectors. endpointAttachments. update
connectors.entities.*
connectors.entities.create
connectors.entities.delete
connectors. entities. deleteEntitiesWithConditions
connectors.entities.get
connectors.entities.list
connectors.entities.update
connectors. entities. updateEntitiesWithConditions
connectors.entityTypes.list
connectors. eventSubscriptions.*
connectors. eventSubscriptions. create
connectors. eventSubscriptions. delete
connectors. eventSubscriptions. get
connectors. eventSubscriptions. list
connectors. eventSubscriptions. update
connectors.eventtypes.*
connectors.eventtypes.get
connectors.eventtypes.list
connectors.locations.*
connectors.locations.get
connectors.locations.list
connectors.managedZones.*
connectors.managedZones.create
connectors.managedZones.delete
connectors.managedZones.get
connectors. managedZones. getIamPolicy
connectors.managedZones.list
connectors. managedZones. setIamPolicy
connectors.managedZones.update
connectors.operations.*
connectors.operations.cancel
connectors.operations.delete
connectors.operations.get
connectors.operations.list
connectors.providers.*
connectors.providers.get
connectors.providers.list
connectors.regionalSettings.*
connectors. regionalSettings. get
connectors. regionalSettings. update
connectors.runtimeconfig.get
connectors. schemaMetadata. refresh
connectors.settings.*
connectors.settings.get
connectors.settings.update
connectors.versions.*
connectors.versions.get
connectors.versions.list
resourcemanager.projects.get
resourcemanager.projects.list
secretmanager. secrets. getIamPolicy
Connectors Viewer
( roles/ connectors.viewer )
Read-only access to Connectors all resources.
connectors. connections. generateOpenAPISpec
connectors.connections.get
connectors. connections. getConnectionSchemaMetadata
connectors. connections. getIamPolicy
connectors. connections. getRuntimeActionSchema
connectors. connections. getRuntimeEntitySchema
connectors.connections.list
connectors.connectors.*
connectors.connectors.get
connectors.connectors.list
connectors. customConnectorVersions. get
connectors. customConnectorVersions. getIamPolicy
connectors. customConnectorVersions. list
connectors. customConnectors. get
connectors. customConnectors. getIamPolicy
connectors. customConnectors. list
connectors. endpointAttachments. get
connectors. endpointAttachments. getIamPolicy
connectors. endpointAttachments. list
connectors. eventSubscriptions. get
connectors. eventSubscriptions. list
connectors.eventtypes.*
connectors.eventtypes.get
connectors.eventtypes.list
connectors.locations.*
connectors.locations.get
connectors.locations.list
connectors.managedZones.get
connectors. managedZones. getIamPolicy
connectors.managedZones.list
connectors.operations.get
connectors.operations.list
connectors.providers.*
connectors.providers.get
connectors.providers.list
connectors. regionalSettings. get
connectors.runtimeconfig.get
connectors.settings.get
connectors.versions.*
connectors.versions.get
connectors.versions.list
resourcemanager.projects.get
resourcemanager.projects.list
Custom Connectors Admin
( roles/ connectors.customConnectorAdmin )
Custom Connector is a global resource which creates custom connector within the given target project. This role grants Admin access to Custom Connector resources
connectors. customConnectorVersions.*
connectors. customConnectorVersions. create
connectors. customConnectorVersions. delete
connectors. customConnectorVersions. get
connectors. customConnectorVersions. getIamPolicy
connectors. customConnectorVersions. list
connectors. customConnectorVersions. setIamPolicy
connectors. customConnectorVersions. update
connectors.customConnectors.*
connectors. customConnectors. create
connectors. customConnectors. delete
connectors. customConnectors. get
connectors. customConnectors. getIamPolicy
connectors. customConnectors. list
connectors. customConnectors. setIamPolicy
connectors. customConnectors. update
connectors.locations.*
connectors.locations.get
connectors.locations.list
Custom Connector Viewer
( roles/ connectors.customConnectorViewer )
Custom Connector is a global resource which creates custom connector within the given target project. This role grants Read-only access to Custom Connector & Custom Connector Version resources.
connectors. customConnectorVersions. get
connectors. customConnectorVersions. getIamPolicy
connectors. customConnectorVersions. list
connectors. customConnectors. get
connectors. customConnectors. getIamPolicy
connectors. customConnectors. list
connectors.locations.*
connectors.locations.get
connectors.locations.list
Connectors Endpoint Attachment Admin
( roles/ connectors.endpointAttachmentAdmin )
Endpoint Attachment is a regional resource which creates PSC connection endpoint for the given PSC Service Attachment. This role grants Admin access to Connectors Endpoint Attachment resources.
connectors. endpointAttachments.*
connectors. endpointAttachments. create
connectors. endpointAttachments. delete
connectors. endpointAttachments. get
connectors. endpointAttachments. getIamPolicy
connectors. endpointAttachments. list
connectors. endpointAttachments. setIamPolicy
connectors. endpointAttachments. update
connectors.locations.*
connectors.locations.get
connectors.locations.list
Connectors Endpoint Attachment Viewer
( roles/ connectors.endpointAttachmentViewer )
Endpoint Attachment is a regional resource which creates PSC connection endpoint for the given PSC Service Attachment. This role grants Read-only access to Connectors Endpoint Attachment resources
connectors. endpointAttachments. get
connectors. endpointAttachments. getIamPolicy
connectors. endpointAttachments. list
connectors.locations.*
connectors.locations.get
connectors.locations.list
Connectors Event Subscriptions Admin
( roles/ connectors.eventSubscriptionAdmin )
Event Subscription is a regional resource which creates subscriptions on events for a given connection within the given target project. This role grants Admin access to Connectors Subscription resources
connectors. eventSubscriptions.*
connectors. eventSubscriptions. create
connectors. eventSubscriptions. delete
connectors. eventSubscriptions. get
connectors. eventSubscriptions. list
connectors. eventSubscriptions. update
Connectors Event Subscriptions Viewer
( roles/ connectors.eventSubscriptionViewer )
Event Subscription is a regional resource which creates subscriptions on events for a given connection within the given target project. This role grants Read-only access to Event Subscription resources.
connectors. eventSubscriptions. get
connectors. eventSubscriptions. list
Connector Invoker
( roles/ connectors.invoker )
Full Access to invoke all operations on Connections.
connectors.actions.*
connectors.actions.execute
connectors.actions.list
connectors. connections. executeSqlQuery
connectors.entities.*
connectors.entities.create
connectors.entities.delete
connectors. entities. deleteEntitiesWithConditions
connectors.entities.get
connectors.entities.list
connectors.entities.update
connectors. entities. updateEntitiesWithConditions
connectors.entityTypes.list
Connector Event Listener
( roles/ connectors.listener )
Full Access to listen events by connections.
connectors. connections. listenEvent
Connectors Managed Zone Admin
( roles/ connectors.managedZoneAdmin )
Managed Zone is a global resource which creates Cloud DNS Peering Zone with the given target project. This role grants Admin access to Connectors Managed Zone resources
connectors.locations.*
connectors.locations.get
connectors.locations.list
connectors.managedZones.*
connectors.managedZones.create
connectors.managedZones.delete
connectors.managedZones.get
connectors. managedZones. getIamPolicy
connectors.managedZones.list
connectors. managedZones. setIamPolicy
connectors.managedZones.update
Connectors Managed Zone Viewer
( roles/ connectors.managedZoneViewer )
Managed Zone is a global resource which creates Cloud DNS Peering Zone with the given target project. This role grants Read-only access to Connectors Managed Zone resources.
connectors.locations.*
connectors.locations.get
connectors.locations.list
connectors.managedZones.get
connectors. managedZones. getIamPolicy
connectors.managedZones.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Connectors Platform Service Agent
( roles/ connectors.serviceAgent )
Grants Connectors Platform service account to manage customer resources
Warning: Do not grant service agent roles to any principals except
service agents .
connectors.actions.*
connectors.actions.execute
connectors.actions.list
connectors.connections.get
connectors. connections. getConnectionSchemaMetadata
connectors.connections.list
connectors.connectors.*
connectors.connectors.get
connectors.connectors.list
connectors. customConnectorVersions. get
connectors. customConnectorVersions. list
connectors. customConnectors. get
connectors. customConnectors. list
connectors. endpointAttachments. get
connectors. endpointAttachments. list
connectors.entities.get
connectors.entityTypes.list
connectors. eventSubscriptions. get
connectors. eventSubscriptions. list
connectors.eventtypes.*
connectors.eventtypes.get
connectors.eventtypes.list
connectors.locations.*
connectors.locations.get
connectors.locations.list
connectors.managedZones.get
connectors.managedZones.list
connectors.providers.*
connectors.providers.get
connectors.providers.list
connectors.runtimeconfig.get
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
iam. serviceAccounts. implicitDelegation
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring.timeSeries.create
For more information about predefined roles, see Roles and permissions . For help choosing the most appropriate predefined roles, see Choose predefined roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
