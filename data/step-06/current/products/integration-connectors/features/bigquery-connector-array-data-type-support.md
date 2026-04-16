---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.202Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "BigQuery connector array data type support"
feature_slug: "bigquery-connector-array-data-type-support"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure"
keywords:
  - "connector"
  - "array"
  - "type"
  - "the"
  - "supports"
---

# BigQuery connector array data type support

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The BigQuery connector supports the Array data type.

## Extended Definition

The BigQuery connector supports the Array data type.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)

## Supporting Pages

### CockroachDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Data Mapper section of the Data Mapping task, click Open Data Mapping Editor and then enter a value similar to the following in the Input Value field and choose the EntityId/ConnectorInputPayload as Local variable. { "col int": 8.0, "col date": "2016-03-26", "col inet": "190.0.0.0", "col collate": "Cruz", "col string": "Charlie", "col timestamp": "1992-10-05 12:12:12", "col float": 12.12, "col decimal": 10.1, "col json": "{\"type\": \"account creation\", \"username\": \"harvestboy93\"}", "col bool": true, "col interval": "1 year 2 mons 3 days 04:05:06", "col array": "{sky,road,car}", "col uuid": "63616665-6630-3064-6465-616462656562", "col time": "05:41:39", "col bytes": "abc", "col bit": "1", "col name": "Charlie", "col character": "A", "col tsvector": "ts", "col tsquery": "normal", "col oid": "11", "col bytea": "01100001" } If the integration is successful, the Cockroach Datatypes task's connectorOutputPayload response parameter will have a value similar to the following: { "col int": 8.0, "col date": "2016-03-26", "col inet": "190.0.0.0", "col collate": "Cruz", "col string": "Charlie", "col timestamp": "1992-10-05 12:12:12", "col float": 12.12, "col decimal": 10.1, "col json": "{\"type\": \"account creation\", \"username\": \"harvestboy93\"}", "col bool": true, "col interval": "1 year 2 mons 3 days 04:05:06", "col array": "{sky,road,car}", "col uuid": "63616665-6630-3064-6465-616462656562", "col time": "05:41:39", "col bytes": "abc", "col bit": "1", "col name": "Charlie", "col character": "A", "col tsvector": "ts", "col tsquery": "normal", "col oid": "11", "col bytea": "01100001" } Example - Create an Entity LANGUAGES record In the Configure connector task dialog, click Entities .
- Port 26257 Username User name Password password Secret version 1 CockroachDB - PSC connection type Field name Details Location us-central1 Connector CockroachDB Connector version 1 Connection Name cockroach-db-cloud-conn-psc Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@serviceaccount SSL Yes SSLServerCert gcp-bcone-crdb-hosted-node-crt SecretVersion 1 Database bank Allow Prepared Statement No Fetch Result Set Metadata No Verbosity level 5 Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address 192.0.2.0/24 (this should be the endpoint attachment created based on the server ip hosting the cockroach db instance) Port 26257 Username User name Password password Secret version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Data Mapper section of the Data Mapping task, click Open Data Mapping Editor and then enter a value similar to the following in the Input Value field and choose the EntityId/ConnectorInputPayload as Local variable. { "id": 100.0, "gender": "Male", "firstname": "Charlie", "lastname": "Cruz", "designation": "Tester", "dept": "IT" } If the integration is successful, the Employees task's connectorOutputPayload response parameter will have a value similar to the following: { "id": 100.0, "gender": "Male", "firstname": "Charlie", "lastname": "Cruz", "designation": "Tester", "dept": "IT" } Example - Create a Cockroach Datatypes record In the Configure connector task dialog, click Entities .
- CockroachDB - Basic authentication connection type Field name Details Location us-central1 Connector CockroachDB Connector version 1 Connection Name cockroach-db-cloud-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@serviceaccount SSL Yes SSLServerCert cockroach-db-ssl-cert SecretVersion 1 Database TestGCP Allow Prepared Statement Yes Fetch Result Set Metadata Yes Verbosity level 5 Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address googlecloud-bcone-cluster-13792.5xj.cockroachlabs.cloud.

### BigQuery \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the supported data types for this connector: ARRAY BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Known limitations The BigQuery connector doesn't support the primary key in a BigQuery table.
- The following array types are supported: Varchar, Int64, Float64, Long, Double, Bool, and Timestamp.
- When you configure the connector task , in the type of action you want to perform, select Actions .
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description project id STRING True The ID of the project containing BigQuery dataset. e.g. myproject. dataset id STRING False Dataset ID of the BigQuery dataset without the project name. e.g. mydataset. proxy enabled BOOLEAN False Select this checkbox to configure a proxy server for the connection. proxy auth scheme ENUM False The authentication type to use to authenticate to the ProxyServer proxy.

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- SSL - Certificate connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-conn Service Account NAME-compute@developer.gserviceaccount.com Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 SSL Configuration Enable SSL True Trust Store Private Custom Trust Store A full PEM Certificate (-----BEGIN CERTIFICATE----- MIIChTCCAe4CAQAwDQYJKoZIhv......Qw== -----END CERTIFICATE-----) Secret version 1 Host Address xx.1HOST NAME.cloud.couchbase.com:18xxx Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Analytics Couchbase connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-Analytics-conn Service Account NAME-compute@developer.gserviceaccount.com Analytics Port 18095 Couchbase Service Analytics Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 Host Address xx.1HOST NAME.cloud.couchbase.com:18095 Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { } If the action is successful, the ListIndices task's connectorOutputPayload response parameter will have a value similar to the following: [{ "id" : "3d8a78cd2e302ac2" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : null , "scope id" : null , "keyspace id" : "CouchbaseTestBucket" , "index key" : "" , "condition" : null , "is primary" : "false" , "name" : "test" , "state" : "online" , "using" : "gsi" }, { "id" : "d6ce8c103b97a00d" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : "CouchbaseTestBucket" , "scope id" : "TestScope" , "keyspace id" : "CouchBaseDatatypes" , "index key" : "" , "condition" : null , "is primary" : "true" , "name" : "#primary" , "state" : "online" , "using" : "gsi" }, { "id" : "58c25aef49dd32b3" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : "CouchbaseTestBucket" , "scope id" : "TestScope" , "keyspace id" : "TestCollection" , "index key" : "" , "condition" : null , "is primary" : "false" , "name" : "SearchIndexTest 1" , "state" : "online" , "using" : "fts" }] Example - Manage indices This example deletes an index in the specified bucket.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Actions This connector supports execution of the following actions: User-defined stored procedures and functions.

### IBM Db2 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the data types supported by the IBM DB2 connector: DOUBLE LONGVARCHAR(n) TIME SMALLINT DECIMAL(p, s) INTEGER TIMESTAMP DATE FLOAT BLOB CHAR(n) VARCHAR(n) REAL VARBINARY BOOLEAN GRAPHIC VARGRAPHIC BIGINT Create connections using Terraform You can use the Terraform resource to create a new connection.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- When you configure the connector task , in the type of action you want to perform, select Actions .

