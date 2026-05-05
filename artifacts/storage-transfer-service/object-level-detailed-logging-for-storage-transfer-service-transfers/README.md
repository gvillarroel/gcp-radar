# Object-level detailed logging for Storage Transfer Service transfers

Product: Storage Transfer Service
Feature slug: `object-level-detailed-logging-for-storage-transfer-service-transfers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service now provides GA detailed per-object logging in Cloud Logging for transfers involving AWS S3, Azure Blob Storage, ADLS Gen 2, and Cloud Storage.

## Lifecycle

- Latest feature date: 2022-07-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- allow (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- auth (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- constraint (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- identity (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- kms (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- logging (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- permission (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- policy (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))
- role (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions), [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)
- [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)
- [https://docs.cloud.google.com/storage-transfer/docs/managed-folders](https://docs.cloud.google.com/storage-transfer/docs/managed-folders)
