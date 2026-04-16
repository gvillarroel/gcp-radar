---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.233Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Box connector"
feature_slug: "box-connector"
latest_feature_date: "2022-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure"
keywords:
  - "box"
  - "connector"
  - "provides"
  - "for"
---

# Box connector

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Provides a connector for Box.

## Extended Definition

Provides a connector for Box.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)

## Supporting Pages

### Box \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- Source ID: `site-docs-root-2`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- OAuth authorization code connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name box-conn Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User Authorization OAuth 2.0 - Authorization code Minimum number of nodes 2 Maximum number of nodes 2 Client ID XXXX Scopes root readwrite Client Secret XXXX Secret Version 1 For information about Box OAuth configuration, see Create your OAuth application .
- Box Json for JWT Auth method connection type Field name Details Location us-central1 Connector Box Connector version 1 Connection Name gcp-box-conn-new Enable Cloud Logging yes Service Account XXXX@serviceaccount Impersonate User Mode User As User Id XXXX Minimum number of nodes 2 Maximum number of nodes 2 Authentication Box JSON Box JSON for JWT Auth XXXX Secret Version 1 You can use the Box account to set up Box Json for JWT auth.
- Before you begin Before using the Box connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- OAuth JWT Cert Type : The OAuth JWT certificate type for the Box connector.

### Dropbox \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure)
- Source ID: `site-docs-root-2`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before using the Dropbox connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- Dropbox The Dropbox connector lets you connect to a Dropbox instance and perform the supported operations.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Id" : "id:8-07A6kHAoIAAAAAAAABcg" , "FileType" : "file" } If the action is successful, the DownloadFile task's connectorOutputPayload response parameter will have a value similar to the following: [ { "Success" : "true" , "Name" : "license.txt" , "Id" : "id:8-07A6kHAoIAAAAAAAABcg" , "ClientModified" : "2024-07-09T09:52:41Z" , "ServerModified" : "2024-07-09T09:52:41Z" , "Revision" : "61ccd7da2b987c0f52053" , "Size" : "11" , "LowerCasePath" : "/sahil kapoor/testingdropboxupdated/uploadfolderwithnestedfolder/nestedfolder2/license.txt" , "DisplayPath" : "/Sahil Kapoor/TestingDropBoxUpdated/uploadFolderWithNestedFolder/NestedFolder2/license.txt" , "PreviewURL" : null , "IsDownloadable" : "true" , "HasExplicitSharedMembers" : null , "ContentHash" : "f6dc724d119649460e47ce719139e521e082be8a9755c5bece181de046ee65fe" , "Owner" : null , "Title" : null , "MimeType" : null , "FileData" : "SGVsbG8gd29ybGQ=" , "parent shared folder id" : "3237290067" , "sharing info read only" : "false" , "sharing info parent shared folder id" : "3237290067" , "sharing info modified by" : "dbid:AACVLctlrEo-ouTSxUVSTi0loZCSZKc933A" } ] Use the Dropbox connection in an integration After you create the connection, it becomes available in both Apigee Integration and Application Integration.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "From Path" : "/DropboxFolder/pptxFile.pptx" , "To Path" : "/DropBoxFolder2/Folder/pptFile.pptx" } If the action is successful, the CopyResource task's connectorOutputPayload response parameter will have a value similar to the following: [ { "Success" : "true" , "metadata .tag" : "file" , "metadata name" : "pptxFile.pptx" , "metadata path lower" : "/testingdropboxupdated/abcde/pptxfile.pptx" , "metadata path display" : "/TestingDropBoxUpdated/abcde/pptxFile.pptx" , "metadata parent shared folder id" : "3204685267" , "metadata id" : "id:8-07A6kHAoIAAAAAAAAC1w" , "metadata client modified" : "2024-06-13T11:06:37Z" , "metadata server modified" : "2024-07-12T10:19:02Z" , "metadata rev" : "61d0a3560ecb5bf039dd3" , "metadata size" : "17052" , "metadata sharing info read only" : "false" , "metadata sharing info parent shared folder id" : "3204685267" , "metadata sharing info modified by" : "dbid:AACVLctlrEo-ouTSxUVSTi0loZCSZKc933A" , "metadata is downloadable" : "true" , "metadata content hash" : "0234f7d4eaf914cb276716c8b2a24e24655d1f6f39ee549207e33a4255e2fba2" } ] Example - Create a folder The following example shows how to create a folder at a given path: In the Configure connector task dialog, click Actions .

### "Cloud SQL for SQL Server \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforsqlserver/configure)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This section provides actions available in this connector.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "ID": 3 } If the action is successful, the connector task's connectorOutputPayload response parameter will have a value similar to the following: [{ "ID": 3, "Name": "Charlie", "City": "Paris", "SALARY": 6500.0, "Department": "IT" }] Entity operation examples This section provides examples of entity operations available in this connector.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- If the integration is successful, the connector task's connectorOutputPayload response parameter will have a value similar to the following: { "AGE": 41, "City": "Paris", "SALARY": 10000.0 } Create connections using Terraform You can use the Terraform resource to create a new connection.

### "Cloud SQL for PostgreSQL \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudsqlforpostgresql/configure)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types The following are the supported data types for this connector: BIGINT BINARY BIT BOOLEAN CHAR DATE DECIMAL DOUBLE FLOAT INTEGER LONGN VARCHAR LONG VARCHAR NCHAR NUMERIC NVARCHAR REAL SMALL INT TIME TIMESTAMP TINY INT VARBINARY VARCHAR Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/cloudsql.editor A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.
- Supported versions PostgreSQL versions 7.4 and later TimescaleDB Before you begin Before using the Cloud SQL for PostgreSQL connector, do the following tasks: In your Google Cloud project: Ensure that network connectivity is set up.
- For example, in a database connector, tables are the entities, in a file server connector, folders are the entities, and in a messaging system connector, queues are the entities.

