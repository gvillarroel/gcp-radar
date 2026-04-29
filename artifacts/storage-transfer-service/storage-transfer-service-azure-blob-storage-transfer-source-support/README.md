# Storage Transfer Service Azure Blob Storage transfer source support

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-azure-blob-storage-transfer-source-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service supports transfers from Microsoft Azure Blob Storage.

## Lifecycle

- Latest feature date: 2020-07-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- constraint
- iam
- identity
- key
- permission
- policy
- private
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
