---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.675Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service recurring transfer scheduling"
feature_slug: "storage-transfer-service-recurring-transfer-scheduling"
latest_feature_date: "2016-02-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location"
  - "https://docs.cloud.google.com/storage-transfer/docs/event-driven-google"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3"
keywords:
  - "storage"
  - "transfer"
  - "recurring"
  - "scheduling"
  - "supports"
  - "configuring"
  - "jobs"
  - "console"
---

# Storage Transfer Service recurring transfer scheduling

Product: Storage Transfer Service
Coverage: LOW

## Step 02 Summary

Storage Transfer Service supports configuring recurring transfer jobs from the Google Cloud Console.

## Extended Definition

Storage Transfer Service supports configuring recurring transfer jobs from the Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)

## Supporting Pages

### "Move your Cloud Storage data to another location \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- Home Documentation Storage Storage Transfer Service Send feedback Move your Cloud Storage data to another location Stay organized with collections Save and categorize content based on your preferences.
- Plan and start the transfer After you've decided on a new location, see Transfer between Cloud Storage buckets to plan and perform your data move.

### "Event-driven transfers from Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google)
- Source ID: `site-docs-root`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // Google Cloud Storage source bucket name // gcsSourceBucket = 'my-gcs-source-bucket' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // The subscription ID to a Pubsub queue to track // pubsubId = 'projects/PROJECT NAME/subscriptions/SUBSCRIPTION ID' // Creates a client const client = new StorageTransferServiceClient (); / Creates an event driven transfer that tracks a Pubsub subscription. / async function createEventDrivenGcsTransfer () { const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , status : ' ENABLED ' , transferSpec : { gcsDataSource : { bucketName : gcsSourceBucket , }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, eventStream : { name : pubsubId , }, }, }); console . log ( Created an event driven transfer from ' ${ gcsSourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } createEventDrivenGcsTransfer (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- Cloud console Follow the instructions in Controlling access through the Google Cloud console to grant the Pub/Sub Subscriber role to the Storage Transfer Service service.
- To view the current operation and any completed operations: Google Cloud console Go to the Storage Transfer Service page in the Google Cloud console.
- The response shows the current operation, the job start time, the amount of data transferred, skipped bytes, and error counts. gcloud transfer jobs monitor JOB NAME To retrieve the current operation name: gcloud transfer jobs describe JOB NAME --format = "value(latestOperationName)" To list current and completed operations: gcloud transfer operations list --job-names = JOB NAME To see details about an operation: gcloud transfer operations describe OPERATION NAME Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- ENABLED ) . build (); // Create a Transfer Service client StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); System . out . println ( "Created transfer job from AWS to GCS:" ); System . out . println ( response . toString ()); } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // AWS S3 source bucket name // awsSourceBucket = 'my-s3-source-bucket' // AWS Access Key ID // awsAccessKeyId = 'AKIA...' // AWS Secret Access Key // awsSecretAccessKey = 'HEAoMK2.../...ku8' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job from Amazon S3 to Google Cloud Storage. / async function transferFromS3 () { // Setting the start date and the end date as the same time creates a // one-time transfer const now = new Date (); const oneTimeSchedule = { day : now . getDate (), month : now . getMonth () + 1 , year : now . getFullYear (), }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : oneTimeSchedule , scheduleEndDate : oneTimeSchedule , }, transferSpec : { awsS3DataSource : { bucketName : awsSourceBucket , awsAccessKey : { accessKeyId : awsAccessKeyId , secretAccessKey : awsSecretAccessKey , }, }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, }, }); console . log ( Created and ran a transfer job from ' ${ awsSourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferFromS3 (); Python Looking for older samples?
- CloudFront distribution If you're transferring from S3 via a CloudFront distribution, specify the distribution domain name as the value of the transferSpec.awsS3DataSource.cloudfrontDomain field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "cloudfrontDomain" : " https://dy1h2n3l4ob56.cloudfront.net " , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Managed private network To transfer from S3 using a Google-managed private network, specify the transferSpec.awsS3DataSource.managedPrivateNetwork field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "managedPrivateNetwork" : TRUE , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Client libraries The following samples show you how to use Storage Transfer Service programmatically with Go, Java, Node.js, and Python.
- Supported regions Storage Transfer Service supports the following Amazon S3 regions: af-south-1 ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ap-southeast-2 ap-southeast-3 ap-southeast-4 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 il-central-1 me-central-1 me-south-1 sa-east-1 us-east-1 us-east-2 us-west-1 us-west-2 Transfers using the managed private network support the following AWS regions: ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 us-east-1 us-east-2 us-west-1 us-west-2 Transfer options The following Storage Transfer Service features are available for transfers from S3 to Cloud Storage Transfer specific files using a manifest You can pass a list of files for Storage Transfer Service to act on.
- POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } See Configure access to a source: Amazon S3 for other authentication options.

