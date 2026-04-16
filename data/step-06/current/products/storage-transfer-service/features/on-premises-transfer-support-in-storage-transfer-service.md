---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.666Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "On-premises transfer support in Storage Transfer Service"
feature_slug: "on-premises-transfer-support-in-storage-transfer-service"
latest_feature_date: "2019-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
  - "https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers"
keywords:
  - "premises"
  - "transfer"
  - "storage"
  - "added"
  - "transfers"
  - "capability"
  - "entering"
  - "beta"
---

# On-premises transfer support in Storage Transfer Service

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service added support for on-premises transfers, with this capability entering beta.

## Extended Definition

Storage Transfer Service added support for on-premises transfers, with this capability entering beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers)

## Supporting Pages

### Configure VPC Service Controls for file system transfers | Storage Transfer Service | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc)
- Source ID: `site-docs-reference-required-3-http`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- If you are concerned about transfers from on-premises to Cloud Storage buckets outside of the service perimeter, you need to configure Private Google Access with VPC Service Controls to prevent agents from accessing buckets outside of the service perimeter.
- If transfer agents can be added to the service perimeter that contains your Cloud Storage bucket and Storage Transfer Service project, configure Private Google Access with VPC Service Controls for the on-premises network used by transfer agents.
- Storage Transfer Service supports on-premises transfers to Cloud Storage buckets protected by VPC Service Controls, under the following conditions: Creating a transfer with Storage Transfer Service API protects all transferred data.
- Supported sources and sinks Other transfer options Differences between Storage Transfer Service options Common use cases Transfer between Cloud Storage buckets Move your Cloud Storage data to another location Transfer data between file systems Transfer from S3 via CloudFront Transfer from S3 or Azure with a customer-managed private network Configure access Access control with IAM Agentless transfer permissions Delegate service agent permissions Agent-based transfer permissions Role and permission reference Sources Cloud Storage Amazon S3 S3-compatible storage Microsoft Azure Blob Storage URL list File system Sinks Cloud Storage File system Transfer data Create transfers All transfers Amazon S3 to Cloud Storage File system to Cloud Storage HDFS to Cloud Storage S3-compatible storage to Cloud Storage Public URLs to Cloud Storage Manage transfers Event-driven transfers Overview From Cloud Storage From AWS S3 From Azure Blob Storage or Data Lake Storage Gen2 Cross-bucket replication Cloud Storage managed folders Cloud Storage hierarchical namespace Filter source objects by prefix Transfer specific files or objects Schedule transfers Metadata preservation Data integrity Improve transfer speeds Manage transfer agents Requirements Agent pools Transfer agents Manage network bandwidth Best practices Advanced options Protect file system data Troubleshoot Log and monitor Cloud Logging Audit Logging Monitor transfer jobs File system transfer logs Pub/Sub notifications Security and compliance Custom organization policy constraints Regional endpoints Configure VPC Service Controls Cloud object storage transfers File system transfers Customer-managed encryption keys Access Transparency AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Storage Storage Transfer Service Send feedback Configure VPC Service Controls for file system transfers Stay organized with collections Save and categorize content based on your preferences.

### "Event-driven transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how Set up event-driven transfers from Cloud Storage Set up event-driven transfers from AWS S3 Set up event-driven transfers from Azure Blob Storage or Data Lake Storage Gen2 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Storage Transfer Service Send feedback Event-driven transfers Stay organized with collections Save and categorize content based on your preferences.
- Storage Transfer Service can listen to event notifications in AWS, Azure, or Google Cloud to automatically transfer data that has been added or updated in the source location.
- Event-driven transfers with Storage Transfer Service differ from typical Cloud Storage replication by creating a copy of your data in a different bucket.

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Storage Transfer Service supports transfers from cloud or on-premises object storage systems that are compatible with the Amazon S3 API.
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- POST https: //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "awsS3CompatibleData" : { "region" : "us-east-1" , "s3Metadata" : { "protocol" : "NETWORK PROTOCOL HTTPS" , "requestModel" : "REQUEST MODEL VIRTUAL HOSTED STYLE" , "authMethod" : "AUTH METHOD AWS SIGNATURE V4" }, "endpoint" : "example.com" , "bucketName" : " BUCKET NAME " , "path" : " PATH " , }, "gcsDataSink" : { "bucketName" : " SINK NAME " , "path" : " SINK PATH " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } See the AwsS3CompatibleData API reference for field descriptions.
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const storageTransfer = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // Useful enums for AWS S3-Compatible Transfers // const {AuthMethod, NetworkProtocol, RequestModel} = storageTransfer.protos.google.storagetransfer.v1.S3CompatibleMetadata; // Your project id // const projectId = 'my-project'; // The agent pool associated with the S3-compatible data source.

