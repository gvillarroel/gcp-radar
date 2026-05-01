# Private-network transfer from AWS S3/Azure Blob to Cloud Storage

Product: Storage Transfer Service
Feature slug: `private-network-transfer-from-aws-s3-azure-blob-to-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service now enables transfers from AWS S3 or Azure Blob Storage to Cloud Storage over private connectivity using Cross-Cloud Interconnect or Partner Interconnect.

## Lifecycle

- Latest feature date: 2025-12-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- constraint
- credential
- identity
- key
- policy
- private
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
