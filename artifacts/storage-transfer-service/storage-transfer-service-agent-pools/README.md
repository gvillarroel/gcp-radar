# Storage Transfer Service agent pools

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-agent-pools`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds GA support for agent pools, allowing isolated groups of agents to act as source or sink endpoints in transfer jobs for concurrent multi-file-system and multi-data-center transfers; Storage Transfer Service now offers agent pool support, allowing isolated groups of agents to act as source or sink entities for concurrent transfers across multiple data centers and filesystems.

## Lifecycle

- Latest feature date: 2022-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- iam
- key
- permission
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsPager)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/list)
