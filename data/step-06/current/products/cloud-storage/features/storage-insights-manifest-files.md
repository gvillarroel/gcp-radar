---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.917Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Storage Insights manifest files"
feature_slug: "storage-insights-manifest-files"
latest_feature_date: "2023-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud"
  - "https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist"
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options"
keywords:
  - "storage"
  - "insights"
  - "manifest"
  - "files"
  - "generates"
  - "to"
  - "locate"
  - "sharded"
---

# Storage Insights manifest files

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Storage Insights generates manifest files to locate sharded inventory report outputs for download.

## Extended Definition

Storage Insights generates manifest files to locate sharded inventory report outputs for download.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)

## Supporting Pages

### "IAM permissions for gcloud storage commands \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Command Flag Required IAM Permissions batch-operations jobs create storagebatchoperations.jobs.create batch-operations jobs cancel storagebatchoperations.jobs.cancel batch-operations jobs delete storagebatchoperations.jobs.delete batch-operations jobs get storagebatchoperations.jobs.get batch-operations jobs list storagebatchoperations.jobs.list buckets add-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets anywhere-caches create storage.anywhereCaches.create buckets anywhere-caches describe storage.anywhereCaches.get buckets anywhere-caches list storage.anywhereCaches.list buckets anywhere-caches update storage.anywhereCaches.update buckets anywhere-caches pause storage.anywhereCaches.pause buckets anywhere-caches resume storage.anywhereCaches.resume buckets anywhere-caches disable storage.anywhereCaches.disable buckets create storage.buckets.create storage.buckets.setIpFilter 15 buckets delete storage.buckets.delete buckets describe storage.buckets.get storage.buckets.getIamPolicy 1 storage.buckets.getIpFilter 16 buckets get-iam-policy storage.buckets.get storage.buckets.getIamPolicy buckets list storage.buckets.list storage.buckets.getIamPolicy 1 buckets notifications create storage.buckets.get storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 3 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 3 (for Pub/Sub topic receiving notifications) buckets notifications create --skip-topic-setup storage.buckets.get storage.buckets.update buckets notifications delete storage.buckets.get storage.buckets.update buckets notifications describe storage.buckets.get buckets notifications list storage.buckets.get buckets relocate storage.buckets.relocate buckets remove-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets set-iam-policy storage.buckets.setIamPolicy storage.buckets.update buckets update storage.buckets.update storage.buckets.setIpFilter 15 buckets update --no-requester-pays storage.buckets.update resourcemanager.projects.createBillingAssignment 2 buckets update --recovery-point-objective --rpo --[no-]uniform-bucket-level-access storage.buckets.get storage.buckets.update buckets update --clear-pap --clear-public-access-prevention --[no-]pap --[no-]public-access-prevention storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy cat storage.objects.get storage.objects.list 13 cp storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) du storage.objects.list folders create storage.folders.create folders delete storage.folders.delete folders describe storage.folders.get folders list storage.folders.list folders rename storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) hash storage.objects.get hmac create storage.hmacKeys.create hmac delete storage.hmacKeys.delete hmac describe storage.hmacKeys.get hmac list storage.hmacKeys.list hmac update storage.hmacKeys.update insights dataset-configs create storageinsights.datasetConfigs.create insights dataset-configs create-link storageinsights.datasetConfigs.linkDataset insights dataset-configs delete storageinsights.datasetConfigs.delete insights dataset-configs delete-link storageinsights.datasetConfigs.unlinkDataset insights dataset-configs describe storageinsights.datasetConfigs.get insights dataset-configs list storageinsights.datasetConfigs.list insights dataset-configs update storageinsights.datasetConfigs.update insights inventory-reports create storageinsights.reportConfigs.create insights inventory-reports delete storageinsights.reportConfigs.delete insights inventory-reports details list storageinsights.reportDetails.list insights inventory-reports details describe storageinsights.reportDetails.get insights inventory-reports list storageinsights.reportConfigs.list insights inventory-reports update storageinsights.reportConfigs.get storageinsights.reportConfigs.update ls (for bucket listing) storage.buckets.list storage.buckets.getIamPolicy 6 ls (for object listing) storage.objects.get 7 storage.objects.list storage.objects.getIamPolicy 8 ls --buckets storage.buckets.get storage.buckets.getIamPolicy 6 storage intelligence-config enable storage.intelligenceConfigs.update storage-intelligence disable storage.intelligenceConfigs.update storage-intelligence describe storage.intelligenceConfigs.get storage-intelligence update storage.intelligenceConfigs.update mv storage.objects.get (for the source objects) storage.objects.delete (for the source bucket) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) objects compose storage.objects.get storage.objects.create storage.objects.delete 9 objects describe storage.objects.get storage.objects.getIamPolicy 8 objects list storage.objects.list storage.objects.getIamPolicy 8 objects update storage.objects.get storage.objects.list storage.objects.update objects update --storage-class --encryption-key --clear-encryption-key storage.objects.get storage.objects.list storage.objects.create storage.objects.delete objects update --retention-mode --retain-until --clear-retention storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 11 operations cancel storage.bucketOperations.cancel operations describe storage.bucketOperations.get operations list storage.bucketOperations.list restore storage.objects.create storage.objects.delete 9 storage.objects.restore restore --async storage.objects.create storage.objects.delete 14 storage.objects.restore storage.buckets.restore rm storage.buckets.delete storage.objects.delete storage.objects.list rsync storage.objects.list (for the source bucket) storage.objects.get (for the source objects) storage.objects.list (for the destination bucket) storage.objects.get (for the destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 10 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) rsync --dry-run storage.objects.list (for the source and destination buckets) service-agent resourceManager.projects.get sign-url None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL.
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for gcloud storage commands Stay organized with collections Save and categorize content based on your preferences.
- For example, buckets notification create requires only storage.buckets.get and storage.buckets.update to use, but you must have additional permissions for the feature to work properly.
- If you use the --recursive flag, you must have storage.objects.list permission for the relevant bucket, in addition to the permissions required for the specific command you are using.

