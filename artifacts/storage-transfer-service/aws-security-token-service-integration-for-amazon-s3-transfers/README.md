# AWS Security Token Service integration for Amazon S3 transfers

Product: Storage Transfer Service
Feature slug: `aws-security-token-service-integration-for-amazon-s3-transfers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service introduces general availability for AWS Security Token Service (STS) integration, enabling Amazon S3 transfers using temporary credentials instead of long-term AWS credentials.

## Lifecycle

- Latest feature date: 2021-12-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws))
- auth (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws))
- credential (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws))
- secret (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws))
- security (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws))
- token (evidence: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws](https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
