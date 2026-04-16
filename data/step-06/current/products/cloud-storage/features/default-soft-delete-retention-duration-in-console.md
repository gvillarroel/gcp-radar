---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.902Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Default soft delete retention duration in console"
feature_slug: "default-soft-delete-retention-duration-in-console"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-console"
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
keywords:
  - "default"
  - "soft"
  - "delete"
  - "retention"
  - "duration"
  - "in"
  - "console"
  - "the"
---

# Default soft delete retention duration in console

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console can set a default soft delete retention duration for new buckets.

## Extended Definition

The Google Cloud console can set a default soft delete retention duration for new buckets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)

## Supporting Pages

### "Class SoftDeletePolicy (3.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- Source ID: `site-python-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://cloud.google.com/storage/docs/soft-delete Parameters Name Description bucket Bucket Bucket for which this instance is the policy. retention duration seconds int (Optional) The period of time in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. effective time datetime.datetime (Optional) When the bucket's soft delete policy is effective.
- Returns Type Description datetime.datetime or NoneType point-in time at which the bucket's soft delte policy is effective, or None if the property is not set. retention duration seconds Get the retention duration of the bucket's soft delete policy.
- Returns Type Description SoftDeletePolicy Instance created from resource. fromkeys fromkeys ( value = None , / ) Create a new dictionary with keys from iterable and values set to value. get get ( key , default = None , / ) Return the value for key if key is in the dictionary, else default. items items () API documentation for storage.bucket.SoftDeletePolicy.items method. keys keys () API documentation for storage.bucket.SoftDeletePolicy.keys method. pop pop ( k [, d ]) If the key is not found, return the default if given; otherwise, raise a KeyError. popitem popitem () Remove and return a (key, value) pair as a 2-tuple.
- Return the value for key if key is in the dictionary, else default. update update ([ E , ] F ) If E is present and has a .keys() method, then does: for k in E: D[k] = E[k] If E is present and lacks a .keys() method, then does: for k, v in E: D[k] = v In either case, this is followed by: for k in F: D[k] = F[k] values values () API documentation for storage.bucket.SoftDeletePolicy.values method.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: gcloud storage buckets create gs:// BUCKET NAME --project= PROJECT ID --default-storage-class= STORAGE CLASS --location= BUCKET LOCATION --uniform-bucket-level-access --soft-delete-duration= RETENTION DURATION --encryption-enforcement-file= ENCRYPTION ENFORCEMENT FILE For a complete list of options for bucket creation using the gcloud CLI, see buckets create options .
- If not otherwise specified in your request, buckets are created in the US multi-region with a default storage class of Standard storage and have a seven-day soft delete retention duration.
- For example, STANDARD . --uniform-bucket-level-access : Enable uniform bucket-level access for your bucket. --soft-delete-duration : Specify a soft delete retention duration, which is the number of days you want to retain objects after they get deleted.
- To change the amount of time that soft delete retains objects after deletion, select the Soft delete policy checkbox, and then select the Set custom retention duration option.

