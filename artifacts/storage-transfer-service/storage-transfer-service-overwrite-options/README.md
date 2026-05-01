# Storage Transfer Service overwrite options

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-overwrite-options`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service now supports GA overwrite behavior controls via the overwriteWhen field, allowing destination files to be overwritten always, never, or only when ETags and checksums indicate a change.

## Lifecycle

- Latest feature date: 2022-06-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- constraint
- encrypt
- key
- kms
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions)
