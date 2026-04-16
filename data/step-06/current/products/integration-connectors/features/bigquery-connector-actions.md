---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.227Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "BigQuery connector actions"
feature_slug: "bigquery-connector-actions"
latest_feature_date: "2023-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure"
keywords:
  - "connector"
  - "actions"
  - "the"
  - "supports"
  - "canceljob"
  - "getjob"
  - "insertjob"
  - "and"
---

# BigQuery connector actions

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The BigQuery connector supports CancelJob, GetJob, InsertJob, and InsertLoadJob actions.

## Extended Definition

The BigQuery connector supports CancelJob, GetJob, InsertJob, and InsertLoadJob actions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure)

## Supporting Pages

### BigQuery \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Supported values are: AUTO, ALWAYS, NEVER, TUNNEL System limitations The BigQuery connector can process a maximum of 8 transactions per second, per node , and throttles any transactions beyond this limit.
- The results of all the entity operations and actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) To understand how to enable services, see Enabling services .
- To create a connection, do the following: In the Cloud console , go to the Integration Connectors > Connections page and then select or create a Google Cloud project.

### Apache Cassandra \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- System limitations The Apache Cassandra connector can process 65 transactions per second, per node , and throttles any transactions beyond this limit.
- If you have any stored procedures and functions in your backend, those are listed in the Actions column of the Configure connector task dialog.
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.

### "IAM roles and permissions for Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all the predefined IAM roles for Integration Connectors: Role Permissions Connector Admin ( roles/ connectors.admin ) Full access to all resources of Connectors Service. connectors.actions. connectors.actions.execute connectors.actions.list connectors.connections.create connectors.connections.delete connectors. connections. executeSqlQuery connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors. connections. setIamPolicy connectors.connections.update connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. connectors. customConnectorVersions. create connectors. customConnectorVersions. delete connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectorVersions. setIamPolicy connectors. customConnectorVersions. update connectors.customConnectors. connectors. customConnectors. create connectors. customConnectors. delete connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. customConnectors. setIamPolicy connectors. customConnectors. update connectors. endpointAttachments. connectors. endpointAttachments. create connectors. endpointAttachments. delete connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. endpointAttachments. setIamPolicy connectors. endpointAttachments. update connectors.entities. connectors.entities.create connectors.entities.delete connectors. entities. deleteEntitiesWithConditions connectors.entities.get connectors.entities.list connectors.entities.update connectors. entities. updateEntitiesWithConditions connectors.entityTypes.list connectors. eventSubscriptions. connectors. eventSubscriptions. create connectors. eventSubscriptions. delete connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors. eventSubscriptions. update connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones. connectors.managedZones.create connectors.managedZones.delete connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors. managedZones. setIamPolicy connectors.managedZones.update connectors.operations. connectors.operations.cancel connectors.operations.delete connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors.regionalSettings. connectors. regionalSettings. get connectors. regionalSettings. update connectors.runtimeconfig.get connectors. schemaMetadata. refresh connectors.settings. connectors.settings.get connectors.settings.update connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list secretmanager. secrets. getIamPolicy Connectors Viewer ( roles/ connectors.viewer ) Read-only access to Connectors all resources. connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors. regionalSettings. get connectors.runtimeconfig.get connectors.settings.get connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list Custom Connectors Admin ( roles/ connectors.customConnectorAdmin ) Custom Connector is a global resource which creates custom connector within the given target project.
- Role Permissions Connectors Platform Service Agent ( roles/ connectors.serviceAgent ) Grants Connectors Platform service account to manage customer resources Warning: Do not grant service agent roles to any principals except service agents . connectors.actions. connectors.actions.execute connectors.actions.list connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors.connections.list connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. get connectors. customConnectorVersions. list connectors. customConnectors. get connectors. customConnectors. list connectors. endpointAttachments. get connectors. endpointAttachments. list connectors.entities.get connectors.entityTypes.list connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones.get connectors.managedZones.list connectors.providers. connectors.providers.get connectors.providers.list connectors.runtimeconfig.get iam. serviceAccounts. getAccessToken iam. serviceAccounts. getOpenIdToken iam. serviceAccounts. implicitDelegation monitoring. metricDescriptors. create monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring.timeSeries.create For more information about predefined roles, see Roles and permissions .
- This role grants Read-only access to Event Subscription resources. connectors. eventSubscriptions. get connectors. eventSubscriptions. list Connector Invoker ( roles/ connectors.invoker ) Full Access to invoke all operations on Connections. connectors.actions. connectors.actions.execute connectors.actions.list connectors. connections. executeSqlQuery connectors.entities. connectors.entities.create connectors.entities.delete connectors. entities. deleteEntitiesWithConditions connectors.entities.get connectors.entities.list connectors.entities.update connectors. entities. updateEntitiesWithConditions connectors.entityTypes.list Connector Event Listener ( roles/ connectors.listener ) Full Access to listen events by connections. connectors. connections. listenEvent Connectors Managed Zone Admin ( roles/ connectors.managedZoneAdmin ) Managed Zone is a global resource which creates Cloud DNS Peering Zone with the given target project.
- This role grants Admin access to Custom Connector resources connectors. customConnectorVersions. connectors. customConnectorVersions. create connectors. customConnectorVersions. delete connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectorVersions. setIamPolicy connectors. customConnectorVersions. update connectors.customConnectors. connectors. customConnectors. create connectors. customConnectors. delete connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. customConnectors. setIamPolicy connectors. customConnectors. update connectors.locations. connectors.locations.get connectors.locations.list Custom Connector Viewer ( roles/ connectors.customConnectorViewer ) Custom Connector is a global resource which creates custom connector within the given target project.

### Apigee API hub \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure)
- Source ID: `site-docs-root-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- System limitations The Apigee API hub connector can process a maximum of 20 transactions per second, per node , and throttles any transactions beyond this limit.
- Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) To understand how to enable services, see Enabling services .
- To create a connection, do the following: In the Cloud console , go to the Integration Connectors > Connections page and then select or create a Google Cloud project.
- Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .

