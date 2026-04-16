---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.222Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Integration Connectors rate limiting"
feature_slug: "integration-connectors-rate-limiting"
latest_feature_date: "2023-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure"
keywords:
  - "integration"
  - "connectors"
  - "rate"
  - "limiting"
  - "supports"
  - "for"
  - "connection"
  - "traffic"
---

# Integration Connectors rate limiting

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Integration Connectors supports rate limiting for connection traffic.

## Extended Definition

Integration Connectors supports rate limiting for connection traffic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)

## Supporting Pages

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- See also the Perform CRUD operations on a MySQL database tutorial that shows how to create a MySQL connection and use it in an integration to perform read and write operations.
- Use the Cloud SQL for PostgreSQL connection in an integration After you create the connection, it becomes available in both Apigee Integration and Application Integration.
- To create a connection, do the following: In the Cloud console , go to the Integration Connectors > Connections page and then select or create a Google Cloud project.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- Also, see the Perform CRUD operations on a MySQL database tutorial that shows how to create a MySQL connection, and use the connection in an integration to perform read and write operations.
- To create a connection, do the following: In the Cloud console , go to the Integration Connectors > Connections page and then select or create a Google Cloud project.
- Use the Cloud SQL for MySQL connection in an integration After you create the connection, it becomes available in both Apigee Integration and Application Integration.

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SSL - Certificate connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-conn Service Account NAME-compute@developer.gserviceaccount.com Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 SSL Configuration Enable SSL True Trust Store Private Custom Trust Store A full PEM Certificate (-----BEGIN CERTIFICATE----- MIIChTCCAe4CAQAwDQYJKoZIhv......Qw== -----END CERTIFICATE-----) Secret version 1 Host Address xx.1HOST NAME.cloud.couchbase.com:18xxx Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Analytics Couchbase connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-Analytics-conn Service Account NAME-compute@developer.gserviceaccount.com Analytics Port 18095 Couchbase Service Analytics Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 Host Address xx.1HOST NAME.cloud.couchbase.com:18095 Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- Only takes effect when connecting to Couchbase v7+ and GenerateSchemaFiles is set to OnCreate. use transactions STRING False Specifies whether to use N1QL transactions when executing queries. validate jsonparameters BOOLEAN False Allows the provider to validate that string parameters are valid JSON before sending the query to Couchbase. proxy enabled BOOLEAN False Select this checkbox to configure a proxy server for the connection. proxy auth scheme ENUM False The authentication type to use to authenticate to the ProxyServer proxy.
- To create a connection, do the following: In the Cloud console , go to the Integration Connectors > Connections page and then select or create a Google Cloud project.

### IBM Db2 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- Source ID: `site-docs-root-2`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
- To create a connection, do the following: In the Cloud console , go to the Integration Connectors > Connections page and then select or create a Google Cloud project.
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- It means that if you have many data sources, you must create a separate connection for each data source.

