---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.666Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Custom job IDs in Storage Transfer Service"
feature_slug: "custom-job-ids-in-storage-transfer-service"
latest_feature_date: "2020-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/custom-constraints"
  - "https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs"
  - "https://docs.cloud.google.com/storage-transfer/docs/access-control"
keywords:
  - "custom"
  - "job"
  - "ids"
  - "storage"
  - "transfer"
  - "jobs"
  - "can"
  - "now"
---

# Custom job IDs in Storage Transfer Service

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service jobs can now be created with custom job identifiers.

## Extended Definition

Storage Transfer Service jobs can now be created with custom job identifiers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)
- [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs)
- [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control)

## Supporting Pages

### "Custom organization policy constraints \_|\_ Storage Transfer Service \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Restrict transfers to only allow Cloud Storage to Cloud Storage name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceCloudStorageToCloudStorageOnly resourceTypes : - storagetransfer.googleapis.com/TransferJob methodTypes : - CREATE - UPDATE condition : "has(resource.transferSpec.gcsDataSource) && has(resource.transferSpec.gcsDataSink)" actionType : ALLOW displayName : Enforce Cloud Storage to Cloud Storage transfers only description : Only allow transfer jobs that move data from Cloud Storage to Cloud Storage.
- Restrict transfers to a specific list of approved source buckets name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictSourceBuckets resourceTypes : - storagetransfer.googleapis.com/TransferJob methodTypes : - CREATE - UPDATE condition : "!(resource.transferSpec.gcsDataSource.bucketName in ['approved-bucket-1', 'approved-bucket-2'])" actionType : DENY displayName : Restrict source buckets description : Deny transfer jobs that do not use an approved source bucket.
- Create the constraint Save the following file as constraint-transfer-job.yaml : name: organizations/ ORGANIZATION ID /customConstraints/custom.restrictLogging resourceTypes: - storagetransfer.googleapis.com/TransferJob methodTypes: - CREATE condition: resource.loggingConfig.logActions.size () > 0 && resource.loggingConfig.logActionStates.size () > 0 actionType: ALLOW displayName: Require transfer job logging description: All new transfer jobs must have logging enabled.
- Test the policy Try to create a transfer job where the logging configuration is completely omitted or set to an empty configuration: gcloud transfer jobs create SOURCE DESTINATION \ --name = "transfer-without-logging" The request fails with an error similar to the following: ERROR: ( gcloud.transfer.jobs.create ) FAILED PRECONDITION: Operation denied by org policy: [ "customConstraints/custom.restrictLogging" : "All new transfer jobs must have logging enabled." ] . - '@type' : type.googleapis.com/google.rpc.ErrorInfo domain: iam.googleapis.com metadata: customConstraints: customConstraints/custom.restrictLogging reason: CUSTOM ORG POLICY VIOLATION Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.

### "Monitor transfer jobs \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource details Monitored resource name: storage transfer job Resource field / Target field REST resource and field used to populate this field Description project id TransferJob.project id The identifier of the project associated with this resource job id TransferJob.name The globally unique name of the transfer location Will always be set to global since transfer jobs are not associated with a region or location The location of the transfer job Metric details All Storage Transfer Service metrics are delta metrics .
- Home Documentation Storage Storage Transfer Service Send feedback Monitor transfer jobs Stay organized with collections Save and categorize content based on your preferences.
- Cloud Monitoring automatically collects and stores information for your Storage Transfer Service jobs.
- You can use Cloud Monitoring to chart and monitor a range of metrics: The number of found objects and bytes The number of copied objects and bytes The number of deleted objects and bytes The number of errors, and the associated error codes Cloud Monitoring is automatically enabled for Storage Transfer Service.

### "Permissions and roles \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This role doesn't allow transfer to be deleted, so that auditors or security personnel can view a fully preserved record of past transfers. resourcemanager.projects.get resourcemanager.projects.list storagetransfer.agentpools.create storagetransfer.agentpools.get storagetransfer.agentpools.list storagetransfer.agentpools.report storagetransfer.agentpools.update storagetransfer.jobs.create storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.jobs.run storagetransfer.jobs.update storagetransfer.operations. storagetransfer.projects.getServiceAccount Storage Transfer Viewer ( roles/storagetransfer.viewer ) Provides permissions to list and get jobs and transfer operations within the project.
- This role is most suitable for users or internal teams that audit transfer usage, such as security, compliance, or business unit leaders. resourcemanager.projects.get resourcemanager.projects.list storagetransfer.agentpools.get storagetransfer.agentpools.list storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.operations.get storagetransfer.operations.list storagetransfer.projects.getServiceAccount Storage Transfer Agent ( roles/storagetransfer.transferAgent ) Gives transfer agents the Storage Transfer Service permissions required to complete a transfer.
- Role comparison You can assign the following project role or Storage Transfer Service predefined roles: Capability Editor ( roles/editor ) Storage Transfer ( roles/storagetransfer. ) Admin ( admin ) User ( user ) Viewer ( viewer ) List/get jobs Create jobs Run jobs Update jobs Delete jobs List/get transfer operations Pause/resume transfer operations Read Google service account details that are used by Storage Transfer Service to access Cloud Storage buckets.
- Grant this role to the Storage Transfer Service service agent . pubsub.subscriptions.consume pubsub.subscriptions.create pubsub.subscriptions.delete pubsub.subscriptions.get pubsub.subscriptions.update pubsub.topics.attachSubscription pubsub.topics.create pubsub.topics.delete pubsub.topics.get pubsub.topics.publish pubsub.topics.update Custom roles You can create and apply custom IAM roles to meet your organization's access requirements.

