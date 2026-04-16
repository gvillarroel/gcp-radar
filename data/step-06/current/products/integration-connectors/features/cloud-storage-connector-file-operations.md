---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.230Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Cloud Storage connector file operations"
feature_slug: "cloud-storage-connector-file-operations"
latest_feature_date: "2023-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure"
keywords:
  - "storage"
  - "connector"
  - "file"
  - "operations"
  - "the"
  - "supports"
  - "uploadobject"
  - "downloadobject"
---

# Cloud Storage connector file operations

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The Cloud Storage connector supports UploadObject, DownloadObject, MoveObject, CopyObject, and DeleteObject actions.

## Extended Definition

The Cloud Storage connector supports UploadObject, DownloadObject, MoveObject, CopyObject, and DeleteObject actions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)

## Supporting Pages

### Cloud Storage \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actions The Google Cloud Storage connection supports the following actions: DownloadObject UploadObject CopyObject MoveObject DeleteObject SignURL Note: The results of all the entity operations and actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- Cloud Storage The Google Cloud Storage connector lets you connect to a Google Cloud Storage and perform file transfer operations.
- Examples This examples in this section describe the following operations: List all objects List all objects in a bucket List objects using the LIKE filter for name List all buckets Download an object Download a binary object Upload a binary object to a bucket Upload an object to a bucket Upload an object to a folder Copy an object Move an object Delete an object Create a signed URL for an object The following table lists the sample scenarios and the corresponding configuration in the Connectors task: Task Configuration List all objects In the Configure connector task dialog, click Entities .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter the following in the Default Value field: { "BucketSource" : "bucket 01" , "ObjectSource" : "folderA/logfile.txt" , "BucketDestination" : "bucket 02" , "ObjectDestination" : "folderB/logfile.txt" } This example copies the folderA/logfile.txt file from bucket 01 to folderB/logfile.txt in bucket 02 .

### "Azure Data Lake Storage \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Shared Access Signature connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-conn-public Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory directory File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Shared Access Signature SHARED ACCESS SIGNATURE Secret Version 1 Account access key connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name azure-data-lake-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory north-america File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Account Access key ACCOUNT ACCESS KEY Secret Version 1 JWT authentication connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-jwt-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account your-adls-account-name Directory north-america File System data-lake-container Include Sub Directories Yes Minimum number of nodes 2 Maximum number of nodes 50 Authentication type JWT Authentication Client ID CLIENT ID Private Key PRIVATE KEY SECRET Private Key Password PRIVATE KEY PASSWORD SECRET Secret Version (for Private Key) 1 Secret Version (for Private Key Password) 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testdirectory1/test1.pdf" , "HasBytes" : true } If the action is successful, the DownloadFile task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : "True" , "ContentBytes" : "UEsDBBQABgAIAAAAIQCj77sdZQEAAFIFAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooA" }] Example - Upload a file This example uploads content as a blob.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testblob" , "RenameTo" : "testblob6" } If the action is successful, the RenameObject task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : true }] Entity operation examples This section shows how to perform some of the entity operations in this connector.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testblob4" , "HasBytes" : true , "Content" : "abcdef\nabcdef" } If the action is successful, the UploadFile task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : "true" }] Example - Create a file This example creates a file in the specified directory.

### Amazon S3 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/amazons3/configure)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Bucket" : "aws-s3-bucket-source" , "HasBytes" : true } If the action is successful, the DownloadObjects task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : "True" , "RemoteFile" : "prefix1%2Faws-s3-bucket-source%2Finventory-test-1%2F2023-09-10T01-00Z%2Fmanifest.json" , "ContentBytes" : "ewogICJzb3VyY2VCdWNrZXQiIDogImF3cy1zMy1idWNrZXQtYmNvbmUiLAogICJnOK" }, { "Success" : "True" , "RemoteFile" : "upload1.txt" , "ContentBytes" : "VGhpcyBpcyBhIHRlc3RpbmcgZmlsZQ==" }] Example - Upload an object This example uploads an object to the specified bucket.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Bucket" : "aws-s3-bucket-source" , "FileName" : "upload 1.txt" , "Content" : "This is a testing file" , "AccessPolicy" : "PUBLIC" } If the action is successful, the UploadObject task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Status" : "success" , "bucket" : "aws-s3-bucket-source" , "rss:title" : "Object 'upload 1.txt' was created in the bucket: aws-s3-bucket-source" , "object" : "upload 1.txt" }] Example - Delete an object This example deletes an object from the specified bucket.
- Root credentials connection type Field name Details Location europe-west1 Connector Amazon S3 Connector version 1 Connection Name aws-s3 Description aws-s3 Service Account SERVICE ACCOUNT NAME@serviceaccount AWS Region Northern Virginia Minimum number of nodes 2 Maximum number of nodes 50 Root credentials Yes AWS Access Key AWS ACCESS KEY AWS Access Secret AWS ACCESS SECRET Secret version 1 AWS IAM roles connection type Field name Details Location europe-west1 Connector Amazon S3 Connector version 1 Connection Name aws-s3 Description aws-s3 Service Account SERVICE ACCOUNT NAME@serviceaccount AWS Region Northern Virginia Minimum number of nodes 2 Maximum number of nodes 50 AWS IAM Roles Yes AWS Access Key AWS ACCESS KEY AWS Access Secret AWS ACCESS SECRET Secret version 1 AWS temporary credentials connection type Field name Details Location europe-west1 Connector Amazon S3 Connector version 1 Connection Name aws-s3 Description aws-s3 Service Account SERVICE ACCOUNT NAME@serviceaccount AWS Region Northern Virginia Minimum number of nodes 2 Maximum number of nodes 50 AWS Temporary Credentials Yes AWS Access Key AWS ACCESS KEY AWS Access Secret AWS ACCESS SECRET Secret version 1 AWS Session Token AWS SESSION TOKEN Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Bucket" : "aws-s3-bucket-source" , "ACL" : "aws-exec-read" , "Key" : "AWS S3 BusinessCase V2.xlsx" } If the action is successful, the PutObjectAcl task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Status" : "Success" }] Entity operation examples This section shows how to perform some of the entity operations in this connector.

### BigQuery \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- The results of all the entity operations and actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- You can use BigQuery connector to integrate data from multiple Google Cloud services or other third-party services, such as Cloud Storage or Amazon S3.
- BigQuery Use the BigQuery connector to perform insert, delete, update, and read operations on Google BigQuery data.
- When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file: Parameter name Data type Required Description project id STRING True The ID of the project containing BigQuery dataset. e.g. myproject. dataset id STRING False Dataset ID of the BigQuery dataset without the project name. e.g. mydataset. proxy enabled BOOLEAN False Select this checkbox to configure a proxy server for the connection. proxy auth scheme ENUM False The authentication type to use to authenticate to the ProxyServer proxy.

