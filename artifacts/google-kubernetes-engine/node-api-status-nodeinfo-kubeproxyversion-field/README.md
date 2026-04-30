# Node API status.nodeInfo.kubeProxyVersion field

Product: Google Kubernetes Engine
Feature slug: `node-api-status-nodeinfo-kubeproxyversion-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Node API exposes the status.nodeInfo.kubeProxyVersion field for node version reporting; The Node API field status.nodeInfo.kubeProxyVersion is deprecated and will stop being populated starting in Kubernetes v1.33; deprecated on 2025-05-09.

## Lifecycle

- Latest feature date: 2025-05-09
- Deprecation date: 2025-05-09
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- confidential
- constraint
- encrypt
- key
- kms
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
