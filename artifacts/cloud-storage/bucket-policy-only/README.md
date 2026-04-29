# Bucket Policy Only

Product: Cloud Storage
Feature slug: `bucket-policy-only`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Bucket Policy Only unifies access control by disabling object-level ACLs and relying on bucket-level IAM policies.

## Lifecycle

- Latest feature date: 2019-02-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- iam
- identity
- logging
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/access-control](https://docs.cloud.google.com/storage/docs/access-control)
- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)
