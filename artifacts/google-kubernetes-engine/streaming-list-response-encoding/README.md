# Streaming list response encoding

Product: Google Kubernetes Engine
Feature slug: `streaming-list-response-encoding`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Streaming list response encoding is now generally available for more efficient handling of large object collections; The API server can stream list responses for large object collections to improve reliability and performance.

## Lifecycle

- Latest feature date: 2025-09-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential
- encrypt
- key
- kms
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
