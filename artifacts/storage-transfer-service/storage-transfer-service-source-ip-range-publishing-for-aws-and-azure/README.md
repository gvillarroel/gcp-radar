# Storage Transfer Service source IP range publishing for AWS and Azure

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-source-ip-range-publishing-for-aws-and-azure`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service publishes the source IP ranges used for AWS and Azure transfers so source storage resources can be restricted to allowlist only those addresses.

## Lifecycle

- Latest feature date: 2023-04-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- credential
- iam
- identity
- key
- private
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure](https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure)
