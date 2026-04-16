---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.229Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Stored procedure execution"
feature_slug: "stored-procedure-execution"
latest_feature_date: "2023-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
keywords:
  - "stored"
  - "procedure"
  - "execution"
  - "connectors"
  - "can"
  - "execute"
  - "procedures"
---

# Stored procedure execution

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Connectors can execute stored procedures.

## Extended Definition

Connectors can execute stored procedures.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)

## Supporting Pages

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- If you have any stored procedures and functions in your backend, those are listed in the Actions column of the Configure connector task dialog.
- Supported values are: N1QL, Analytics create table ram quota STRING False The default RAM quota, in megabytes, to use when inserting buckets via the CREATE TABLE syntax. dataverse separator STRING False The character or characters used to denote Analytics dataverses and scopes/collections. flavor separator STRING False The character or characters used to denote flavors. n1 qlport STRING False The port for connecting to the Couchbase N1QL Endpoint. periods separator STRING False The character or characters used to denote hierarchy. query execution timeout STRING False This sets the server-side timeout for the query, which governs how long Couchbase will execute the query before returning a timeout error. strict comparison STRING False Adjusts how precisely to translate filters on SQL input queries into Couchbase queries.
- This can be set to a comma-separated list of values, where each value can be one of: date, number, boolean, or string. transaction durability STRING False Specifies how a document must be stored for a transaction to succeed.

### IBM Db2 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- If you have any stored procedures and functions in your backend, those are listed in the Actions column of the Configure connector task dialog.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "$1" : 1.0 , "$2" : 5.0 } If the action execution is successful, the connector task's connectorOutputPayload field will have a value similar to the following: [{ "bignum" : 5.0 }] Entity operation examples Example - List records of an entity This example lists the records of the Users entity.
- In the Task Input section of the Connectors task, you can set the filterClause as per your requirement.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- If you have any stored procedures and functions in your backend, those are listed in the Actions column of the Configure connector task dialog.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "$1" : 1.0 , "$2" : 5.0 } If the action execution is successful, the connector task's connectorOutputPayload field will have a value similar to the following: [{ "bignum" : 5.0 }] Entity operation examples Example - List records of an entity This example lists the records of the Users entity.
- In the Task Input section of the Connectors task, you can set the filterClause as per your requirement.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- If you have any stored procedures and functions in your backend, those are listed in the Actions column of the Configure connector task dialog.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "$1" : 1.0 , "$2" : 5.0 } If the action execution is successful, the connector task's connectorOutputPayload field will have a value similar to the following: [{ "bignum" : 5.0 }] Entity operation examples Example - List records of an entity This example lists the records of the Users entity.
- In the Task Input section of the Connectors task, you can set the filterClause as per your requirement.

