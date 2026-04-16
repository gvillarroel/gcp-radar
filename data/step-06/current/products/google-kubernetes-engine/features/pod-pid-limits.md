---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.841Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Pod PID limits"
feature_slug: "pod-pid-limits"
latest_feature_date: "2022-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "pod"
  - "pid"
  - "limits"
  - "gke"
  - "node"
  - "system"
  - "configuration"
  - "supports"
---

# Pod PID limits

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Node System Configuration supports setting limits on pod process IDs.

## Extended Definition

GKE Node System Configuration supports setting limits on pod process IDs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- NodePool JSON representation { "name" : string , "config" : { object ( NodeConfig ) } , "initialNodeCount" : integer , "locations" : [ string ] , "networkConfig" : { object ( NodeNetworkConfig ) } , "selfLink" : string , "version" : string , "instanceGroupUrls" : [ string ] , "status" : enum ( Status ) , "statusMessage" : string , "autoscaling" : { object ( NodePoolAutoscaling ) } , "management" : { object ( NodeManagement ) } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "conditions" : [ { object ( StatusCondition ) } ] , "podIpv4CidrSize" : integer , "upgradeSettings" : { object ( UpgradeSettings ) } , "placementPolicy" : { object ( PlacementPolicy ) } , "updateInfo" : { object ( UpdateInfo ) } , "etag" : string , "queuedProvisioning" : { object ( QueuedProvisioning ) } , "bestEffortProvisioning" : { object ( BestEffortProvisioning ) } , "nodeDrainConfig" : { object ( NodeDrainConfig ) } } Fields name string The name of the node pool. config object ( NodeConfig ) The node configuration of the pool. initialNodeCount integer The initial node count for the pool.
- All the nodes in the node pool will be Confidential VM once enabled. resourceLabels map (key: string, value: string) The resource labels for the node pool to use to annotate any related Google Compute Engine resources. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration. windowsNodeConfig object ( WindowsNodeConfig ) Parameters that can be configured on Windows nodes. localNvmeSsdBlockConfig object ( LocalNvmeSsdBlockConfig ) Parameters for using raw-block Local NVMe SSDs. ephemeralStorageLocalSsdConfig object ( EphemeralStorageLocalSsdConfig ) Parameters for the node ephemeral storage using Local SSDs.
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- Update info contains relevant information during a node pool update. etag string This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. queuedProvisioning object ( QueuedProvisioning ) Specifies the configuration of queued provisioning. bestEffortProvisioning object ( BestEffortProvisioning ) Enable best effort provisioning for nodes nodeDrainConfig object ( NodeDrainConfig ) Specifies the node drain configuration for this node pool.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- NodePool JSON representation { "name" : string , "config" : { object ( NodeConfig ) } , "initialNodeCount" : integer , "locations" : [ string ] , "networkConfig" : { object ( NodeNetworkConfig ) } , "selfLink" : string , "version" : string , "instanceGroupUrls" : [ string ] , "status" : enum ( Status ) , "statusMessage" : string , "autoscaling" : { object ( NodePoolAutoscaling ) } , "management" : { object ( NodeManagement ) } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "conditions" : [ { object ( StatusCondition ) } ] , "podIpv4CidrSize" : integer , "upgradeSettings" : { object ( UpgradeSettings ) } , "placementPolicy" : { object ( PlacementPolicy ) } , "updateInfo" : { object ( UpdateInfo ) } , "etag" : string , "queuedProvisioning" : { object ( QueuedProvisioning ) } , "bestEffortProvisioning" : { object ( BestEffortProvisioning ) } , "nodeDrainConfig" : { object ( NodeDrainConfig ) } } Fields name string The name of the node pool. config object ( NodeConfig ) The node configuration of the pool. initialNodeCount integer The initial node count for the pool.
- All the nodes in the node pool will be Confidential VM once enabled. resourceLabels map (key: string, value: string) The resource labels for the node pool to use to annotate any related Google Compute Engine resources. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration. windowsNodeConfig object ( WindowsNodeConfig ) Parameters that can be configured on Windows nodes. localNvmeSsdBlockConfig object ( LocalNvmeSsdBlockConfig ) Parameters for using raw-block Local NVMe SSDs. ephemeralStorageLocalSsdConfig object ( EphemeralStorageLocalSsdConfig ) Parameters for the node ephemeral storage using Local SSDs.
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- Update info contains relevant information during a node pool update. etag string This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. queuedProvisioning object ( QueuedProvisioning ) Specifies the configuration of queued provisioning. bestEffortProvisioning object ( BestEffortProvisioning ) Enable best effort provisioning for nodes nodeDrainConfig object ( NodeDrainConfig ) Specifies the node drain configuration for this node pool.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- ClusterAutoscaling JSON representation { "enableNodeAutoprovisioning" : boolean , "resourceLimits" : [ { object ( ResourceLimit ) } ] , "autoscalingProfile" : enum ( AutoscalingProfile ) , "autoprovisioningNodePoolDefaults" : { object ( AutoprovisioningNodePoolDefaults ) } , "autoprovisioningLocations" : [ string ] , "defaultComputeClassConfig" : { object ( DefaultComputeClassConfig ) } , "autopilotGeneralProfile" : enum ( AutopilotGeneralProfile ) } Fields enableNodeAutoprovisioning boolean Enables automatic node pool creation and deletion. resourceLimits[] object ( ResourceLimit ) Contains global constraints regarding minimum and maximum amount of resources in the cluster. autoscalingProfile enum ( AutoscalingProfile ) Defines autoscaling behaviour. autoprovisioningNodePoolDefaults object ( AutoprovisioningNodePoolDefaults ) AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. autoprovisioningLocations[] string The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP. defaultComputeClassConfig object ( DefaultComputeClassConfig ) Default compute class is a configuration for default compute class. autopilotGeneralProfile enum ( AutopilotGeneralProfile ) Autopilot general profile for the cluster, which defines the configuration for the cluster.
- NodeConfigDefaults JSON representation { "gcfsConfig" : { object ( GcfsConfig ) } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } } Fields gcfsConfig object ( GcfsConfig ) GCFS (Google Container File System, also known as Riptide) options. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration for node pools. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. nodeKubeletConfig object ( NodeKubeletConfig ) NodeKubeletConfig controls the defaults for new node-pools.
- When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM.
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.

