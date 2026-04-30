# Horizontal Pod Autoscaler re-architecture

Product: Google Kubernetes Engine
Feature slug: `horizontal-pod-autoscaler-re-architecture`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Horizontal Pod Autoscaler in GKE was re-architected for a consistent 15-second recalculation period and support for up to 5,000 HPA objects per cluster; The Horizontal Pod Autoscaler in GKE was re-architected for a consistent 15-second recalculation period and support for up to 5,000 HPA objects per cluster.

## Lifecycle

- Latest feature date: 2025-08-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint
- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
