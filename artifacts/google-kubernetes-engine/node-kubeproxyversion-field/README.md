# Node kubeProxyVersion field

Product: Google Kubernetes Engine
Feature slug: `node-kubeproxyversion-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE will stop populating the status.nodeInfo.kubeProxyVersion field in Node objects; GKE will stop populating the status.nodeInfo.kubeProxyVersion field in Node objects; deprecated on 2024-08-20.

## Lifecycle

- Latest feature date: 2024-08-20
- Deprecation date: 2024-08-20
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
