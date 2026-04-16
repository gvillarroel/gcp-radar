---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.893Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Soft-deleted bucket restore"
feature_slug: "soft-deleted-bucket-restore"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client"
  - "https://docs.cloud.google.com/storage/docs/autoclass"
keywords:
  - "soft"
  - "deleted"
  - "bucket"
  - "restore"
  - "storage"
  - "can"
  - "buckets"
  - "under"
---

# Soft-deleted bucket restore

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage can restore buckets deleted under an active soft delete policy during the retention period.

## Extended Definition

Cloud Storage can restore buckets deleted under an active soft delete policy during the retention period.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)

## Supporting Pages

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note this property is only set for soft-deleted buckets. storage class Retrieve or set the storage class for the bucket.
- Note this property is only set for soft-deleted buckets. hierarchical namespace enabled Whether hierarchical namespace is enabled for this bucket. :setter: Update whether hierarchical namespace is enabled for this bucket. :getter: Query whether hierarchical namespace is enabled for this bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description str or NoneType The self link for the bucket or None if the bucket's resource has not been loaded from the server. soft delete policy Retrieve the soft delete policy for this bucket.
- See https://cloud.google.com/storage/docs/soft-delete Returns Type Description SoftDeletePolicy an instance for managing the bucket's soft delete policy. soft delete time If this bucket has been soft-deleted, returns the time at which it became soft-deleted.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: gcloud storage buckets create gs:// BUCKET NAME --project= PROJECT ID --default-storage-class= STORAGE CLASS --location= BUCKET LOCATION --uniform-bucket-level-access --soft-delete-duration= RETENTION DURATION --encryption-enforcement-file= ENCRYPTION ENFORCEMENT FILE For a complete list of options for bucket creation using the gcloud CLI, see buckets create options .
- If not otherwise specified in your request, buckets are created in the US multi-region with a default storage class of Standard storage and have a seven-day soft delete retention duration.
- For more information, see Set up authentication for client libraries . def create bucket class location bucket name : The ID to give your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . create bucket bucket name , location : "ASIA" , storage class : "COLDLINE" puts "Created bucket #{ bucket . name } in #{ bucket . location } with #{ bucket . storage class } class" end Terraform You can use a Terraform resource to create a storage bucket .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.create storage.buckets.enableObjectRetention (only required if enabling object retention configurations for the bucket) storage.buckets.list (only required if creating a bucket using the Google Cloud console.) resourcemanager.projects.get (only required if creating a bucket using the Google Cloud console) You might also be able to get these permissions with custom roles or other predefined roles.

### Class Client (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- Source ID: `site-python-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See: https://cloud.google.com/storage/docs/soft-delete list buckets list buckets ( max results = None , page token = None , prefix = None , projection = "noAcl" , fields = None , project = None , page size = None , timeout = 60 , retry = google . api core . retry . retry unary .
- See: https://cloud.google.com/storage/docs/soft-delete return partial success bool (Optional) If True, the response will also contain a list of unreachable buckets if the buckets are unavailable.
- See: configuring retries soft deleted bool (Optional) If true, only soft-deleted buckets will be listed as distinct results in order of increasing generation number.
- The generation can be used to specify a specific soft-deleted version of the bucket, in conjunction with the soft deleted argument below.

### Autoclass \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additionally, you can monitor the number of bytes stored in each storage class over time for your Autoclass-enabled buckets by going to the bucket's Configuration tab in the Google Cloud console and clicking See Performance .
- When you enable Autoclass on an existing bucket, the following occurs: All objects in the bucket, except soft-deleted objects , transition to Standard storage.
- When a soft-deleted object is restored , the resulting object begins in Standard storage, regardless of the storage class of the soft-deleted object.
- You can subsequently change an object's storage class as you would for non-Autoclass buckets.

