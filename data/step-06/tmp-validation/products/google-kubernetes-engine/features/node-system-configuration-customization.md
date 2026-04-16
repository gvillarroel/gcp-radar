---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.168Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Node system configuration customization"
feature_slug: "node-system-configuration-customization"
latest_feature_date: "2025-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "customization"
  - "additional"
  - "configuration"
  - "system"
  - "supports"
  - "node"
---

# Node system configuration customization

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE now supports additional kubelet, sysctl, and Linux configuration options for customizing node system settings; GKE now supports additional kubelet, sysctl, and Linux configuration options for customizing node system settings.

## Extended Definition

GKE now supports additional kubelet, sysctl, and Linux configuration options for customizing node system settings; GKE now supports additional kubelet, sysctl, and Linux configuration options for customizing node system settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Additional information about the current status of this node pool instance, if available. autoscaling object ( NodePoolAutoscaling ) Autoscaler configuration for this NodePool.
- NodePool JSON representation { "name" : string , "config" : { object ( NodeConfig ) } , "initialNodeCount" : integer , "locations" : [ string ] , "networkConfig" : { object ( NodeNetworkConfig ) } , "selfLink" : string , "version" : string , "instanceGroupUrls" : [ string ] , "status" : enum ( Status ) , "statusMessage" : string , "autoscaling" : { object ( NodePoolAutoscaling ) } , "management" : { object ( NodeManagement ) } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "conditions" : [ { object ( StatusCondition ) } ] , "podIpv4CidrSize" : integer , "upgradeSettings" : { object ( UpgradeSettings ) } , "placementPolicy" : { object ( PlacementPolicy ) } , "updateInfo" : { object ( UpdateInfo ) } , "etag" : string , "queuedProvisioning" : { object ( QueuedProvisioning ) } , "bestEffortProvisioning" : { object ( BestEffortProvisioning ) } , "nodeDrainConfig" : { object ( NodeDrainConfig ) } } Fields name string The name of the node pool. config object ( NodeConfig ) The node configuration of the pool. initialNodeCount integer The initial node count for the pool.
- NodeNetworkConfig JSON representation { "createPodRange" : boolean , "podRange" : string , "podIpv4CidrBlock" : string , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "additionalNodeNetworkConfigs" : [ { object ( AdditionalNodeNetworkConfig ) } ] , "additionalPodNetworkConfigs" : [ { object ( AdditionalPodNetworkConfig ) } ] , "podIpv4RangeUtilization" : number , "subnetwork" : string , "networkTierConfig" : { object ( NetworkTierConfig ) } , // Union field enable private nodes can be only one of the following: "enablePrivateNodes" : boolean // End of list of possible types for union field enable private nodes . // Union field network performance config can be only one of the following: "networkPerformanceConfig" : { object ( NetworkPerformanceConfig ) } // End of list of possible types for union field network performance config . } Fields createPodRange boolean Input only.
- AdditionalNodeNetworkConfig JSON representation { "network" : string , "subnetwork" : string } Fields network string Name of the VPC where the additional interface belongs subnetwork string Name of the subnetwork where the additional interface belongs AdditionalPodNetworkConfig JSON representation { "subnetwork" : string , "secondaryPodRange" : string , // Union field max pods per node can be only one of the following: "maxPodsPerNode" : { object ( MaxPodsConstraint ) } // End of list of possible types for union field max pods per node . } Fields subnetwork string Name of the subnetwork where the additional pod network belongs. secondaryPodRange string The name of the secondary range on the subnet which provides IP address for this pod range.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Additional information about the current status of this node pool instance, if available. autoscaling object ( NodePoolAutoscaling ) Autoscaler configuration for this NodePool.
- NodePool JSON representation { "name" : string , "config" : { object ( NodeConfig ) } , "initialNodeCount" : integer , "locations" : [ string ] , "networkConfig" : { object ( NodeNetworkConfig ) } , "selfLink" : string , "version" : string , "instanceGroupUrls" : [ string ] , "status" : enum ( Status ) , "statusMessage" : string , "autoscaling" : { object ( NodePoolAutoscaling ) } , "management" : { object ( NodeManagement ) } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "conditions" : [ { object ( StatusCondition ) } ] , "podIpv4CidrSize" : integer , "upgradeSettings" : { object ( UpgradeSettings ) } , "placementPolicy" : { object ( PlacementPolicy ) } , "updateInfo" : { object ( UpdateInfo ) } , "etag" : string , "queuedProvisioning" : { object ( QueuedProvisioning ) } , "bestEffortProvisioning" : { object ( BestEffortProvisioning ) } , "nodeDrainConfig" : { object ( NodeDrainConfig ) } } Fields name string The name of the node pool. config object ( NodeConfig ) The node configuration of the pool. initialNodeCount integer The initial node count for the pool.
- NodeNetworkConfig JSON representation { "createPodRange" : boolean , "podRange" : string , "podIpv4CidrBlock" : string , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "additionalNodeNetworkConfigs" : [ { object ( AdditionalNodeNetworkConfig ) } ] , "additionalPodNetworkConfigs" : [ { object ( AdditionalPodNetworkConfig ) } ] , "podIpv4RangeUtilization" : number , "subnetwork" : string , "networkTierConfig" : { object ( NetworkTierConfig ) } , // Union field enable private nodes can be only one of the following: "enablePrivateNodes" : boolean // End of list of possible types for union field enable private nodes . // Union field network performance config can be only one of the following: "networkPerformanceConfig" : { object ( NetworkPerformanceConfig ) } // End of list of possible types for union field network performance config . } Fields createPodRange boolean Input only.
- AdditionalNodeNetworkConfig JSON representation { "network" : string , "subnetwork" : string } Fields network string Name of the VPC where the additional interface belongs subnetwork string Name of the subnetwork where the additional interface belongs AdditionalPodNetworkConfig JSON representation { "subnetwork" : string , "secondaryPodRange" : string , // Union field max pods per node can be only one of the following: "maxPodsPerNode" : { object ( MaxPodsConstraint ) } // End of list of possible types for union field max pods per node . } Fields subnetwork string Name of the subnetwork where the additional pod network belongs. secondaryPodRange string The name of the secondary range on the subnet which provides IP address for this pod range.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- The following additional considerations apply: When you create the cluster, choose a Confidential Computing technology that node auto-provisioning supports.
- This additional manual configuration might result in you noticing fewer benefits from using a ComputeClass to create Confidential GKE Nodes.
- This field supports the following values, which you must specify in uppercase: SEV : AMD SEV SEV SNP : AMD SEV-SNP TDX : Intel TDX To let a workload run on any confidential nodes, regardless of the Confidential Computing technology, use a node affinity rule , like in the following example: apiVersion : v1 kind : Pod spec : containers : - name : confidential-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 affinity : nodeAffinity : requiredDuringSchedulingIgnoredDuringExecution : nodeSelectorTerms : - matchExpressions : - key : cloud.google.com/gke-confidential-nodes-instance-type operator : Exists To let a workload run on nodes that use only a subset of the available Confidential Computing technologies, use a node affinity rule that's similar to the following example: apiVersion : v1 kind : Pod spec : containers : - name : confidential-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 affinity : nodeAffinity : requiredDuringSchedulingIgnoredDuringExecution : nodeSelectorTerms : - matchExpressions : - key : cloud.google.com/gke-confidential-nodes-instance-type operator : In values : - SEV - SEV SNP - TDX In the values field, specify only the Confidential Computing technologies that you want to run the workload on.
- The supported technologies at the node pool level depend on whether the node pool uses node auto-provisioning, as follows: Manually created node pools : AMD SEV AMD SEV-SNP Intel TDX Auto-provisioned node pools : AMD SEV AMD SEV-SNP Confidential mode for Hyperdisk Balanced You can also enable Confidential mode for Hyperdisk Balanced on your boot disk storage, which encrypts your data on additional hardware-backed enclaves.

