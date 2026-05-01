# Dual-stack networking

Product: Google Kubernetes Engine
Feature slug: `dual-stack-networking`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE can assign both IPv4 and IPv6 addresses to cluster nodes and Pods and supports dual-stack ClusterIP and NodePort Services.

## Lifecycle

- Latest feature date: 2022-06-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- certificate
- confidential
- constraint
- encrypt
- identity
- key
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
