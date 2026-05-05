# Default soft delete retention via bucket tags

Product: Cloud Storage
Feature slug: `default-soft-delete-retention-via-bucket-tags`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Bucket tags can define a default soft delete retention duration for newly created buckets in an organization.

## Lifecycle

- Latest feature date: 2024-07-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob), [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets))
- encrypt (evidence: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob), [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets))
- iam (evidence: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob), [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets))
- key (evidence: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob), [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets))
- policy (evidence: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob), [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets))
- role (evidence: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob), [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets))
- token (evidence: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy), [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob), [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Blob)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
