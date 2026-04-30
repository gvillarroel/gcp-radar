# Bucket encryption type enforcement

Product: Cloud Storage
Feature slug: `bucket-encryption-type-enforcement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Storage lets you allow or prohibit specific encryption types for new objects created in a bucket.

## Lifecycle

- Latest feature date: 2026-04-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- encrypt
- iam
- identity
- key
- kms
- permission
- policy
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.EncryptionEnforcementConfig](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.EncryptionEnforcementConfig)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
