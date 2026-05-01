# Node status.nodeInfo.kubeProxyVersion field

Product: Google Kubernetes Engine
Feature slug: `node-status-nodeinfo-kubeproxyversion-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Node status.nodeInfo.kubeProxyVersion field is deprecated and will stop being populated in GKE 1.33; The Node API's status.nodeInfo.kubeProxyVersion field is deprecated and will no longer be populated starting in version 1.33; deprecated on 2024-01-11.

## Lifecycle

- Latest feature date: 2024-01-11
- Deprecation date: 2024-01-11
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- certificate
- confidential
- constraint
- encrypt
- firewall
- identity
- key
- kms
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
