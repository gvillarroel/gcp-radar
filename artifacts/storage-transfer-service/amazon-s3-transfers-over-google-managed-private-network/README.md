# Amazon S3 transfers over Google-managed private network

Product: Storage Transfer Service
Feature slug: `amazon-s3-transfers-over-google-managed-private-network`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service now supports transferring data from Amazon S3 using a Google-managed private network with flat per-GiB egress pricing.

## Lifecycle

- Latest feature date: 2024-05-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec))
- credential (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec))
- secret (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec))
- token (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
