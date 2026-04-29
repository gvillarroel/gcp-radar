# Transfer from S3-compatible sources to Cloud Storage

Product: Storage Transfer Service
Feature slug: `transfer-from-s3-compatible-sources-to-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Transfers from S3-compatible storage to Cloud Storage became generally available, including support for copying from AWS S3 and optionally controlling network routes to reduce egress charges.

## Lifecycle

- Latest feature date: 2023-04-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- constraint
- logging
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
