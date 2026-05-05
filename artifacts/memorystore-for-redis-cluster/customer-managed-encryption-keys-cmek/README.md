# Customer-managed encryption keys (CMEK)

Product: Memorystore for Redis Cluster
Feature slug: `customer-managed-encryption-keys-cmek`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The service supports customer-managed encryption keys for instances and instance management.

## Lifecycle

- Latest feature date: 2025-01-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))
- allow (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))
- authorization (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))
- certificate (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))
- kms (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))
- policy (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))
- token (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
