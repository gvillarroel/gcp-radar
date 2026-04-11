---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.691Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Default soft delete retention duration in console"
feature_slug: "default-soft-delete-retention-duration-in-console"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
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
Coverage: LOW

## Step 02 Summary

The Google Cloud console can set a default soft delete retention duration for new buckets.

## Extended Definition

The Google Cloud console can set a default soft delete retention duration for new buckets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)

## Supporting Pages

### "Class SoftDeletePolicy (3.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://cloud.google.com/storage/docs/soft-delete Parameters Name Description bucket Bucket Bucket for which this instance is the policy. retention duration seconds int (Optional) The period of time in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. effective time datetime.datetime (Optional) When the bucket's soft delete policy is effective.
- Returns Type Description datetime.datetime or NoneType point-in time at which the bucket's soft delte policy is effective, or None if the property is not set. retention duration seconds Get the retention duration of the bucket's soft delete policy.
- Returns Type Description SoftDeletePolicy Instance created from resource. fromkeys fromkeys ( value = None , / ) Create a new dictionary with keys from iterable and values set to value. get get ( key , default = None , / ) Return the value for key if key is in the dictionary, else default. items items () API documentation for storage.bucket.SoftDeletePolicy.items method. keys keys () API documentation for storage.bucket.SoftDeletePolicy.keys method. pop pop ( k [, d ]) If the key is not found, return the default if given; otherwise, raise a KeyError. popitem popitem () Remove and return a (key, value) pair as a 2-tuple.
- Return the value for key if key is in the dictionary, else default. update update ([ E , ] F ) If E is present and has a .keys() method, then does: for k in E: D[k] = E[k] If E is present and lacks a .keys() method, then does: for k, v in E: D[k] = v In either case, this is followed by: for k in F: D[k] = F[k] values values () API documentation for storage.bucket.SoftDeletePolicy.values method.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: gcloud storage buckets create gs:// BUCKET NAME --project= PROJECT ID --default-storage-class= STORAGE CLASS --location= BUCKET LOCATION --uniform-bucket-level-access --soft-delete-duration= RETENTION DURATION --encryption-enforcement-file= ENCRYPTION ENFORCEMENT FILE For a complete list of options for bucket creation using the gcloud CLI, see buckets create options .
- If not otherwise specified in your request, buckets are created in the US multi-region with a default storage class of Standard storage and have a seven-day soft delete retention duration.
- For example, STANDARD . --uniform-bucket-level-access : Enable uniform bucket-level access for your bucket. --soft-delete-duration : Specify a soft delete retention duration, which is the number of days you want to retain objects after they get deleted.
- To change the amount of time that soft delete retains objects after deletion, select the Soft delete policy checkbox, and then select the Set custom retention duration option.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Go Changes for storage/internal/apiv2 1.48.0 (2024-12-05) Features storage/dataflux: Run worksteal listing parallel to sequential listing ( #10966 ) ( 3005f5a ) storage: Add Writer.ChunkTransferTimeout ( #11111 ) ( fd1db20 ) storage: Allow non default service account ( #11137 ) ( 19f01c3 ) Bug Fixes storage: Add backoff to gRPC write retries ( #11200 ) ( a7db927 ) storage: Correct direct connectivity check ( #11152 ) ( a75c8b0 ) storage: Disable soft delete policy using 0 retentionDurationSeconds ( #11226 ) ( f087721 ) storage: Retry SignBlob call for URL signing ( #11154 ) ( f198452 ) Python Changes for google-cloud-storage 2.19.0 (2024-11-21) Features Add integration test for universe domain ( #1346 ) ( 02a972d ) Add restore bucket and handling for soft-deleted buckets ( #1365 ) ( ab94efd ) Add support for restore token ( #1369 ) ( 06ed15b ) IAM signBlob retry and universe domain support ( #1380 ) ( abc8061 ) Bug Fixes Allow signed post policy v4 with service account and token ( #1356 ) ( 8ec02c0 ) Do not spam the log with checksum related INFO messages when downloading using transfer manager ( #1357 ) ( 42392ef ) November 25, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- July 31, 2024 Feature You can now use the Google Cloud console to set a default soft delete retention duration.
- Python Changes for google-cloud-storage 2.18.0 (2024-07-09) Features Add OpenTelemetry Tracing support as a preview feature ( #1288 ) ( c2ab0e0 ) Bug Fixes Allow Protobuf 5.x ( #1317 ) ( 152b249 ) Correct notification error message ( #1290 ) ( 1cb977d ), closes #1289 July 23, 2024 Feature You can now use tags to set a default soft delete retention duration on newly created buckets in your organization.
- If you delete a bucket with an active soft delete policy, Cloud Storage retains the bucket for the specified soft delete retention duration, during which the bucket can be restored to a live state.

