---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.665Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "File selection by last modification time in transfer jobs"
feature_slug: "file-selection-by-last-modification-time-in-transfer-jobs"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers"
  - "https://docs.cloud.google.com/storage-transfer/docs/custom-constraints"
keywords:
  - "file"
  - "selection"
  - "last"
  - "modification"
  - "time"
  - "transfer"
  - "jobs"
  - "can"
---

# File selection by last modification time in transfer jobs

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Transfer jobs can now filter and select files based on their last modification times.

## Extended Definition

Transfer jobs can now filter and select files based on their last modification times.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)

## Supporting Pages

### "REST Resource: transferJobs \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
- Source ID: `site-api-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "projectId" : string , "serviceAccount" : string , "transferSpec" : { object ( TransferSpec ) } , "replicationSpec" : { object ( ReplicationSpec ) } , "notificationConfig" : { object ( NotificationConfig ) } , "loggingConfig" : { object ( LoggingConfig ) } , "schedule" : { object ( Schedule ) } , "eventStream" : { object ( EventStream ) } , "status" : enum ( Status ) , "creationTime" : string , "lastModificationTime" : string , "deletionTime" : string , "latestOperationName" : string } Fields name string A unique name (within the transfer project) assigned when the job is created.
- Non-PosixFilesystem example: "transferJobs/^(?!OPI)[A-Za-z0-9-. ] [A-Za-z0-9]$" PosixFilesystem example: "transferJobs/OPI^[A-Za-z0-9-. ] [A-Za-z0-9]$" Applications must not rely on the enforcement of naming requirements involving OPI.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . lastModificationTime string ( Timestamp format) Output only.
- For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically.

### Create transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Storage Transfer Service is able to transfer data from the following Microsoft Azure Storage regions: Americas: East US, East US 2, West US, West US 2, West US 3, Central US, North Central US, South Central US, West Central US, Canada Central, Canada East, Brazil South Asia-Pacific: Australia Central, Australia East, Australia Southeast, Central India, South India, West India, Southeast Asia, East Asia, Japan East, Japan West, Korea South, Korea Central Europe, Middle East, Africa (EMEA): France Central, Germany West Central, Norway East, Sweden Central, Switzerland North, North Europe, West Europe, UK South, UK West, Qatar Central, UAE North, South Africa North Request using transferJobs create : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "YOUR DESCRIPTION" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "gcsDataSink" : { "bucketName" : "GCS SINK NAME" } } } Response: 200 OK { "transferJob" : [ { "creationTime" : "2020-02-14T01:01:00.000000000Z" , "description" : "YOUR DESCRIPTION" , "name" : "transferJobs/JOB ID" , "status" : "ENABLED" , "lastModificationTime" : "2020-02-14T01:01:00.000000000Z" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "objectConditions" : {}, "transferOptions" : {} } } ] } Transfer from a file system See Transfer from a file system to Cloud Storage .
- Request using transferJobs create : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "YOUR DESCRIPTION" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 1 , "month" : 1 , "year" : 2015 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "gcsDataSource" : { "bucketName" : "GCS SOURCE NAME" }, "gcsDataSink" : { "bucketName" : "GCS SINK NAME" }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : true } } } Response: 200 OK { "transferJob" : [ { "creationTime" : "2015-01-01T01:01:00.000000000Z" , "description" : "YOUR DESCRIPTION" , "name" : "transferJobs/JOB ID" , "status" : "ENABLED" , "lastModificationTime" : "2015-01-01T01:01:00.000000000Z" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 1 , "month" : 1 , "year" : 2015 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "gcsDataSource" : { "bucketName" : "GCS SOURCE NAME" , }, "gcsDataSink" : { "bucketName" : "GCS NEARLINE SINK NAME" }, "objectConditions" : { "minTimeElapsedSinceLastModification" : "2592000.000s" }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : true } } } ] } Transfer from Amazon S3 to Cloud Storage See Transfer from Amazon S3 to Cloud Storage .
- Complete example request The following is an example of a full request: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "YOUR DESCRIPTION" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 1 , "month" : 1 , "year" : 2015 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "gcsDataSource" : { "bucketName" : "GCS SOURCE NAME" , "path" : "GCS SOURCE PATH" , }, "gcsDataSink" : { "bucketName" : "GCS SINK NAME" , "path" : "GCS SINK PATH" , }, "objectConditions" : { "minTimeElapsedSinceLastModification" : "2592000s" }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : true } } } Client libraries The following samples show you how to use Storage Transfer Service programmatically with Go, Java, Node.js, and Python.
- ENABLED ) . build (); // Create a Transfer Service client StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); System . out . println ( "Created transfer job from standard bucket to Nearline bucket:" ); System . out . println ( response . toString ()); } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // Google Cloud Storage source bucket name // gcsSourceBucket = 'my-gcs-source-bucket' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Date to start daily migration // startDate = new Date() // Creates a client const client = new StorageTransferServiceClient (); / Create a daily migration from a GCS bucket to another GCS bucket for objects untouched for 30+ days. / async function createDailyNearline30DayMigration () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : { day : startDate . getDate (), month : startDate . getMonth () + 1 , year : startDate . getFullYear (), }, }, transferSpec : { gcsDataSource : { bucketName : gcsSourceBucket , }, gcsDataSink : { bucketName : gcsSinkBucket , }, objectConditions : { minTimeElapsedSinceLastModification : { seconds : 2592000 , // 30 days }, }, transferOptions : { deleteObjectsFromSourceAfterTransfer : true , }, }, }, }); console . log ( Created transferJob: ${ transferJob . name } ); } createDailyNearline30DayMigration (); Python Looking for older samples?

### "Custom organization policy constraints \_|\_ Storage Transfer Service \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field storagetransfer.googleapis.com/TransferJob resource.description resource.eventStream.eventStreamExpirationTime resource.eventStream.eventStreamStartTime resource.eventStream.name resource.latestOperationName resource.loggingConfig.enableOnpremGcsTransferLogs resource.loggingConfig.logActions resource.loggingConfig.logActionStates resource.name resource.notificationConfig.eventTypes resource.notificationConfig.payloadFormat resource.notificationConfig.pubsubTopic resource.projectId resource.replicationSpec.gcsDataSink.bucketName resource.replicationSpec.gcsDataSink.managedFolderTransferEnabled resource.replicationSpec.gcsDataSink.path resource.replicationSpec.gcsDataSource.bucketName resource.replicationSpec.gcsDataSource.managedFolderTransferEnabled resource.replicationSpec.gcsDataSource.path resource.replicationSpec.objectConditions.excludePrefixes resource.replicationSpec.objectConditions.includePrefixes resource.replicationSpec.objectConditions.lastModifiedBefore resource.replicationSpec.objectConditions.lastModifiedSince resource.replicationSpec.objectConditions.matchGlob resource.replicationSpec.objectConditions.maxTimeElapsedSinceLastModification resource.replicationSpec.objectConditions.minTimeElapsedSinceLastModification resource.replicationSpec.transferOptions.deleteObjectsFromSourceAfterTransfer resource.replicationSpec.transferOptions.deleteObjectsUniqueInSink resource.replicationSpec.transferOptions.metadataOptions.acl resource.replicationSpec.transferOptions.metadataOptions.gid resource.replicationSpec.transferOptions.metadataOptions.kmsKey resource.replicationSpec.transferOptions.metadataOptions.mode resource.replicationSpec.transferOptions.metadataOptions.storageClass resource.replicationSpec.transferOptions.metadataOptions.symlink resource.replicationSpec.transferOptions.metadataOptions.temporaryHold resource.replicationSpec.transferOptions.metadataOptions.timeCreated resource.replicationSpec.transferOptions.metadataOptions.uid resource.replicationSpec.transferOptions.overwriteObjectsAlreadyExistingInSink resource.replicationSpec.transferOptions.overwriteWhen resource.schedule.endTimeOfDay resource.schedule.repeatInterval resource.schedule.scheduleEndDate resource.schedule.scheduleStartDate resource.schedule.startTimeOfDay resource.serviceAccount resource.status resource.transferSpec.awsS3CompatibleDataSource.bucketName resource.transferSpec.awsS3CompatibleDataSource.endpoint resource.transferSpec.awsS3CompatibleDataSource.path resource.transferSpec.awsS3CompatibleDataSource.region resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.authMethod resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.listApi resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.protocol resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.requestModel resource.transferSpec.awsS3DataSource.bucketName resource.transferSpec.awsS3DataSource.cloudfrontDomain resource.transferSpec.awsS3DataSource.managedPrivateNetwork resource.transferSpec.awsS3DataSource.path resource.transferSpec.awsS3DataSource.privateNetworkService resource.transferSpec.awsS3DataSource.roleArn resource.transferSpec.azureBlobStorageDataSource.container resource.transferSpec.azureBlobStorageDataSource.federatedIdentityConfig.clientId resource.transferSpec.azureBlobStorageDataSource.federatedIdentityConfig.tenantId resource.transferSpec.azureBlobStorageDataSource.path resource.transferSpec.azureBlobStorageDataSource.privateNetworkService resource.transferSpec.azureBlobStorageDataSource.storageAccount resource.transferSpec.gcsDataSink.bucketName resource.transferSpec.gcsDataSink.managedFolderTransferEnabled resource.transferSpec.gcsDataSink.path resource.transferSpec.gcsDataSource.bucketName resource.transferSpec.gcsDataSource.managedFolderTransferEnabled resource.transferSpec.gcsDataSource.path resource.transferSpec.gcsIntermediateDataLocation.bucketName resource.transferSpec.gcsIntermediateDataLocation.managedFolderTransferEnabled resource.transferSpec.gcsIntermediateDataLocation.path resource.transferSpec.hdfsDataSource.path resource.transferSpec.httpDataSource.listUrl resource.transferSpec.objectConditions.excludePrefixes resource.transferSpec.objectConditions.includePrefixes resource.transferSpec.objectConditions.lastModifiedBefore resource.transferSpec.objectConditions.lastModifiedSince resource.transferSpec.objectConditions.matchGlob resource.transferSpec.objectConditions.maxTimeElapsedSinceLastModification resource.transferSpec.objectConditions.minTimeElapsedSinceLastModification resource.transferSpec.posixDataSink.rootDirectory resource.transferSpec.posixDataSource.rootDirectory resource.transferSpec.sinkAgentPoolName resource.transferSpec.sourceAgentPoolName resource.transferSpec.transferManifest.location resource.transferSpec.transferOptions.deleteObjectsFromSourceAfterTransfer resource.transferSpec.transferOptions.deleteObjectsUniqueInSink resource.transferSpec.transferOptions.metadataOptions.acl resource.transferSpec.transferOptions.metadataOptions.gid resource.transferSpec.transferOptions.metadataOptions.kmsKey resource.transferSpec.transferOptions.metadataOptions.mode resource.transferSpec.transferOptions.metadataOptions.storageClass resource.transferSpec.transferOptions.metadataOptions.symlink resource.transferSpec.transferOptions.metadataOptions.temporaryHold resource.transferSpec.transferOptions.metadataOptions.timeCreated resource.transferSpec.transferOptions.metadataOptions.uid resource.transferSpec.transferOptions.overwriteObjectsAlreadyExistingInSink resource.transferSpec.transferOptions.overwriteWhen What's next Learn more about Organization Policy Service .
- Create the constraint Save the following file as constraint-transfer-job.yaml : name: organizations/ ORGANIZATION ID /customConstraints/custom.restrictLogging resourceTypes: - storagetransfer.googleapis.com/TransferJob methodTypes: - CREATE condition: resource.loggingConfig.logActions.size () > 0 && resource.loggingConfig.logActionStates.size () > 0 actionType: ALLOW displayName: Require transfer job logging description: All new transfer jobs must have logging enabled.
- Test the policy Try to create a transfer job where the logging configuration is completely omitted or set to an empty configuration: gcloud transfer jobs create SOURCE DESTINATION \ --name = "transfer-without-logging" The request fails with an error similar to the following: ERROR: ( gcloud.transfer.jobs.create ) FAILED PRECONDITION: Operation denied by org policy: [ "customConstraints/custom.restrictLogging" : "All new transfer jobs must have logging enabled." ] . - '@type' : type.googleapis.com/google.rpc.ErrorInfo domain: iam.googleapis.com metadata: customConstraints: customConstraints/custom.restrictLogging reason: CUSTOM ORG POLICY VIOLATION Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Description Constraint syntax Restrict transfers to only allow Cloud Storage to Cloud Storage name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceCloudStorageToCloudStorageOnly resourceTypes : - storagetransfer.googleapis.com/TransferJob methodTypes : - CREATE - UPDATE condition : "has(resource.transferSpec.gcsDataSource) && has(resource.transferSpec.gcsDataSink)" actionType : ALLOW displayName : Enforce Cloud Storage to Cloud Storage transfers only description : Only allow transfer jobs that move data from Cloud Storage to Cloud Storage.

