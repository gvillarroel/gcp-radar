---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.674Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Autoscaled blue-green upgrades"
feature_slug: "autoscaled-blue-green-upgrades"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
keywords:
  - "autoscaled"
  - "blue"
  - "green"
  - "upgrades"
  - "node"
  - "upgrade"
  - "strategy"
  - "gke"
---

# Autoscaled blue-green upgrades

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Autoscaled blue-green upgrades are a node upgrade strategy for GKE Standard node pools that delays disruption while minimizing cost.

## Extended Definition

Autoscaled blue-green upgrades are a node upgrade strategy for GKE Standard node pools that delays disruption while minimizing cost.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)

## Supporting Pages

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about which node upgrade strategy is right for your environment, see the following: When to choose surge upgrades When to choose blue-green upgrades When to choose autoscaled blue-green upgrades With each of these strategies, you can configure upgrade settings to optimize the process based on your environment's needs.
- When to choose autoscaled blue-green upgrades for your environment If you have workloads that need the maximum amount of time before eviction, but don't need to be rescheduled as quickly as possible, we recommend choosing autoscaled blue-green upgrades for your node pools.
- If you use autoscaled blue-green upgrades, cluster autoscaler does the following: During the phase where GKE waits to drain the blue pool, the blue pool doesn't scale up and is only scaled down by cluster autoscaler when the nodes become underutilized.
- Best practices for autoscaled blue-green upgrades The following sections provide best practices—for your cluster, node pool, and Pods—to minimize workload disruption during autoscaled blue-green upgrades.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- UpgradeSettings JSON representation { "maxSurge" : integer , "maxUnavailable" : integer , // Union field strategy can be only one of the following: "strategy" : enum ( NodePoolUpdateStrategy ) // End of list of possible types for union field strategy . // Union field blue green settings can be only one of the following: "blueGreenSettings" : { object ( BlueGreenSettings ) } // End of list of possible types for union field blue green settings . } Fields maxSurge integer The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. maxUnavailable integer The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
- BlueGreenSettings JSON representation { // Union field rollout policy can be only one of the following: "standardRolloutPolicy" : { object ( StandardRolloutPolicy ) } , "autoscaledRolloutPolicy" : { object ( AutoscaledRolloutPolicy ) } // End of list of possible types for union field rollout policy . // Union field node pool soak duration can be only one of the following: "nodePoolSoakDuration" : string // End of list of possible types for union field node pool soak duration . } Fields Union field rollout policy .
- The rollout policy controls the general rollout progress of blue-green. rollout policy can be only one of the following: standardRolloutPolicy object ( StandardRolloutPolicy ) Standard policy for the blue-green upgrade. autoscaledRolloutPolicy object ( AutoscaledRolloutPolicy ) Autoscaled policy for cluster autoscaler enabled blue-green upgrade.
- Union field blue green settings . blue green settings can be only one of the following: blueGreenSettings object ( BlueGreenSettings ) Settings for blue-green upgrade strategy.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- UpgradeSettings JSON representation { "maxSurge" : integer , "maxUnavailable" : integer , // Union field strategy can be only one of the following: "strategy" : enum ( NodePoolUpdateStrategy ) // End of list of possible types for union field strategy . // Union field blue green settings can be only one of the following: "blueGreenSettings" : { object ( BlueGreenSettings ) } // End of list of possible types for union field blue green settings . } Fields maxSurge integer The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. maxUnavailable integer The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
- BlueGreenSettings JSON representation { // Union field rollout policy can be only one of the following: "standardRolloutPolicy" : { object ( StandardRolloutPolicy ) } , "autoscaledRolloutPolicy" : { object ( AutoscaledRolloutPolicy ) } // End of list of possible types for union field rollout policy . // Union field node pool soak duration can be only one of the following: "nodePoolSoakDuration" : string // End of list of possible types for union field node pool soak duration . } Fields Union field rollout policy .
- The rollout policy controls the general rollout progress of blue-green. rollout policy can be only one of the following: standardRolloutPolicy object ( StandardRolloutPolicy ) Standard policy for the blue-green upgrade. autoscaledRolloutPolicy object ( AutoscaledRolloutPolicy ) Autoscaled policy for cluster autoscaler enabled blue-green upgrade.
- Union field blue green settings . blue green settings can be only one of the following: blueGreenSettings object ( BlueGreenSettings ) Settings for blue-green upgrade strategy.

