---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.206Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Custom connector specification export and import"
feature_slug: "custom-connector-specification-export-and-import"
latest_feature_date: "2024-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/reference/rest"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring"
keywords:
  - "custom"
  - "connector"
  - "specification"
  - "export"
  - "and"
  - "import"
  - "connectors"
  - "can"
---

# Custom connector specification export and import

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Custom connectors can be shared across Google Cloud projects by exporting and importing the connector specification.

## Extended Definition

Custom connectors can be shared across Google Cloud projects by exporting and importing the connector specification.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring](https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring)

## Supporting Pages

### Apache Cassandra \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You can view the entities, operations, and actions of a connector in the Connectors task .
- PSC connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-psc Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database DATABASE NAME Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 SSL Configuration No Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 SSL connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database testgcp Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) Yes Choose Trust Model (under Trust Store) Private Custom Trust Store CUSTOM TRUST STORE Secret version 1 Client Certificate (under Key Store) CLIENT CERT Secret version 1 Client Private Key (under Key Store) CLIENT PRIVATE KEY Secret version 1 Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 Multinode connectivity type Field name Details Location europe-west1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-multinode1 Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) No Destination Type Host address Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 To use a multinode connection type, SSL must be disabled in the Cassandra instance and you must use the username and password to authenticate.
- Multinode with SSL connection type Field name Details Location europe-west1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-multinode1 Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com/td> Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) Yes Choose Trust Model (under Trust Store) Private Custom Trust Store CUSTOM TRUST STORE Secret version 1 Client Certificate (under Key Store) CLIENT CERT Secret version 1 Client Private Key (under Key Store) CLIENT PRIVATE KEY Secret version 1 Destination Type Host address Host 192.0.2.1 Port PORT Host 192.0.2.2 Port PORT Host 3 192.0.2.3 Port PORT Username USERNAME Password PASSWORD Secret version 1 For information about configuring SSL for Apache Cassandra, see Setting up a Cassandra cluster with SSL For information about configuring Cassandra on a single node, see Installing Cassandra or Installing Apache Cassandra on CentOS 7 .
- Connection configuration samples Basic authentication connection type Fieldname Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (SSL Configuration) No Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 If SSL is disabled in the Cassandra instance, you cannot use basic authentication with username and password.

### Connectors API \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions Methods create POST /v1/{parent=projects/ /locations/global/customConnectors/ }/customConnectorVersions Creates a new CustomConnectorVersion in a given project and location. get GET /v1/{name=projects/ /locations/global/customConnectors/ /customConnectorVersions/ } Gets details of a single CustomConnectorVersion. list GET /v1/{parent=projects/ /locations/global/customConnectors/ }/customConnectorVersions List CustomConnectorVersions in a given project REST Resource: v1.projects.locations.global.managedZones Methods create POST /v1/{parent=projects/ /locations/global}/managedZones Creates a new ManagedZone in a given project and location. delete DELETE /v1/{name=projects/ /locations/global/managedZones/ } Deletes a single ManagedZone. get GET /v1/{name=projects/ /locations/global/managedZones/ } Gets details of a single ManagedZone. list GET /v1/{parent=projects/ /locations/global}/managedZones List ManagedZones in a given project patch PATCH /v1/{managedZone.name=projects/ /locations/global/managedZones/ } Updates the parameters of a single ManagedZone.
- REST Resource: v1.projects.locations.global.customConnectors Methods create POST /v1/{parent=projects/ /locations/global}/customConnectors Creates a new CustomConnector in a given project and location. delete DELETE /v1/{name=projects/ /locations/global/customConnectors/ } Deletes a single CustomConnector. get GET /v1/{name=projects/ /locations/global/customConnectors/ } Gets details of a single CustomConnector. list GET /v1/{parent=projects/ /locations/global}/customConnectors List CustomConnectorVersions in a given project patch PATCH /v1/{customConnector.name=projects/ /locations/global/customConnectors/ } Updates the parameters of a CustomConnector.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.connections REST Resource: v1.projects.locations.connections.connectionSchemaMetadata REST Resource: v1.projects.locations.connections.eventSubscriptions REST Resource: v1.projects.locations.connections.runtimeActionSchemas REST Resource: v1.projects.locations.connections.runtimeEntitySchemas REST Resource: v1.projects.locations.customConnectors REST Resource: v1.projects.locations.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.endpointAttachments REST Resource: v1.projects.locations.global REST Resource: v1.projects.locations.global.customConnectors REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.global.managedZones REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.providers REST Resource: v1.projects.locations.providers.connectors REST Resource: v1.projects.locations.providers.connectors.versions REST Resource: v1.projects.locations.providers.connectors.versions.eventtypes Service: connectors.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://connectors.googleapis.com REST Resource: v1.projects.locations Methods get GET /v1/{name=projects/ /locations/ } Gets information about a location. getRegionalSettings GET /v1/{name=projects/ /locations/ /regionalSettings} GetRegionalSettings gets settings of a region. getRuntimeConfig GET /v1/{name=projects/ /locations/ /runtimeConfig} Gets the runtimeConfig of a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service. updateRegionalSettings PATCH /v1/{regionalSettings.name=projects/ /locations/ /regionalSettings} Update the settings of a region.

### Apigee API hub \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) To understand how to enable services, see Enabling services .
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To create a connection, do the following: In the Cloud console , go to the Integration Connectors > Connections page and then select or create a Google Cloud project.
- System limitations The Apigee API hub connector can process a maximum of 20 transactions per second, per node , and throttles any transactions beyond this limit.

### Monitor connectors \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring](https://docs.cloud.google.com/integration-connectors/docs/cloud-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can visualize your Integration Connectors metrics and data using the following Cloud Monitoring tools: Custom dashboards Metrics Explorer Before you begin Before you use Cloud Monitoring, enable the Cloud Monitoring API.
- Example - Monitor request count The following PromQL query shows how to get and aggregate request count data for active connections: sum by ( location , connection , provider ) ( sum over time ( { "connectors.googleapis.com/connection/request count" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) ) and on ( location , connection , provider ) avg over time ( { "connectors.googleapis.com/connection/state" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) > 0 Example - Monitor active nodes The following PromQL query shows how to get and aggregate active node count data for all your connections: sum by ( location , connection , provider ) ( sum over time ( { "connectors.googleapis.com/connection/nodes" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) ) and on ( location , connection , provider ) avg over time ( { "connectors.googleapis.com/connection/state" , monitored resource = "connectors.googleapis.com/Connection" } [ 1 m ]) > 0 Example - Monitor connection status over a time period The following PromQL query shows how to get the status trend over a time period for all your connections: count by ( status , connection ) ( { "connectors.googleapis.com/connection/connection status" , monitored resource = "connectors.googleapis.com/Connection" } == 1 ) If you want to know the status of connections at the current point in time, use the Metrics Explorer in the Google Cloud console instead of a PromQL query.
- Access metrics using custom dashboards To create custom monitoring dashboards for your Integration Connectors resources in your Google Cloud project, do the following: In the Google Cloud console, go to the Cloud Monitoring > Dashboard Overview page: Go to Dashboard Overview page Click Create dashboard .
- To create a chart using the Integration Connectors resource metrics, do the following: In the Google Cloud console, go to the Cloud Monitoring > Metrics explorer page: Go to Metrics explorer page In the Select a metric pane, expand the Metric menu and select Connectors as the Active resource .

