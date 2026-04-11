---
title: "IAM permissions for Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/access-control/iam-permissions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/access-control/iam-permissions
  title: "IAM permissions for Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Reference
Send feedback
IAM permissions for Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
The following tables list the Identity and Access Management (IAM)
permissions that are associated with Cloud Storage. IAM
permissions are grouped into roles , and you
assign roles to users and groups .
Bucket permissions
Bucket permission name
Description
storage.buckets.create
Create new buckets in a project.
storage.buckets.createTagBinding
Create a new tag binding to a bucket.
storage.buckets.delete
Delete buckets.
storage.buckets.deleteTagBinding
Delete the tag binding on a bucket.
storage.buckets.enableObjectRetention
Enable object retention configurations on a bucket.
storage.buckets.exemptFromIpFilter
Exempts the user or service account from IP filtering rules for bucket-level operations.
storage.buckets.get
Read bucket metadata, including listing or reading the Pub/Sub notification configurations on a bucket. This permission alone does not allow you to read IAM policies or IP filtering rules.
storage.buckets.getIamPolicy
Read bucket IAM policies.
storage.buckets.getIpFilter
Lists or reads the IP filtering rules on a bucket.
storage.buckets.getObjectInsights
Read object metadata for generating inventory reports and Storage Insights datasets .
storage.buckets.list
List buckets in a project including read bucket metadata. This permission alone does not allow you to list IAM policies or IP filtering rules.
storage.buckets.listEffectiveTags
List all tags associated with a bucket, including tags inherited from higher in the resource hierarchy, such as from the bucket's project.
storage.buckets.listTagBindings
List tags directly attached to a bucket.
storage.buckets.relocate
Relocate buckets between geographic locations.
storage.buckets.restore
Bulk restore objects that have been soft-deleted .
storage.buckets.setIamPolicy
Update bucket IAM policies.
storage.buckets.setIpFilter
Set IP filtering rules on a bucket.
storage.buckets.update
Update bucket metadata including adding or removing a Pub/Sub notification configuration on a bucket and reading bucket metadata when updating. This permission alone does not allow you to update IAM policies, IP filtering rules or read the IAM policies on a bucket during the update.
Object permissions
Note: The storage.objects.getIamPolicy and storage.objects.setIamPolicy
permissions don't apply to buckets with uniform bucket-level access enabled. Note: In order to replace existing objects, both storage.objects.create
and storage.objects.delete permissions are required.
Object permission name
Description
storage.objects.create
Add new objects to a bucket.
storage.objects.createContext
Attach contexts to an object.
storage.objects.delete
Delete objects.
storage.objects.deleteContext
Delete object contexts.
storage.objects.dropContexts
Drop specified groups of object contexts from a source object during a rewrite , copy , or compose operation using the dropContextGroups parameter.
storage.objects.get
Read object data and metadata, excluding ACLs. This also returns any contexts attached to the object.
storage.objects.getIamPolicy
Read object ACLs, returned as IAM policies.
storage.objects.list
List objects in a bucket. Also read object metadata, excluding ACLs, when listing. This also returns any contexts attached to the objects.
storage.objects.move
Move an object within a bucket with hierarchical namespace enabled.
storage.objects.overrideUnlockedRetention
Use the x-goog-bypass-governance-retention header or the overrideUnlockedRetention query parameter when working with object retention configurations .
storage.objects.restore
Restore objects that have been soft-deleted .
storage.objects.setIamPolicy
Update object ACLs.
storage.objects.setRetention
Add or update retentions for objects.
storage.objects.update
Update object metadata, excluding ACLs. Also read object metadata, excluding ACLs, when updating.
storage.objects.updateContext
Update object contexts.
Folder permissions
Note: In order to rename folders, storage.folders.rename is required
on the source bucket and storage.folders.create is required on the destination
bucket.
Folder permission name
Description
storage.folders.create
Create a folder.
storage.folders.delete
Delete a folder.
storage.folders.get
Read the metadata of a folder.
storage.folders.list
List folders.
storage.folders.rename
Rename a folder.
Managed folder permissions
Managed folder permission name
Description
storage.managedFolders.create
Create a managed folder.
storage.managedFolders.delete
Delete a managed folder.
storage.managedFolders.get
Read a managed folder.
storage.managedFolders.getIamPolicy
Read managed folder IAM policies.
storage.managedFolders.list
List the managed folders in a bucket or folder.
storage.managedFolders.setIamPolicy
Update managed folder IAM policies.
Rapid Cache permissions
Rapid Cache permission name
Description
storage.anywhereCaches.create
Create a cache using Rapid Cache.
storage.anywhereCaches.list
Lists caches using Rapid Cache.
storage.anywhereCaches.update
Update a cache using Rapid Cache.
storage.anywhereCaches.get
Get the metadata of a cache using Rapid Cache.
storage.anywhereCaches.pause
Pause a cache using Rapid Cache.
storage.anywhereCaches.resume
Resume a cache using Rapid Cache.
storage.anywhereCaches.disable
Disable a cache using Rapid Cache.
Storage Intelligence permissions
Storage Intelligence permission name
Description
storage.intelligenceConfigs.update
Configure Storage Intelligence on a project, a folder, or an organization.
storage.intelligenceConfigs.get
Reads the Storage Intelligence configuration on a project, a folder, or an organization.
Storage Insights inventory report permissions
Inventory report permission name
Description
storageinsights.reportConfigs.create
Create inventory report configurations.
storageinsights.reportConfigs.delete
Delete inventory report configurations.
storageinsights.reportConfigs.get
Retrieve inventory report configurations.
storageinsights.reportConfigs.list
List inventory report configurations.
storageinsights.reportConfigs.update
Modify inventory report configurations.
storageinsights.reportDetails.get
Retrieve inventory reports.
storageinsights.reportDetails.list
List inventory reports.
Storage Insights dataset permissions
Dataset permission name
Description
storageinsights.datasetConfigs.create
Create dataset configurations.
storageinsights.datasetConfigs.delete
Delete dataset configurations.
storageinsights.datasetConfigs.linkDataset
Create linked datasets in BigQuery that contain the output of Storage Insights datasets.
storageinsights.datasetConfigs.unlinkDataset
Remove linked datasets from BigQuery that contain the output of Storage Insights datasets.
storageinsights.datasetConfigs.update
Modify dataset configurations.
storageinsights.datasetConfigs.get
Get dataset configurations.
storageinsights.datasetConfigs.list
List dataset configurations.
Storage batch operations permissions
Storage batch operations permission name
Description
storagebatchoperations.jobs.create
Create storage batch operations jobs.
storagebatchoperations.jobs.cancel
Cancel storage batch operations jobs.
storagebatchoperations.jobs.delete
Delete storage batch operations jobs.
storagebatchoperations.jobs.get
Retrieve storage batch operations jobs.
storagebatchoperations.jobs.list
List storage batch operations jobs.
storagebatchoperations.operations.get
Retrieve long-running operations associated with storage batch operations jobs.
storagebatchoperations.operations.list
List long-running operations associated with storage batch operations jobs.
storagebatchoperations.operations.cancel
Cancel long-running operations associated with storage batch operations jobs.
storagebatchoperations.operations.delete
Delete long-running operations associated with storage batch operations jobs.
Long-running operations permissions
Long-running operation permission name
Description
storage.bucketOperations.cancel
Cancel a long-running operation.
storage.bucketOperations.get
Get a long-running operation.
storage.bucketOperations.list
List long-running operations.
HMAC key permissions
Note: HMAC key permissions apply at the project level only.
HMAC key permission name
Description
storage.hmacKeys.create
Create new HMAC keys for service accounts in a project.
storage.hmacKeys.delete
Delete existing HMAC keys.
storage.hmacKeys.get
Read HMAC key metadata.
storage.hmacKeys.list
List the metadata of HMAC keys in a project.
storage.hmacKeys.update
Update HMAC key status.
Multipart upload permissions
Note: In order to create or upload parts, you must have both the
storage.objects.create and storage.multipartUploads.create permissions.
Multipart upload permission name
Description
storage.multipartUploads.create
Upload objects in multiple parts.
storage.multipartUploads.abort
Abort multipart upload sessions.
storage.multipartUploads.listParts
List the uploaded object parts in a multipart upload session.
storage.multipartUploads.list
List the multipart upload sessions in a bucket.
What's next
Learn about which IAM permissions are contained in each
Cloud Storage IAM role .
Assign IAM roles at the project and bucket level.
See available IAM references for Cloud Storage ,
such as which IAM permissions allow users to perform actions
with various tools and APIs.
For a list of other Google Cloud permissions, see
Support Level for Permissions in Custom Roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
