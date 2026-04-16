---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.228Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Custom connection node limits"
feature_slug: "custom-connection-node-limits"
latest_feature_date: "2023-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
keywords:
  - "custom"
  - "connection"
  - "node"
  - "limits"
  - "pay"
  - "as"
  - "you"
  - "go"
---

# Custom connection node limits

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Pay-as-you-go customers can customize the minimum and maximum number of nodes for a connection.

## Extended Definition

Pay-as-you-go customers can customize the minimum and maximum number of nodes for a connection.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)

## Supporting Pages

### Apache Cassandra \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure the node values, do the following: If you are a pay-as-you-go customer, configure the minimum and maximum node value in the edit connection page.
- Note: You can customize the connection node values only if you are a Pay-as-you-go customer.
- PSC connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-psc Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database DATABASE NAME Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 SSL Configuration No Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 SSL connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database testgcp Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) Yes Choose Trust Model (under Trust Store) Private Custom Trust Store CUSTOM TRUST STORE Secret version 1 Client Certificate (under Key Store) CLIENT CERT Secret version 1 Client Private Key (under Key Store) CLIENT PRIVATE KEY Secret version 1 Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 Multinode connectivity type Field name Details Location europe-west1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-multinode1 Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) No Destination Type Host address Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 To use a multinode connection type, SSL must be disabled in the Cassandra instance and you must use the username and password to authenticate.
- Multinode with SSL connection type Field name Details Location europe-west1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-multinode1 Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com/td> Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) Yes Choose Trust Model (under Trust Store) Private Custom Trust Store CUSTOM TRUST STORE Secret version 1 Client Certificate (under Key Store) CLIENT CERT Secret version 1 Client Private Key (under Key Store) CLIENT PRIVATE KEY Secret version 1 Destination Type Host address Host 192.0.2.1 Port PORT Host 192.0.2.2 Port PORT Host 3 192.0.2.3 Port PORT Username USERNAME Password PASSWORD Secret version 1 For information about configuring SSL for Apache Cassandra, see Setting up a Cassandra cluster with SSL For information about configuring Cassandra on a single node, see Installing Cassandra or Installing Apache Cassandra on CentOS 7 .

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure the node values, do the following: If you are a pay-as-you-go customer, configure the minimum and maximum node value in the edit connection page.
- Note: You can customize the connection node values only if you are a Pay-as-you-go customer.
- SSL - Certificate connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-conn Service Account NAME-compute@developer.gserviceaccount.com Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 SSL Configuration Enable SSL True Trust Store Private Custom Trust Store A full PEM Certificate (-----BEGIN CERTIFICATE----- MIIChTCCAe4CAQAwDQYJKoZIhv......Qw== -----END CERTIFICATE-----) Secret version 1 Host Address xx.1HOST NAME.cloud.couchbase.com:18xxx Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Analytics Couchbase connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-Analytics-conn Service Account NAME-compute@developer.gserviceaccount.com Analytics Port 18095 Couchbase Service Analytics Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 Host Address xx.1HOST NAME.cloud.couchbase.com:18095 Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description allow jsonparameters BOOLEAN False Allows raw JSON to be used in parameters when QueryPassthrough is enabled. analytics port STRING False The port for connecting to the Couchbase Analytics Endpoint. child separator STRING False The character or characters used to denote child tables. couchbase service ENUM False Determines the Couchbase service to connect to.

### Asana \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- Source ID: `site-docs-root-2`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You can customize the connection node values only if you are a Pay-as-you-go customer. (Optional) In the Advanced settings section, select the Use proxy checkbox to configure a proxy server for the connection and configure the following values: Proxy Auth Scheme : Select the authentication type to authenticate with the proxy server.
- To configure the node values, do the following: If you are a pay-as-you-go customer, configure the minimum and maximum node value in the edit connection page.
- If the integration is successful, the connector task's connectorOutputPayload field will have the response of the update operation. { "Id" : 1010 } Create connections using Terraform You can use the Terraform resource to create a new connection.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Name" : "Testing" , "ProjectId" : "1208019929422674" } If the integration is successful, your connector task's connectorOutputPayload field will have a value similar to the following: { "Id" : "10032" } Example - Update a task in an entity This example updates a task in the Tasks entity.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure the node values, do the following: If you are a pay-as-you-go customer, configure the minimum and maximum node value in the edit connection page.
- Note: You can customize the connection node values only if you are a Pay-as-you-go customer.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description project id STRING True Project ID of the project that contains the Cloud SQL instance. e.g. myproject. database region STRING True The cloud region for the instance. e.g. us-central1. instance id STRING True Database instance ID.
- Note: When you're using a service account from a different Google Cloud project than the one where your connection is configured, you might encounter a PERMISSION DENIED error with the message "Permission 'iam.serviceAccounts.getAccessToken' denied".

