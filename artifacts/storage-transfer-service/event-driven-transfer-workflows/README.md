# Event-driven transfer workflows

Product: Storage Transfer Service
Feature slug: `event-driven-transfer-workflows`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service supports event-driven transfer workflows, allowing transfers to be created without schedules and started on demand through transferJobs.run from an existing TransferJob configuration.

## Lifecycle

- Latest feature date: 2021-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- identity
- key
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/create](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/create)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
