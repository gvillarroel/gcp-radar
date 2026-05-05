# Deletion protection

Product: Memorystore for Redis Cluster
Feature slug: `deletion-protection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Memorystore for Redis Cluster supports deletion protection.

## Lifecycle

- Latest feature date: 2024-05-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster))
- authorization (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster))
- certificate (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster))
- kms (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster))
- policy (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster)
