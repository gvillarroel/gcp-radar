# Storage Transfer Service hourly schedules

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-hourly-schedules`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service supports transfer job schedules with hourly frequency.

## Lifecycle

- Latest feature date: 2021-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/create](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/create)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
