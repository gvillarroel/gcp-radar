---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.709Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "kubernetes.io/node/status_condition"
feature_slug: "kubernetes-io-node-status-condition"
latest_feature_date: "2025-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
keywords:
  - "kubernetes"
  - "io"
  - "node"
  - "status"
  - "condition"
  - "metric"
  - "reports"
  - "field"
---

# kubernetes.io/node/status_condition

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This metric reports a node's status condition from the node status condition field.

## Extended Definition

This metric reports a node's status condition from the node status condition field.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 277
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionMinimumReclaim JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionGracePeriod JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ sandboxConfig object ( SandboxConfig ) Sandbox configuration for this node. nodeGroup string Setting this field will assign instances of this pool to run on the specified node group.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals CrashLoopBackOffConfig JSON representation { "maxContainerRestartPeriod" : string } Fields maxContainerRestartPeriod string Optional.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 277
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionMinimumReclaim JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionGracePeriod JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ sandboxConfig object ( SandboxConfig ) Sandbox configuration for this node. nodeGroup string Setting this field will assign instances of this pool to run on the specified node group.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals CrashLoopBackOffConfig JSON representation { "maxContainerRestartPeriod" : string } Fields maxContainerRestartPeriod string Optional.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 271
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionMinimumReclaim JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals EvictionGracePeriod JSON representation { "memoryAvailable" : string , "nodefsAvailable" : string , "nodefsInodesFree" : string , "imagefsAvailable" : string , "imagefsInodesFree" : string , "pidAvailable" : string } Fields memoryAvailable string Optional.
- For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ sandboxConfig object ( SandboxConfig ) Sandbox configuration for this node. nodeGroup string Setting this field will assign instances of this pool to run on the specified node group.
- See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals CrashLoopBackOffConfig JSON representation { "maxContainerRestartPeriod" : string } Fields maxContainerRestartPeriod string Optional.

