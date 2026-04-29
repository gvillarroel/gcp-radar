# Storage Transfer Service metadata preservation

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-metadata-preservation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Metadata preservation is now generally available, enabling transfers to retain POSIX attributes and symlinks across POSIX filesystems and object ACLs, CMEK, temporary holds, and object creation time when moving objects between Cloud Storage buckets; Storage Transfer Service now supports preserving metadata during data transfers.

## Lifecycle

- Latest feature date: 2022-06-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- key
- private

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
