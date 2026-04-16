---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.957Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Cloud DLP inspection for Cloud Storage buckets"
feature_slug: "cloud-dlp-inspection-for-cloud-storage-buckets"
latest_feature_date: "2019-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/cloud-console"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud"
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-console"
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud"
keywords:
  - "dlp"
  - "inspection"
  - "for"
  - "storage"
  - "buckets"
  - "can"
  - "inspect"
  - "sensitive"
---

# Cloud DLP inspection for Cloud Storage buckets

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud DLP can inspect Cloud Storage buckets for sensitive information from the Google Cloud Console.

## Extended Definition

Cloud DLP can inspect Cloud Storage buckets for sensitive information from the Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud)

## Supporting Pages

### Google Cloud console \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a guide to performing a Sensitive Data Protection scan on a bucket, see Inspecting a Cloud Storage location .
- Scanning the bucket for sensitive data using Sensitive Data Protection Sensitive Data Protection is a service that lets you identify and protect sensitive data in your buckets, such as credit card numbers, IP IP addresses, and other forms of personally identifiable information (PII).
- You can initiate a Sensitive Data Protection scan for a bucket by clicking the Other services drop-down in the Objects tab, selecting Inspect for sensitive data , and following the instructions.
- Console features The Google Cloud console provides the following features: Access to all your Google Cloud projects Access to the Cloud Shell A customizable project dashboard, with an overview of Google Cloud resources, billing, and a filterable activity listing Access to all Google Cloud APIs, with a dashboard specific to each API, and access to manage your resources Links to Google Cloud starting points, news, and documentation The Google Cloud console is used to perform a variety of tasks in Cloud Storage, such as the following: Creating buckets Uploading objects to buckets and downloading objects from buckets Filtering and sorting lists of buckets and objects Deleting objects Creating and managing folders Controlling access to your data and resources by using Identity and Access Management (IAM) and ACLs Monitoring buckets and bandwidth usage Using Cloud Storage features like Rapid Cache , soft delete , and Object Versioning Try it for yourself If you're new to Google Cloud, create an account to evaluate how Cloud Storage performs in real-world scenarios.

