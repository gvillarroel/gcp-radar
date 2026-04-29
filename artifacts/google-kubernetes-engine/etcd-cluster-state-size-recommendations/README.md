# etcd cluster state size recommendations

Product: Google Kubernetes Engine
Feature slug: `etcd-cluster-state-size-recommendations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE provides insights and recommendations to identify clusters whose etcd cluster state database size is approaching the limit.

## Lifecycle

- Latest feature date: 2025-05-30
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
- credential
- encrypt
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
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
