# Storage Transfer Service filesystem transfer jobs with periodic sync

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-filesystem-transfer-jobs-with-periodic-sync`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds preview support for API- and gcloud-managed transfer jobs that move and sync data between two filesystems on a scheduled basis, including migration from on-premises filesystems to Filestore.

## Lifecycle

- Latest feature date: 2022-01-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
