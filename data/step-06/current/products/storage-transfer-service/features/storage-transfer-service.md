---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.677Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service"
feature_slug: "storage-transfer-service"
latest_feature_date: "2015-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network"
  - "https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions"
  - "https://docs.cloud.google.com/storage-transfer/docs/managed-folders"
keywords:
  - "storage"
  - "transfer"
  - "managed"
  - "moving"
  - "between"
  - "locations"
---

# Storage Transfer Service

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service is a managed cloud-to-cloud data transfer service for moving data between storage locations.

## Extended Definition

Storage Transfer Service is a managed cloud-to-cloud data transfer service for moving data between storage locations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions)
- [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders)

## Supporting Pages

### "Transfer from AWS or Azure over a customer-managed private network \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A private network connection, established using either Google Cloud Cross-Cloud Interconnect or Partner Interconnect, can offer significant advantages for data transfer between AWS or Azure and Cloud Storage: Potential cost optimization : Potentially achieve egress cost savings.
- Home Documentation Storage Storage Transfer Service Send feedback Transfer from AWS or Azure over a customer-managed private network Stay organized with collections Save and categorize content based on your preferences.
- AWS POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "privateNetworkService" : " SERVICE SELF LINK " , "bucketName" : " S3 BUCKET NAME " , "awsAccessKey" : { "accessKeyId" : " ACCESS KEY ID " , "secretAccessKey" : " SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS BUCKET NAME " } } } Azure POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "azureBlobStorageDataSource" : { "privateNetworkService" : " SERVICE SELF LINK " , "storageAccount" : " AZURE SOURCE NAME " , "container" : " AZURE CONTAINER " , "azureCredentials" : { "sasToken" : " AZURE SAS TOKEN " , } }, "gcsDataSink" : { "bucketName" : " GCS BUCKET NAME " } } } Replace the following: SERVICE SELF LINK is the self-link of the Service Directory service.
- Interconnect options Storage Transfer Service can transfer data from AWS and Azure over Cross-Cloud Interconnect (CCI) or Partner Interconnect .

### "Delegate service agent permissions to a user-managed service account \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "A transfer using a user-managed service account for bucket permissions" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "serviceAccount" : "SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com" , "transferSpec" : { ... } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Storage Transfer Service Send feedback Delegate service agent permissions to a user-managed service account Stay organized with collections Save and categorize content based on your preferences.
- This works well when the Storage Transfer Service user is a trusted user for the data in all buckets, and can configure transfer jobs correctly to avoid moving data into or out of the wrong bucket.
- For agentless transfers, Storage Transfer Service by default uses a service agent to transfer your data between the source and the destination.

### "Transfer Cloud Storage managed folders \_|\_ Storage Transfer Service \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When transferring objects between Cloud Storage buckets with Storage Transfer Service, these managed folder permissions can be retained.
- On the source bucket or managed folder: storage.managedFolders.getIamPolicy storage.managedFolders.list storage.managedFolders.get On the destination bucket or managed folder: storage.managedFolders.setIamPolicy storage.managedFolders.list storage.managedFolders.create These are in addition to the standard permissions required by Storage Transfer Service: Configure access to a source: Cloud Storage Configure access to a sink: Cloud Storage To grant the required managed folder permissions, create a custom role with only the permissions required.
- POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "name" : "transferjobs/ NAME " , "projectId" : " PROJECT ID " , "transferSpec" : { "gcsDataSource" : { "bucketName" : " SOURCE BUCKET " , "path" : " SOURCE PATH " , "managedFolderTransferEnabled" : true }, "gcsDataSink" : { "bucketName" : " DESTINATION BUCKET " , "path" : " DESTINATION PATH " , } }, "status" : "ENABLED" } If the correct managed transfer permissions are not set at the source and the destination, the transfer fails.
- Home Documentation Storage Storage Transfer Service Send feedback Transfer Cloud Storage managed folders Stay organized with collections Save and categorize content based on your preferences.