### "IAM permissions for gcloud storage commands \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Command Flag Required IAM Permissions batch-operations jobs create storagebatchoperations.jobs.create batch-operations jobs cancel storagebatchoperations.jobs.cancel batch-operations jobs delete storagebatchoperations.jobs.delete batch-operations jobs get storagebatchoperations.jobs.get batch-operations jobs list storagebatchoperations.jobs.list buckets add-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets anywhere-caches create storage.anywhereCaches.create buckets anywhere-caches describe storage.anywhereCaches.get buckets anywhere-caches list storage.anywhereCaches.list buckets anywhere-caches update storage.anywhereCaches.update buckets anywhere-caches pause storage.anywhereCaches.pause buckets anywhere-caches resume storage.anywhereCaches.resume buckets anywhere-caches disable storage.anywhereCaches.disable buckets create storage.buckets.create storage.buckets.setIpFilter 15 buckets delete storage.buckets.delete buckets describe storage.buckets.get storage.buckets.getIamPolicy 1 storage.buckets.getIpFilter 16 buckets get-iam-policy storage.buckets.get storage.buckets.getIamPolicy buckets list storage.buckets.list storage.buckets.getIamPolicy 1 buckets notifications create storage.buckets.get storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 3 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 3 (for Pub/Sub topic receiving notifications) buckets notifications create --skip-topic-setup storage.buckets.get storage.buckets.update buckets notifications delete storage.buckets.get storage.buckets.update buckets notifications describe storage.buckets.get buckets notifications list storage.buckets.get buckets relocate storage.buckets.relocate buckets remove-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets set-iam-policy storage.buckets.setIamPolicy storage.buckets.update buckets update storage.buckets.update storage.buckets.setIpFilter 15 buckets update --no-requester-pays storage.buckets.update resourcemanager.projects.createBillingAssignment 2 buckets update --recovery-point-objective --rpo --[no-]uniform-bucket-level-access storage.buckets.get storage.buckets.update buckets update --clear-pap --clear-public-access-prevention --[no-]pap --[no-]public-access-prevention storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy cat storage.objects.get storage.objects.list 13 cp storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) du storage.objects.list folders create storage.folders.create folders delete storage.folders.delete folders describe storage.folders.get folders list storage.folders.list folders rename storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) hash storage.objects.get hmac create storage.hmacKeys.create hmac delete storage.hmacKeys.delete hmac describe storage.hmacKeys.get hmac list storage.hmacKeys.list hmac update storage.hmacKeys.update insights dataset-configs create storageinsights.datasetConfigs.create insights dataset-configs create-link storageinsights.datasetConfigs.linkDataset insights dataset-configs delete storageinsights.datasetConfigs.delete insights dataset-configs delete-link storageinsights.datasetConfigs.unlinkDataset insights dataset-configs describe storageinsights.datasetConfigs.get insights dataset-configs list storageinsights.datasetConfigs.list insights dataset-configs update storageinsights.datasetConfigs.update insights inventory-reports create storageinsights.reportConfigs.create insights inventory-reports delete storageinsights.reportConfigs.delete insights inventory-reports details list storageinsights.reportDetails.list insights inventory-reports details describe storageinsights.reportDetails.get insights inventory-reports list storageinsights.reportConfigs.list insights inventory-reports update storageinsights.reportConfigs.get storageinsights.reportConfigs.update ls (for bucket listing) storage.buckets.list storage.buckets.getIamPolicy 6 ls (for object listing) storage.objects.get 7 storage.objects.list storage.objects.getIamPolicy 8 ls --buckets storage.buckets.get storage.buckets.getIamPolicy 6 storage intelligence-config enable storage.intelligenceConfigs.update storage-intelligence disable storage.intelligenceConfigs.update storage-intelligence describe storage.intelligenceConfigs.get storage-intelligence update storage.intelligenceConfigs.update mv storage.objects.get (for the source objects) storage.objects.delete (for the source bucket) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) objects compose storage.objects.get storage.objects.create storage.objects.delete 9 objects describe storage.objects.get storage.objects.getIamPolicy 8 objects list storage.objects.list storage.objects.getIamPolicy 8 objects update storage.objects.get storage.objects.list storage.objects.update objects update --storage-class --encryption-key --clear-encryption-key storage.objects.get storage.objects.list storage.objects.create storage.objects.delete objects update --retention-mode --retain-until --clear-retention storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 11 operations cancel storage.bucketOperations.cancel operations describe storage.bucketOperations.get operations list storage.bucketOperations.list restore storage.objects.create storage.objects.delete 9 storage.objects.restore restore --async storage.objects.create storage.objects.delete 14 storage.objects.restore storage.buckets.restore rm storage.buckets.delete storage.objects.delete storage.objects.list rsync storage.objects.list (for the source bucket) storage.objects.get (for the source objects) storage.objects.list (for the destination bucket) storage.objects.get (for the destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 10 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) rsync --dry-run storage.objects.list (for the source and destination buckets) service-agent resourceManager.projects.get sign-url None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL.
- For example, buckets notification create requires only storage.buckets.get and storage.buckets.update to use, but you must have additional permissions for the feature to work properly.
- Similarly, if you use URI wildcards to select multiple buckets in a command, you must have storage.buckets.list permission for the project(s) containing the buckets.
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for gcloud storage commands Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Discover object storage with the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following role or roles on the project: Storage Admin Check for the roles In the Google Cloud console, go to the IAM page.
- Make sure that you have the following role or roles on the project: Storage Admin Check for the roles In the Google Cloud console, go to the IAM page.
- Caution: Don't include sensitive information in the bucket name, because the bucket namespace is global and publicly visible.
- Bucket names cannot be represented as an IP address in dotted-decimal notation (for example, 192.168.5.4).

### "Quickstart: Discover object storage with the Google Cloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Give someone access to your bucket Use the gcloud storage buckets add-iam-policy-binding command to give a specific email address permission to add objects to your bucket: gcloud storage buckets add-iam-policy-binding gs:// BUCKET NAME --member=user:jeffersonloveshiking@gmail.com --role=roles/storage.objectCreator The command is successful if your response contains the following: bindings: - members: - user:jeffersonloveshiking@gmail.com role: roles/storage.objectCreator Now this user can add items to your bucket.
- Make the objects publicly accessible Use the gcloud storage buckets add-iam-policy-binding command to grant all users permission to read the images stored in your bucket: gcloud storage buckets add-iam-policy-binding gs:// BUCKET NAME --member=allUsers --role=roles/storage.objectViewer The command is successful if your response contains the following: bindings: - members: - allUsers role: roles/storage.objectViewer Now anyone can get your images.
- Use the gcloud storage buckets create command and a globally unique name to create a bucket: gcloud storage buckets create gs:// BUCKET NAME / --uniform-bucket-level-access Replace BUCKET NAME with a name for your bucket.
- Copy the object to a simulated folder in the bucket Use the gcloud storage cp command to create a simulated folder and copy the image into it: gcloud storage cp gs:// BUCKET NAME /kitten.png gs:// BUCKET NAME /quickstart-folder/kitten3.png Note: Simulated folders in Cloud Storage have limitations compared to local file systems or folders in buckets that have hierarchical namespace enabled, but many of the same operations are supported.