### "IAM permissions for the Google Cloud console \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions required for specific actions Action Required IAM Permissions (in addition to those listed above) Create a bucket storage.buckets.create storage.buckets.enableObjectRetention 1 Attach a tag to a bucket storage.buckets.createTagBinding List or filter buckets No additional permissions List tags directly attached to a bucket storage.buckets.listTagBindings List both inherited tags and tags directly attached to a bucket storage.buckets.listEffectiveTags View the following bucket information: Location, replication status, and default storage class Protection settings Bucket labels Object lifecycle policies Public access prevention status Uniform bucket-level access status Autoclass status Website configuration storage.buckets.get Change the following bucket settings: Protection settings Default storage class Bucket labels Object lifecycle policies Uniform bucket-level access status Autoclass status Website configuration Object retention configurations storage.buckets.get storage.buckets.update storage.buckets.enableObjectRetention 1 Enable the Requester Pays feature storage.buckets.get storage.buckets.update Disable the Requester Pays feature storage.buckets.get storage.buckets.update resourcemanager.projects.createBillingAssignment 3 Change the public access prevention setting storage.buckets.get storage.buckets.setIamPolicy storage.buckets.update Change bucket permissions storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update Delete an empty bucket storage.buckets.delete storage.objects.list Delete a non-empty bucket storage.buckets.delete storage.objects.delete storage.objects.list Detach a tag from a bucket storage.buckets.deleteTagBinding Create a folder storage.folders.create Get the metadata of a folder storage.folders.get List folders storage.folders.list Rename folders storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) Delete folders storage.folders.delete Upload an object or folder of objects storage.objects.create storage.objects.delete 2 storage.objects.setRetention 4 View the details for an object 5 storage.objects.get storage.objects.list View the version history of an object storage.objects.get storage.objects.list Download an object 5 or folder of objects storage.objects.get storage.objects.list List objects in a bucket, including noncurrent objects and soft-deleted objects storage.objects.list Determine if an object is publicly accessible 5 storage.buckets.getIamPolicy storage.objects.list storage.objects.getIamPolicy 7 Rename an object or restore a noncurrent version of an object storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.getIamPolicy 7 storage.objects.setIamPolicy 7 Copy an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) Move an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.delete (for the source bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) View an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy Edit an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update Edit an object's metadata 5 storage.objects.get storage.objects.list storage.objects.update Add, change, or remove a retention configuration on an object 5 storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 9 Add or remove a hold on an object 5 storage.objects.get storage.objects.list storage.objects.update Delete an object 5 , a noncurrent version of an object, or a folder of objects storage.objects.delete storage.objects.list Restore a deleted object storage.objects.create storage.objects.delete 2 storage.objects.list storage.objects.restore Bulk restore deleted objects storage.objects.create storage.objects.delete 10 storage.objects.restore storage.buckets.restore storage.objects.setIamPolicy 7 ,11 View the name of a project's Cloud Storage service agent resourcemanager.projects.get View the service account HMAC keys for a project resourcemanager.projects.get storage.hmacKeys.list Create an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.create Disable or re-enable an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.update Delete an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.delete Create, view, or delete an HMAC key for the user account you are logged in as resourcemanager.projects.get Configure, update or disable the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.update View the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.get Create a cache using Rapid Cache storage.anywhereCaches.create List a cache using Rapid Cache storage.anywhereCaches.list Update a cache using Rapid Cache storage.anywhereCaches.update Pause a cache using Rapid Cache storage.anywhereCaches.pause Resume a cache using Rapid Cache storage.anywhereCaches.resume Get the metadata of a cache using Rapid Cache storage.anywhereCaches.get Disable a cache using Rapid Cache storage.anywhereCaches.disable 1 This permission is only required when enabling a bucket to support object retention configurations .
- Common permissions required for using the Google Cloud console Certain permissions are broadly necessary in order to use the Google Cloud console: All actions involving buckets should include resourcemanager.projects.get and storage.buckets.list permissions at the project level.
- The following page discusses the Identity and Access Management (IAM) permissions required to perform actions within the Cloud Storage portion of the Google Cloud console.
- 9 This permission is required when changing an existing retention configuration such that the configuration becomes locked, reduced, or removed.

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Audit log type Sub-type Cloud Storage operations Admin Activity ADMIN WRITE Setting bucket or managed folder IAM policies Setting object ACLs 1 Creating buckets Deleting buckets Restoring soft-deleted buckets Relocating buckets Updating bucket metadata Creating tag bindings on buckets Deleting tag bindings on buckets Creating managed folders Deleting managed folders Updating Storage Intelligence configuration for a project, a folder, or an organization Creating Rapid Cache caches Pausing Rapid Cache caches Resuming Rapid Cache caches Disabling Rapid Cache caches Updating Rapid Cache caches Creating HMAC keys Deleting HMAC keys Updating HMAC keys Cancelling long-running operations Deleting long-running operations Creating Storage Insights inventory report configurations Updating Storage Insights inventory report configurations Deleting Storage Insights inventory report configurations Creating Storage Insights dataset configurations Updating Storage Insights dataset configurations Deleting Storage Insights dataset configurations Linking Storage Insights dataset configurations Unlinking Storage Insights dataset configurations Data Access ADMIN READ Getting bucket or managed folder IAM policies Getting object ACLs Getting bucket metadata Listing buckets Listing tag bindings on buckets Listing effective tags on buckets Getting managed folder metadata Listing managed folders Getting Storage Intelligence configuration for a project, a folder, or an organization Getting Rapid Cache caches Listing Rapid Cache caches Getting HMAC keys Listing HMAC keys Getting long-running operations Listing long-running operations Getting Storage Insights inventory report configurations Listing Storage Insights inventory report configurations Getting Storage Insights inventory reports Listing Storage Insights inventory reports Getting Storage Insights dataset configurations Listing Storage Insights dataset configurations Data Access DATA READ Getting object data Getting object metadata Listing objects Getting folder metadata Listing folders Copying objects 2 Composing objects 2 Listing ongoing XML API multipart uploads Listing XML API multipart upload parts Data Access DATA WRITE Creating objects Deleting objects Deleting multiple objects using the XML API Restoring soft-deleted objects Moving objects Updating non-ACL object metadata Setting retentions for objects Overriding unlocked retentions for objects Copying objects 2 Composing objects 2 Initiating XML API multipart uploads Creating parts in an XML API multipart upload Aborting XML API multipart uploads Completing XML API multipart uploads Creating folders Deleting folders Renaming folders System Event Start of bucket relocate process 3 End of bucket relocate process 1 Admin Activity audit logs are not generated if/when ACLs are initially set at object creation.
- For example: gcloud storage sign-url gs://example bucket/example object.jpeg --private-key-file=example-key.json --duration=10m --query-params=x-goog-custom-audit-job=job name,x-goog-custom-audit-user=test user Example log entry protoPayload: { @type: "type.googleapis.com/google.cloud.audit.Auditlog", ... metadata: { audit context: { app context: "EXTERNAL", audit info: { x-goog-custom-audit-job: "job name", x-goog-custom-audit-user: "test user" } } } } For more information on the fields included in the protoPayload object with the type type.googleapis.com/google.cloud.audit.Auditlog , see the AuditLog reference documentation .
- Audit logs for multi-object delete XML API When you use the XML API to delete multiple objects in a single request, Cloud Storage generates two types of data access audit logs, provided you enable data access audit logs : Parent request audit log : A log is generated for the overall multi-object delete request.
- Console In the Google Cloud console, you can use the Logs Explorer to retrieve your audit log entries for your Google Cloud project, folder, or organization: Note: You can't view audit logs for Cloud Billing accounts in the Google Cloud console.

