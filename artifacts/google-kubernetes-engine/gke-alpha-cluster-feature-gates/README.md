# GKE alpha cluster feature gates

Product: Google Kubernetes Engine
Feature slug: `gke-alpha-cluster-feature-gates`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE alpha clusters now enable all alpha and default beta feature gates, and you can modify those gates from their default values.

## Lifecycle

- Latest feature date: 2025-09-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- confidential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
