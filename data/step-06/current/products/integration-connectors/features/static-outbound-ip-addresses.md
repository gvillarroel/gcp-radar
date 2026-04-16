---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.221Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Static outbound IP addresses"
feature_slug: "static-outbound-ip-addresses"
latest_feature_date: "2023-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure"
keywords:
  - "static"
  - "outbound"
  - "ip"
  - "addresses"
  - "connections"
  - "can"
  - "be"
  - "configured"
---

# Static outbound IP addresses

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Connections can be configured with static outbound IP addresses to help restrict backend access through firewall rules.

## Extended Definition

Connections can be configured with static outbound IP addresses to help restrict backend access through firewall rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)

## Supporting Pages

### Apache Kafka \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachekafka/configure)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- For connectors that support event subscription , the connection names cannot begin with the "goog" prefix. (Optional) Description: Enter a description for the connection. (Optional) Enable Cloud Logging: Select this checkbox to store all log data of the connection.
- System limitations The Apache Kafka connector can process a maximum of 50 transactions per second, per node , and throttles any transactions beyond this limit.
- Note: Connection names must meet the following criteria: Connection names can use letters, numbers, or hyphens.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- System limitations The Cloud SQL for PostgreSQL connector can process 9 transaction per second, per node , and throttles any transactions beyond this limit.
- If there are any updates to the schema, such updates won't be automatically reflected in your existing connections; you must manually refresh the schema.
- You can use a question mark (?) in a SQL statement to represent a single parameter that must be specified in the query parameters list.

### AlloyDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/alloydb/configure)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram shows a sample setup of AlloyDB for public connectivity: Note: If you want to establish the public connection with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- If there are any updates to the schema, such updates won't be automatically reflected in your existing connections; you must manually refresh the schema.
- System limitations The AlloyDB connector can process 10 transaction per second, per node , and throttles any transactions beyond this limit.
- Entity: An entity can be thought of as an object, or a collection of properties, in the connected application or service.

### CockroachDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- Port 26257 Username User name Password password Secret version 1 CockroachDB - PSC connection type Field name Details Location us-central1 Connector CockroachDB Connector version 1 Connection Name cockroach-db-cloud-conn-psc Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@serviceaccount SSL Yes SSLServerCert gcp-bcone-crdb-hosted-node-crt SecretVersion 1 Database bank Allow Prepared Statement No Fetch Result Set Metadata No Verbosity level 5 Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address 192.0.2.0/24 (this should be the endpoint attachment created based on the server ip hosting the cockroach db instance) Port 26257 Username User name Password password Secret version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description use ssl BOOLEAN False This field sets whether SSL is enabled. ssl server cert SECRET False This field sets whether SSL is enabled. database STRING True The name of the Cockroach database. allow prepared statement BOOLEAN False Allow the preparation of a query statement before its execution. fetch result set metadata BOOLEAN False This field sets whether the provider is getting detailed information about resultset columns from the server.
- Running this example, returns a response similar to the following in the Connector task's connectorOutputPayload output variable: { } Create connections using Terraform You can use the Terraform resource to create a new connection.

