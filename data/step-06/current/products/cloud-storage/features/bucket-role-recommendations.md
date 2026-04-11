---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.766Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket role recommendations"
feature_slug: "bucket-role-recommendations"
latest_feature_date: "2022-11-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-console"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-console"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket"
keywords:
  - "bucket"
  - "role"
  - "recommendations"
  - "the"
  - "console"
  - "provides"
  - "for"
  - "storage"
---

# Bucket role recommendations

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

The Google Cloud console provides role recommendations for Cloud Storage buckets based on permission usage.

## Extended Definition

The Google Cloud console provides role recommendations for Cloud Storage buckets based on permission usage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)

## Supporting Pages

### "Quickstart: Discover object storage with the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Make sure that you have the following role or roles on the project: Storage Admin Check for the roles In the Google Cloud console, go to the IAM page.
- Make sure that you have the following role or roles on the project: Storage Admin Check for the roles In the Google Cloud console, go to the IAM page.
- The Copy URL button provides a shareable URL similar to the following: https://storage.googleapis.com/ YOUR BUCKET NAME /kitten.png To remove public access from the bucket and stop sharing the image publicly: Click the Permissions tab.
- To create a bucket: In the Google Cloud console, go to the Cloud Storage Buckets page.

### "IAM permissions for the Google Cloud console \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Common permissions required for using the Google Cloud console Certain permissions are broadly necessary in order to use the Google Cloud console: All actions involving buckets should include resourcemanager.projects.get and storage.buckets.list permissions at the project level.
- Permissions required for specific actions Action Required IAM Permissions (in addition to those listed above) Create a bucket storage.buckets.create storage.buckets.enableObjectRetention 1 Attach a tag to a bucket storage.buckets.createTagBinding List or filter buckets No additional permissions List tags directly attached to a bucket storage.buckets.listTagBindings List both inherited tags and tags directly attached to a bucket storage.buckets.listEffectiveTags View the following bucket information: Location, replication status, and default storage class Protection settings Bucket labels Object lifecycle policies Public access prevention status Uniform bucket-level access status Autoclass status Website configuration storage.buckets.get Change the following bucket settings: Protection settings Default storage class Bucket labels Object lifecycle policies Uniform bucket-level access status Autoclass status Website configuration Object retention configurations storage.buckets.get storage.buckets.update storage.buckets.enableObjectRetention 1 Enable the Requester Pays feature storage.buckets.get storage.buckets.update Disable the Requester Pays feature storage.buckets.get storage.buckets.update resourcemanager.projects.createBillingAssignment 3 Change the public access prevention setting storage.buckets.get storage.buckets.setIamPolicy storage.buckets.update Change bucket permissions storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update Delete an empty bucket storage.buckets.delete storage.objects.list Delete a non-empty bucket storage.buckets.delete storage.objects.delete storage.objects.list Detach a tag from a bucket storage.buckets.deleteTagBinding Create a folder storage.folders.create Get the metadata of a folder storage.folders.get List folders storage.folders.list Rename folders storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) Delete folders storage.folders.delete Upload an object or folder of objects storage.objects.create storage.objects.delete 2 storage.objects.setRetention 4 View the details for an object 5 storage.objects.get storage.objects.list View the version history of an object storage.objects.get storage.objects.list Download an object 5 or folder of objects storage.objects.get storage.objects.list List objects in a bucket, including noncurrent objects and soft-deleted objects storage.objects.list Determine if an object is publicly accessible 5 storage.buckets.getIamPolicy storage.objects.list storage.objects.getIamPolicy 7 Rename an object or restore a noncurrent version of an object storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.getIamPolicy 7 storage.objects.setIamPolicy 7 Copy an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) Move an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.delete (for the source bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) View an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy Edit an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update Edit an object's metadata 5 storage.objects.get storage.objects.list storage.objects.update Add, change, or remove a retention configuration on an object 5 storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 9 Add or remove a hold on an object 5 storage.objects.get storage.objects.list storage.objects.update Delete an object 5 , a noncurrent version of an object, or a folder of objects storage.objects.delete storage.objects.list Restore a deleted object storage.objects.create storage.objects.delete 2 storage.objects.list storage.objects.restore Bulk restore deleted objects storage.objects.create storage.objects.delete 10 storage.objects.restore storage.buckets.restore storage.objects.setIamPolicy 7 ,11 View the name of a project's Cloud Storage service agent resourcemanager.projects.get View the service account HMAC keys for a project resourcemanager.projects.get storage.hmacKeys.list Create an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.create Disable or re-enable an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.update Delete an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.delete Create, view, or delete an HMAC key for the user account you are logged in as resourcemanager.projects.get Configure, update or disable the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.update View the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.get Create a cache using Rapid Cache storage.anywhereCaches.create List a cache using Rapid Cache storage.anywhereCaches.list Update a cache using Rapid Cache storage.anywhereCaches.update Pause a cache using Rapid Cache storage.anywhereCaches.pause Resume a cache using Rapid Cache storage.anywhereCaches.resume Get the metadata of a cache using Rapid Cache storage.anywhereCaches.get Disable a cache using Rapid Cache storage.anywhereCaches.disable 1 This permission is only required when enabling a bucket to support object retention configurations .
- 5 This action does not require storage.objects.list if it's performed on the details page for the relevant object and you don't access the details page from the overall list of objects for the bucket.
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.

### "Mount a Cloud Storage bucket using Cloud Storage FUSE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following role or roles on the project: Storage Admin ( roles/storage.admin ), Storage Bucket Viewer ( roles/storage.bucketViewer ) Check for the roles In the Google Cloud console, go to the IAM page.
- Make sure that you have the following role or roles on the project: Storage Admin ( roles/storage.admin ), Storage Bucket Viewer ( roles/storage.bucketViewer ) Check for the roles In the Google Cloud console, go to the IAM page.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the resources by completing the following steps: Unmount the storage bucket from your Linux machine by using the fusermount tool: fusermount -u "$HOME/mount-folder" To delete the bucket and everything inside of it, use the gcloud storage rm command with the --recursive flag: gcloud storage rm gs:// BUCKET NAME --recursive Replace BUCKET NAME with the name of your bucket.
- In this quickstart, you'll complete the following tasks: Install Cloud Storage FUSE on Debian or Ubuntu Mount the bucket as a folder on the machine Upload an object to the bucket You'll use the Google Cloud CLI to create and manage the object in your storage bucket, and you'll use the Cloud Storage FUSE CLI to mount your bucket to your machine.

