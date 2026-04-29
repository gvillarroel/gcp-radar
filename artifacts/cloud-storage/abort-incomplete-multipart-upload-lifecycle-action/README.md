# Abort incomplete multipart upload lifecycle action

Product: Cloud Storage
Feature slug: `abort-incomplete-multipart-upload-lifecycle-action`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Object Lifecycle Management can remove abandoned XML API multipart uploads with the AbortIncompleteMultipartUpload action.

## Lifecycle

- Latest feature date: 2022-06-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- iam
- key
- logging
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.LifecycleRuleAbortIncompleteMultipartUpload](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.LifecycleRuleAbortIncompleteMultipartUpload)
