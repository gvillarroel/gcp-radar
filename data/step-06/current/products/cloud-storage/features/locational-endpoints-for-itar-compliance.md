---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.919Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Locational endpoints for ITAR compliance"
feature_slug: "locational-endpoints-for-itar-compliance"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1"
  - "https://docs.cloud.google.com/storage/docs/xml-api/overview"
keywords:
  - "locational"
  - "endpoints"
  - "for"
  - "itar"
  - "compliance"
  - "let"
  - "storage"
  - "operations"
---

# Locational endpoints for ITAR compliance

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Locational endpoints let Cloud Storage operations comply with International Traffic in Arms Regulations requirements.

## Extended Definition

Locational endpoints let Cloud Storage operations comply with International Traffic in Arms Regulations requirements.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1)
- [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)

## Supporting Pages

### Storage batch operations audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.storagebatchoperations.v1.StorageBatchOperations.GetJob google.cloud.storagebatchoperations.v1.StorageBatchOperations.ListJobs google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.storagebatchoperations.v1.StorageBatchOperations.CancelJob google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob (LRO) google.cloud.storagebatchoperations.v1.StorageBatchOperations.DeleteJob google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Cloud Identity and Access Management documentation for Storage Batch Operations. google.cloud.storagebatchoperations.v1.StorageBatchOperations The following audit logs are associated with methods belonging to google.cloud.storagebatchoperations.v1.StorageBatchOperations .
- Filter for this method : protoPayload.methodName="google.cloud.storagebatchoperations.v1.StorageBatchOperations.CancelJob" CreateJob Method : google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob Audit log type : Admin activity Permissions : storagebatchoperations.jobs.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJob" DeleteJob Method : google.cloud.storagebatchoperations.v1.StorageBatchOperations.DeleteJob Audit log type : Admin activity Permissions : storagebatchoperations.jobs.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.storagebatchoperations.v1.StorageBatchOperations.DeleteJob" GetJob Method : google.cloud.storagebatchoperations.v1.StorageBatchOperations.GetJob Audit log type : Data access Permissions : storagebatchoperations.jobs.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.longrunning.Operations.CancelOperation" DeleteOperation Method : google.longrunning.Operations.DeleteOperation Audit log type : Admin activity Permissions : storagebatchoperations.operations.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

### "IAM permissions for gcloud storage commands \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Command Flag Required IAM Permissions batch-operations jobs create storagebatchoperations.jobs.create batch-operations jobs cancel storagebatchoperations.jobs.cancel batch-operations jobs delete storagebatchoperations.jobs.delete batch-operations jobs get storagebatchoperations.jobs.get batch-operations jobs list storagebatchoperations.jobs.list buckets add-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets anywhere-caches create storage.anywhereCaches.create buckets anywhere-caches describe storage.anywhereCaches.get buckets anywhere-caches list storage.anywhereCaches.list buckets anywhere-caches update storage.anywhereCaches.update buckets anywhere-caches pause storage.anywhereCaches.pause buckets anywhere-caches resume storage.anywhereCaches.resume buckets anywhere-caches disable storage.anywhereCaches.disable buckets create storage.buckets.create storage.buckets.setIpFilter 15 buckets delete storage.buckets.delete buckets describe storage.buckets.get storage.buckets.getIamPolicy 1 storage.buckets.getIpFilter 16 buckets get-iam-policy storage.buckets.get storage.buckets.getIamPolicy buckets list storage.buckets.list storage.buckets.getIamPolicy 1 buckets notifications create storage.buckets.get storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 3 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 3 (for Pub/Sub topic receiving notifications) buckets notifications create --skip-topic-setup storage.buckets.get storage.buckets.update buckets notifications delete storage.buckets.get storage.buckets.update buckets notifications describe storage.buckets.get buckets notifications list storage.buckets.get buckets relocate storage.buckets.relocate buckets remove-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets set-iam-policy storage.buckets.setIamPolicy storage.buckets.update buckets update storage.buckets.update storage.buckets.setIpFilter 15 buckets update --no-requester-pays storage.buckets.update resourcemanager.projects.createBillingAssignment 2 buckets update --recovery-point-objective --rpo --[no-]uniform-bucket-level-access storage.buckets.get storage.buckets.update buckets update --clear-pap --clear-public-access-prevention --[no-]pap --[no-]public-access-prevention storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy cat storage.objects.get storage.objects.list 13 cp storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) du storage.objects.list folders create storage.folders.create folders delete storage.folders.delete folders describe storage.folders.get folders list storage.folders.list folders rename storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) hash storage.objects.get hmac create storage.hmacKeys.create hmac delete storage.hmacKeys.delete hmac describe storage.hmacKeys.get hmac list storage.hmacKeys.list hmac update storage.hmacKeys.update insights dataset-configs create storageinsights.datasetConfigs.create insights dataset-configs create-link storageinsights.datasetConfigs.linkDataset insights dataset-configs delete storageinsights.datasetConfigs.delete insights dataset-configs delete-link storageinsights.datasetConfigs.unlinkDataset insights dataset-configs describe storageinsights.datasetConfigs.get insights dataset-configs list storageinsights.datasetConfigs.list insights dataset-configs update storageinsights.datasetConfigs.update insights inventory-reports create storageinsights.reportConfigs.create insights inventory-reports delete storageinsights.reportConfigs.delete insights inventory-reports details list storageinsights.reportDetails.list insights inventory-reports details describe storageinsights.reportDetails.get insights inventory-reports list storageinsights.reportConfigs.list insights inventory-reports update storageinsights.reportConfigs.get storageinsights.reportConfigs.update ls (for bucket listing) storage.buckets.list storage.buckets.getIamPolicy 6 ls (for object listing) storage.objects.get 7 storage.objects.list storage.objects.getIamPolicy 8 ls --buckets storage.buckets.get storage.buckets.getIamPolicy 6 storage intelligence-config enable storage.intelligenceConfigs.update storage-intelligence disable storage.intelligenceConfigs.update storage-intelligence describe storage.intelligenceConfigs.get storage-intelligence update storage.intelligenceConfigs.update mv storage.objects.get (for the source objects) storage.objects.delete (for the source bucket) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) objects compose storage.objects.get storage.objects.create storage.objects.delete 9 objects describe storage.objects.get storage.objects.getIamPolicy 8 objects list storage.objects.list storage.objects.getIamPolicy 8 objects update storage.objects.get storage.objects.list storage.objects.update objects update --storage-class --encryption-key --clear-encryption-key storage.objects.get storage.objects.list storage.objects.create storage.objects.delete objects update --retention-mode --retain-until --clear-retention storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 11 operations cancel storage.bucketOperations.cancel operations describe storage.bucketOperations.get operations list storage.bucketOperations.list restore storage.objects.create storage.objects.delete 9 storage.objects.restore restore --async storage.objects.create storage.objects.delete 14 storage.objects.restore storage.buckets.restore rm storage.buckets.delete storage.objects.delete storage.objects.list rsync storage.objects.list (for the source bucket) storage.objects.get (for the source objects) storage.objects.list (for the destination bucket) storage.objects.get (for the destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 10 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) rsync --dry-run storage.objects.list (for the source and destination buckets) service-agent resourceManager.projects.get sign-url None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL.
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for gcloud storage commands Stay organized with collections Save and categorize content based on your preferences.
- For example, buckets notification create requires only storage.buckets.get and storage.buckets.update to use, but you must have additional permissions for the feature to work properly.
- If you use the --recursive flag, you must have storage.objects.list permission for the relevant bucket, in addition to the permissions required for the specific command you are using.

