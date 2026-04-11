---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.779Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "gcloud alpha storage commands"
feature_slug: "gcloud-alpha-storage-commands"
latest_feature_date: "2022-08-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
keywords:
  - "gcloud"
  - "alpha"
  - "storage"
  - "commands"
  - "the"
  - "command"
  - "group"
  - "supports"
---

# gcloud alpha storage commands

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

The gcloud alpha storage command group supports creating buckets and viewing or editing bucket and object metadata; The gcloud alpha storage commands provide faster uploading and downloading performance than gsutil.

## Extended Definition

The gcloud alpha storage command group supports creating buckets and viewing or editing bucket and object metadata; The gcloud alpha storage commands provide faster uploading and downloading performance than gsutil.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)

## Supporting Pages

### Shim for Running gcloud storage \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To Enable Set use gcloud storage=True in the .boto config file under the [GSUtil] section: [GSUtil] use gcloud storage=True You can also set the flag for individual commands using the top-level -o flag: gsutil -o "GSUtil:use gcloud storage=True" -m cp -p file gs://bucket/obj Available Commands The gcloud storage CLI only supports a subset of gsutil commands.
- Boto Configuration Configuration found in the boto file is mapped 1:1 to gcloud environment variables where appropriate. [Credentials] aws access key id: AWS ACCESS KEY ID aws secret access key: AWS SECRET ACCESS KEY use client certificate: CLOUDSDK CONTEXT AWARE USE CLIENT CERTIFICATE [Boto] proxy: CLOUDSDK PROXY ADDRESS proxy type: CLOUDSDK PROXY TYPE proxy port: CLOUDSDK PROXY PORT proxy user: CLOUDSDK PROXY USERNAME proxy pass: CLOUDSDK PROXY PASSWORD proxy rdns: CLOUDSDK PROXY RDNS http socket timeout: CLOUDSDK CORE HTTP TIMEOUT ca certificates file: CLOUDSDK CORE CUSTOM CA CERTS FILE max retry delay: CLOUDSDK STORAGE BASE RETRY DELAY num retries: CLOUDSDK STORAGE MAX RETRIES [GSUtil] check hashes: CLOUDSDK STORAGE CHECK HASHES default project id: CLOUDSDK CORE PROJECT disable analytics prompt: CLOUDSDK CORE DISABLE USAGE REPORTING use magicfile: CLOUDSDK STORAGE USE MAGICFILE parallel composite upload threshold: CLOUDSDK STORAGE PARALLEL COMPOSITE UPLOAD THRESHOLD resumable threshold: CLOUDSDK STORAGE RESUMABLE THRESHOLD [OAuth2] client id: CLOUDSDK AUTH CLIENT ID client secret: CLOUDSDK AUTH CLIENT SECRET provider authorization uri: CLOUDSDK AUTH AUTH HOST provider token uri: CLOUDSDK AUTH TOKEN HOST General Compatibility Notes Due to its compatibility across all major platforms, multiprocessing is enabled for all commands by default (equivalent to the -m option always being included in gsutil).
- This will be updated as new commands are supported by both gcloud storage and the shim.
- Use gcloud storage commands in the Google Cloud CLI instead.

