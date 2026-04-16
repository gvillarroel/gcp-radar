---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.954Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Archive Storage"
feature_slug: "archive-storage"
latest_feature_date: "2020-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/autoclass"
  - "https://docs.cloud.google.com/storage/docs/storage-classes"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
keywords:
  - "archive"
  - "storage"
  - "is"
  - "class"
  - "for"
  - "long"
  - "term"
  - "rarely"
---

# Archive Storage

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Archive Storage is a storage class for long-term, rarely accessed data.

## Extended Definition

Archive Storage is a storage class for long-term, rarely accessed data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### Autoclass \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the bucket is configured to use Archive storage as the terminal storage class, objects continue to transition to colder storage classes as follows: Any object that isn't accessed for 90 days transitions to Coldline storage.
- By default, the terminal storage class for Autoclass is Nearline storage, which means objects transition to Nearline storage and remain in that storage class until they're accessed.
- Optionally, you can configure Autoclass so that the terminal storage class is Archive storage.
- When you change the terminal storage class in your Autoclass configuration, the following occurs: If you change the terminal storage class from Archive storage to Nearline storage, objects in Archive storage and Coldline storage at the time of your change transition to Nearline storage.

### Storage classes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Storage Class Name for APIs and CLIs Minimum storage duration Retrieval fees Typical monthly availability 1 Rapid storage 2 RAPID None None 99.95% in zones Standard storage STANDARD None None 99.99% in multi-regions and dual-regions 99.99% in regions Nearline storage NEARLINE 30 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Coldline storage COLDLINE 90 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Archive storage ARCHIVE 365 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions 1 See the class descriptions for the availability SLA for each storage class.
- For example, objects in your bucket other than soft-deleted objects transition to Standard storage when Autoclass is enabled, and this includes objects stored in legacy classes.
- Note, however, that for data being kept entirely for backup or archiving purposes, Archive storage is more cost-effective, as it offers the lowest storage costs.
- Archive storage Archive storage is the lowest-cost, highly durable storage service for data archiving, online backup, and disaster recovery.

### Class Blob (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob)
- Source ID: `site-python-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The default is "auto", which will try to detect if the C extension for crc32c is installed and fall back to md5 otherwise. predefined acl str (Optional) Predefined access control list if generation match long (Optional) See :ref: using-if-generation-match if generation not match long (Optional) See :ref: using-if-generation-not-match if metageneration match long (Optional) See :ref: using-if-metageneration-match if metageneration not match long (Optional) See :ref: using-if-metageneration-not-match retry google.api core.retry.Retry or google.cloud.storage.retry.ConditionalRetryPolicy (Optional) How to retry the RPC.
- Note this property is only set for soft-deleted objects. storage class Scalar property getter. temporary hold Scalar property getter. time created Retrieve the timestamp at which the object was created.
- If not passed, falls back to the client stored on the blob's bucket. if generation match long (Optional) See :ref: using-if-generation-match Note that the generation to be matched is that of the destination blob. if generation not match long (Optional) See :ref: using-if-generation-not-match Note that the generation to be matched is that of the destination blob. if metageneration match long (Optional) See :ref: using-if-metageneration-match Note that the metageneration to be matched is that of the destination blob. if metageneration not match long (Optional) See :ref: using-if-metageneration-not-match Note that the metageneration to be matched is that of the destination blob. if source generation match long (Optional) Makes the operation conditional on whether the source object's generation matches the given value. if source generation not match long (Optional) Makes the operation conditional on whether the source object's generation does not match the given value. if source metageneration match long (Optional) Makes the operation conditional on whether the source object's current metageneration matches the given value. if source metageneration not match long (Optional) Makes the operation conditional on whether the source object's current metageneration does not match the given value. timeout float or tuple (Optional) The amount of time, in seconds, to wait for the server response.
- If not passed, falls back to the client stored on the blob's bucket. if generation match long (Optional) See :ref: using-if-generation-match Note that the generation to be matched is that of the destination blob. if generation not match long (Optional) See :ref: using-if-generation-not-match Note that the generation to be matched is that of the destination blob. if metageneration match long (Optional) See :ref: using-if-metageneration-match Note that the metageneration to be matched is that of the destination blob. if metageneration not match long (Optional) See :ref: using-if-metageneration-not-match Note that the metageneration to be matched is that of the destination blob. if source generation match long (Optional) Makes the operation conditional on whether the source object's generation matches the given value. if source generation not match long (Optional) Makes the operation conditional on whether the source object's generation does not match the given value. if source metageneration match long (Optional) Makes the operation conditional on whether the source object's current metageneration matches the given value. if source metageneration not match long (Optional) Makes the operation conditional on whether the source object's current metageneration does not match the given value. timeout float or tuple (Optional) The amount of time, in seconds, to wait for the server response.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description str The terminal storage class if Autoclass is enabled, else None . autoclass terminal storage class update time The time at which the Autoclass terminal storage class field was last updated for this bucket Returns Type Description datetime.datetime or NoneType point-in time at which the bucket's terminal storage class is last updated, or None if the property is not set locally. autoclass toggle time Retrieve the toggle time when Autoclaass was last enabled or disabled for the bucket.
- See https://cloud.google.com/storage/docs/encryption#customer-supplied . generation long (Optional) If present, selects a specific revision of this object. if etag match Union[str, Set[str]] (Optional) See :ref: using-if-etag-match if etag not match Union[str, Set[str]] (Optional) See :ref: using-if-etag-not-match if generation match long (Optional) See :ref: using-if-generation-match if generation not match long (Optional) See :ref: using-if-generation-not-match if metageneration match long (Optional) See :ref: using-if-metageneration-match if metageneration not match long (Optional) See :ref: using-if-metageneration-not-match timeout float or tuple (Optional) The amount of time, in seconds, to wait for the server response.
- Returns Type Description bool True if enabled, else False. autoclass terminal storage class The storage class that objects in an Autoclass bucket eventually transition to if they are not read for a certain length of time.
- See https://cloud.google.com/storage/docs/using-autoclass for details. :setter: Set the terminal storage class for Autoclass configuration. :getter: Get the terminal storage class for Autoclass configuration.

