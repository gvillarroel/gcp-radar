---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.838Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Blue-green node pool upgrades"
feature_slug: "blue-green-node-pool-upgrades"
latest_feature_date: "2022-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
keywords:
  - "blue"
  - "green"
  - "node"
  - "pool"
  - "upgrades"
  - "gke"
  - "pools"
  - "can"
---

# Blue-green node pool upgrades

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE node pools can be upgraded with a blue-green mechanism instead of the default surge upgrade mechanism.

## Extended Definition

GKE node pools can be upgraded with a blue-green mechanism instead of the default surge upgrade mechanism.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)

## Supporting Pages

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 201
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If enabled, GKE uses blue-green upgrades when the following types of changes occur: Version changes (upgrades) Vertically scaling the nodes by changing the node machine attributes , including machine type, disk type, and disk size Image type changes Add or replace storage pools in a node pool Surge upgrades are used for any other updates requiring the nodes to be recreated.
- When to choose blue-green upgrades for your environment If you have highly-available production workloads that you need to be able to roll back quickly in case the workload does not tolerate the upgrade, and a temporary cost increase is acceptable, we recommend choosing blue-green upgrades for your node pools.
- When to choose autoscaled blue-green upgrades for your environment If you have workloads that need the maximum amount of time before eviction, but don't need to be rescheduled as quickly as possible, we recommend choosing autoscaled blue-green upgrades for your node pools.
- You can only upgrade node pools with autoscaled blue-green upgrades if the cluster's control plane is running version 1.34.0-gke.2201000 or later, and cluster autoscaler is enabled.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- UpgradeSettings JSON representation { "maxSurge" : integer , "maxUnavailable" : integer , // Union field strategy can be only one of the following: "strategy" : enum ( NodePoolUpdateStrategy ) // End of list of possible types for union field strategy . // Union field blue green settings can be only one of the following: "blueGreenSettings" : { object ( BlueGreenSettings ) } // End of list of possible types for union field blue green settings . } Fields maxSurge integer The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. maxUnavailable integer The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
- BlueGreenSettings JSON representation { // Union field rollout policy can be only one of the following: "standardRolloutPolicy" : { object ( StandardRolloutPolicy ) } , "autoscaledRolloutPolicy" : { object ( AutoscaledRolloutPolicy ) } // End of list of possible types for union field rollout policy . // Union field node pool soak duration can be only one of the following: "nodePoolSoakDuration" : string // End of list of possible types for union field node pool soak duration . } Fields Union field rollout policy .
- Union field node pool soak duration . node pool soak duration can be only one of the following: nodePoolSoakDuration string ( Duration format) Time needed after draining entire blue pool.
- During the node pool blue-green upgrade operation, the URLs contain both blue and green resources. status enum ( Status ) Output only.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- UpgradeSettings JSON representation { "maxSurge" : integer , "maxUnavailable" : integer , // Union field strategy can be only one of the following: "strategy" : enum ( NodePoolUpdateStrategy ) // End of list of possible types for union field strategy . // Union field blue green settings can be only one of the following: "blueGreenSettings" : { object ( BlueGreenSettings ) } // End of list of possible types for union field blue green settings . } Fields maxSurge integer The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. maxUnavailable integer The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
- BlueGreenSettings JSON representation { // Union field rollout policy can be only one of the following: "standardRolloutPolicy" : { object ( StandardRolloutPolicy ) } , "autoscaledRolloutPolicy" : { object ( AutoscaledRolloutPolicy ) } // End of list of possible types for union field rollout policy . // Union field node pool soak duration can be only one of the following: "nodePoolSoakDuration" : string // End of list of possible types for union field node pool soak duration . } Fields Union field rollout policy .
- Union field node pool soak duration . node pool soak duration can be only one of the following: nodePoolSoakDuration string ( Duration format) Time needed after draining entire blue pool.
- During the node pool blue-green upgrade operation, the URLs contain both blue and green resources. status enum ( Status ) Output only.

