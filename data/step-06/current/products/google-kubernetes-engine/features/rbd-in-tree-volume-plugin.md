---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:13:28.333Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "RBD in-tree volume plugin"
feature_slug: "rbd-in-tree-volume-plugin"
latest_feature_date: "2024-08-20"
deprecation_date: "2024-08-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "rbd"
  - "tree"
  - "volume"
  - "plugin"
  - "gke"
  - "deprecated"
  - "kubernetes"
  - "io"
---

# RBD in-tree volume plugin

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE deprecated the kubernetes.io/rbd in-tree volume plugin and recommends using the Ceph CSI driver instead; This in-tree volume plugin supports Ceph RBD volumes in Kubernetes; deprecated on 2024-08-20.

## Extended Definition

GKE deprecated the kubernetes.io/rbd in-tree volume plugin and recommends using the Ceph CSI driver instead; This in-tree volume plugin supports Ceph RBD volumes in Kubernetes; deprecated on 2024-08-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionMinimumReclaim JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionGracePeriod JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ sandboxConfig object ( SandboxConfig ) Sandbox configuration for this node. nodeGroup string Setting this field will assign instances of this pool to run on the specified node group.
- See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. "none": the default, which represents the existing scheduling behavior. "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionMinimumReclaim JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionGracePeriod JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ sandboxConfig object ( SandboxConfig ) Sandbox configuration for this node. nodeGroup string Setting this field will assign instances of this pool to run on the specified node group.
- See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. "none": the default, which represents the existing scheduling behavior. "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionMinimumReclaim JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionGracePeriod JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ sandboxConfig object ( SandboxConfig ) Sandbox configuration for this node. nodeGroup string Setting this field will assign instances of this pool to run on the specified node group.
- See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. "none": the default, which represents the existing scheduling behavior. "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node.

