---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.631Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service Azure event-driven transfers"
feature_slug: "storage-transfer-service-azure-event-driven-transfers"
latest_feature_date: "2026-01-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure"
  - "https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers"
  - "https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws"
keywords:
  - "storage"
  - "transfer"
  - "azure"
  - "event"
  - "driven"
  - "transfers"
  - "now"
  - "enables"
---

# Storage Transfer Service Azure event-driven transfers

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now enables event-driven transfers from Azure Blob Storage and Azure Data Lake Storage Gen2 sources by consuming Azure Event Grid notifications via Azure Storage Queues.

## Extended Definition

Storage Transfer Service now enables event-driven transfers from Azure Blob Storage and Azure Data Lake Storage Gen2 sources by consuming Azure Event Grid notifications via Azure Storage Queues.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure](https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws)

## Supporting Pages

### "Event-driven transfers from Azure Blob Storage or Data Lake Storage Gen2\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure](https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Send feedback Event-driven transfers from Azure Blob Storage or Data Lake Storage Gen2 Stay organized with collections Save and categorize content based on your preferences.
- This document describes how to configure event-driven data transfers from Azure Blob Storage or Data Lake Storage Gen2 to Cloud Storage using Storage Transfer Service.
- Event-driven transfers use Azure Event Grid and Azure Storage Queues to notify Storage Transfer Service about changes in your Azure container.
- Event-driven transfers automatically transfer new objects and updated objects from your Azure container to Cloud Storage.

### "Event-driven transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how Set up event-driven transfers from Cloud Storage Set up event-driven transfers from AWS S3 Set up event-driven transfers from Azure Blob Storage or Data Lake Storage Gen2 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Event-driven transfers are supported from AWS S3, Azure, or Cloud Storage, and always use a Cloud Storage bucket as the destination.
- Home Documentation Storage Storage Transfer Service Send feedback Event-driven transfers Stay organized with collections Save and categorize content based on your preferences.
- Event-driven transfers with Storage Transfer Service differ from typical Cloud Storage replication by creating a copy of your data in a different bucket.

### "Event-driven transfers from AWS S3 \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Should be accessed via environment variable for security. // awsSecretAccessKey = 'HEAoMK2.../...ku8' // Creates a client const client = new StorageTransferServiceClient (); / Creates an event driven transfer that tracks an SQS queue. / async function createEventDrivenAwsTransfer () { const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , status : ' ENABLED ' , transferSpec : { awsS3DataSource : { bucketName : s3SourceBucket , awsAccessKey : { accessKeyId : awsAccessKeyId , secretAccessKey : awsSecretAccessKey , }, }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, eventStream : { name : sqsQueueArn , }, }, }); console . log ( Created an event driven transfer from ' ${ s3SourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } createEventDrivenAwsTransfer (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- StorageTransferServiceClient () The ID of the Google Cloud Platform Project that owns the job project id = 'my-project-id' A description of this job description = 'Creates an event-driven transfer that tracks an SQS queue' AWS S3 source bucket name source s3 bucket = 'my-s3-source-bucket' Google Cloud Storage destination bucket name sink gcs bucket = 'my-gcs-destination-bucket' The ARN of the SQS queue to subscribe to pubsub id = 'arn:aws:sqs:us-east-1:1234567891011:s3-notification-queue' AWS Access Key ID.
- Home Documentation Storage Storage Transfer Service Send feedback Event-driven transfers from AWS S3 Stay organized with collections Save and categorize content based on your preferences.
- Event-driven transfers always use a Cloud Storage bucket as the destination.

