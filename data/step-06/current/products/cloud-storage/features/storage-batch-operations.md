---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.886Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Storage batch operations"
feature_slug: "storage-batch-operations"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-roles"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
keywords:
  - "storage"
  - "batch"
  - "operations"
  - "provide"
  - "serverless"
  - "way"
  - "to"
  - "perform"
---

# Storage batch operations

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Storage batch operations provide a serverless way to perform operations on billions of Cloud Storage objects.

## Extended Definition

Storage batch operations provide a serverless way to perform operations on billions of Cloud Storage objects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)

## Supporting Pages

### Storage batch operations audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you call a method, Storage Batch Operations generates an audit log whose category is dependent on the type property of the permission required to perform the method.
- Permission type Methods ADMIN READ google.cloud.storagebatchoperations.v1.StorageBatchOperations.GetJob google.cloud.storagebatchoperations.v1.StorageBatchOperations.ListJobs google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.storagebatchoperations.v1.StorageBatchOperations.CancelJob google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob (LRO) google.cloud.storagebatchoperations.v1.StorageBatchOperations.DeleteJob google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Cloud Identity and Access Management documentation for Storage Batch Operations. google.cloud.storagebatchoperations.v1.StorageBatchOperations The following audit logs are associated with methods belonging to google.cloud.storagebatchoperations.v1.StorageBatchOperations .
- Filter for this method : protoPayload.methodName="google.cloud.storagebatchoperations.v1.StorageBatchOperations.CancelJob" CreateJob Method : google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob Audit log type : Admin activity Permissions : storagebatchoperations.jobs.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob" DeleteJob Method : google.cloud.storagebatchoperations.v1.StorageBatchOperations.DeleteJob Audit log type : Admin activity Permissions : storagebatchoperations.jobs.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.storagebatchoperations.v1.StorageBatchOperations.GetJob" ListJobs Method : google.cloud.storagebatchoperations.v1.StorageBatchOperations.ListJobs Audit log type : Data access Permissions : storagebatchoperations.jobs.list - ADMIN READ Method is a long-running or streaming operation : No.

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Storage Batch A batch of operations to be submitted to Google Cloud Storage using a single RPC request.
- The class provides methods to perform operations on the object.
- Max Length Range Spec Function Produce a new RangeSpec relative to the provided offset and prev , where the RangeSpec will have a maxLength set to the lesser of prev.maxLength and this.maxLength . com. google. cloud. storage.
- This interface allows writing bytes to an Appendable Upload, and provides methods to close this channel -- optionally finalizing the upload. com. google. cloud. storage.

### IAM roles for Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- Source ID: `site-docs-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Bucket cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig firebase.projects.get monitoring.timeSeries.create orgpolicy.policy.get recommender. iamPolicyInsights. recommender. iamPolicyInsights. get recommender. iamPolicyInsights. list recommender. iamPolicyInsights. update recommender. iamPolicyRecommendations. recommender. iamPolicyRecommendations. get recommender. iamPolicyRecommendations. list recommender. iamPolicyRecommendations. update recommender. storageBucketSoftDeleteInsights. recommender. storageBucketSoftDeleteInsights. get recommender. storageBucketSoftDeleteInsights. list recommender. storageBucketSoftDeleteInsights. update recommender. storageBucketSoftDeleteRecommendations. recommender. storageBucketSoftDeleteRecommendations. get recommender. storageBucketSoftDeleteRecommendations. list recommender. storageBucketSoftDeleteRecommendations. update resourcemanager. hierarchyNodes. listEffectiveTags resourcemanager.projects.get resourcemanager.projects.list storage.anywhereCaches. storage.anywhereCaches.create storage.anywhereCaches.disable storage.anywhereCaches.get storage.anywhereCaches.list storage.anywhereCaches.pause storage.anywhereCaches.resume storage.anywhereCaches.update storage.bucketOperations. storage. bucketOperations. cancel storage.bucketOperations.get storage.bucketOperations.list storage.buckets. storage.buckets.create storage. buckets. createTagBinding storage.buckets.delete storage. buckets. deleteTagBinding storage. buckets. enableObjectRetention storage.buckets.get storage.buckets.getIamPolicy storage.buckets.getIpFilter storage. buckets. getObjectInsights storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage.buckets.relocate storage.buckets.restore storage.buckets.setIamPolicy storage.buckets.setIpFilter storage.buckets.update storage. buckets. viewIntelligenceDetails storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.intelligenceConfigs. storage. intelligenceConfigs. get storage. intelligenceConfigs. update storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects. storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.getIamPolicy storage.objects.list storage.objects.move storage. objects. overrideUnlockedRetention storage.objects.restore storage.objects.setIamPolicy storage.objects.setRetention storage.objects.update storage.objects.updateContext storagebatchoperations. storagebatchoperations. bucketOperations. get storagebatchoperations. bucketOperations. list storagebatchoperations. jobs. cancel storagebatchoperations. jobs. create storagebatchoperations. jobs. delete storagebatchoperations. jobs. get storagebatchoperations. jobs. list storagebatchoperations. locations. get storagebatchoperations. locations. list storagebatchoperations. operations. cancel storagebatchoperations. operations. delete storagebatchoperations. operations. get storagebatchoperations. operations. list Storage Bucket Viewer Beta ( roles/ storage.bucketViewer ) Grants permission to view buckets and their metadata, excluding IAM policies. storage.buckets.get storage.buckets.list Storage Editor ( roles/ storage.editor ) Editor role for storage resourcemanager.projects.get resourcemanager.projects.list storage.buckets.create storage.buckets.delete storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage. buckets. viewIntelligenceDetails storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.hmacKeys. storage.hmacKeys.create storage.hmacKeys.delete storage.hmacKeys.get storage.hmacKeys.list storage.hmacKeys.update storage. intelligenceConfigs. get Storage Folder Admin ( roles/ storage.folderAdmin ) Grants full control over folders and objects, including listing, creating, viewing, and deleting objects. orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects. storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.getIamPolicy storage.objects.list storage.objects.move storage. objects. overrideUnlockedRetention storage.objects.restore storage.objects.setIamPolicy storage.objects.setRetention storage.objects.update storage.objects.updateContext Storage Legacy Bucket Owner ( roles/ storage.legacyBucketOwner ) Grants permission to create, overwrite, and delete objects; list objects in a bucket and read object metadata, excluding allow policies, when listing; and read and edit bucket metadata, including allow policies.
- The storagebatchoperations.jobs. and storagebatchoperations.operations. permissions allow you to create and manage storage batch operations jobs .
- Role Permissions Storage Insights Admin ( roles/ storageinsights.admin ) Full access to Storage Insights resources. resourcemanager.projects.get resourcemanager.projects.list storageinsights. storageinsights. datasetConfigs. create storageinsights. datasetConfigs. delete storageinsights. datasetConfigs. get storageinsights. datasetConfigs. linkDataset storageinsights. datasetConfigs. list storageinsights. datasetConfigs. unlinkDataset storageinsights. datasetConfigs. update storageinsights.locations.get storageinsights.locations.list storageinsights. operations. cancel storageinsights. operations. delete storageinsights.operations.get storageinsights. operations. list storageinsights. reportConfigs. create storageinsights. reportConfigs. delete storageinsights. reportConfigs. get storageinsights. reportConfigs. list storageinsights. reportConfigs. update storageinsights. reportDetails. get storageinsights. reportDetails. list Storage Insights Viewer ( roles/ storageinsights.viewer ) Read-only access to Storage Insights resources. resourcemanager.projects.get resourcemanager.projects.list storageinsights. datasetConfigs. get storageinsights. datasetConfigs. list storageinsights.locations. storageinsights.locations.get storageinsights.locations.list storageinsights.operations.get storageinsights. operations. list storageinsights. reportConfigs. get storageinsights. reportConfigs. list storageinsights. reportDetails. storageinsights. reportDetails. get storageinsights. reportDetails. list Storage Insights Analyst ( roles/ storageinsights.analyst ) Data access to Storage Insights. resourcemanager.projects.get resourcemanager.projects.list storageinsights. datasetConfigs. get storageinsights. datasetConfigs. linkDataset storageinsights. datasetConfigs. list storageinsights. datasetConfigs. unlinkDataset storageinsights.locations. storageinsights.locations.get storageinsights.locations.list storageinsights.operations.get storageinsights. operations. list storageinsights. reportConfigs. get storageinsights. reportConfigs. list storageinsights. reportDetails. storageinsights. reportDetails. get storageinsights. reportDetails. list Service agent roles Service agent roles should only be granted to service agents .
- Lowest-level resources where you can grant this role: Bucket storage.anywhereCaches. storage.anywhereCaches.create storage.anywhereCaches.disable storage.anywhereCaches.get storage.anywhereCaches.list storage.anywhereCaches.pause storage.anywhereCaches.resume storage.anywhereCaches.update storage.bucketOperations. storage. bucketOperations. cancel storage.bucketOperations.get storage.bucketOperations.list storage. buckets. createTagBinding storage. buckets. deleteTagBinding storage. buckets. enableObjectRetention storage.buckets.get storage.buckets.getIamPolicy storage.buckets.getIpFilter storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage.buckets.relocate storage.buckets.restore storage.buckets.setIamPolicy storage.buckets.setIpFilter storage.buckets.update storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.list storage.objects.restore storage.objects.setRetention storage.objects.updateContext Storage Legacy Bucket Reader ( roles/ storage.legacyBucketReader ) Grants permission to list a bucket's contents and read bucket metadata, excluding allow policies.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Note: Using either the trace or debug severity levels when file caching is enabled can result in performance degradation due to logging overhead and should only be used temporarily such as during troubleshooting. off : disables all logging. error : contains messages about serious issues that prevent Cloud Storage FUSE from completing an operation, or indicate a failure such as mount failures, permission errors, and critical input/output (I/O) errors. warning : contains messages indicating potential issues that aren't critical but can lead to issues if not addressed.
- For more information, see Automated configuration values for high-performance machine types . gcsfuse CLI command structure The following example shows the structure of the gcsfuse command, including required commands and optional gcsfuse options. gcsfuse GLOBAL OPTIONS BUCKET NAME MOUNT POINT Replace the following: GLOBAL OPTIONS are the gcsfuse options that control how the mount is set up and how Cloud Storage FUSE behaves.
- This severity level also includes the information provided in the info , warning , and error severity levels. trace : contains granular details about each Cloud Storage FUSE operation and function call, outlining the gcsfuse interaction with the kernel FUSE driver and Cloud Storage.
- A path, for example: /etc/gcsfuse.yaml . "" --profile Applies a predefined, optimized set of Cloud Storage FUSE configurations for caching, threading, and buffer sizes to help you achieve high performance for a specific workload type, such as training, serving, and checkpointing.

