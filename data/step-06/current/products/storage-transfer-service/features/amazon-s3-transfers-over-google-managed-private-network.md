---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.637Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Amazon S3 transfers over Google-managed private network"
feature_slug: "amazon-s3-transfers-over-google-managed-private-network"
latest_feature_date: "2024-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec"
keywords:
  - "amazon"
  - "s3"
  - "transfers"
  - "over"
  - "managed"
  - "private"
  - "network"
  - "storage"
---

# Amazon S3 transfers over Google-managed private network

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports transferring data from Amazon S3 using a Google-managed private network with flat per-GiB egress pricing.

## Extended Definition

Storage Transfer Service now supports transferring data from Amazon S3 using a Google-managed private network with flat per-GiB egress pricing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)

## Supporting Pages

### "Transfer from AWS or Azure over a customer-managed private network \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Send feedback Transfer from AWS or Azure over a customer-managed private network Stay organized with collections Save and categorize content based on your preferences.
- AWS POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "privateNetworkService" : " SERVICE SELF LINK " , "bucketName" : " S3 BUCKET NAME " , "awsAccessKey" : { "accessKeyId" : " ACCESS KEY ID " , "secretAccessKey" : " SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS BUCKET NAME " } } } Azure POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "azureBlobStorageDataSource" : { "privateNetworkService" : " SERVICE SELF LINK " , "storageAccount" : " AZURE SOURCE NAME " , "container" : " AZURE CONTAINER " , "azureCredentials" : { "sasToken" : " AZURE SAS TOKEN " , } }, "gcsDataSink" : { "bucketName" : " GCS BUCKET NAME " } } } Replace the following: SERVICE SELF LINK is the self-link of the Service Directory service.
- A private network connection, established using either Google Cloud Cross-Cloud Interconnect or Partner Interconnect, can offer significant advantages for data transfer between AWS or Azure and Cloud Storage: Potential cost optimization : Potentially achieve egress cost savings.
- This provides an internal IP address that's restricted to clients running in the same VPC network as the load balancer, and that routes traffic to the S3 VPC endpoints or Azure Storage private endpoints that you created in the previous section.

### "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported regions Storage Transfer Service supports the following Amazon S3 regions: af-south-1 ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ap-southeast-2 ap-southeast-3 ap-southeast-4 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 il-central-1 me-central-1 me-south-1 sa-east-1 us-east-1 us-east-2 us-west-1 us-west-2 Transfers using the managed private network support the following AWS regions: ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 us-east-1 us-east-2 us-west-1 us-west-2 Transfer options The following Storage Transfer Service features are available for transfers from S3 to Cloud Storage Transfer specific files using a manifest You can pass a list of files for Storage Transfer Service to act on.
- CloudFront distribution If you're transferring from S3 via a CloudFront distribution, specify the distribution domain name as the value of the transferSpec.awsS3DataSource.cloudfrontDomain field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "cloudfrontDomain" : " https://dy1h2n3l4ob56.cloudfront.net " , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Managed private network To transfer from S3 using a Google-managed private network, specify the transferSpec.awsS3DataSource.managedPrivateNetwork field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "managedPrivateNetwork" : TRUE , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Client libraries The following samples show you how to use Storage Transfer Service programmatically with Go, Java, Node.js, and Python.
- The gcloud CLI does not support transfers through CloudFront or Managed private network. gcloud transfer jobs create \ s3:// S3 BUCKET NAME gs:// STORAGE BUCKET NAME \ --source-creds-file = " relative path/to/creds.json " Replace the following: S3 BUCKET NAME is the data source for this transfer.
- The Storage Transfer Service client libraries do not support transfers through CloudFront or Managed private network.

### TransferSpec \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This network is shared between other users of Storage Transfer Service. privateNetworkService string Service Directory Service to be used as the endpoint for transfers from a customer-managed private network.
- Format: projects/{projectNumber}/secrets/{secret name} Union field private network . private network can be only one of the following: managedPrivateNetwork boolean Egress bytes over a Google-managed private network.
- Union field private network . private network can be only one of the following: privateNetworkService string Service Directory Service to be used as the endpoint for transfers from a customer-managed private network.
- Format: projects/{projectId}/locations/{location}/namespaces/{namespace}/services/{service} See Transfer from AWS or Azure over a customer-managed private network for more information.

