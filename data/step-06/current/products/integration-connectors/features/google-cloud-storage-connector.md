---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.234Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Google Cloud Storage connector"
feature_slug: "google-cloud-storage-connector"
latest_feature_date: "2022-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
keywords:
  - "storage"
  - "connector"
  - "provides"
  - "for"
---

# Google Cloud Storage connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Provides a connector for Google Cloud Storage.

## Extended Definition

Provides a connector for Google Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)

## Supporting Pages

### Cloud Storage \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/storage.admin A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Before you begin Before using the Cloud Storage connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- Cloud Storage The Google Cloud Storage connector lets you connect to a Google Cloud Storage and perform file transfer operations.
- Examples This examples in this section describe the following operations: List all objects List all objects in a bucket List objects using the LIKE filter for name List all buckets Download an object Download a binary object Upload a binary object to a bucket Upload an object to a bucket Upload an object to a folder Copy an object Move an object Delete an object Create a signed URL for an object The following table lists the sample scenarios and the corresponding configuration in the Connectors task: Task Configuration List all objects In the Configure connector task dialog, click Entities .

### "Azure Data Lake Storage \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Shared Access Signature connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-conn-public Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory directory File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Shared Access Signature SHARED ACCESS SIGNATURE Secret Version 1 Account access key connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name azure-data-lake-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory north-america File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Account Access key ACCOUNT ACCESS KEY Secret Version 1 JWT authentication connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-jwt-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account your-adls-account-name Directory north-america File System data-lake-container Include Sub Directories Yes Minimum number of nodes 2 Maximum number of nodes 50 Authentication type JWT Authentication Client ID CLIENT ID Private Key PRIVATE KEY SECRET Private Key Password PRIVATE KEY PASSWORD SECRET Secret Version (for Private Key) 1 Secret Version (for Private Key Password) 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- Before you begin Before using the Azure Data Lake Storage connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testblob" , "RenameTo" : "testblob6" } If the action is successful, the RenameObject task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : true }] Entity operation examples This section shows how to perform some of the entity operations in this connector.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

### "Cloud SQL for SQL Server \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This section provides actions available in this connector.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "ID": 3 } If the action is successful, the connector task's connectorOutputPayload response parameter will have a value similar to the following: [{ "ID": 3, "Name": "Charlie", "City": "Paris", "SALARY": 6500.0, "Department": "IT" }] Entity operation examples This section provides examples of entity operations available in this connector.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- If the integration is successful, the connector task's connectorOutputPayload response parameter will have a value similar to the following: { "AGE": 41, "City": "Paris", "SALARY": 10000.0 } Create connections using Terraform You can use the Terraform resource to create a new connection.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Supported versions PostgreSQL versions 7.4 and later TimescaleDB Before you begin Before using the Cloud SQL for PostgreSQL connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- For example, in a database connector, tables are the entities, in a file server connector, folders are the entities, and in a messaging system connector, queues are the entities.

