# Cluster autoscaler eviction of kube-system Pods without a PDB

Product: Google Kubernetes Engine
Feature slug: `cluster-autoscaler-eviction-of-kube-system-pods-without-a-pdb`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The cluster autoscaler can scale down nodes by evicting eligible kube-system Pods that have no Pod Disruption Budget.

## Lifecycle

- Latest feature date: 2025-06-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- certificate
- confidential
- constraint
- encrypt
- iam
- identity
- key
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
