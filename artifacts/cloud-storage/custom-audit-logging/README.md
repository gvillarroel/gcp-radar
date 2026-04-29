# Custom audit logging

Product: Cloud Storage
Feature slug: `custom-audit-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Custom audit logging lets Cloud Storage requests attach user-defined information that appears in Cloud Audit Logs; Custom audit logging lets Cloud Storage JSON API requests send user-defined audit headers that appear in Cloud Audit Logs.

## Lifecycle

- Latest feature date: 2023-07-07
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
- identity
- key
- logging
- permission
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
