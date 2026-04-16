---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.192Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "MCP connector"
feature_slug: "mcp-connector"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions"
  - "https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector"
keywords:
  - "mcp"
  - "connector"
  - "the"
  - "enables"
  - "secure"
  - "exchange"
  - "and"
  - "operations"
---

# MCP connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The MCP connector enables secure data exchange and operations in business applications.

## Extended Definition

The MCP connector enables secure data exchange and operations in business applications.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector)

## Supporting Pages

### Apache Cassandra \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- Apache Cassandra The Apache Cassandra connector lets you perform insert, delete, update, and read operations on a Cassandra database .
- Note: You can view the entities, operations, and actions of a connector in the Connectors task .
- PSC connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-psc Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database DATABASE NAME Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 SSL Configuration No Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 SSL connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database testgcp Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) Yes Choose Trust Model (under Trust Store) Private Custom Trust Store CUSTOM TRUST STORE Secret version 1 Client Certificate (under Key Store) CLIENT CERT Secret version 1 Client Private Key (under Key Store) CLIENT PRIVATE KEY Secret version 1 Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 Multinode connectivity type Field name Details Location europe-west1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-multinode1 Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) No Destination Type Host address Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 To use a multinode connection type, SSL must be disabled in the Cassandra instance and you must use the username and password to authenticate.

### Dataverse \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { FromId : "etywe325632io100" , FromTable : "Customers" , "NavigationProperty" : "asyncoperations" } Entity operation examples Example - List all the Custom Table Records This example lists all the Records in the User defined Table.
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- Dataverse The Dataverse connector lets you perform insert, delete, update, and read operations on Custom Tables.
- Note: You can view the entities, operations, and actions of a connector in the Connectors task .

### "IAM roles and permissions for Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all the predefined IAM roles for Integration Connectors: Role Permissions Connector Admin ( roles/ connectors.admin ) Full access to all resources of Connectors Service. connectors.actions. connectors.actions.execute connectors.actions.list connectors.connections.create connectors.connections.delete connectors. connections. executeSqlQuery connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors. connections. setIamPolicy connectors.connections.update connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. connectors. customConnectorVersions. create connectors. customConnectorVersions. delete connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectorVersions. setIamPolicy connectors. customConnectorVersions. update connectors.customConnectors. connectors. customConnectors. create connectors. customConnectors. delete connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. customConnectors. setIamPolicy connectors. customConnectors. update connectors. endpointAttachments. connectors. endpointAttachments. create connectors. endpointAttachments. delete connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. endpointAttachments. setIamPolicy connectors. endpointAttachments. update connectors.entities. connectors.entities.create connectors.entities.delete connectors. entities. deleteEntitiesWithConditions connectors.entities.get connectors.entities.list connectors.entities.update connectors. entities. updateEntitiesWithConditions connectors.entityTypes.list connectors. eventSubscriptions. connectors. eventSubscriptions. create connectors. eventSubscriptions. delete connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors. eventSubscriptions. update connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones. connectors.managedZones.create connectors.managedZones.delete connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors. managedZones. setIamPolicy connectors.managedZones.update connectors.operations. connectors.operations.cancel connectors.operations.delete connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors.regionalSettings. connectors. regionalSettings. get connectors. regionalSettings. update connectors.runtimeconfig.get connectors. schemaMetadata. refresh connectors.settings. connectors.settings.get connectors.settings.update connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list secretmanager. secrets. getIamPolicy Connectors Viewer ( roles/ connectors.viewer ) Read-only access to Connectors all resources. connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors. regionalSettings. get connectors.runtimeconfig.get connectors.settings.get connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list Custom Connectors Admin ( roles/ connectors.customConnectorAdmin ) Custom Connector is a global resource which creates custom connector within the given target project.
- This role grants Read-only access to Event Subscription resources. connectors. eventSubscriptions. get connectors. eventSubscriptions. list Connector Invoker ( roles/ connectors.invoker ) Full Access to invoke all operations on Connections. connectors.actions. connectors.actions.execute connectors.actions.list connectors. connections. executeSqlQuery connectors.entities. connectors.entities.create connectors.entities.delete connectors. entities. deleteEntitiesWithConditions connectors.entities.get connectors.entities.list connectors.entities.update connectors. entities. updateEntitiesWithConditions connectors.entityTypes.list Connector Event Listener ( roles/ connectors.listener ) Full Access to listen events by connections. connectors. connections. listenEvent Connectors Managed Zone Admin ( roles/ connectors.managedZoneAdmin ) Managed Zone is a global resource which creates Cloud DNS Peering Zone with the given target project.
- Role Permissions Connectors Platform Service Agent ( roles/ connectors.serviceAgent ) Grants Connectors Platform service account to manage customer resources Warning: Do not grant service agent roles to any principals except service agents . connectors.actions. connectors.actions.execute connectors.actions.list connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors.connections.list connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. get connectors. customConnectorVersions. list connectors. customConnectors. get connectors. customConnectors. list connectors. endpointAttachments. get connectors. endpointAttachments. list connectors.entities.get connectors.entityTypes.list connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones.get connectors.managedZones.list connectors.providers. connectors.providers.get connectors.providers.list connectors.runtimeconfig.get iam. serviceAccounts. getAccessToken iam. serviceAccounts. getOpenIdToken iam. serviceAccounts. implicitDelegation monitoring. metricDescriptors. create monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring.timeSeries.create For more information about predefined roles, see Roles and permissions .
- This role grants Admin access to Custom Connector resources connectors. customConnectorVersions. connectors. customConnectorVersions. create connectors. customConnectorVersions. delete connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectorVersions. setIamPolicy connectors. customConnectorVersions. update connectors.customConnectors. connectors. customConnectors. create connectors. customConnectors. delete connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. customConnectors. setIamPolicy connectors. customConnectors. update connectors.locations. connectors.locations.get connectors.locations.list Custom Connector Viewer ( roles/ connectors.customConnectorViewer ) Custom Connector is a global resource which creates custom connector within the given target project.

### "Perform CRUD operations on a MySQL database \_|\_ Integration Connectors\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- In Response Parameters , under Connector output payload , the following output is displayed: [ { "employee id": 1.0, "employee first name": "Peter", "employee last name": "Dilliard", "employee emailID": "test-01@test.com" }, { "employee id": 2.0, "employee first name": "Meaghan", "employee last name": "Webb", "employee emailID": "test-02@test.com" } ] Perform other operations on your MySQL database table When you configure a Connectors task in your integration, you can select any one of the following operations: List Get Create Update Delete You've already used the List operation to view all the rows in the employee table.
- To complete this tutorial, perform the following tasks: Set up a database and table in your MySQL server Create a MySQL connection Configure an Integration to use the MySQL connection Test the Integration Perform other operations on your MySQL database table Before you begin Ensure that you have access to integrations.
- Add and configure a Connectors task Perform the following steps to configure a Connectors task to list all the entities in the employee table: Select +Add a task/trigger > Tasks in the integration editor to display the list of available tasks.
- In the following sections of this tutorial, you'll use the Get, Create, Update, and Delete operations to add, modify or remove rows from the employee table.

