# Secret Manager integration for transfer job source credentials

Product: Storage Transfer Service
Feature slug: `secret-manager-integration-for-transfer-job-source-credentials`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service adds Preview support for using Secret Manager secrets when creating transfer jobs from AWS S3 or Azure Storage.

## Lifecycle

- Latest feature date: 2023-06-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- credential
- firewall
- iam
- identity
- key
- kms
- logging
- policy
- private
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
