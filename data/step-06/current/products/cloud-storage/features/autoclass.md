---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.929Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Autoclass"
feature_slug: "autoclass"
latest_feature_date: "2022-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/autoclass"
  - "https://docs.cloud.google.com/storage/docs/storage-classes"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
  - "https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file"
keywords:
  - "autoclass"
  - "automatically"
  - "transitions"
  - "object"
  - "storage"
  - "classes"
  - "based"
  - "on"
---

# Autoclass

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Autoclass automatically transitions object storage classes based on access patterns.

## Extended Definition

Autoclass automatically transitions object storage classes based on access patterns.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)

## Supporting Pages

### Autoclass \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- Source ID: `site-iam-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Setup The Autoclass feature automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.
- Transition behavior Once Autoclass is enabled, objects at least 128 KiB in size transition between storage classes as follows: If an object's data is accessed, the object transitions to Standard storage.
- If the bucket is configured to use Archive storage as the terminal storage class, objects continue to transition to colder storage classes as follows: Any object that isn't accessed for 90 days transitions to Coldline storage.
- During this period, the object continues to be billed using its pre-transition storage class, except in the case of transitions to Standard storage that occur as a result of enabling Autoclass.

### Storage classes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, objects in your bucket other than soft-deleted objects transition to Standard storage when Autoclass is enabled, and this includes objects stored in legacy classes.
- You can enable the Autoclass feature on a bucket to let Cloud Storage manage storage class transitions for you automatically.
- Home Documentation Storage Cloud Storage Guides Send feedback Storage classes Stay organized with collections Save and categorize content based on your preferences.
- Storing your objects in the same zones as your compute resources enables significantly lower latency and higher throughput compared to other storage classes.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- Parameter Name Description storage class str, one of STORAGE CLASSES . new storage class to assign to matching items. blob blob ( blob name , chunk size = None , encryption key = None , kms key name = None , generation = None ) Factory constructor for blob object.
- Returns Type Description bool True if enabled, else False. autoclass terminal storage class The storage class that objects in an Autoclass bucket eventually transition to if they are not read for a certain length of time.
- See https://cloud.google.com/storage/docs/encryption#customer-supplied . generation long (Optional) If present, selects a specific revision of this object. if etag match Union[str, Set[str]] (Optional) See :ref: using-if-etag-match if etag not match Union[str, Set[str]] (Optional) See :ref: using-if-etag-not-match if generation match long (Optional) See :ref: using-if-generation-match if generation not match long (Optional) See :ref: using-if-generation-not-match if metageneration match long (Optional) See :ref: using-if-metageneration-match if metageneration not match long (Optional) See :ref: using-if-metageneration-not-match timeout float or tuple (Optional) The amount of time, in seconds, to wait for the server response.

### Cloud Storage FUSE configuration file \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- For Compute Engine VMs (including standalone Cloud Storage FUSE or non-Google Kubernetes Engine based deployments), enabling cache-dir automatically sets file-cache:max-size-mb to -1 .
- Default value for low-specification machines with limited resources: 4 Default value for high-specification machines with a large amount of resources: 1600 enable-buffered-read Specifies asynchronous prefetching of parts of a Cloud Storage object into an in-memory buffer, allowing subsequent reads to be served from the buffer instead of requiring network calls.
- 0 : Disables the file cache. -1 cache-file-for-range-read Determines whether the full object should be downloaded asynchronously and stored in the Cloud Storage FUSE cache directory when the first read is completed from a non-zero offset.
- Twice the number of CPU cores on your machine or 16 , whichever is higher. download-chunk-size-mb Specifies the size of each read request in MiB that each goroutine makes to Cloud Storage when downloading the object into the file cache.

