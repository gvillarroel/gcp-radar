# Storage Transfer Service Azure ADLS Gen2 to Cloud Storage transfer support

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-azure-adls-gen2-to-cloud-storage-transfer-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service supports transferring data from Azure ADLS Gen 2 to Cloud Storage in general availability.

## Lifecycle

- Latest feature date: 2021-12-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list), [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data))
- auth (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list), [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data))
- authorization (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list), [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data))
- credential (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list), [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data))
- iam (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list), [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list), [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data))
- permission (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list), [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data))
- role (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list), [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data))
- secret (evidence: [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions), [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list), [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data)
- [https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions](https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
