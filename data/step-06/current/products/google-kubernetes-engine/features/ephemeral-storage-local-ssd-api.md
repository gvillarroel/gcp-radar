---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.808Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Ephemeral Storage Local SSD API"
feature_slug: "ephemeral-storage-local-ssd-api"
latest_feature_date: "2023-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
keywords:
  - "ephemeral"
  - "storage"
  - "local"
  - "ssd"
  - "gke"
  - "node"
  - "pool"
  - "creation"
---

# Ephemeral Storage Local SSD API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE node pool creation can now attach ephemeral devices backed by Local NVMe SSDs using the Ephemeral Storage Local SSD API.

## Extended Definition

GKE node pool creation can now attach ephemeral devices backed by Local NVMe SSDs using the Ephemeral Storage Local SSD API.

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
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- GKE configures new node pools based on parameters like the following: CPU, memory, and ephemeral storage resource requests in your Pods and containers, including any Pods that are managed by DaemonSets.
- GKE creates a new node pool only if the allocatable ephemeral storage of a node with a specified boot disk is greater than or equal to the ephemeral storage request of a pending Pod.
- If the ephemeral storage request is greater than the allocatable ephemeral storage of a node, GKE won't create a new node pool and the Pod remains in a pending state.
- GKE can, however, create new node pools that use Local SSDs for raw block storage.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- All the nodes in the node pool will be Confidential VM once enabled. resourceLabels map (key: string, value: string) The resource labels for the node pool to use to annotate any related Google Compute Engine resources. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration. windowsNodeConfig object ( WindowsNodeConfig ) Parameters that can be configured on Windows nodes. localNvmeSsdBlockConfig object ( LocalNvmeSsdBlockConfig ) Parameters for using raw-block Local NVMe SSDs. ephemeralStorageLocalSsdConfig object ( EphemeralStorageLocalSsdConfig ) Parameters for the node ephemeral storage using Local SSDs.
- If unspecified, ephemeral storage is backed by the boot disk. soleTenantConfig object ( SoleTenantConfig ) Parameters for node pools to be backed by shared sole tenant node groups. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. resourceManagerTags object ( ResourceManagerTags ) A map of resource manager tag keys and values to be attached to the nodes. enableConfidentialStorage boolean Optional.
- If omitted, defaults to the 'boot disk profile'. performance profile can be only one of the following: bootDiskProfile object ( BootDiskProfile ) Swap on the node's boot disk. ephemeralLocalSsdProfile object ( EphemeralLocalSsdProfile ) Swap on the local SSD shared with pod ephemeral storage. dedicatedLocalSsdProfile object ( DedicatedLocalSsdProfile ) Provisions a new, separate local NVMe SSD exclusively for swap.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- All the nodes in the node pool will be Confidential VM once enabled. resourceLabels map (key: string, value: string) The resource labels for the node pool to use to annotate any related Google Compute Engine resources. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration. windowsNodeConfig object ( WindowsNodeConfig ) Parameters that can be configured on Windows nodes. localNvmeSsdBlockConfig object ( LocalNvmeSsdBlockConfig ) Parameters for using raw-block Local NVMe SSDs. ephemeralStorageLocalSsdConfig object ( EphemeralStorageLocalSsdConfig ) Parameters for the node ephemeral storage using Local SSDs.
- If unspecified, ephemeral storage is backed by the boot disk. soleTenantConfig object ( SoleTenantConfig ) Parameters for node pools to be backed by shared sole tenant node groups. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. resourceManagerTags object ( ResourceManagerTags ) A map of resource manager tag keys and values to be attached to the nodes. enableConfidentialStorage boolean Optional.
- If omitted, defaults to the 'boot disk profile'. performance profile can be only one of the following: bootDiskProfile object ( BootDiskProfile ) Swap on the node's boot disk. ephemeralLocalSsdProfile object ( EphemeralLocalSsdProfile ) Swap on the local SSD shared with pod ephemeral storage. dedicatedLocalSsdProfile object ( DedicatedLocalSsdProfile ) Provisions a new, separate local NVMe SSD exclusively for swap.