### "Analyze your stored data with Gemini Cloud Assist \_|\_ Cloud Storage \_\

- URL: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- Source ID: `site-iam-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- You can ask prompts such as the following: Prompts related to usage and cost savings: "5 largest buckets without Object Lifecycle Management" "5 largest buckets without Autoclass enabled" Prompts related to security and compliance: "5 largest buckets without object versioning enabled" "5 largest objects with a retention expiration date within the next 30 days" Prompts related to data discovery: "Buckets with a high volume of small files (each under 1 MB)" "Objects in Standard storage class smaller than 50 MB" Before you begin In order to use Gemini Cloud Assist for general prompts related to Cloud Storage, you must first set up Gemini Cloud Assist, including getting required roles.
- To get the permissions that you need to get insights on bucket and object metadata, ask your administrator to grant you the following IAM roles on the project, folder, or organization that contains the datasets you want to analyze: BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) Storage Insights Viewer ( roles/storageinsights.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The generated SQL query is similar to the following: SELECT bucket id, bucket size FROM buckets WHERE project id = 'example-project' ORDER BY bucket size DESC LIMIT 1; Optionally, you can enter suggested prompts: In the Google Cloud console, go to the Cloud Storage Storage Insights page.
- The following data is not available in Storage Insights datasets, meaning that Gemini Cloud Assist lacks the proper context to respond to prompts relating to that data: Specific cost data, for example: "how much does my bucket cost per month".

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/google egress bandwidth to increase Google egress for your buckets located in regions.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/rapid zonal bytes to increase storage for your buckets located in zones.
- Use storage.googleapis.com/multiregion internet egress bandwidth to increase Internet egress for your buckets located in multi-regions.
- Use storage.googleapis.com/dualregion internet egress bandwidth to increase Internet egress for your buckets located in dual-regions.

### Cloud Storage FUSE CLI reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- A path, for example: /tmp/user-example-bucket-gcsfuse-logs.txt . stdout when Cloud Storage FUSE is run in the foreground or syslog when Cloud Storage FUSE is run in the background --log-format Specifies the format of the log file. text json json --log-rotate-backup-file-count The maximum number of rotated log files to retain, excluding the active file that logs are written to.
- For example, when you specify warning , Cloud Storage FUSE generates logs for warnings and errors.
- See Files and directories in the Cloud Storage FUSE GitHub documentation for more information.
- A string, for example, "aiml-checkpointing" . "aiml-training" : optimizes performance for high throughput reads of large datasets and prevents Cloud GPUs and Cloud TPU hardware from waiting for data. aiml-checkpointing : optimizes performance for high throughput writes for large files by drastically reducing the time it takes to save multi-gigabyte checkpoints, minimizing training pauses. aiml-serving : optimizes performance for serving workloads by streamlining data access and applying caching mechanisms. "" --prometheus-port Exposes Prometheus metrics endpoint on the specified port and /metrics path.

