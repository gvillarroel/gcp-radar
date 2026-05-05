# Storage Transfer Service job schedule modification

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-job-schedule-modification`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service allows users to modify an existing transfer job's schedule; Storage Transfer Service adds preview support for modifying the schedule of an existing transfer job.

## Lifecycle

- Latest feature date: 2021-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs))
- constraint (evidence: [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs))
- credential (evidence: [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs))
- logging (evidence: [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs))
- permission (evidence: [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs))
- policy (evidence: [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs))
- token (evidence: [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
