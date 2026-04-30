# Skipped file logging for agent-based transfers

Product: Storage Transfer Service
Feature slug: `skipped-file-logging-for-agent-based-transfers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Logging for Storage Transfer Service now emits logs for files skipped during agent-based transfer jobs when a file already exists and the job is configured to ignore existing files.

## Lifecycle

- Latest feature date: 2025-05-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- credential
- key
- logging
- permission
- private
- secret

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
