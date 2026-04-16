---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.201Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Openlegacy IBMi/AS/400 API connector"
feature_slug: "openlegacy-ibmi-as-400-api-connector"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/reference/rest"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure"
keywords:
  - "openlegacy"
  - "ibmi"
  - "as"
  - "400"
  - "api"
  - "connector"
  - "the"
  - "is"
---

# Openlegacy IBMi/AS/400 API connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The Openlegacy IBMi/AS/400 API connector is available in Google Cloud Marketplace.

## Extended Definition

The Openlegacy IBMi/AS/400 API connector is available in Google Cloud Marketplace.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)

## Supporting Pages

### Apigee API hub \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apigee_api_hub/configure)
- Source ID: `site-docs-root-2`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Known issues The Apigee API hub connector has configuration limits.
- Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) To understand how to enable services, see Enabling services .
- System limitations The Apigee API hub connector can process a maximum of 20 transactions per second, per node , and throttles any transactions beyond this limit.
- Apigee API hub The Apigee API hub connector lets you manage, discover, and govern APIs within your organization's portfolio.

### CockroachDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Data Mapper section of the Data Mapping task, click Open Data Mapping Editor and then enter a value similar to the following in the Input Value field and choose the EntityId/ConnectorInputPayload as Local variable. { "id": 10.0, "data": "01020000000500000070CE88D2DE3453C075029A081B164540984C158C4AEA52C0DC68006F81B4444009F9A067B36252C02DB29DEFA7864440FA7E6ABC747B52C0D122DBF97EDA444070CE88D2DE3453C075029A081B164548" } This example will create the SpatialData Records.
- If the integration is successful, the SpatialData task's connectorOutputPayload response parameter will have a value similar to the following: { "id": 10.0, "data": "01020000000500000070CE88D2DE3453C075029A081B164540984C158C4AEA52C0DC68006F81B4444009F9A067B36252C02DB29DEFA7864440FA7E6ABC747B52C0D122DBF97EDA444070CE88D2DE3453C075029A081B164548" } Example - Create an Accounts record In the Configure connector task dialog, click Entities .
- Running this example, returns a response similar to the following in the Connector task's connectorOutputPayload output variable: { "id": 1, "data": "01020000000500000070CE88D2DE3453C075029A081B164540984C158C4AEA52C0DC68006F81B4444009F9A067B36252C02DB29DEFA7864440FA7E6ABC747B52C0D122DBF97EDA444070CE88D2DE3453C075029A081B164543" } Example - Update a Accounts record In the Configure connector task dialog, click Entities .
- In the Data Mapper section of the Data Mapping task, click Open Data Mapping Editor and then enter a value similar to the following in the Input Value field and choose the EntityId/ConnectorInputPayload as Local variable. { "col int": 8.0, "col date": "2016-03-26", "col inet": "190.0.0.0", "col collate": "Cruz", "col string": "Charlie", "col timestamp": "1992-10-05 12:12:12", "col float": 12.12, "col decimal": 10.1, "col json": "{\"type\": \"account creation\", \"username\": \"harvestboy93\"}", "col bool": true, "col interval": "1 year 2 mons 3 days 04:05:06", "col array": "{sky,road,car}", "col uuid": "63616665-6630-3064-6465-616462656562", "col time": "05:41:39", "col bytes": "abc", "col bit": "1", "col name": "Charlie", "col character": "A", "col tsvector": "ts", "col tsquery": "normal", "col oid": "11", "col bytea": "01100001" } If the integration is successful, the Cockroach Datatypes task's connectorOutputPayload response parameter will have a value similar to the following: { "col int": 8.0, "col date": "2016-03-26", "col inet": "190.0.0.0", "col collate": "Cruz", "col string": "Charlie", "col timestamp": "1992-10-05 12:12:12", "col float": 12.12, "col decimal": 10.1, "col json": "{\"type\": \"account creation\", \"username\": \"harvestboy93\"}", "col bool": true, "col interval": "1 year 2 mons 3 days 04:05:06", "col array": "{sky,road,car}", "col uuid": "63616665-6630-3064-6465-616462656562", "col time": "05:41:39", "col bytes": "abc", "col bit": "1", "col name": "Charlie", "col character": "A", "col tsvector": "ts", "col tsquery": "normal", "col oid": "11", "col bytea": "01100001" } Example - Create an Entity LANGUAGES record In the Configure connector task dialog, click Entities .

