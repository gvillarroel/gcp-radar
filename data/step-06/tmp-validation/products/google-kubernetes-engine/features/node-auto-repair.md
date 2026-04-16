---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.425Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Node auto-repair"
feature_slug: "node-auto-repair"
latest_feature_date: "2020-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
keywords:
  - "repair"
  - "through"
  - "created"
  - "enabled"
  - "default"
  - "pools"
  - "auto"
  - "node"
---

# Node auto-repair

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Node auto-repair is enabled by default for new node pools created through the Google Kubernetes Engine API.

## Extended Definition

Node auto-repair is enabled by default for new node pools created through the Google Kubernetes Engine API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 265
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example configuration file enables node auto-repair and auto-upgrade for any new auto-created node pools: management : autoRepair : true autoUpgrade : true The following example configuration file sets the cluster-wide resource limits for node auto-provisioning and configures multiple default settings: resourceLimits : - resourceType : 'cpu' minimum : 4 maximum : 10 - resourceType : 'memory' maximum : 64 - resourceType : 'nvidia-tesla-t4' maximum : 4 management : autoRepair : true autoUpgrade : true shieldedInstanceConfig : enableSecureBoot : true enableIntegrityMonitoring : true diskSizeGb : 100 This configuration file sets the following default values: Enables node auto-repair and auto-upgrade for any new auto-created node pools.
- Cluster-level default settings with a configuration file When you enable node auto-provisioning, you can use a YAML configuration file to specify cluster-wide default settings for auto-created node pools.
- Default settings for auto-created node pools You can specify default values that GKE applies to auto-created node pools at the workload level or at the cluster level.
- Cluster-level default settings : you can set default values for auto-created node pools when you configure node auto-provisioning.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 253
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered. upgradeOptions object ( AutoUpgradeOptions ) Specifies the Auto Upgrade knobs for the node pool.
- NodeManagement JSON representation { "autoUpgrade" : boolean , "autoRepair" : boolean , "upgradeOptions" : { object ( AutoUpgradeOptions ) } } Fields autoUpgrade boolean A flag that specifies whether node auto-upgrade is enabled for the node pool.
- QueuedProvisioning JSON representation { "enabled" : boolean } Fields enabled boolean Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API.
- If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes. autoRepair boolean A flag that specifies whether the node auto-repair is enabled for the node pool.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 243
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered. upgradeOptions object ( AutoUpgradeOptions ) Specifies the Auto Upgrade knobs for the node pool.
- NodeManagement JSON representation { "autoUpgrade" : boolean , "autoRepair" : boolean , "upgradeOptions" : { object ( AutoUpgradeOptions ) } } Fields autoUpgrade boolean A flag that specifies whether node auto-upgrade is enabled for the node pool.
- QueuedProvisioning JSON representation { "enabled" : boolean } Fields enabled boolean Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API.
- If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes. autoRepair boolean A flag that specifies whether the node auto-repair is enabled for the node pool.

