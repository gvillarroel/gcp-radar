# Storage Transfer Service recurring transfer scheduling

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-recurring-transfer-scheduling`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service supports configuring recurring transfer jobs from the Google Cloud Console.

## Lifecycle

- Latest feature date: 2016-02-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- auth (evidence: [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- role (evidence: [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- secret (evidence: [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google)
- [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
