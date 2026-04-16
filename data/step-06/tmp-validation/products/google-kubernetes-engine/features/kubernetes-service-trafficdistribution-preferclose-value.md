---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.143Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Kubernetes Service trafficDistribution PreferClose value"
feature_slug: "kubernetes-service-trafficdistribution-preferclose-value"
latest_feature_date: "2025-12-29"
deprecation_date: "2025-12-29"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "trafficdistribution"
  - "prefersamezone"
  - "preferclose"
  - "value"
  - "deprecated"
  - "field"
  - "favor"
---

# Kubernetes Service trafficDistribution PreferClose value

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The PreferClose value for a Kubernetes Service trafficDistribution field is deprecated in favor of PreferSameZone; deprecated on 2025-12-29.

## Extended Definition

The PreferClose value for a Kubernetes Service trafficDistribution field is deprecated in favor of PreferSameZone; deprecated on 2025-12-29.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- AutoprovisioningNodePoolDefaults JSON representation { "oauthScopes" : [ string ] , "serviceAccount" : string , "upgradeSettings" : { object ( UpgradeSettings ) } , "management" : { object ( NodeManagement ) } , "minCpuPlatform" : string , "diskSizeGb" : integer , "diskType" : string , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "bootDiskKmsKey" : string , "imageType" : string , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . } Fields oauthScopes[] string Scopes that are used by NAP when creating node pools. serviceAccount string The Google Cloud Platform Service Account to be used by the node VMs. upgradeSettings object ( UpgradeSettings ) Specifies the upgrade settings for NAP created node pools management object ( NodeManagement ) Specifies the node management options for NAP created node-pools. minCpuPlatform (deprecated) string This item is deprecated!
- MetadataEntry JSON representation { "key" : string , "value" : string } Fields key string value string LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string AcceleratorConfig JSON representation { "acceleratorCount" : string , "acceleratorType" : string , "gpuPartitionSize" : string , // Union field gpu sharing config can be only one of the following: "gpuSharingConfig" : { object ( GPUSharingConfig ) } // End of list of possible types for union field gpu sharing config . // Union field gpu driver installation config can be only one of the // following: "gpuDriverInstallationConfig" : { object ( GPUDriverInstallationConfig ) } // End of list of possible types for union field // gpu driver installation config . } Fields acceleratorCount string ( int64 format) The number of the accelerator cards exposed to an instance. acceleratorType string The accelerator type resource name.
- LinuxNodeConfig JSON representation { "sysctls" : { string : string , ... } , "cgroupMode" : enum ( CgroupMode ) , "transparentHugepageEnabled" : enum ( TransparentHugepageEnabled ) , "transparentHugepageDefrag" : enum ( TransparentHugepageDefrag ) , "nodeKernelModuleLoading" : { object ( NodeKernelModuleLoading ) } , // Union field hugepages can be only one of the following: "hugepages" : { object ( HugepagesConfig ) } // End of list of possible types for union field hugepages . // Union field swap config can be only one of the following: "swapConfig" : { object ( SwapConfig ) } // End of list of possible types for union field swap config . } Fields sysctls map (key: string, value: string) The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- MetadataEntry JSON representation { "key" : string , "value" : string } Fields key string value string LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string AcceleratorConfig JSON representation { "acceleratorCount" : string , "acceleratorType" : string , "gpuPartitionSize" : string , // Union field gpu sharing config can be only one of the following: "gpuSharingConfig" : { object ( GPUSharingConfig ) } // End of list of possible types for union field gpu sharing config . // Union field gpu driver installation config can be only one of the // following: "gpuDriverInstallationConfig" : { object ( GPUDriverInstallationConfig ) } // End of list of possible types for union field // gpu driver installation config . } Fields acceleratorCount string ( int64 format) The number of the accelerator cards exposed to an instance. acceleratorType string The accelerator type resource name.
- LinuxNodeConfig JSON representation { "sysctls" : { string : string , ... } , "cgroupMode" : enum ( CgroupMode ) , "transparentHugepageEnabled" : enum ( TransparentHugepageEnabled ) , "transparentHugepageDefrag" : enum ( TransparentHugepageDefrag ) , "nodeKernelModuleLoading" : { object ( NodeKernelModuleLoading ) } , // Union field hugepages can be only one of the following: "hugepages" : { object ( HugepagesConfig ) } // End of list of possible types for union field hugepages . // Union field swap config can be only one of the following: "swapConfig" : { object ( SwapConfig ) } // End of list of possible types for union field swap config . } Fields sysctls map (key: string, value: string) The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
- ResourceManagerTags JSON representation { "tags" : { string : string , ... } } Fields tags map (key: string, value: string) TagKeyValue must be in one of the following formats ([KEY]=[VALUE]) 1. tagKeys/{tag key id}=tagValues/{tag value id} 2. {org id}/{tag key name}={tag value name} 3. {project id}/{tag key name}={tag value name} TagsEntry JSON representation { "key" : string , "value" : string } Fields key string value string SecondaryBootDisk JSON representation { "mode" : enum ( Mode ) , "diskImage" : string } Fields mode enum ( Mode ) Disk mode (container image cache, etc.) diskImage string Fully-qualified resource ID for an existing disk image.
- SysctlsEntry JSON representation { "key" : string , "value" : string } Fields key string value string HugepagesConfig JSON representation { // Union field hugepage size2m can be only one of the following: "hugepageSize2m" : integer // End of list of possible types for union field hugepage size2m . // Union field hugepage size1g can be only one of the following: "hugepageSize1g" : integer // End of list of possible types for union field hugepage size1g . } Fields Union field hugepage size2m . hugepage size2m can be only one of the following: hugepageSize2m integer Optional.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- AutoprovisioningNodePoolDefaults JSON representation { "oauthScopes" : [ string ] , "serviceAccount" : string , "upgradeSettings" : { object ( UpgradeSettings ) } , "management" : { object ( NodeManagement ) } , "minCpuPlatform" : string , "diskSizeGb" : integer , "diskType" : string , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "bootDiskKmsKey" : string , "imageType" : string , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . } Fields oauthScopes[] string Scopes that are used by NAP when creating node pools. serviceAccount string The Google Cloud Platform Service Account to be used by the node VMs. upgradeSettings object ( UpgradeSettings ) Specifies the upgrade settings for NAP created node pools management object ( NodeManagement ) Specifies the node management options for NAP created node-pools. minCpuPlatform (deprecated) string This item is deprecated!
- MetadataEntry JSON representation { "key" : string , "value" : string } Fields key string value string LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string AcceleratorConfig JSON representation { "acceleratorCount" : string , "acceleratorType" : string , "gpuPartitionSize" : string , // Union field gpu sharing config can be only one of the following: "gpuSharingConfig" : { object ( GPUSharingConfig ) } // End of list of possible types for union field gpu sharing config . // Union field gpu driver installation config can be only one of the // following: "gpuDriverInstallationConfig" : { object ( GPUDriverInstallationConfig ) } // End of list of possible types for union field // gpu driver installation config . } Fields acceleratorCount string ( int64 format) The number of the accelerator cards exposed to an instance. acceleratorType string The accelerator type resource name.
- LinuxNodeConfig JSON representation { "sysctls" : { string : string , ... } , "cgroupMode" : enum ( CgroupMode ) , "transparentHugepageEnabled" : enum ( TransparentHugepageEnabled ) , "transparentHugepageDefrag" : enum ( TransparentHugepageDefrag ) , "nodeKernelModuleLoading" : { object ( NodeKernelModuleLoading ) } , // Union field hugepages can be only one of the following: "hugepages" : { object ( HugepagesConfig ) } // End of list of possible types for union field hugepages . // Union field swap config can be only one of the following: "swapConfig" : { object ( SwapConfig ) } // End of list of possible types for union field swap config . } Fields sysctls map (key: string, value: string) The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.

