---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.665Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Pub/Sub notifications for external-to-Cloud Storage transfer jobs"
feature_slug: "pub-sub-notifications-for-external-to-cloud-storage-transfer-jobs"
latest_feature_date: "2020-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/event-driven-google"
  - "https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication"
  - "https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location"
keywords:
  - "pub"
  - "sub"
  - "notifications"
  - "external"
  - "storage"
  - "transfer"
  - "jobs"
  - "now"
---

# Pub/Sub notifications for external-to-Cloud Storage transfer jobs

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

The service now supports Pub/Sub notifications for transfer jobs that move data from external cloud providers to Cloud Storage.

## Extended Definition

The service now supports Pub/Sub notifications for transfer jobs that move data from external cloud providers to Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google)
- [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)
- [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location)

## Supporting Pages

### "Move your Cloud Storage data to another location \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location)
- Source ID: `site-docs-root`
- Final score: 90
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
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Storage Transfer Service can listen to event notifications in Google Cloud to automatically transfer data that has been added or updated in a Cloud Storage bucket.
- Event-driven transfers from Cloud Storage use Pub/Sub notifications to know when objects in the source bucket have been modified or added.
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // Google Cloud Storage source bucket name // gcsSourceBucket = 'my-gcs-source-bucket' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // The subscription ID to a Pubsub queue to track // pubsubId = 'projects/PROJECT NAME/subscriptions/SUBSCRIPTION ID' // Creates a client const client = new StorageTransferServiceClient (); / Creates an event driven transfer that tracks a Pubsub subscription. / async function createEventDrivenGcsTransfer () { const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , status : ' ENABLED ' , transferSpec : { gcsDataSource : { bucketName : gcsSourceBucket , }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, eventStream : { name : pubsubId , }, }, }); console . log ( Created an event driven transfer from ' ${ gcsSourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } createEventDrivenGcsTransfer (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- The response shows the current operation, the job start time, the amount of data transferred, skipped bytes, and error counts. gcloud transfer jobs monitor JOB NAME To retrieve the current operation name: gcloud transfer jobs describe JOB NAME --format = "value(latestOperationName)" To list current and completed operations: gcloud transfer operations list --job-names = JOB NAME To see details about an operation: gcloud transfer operations describe OPERATION NAME Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Use cross-bucket replication \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Storage Transfer Service service agent or user service account needs the following permissions to replicate your objects and set up Pub/Sub notifications for your source bucket: Required permissions The following permissions must be granted on the source project: pubsub.topics.create pubsub.subscriptions.create pubsub.subscriptions.consume The following permissions must be granted on the source bucket: storage.buckets.get storage.buckets.update storage.objects.get The following permissions must be granted on the destination bucket: storage.buckets.get storage.objects.create storage.objects.get These permissions can be granted through custom roles or by granting all of the following predefined roles : Pub/Sub Editor ( roles/pubsub.editor ) role on the source project Storage Legacy Bucket Owner ( roles/storage.legacyBucketOwner ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the source bucket Storage Legacy Bucket Writer ( roles/storage.legacyBucketWriter ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the destination bucket Grant required roles for Pub/Sub Cloud Storage uses a Google-managed service agent to manage Pub/Sub notifications.
- Use cURL to call the Storage Transfer Service REST API with a transferJobs.list request: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storagetransfer.googleapis.com/v1/transferJobs" View a replication job Console For Google Cloud console instructions on how to view a replication job, refer to View a replication job using the Google Cloud console .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use cross-bucket replication: storagetransfer.jobs.create storagetransfer.jobs.delete storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.jobs.run storagetransfer.jobs.update For instructions on granting roles on buckets, see Use IAM with buckets .
- Use cURL to call the Storage Transfer Service REST API with a transferJobs.create request: curl -X POST --data-binary @ JSON FILE NAME \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storagetransfer.googleapis.com/v1/transferJobs" Replace the following: JSON FILE NAME is the name of the JSON file you created in Step 2.

