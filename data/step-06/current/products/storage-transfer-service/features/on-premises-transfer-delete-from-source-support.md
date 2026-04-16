---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.657Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "On-premises transfer delete-from-source support"
feature_slug: "on-premises-transfer-delete-from-source-support"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs"
  - "https://docs.cloud.google.com/storage-transfer/docs/access-control"
keywords:
  - "premises"
  - "transfer"
  - "delete"
  - "source"
  - "storage"
  - "now"
  - "supports"
  - "deleting"
---

# On-premises transfer delete-from-source support

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports deleting source objects for on-premises data transfers (Generally Available).

## Extended Definition

Storage Transfer Service now supports deleting source objects for on-premises data transfers (Generally Available).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control)

## Supporting Pages

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https: //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "awsS3CompatibleData" : { "region" : "us-east-1" , "s3Metadata" : { "protocol" : "NETWORK PROTOCOL HTTPS" , "requestModel" : "REQUEST MODEL VIRTUAL HOSTED STYLE" , "authMethod" : "AUTH METHOD AWS SIGNATURE V4" }, "endpoint" : "example.com" , "bucketName" : " BUCKET NAME " , "path" : " PATH " , }, "gcsDataSink" : { "bucketName" : " SINK NAME " , "path" : " SINK PATH " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } See the AwsS3CompatibleData API reference for field descriptions.
- Storage Transfer Service supports transfers from cloud or on-premises object storage systems that are compatible with the Amazon S3 API.
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default'; // The S3-compatible bucket name to transfer data from // const sourceBucketName = "my-bucket-name"; // The S3-compatible path (object prefix) to transfer data from // const sourcePath = "path/to/data/"; // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = "my-sink-bucket"; // The GCS path (object prefix) to transfer data to // const gcsPath = "path/to/data/"; // The S3 region of the source bucket // const region = 'us-east-1'; // The S3-compatible endpoint // const endpoint = "us-east-1.example.com"; // The S3-compatible network protocol // const protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS; // The S3-compatible request model // const requestModel = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE; // The S3-compatible auth method // const authMethod = AuthMethod.AUTH METHOD AWS SIGNATURE V4; // Creates a client const client = new storageTransfer .
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .

### "Transfer from HDFS to Cloud Storage \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Storage Transfer Service supports transfers from cloud and on-premises Hadoop Distributed File System (HDFS) sources.
- POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "hdfsDataSource" : { "path" : "/mount" }, "gcsDataSink" : { "bucketName" : " SINK NAME " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } Refer to the transferJobs.create reference for details about additional supported fields.
- Transfer options : Specify whether to overwrite destination files ( --overwrite-when=different or always ) and whether to delete certain files during or after the transfer ( --delete-from=destination-if-unique or source-after-transfer ); and optionally set a storage class on transferred objects ( --custom-storage-class ).
- Use cases include migrating from on-premises storage to Cloud Storage, archiving data to free up on-premises storage space, replicating data to Google Cloud for business continuity, or transferring data to Google Cloud for analysis and processing.

### "Permissions and roles \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This role doesn't allow transfer to be deleted, so that auditors or security personnel can view a fully preserved record of past transfers. resourcemanager.projects.get resourcemanager.projects.list storagetransfer.agentpools.create storagetransfer.agentpools.get storagetransfer.agentpools.list storagetransfer.agentpools.report storagetransfer.agentpools.update storagetransfer.jobs.create storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.jobs.run storagetransfer.jobs.update storagetransfer.operations. storagetransfer.projects.getServiceAccount Storage Transfer Viewer ( roles/storagetransfer.viewer ) Provides permissions to list and get jobs and transfer operations within the project.
- List agent pools Create agent pools Update agent pools Delete agent pools Get agent pools Read or set project bandwidth Role details The following table describes in detail the predefined roles for Storage Transfer Service: Role Description Included Permissions Storage Transfer Admin ( roles/storagetransfer.admin ) Provides all Storage Transfer Service permissions, including deleting jobs.
- Grant this role to the user or service account being used by agents. logging.logEntries.create monitoring.timeSeries.create pubsub.subscriptions.consume pubsub.subscriptions.create pubsub.subscriptions.delete pubsub.subscriptions.get pubsub.topics.attachSubscription pubsub.topics.create pubsub.topics.get pubsub.topics.list pubsub.topics.publish storagetransfer.agentpools.report storagetransfer.operations.assign storagetransfer.operations.get storagetransfer.operations.report Storage Transfer Service Agent ( roles/storagetransfer.serviceAgent ) Gives the Storage Transfer Service service agent the permissions required to create and modify Pub/Sub topics to communicate from Google Cloud to transfer agents.
- This role is most suitable for users or internal teams that audit transfer usage, such as security, compliance, or business unit leaders. resourcemanager.projects.get resourcemanager.projects.list storagetransfer.agentpools.get storagetransfer.agentpools.list storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.operations.get storagetransfer.operations.list storagetransfer.projects.getServiceAccount Storage Transfer Agent ( roles/storagetransfer.transferAgent ) Gives transfer agents the Storage Transfer Service permissions required to complete a transfer.