### Connectors API \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.connections REST Resource: v1.projects.locations.connections.connectionSchemaMetadata REST Resource: v1.projects.locations.connections.eventSubscriptions REST Resource: v1.projects.locations.connections.runtimeActionSchemas REST Resource: v1.projects.locations.connections.runtimeEntitySchemas REST Resource: v1.projects.locations.customConnectors REST Resource: v1.projects.locations.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.endpointAttachments REST Resource: v1.projects.locations.global REST Resource: v1.projects.locations.global.customConnectors REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.global.managedZones REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.providers REST Resource: v1.projects.locations.providers.connectors REST Resource: v1.projects.locations.providers.connectors.versions REST Resource: v1.projects.locations.providers.connectors.versions.eventtypes Service: connectors.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://connectors.googleapis.com REST Resource: v1.projects.locations Methods get GET /v1/{name=projects/ /locations/ } Gets information about a location. getRegionalSettings GET /v1/{name=projects/ /locations/ /regionalSettings} GetRegionalSettings gets settings of a region. getRuntimeConfig GET /v1/{name=projects/ /locations/ /runtimeConfig} Gets the runtimeConfig of a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service. updateRegionalSettings PATCH /v1/{regionalSettings.name=projects/ /locations/ /regionalSettings} Update the settings of a region.
- This service provides the following discovery document: https://connectors.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.projects.locations.connections Methods create POST /v1/{parent=projects/ /locations/ }/connections Creates a new Connection in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /connections/ } Deletes a single Connection. get GET /v1/{name=projects/ /locations/ /connections/ } Gets details of a single Connection. getConnectionSchemaMetadata GET /v1/{name=projects/ /locations/ /connections/ /connectionSchemaMetadata} Gets schema metadata of a connection. getIamPolicy GET /v1/{resource=projects/ /locations/ /connections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/connections Lists Connections in a given project and location. patch PATCH /v1/{connection.name=projects/ /locations/ /connections/ } Updates the parameters of a single Connection. repairEventing POST /v1/{name=projects/ /locations/ /connections/ }:repairEventing RepaiEventing tries to repair eventing related event subscriptions. search GET /v1/{name=projects/ /locations/ /connections}:search Returns Top matching Connections for a given query. setIamPolicy POST /v1/{resource=projects/ /locations/ /connections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /connections/ }:testIamPermissions Returns permissions that a caller has on the specified resource.

### Apache Cassandra \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- PSC connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-psc Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database DATABASE NAME Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 SSL Configuration No Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 SSL connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database testgcp Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) Yes Choose Trust Model (under Trust Store) Private Custom Trust Store CUSTOM TRUST STORE Secret version 1 Client Certificate (under Key Store) CLIENT CERT Secret version 1 Client Private Key (under Key Store) CLIENT PRIVATE KEY Secret version 1 Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 Multinode connectivity type Field name Details Location europe-west1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-multinode1 Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) No Destination Type Host address Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 To use a multinode connection type, SSL must be disabled in the Cassandra instance and you must use the username and password to authenticate.
- Connection configuration samples Basic authentication connection type Fieldname Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (SSL Configuration) No Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 If SSL is disabled in the Cassandra instance, you cannot use basic authentication with username and password.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "employeeCode" : "5100" , "startDate" : "2010-01-01 00:00:00.0" , "country" : "US" } If the integration is successful, the connector task's connectorOutputPayload field will have the response of the create operation.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description keyspace STRING True Cassandra Keyspace Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .

