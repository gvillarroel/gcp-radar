---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.904Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bulk disable soft delete"
feature_slug: "bulk-disable-soft-delete"
latest_feature_date: "2024-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-roles"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob"
keywords:
  - "bulk"
  - "disable"
  - "soft"
  - "delete"
  - "can"
  - "be"
  - "disabled"
  - "for"
---

# Bulk disable soft delete

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Soft delete can be disabled for multiple buckets at once or for all buckets in a project.

## Extended Definition

Soft delete can be disabled for multiple buckets at once or for all buckets in a project.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob)

## Supporting Pages

### "Class SoftDeletePolicy (3.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://cloud.google.com/storage/docs/soft-delete Parameters Name Description bucket Bucket Bucket for which this instance is the policy. retention duration seconds int (Optional) The period of time in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. effective time datetime.datetime (Optional) When the bucket's soft delete policy is effective.
- Returns Type Description int or NoneType The period of time in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted; Or None if the property is not set.
- Returns Type Description SoftDeletePolicy Instance created from resource. fromkeys fromkeys ( value = None , / ) Create a new dictionary with keys from iterable and values set to value. get get ( key , default = None , / ) Return the value for key if key is in the dictionary, else default. items items () API documentation for storage.bucket.SoftDeletePolicy.items method. keys keys () API documentation for storage.bucket.SoftDeletePolicy.keys method. pop pop ( k [, d ]) If the key is not found, return the default if given; otherwise, raise a KeyError. popitem popitem () Remove and return a (key, value) pair as a 2-tuple.
- Return the value for key if key is in the dictionary, else default. update update ([ E , ] F ) If E is present and has a .keys() method, then does: for k in E: D[k] = E[k] If E is present and lacks a .keys() method, then does: for k, v in E: D[k] = v In either case, this is followed by: for k in F: D[k] = F[k] values values () API documentation for storage.bucket.SoftDeletePolicy.values method.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- 400: Non-empty Filter Issue : When you update the Storage Intelligence configuration for a resource, you might receive this error and the message Non-empty filter cannot be specified for INHERIT or DISABLED edition configuration.
- Solution : Uniform bucket-level access can't be disabled if there are managed folders in the bucket.
- Issue : I can't disable uniform bucket-level access because there are managed folders in my bucket.
- This portion of the bulk delete action requires the storage.objects.list permission, which might be surprising, given that the goal is object deletion, which normally requires only the storage.objects.delete permission.

