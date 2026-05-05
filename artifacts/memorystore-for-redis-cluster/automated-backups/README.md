# Automated backups

Product: Memorystore for Redis Cluster
Feature slug: `automated-backups`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The service supports automated backups.

## Lifecycle

- Latest feature date: 2025-01-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster))
- authorization (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster))
- certificate (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster))
- kms (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster))
- policy (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster), [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster)
