---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.927Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket policy insights"
feature_slug: "bucket-policy-insights"
latest_feature_date: "2022-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-console"
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-console"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
keywords:
  - "bucket"
  - "policy"
  - "insights"
  - "the"
  - "console"
  - "provides"
  - "to"
  - "help"
---

# Bucket policy insights

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console provides policy insights to help understand and manage bucket permission usage.

## Extended Definition

The Google Cloud console provides policy insights to help understand and manage bucket permission usage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)

## Supporting Pages

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Audit log type Sub-type Cloud Storage operations Admin Activity ADMIN WRITE Setting bucket or managed folder IAM policies Setting object ACLs 1 Creating buckets Deleting buckets Restoring soft-deleted buckets Relocating buckets Updating bucket metadata Creating tag bindings on buckets Deleting tag bindings on buckets Creating managed folders Deleting managed folders Updating Storage Intelligence configuration for a project, a folder, or an organization Creating Rapid Cache caches Pausing Rapid Cache caches Resuming Rapid Cache caches Disabling Rapid Cache caches Updating Rapid Cache caches Creating HMAC keys Deleting HMAC keys Updating HMAC keys Cancelling long-running operations Deleting long-running operations Creating Storage Insights inventory report configurations Updating Storage Insights inventory report configurations Deleting Storage Insights inventory report configurations Creating Storage Insights dataset configurations Updating Storage Insights dataset configurations Deleting Storage Insights dataset configurations Linking Storage Insights dataset configurations Unlinking Storage Insights dataset configurations Data Access ADMIN READ Getting bucket or managed folder IAM policies Getting object ACLs Getting bucket metadata Listing buckets Listing tag bindings on buckets Listing effective tags on buckets Getting managed folder metadata Listing managed folders Getting Storage Intelligence configuration for a project, a folder, or an organization Getting Rapid Cache caches Listing Rapid Cache caches Getting HMAC keys Listing HMAC keys Getting long-running operations Listing long-running operations Getting Storage Insights inventory report configurations Listing Storage Insights inventory report configurations Getting Storage Insights inventory reports Listing Storage Insights inventory reports Getting Storage Insights dataset configurations Listing Storage Insights dataset configurations Data Access DATA READ Getting object data Getting object metadata Listing objects Getting folder metadata Listing folders Copying objects 2 Composing objects 2 Listing ongoing XML API multipart uploads Listing XML API multipart upload parts Data Access DATA WRITE Creating objects Deleting objects Deleting multiple objects using the XML API Restoring soft-deleted objects Moving objects Updating non-ACL object metadata Setting retentions for objects Overriding unlocked retentions for objects Copying objects 2 Composing objects 2 Initiating XML API multipart uploads Creating parts in an XML API multipart upload Aborting XML API multipart uploads Completing XML API multipart uploads Creating folders Deleting folders Renaming folders System Event Start of bucket relocate process 3 End of bucket relocate process 1 Admin Activity audit logs are not generated if/when ACLs are initially set at object creation.
- REST APIs JSON API curl -X GET "https://storage.googleapis.com/storage/v1/b/example bucket/o/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" XML API curl -X GET "https://storage.googleapis.com/example bucket/example object" \ -H "Authorization: Bearer ya29.AHES6ZRVmB7fkLtd1XTmq6mo0S1wqZZi3-Lh s-6Uw7p8vtgSwg" \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Signed URL requests curl -X GET 'storage.googleapis.com/example bucket?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T181309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host,x-goog-custom-audit-job,x-goog-custom-audit-user&X-Goog-Signature=247a2aa45f169edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa8496def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dcc1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c20580e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b133447032ea7abedc098d2eb14a7' \ -H "x-goog-custom-audit-job: job name" \ -H "x-goog-custom-audit-user: test user" Note that the custom audit headers must also be included in X-Goog-SignedHeaders .
- As an alternative to using signed headers, you can use query parameters to pass custom audit entries. curl -X GET 'storage.googleapis.com/example bucket?X-Goog-Custom-Audit-Key=Value&X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T181309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f169edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa8496def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dcc1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c20580e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b133447032ea7abedc098d2eb14a7' These query parameters must be included when you generate the signed URL .
- Example header entries The following list shows examples of key-value pairs you can include in header entries: x-goog-custom-audit-job: test-job-id-here x-goog-custom-audit-user: user ID test 1 x-goog-custom-audit-internal-user-id: MATR2022-11 x-goog-custom-audit-tracking-ticket: TT/1516512851 x-goog-custom-audit-justification: Removed customer identity record at customer request x-goog-custom-audit-customer-id: USCU12315154 Example requests Command line gcloud storage hash gs://example bucket/example object.jpeg --additional-headers=x-goog-custom-audit-job="job name",x-goog-custom-audit-user="test user" Client libraries C++ To learn how to add custom headers to requests, see Add custom headers .

