---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.878Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud Pub/Sub notifications for Cloud Storage"
feature_slug: "cloud-pub-sub-notifications-for-cloud-storage"
latest_feature_date: "2017-03-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud"
  - "https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage"
keywords:
  - "pub"
  - "sub"
  - "notifications"
  - "for"
  - "storage"
  - "can"
  - "send"
  - "object"
---

# Cloud Pub/Sub notifications for Cloud Storage

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Cloud Storage can send object change notifications to Cloud Pub/Sub with configurable event types and payload information.

## Extended Definition

Cloud Storage can send object change notifications to Cloud Pub/Sub with configurable event types and payload information.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- January 04, 2018 Change The Cloud Pub/Sub Notifications for Cloud Storage feature can now have up to 10 different notification configurations send notifications for the same event.
- December 15, 2025 Libraries Python 3.7.0 (2025-12-09) Features Auto enable mTLS when supported certificates are detected ( #1637 ) ( 4e91c54 ) Send entire object checksum in the final api call of resumable upload ( #1654 ) ( ddce7e5 ) Support urllib3 >= 2.6.0 ( #1658 ) ( 57405e9 ) Bug Fixes bucket: Move blob fails when the new blob name contains characters that need to be url encoded ( #1605 ) ( ec470a2 ) November 24, 2025 Libraries Python 3.6.0 (2025-11-17) Features Add support for partial list buckets ( #1606 ) ( 92fc2b0 ) Make return partial success and unreachable fields public for list Bucket ( #1601 ) ( 323cddd ) zb-experimental: Add async write object stream ( 5ab8103 ) zb-experimental: Add async write object stream ( #1612 ) ( 5ab8103 ) Bug Fixes Don't pass credentials to StorageClient ( #1608 ) ( 195d644 ) November 14, 2025 Feature You can now use the Google Cloud console to relocate buckets .
- March 27, 2017 Feature Cloud Pub/Sub Notifications for Cloud Storage BETA Track changes to objects in your buckets through notifications sent to Cloud Pub/Sub.
- To generate notifications for changes to objects, use Pub/Sub notifications for Cloud Storage instead.

### "IAM permissions for gcloud storage commands \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Command Flag Required IAM Permissions batch-operations jobs create storagebatchoperations.jobs.create batch-operations jobs cancel storagebatchoperations.jobs.cancel batch-operations jobs delete storagebatchoperations.jobs.delete batch-operations jobs get storagebatchoperations.jobs.get batch-operations jobs list storagebatchoperations.jobs.list buckets add-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets anywhere-caches create storage.anywhereCaches.create buckets anywhere-caches describe storage.anywhereCaches.get buckets anywhere-caches list storage.anywhereCaches.list buckets anywhere-caches update storage.anywhereCaches.update buckets anywhere-caches pause storage.anywhereCaches.pause buckets anywhere-caches resume storage.anywhereCaches.resume buckets anywhere-caches disable storage.anywhereCaches.disable buckets create storage.buckets.create storage.buckets.setIpFilter 15 buckets delete storage.buckets.delete buckets describe storage.buckets.get storage.buckets.getIamPolicy 1 storage.buckets.getIpFilter 16 buckets get-iam-policy storage.buckets.get storage.buckets.getIamPolicy buckets list storage.buckets.list storage.buckets.getIamPolicy 1 buckets notifications create storage.buckets.get storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 3 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 3 (for Pub/Sub topic receiving notifications) buckets notifications create --skip-topic-setup storage.buckets.get storage.buckets.update buckets notifications delete storage.buckets.get storage.buckets.update buckets notifications describe storage.buckets.get buckets notifications list storage.buckets.get buckets relocate storage.buckets.relocate buckets remove-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets set-iam-policy storage.buckets.setIamPolicy storage.buckets.update buckets update storage.buckets.update storage.buckets.setIpFilter 15 buckets update --no-requester-pays storage.buckets.update resourcemanager.projects.createBillingAssignment 2 buckets update --recovery-point-objective --rpo --[no-]uniform-bucket-level-access storage.buckets.get storage.buckets.update buckets update --clear-pap --clear-public-access-prevention --[no-]pap --[no-]public-access-prevention storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy cat storage.objects.get storage.objects.list 13 cp storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) du storage.objects.list folders create storage.folders.create folders delete storage.folders.delete folders describe storage.folders.get folders list storage.folders.list folders rename storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) hash storage.objects.get hmac create storage.hmacKeys.create hmac delete storage.hmacKeys.delete hmac describe storage.hmacKeys.get hmac list storage.hmacKeys.list hmac update storage.hmacKeys.update insights dataset-configs create storageinsights.datasetConfigs.create insights dataset-configs create-link storageinsights.datasetConfigs.linkDataset insights dataset-configs delete storageinsights.datasetConfigs.delete insights dataset-configs delete-link storageinsights.datasetConfigs.unlinkDataset insights dataset-configs describe storageinsights.datasetConfigs.get insights dataset-configs list storageinsights.datasetConfigs.list insights dataset-configs update storageinsights.datasetConfigs.update insights inventory-reports create storageinsights.reportConfigs.create insights inventory-reports delete storageinsights.reportConfigs.delete insights inventory-reports details list storageinsights.reportDetails.list insights inventory-reports details describe storageinsights.reportDetails.get insights inventory-reports list storageinsights.reportConfigs.list insights inventory-reports update storageinsights.reportConfigs.get storageinsights.reportConfigs.update ls (for bucket listing) storage.buckets.list storage.buckets.getIamPolicy 6 ls (for object listing) storage.objects.get 7 storage.objects.list storage.objects.getIamPolicy 8 ls --buckets storage.buckets.get storage.buckets.getIamPolicy 6 storage intelligence-config enable storage.intelligenceConfigs.update storage-intelligence disable storage.intelligenceConfigs.update storage-intelligence describe storage.intelligenceConfigs.get storage-intelligence update storage.intelligenceConfigs.update mv storage.objects.get (for the source objects) storage.objects.delete (for the source bucket) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) objects compose storage.objects.get storage.objects.create storage.objects.delete 9 objects describe storage.objects.get storage.objects.getIamPolicy 8 objects list storage.objects.list storage.objects.getIamPolicy 8 objects update storage.objects.get storage.objects.list storage.objects.update objects update --storage-class --encryption-key --clear-encryption-key storage.objects.get storage.objects.list storage.objects.create storage.objects.delete objects update --retention-mode --retain-until --clear-retention storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 11 operations cancel storage.bucketOperations.cancel operations describe storage.bucketOperations.get operations list storage.bucketOperations.list restore storage.objects.create storage.objects.delete 9 storage.objects.restore restore --async storage.objects.create storage.objects.delete 14 storage.objects.restore storage.buckets.restore rm storage.buckets.delete storage.objects.delete storage.objects.list rsync storage.objects.list (for the source bucket) storage.objects.get (for the source objects) storage.objects.list (for the destination bucket) storage.objects.get (for the destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 10 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) rsync --dry-run storage.objects.list (for the source and destination buckets) service-agent resourceManager.projects.get sign-url None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL.
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for gcloud storage commands Stay organized with collections Save and categorize content based on your preferences.
- If you use the --recursive flag, you must have storage.objects.list permission for the relevant bucket, in addition to the permissions required for the specific command you are using.
- Wildcards and recursive flags If you use URI wildcards to select multiple objects in a command, you must have storage.objects.list permission for the bucket containing the objects.

### Shim for Running gcloud storage \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To Enable Set use gcloud storage=True in the .boto config file under the [GSUtil] section: [GSUtil] use gcloud storage=True You can also set the flag for individual commands using the top-level -o flag: gsutil -o "GSUtil:use gcloud storage=True" -m cp -p file gs://bucket/obj Available Commands The gcloud storage CLI only supports a subset of gsutil commands.
- The all-version flag ( -A ) silently enables sequential execution rather than raising an error. defacl The ch subcommand is not supported. defstorageclass Works as expected. hash In gsutil, the -m and -c flags that affect which hashes are displayed are ignored for cloud objects.
- What follows is a list of commands supported by the shim with any differences in behavior noted. acl The ch subcommand is not supported. autoclass Works as expected. bucketpolicyonly Works as expected. cat Prints object data for a second object even if the first object is invalid. compose Works as expected. cors get subcommand prints "[]" instead of "gs://[bucket name] has no CORS configuration". cp Copies a second object even if the first object is invalid.
- In both the shim and unshimmed cases, the old key is maintained. rm $folder$ delete markers are not supported. rpo Works as expected. setmeta Does not throw an error if no headers are changed. stat Includes a field "Storage class update time:" which may throw off tabbing. ubla Works as expected. versioning Works as expected. web The get subcommand has different JSON spacing and doesn't print an informational message if no configuration is found.

