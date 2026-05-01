# Object Retention Lock

Product: Cloud Storage
Feature slug: `object-retention-lock`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Object Retention Lock applies and optionally locks retention settings on individual objects to prevent early deletion or overwrite.

## Lifecycle

- Latest feature date: 2023-11-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- credential
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/changelog](https://docs.cloud.google.com/python/docs/reference/storage/latest/changelog)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Retention](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.blob.Retention)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