### "IAM permissions for the Google Cloud console \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions required for specific actions Action Required IAM Permissions (in addition to those listed above) Create a bucket storage.buckets.create storage.buckets.enableObjectRetention 1 Attach a tag to a bucket storage.buckets.createTagBinding List or filter buckets No additional permissions List tags directly attached to a bucket storage.buckets.listTagBindings List both inherited tags and tags directly attached to a bucket storage.buckets.listEffectiveTags View the following bucket information: Location, replication status, and default storage class Protection settings Bucket labels Object lifecycle policies Public access prevention status Uniform bucket-level access status Autoclass status Website configuration storage.buckets.get Change the following bucket settings: Protection settings Default storage class Bucket labels Object lifecycle policies Uniform bucket-level access status Autoclass status Website configuration Object retention configurations storage.buckets.get storage.buckets.update storage.buckets.enableObjectRetention 1 Enable the Requester Pays feature storage.buckets.get storage.buckets.update Disable the Requester Pays feature storage.buckets.get storage.buckets.update resourcemanager.projects.createBillingAssignment 3 Change the public access prevention setting storage.buckets.get storage.buckets.setIamPolicy storage.buckets.update Change bucket permissions storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update Delete an empty bucket storage.buckets.delete storage.objects.list Delete a non-empty bucket storage.buckets.delete storage.objects.delete storage.objects.list Detach a tag from a bucket storage.buckets.deleteTagBinding Create a folder storage.folders.create Get the metadata of a folder storage.folders.get List folders storage.folders.list Rename folders storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) Delete folders storage.folders.delete Upload an object or folder of objects storage.objects.create storage.objects.delete 2 storage.objects.setRetention 4 View the details for an object 5 storage.objects.get storage.objects.list View the version history of an object storage.objects.get storage.objects.list Download an object 5 or folder of objects storage.objects.get storage.objects.list List objects in a bucket, including noncurrent objects and soft-deleted objects storage.objects.list Determine if an object is publicly accessible 5 storage.buckets.getIamPolicy storage.objects.list storage.objects.getIamPolicy 7 Rename an object or restore a noncurrent version of an object storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.getIamPolicy 7 storage.objects.setIamPolicy 7 Copy an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) Move an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.delete (for the source bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) View an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy Edit an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update Edit an object's metadata 5 storage.objects.get storage.objects.list storage.objects.update Add, change, or remove a retention configuration on an object 5 storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 9 Add or remove a hold on an object 5 storage.objects.get storage.objects.list storage.objects.update Delete an object 5 , a noncurrent version of an object, or a folder of objects storage.objects.delete storage.objects.list Restore a deleted object storage.objects.create storage.objects.delete 2 storage.objects.list storage.objects.restore Bulk restore deleted objects storage.objects.create storage.objects.delete 10 storage.objects.restore storage.buckets.restore storage.objects.setIamPolicy 7 ,11 View the name of a project's Cloud Storage service agent resourcemanager.projects.get View the service account HMAC keys for a project resourcemanager.projects.get storage.hmacKeys.list Create an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.create Disable or re-enable an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.update Delete an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.delete Create, view, or delete an HMAC key for the user account you are logged in as resourcemanager.projects.get Configure, update or disable the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.update View the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.get Create a cache using Rapid Cache storage.anywhereCaches.create List a cache using Rapid Cache storage.anywhereCaches.list Update a cache using Rapid Cache storage.anywhereCaches.update Pause a cache using Rapid Cache storage.anywhereCaches.pause Resume a cache using Rapid Cache storage.anywhereCaches.resume Get the metadata of a cache using Rapid Cache storage.anywhereCaches.get Disable a cache using Rapid Cache storage.anywhereCaches.disable 1 This permission is only required when enabling a bucket to support object retention configurations .
- Common permissions required for using the Google Cloud console Certain permissions are broadly necessary in order to use the Google Cloud console: All actions involving buckets should include resourcemanager.projects.get and storage.buckets.list permissions at the project level.
- 5 This action does not require storage.objects.list if it's performed on the details page for the relevant object and you don't access the details page from the overall list of objects for the bucket.
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Discover object storage with the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- The Copy URL button provides a shareable URL similar to the following: https://storage.googleapis.com/ YOUR BUCKET NAME /kitten.png To remove public access from the bucket and stop sharing the image publicly: Click the Permissions tab.
- To create a bucket: In the Google Cloud console, go to the Cloud Storage Buckets page.
- In the Google Cloud console, go to the Cloud Storage Buckets page.
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- This interface allows writing bytes to an Appendable Upload, and provides methods to close this channel -- optionally finalizing the upload. com. google. cloud. storage.
- Logging The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs. com. google. cloud. storage.
- If this policy is set, any deleted objects will be soft-deleted according to the time specified in the policy com. google. cloud. storage.
- Public Network Source The public network IP address ranges that can access the bucket and its data. com. google. cloud. storage.

