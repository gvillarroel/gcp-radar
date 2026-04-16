---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.224Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Apache Kafka connector PublishMessage action"
feature_slug: "apache-kafka-connector-publishmessage-action"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure"
keywords:
  - "apache"
  - "kafka"
  - "connector"
  - "publishmessage"
  - "action"
  - "the"
  - "provides"
  - "that"
---

# Apache Kafka connector PublishMessage action

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The Apache Kafka connector provides a PublishMessage action that can publish messages to a Kafka topic and validate them against the schema registry.

## Extended Definition

The Apache Kafka connector provides a PublishMessage action that can publish messages to a Kafka topic and validate them against the schema registry.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)

## Supporting Pages

### Apache Kafka \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- Source ID: `site-docs-root-2`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A sample response of the PublishMessage action is as follows: {Success: true, PartitionWritten: 1, OffsetWritten: 22301, KeyWritten: "dGVzdA==", TimestampWritten: 1690806748} Configuration for Confluent Cloud Configuration for the Confluent Cloud differs slightly from the previously documented steps for Apache Kafka.
- System limitations The Apache Kafka connector can process a maximum of 50 transactions per second, per node , and throttles any transactions beyond this limit.
- Before you begin Before using the Apache Kafka connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- Supported versions The Apache Kafka connector leverages the native client libraries to establish a connection to a given Kafka cluster, and the connector works with client version 3.3.1.

### Apache Cassandra \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before using the Apache Cassandra connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- System limitations The Apache Cassandra connector can process 65 transactions per second, per node , and throttles any transactions beyond this limit.
- Action: An action is a first class function that is made available to the integration through the connector interface.
- However, it is possible that a connector doesn't support any action, in which case the Actions list will be empty.

### Apache CouchDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecouchdb/configure)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Secret Version 1 Destination Type(Server) Host address Host address https://198.51.100.0 Username USERNAME Password PASSWORD Secret version 1 JWT Authentication connection type Field name Details Location us-central1 Connector Apache CouchDB Connector version 1 Connection Name couchdb-vm-jwt-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com List Views No Flexible Schema No Proxy No Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address http://203.0.113.0 JWT Subject admin JWT Algorithm HS256 JWT Key Type Symmetric JWT Key JWT KEY Secret version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- System limitations The Apache CouchDB connector can process a maximum of 5 transactions per second, per node , and throttles any transactions beyond this limit.
- Before you begin Before using the Apache CouchDB connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- Action: An action is a first class function that is made available to the integration through the connector interface.

### "Cloud SQL for SQL Server \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "ID": 3 } If the action is successful, the connector task's connectorOutputPayload response parameter will have a value similar to the following: [{ "ID": 3, "Name": "Charlie", "City": "Paris", "SALARY": 6500.0, "Department": "IT" }] Entity operation examples This section provides examples of entity operations available in this connector.
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This section provides actions available in this connector.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Supported versions SQL Server versions: 2008, 2012, 2014, 2016, 2017, 2019, and 2022 Before you begin Before using the Cloud SQL for SQL Server connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.

