---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.646Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service overwriteWhen option"
feature_slug: "storage-transfer-service-overwritewhen-option"
latest_feature_date: "2022-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions"
  - "https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication"
  - "https://docs.cloud.google.com/storage-transfer/docs/custom-constraints"
keywords:
  - "storage"
  - "transfer"
  - "overwritewhen"
  - "option"
  - "now"
  - "supports"
  - "field"
  - "defines"
---

# Storage Transfer Service overwriteWhen option

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports an overwriteWhen field that defines how existing destination files are handled during transfers, including NEVER, DIFFERENT, and ALWAYS overwrite modes.

## Extended Definition

Storage Transfer Service now supports an overwriteWhen field that defines how existing destination files are handled during transfers, including NEVER, DIFFERENT, and ALWAYS overwrite modes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions)
- [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)
- [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)

## Supporting Pages

### TransferOptions \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "overwriteObjectsAlreadyExistingInSink" : boolean , "deleteObjectsUniqueInSink" : boolean , "deleteObjectsFromSourceAfterTransfer" : boolean , "overwriteWhen" : enum ( OverwriteWhen ) , "metadataOptions" : { object ( MetadataOptions ) } } Fields overwriteObjectsAlreadyExistingInSink boolean When to overwrite objects that already exist in the sink.
- JSON representation { "symlink" : enum ( Symlink ) , "mode" : enum ( Mode ) , "gid" : enum ( GID ) , "uid" : enum ( UID ) , "acl" : enum ( Acl ) , "storageClass" : enum ( StorageClass ) , "temporaryHold" : enum ( TemporaryHold ) , "kmsKey" : enum ( KmsKey ) , "timeCreated" : enum ( TimeCreated ) } Fields symlink enum ( Symlink ) Specifies how symlinks should be handled by the transfer.
- Home Documentation Storage Storage Transfer Service Reference Send feedback TransferOptions Stay organized with collections Save and categorize content based on your preferences.
- If unspecified, the default behavior is the same as STORAGE CLASS DESTINATION BUCKET DEFAULT . temporaryHold enum ( TemporaryHold ) Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

