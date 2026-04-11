---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.686Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Google Cloud console support for hierarchical namespace"
feature_slug: "google-cloud-console-support-for-hierarchical-namespace"
latest_feature_date: "2024-09-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-console"
keywords:
  - "console"
  - "for"
  - "hierarchical"
  - "namespace"
  - "the"
  - "supports"
  - "creating"
  - "buckets"
---

# Google Cloud console support for hierarchical namespace

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

The Google Cloud console supports creating hierarchical namespace buckets and managing, renaming, and moving folders within them.

## Extended Definition

The Google Cloud console supports creating hierarchical namespace buckets and managing, renaming, and moving folders within them.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Node.js Changes for @google-cloud/storage 7.11.0 (2024-05-03) Features Add ability to enable hierarchical namespace on buckets ( #2453 ) ( 4e5726f ) Java Changes for google-cloud-storage 2.38.0 (2024-05-09) Features Promoted google-cloud-storage-control to beta ( #2531 ) ( 09f7191 ) Bug Fixes Add strict client side response validation for gRPC chunked resumable uploads ( #2527 ) ( c1d1f4a ) An existing resource pattern value projects/{project}/buckets/{bucket}/managedFolders/{managedFolder= } to resource definition storage.googleapis.com/ManagedFolder is removed ( #2524 ) ( 7d7f526 ) deps: Update the Java code generator (gapic-generator-java) to 2.39.0 ( #2501 ) ( 518d4be ) ParallelCompositeUpload in Transfer Manager hangs when encountering OOM ( #2526 ) ( 67a7c6b ) Update grpc WriteObject response handling to provide context when a failure happens ( #2532 ) ( 170a3f5 ) Update GzipReadableByteChannel to be tolerant of one byte reads ( #2512 ) ( 87b63f4 ) Update StorageOptions to carry forward fields that aren't part of ServiceOptions ( #2521 ) ( b84654e ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.30.0 ( #2523 ) ( 3e573f7 ) Update dependency info.picocli:picocli to v4.7.6 ( #2535 ) ( f26888a ) Documentation Add in Transfer Manager chunked upload/download samples ( #2518 ) ( d1f6bcc ) Update readme to include gradle instructions for storage control ( #2503 ) ( 50ac93b ) Update TransportCompatibility annotation for Storage#blobWriteSession ( #2520 ) ( b7d673c ) April 29, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- September 09, 2024 Feature You can now use the Google Cloud console to do the following: Create buckets with hierarchical namespace enabled.
- February 24, 2025 Feature The Objects: move method supports moving objects in both flat and hierarchical namespace buckets.
- May 30, 2019 Change Improved workflow for creating new buckets in the Google Cloud Console .

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.create storage.buckets.enableObjectRetention (only required if enabling object retention configurations for the bucket) storage.buckets.list (only required if creating a bucket using the Google Cloud console.) resourcemanager.projects.get (only required if creating a bucket using the Google Cloud console) You might also be able to get these permissions with custom roles or other predefined roles.
- If you're creating a bucket for the first time, see Discover object storage with the Google Cloud console or Discover object storage with the Google Cloud CLI for a more comprehensive walkthrough of the tasks you can perform with Cloud Storage.
- Console When creating a bucket using the Google Cloud console, you are only required to set a globally unique name for your bucket; all other steps are either optional or have default settings.
- In the Optimize storage for data-intensive workloads section, do the following: To enable hierarchical namespace , select Enable Hierarchical namespace on this bucket .

### "IAM permissions for the Google Cloud console \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Common permissions required for using the Google Cloud console Certain permissions are broadly necessary in order to use the Google Cloud console: All actions involving buckets should include resourcemanager.projects.get and storage.buckets.list permissions at the project level.
- Permissions required for specific actions Action Required IAM Permissions (in addition to those listed above) Create a bucket storage.buckets.create storage.buckets.enableObjectRetention 1 Attach a tag to a bucket storage.buckets.createTagBinding List or filter buckets No additional permissions List tags directly attached to a bucket storage.buckets.listTagBindings List both inherited tags and tags directly attached to a bucket storage.buckets.listEffectiveTags View the following bucket information: Location, replication status, and default storage class Protection settings Bucket labels Object lifecycle policies Public access prevention status Uniform bucket-level access status Autoclass status Website configuration storage.buckets.get Change the following bucket settings: Protection settings Default storage class Bucket labels Object lifecycle policies Uniform bucket-level access status Autoclass status Website configuration Object retention configurations storage.buckets.get storage.buckets.update storage.buckets.enableObjectRetention 1 Enable the Requester Pays feature storage.buckets.get storage.buckets.update Disable the Requester Pays feature storage.buckets.get storage.buckets.update resourcemanager.projects.createBillingAssignment 3 Change the public access prevention setting storage.buckets.get storage.buckets.setIamPolicy storage.buckets.update Change bucket permissions storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update Delete an empty bucket storage.buckets.delete storage.objects.list Delete a non-empty bucket storage.buckets.delete storage.objects.delete storage.objects.list Detach a tag from a bucket storage.buckets.deleteTagBinding Create a folder storage.folders.create Get the metadata of a folder storage.folders.get List folders storage.folders.list Rename folders storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) Delete folders storage.folders.delete Upload an object or folder of objects storage.objects.create storage.objects.delete 2 storage.objects.setRetention 4 View the details for an object 5 storage.objects.get storage.objects.list View the version history of an object storage.objects.get storage.objects.list Download an object 5 or folder of objects storage.objects.get storage.objects.list List objects in a bucket, including noncurrent objects and soft-deleted objects storage.objects.list Determine if an object is publicly accessible 5 storage.buckets.getIamPolicy storage.objects.list storage.objects.getIamPolicy 7 Rename an object or restore a noncurrent version of an object storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.getIamPolicy 7 storage.objects.setIamPolicy 7 Copy an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) Move an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.delete (for the source bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) View an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy Edit an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update Edit an object's metadata 5 storage.objects.get storage.objects.list storage.objects.update Add, change, or remove a retention configuration on an object 5 storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 9 Add or remove a hold on an object 5 storage.objects.get storage.objects.list storage.objects.update Delete an object 5 , a noncurrent version of an object, or a folder of objects storage.objects.delete storage.objects.list Restore a deleted object storage.objects.create storage.objects.delete 2 storage.objects.list storage.objects.restore Bulk restore deleted objects storage.objects.create storage.objects.delete 10 storage.objects.restore storage.buckets.restore storage.objects.setIamPolicy 7 ,11 View the name of a project's Cloud Storage service agent resourcemanager.projects.get View the service account HMAC keys for a project resourcemanager.projects.get storage.hmacKeys.list Create an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.create Disable or re-enable an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.update Delete an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.delete Create, view, or delete an HMAC key for the user account you are logged in as resourcemanager.projects.get Configure, update or disable the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.update View the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.get Create a cache using Rapid Cache storage.anywhereCaches.create List a cache using Rapid Cache storage.anywhereCaches.list Update a cache using Rapid Cache storage.anywhereCaches.update Pause a cache using Rapid Cache storage.anywhereCaches.pause Resume a cache using Rapid Cache storage.anywhereCaches.resume Get the metadata of a cache using Rapid Cache storage.anywhereCaches.get Disable a cache using Rapid Cache storage.anywhereCaches.disable 1 This permission is only required when enabling a bucket to support object retention configurations .
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.
- The following page discusses the Identity and Access Management (IAM) permissions required to perform actions within the Cloud Storage portion of the Google Cloud console.