### IAM roles for Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Bucket cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig firebase.projects.get monitoring.timeSeries.create orgpolicy.policy.get recommender. iamPolicyInsights. recommender. iamPolicyInsights. get recommender. iamPolicyInsights. list recommender. iamPolicyInsights. update recommender. iamPolicyRecommendations. recommender. iamPolicyRecommendations. get recommender. iamPolicyRecommendations. list recommender. iamPolicyRecommendations. update recommender. storageBucketSoftDeleteInsights. recommender. storageBucketSoftDeleteInsights. get recommender. storageBucketSoftDeleteInsights. list recommender. storageBucketSoftDeleteInsights. update recommender. storageBucketSoftDeleteRecommendations. recommender. storageBucketSoftDeleteRecommendations. get recommender. storageBucketSoftDeleteRecommendations. list recommender. storageBucketSoftDeleteRecommendations. update resourcemanager. hierarchyNodes. listEffectiveTags resourcemanager.projects.get resourcemanager.projects.list storage.anywhereCaches. storage.anywhereCaches.create storage.anywhereCaches.disable storage.anywhereCaches.get storage.anywhereCaches.list storage.anywhereCaches.pause storage.anywhereCaches.resume storage.anywhereCaches.update storage.bucketOperations. storage. bucketOperations. cancel storage.bucketOperations.get storage.bucketOperations.list storage.buckets. storage.buckets.create storage. buckets. createTagBinding storage.buckets.delete storage. buckets. deleteTagBinding storage. buckets. enableObjectRetention storage.buckets.get storage.buckets.getIamPolicy storage.buckets.getIpFilter storage. buckets. getObjectInsights storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage.buckets.relocate storage.buckets.restore storage.buckets.setIamPolicy storage.buckets.setIpFilter storage.buckets.update storage. buckets. viewIntelligenceDetails storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.intelligenceConfigs. storage. intelligenceConfigs. get storage. intelligenceConfigs. update storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects. storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.getIamPolicy storage.objects.list storage.objects.move storage. objects. overrideUnlockedRetention storage.objects.restore storage.objects.setIamPolicy storage.objects.setRetention storage.objects.update storage.objects.updateContext storagebatchoperations. storagebatchoperations. bucketOperations. get storagebatchoperations. bucketOperations. list storagebatchoperations. jobs. cancel storagebatchoperations. jobs. create storagebatchoperations. jobs. delete storagebatchoperations. jobs. get storagebatchoperations. jobs. list storagebatchoperations. locations. get storagebatchoperations. locations. list storagebatchoperations. operations. cancel storagebatchoperations. operations. delete storagebatchoperations. operations. get storagebatchoperations. operations. list Storage Bucket Viewer Beta ( roles/ storage.bucketViewer ) Grants permission to view buckets and their metadata, excluding IAM policies. storage.buckets.get storage.buckets.list Storage Editor ( roles/ storage.editor ) Editor role for storage resourcemanager.projects.get resourcemanager.projects.list storage.buckets.create storage.buckets.delete storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage. buckets. viewIntelligenceDetails storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.hmacKeys. storage.hmacKeys.create storage.hmacKeys.delete storage.hmacKeys.get storage.hmacKeys.list storage.hmacKeys.update storage. intelligenceConfigs. get Storage Folder Admin ( roles/ storage.folderAdmin ) Grants full control over folders and objects, including listing, creating, viewing, and deleting objects. orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects. storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.getIamPolicy storage.objects.list storage.objects.move storage. objects. overrideUnlockedRetention storage.objects.restore storage.objects.setIamPolicy storage.objects.setRetention storage.objects.update storage.objects.updateContext Storage Legacy Bucket Owner ( roles/ storage.legacyBucketOwner ) Grants permission to create, overwrite, and delete objects; list objects in a bucket and read object metadata, excluding allow policies, when listing; and read and edit bucket metadata, including allow policies.
- Lowest-level resources where you can grant this role: Bucket resourcemanager.projects.get resourcemanager.projects.list storage.folders.get storage.folders.list storage.managedFolders.get storage.managedFolders.list storage.objects.get storage.objects.list Storage Viewer ( roles/ storage.viewer ) Viewer role for storage resourcemanager.projects.get resourcemanager.projects.list storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage. buckets. viewIntelligenceDetails storage.folders.get storage.folders.list storage.hmacKeys.get storage.hmacKeys.list storage. intelligenceConfigs. get Storage Annotation Generator Service Beta ( roles/ storage.annotationGeneratorService ) Grants all permissions needed to generate annotations for objects in a bucket. storage.objects.createContext storage.objects.deleteContext storage.objects.get storage.objects.list storage.objects.update storage.objects.updateContext Storage Express Mode Service Input Beta ( roles/ storage.expressModeServiceInput ) Grants permission to Express Mode service accounts at a managed folder so they can create objects but not read them on input folders. storage.objects.create storage.objects.delete storage.objects.list storage.objects.update Storage Express Mode Service Output Beta ( roles/ storage.expressModeServiceOutput ) Grants permission to EasyGCP service accounts at a managed folder so they can read objects but not write them on output folders. storage.objects.delete storage.objects.get storage.objects.list Storage Express Mode User Access Beta ( roles/ storage.expressModeUserAccess ) Grants permission to Express Mode accounts at the project level so they can read, list, create and delete any object in any of their buckets in Express Mode. orgpolicy.policy.get storage.buckets.get storage.buckets.list storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.restore storage.objects.update Storage HMAC Key Admin ( roles/ storage.hmacKeyAdmin ) Full control of Cloud Storage HMAC keys. firebase.projects.get orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.hmacKeys. storage.hmacKeys.create storage.hmacKeys.delete storage.hmacKeys.get storage.hmacKeys.list storage.hmacKeys.update Storage Insights Collector Service ( roles/ storage.insightsCollectorService ) Read-only access to Cloud Storage Inventory metadata for Storage Insights. resourcemanager.projects.get resourcemanager.projects.list storage.buckets.get storage. buckets. getObjectInsights Note: Consider the following for permissions: The orgpolicy.policy.get permission allows principals to know the organization policy constraints that a project is subject to.
- Within Google Cloud more generally, principals with this role can perform administrative tasks such as changing principals' roles for the project or changing billing. storage.buckets.create storage.buckets.delete storage.buckets.list storage.buckets.createTagBinding storage.buckets.deleteTagBinding storage.buckets.getIpFilter storage.buckets.listEffectiveTags storage.buckets.listTagBindings storage.buckets.setIpFilter storage.hmacKeys. storage.intelligenceConfigs.get storage.intelligenceConfigs.update Modifiable behavior Principals granted basic roles often have additional access to a project's buckets and objects due to convenience values .
- Role Permissions Storage Insights Admin ( roles/ storageinsights.admin ) Full access to Storage Insights resources. resourcemanager.projects.get resourcemanager.projects.list storageinsights. storageinsights. datasetConfigs. create storageinsights. datasetConfigs. delete storageinsights. datasetConfigs. get storageinsights. datasetConfigs. linkDataset storageinsights. datasetConfigs. list storageinsights. datasetConfigs. unlinkDataset storageinsights. datasetConfigs. update storageinsights.locations.get storageinsights.locations.list storageinsights. operations. cancel storageinsights. operations. delete storageinsights.operations.get storageinsights. operations. list storageinsights. reportConfigs. create storageinsights. reportConfigs. delete storageinsights. reportConfigs. get storageinsights. reportConfigs. list storageinsights. reportConfigs. update storageinsights. reportDetails. get storageinsights. reportDetails. list Storage Insights Viewer ( roles/ storageinsights.viewer ) Read-only access to Storage Insights resources. resourcemanager.projects.get resourcemanager.projects.list storageinsights. datasetConfigs. get storageinsights. datasetConfigs. list storageinsights.locations. storageinsights.locations.get storageinsights.locations.list storageinsights.operations.get storageinsights. operations. list storageinsights. reportConfigs. get storageinsights. reportConfigs. list storageinsights. reportDetails. storageinsights. reportDetails. get storageinsights. reportDetails. list Storage Insights Analyst ( roles/ storageinsights.analyst ) Data access to Storage Insights. resourcemanager.projects.get resourcemanager.projects.list storageinsights. datasetConfigs. get storageinsights. datasetConfigs. linkDataset storageinsights. datasetConfigs. list storageinsights. datasetConfigs. unlinkDataset storageinsights.locations. storageinsights.locations.get storageinsights.locations.list storageinsights.operations.get storageinsights. operations. list storageinsights. reportConfigs. get storageinsights. reportConfigs. list storageinsights. reportDetails. storageinsights. reportDetails. get storageinsights. reportDetails. list Service agent roles Service agent roles should only be granted to service agents .

### Class Blob (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob)
- Source ID: `site-python-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Checksumming (hashing) to verify data integrity is disabled for reads using this feature because reads are implemented using request ranges, which do not provide checksums to validate.
- The upload can be completed by making an HTTP PUT request with the file's contents. delete delete ( client = None , if generation match = None , if generation not match = None , if metageneration match = None , if metageneration not match = None , timeout = 60 , retry = google . api core . retry . retry unary .
- See https://cloud.google.com/storage/docs/json api/v1/objects Returns Type Description int or NoneType The generation of the blob or None if the blob's resource has not been loaded from the server. hard delete time If this object has been soft-deleted, returns the time at which it will be permanently deleted.
- See https://cloud.google.com/storage/docs/json api/v1/objects Returns Type Description int or NoneType The size of the blob or None if the blob's resource has not been loaded from the server. soft delete time If this object has been soft-deleted, returns the time at which it became soft-deleted.