### "Use cross-bucket replication \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a JSON file that contains a TransferJob object with an initialized ReplicationSpec resource : Tra nsfer Job { Replica t io n Spec : { "gcsDataSource" : { "bucketName" : " SOURCE BUCKET NAME " }, "gcsDataSink" { "bucketName" : " DESTINATION BUCKET NAME " }, "objectConditions" : { }, "transferOptions" : { "overwriteWhen" : " OVERWRITE OPTION " } } ... } Replace: SOURCE BUCKET NAME with the name of the source bucket that contains the objects you want to replicate.
- The Storage Transfer Service service agent or user service account needs the following permissions to replicate your objects and set up Pub/Sub notifications for your source bucket: Required permissions The following permissions must be granted on the source project: pubsub.topics.create pubsub.subscriptions.create pubsub.subscriptions.consume The following permissions must be granted on the source bucket: storage.buckets.get storage.buckets.update storage.objects.get The following permissions must be granted on the destination bucket: storage.buckets.get storage.objects.create storage.objects.get These permissions can be granted through custom roles or by granting all of the following predefined roles : Pub/Sub Editor ( roles/pubsub.editor ) role on the source project Storage Legacy Bucket Owner ( roles/storage.legacyBucketOwner ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the source bucket Storage Legacy Bucket Writer ( roles/storage.legacyBucketWriter ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the destination bucket Grant required roles for Pub/Sub Cloud Storage uses a Google-managed service agent to manage Pub/Sub notifications.
- Use cURL to call the Storage Transfer Service REST API with a transferJobs.list request: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storagetransfer.googleapis.com/v1/transferJobs" View a replication job Console For Google Cloud console instructions on how to view a replication job, refer to View a replication job using the Google Cloud console .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use cross-bucket replication: storagetransfer.jobs.create storagetransfer.jobs.delete storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.jobs.run storagetransfer.jobs.update For instructions on granting roles on buckets, see Use IAM with buckets .

### "Custom organization policy constraints \_|\_ Storage Transfer Service \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Resource Field storagetransfer.googleapis.com/TransferJob resource.description resource.eventStream.eventStreamExpirationTime resource.eventStream.eventStreamStartTime resource.eventStream.name resource.latestOperationName resource.loggingConfig.enableOnpremGcsTransferLogs resource.loggingConfig.logActions resource.loggingConfig.logActionStates resource.name resource.notificationConfig.eventTypes resource.notificationConfig.payloadFormat resource.notificationConfig.pubsubTopic resource.projectId resource.replicationSpec.gcsDataSink.bucketName resource.replicationSpec.gcsDataSink.managedFolderTransferEnabled resource.replicationSpec.gcsDataSink.path resource.replicationSpec.gcsDataSource.bucketName resource.replicationSpec.gcsDataSource.managedFolderTransferEnabled resource.replicationSpec.gcsDataSource.path resource.replicationSpec.objectConditions.excludePrefixes resource.replicationSpec.objectConditions.includePrefixes resource.replicationSpec.objectConditions.lastModifiedBefore resource.replicationSpec.objectConditions.lastModifiedSince resource.replicationSpec.objectConditions.matchGlob resource.replicationSpec.objectConditions.maxTimeElapsedSinceLastModification resource.replicationSpec.objectConditions.minTimeElapsedSinceLastModification resource.replicationSpec.transferOptions.deleteObjectsFromSourceAfterTransfer resource.replicationSpec.transferOptions.deleteObjectsUniqueInSink resource.replicationSpec.transferOptions.metadataOptions.acl resource.replicationSpec.transferOptions.metadataOptions.gid resource.replicationSpec.transferOptions.metadataOptions.kmsKey resource.replicationSpec.transferOptions.metadataOptions.mode resource.replicationSpec.transferOptions.metadataOptions.storageClass resource.replicationSpec.transferOptions.metadataOptions.symlink resource.replicationSpec.transferOptions.metadataOptions.temporaryHold resource.replicationSpec.transferOptions.metadataOptions.timeCreated resource.replicationSpec.transferOptions.metadataOptions.uid resource.replicationSpec.transferOptions.overwriteObjectsAlreadyExistingInSink resource.replicationSpec.transferOptions.overwriteWhen resource.schedule.endTimeOfDay resource.schedule.repeatInterval resource.schedule.scheduleEndDate resource.schedule.scheduleStartDate resource.schedule.startTimeOfDay resource.serviceAccount resource.status resource.transferSpec.awsS3CompatibleDataSource.bucketName resource.transferSpec.awsS3CompatibleDataSource.endpoint resource.transferSpec.awsS3CompatibleDataSource.path resource.transferSpec.awsS3CompatibleDataSource.region resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.authMethod resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.listApi resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.protocol resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.requestModel resource.transferSpec.awsS3DataSource.bucketName resource.transferSpec.awsS3DataSource.cloudfrontDomain resource.transferSpec.awsS3DataSource.managedPrivateNetwork resource.transferSpec.awsS3DataSource.path resource.transferSpec.awsS3DataSource.privateNetworkService resource.transferSpec.awsS3DataSource.roleArn resource.transferSpec.azureBlobStorageDataSource.container resource.transferSpec.azureBlobStorageDataSource.federatedIdentityConfig.clientId resource.transferSpec.azureBlobStorageDataSource.federatedIdentityConfig.tenantId resource.transferSpec.azureBlobStorageDataSource.path resource.transferSpec.azureBlobStorageDataSource.privateNetworkService resource.transferSpec.azureBlobStorageDataSource.storageAccount resource.transferSpec.gcsDataSink.bucketName resource.transferSpec.gcsDataSink.managedFolderTransferEnabled resource.transferSpec.gcsDataSink.path resource.transferSpec.gcsDataSource.bucketName resource.transferSpec.gcsDataSource.managedFolderTransferEnabled resource.transferSpec.gcsDataSource.path resource.transferSpec.gcsIntermediateDataLocation.bucketName resource.transferSpec.gcsIntermediateDataLocation.managedFolderTransferEnabled resource.transferSpec.gcsIntermediateDataLocation.path resource.transferSpec.hdfsDataSource.path resource.transferSpec.httpDataSource.listUrl resource.transferSpec.objectConditions.excludePrefixes resource.transferSpec.objectConditions.includePrefixes resource.transferSpec.objectConditions.lastModifiedBefore resource.transferSpec.objectConditions.lastModifiedSince resource.transferSpec.objectConditions.matchGlob resource.transferSpec.objectConditions.maxTimeElapsedSinceLastModification resource.transferSpec.objectConditions.minTimeElapsedSinceLastModification resource.transferSpec.posixDataSink.rootDirectory resource.transferSpec.posixDataSource.rootDirectory resource.transferSpec.sinkAgentPoolName resource.transferSpec.sourceAgentPoolName resource.transferSpec.transferManifest.location resource.transferSpec.transferOptions.deleteObjectsFromSourceAfterTransfer resource.transferSpec.transferOptions.deleteObjectsUniqueInSink resource.transferSpec.transferOptions.metadataOptions.acl resource.transferSpec.transferOptions.metadataOptions.gid resource.transferSpec.transferOptions.metadataOptions.kmsKey resource.transferSpec.transferOptions.metadataOptions.mode resource.transferSpec.transferOptions.metadataOptions.storageClass resource.transferSpec.transferOptions.metadataOptions.symlink resource.transferSpec.transferOptions.metadataOptions.temporaryHold resource.transferSpec.transferOptions.metadataOptions.timeCreated resource.transferSpec.transferOptions.metadataOptions.uid resource.transferSpec.transferOptions.overwriteObjectsAlreadyExistingInSink resource.transferSpec.transferOptions.overwriteWhen What's next Learn more about Organization Policy Service .
- Description Constraint syntax Restrict transfers to only allow Cloud Storage to Cloud Storage name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceCloudStorageToCloudStorageOnly resourceTypes : - storagetransfer.googleapis.com/TransferJob methodTypes : - CREATE - UPDATE condition : "has(resource.transferSpec.gcsDataSource) && has(resource.transferSpec.gcsDataSink)" actionType : ALLOW displayName : Enforce Cloud Storage to Cloud Storage transfers only description : Only allow transfer jobs that move data from Cloud Storage to Cloud Storage.
- Restrict transfers to a specific list of approved source buckets name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSourceBuckets resourceTypes : - storagetransfer.googleapis.com/TransferJob methodTypes : - CREATE - UPDATE condition : "!(resource.transferSpec.gcsDataSource.bucketName in ['approved-bucket-1', 'approved-bucket-2'])" actionType : DENY displayName : Restrict source buckets description : Deny transfer jobs that do not use an approved source bucket.
- Create the constraint Save the following file as constraint-transfer-job.yaml : name: organizations/ ORGANIZATION ID /customConstraints/custom.restrictLogging resourceTypes: - storagetransfer.googleapis.com/TransferJob methodTypes: - CREATE condition: resource.loggingConfig.logActions.size () > 0 && resource.loggingConfig.logActionStates.size () > 0 actionType: ALLOW displayName: Require transfer job logging description: All new transfer jobs must have logging enabled.