### "Overview of resources and methods for the JSON API \_|\_ Cloud Storage \_\

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used. get GET /b/ BUCKET /o/ OBJECT Retrieves an object or its metadata. insert POST https://storage.googleapis.com/upload/storage/v1/b/ BUCKET /o and POST /b/ BUCKET /o Stores a new object and metadata.
- Method HTTP request Description delete DELETE /b/ BUCKET /managedFolders/ MANAGED FOLDER Permanently deletes a managed folder. get GET /b/ BUCKET /managedFolders/ MANAGED FOLDER Returns metadata for the specified managed folder. getIamPolicy GET /b/ BUCKET /managedFolders/ MANAGED FOLDER /iam Returns an IAM policy for the specified managed folder. insert POST /b/ BUCKET /managedFolders Creates a new managed folder. list GET /b/ BUCKET /managedFolders Retrieves a list of managed folders in a given bucket. setIamPolicy PUT /b/ BUCKET /managedFolders/ MANAGED FOLDER /iam Updates an IAM policy for the specified managed folder. testIamPermissions GET /b/ BUCKET /managedFolders/ MANAGED FOLDER /iam/testPermissions Tests a set of permissions on the given managed folder. to see which, if any, are held by the caller.
- Method HTTP request Description delete DELETE /b/ BUCKET /defaultObjectAcl/ ENTITY Permanently deletes the default object ACL entry for the specified entity on the specified bucket . get GET /b/ BUCKET /defaultObjectAcl/ ENTITY Returns the default object ACL entry for the specified entity on the specified bucket . insert POST /b/ BUCKET /defaultObjectAcl Creates a new default object ACL entry on the specified bucket . list GET /b/ BUCKET /defaultObjectAcl Retrieves default object ACL entries on the specified bucket . patch PATCH /b/ BUCKET /defaultObjectAcl/ ENTITY Updates a default object ACL entry on the specified bucket .
- Method HTTP request Description delete DELETE /b/ BUCKET /o/ OBJECT /acl/ ENTITY Permanently deletes the ACL entry for the specified entity on the specified object . get GET /b/ BUCKET /o/ OBJECT /acl/ ENTITY Returns the ACL entry for the specified entity on the specified object . insert POST /b/ BUCKET /o/ OBJECT /acl Creates a new ACL entry on the specified object . list GET /b/ BUCKET /o/ OBJECT /acl Retrieves ACL entries on the specified object . patch PATCH /b/ BUCKET /o/ OBJECT /acl/ ENTITY Updates an ACL entry on the specified object .

### XML API overview \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As a RESTful API, it relies on method information and scoping information to define the operations to perform: Method information You specify the method information with standard HTTP methods, such as DELETE , GET , HEAD , POST , and PUT .
- The resulting URL can take two forms: BUCKET NAME .storage.googleapis.com/ OBJECT NAME storage.googleapis.com/ BUCKET NAME / OBJECT NAME You can use the Cloud Storage URI with unsecured requests (HTTP) and secured requests (HTTPS) that use secure sockets layer (SSL) encryption.
- Most Cloud Storage XML API requests use the following URI for accessing buckets and objects: storage.googleapis.com You can scope this further by adding a bucket and object to the URI.
- Overview The Cloud Storage XML API is a RESTful interface that lets you manage Cloud Storage data in a programmatic way.

