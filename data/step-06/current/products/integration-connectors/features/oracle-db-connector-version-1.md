---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.214Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Oracle DB connector version 1"
feature_slug: "oracle-db-connector-version-1"
latest_feature_date: "2024-02-19"
deprecation_date: "2024-04-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure"
keywords:
  - "oracle"
  - "db"
  - "connector"
  - "version"
  - "of"
  - "the"
  - "is"
  - "deprecated"
---

# Oracle DB connector version 1

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Version 1 of the Oracle DB connector is deprecated and support ends on 2024-04-20; deprecated on 2024-04-20.

## Extended Definition

Version 1 of the Oracle DB connector is deprecated and support ends on 2024-04-20; deprecated on 2024-04-20.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure)

## Supporting Pages

### Apache CouchDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Basic authentication connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-vm-connection Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views Yes Flexible Schema Yes Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address http://198.51.100.0 Username USERNAME Password PASSWORD Secret version 1 Proxy connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-proxy-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views No Flexible Schema No Proxy use proxy Proxy Auth Scheme Digest Proxy User PROXY USER Proxy Password PROXY PASSWORD Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address http://198.51.100.0 Username USERNAME Password PASSWORD Secret version 1 SSL connection (insecure) connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-ssl-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views No Flexible Schema No Minimum number of nodes 2 Maximum number of nodes 50 Trust store (choose the trust model) Insecure Connection Destination Type(Server) Host address Host address http://198.51.100.0 Username USERNAME Password PASSWORD Secret version 1 SSL connection (private) connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-proxy-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views No Flexible Schema No Minimum number of nodes 2 Maximum number of nodes 50 Trust store (choose the trust model) Private Custom Trust store Self-signed certificate.
- Secret Version 1 Destination Type(Server) Host address Host address https://198.51.100.0 Username USERNAME Password PASSWORD Secret version 1 JWT Authentication connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-vm-jwt-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views No Flexible Schema No Proxy No Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address http://203.0.113.0 JWT Subject admin JWT Algorithm HS256 JWT Key Type Symmetric JWT Key JWT KEY Secret version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- System limitations The Apache CouchDB connector can process a maximum of 5 transactions per second, per node , and throttles any transactions beyond this limit.
- In the Connection Details section, complete the following: Connector : Select Apache CouchDB from the drop down list of available Connectors.

### CockroachDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Port 26257 Username User name Password password Secret version 1 CockroachDB - PSC connection type Field name Details Location us-central1 Connector CockroachDB Connector version 1 Connection Name cockroach-db-cloud-conn-psc Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@serviceaccount SSL Yes SSLServerCert gcp-bcone-crdb-hosted-node-crt SecretVersion 1 Database bank Allow Prepared Statement No Fetch Result Set Metadata No Verbosity level 5 Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address 192.0.2.0/24 (this should be the endpoint attachment created based on the server ip hosting the cockroach db instance) Port 26257 Username User name Password password Secret version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- CockroachDB - Basic authentication connection type Field name Details Location us-central1 Connector CockroachDB Connector version 1 Connection Name cockroach-db-cloud-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@serviceaccount SSL Yes SSLServerCert cockroach-db-ssl-cert SecretVersion 1 Database TestGCP Allow Prepared Statement Yes Fetch Result Set Metadata Yes Verbosity level 5 Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address googlecloud-bcone-cluster-13792.5xj.cockroachlabs.cloud.
- In the Data Mapper section of the Data Mapping task, click Open Data Mapping Editor and then enter a value similar to the following in the Input Value field and choose the EntityId/ConnectorInputPayload as Local variable. { "id": 10.0, "data": "01020000000500000070CE88D2DE3453C075029A081B164540984C158C4AEA52C0DC68006F81B4444009F9A067B36252C02DB29DEFA7864440FA7E6ABC747B52C0D122DBF97EDA444070CE88D2DE3453C075029A081B164548" } This example will create the SpatialData Records.
- For more information about how to create a serverless cluster and utilise all the parameters of the created application, see Creating a CockroachDB Serverless cluster on Cockroachlabs For information about how to create a self signed certificate , see Cockroach cert Configure the connector A connection is specific to a data source.

### IBM Db2 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Connection Details section, complete the following: Connector : Select IBM DB2 from the drop down list of available Connectors.
- Connector version : Select the Connector version from the drop down list of available versions.
- Supported versions The minimum supported version for this connector is IBM Db2 version 8.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "$1" : 1.0 , "$2" : 5.0 } If the action execution is successful, the connector task's connectorOutputPayload field will have a value similar to the following: [{ "bignum" : 5.0 }] Entity operation examples Example - List records of an entity This example lists the records of the Users entity.

### AlloyDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Connection Details section, complete the following: Connector : Select AlloyDB from the drop down list of available Connectors.
- Connector version : Select the Connector version from the drop down list of available versions.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description database STRING True The name of the AlloyDB database. browse partitions BOOLEAN False By default, the provider exposes the super table and its partitions by metadata.
- The following diagram shows a sample setup of AlloyDB for public connectivity: Note: If you want to establish the public connection with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.

