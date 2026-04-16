---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.272Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Local NVMe SSD Block API"
feature_slug: "local-nvme-ssd-block-api"
latest_feature_date: "2023-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
keywords:
  - "block"
  - "nvme"
  - "creation"
  - "local"
  - "pool"
  - "node"
---

# Local NVMe SSD Block API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE node pool creation can now attach block devices backed by Local NVMe SSDs using the Local NVMe SSD Block API.

## Extended Definition

GKE node pool creation can now attach block devices backed by Local NVMe SSDs using the Local NVMe SSD Block API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- All the nodes in the node pool will be Confidential VM once enabled. resourceLabels map (key: string, value: string) The resource labels for the node pool to use to annotate any related Google Compute Engine resources. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration. windowsNodeConfig object ( WindowsNodeConfig ) Parameters that can be configured on Windows nodes. localNvmeSsdBlockConfig object ( LocalNvmeSsdBlockConfig ) Parameters for using raw-block Local NVMe SSDs. ephemeralStorageLocalSsdConfig object ( EphemeralStorageLocalSsdConfig ) Parameters for the node ephemeral storage using Local SSDs.
- BestEffortProvisioning JSON representation { "enabled" : boolean , "minProvisionNodes" : integer } Fields enabled boolean When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes minProvisionNodes integer Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.
- The name must be between 1 and 63 characters long, start with a letter, contain only letters, numbers, and hyphens, and end with a letter or a number. - A full subnetwork path during node pool creation, such as projects/gke-project/regions/us-central1/subnetworks/my-subnet - A subnetwork path picked based on the IP utilization during node pool creation and is immutable. networkTierConfig object ( NetworkTierConfig ) Output only.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- All the nodes in the node pool will be Confidential VM once enabled. resourceLabels map (key: string, value: string) The resource labels for the node pool to use to annotate any related Google Compute Engine resources. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration. windowsNodeConfig object ( WindowsNodeConfig ) Parameters that can be configured on Windows nodes. localNvmeSsdBlockConfig object ( LocalNvmeSsdBlockConfig ) Parameters for using raw-block Local NVMe SSDs. ephemeralStorageLocalSsdConfig object ( EphemeralStorageLocalSsdConfig ) Parameters for the node ephemeral storage using Local SSDs.
- BestEffortProvisioning JSON representation { "enabled" : boolean , "minProvisionNodes" : integer } Fields enabled boolean When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes minProvisionNodes integer Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.
- The name must be between 1 and 63 characters long, start with a letter, contain only letters, numbers, and hyphens, and end with a letter or a number. - A full subnetwork path during node pool creation, such as projects/gke-project/regions/us-central1/subnetworks/my-subnet - A subnetwork path picked based on the IP utilization during node pool creation and is immutable. networkTierConfig object ( NetworkTierConfig ) Output only.

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- GKE can, however, create new node pools that use Local SSDs for raw block storage.
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.
- If you use both of these methods to enable node pool auto-creation in a cluster, GKE uses the following order of preference to find the value of a configuration setting to use for a node pool: ComputeClass or Pod specification : if you specify a setting (such as a machine type) in a ComputeClass or in a Pod specification, GKE uses that setting.
- Workload-level enablement with ComputeClasses You can enable node pool auto-creation for any ComputeClass in your cluster by using one of the following fields in the ComputeClass specification: nodePoolAutoCreation : let GKE auto-create node pools as needed.

