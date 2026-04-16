---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.201Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Custom connectors for Google Cloud Marketplace"
feature_slug: "custom-connectors-for-google-cloud-marketplace"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure"
keywords:
  - "custom"
  - "connectors"
  - "for"
  - "marketplace"
  - "you"
  - "can"
  - "build"
  - "and"
---

# Custom connectors for Google Cloud Marketplace

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

You can build and publish custom connectors for Google Cloud Marketplace.

## Extended Definition

You can build and publish custom connectors for Google Cloud Marketplace.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)

## Supporting Pages

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .
- Note: You can view the entities, operations, and actions of a connector in the Connectors task .
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .
- Note: You can view the entities, operations, and actions of a connector in the Connectors task .
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

### Apache Cassandra \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- Source ID: `site-docs-root-2`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description keyspace STRING True Cassandra Keyspace Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- Note: You can view the entities, operations, and actions of a connector in the Connectors task .
- PSC connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-psc Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database DATABASE NAME Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 SSL Configuration No Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 SSL connection type Field name Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database testgcp Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) Yes Choose Trust Model (under Trust Store) Private Custom Trust Store CUSTOM TRUST STORE Secret version 1 Client Certificate (under Key Store) CLIENT CERT Secret version 1 Client Private Key (under Key Store) CLIENT PRIVATE KEY Secret version 1 Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 Multinode connectivity type Field name Details Location europe-west1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn-multinode1 Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (under SSL Configuration) No Destination Type Host address Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 To use a multinode connection type, SSL must be disabled in the Cassandra instance and you must use the username and password to authenticate.

### "Cloud SQL for SQL Server \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to establish a public connection to your backend systems with additional security, you can consider configuring static outbound IP addresses for your connections , and then configure your firewall rules to allowlist only the specific static IP addresses.
- Get help from the Google Cloud community You can post your questions and discuss this connector in the Google Cloud community at Cloud Forums .
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- If the integration is successful, the connector task's connectorOutputPayload response parameter will have a value similar to the following: { "AGE": 41, "City": "Paris", "SALARY": 10000.0 } Create connections using Terraform You can use the Terraform resource to create a new connection.

