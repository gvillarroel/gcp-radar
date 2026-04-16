---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.414Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Integrity Monitoring"
feature_slug: "integrity-monitoring"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
keywords:
  - "integrity"
  - "provisioning"
  - "monitoring"
  - "default"
  - "auto"
  - "node"
---

# Integrity Monitoring

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Node Auto-Provisioning can set default Integrity Monitoring values for newly created node pools.

## Extended Definition

Node Auto-Provisioning can set default Integrity Monitoring values for newly created node pools.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- The following example configuration file enables node auto-repair and auto-upgrade for any new auto-created node pools: management : autoRepair : true autoUpgrade : true The following example configuration file sets the cluster-wide resource limits for node auto-provisioning and configures multiple default settings: resourceLimits : - resourceType : 'cpu' minimum : 4 maximum : 10 - resourceType : 'memory' maximum : 64 - resourceType : 'nvidia-tesla-t4' maximum : 4 management : autoRepair : true autoUpgrade : true shieldedInstanceConfig : enableSecureBoot : true enableIntegrityMonitoring : true diskSizeGb : 100 This configuration file sets the following default values: Enables node auto-repair and auto-upgrade for any new auto-created node pools.
- Cluster-level default : if a setting isn't specified in ComputeClasses, Pod specifications, or as a default value for cluster-level node auto-provisioning, GKE uses the default value that Google Cloud sets for the cluster.
- Cluster-level default settings with a configuration file When you enable node auto-provisioning, you can use a YAML configuration file to specify cluster-wide default settings for auto-created node pools.
- Cluster-level node auto-provisioning default : if a setting isn't specified in a ComputeClass or a Pod specification, GKE checks whether you set a default value for node auto-provisioning in the cluster.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- NodePool JSON representation { "name" : string , "config" : { object ( NodeConfig ) } , "initialNodeCount" : integer , "locations" : [ string ] , "networkConfig" : { object ( NodeNetworkConfig ) } , "selfLink" : string , "version" : string , "instanceGroupUrls" : [ string ] , "status" : enum ( Status ) , "statusMessage" : string , "autoscaling" : { object ( NodePoolAutoscaling ) } , "management" : { object ( NodeManagement ) } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "conditions" : [ { object ( StatusCondition ) } ] , "podIpv4CidrSize" : integer , "upgradeSettings" : { object ( UpgradeSettings ) } , "placementPolicy" : { object ( PlacementPolicy ) } , "updateInfo" : { object ( UpdateInfo ) } , "etag" : string , "queuedProvisioning" : { object ( QueuedProvisioning ) } , "bestEffortProvisioning" : { object ( BestEffortProvisioning ) } , "nodeDrainConfig" : { object ( NodeDrainConfig ) } } Fields name string The name of the node pool. config object ( NodeConfig ) The node configuration of the pool. initialNodeCount integer The initial node count for the pool.
- It is determined by the cgroup mode specified in the LinuxNodeConfig or the default cgroup mode based on the cluster creation version. bootDisk object ( BootDisk ) The boot disk configuration for the node pool. consolidationDelay string ( Duration format) Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes.
- QueuedProvisioning JSON representation { "enabled" : boolean } Fields enabled boolean Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API.
- If not set, nodes are scaled down by default behavior, i.e. according to the chosen autoscaling profile.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- NodePool JSON representation { "name" : string , "config" : { object ( NodeConfig ) } , "initialNodeCount" : integer , "locations" : [ string ] , "networkConfig" : { object ( NodeNetworkConfig ) } , "selfLink" : string , "version" : string , "instanceGroupUrls" : [ string ] , "status" : enum ( Status ) , "statusMessage" : string , "autoscaling" : { object ( NodePoolAutoscaling ) } , "management" : { object ( NodeManagement ) } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "conditions" : [ { object ( StatusCondition ) } ] , "podIpv4CidrSize" : integer , "upgradeSettings" : { object ( UpgradeSettings ) } , "placementPolicy" : { object ( PlacementPolicy ) } , "updateInfo" : { object ( UpdateInfo ) } , "etag" : string , "queuedProvisioning" : { object ( QueuedProvisioning ) } , "bestEffortProvisioning" : { object ( BestEffortProvisioning ) } , "nodeDrainConfig" : { object ( NodeDrainConfig ) } } Fields name string The name of the node pool. config object ( NodeConfig ) The node configuration of the pool. initialNodeCount integer The initial node count for the pool.
- It is determined by the cgroup mode specified in the LinuxNodeConfig or the default cgroup mode based on the cluster creation version. bootDisk object ( BootDisk ) The boot disk configuration for the node pool. consolidationDelay string ( Duration format) Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes.
- QueuedProvisioning JSON representation { "enabled" : boolean } Fields enabled boolean Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API.
- If not set, nodes are scaled down by default behavior, i.e. according to the chosen autoscaling profile.

