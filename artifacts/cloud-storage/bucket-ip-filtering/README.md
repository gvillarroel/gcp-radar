# Bucket IP filtering

Product: Cloud Storage
Feature slug: `bucket-ip-filtering`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Bucket IP filtering restricts requests to Cloud Storage buckets based on source IP addresses or VPC origin.

## Lifecycle

- Latest feature date: 2025-07-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- credential
- encrypt
- iam
- key
- kms
- permission

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/quickstart-mount-bucket)
- [https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud](https://docs.cloud.google.com/storage/docs/gsutil-transition-to-gcloud)
