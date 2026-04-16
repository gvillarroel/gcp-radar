---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.224Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "SQL Server connector proxy server configuration"
feature_slug: "sql-server-connector-proxy-server-configuration"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
keywords:
  - "sql"
  - "server"
  - "connector"
  - "proxy"
  - "configuration"
  - "the"
  - "supports"
---

# SQL Server connector proxy server configuration

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The SQL Server connector supports proxy server configuration.

## Extended Definition

The SQL Server connector supports proxy server configuration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)

## Supporting Pages

### "Cloud SQL for SQL Server \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- Source ID: `site-docs-root-2`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connection configuration samples Basic authentication connection type Field name Details Location us-central1 Connector CloudSQL SQL Server Connector version 1 Connection Name cloudsql-server-private Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Project ID connectors-prod-test Database Region us-central1 Instance ID google-cloud-bcone-sql-instance1 Database Name sqlcloudprivate DB Minimum number of nodes 2 Maximum number of nodes 2 Destination Type Host address host HOST port PORT Username USERNAME Password PASSWORD Secret version 1 Note: The host address specified in the connection is the network endpoint attachment created using PSC connectivity via Socks5 proxy method.
- Supported versions SQL Server versions: 2008, 2012, 2014, 2016, 2017, 2019, and 2022 Before you begin Before using the Cloud SQL for SQL Server connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- System limitations The Cloud SQL for SQL Server connector can process a maximum of 30 transactions per second, per node , and throttles any transactions beyond this limit.
- Note: If you are connecting to a private Cloud SQL instance, configure a SOCKS5 proxy server, and enter the hostname or IP address of the proxy in the Host address field.

### "Perform CRUD operations on a MySQL database \_|\_ Integration Connectors\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Response Parameters , under Connector output payload , the following output is displayed: [ { "employee id": 1.0, "employee first name": "Peter", "employee last name": "Dilliard", "employee emailID": "test-01@test.com" }, { "employee id": 2.0, "employee first name": "Meaghan", "employee last name": "Webb", "employee emailID": "test-02@test.com" } ] Perform other operations on your MySQL database table When you configure a Connectors task in your integration, you can select any one of the following operations: List Get Create Update Delete You've already used the List operation to view all the rows in the employee table.
- In Response Parameters , under Connector input payload , the payload that you provided is displayed: { "employee first name": "Mary", "employee last name": "Smith", "employee emailID": "test-03@test.com" } Under Connector output payload , the entity ID is displayed as output: { "employee id": 3.0 } You can verify that the row is added in your MySQL table.
- In Response Parameters , under Connector output payload , the following output is displayed: [ { "employee id": 2.0, "employee first name": "Meaghan", "employee last name": "Webb", "employee emailID": "test-02@test.com" } ] You can verify that the information displayed here matches the information in the corresponding row in your MySQL table.
- Note: You can customize the connection node values only if you are a Pay-as-you-go customer. (Optional) In the Advanced settings section, select the Use proxy checkbox to configure a proxy server for the connection and configure the following values: Proxy Auth Scheme : Select the authentication type to authenticate with the proxy server.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you are connecting to a private Cloud SQL instance, configure a SOCKS5 proxy server, and enter the hostname or IP address of the proxy in the Host address field.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description project id STRING True Project ID of the project that contains the Cloud SQL instance. e.g. myproject. database region STRING True The cloud region for the instance. e.g. us-central1. instance id STRING True Database instance ID.
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you are connecting to a private Cloud SQL instance, configure a SOCKS5 proxy server, and enter the hostname or IP address of the proxy in the Host address field.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description project id STRING True Project ID of the project that contains the Cloud SQL instance. e.g. myproject. database region STRING True The cloud region for the instance. e.g. us-central1. instance id STRING True Database instance ID.
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

