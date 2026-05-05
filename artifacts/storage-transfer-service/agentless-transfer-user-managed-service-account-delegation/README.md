# Agentless transfer user-managed service account delegation

Product: Storage Transfer Service
Feature slug: `agentless-transfer-user-managed-service-account-delegation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service now supports agentless transfers using user-managed service accounts in place of the default Google-managed service agent for finer-grained bucket permission and user usage control.

## Lifecycle

- Latest feature date: 2025-05-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- auth (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- iam (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- identity (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- permission (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- role (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))
- secret (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions)
- [https://docs.cloud.google.com/storage-transfer/docs/iam-cloud](https://docs.cloud.google.com/storage-transfer/docs/iam-cloud)
