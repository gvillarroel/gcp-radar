---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.645Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Object-level detailed logging for Storage Transfer Service transfers"
feature_slug: "object-level-detailed-logging-for-storage-transfer-service-transfers"
latest_feature_date: "2022-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/custom-constraints"
  - "https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions"
  - "https://docs.cloud.google.com/storage-transfer/docs/managed-folders"
keywords:
  - "object"
  - "level"
  - "detailed"
  - "logging"
  - "storage"
  - "transfer"
  - "transfers"
  - "now"
---

# Object-level detailed logging for Storage Transfer Service transfers

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now provides GA detailed per-object logging in Cloud Logging for transfers involving AWS S3, Azure Blob Storage, ADLS Gen 2, and Cloud Storage.

## Extended Definition

Storage Transfer Service now provides GA detailed per-object logging in Cloud Logging for transfers involving AWS S3, Azure Blob Storage, ADLS Gen 2, and Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)
- [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)
- [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders)

## Supporting Pages

### "Agent-based transfer permissions \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission Description storage.objects.create Allows the agent account to write Cloud Storage objects during transfer. storage.objects.get Allows the agent account to read object data and metadata. storage.objects.list Allows the agent account to list objects in the Cloud Storage bucket. storage.objects.delete Required if your transfer is configured to overwrite or delete objects in the sink; for example, if overwriteObjectsAlreadyExistingInSink or deleteObjectsUniqueInSink are set in your transfer's transferOptions configuration.
- Permission Description storage.objects.create Allows the agent account to write Cloud Storage objects during transfer. storage.objects.get Allows the agent account to read object data and metadata. storage.objects.list Allows the agent account to list objects in the Cloud Storage bucket. storage.objects.delete Required if your transfer is configured to delete objects in the intermediate bucket after the transfer is complete.
- Permission Description storage.objects.create Allows the agent account to write transfer logs and transfer-related metadata to the Cloud Storage source bucket. storage.objects.get Allows the agent account to read object data and metadata. storage.objects.list Allows the agent account to list objects in the Cloud Storage bucket. storage.objects.delete Required if your transfer is configured to delete objects from the source.
- To the user / user-managed service account: roles/owner roles/storagetransfer.admin roles/storagetransfer.transferAgent roles/storage.objectAdmin roles/pubsub.editor To the Google-managed service account: roles/storage.admin roles/storagetransfer.serviceAgent For instructions on installing the gcloud CLI, see the gcloud quickstart .

