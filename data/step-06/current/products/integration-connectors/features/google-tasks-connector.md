---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.217Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Google Tasks connector"
feature_slug: "google-tasks-connector"
latest_feature_date: "2024-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure"
keywords:
  - "tasks"
  - "connector"
  - "preview"
  - "is"
  - "available"
  - "for"
---

# Google Tasks connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

A preview connector is available for Google Tasks.

## Extended Definition

A preview connector is available for Google Tasks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)

## Supporting Pages

### "Perform CRUD operations on a MySQL database \_|\_ Integration Connectors\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add and configure a Connectors task Perform the following steps to configure a Connectors task to list all the entities in the employee table: Select +Add a task/trigger > Tasks in the integration editor to display the list of available tasks.
- To verify this in your MySQL table, execute the following command from your MySQL client: SELECT FROM employee; The following table rows are displayed: +-------------+---------------------+--------------------+------------------+ employee id employee first name employee last name employee emailID +-------------+---------------------+--------------------+------------------+ 1 Peter Dilliard test-01@test.com 2 Meaghan Webb test-02@test.com +-------------+---------------------+--------------------+------------------+ What's next Insert data into BigQuery using a For Each Parallel task All triggers and tasks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In Response Parameters , under Connector output payload , the following output is displayed: [ { "employee id": 1.0, "employee first name": "Peter", "employee last name": "Dilliard", "employee emailID": "test-01@test.com" }, { "employee id": 2.0, "employee first name": "Meaghan", "employee last name": "Webb", "employee emailID": "test-02@test.com" } ] Perform other operations on your MySQL database table When you configure a Connectors task in your integration, you can select any one of the following operations: List Get Create Update Delete You've already used the List operation to view all the rows in the employee table.
- Do the following in your Google Cloud project: Grant the following roles to the service account that you want to use to create the connection: roles/secretmanager.viewer roles/secretmanager.secretAccessor Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) If these services have not been enabled for your project previously, you are prompted to enable them when creating the connection in the Create Connection page.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Supported versions PostgreSQL versions 7.4 and later TimescaleDB Before you begin Before using the Cloud SQL for PostgreSQL connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- In the Connection Details section, complete the following: Connector : Select Cloud SQL for PostgreSQL from the drop down list of available Connectors.
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

### "Cloud SQL for SQL Server \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This section provides actions available in this connector.
- Supported versions SQL Server versions: 2008, 2012, 2014, 2016, 2017, 2019, and 2022 Before you begin Before using the Cloud SQL for SQL Server connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- In the Connection Details section, complete the following: Connector : Select Cloud SQL for SQL Server from the drop down list of available Connectors.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "ID": 3 } If the action is successful, the connector task's connectorOutputPayload response parameter will have a value similar to the following: [{ "ID": 3, "Name": "Charlie", "City": "Paris", "SALARY": 6500.0, "Department": "IT" }] Entity operation examples This section provides examples of entity operations available in this connector.

### Cloud SQL for MySQL \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlformysql/configure)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Supported versions MySQL versions 5.0 to 8.0 Before you begin Before using the Cloud SQL for MySQL connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- In the Connection Details section, complete the following: Connector : Select Cloud SQL for MySQL from the drop down list of available Connectors.
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

