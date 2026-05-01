# Storage Transfer Service HDFS source support

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-hdfs-source-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service supports transferring data from cloud and on-premises HDFS sources to Cloud Storage as a generally available feature; Storage Transfer Service supports transferring data from cloud and on-premises Hadoop Distributed File System (HDFS) sources through a limited-release access process.

## Lifecycle

- Latest feature date: 2024-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- identity
- key
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/agentgateway](https://docs.cloud.google.com/iam/docs/roles-permissions/agentgateway)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiedgeportal](https://docs.cloud.google.com/iam/docs/roles-permissions/aiedgeportal)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AgentPool.BandwidthLimit](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AgentPool.BandwidthLimit)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