### "Custom organization policy constraints \_|\_ Storage Transfer Service \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field storagetransfer.googleapis.com/TransferJob resource.description resource.eventStream.eventStreamExpirationTime resource.eventStream.eventStreamStartTime resource.eventStream.name resource.latestOperationName resource.loggingConfig.enableOnpremGcsTransferLogs resource.loggingConfig.logActions resource.loggingConfig.logActionStates resource.name resource.notificationConfig.eventTypes resource.notificationConfig.payloadFormat resource.notificationConfig.pubsubTopic resource.projectId resource.replicationSpec.gcsDataSink.bucketName resource.replicationSpec.gcsDataSink.managedFolderTransferEnabled resource.replicationSpec.gcsDataSink.path resource.replicationSpec.gcsDataSource.bucketName resource.replicationSpec.gcsDataSource.managedFolderTransferEnabled resource.replicationSpec.gcsDataSource.path resource.replicationSpec.objectConditions.excludePrefixes resource.replicationSpec.objectConditions.includePrefixes resource.replicationSpec.objectConditions.lastModifiedBefore resource.replicationSpec.objectConditions.lastModifiedSince resource.replicationSpec.objectConditions.matchGlob resource.replicationSpec.objectConditions.maxTimeElapsedSinceLastModification resource.replicationSpec.objectConditions.minTimeElapsedSinceLastModification resource.replicationSpec.transferOptions.deleteObjectsFromSourceAfterTransfer resource.replicationSpec.transferOptions.deleteObjectsUniqueInSink resource.replicationSpec.transferOptions.metadataOptions.acl resource.replicationSpec.transferOptions.metadataOptions.gid resource.replicationSpec.transferOptions.metadataOptions.kmsKey resource.replicationSpec.transferOptions.metadataOptions.mode resource.replicationSpec.transferOptions.metadataOptions.storageClass resource.replicationSpec.transferOptions.metadataOptions.symlink resource.replicationSpec.transferOptions.metadataOptions.temporaryHold resource.replicationSpec.transferOptions.metadataOptions.timeCreated resource.replicationSpec.transferOptions.metadataOptions.uid resource.replicationSpec.transferOptions.overwriteObjectsAlreadyExistingInSink resource.replicationSpec.transferOptions.overwriteWhen resource.schedule.endTimeOfDay resource.schedule.repeatInterval resource.schedule.scheduleEndDate resource.schedule.scheduleStartDate resource.schedule.startTimeOfDay resource.serviceAccount resource.status resource.transferSpec.awsS3CompatibleDataSource.bucketName resource.transferSpec.awsS3CompatibleDataSource.endpoint resource.transferSpec.awsS3CompatibleDataSource.path resource.transferSpec.awsS3CompatibleDataSource.region resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.authMethod resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.listApi resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.protocol resource.transferSpec.awsS3CompatibleDataSource.s3Metadata.requestModel resource.transferSpec.awsS3DataSource.bucketName resource.transferSpec.awsS3DataSource.cloudfrontDomain resource.transferSpec.awsS3DataSource.managedPrivateNetwork resource.transferSpec.awsS3DataSource.path resource.transferSpec.awsS3DataSource.privateNetworkService resource.transferSpec.awsS3DataSource.roleArn resource.transferSpec.azureBlobStorageDataSource.container resource.transferSpec.azureBlobStorageDataSource.federatedIdentityConfig.clientId resource.transferSpec.azureBlobStorageDataSource.federatedIdentityConfig.tenantId resource.transferSpec.azureBlobStorageDataSource.path resource.transferSpec.azureBlobStorageDataSource.privateNetworkService resource.transferSpec.azureBlobStorageDataSource.storageAccount resource.transferSpec.gcsDataSink.bucketName resource.transferSpec.gcsDataSink.managedFolderTransferEnabled resource.transferSpec.gcsDataSink.path resource.transferSpec.gcsDataSource.bucketName resource.transferSpec.gcsDataSource.managedFolderTransferEnabled resource.transferSpec.gcsDataSource.path resource.transferSpec.gcsIntermediateDataLocation.bucketName resource.transferSpec.gcsIntermediateDataLocation.managedFolderTransferEnabled resource.transferSpec.gcsIntermediateDataLocation.path resource.transferSpec.hdfsDataSource.path resource.transferSpec.httpDataSource.listUrl resource.transferSpec.objectConditions.excludePrefixes resource.transferSpec.objectConditions.includePrefixes resource.transferSpec.objectConditions.lastModifiedBefore resource.transferSpec.objectConditions.lastModifiedSince resource.transferSpec.objectConditions.matchGlob resource.transferSpec.objectConditions.maxTimeElapsedSinceLastModification resource.transferSpec.objectConditions.minTimeElapsedSinceLastModification resource.transferSpec.posixDataSink.rootDirectory resource.transferSpec.posixDataSource.rootDirectory resource.transferSpec.sinkAgentPoolName resource.transferSpec.sourceAgentPoolName resource.transferSpec.transferManifest.location resource.transferSpec.transferOptions.deleteObjectsFromSourceAfterTransfer resource.transferSpec.transferOptions.deleteObjectsUniqueInSink resource.transferSpec.transferOptions.metadataOptions.acl resource.transferSpec.transferOptions.metadataOptions.gid resource.transferSpec.transferOptions.metadataOptions.kmsKey resource.transferSpec.transferOptions.metadataOptions.mode resource.transferSpec.transferOptions.metadataOptions.storageClass resource.transferSpec.transferOptions.metadataOptions.symlink resource.transferSpec.transferOptions.metadataOptions.temporaryHold resource.transferSpec.transferOptions.metadataOptions.timeCreated resource.transferSpec.transferOptions.metadataOptions.uid resource.transferSpec.transferOptions.overwriteObjectsAlreadyExistingInSink resource.transferSpec.transferOptions.overwriteWhen What's next Learn more about Organization Policy Service .
- Description Constraint syntax Restrict transfers to only allow Cloud Storage to Cloud Storage name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceCloudStorageToCloudStorageOnly resourceTypes : - storagetransfer.googleapis.com/TransferJob methodTypes : - CREATE - UPDATE condition : "has(resource.transferSpec.gcsDataSource) && has(resource.transferSpec.gcsDataSink)" actionType : ALLOW displayName : Enforce Cloud Storage to Cloud Storage transfers only description : Only allow transfer jobs that move data from Cloud Storage to Cloud Storage.
- Restrict transfers to a specific list of approved source buckets name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSourceBuckets resourceTypes : - storagetransfer.googleapis.com/TransferJob methodTypes : - CREATE - UPDATE condition : "!(resource.transferSpec.gcsDataSource.bucketName in ['approved-bucket-1', 'approved-bucket-2'])" actionType : DENY displayName : Restrict source buckets description : Deny transfer jobs that do not use an approved source bucket.
- Create the constraint Save the following file as constraint-transfer-job.yaml : name: organizations/ ORGANIZATION ID /customConstraints/custom.restrictLogging resourceTypes: - storagetransfer.googleapis.com/TransferJob methodTypes: - CREATE condition: resource.loggingConfig.logActions.size () > 0 && resource.loggingConfig.logActionStates.size () > 0 actionType: ALLOW displayName: Require transfer job logging description: All new transfer jobs must have logging enabled.

### "Transfer Cloud Storage managed folders \_|\_ Storage Transfer Service \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "name" : "transferjobs/ NAME " , "projectId" : " PROJECT ID " , "transferSpec" : { "gcsDataSource" : { "bucketName" : " SOURCE BUCKET " , "path" : " SOURCE PATH " , "managedFolderTransferEnabled" : true }, "gcsDataSink" : { "bucketName" : " DESTINATION BUCKET " , "path" : " DESTINATION PATH " , } }, "status" : "ENABLED" } If the correct managed transfer permissions are not set at the source and the destination, the transfer fails.
- Limitations The following limitations apply to transfers of managed folders: The destination bucket must use uniform bucket-level access .
- When transferring objects between Cloud Storage buckets with Storage Transfer Service, these managed folder permissions can be retained.
- Managed folder transfers do not support the deleteObjectsUniqueInSink or deleteObjectsFromSourceAfterTransfer options.

