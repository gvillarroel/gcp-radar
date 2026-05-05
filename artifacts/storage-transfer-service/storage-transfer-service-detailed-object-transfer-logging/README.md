# Storage Transfer Service detailed object transfer logging

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-detailed-object-transfer-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Preview support for detailed per-object logging of transfers between AWS S3, Azure Blob, ADLS Gen 2, and Cloud Storage, with logs emitted to Cloud Logging for verification and troubleshooting.

## Lifecycle

- Latest feature date: 2021-12-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- allow (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- credential (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- kms (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- logging (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- secret (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- token (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
