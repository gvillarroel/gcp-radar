# Bucket listing partial success

Product: Cloud Storage
Feature slug: `bucket-listing-partial-success`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Storage bucket listing supports partial success so available buckets can be returned even when some locations are temporarily unreachable.

## Lifecycle

- Latest feature date: 2026-01-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- credential
- iam
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- [https://docs.cloud.google.com/storage/docs/json_api](https://docs.cloud.google.com/storage/docs/json_api)
- [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1)
