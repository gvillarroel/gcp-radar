---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.632Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Private-network transfer from AWS S3/Azure Blob to Cloud Storage"
feature_slug: "private-network-transfer-from-aws-s3-azure-blob-to-cloud-storage"
latest_feature_date: "2025-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData"
keywords:
  - "private"
  - "network"
  - "transfer"
  - "aws"
  - "s3"
  - "azure"
  - "blob"
  - "storage"
---

# Private-network transfer from AWS S3/Azure Blob to Cloud Storage

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now enables transfers from AWS S3 or Azure Blob Storage to Cloud Storage over private connectivity using Cross-Cloud Interconnect or Partner Interconnect.

## Extended Definition

Storage Transfer Service now enables transfers from AWS S3 or Azure Blob Storage to Cloud Storage over private connectivity using Cross-Cloud Interconnect or Partner Interconnect.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)

## Supporting Pages

### "Transfer from AWS or Azure over a customer-managed private network \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AWS POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "privateNetworkService" : " SERVICE SELF LINK " , "bucketName" : " S3 BUCKET NAME " , "awsAccessKey" : { "accessKeyId" : " ACCESS KEY ID " , "secretAccessKey" : " SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS BUCKET NAME " } } } Azure POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "azureBlobStorageDataSource" : { "privateNetworkService" : " SERVICE SELF LINK " , "storageAccount" : " AZURE SOURCE NAME " , "container" : " AZURE CONTAINER " , "azureCredentials" : { "sasToken" : " AZURE SAS TOKEN " , } }, "gcsDataSink" : { "bucketName" : " GCS BUCKET NAME " } } } Replace the following: SERVICE SELF LINK is the self-link of the Service Directory service.
- A private network connection, established using either Google Cloud Cross-Cloud Interconnect or Partner Interconnect, can offer significant advantages for data transfer between AWS or Azure and Cloud Storage: Potential cost optimization : Potentially achieve egress cost savings.
- Home Documentation Storage Storage Transfer Service Send feedback Transfer from AWS or Azure over a customer-managed private network Stay organized with collections Save and categorize content based on your preferences.
- This provides an internal IP address that's restricted to clients running in the same VPC network as the load balancer, and that routes traffic to the S3 VPC endpoints or Azure Storage private endpoints that you created in the previous section.

### TransferSpec \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "objectConditions" : { object ( ObjectConditions ) } , "transferOptions" : { object ( TransferOptions ) } , "transferManifest" : { object ( TransferManifest ) } , "sourceAgentPoolName" : string , "sinkAgentPoolName" : string , // Union field data sink can be only one of the following: "gcsDataSink" : { object ( GcsData ) } , "posixDataSink" : { object ( PosixFilesystem ) } // End of list of possible types for union field data sink . // Union field data source can be only one of the following: "gcsDataSource" : { object ( GcsData ) } , "awsS3DataSource" : { object ( AwsS3Data ) } , "httpDataSource" : { object ( HttpData ) } , "posixDataSource" : { object ( PosixFilesystem ) } , "azureBlobStorageDataSource" : { object ( AzureBlobStorageData ) } , "awsS3CompatibleDataSource" : { object ( AwsS3CompatibleData ) } , "hdfsDataSource" : { object ( HdfsData ) } // End of list of possible types for union field data source . // Union field intermediate data location can be only one of the following: "gcsIntermediateDataLocation" : { object ( GcsData ) } // End of list of possible types for union field intermediate data location . } Fields objectConditions object ( ObjectConditions ) Only objects that satisfy these object conditions are included in the set of data source and data sink objects.
- JSON representation { "storageAccount" : string , "azureCredentials" : { object ( AzureCredentials ) } , "container" : string , "path" : string , "credentialsSecret" : string , "federatedIdentityConfig" : { object ( FederatedIdentityConfig ) } , // Union field private network can be only one of the following: "privateNetworkService" : string // End of list of possible types for union field private network . } Fields storageAccount string Required.
- This network is shared between other users of Storage Transfer Service. privateNetworkService string Service Directory Service to be used as the endpoint for transfers from a customer-managed private network.
- Format: projects/{projectId}/locations/{location}/namespaces/{namespace}/services/{service} See Transfer from AWS or Azure over a customer-managed private network for more information.

### "Class AzureBlobStorageData (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- Source ID: `site-python-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If federated identity config is specified, do not specify azure credentials][google.storagetransfer.v1.AzureBlobStorageData.azure credentials] or credentials secret][google.storagetransfer.v1.AzureBlobStorageData.credentials secret] .
- Format: projects/{project number}/secrets/{secret name} federated identity config google.cloud.storage transfer v1.types.AzureBlobStorageData.FederatedIdentityConfig Optional.
- See [Configure access to a source: Microsoft Azure Blob Storage] (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret manager) for more information.
- If credentials secret is specified, do not specify azure credentials][google.storagetransfer.v1.AzureBlobStorageData.azure credentials] .

