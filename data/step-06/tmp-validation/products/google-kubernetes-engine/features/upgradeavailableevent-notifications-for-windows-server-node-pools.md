---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.357Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "UpgradeAvailableEvent notifications for Windows Server node pools"
feature_slug: "upgradeavailableevent-notifications-for-windows-server-node-pools"
latest_feature_date: "2021-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
keywords:
  - "about"
  - "upgradeavailableevent"
  - "notifies"
  - "notifications"
  - "windows"
  - "server"
  - "pools"
  - "node"
---

# UpgradeAvailableEvent notifications for Windows Server node pools

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Notifies Windows Server node pools about new GKE versions and the Windows OS versions they use.

## Extended Definition

Notifies Windows Server node pools about new GKE versions and the Windows OS versions they use.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Even if you have node auto-upgrade enabled, we recommend that you manually upgrade your cluster and Windows Server node pools to one of the following GKE versions or later: 1.24.17-gke.6100 1.25.15-gke.2000 1.26.10-gke.2000 1.27.7-gke.2000 1.28.3-gke.1600 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.
- Even if you have node auto-upgrade enabled, we recommend that you manually upgrade your cluster and Windows Server node pools to one of the following GKE on VMware versions or later: 1.28.100-gke.131 1.16.5-gke.28 1.15.8-gke.41 What vulnerabilities are addressed by this patch?
- GKE Autopilot clusters and GKE node pools using GKE Sandbox are not affected because they do not support Windows Server nodes.
- For customers who are using Windows Server nodes, both the nodes and the containerized workloads that run on those nodes must be updated to patched versions to mitigate this vulnerability.

### Node images \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- For more information about creating Windows Server 2022 node pools, see Create Windows Node Pools For more information about containerd node images, see Containerd node images .
- A single cluster can have multiple Windows Server node pools using different Windows Server versions, but each individual node pool can only use one Windows Server version.
- Windows Server When creating a cluster using Windows Server node pools you can use a Windows Server Long-Term Servicing Channel (LTSC) node image.
- Node image source projects The available node images for GKE clusters are contained in the following source projects: Container-Optimized OS images: gke-node-images Ubuntu images: ubuntu-os-gke-cloud Windows Server images: gke-windows-node-images In addition to the source projects listed above, GKE also uses the following source projects for exclusive usage by the GKE team : ubuntu-os-gke-cloud-private (reserved for exclusive usage of the GKE team) ubuntu-os-gke-cloud-devel (reserved for exclusive usage of the GKE team) You might need to know the source project names while setting up highly-secure clusters.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- All the nodes in the node pool will be Confidential VM once enabled. resourceLabels map (key: string, value: string) The resource labels for the node pool to use to annotate any related Google Compute Engine resources. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration. windowsNodeConfig object ( WindowsNodeConfig ) Parameters that can be configured on Windows nodes. localNvmeSsdBlockConfig object ( LocalNvmeSsdBlockConfig ) Parameters for using raw-block Local NVMe SSDs. ephemeralStorageLocalSsdConfig object ( EphemeralStorageLocalSsdConfig ) Parameters for the node ephemeral storage using Local SSDs.
- Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: "cluster-location" "cluster-name" "cluster-uid" "configure-sh" "containerd-configure-sh" "enable-os-login" "gci-ensure-gke-docker" "gci-metrics-enabled" "gci-update-strategy" "instance-template" "kube-env" "startup-script" "user-data" "disable-address-manager" "windows-startup-script-ps1" "common-psm1" "k8s-node-setup-psm1" "install-ssh-psm1" "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance.
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.

