# Cluster autoscaler parallel pod draining

Product: Google Kubernetes Engine
Feature slug: `cluster-autoscaler-parallel-pod-draining`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Starting in GKE 1.26, the cluster autoscaler can drain Pods from multiple nodes in parallel.

## Lifecycle

- Latest feature date: 2023-03-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