### "IAM permissions for gcloud storage commands \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists the Identity and Access Management (IAM) permissions required to run gcloud storage commands .
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for gcloud storage commands Stay organized with collections Save and categorize content based on your preferences.
- Command Flag Required IAM Permissions batch-operations jobs create storagebatchoperations.jobs.create batch-operations jobs cancel storagebatchoperations.jobs.cancel batch-operations jobs delete storagebatchoperations.jobs.delete batch-operations jobs get storagebatchoperations.jobs.get batch-operations jobs list storagebatchoperations.jobs.list buckets add-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets anywhere-caches create storage.anywhereCaches.create buckets anywhere-caches describe storage.anywhereCaches.get buckets anywhere-caches list storage.anywhereCaches.list buckets anywhere-caches update storage.anywhereCaches.update buckets anywhere-caches pause storage.anywhereCaches.pause buckets anywhere-caches resume storage.anywhereCaches.resume buckets anywhere-caches disable storage.anywhereCaches.disable buckets create storage.buckets.create storage.buckets.setIpFilter 15 buckets delete storage.buckets.delete buckets describe storage.buckets.get storage.buckets.getIamPolicy 1 storage.buckets.getIpFilter 16 buckets get-iam-policy storage.buckets.get storage.buckets.getIamPolicy buckets list storage.buckets.list storage.buckets.getIamPolicy 1 buckets notifications create storage.buckets.get storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 3 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 3 (for Pub/Sub topic receiving notifications) buckets notifications create --skip-topic-setup storage.buckets.get storage.buckets.update buckets notifications delete storage.buckets.get storage.buckets.update buckets notifications describe storage.buckets.get buckets notifications list storage.buckets.get buckets relocate storage.buckets.relocate buckets remove-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets set-iam-policy storage.buckets.setIamPolicy storage.buckets.update buckets update storage.buckets.update storage.buckets.setIpFilter 15 buckets update --no-requester-pays storage.buckets.update resourcemanager.projects.createBillingAssignment 2 buckets update --recovery-point-objective --rpo --[no-]uniform-bucket-level-access storage.buckets.get storage.buckets.update buckets update --clear-pap --clear-public-access-prevention --[no-]pap --[no-]public-access-prevention storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy cat storage.objects.get storage.objects.list 13 cp storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) du storage.objects.list folders create storage.folders.create folders delete storage.folders.delete folders describe storage.folders.get folders list storage.folders.list folders rename storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) hash storage.objects.get hmac create storage.hmacKeys.create hmac delete storage.hmacKeys.delete hmac describe storage.hmacKeys.get hmac list storage.hmacKeys.list hmac update storage.hmacKeys.update insights dataset-configs create storageinsights.datasetConfigs.create insights dataset-configs create-link storageinsights.datasetConfigs.linkDataset insights dataset-configs delete storageinsights.datasetConfigs.delete insights dataset-configs delete-link storageinsights.datasetConfigs.unlinkDataset insights dataset-configs describe storageinsights.datasetConfigs.get insights dataset-configs list storageinsights.datasetConfigs.list insights dataset-configs update storageinsights.datasetConfigs.update insights inventory-reports create storageinsights.reportConfigs.create insights inventory-reports delete storageinsights.reportConfigs.delete insights inventory-reports details list storageinsights.reportDetails.list insights inventory-reports details describe storageinsights.reportDetails.get insights inventory-reports list storageinsights.reportConfigs.list insights inventory-reports update storageinsights.reportConfigs.get storageinsights.reportConfigs.update ls (for bucket listing) storage.buckets.list storage.buckets.getIamPolicy 6 ls (for object listing) storage.objects.get 7 storage.objects.list storage.objects.getIamPolicy 8 ls --buckets storage.buckets.get storage.buckets.getIamPolicy 6 storage intelligence-config enable storage.intelligenceConfigs.update storage-intelligence disable storage.intelligenceConfigs.update storage-intelligence describe storage.intelligenceConfigs.get storage-intelligence update storage.intelligenceConfigs.update mv storage.objects.get (for the source objects) storage.objects.delete (for the source bucket) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) objects compose storage.objects.get storage.objects.create storage.objects.delete 9 objects describe storage.objects.get storage.objects.getIamPolicy 8 objects list storage.objects.list storage.objects.getIamPolicy 8 objects update storage.objects.get storage.objects.list storage.objects.update objects update --storage-class --encryption-key --clear-encryption-key storage.objects.get storage.objects.list storage.objects.create storage.objects.delete objects update --retention-mode --retain-until --clear-retention storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 11 operations cancel storage.bucketOperations.cancel operations describe storage.bucketOperations.get operations list storage.bucketOperations.list restore storage.objects.create storage.objects.delete 9 storage.objects.restore restore --async storage.objects.create storage.objects.delete 14 storage.objects.restore storage.buckets.restore rm storage.buckets.delete storage.objects.delete storage.objects.list rsync storage.objects.list (for the source bucket) storage.objects.get (for the source objects) storage.objects.list (for the destination bucket) storage.objects.get (for the destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 10 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) rsync --dry-run storage.objects.list (for the source and destination buckets) service-agent resourceManager.projects.get sign-url None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL.
- If you use the --recursive flag, you must have storage.objects.list permission for the relevant bucket, in addition to the permissions required for the specific command you are using.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- July 20, 2021 Feature gcloud alpha storage commands are now available.
- Feature New commands are now available gcloud alpha storage .
- In addition to using the Cloud Storage JSON API, you can now attach custom information to audit logs for requests by using the following tools: The gcloud or gsutil command-line tools The Cloud Storage client libraries The Cloud Storage XML API Signed URLs June 28, 2023 Change You can now have a maximum of 10 HMAC keys per service account.
- To do so, run the command gcloud components update --version=413.0.0 If you installed gsutil as a standalone tool, you can work around this issue by reverting to version 5.17 January 18, 2023 Announcement gcloud storage GA release 1.2 is now available.

