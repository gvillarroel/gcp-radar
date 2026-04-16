---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.214Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Custom SQL editor"
feature_slug: "custom-sql-editor"
latest_feature_date: "2024-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
keywords:
  - "custom"
  - "sql"
  - "editor"
  - "the"
  - "lets"
  - "you"
  - "run"
  - "queries"
---

# Custom SQL editor

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The custom SQL editor lets you run custom queries across supported connectors in the user interface.

## Extended Definition

The custom SQL editor lets you run custom queries across supported connectors in the user interface.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)

## Supporting Pages

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Cloud SQL for PostgreSQL The PostgreSQL connector type lets you insert, read, update, and delete rows in a PostgreSQL database.
- To execute custom SQL queries, the connector provides the Execute custom query action.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description project id STRING True Project ID of the project that contains the Cloud SQL instance. e.g. myproject. database region STRING True The cloud region for the instance. e.g. us-central1. instance id STRING True Database instance ID.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Cloud SQL for MySQL The MySQL connector lets you insert, read, update and delete rows in a MySQL database.
- To execute custom SQL queries, the connector provides the Execute custom query action.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description project id STRING True Project ID of the project that contains the Cloud SQL instance. e.g. myproject. database region STRING True The cloud region for the instance. e.g. us-central1. instance id STRING True Database instance ID.

### CockroachDB \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cockroachdb/configure)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Running this example, returns a response similar to the following in the Connector task's connectorOutputPayload output variable: { } Create connections using Terraform You can use the Terraform resource to create a new connection.
- To configure the node values, do the following: If you are a pay-as-you-go customer, configure the minimum and maximum node value in the edit connection page.
- You can use a question mark (?) in a SQL statement to represent a single parameter that must be specified in the query parameters list.
- If you've used question marks in your SQL query, you must add the parameter by clicking + Add Parameter Name for each question mark.

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- To execute custom SQL queries, the connector provides the Execute custom query action.
- Supported values are: N1QL, Analytics create table ram quota STRING False The default RAM quota, in megabytes, to use when inserting buckets via the CREATE TABLE syntax. dataverse separator STRING False The character or characters used to denote Analytics dataverses and scopes/collections. flavor separator STRING False The character or characters used to denote flavors. n1 qlport STRING False The port for connecting to the Couchbase N1QL Endpoint. periods separator STRING False The character or characters used to denote hierarchy. query execution timeout STRING False This sets the server-side timeout for the query, which governs how long Couchbase will execute the query before returning a timeout error. strict comparison STRING False Adjusts how precisely to translate filters on SQL input queries into Couchbase queries.
- Note: The results of all the actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- To configure the node values, do the following: If you are a pay-as-you-go customer, configure the minimum and maximum node value in the edit connection page.

