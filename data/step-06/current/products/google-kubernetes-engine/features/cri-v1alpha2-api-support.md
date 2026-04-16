---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.715Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "CRI v1alpha2 API support"
feature_slug: "cri-v1alpha2-api-support"
latest_feature_date: "2025-01-16"
deprecation_date: "2025-01-16"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "cri"
  - "v1alpha2"
  - "removed"
  - "gke"
  - "nodes"
  - "running"
  - "containerd"
  - "deprecated"
---

# CRI v1alpha2 API support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This support is removed from GKE nodes running containerd 2.0; deprecated on 2025-01-16.

## Extended Definition

This support is removed from GKE nodes running containerd 2.0; deprecated on 2025-01-16.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 201
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command: kubectl get pods --all-namespaces -o json \ jq -r ' [ "/", "/var", "/var/","/var/run", "/var/run/", "/var/run/containerd", "/var/run/containerd/", "/var/run/containerd/containerd.sock", "/run", "/run/", "/run/containerd", "/run/containerd/", "/run/containerd/containerd.sock" ] as $socket paths [ "kube-system", "kube-node-lease", "istio-system", "asm-system", "gatekeeper-system", "config-management-system", "config-management-monitoring", "cnrm-system", "hnc-system", "gke-managed-system", "gke-gmp-system", "gmp-system", "gke-managed-cim" ] as $excluded namespaces .items[] select( (.spec.volumes[]?.hostPath.path as $p $socket paths index($p)) and ([.metadata.namespace] inside($excluded namespaces) not) ) .metadata.namespace + "/" + .metadata.name ' Use eBPF tracing to identify API callers For a more definitive way to identify which workloads running on Linux nodes call the CRI v1alpha2 API, you can deploy two specialized DaemonSets: The containerd-socket-tracer logs any process opening a connection to the containerd socket, along with the Pod and container details.
- For example, replace the following application code: runtimeapi "k8s.io/cri-api/pkg/apis/runtime/v1alpha2" Update the code to use v1: runtimeapi "k8s.io/cri-api/pkg/apis/runtime/v1" Migrate from deprecated containerd config properties The registry.auths , registry.configs , and registry.mirrors containerd config properties in the CRI plugin are deprecated and will be removed in containerd 2.2, with a GKE version yet to be announced. registry.configs.tls , however, was already removed in containerd 2.0.
- How GKE is transitioning to containerd 2 Review the following timeline to understand how GKE is transitioning existing clusters to use containerd 2: For Linux nodes with 1.32 and Windows Server nodes with 1.34, GKE uses containerd 1.7. containerd 1.7 deprecated both Docker Schema 1 images and the Container Runtime Interface (CRI) v1alpha2 API.
- You can also use the Google Cloud CLI or the Recommender API, by filtering with the following subtypes: DEPRECATION CONTAINERD V1 SCHEMA IMAGES: Docker Schema 1 images DEPRECATION CONTAINERD V1ALPHA2 CRI API: CRI v1alpha2 API DEPRECATION CONTAINERD V2 CONFIG REGISTRY CONFIGS : Deprecated CRI registry.configs properties, including registry.configs.auth and registry.configs.tls Migrate from deprecated features Review the following content to understand how to migrate from features deprecated with containerd 2.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- LinuxNodeConfig JSON representation { "sysctls" : { string : string , ... } , "cgroupMode" : enum ( CgroupMode ) , "transparentHugepageEnabled" : enum ( TransparentHugepageEnabled ) , "transparentHugepageDefrag" : enum ( TransparentHugepageDefrag ) , "nodeKernelModuleLoading" : { object ( NodeKernelModuleLoading ) } , // Union field hugepages can be only one of the following: "hugepages" : { object ( HugepagesConfig ) } // End of list of possible types for union field hugepages . // Union field swap config can be only one of the following: "swapConfig" : { object ( SwapConfig ) } // End of list of possible types for union field swap config . } Fields sysctls map (key: string, value: string) The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
- Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: "cluster-location" "cluster-name" "cluster-uid" "configure-sh" "containerd-configure-sh" "enable-os-login" "gci-ensure-gke-docker" "gci-metrics-enabled" "gci-update-strategy" "instance-template" "kube-env" "startup-script" "user-data" "disable-address-manager" "windows-startup-script-ps1" "common-psm1" "k8s-node-setup-psm1" "install-ssh-psm1" "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- LinuxNodeConfig JSON representation { "sysctls" : { string : string , ... } , "cgroupMode" : enum ( CgroupMode ) , "transparentHugepageEnabled" : enum ( TransparentHugepageEnabled ) , "transparentHugepageDefrag" : enum ( TransparentHugepageDefrag ) , "nodeKernelModuleLoading" : { object ( NodeKernelModuleLoading ) } , // Union field hugepages can be only one of the following: "hugepages" : { object ( HugepagesConfig ) } // End of list of possible types for union field hugepages . // Union field swap config can be only one of the following: "swapConfig" : { object ( SwapConfig ) } // End of list of possible types for union field swap config . } Fields sysctls map (key: string, value: string) The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
- Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: "cluster-location" "cluster-name" "cluster-uid" "configure-sh" "containerd-configure-sh" "enable-os-login" "gci-ensure-gke-docker" "gci-metrics-enabled" "gci-update-strategy" "instance-template" "kube-env" "startup-script" "user-data" "disable-address-manager" "windows-startup-script-ps1" "common-psm1" "k8s-node-setup-psm1" "install-ssh-psm1" "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance.

