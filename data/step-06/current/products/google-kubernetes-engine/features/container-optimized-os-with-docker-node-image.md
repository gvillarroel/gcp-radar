---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.953Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Container-Optimized OS with Docker node image"
feature_slug: "container-optimized-os-with-docker-node-image"
latest_feature_date: "2020-12-08"
deprecation_date: "2020-12-08"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
keywords:
  - "container"
  - "optimized"
  - "os"
  - "docker"
  - "node"
  - "image"
  - "variant"
  - "deprecated"
---

# Container-Optimized OS with Docker node image

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Container-Optimized OS with Docker node image variant is deprecated in favor of cos_containerd; deprecated on 2020-12-08.

## Extended Definition

The Container-Optimized OS with Docker node image variant is deprecated in favor of cos_containerd; deprecated on 2020-12-08.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)

## Supporting Pages

### Node images \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-images)
- Source ID: `site-docs-reference-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Linux node image comparison The following sections compare the operational aspects of the Container-Optimized OS and Ubuntu node images, including: Software package management System initialization Logs collection File system layout Storage driver support Software package manager The cos and cos containerd node images use a minimal root file system with built-in support for the Docker (containerd) container runtime, which also serves as the software package manager for installing software on the host.
- Node image source projects The available node images for GKE clusters are contained in the following source projects: Container-Optimized OS images: gke-node-images Ubuntu images: ubuntu-os-gke-cloud Windows Server images: gke-windows-node-images In addition to the source projects listed above, GKE also uses the following source projects for exclusive usage by the GKE team : ubuntu-os-gke-cloud-private (reserved for exclusive usage of the GKE team) ubuntu-os-gke-cloud-devel (reserved for exclusive usage of the GKE team) You might need to know the source project names while setting up highly-secure clusters.
- Ubuntu Ubuntu with containerd ( ubuntu containerd ) Windows Server Windows Server LTSC with containerd ( windows ltsc containerd ) (Supports both LTSC2022 and LTSC2019 node images) Container-Optimized OS The Container-Optimized OS from Google node images are based on a recent version of the Linux kernel and are optimized to enhance node security.
- Map Container-Optimized OS node image versions to GKE patch versions GKE publishes a JSON mapping of GKE patch versions to Container-Optimized OS node image versions: Mapping of GKE patch versions to Container-Optimized OS node images You can use this mapping to upgrade to a specific version of GKE to get a specific image version.

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How GKE is transitioning to containerd 2 Review the following timeline to understand how GKE is transitioning existing clusters to use containerd 2: For Linux nodes with 1.32 and Windows Server nodes with 1.34, GKE uses containerd 1.7. containerd 1.7 deprecated both Docker Schema 1 images and the Container Runtime Interface (CRI) v1alpha2 API.
- You can also use the Google Cloud CLI or the Recommender API, by filtering with the following subtypes: DEPRECATION CONTAINERD V1 SCHEMA IMAGES: Docker Schema 1 images DEPRECATION CONTAINERD V1ALPHA2 CRI API: CRI v1alpha2 API DEPRECATION CONTAINERD V2 CONFIG REGISTRY CONFIGS : Deprecated CRI registry.configs properties, including registry.configs.auth and registry.configs.tls Migrate from deprecated features Review the following content to understand how to migrate from features deprecated with containerd 2.
- Use the ctr command directly on a node To query a specific node to return all non-deleted images that were pulled as Schema 1, run the following command on a node: ctr --namespace k8s.io images list 'labels."io.containerd.image/converted-docker-schema1"' This command can be useful if, for example, you're troubleshooting a specific node and you don't see log entries in Cloud Logging because it's been more than 30 days since the image was pulled.
- A Google-provided image affected by this issue is gcr.io/google-containers/startup-script . gcr.io/google-containers/startup-script:v1 : uses the deprecated Schema 1 format and can't be pulled on GKE 1.33 and later for Linux nodes. gcr.io/google-containers/startup-script:v2 : uses the supported Schema 2 format and can be pulled successfully.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: "cluster-location" "cluster-name" "cluster-uid" "configure-sh" "containerd-configure-sh" "enable-os-login" "gci-ensure-gke-docker" "gci-metrics-enabled" "gci-update-strategy" "instance-template" "kube-env" "startup-script" "user-data" "disable-address-manager" "windows-startup-script-ps1" "common-psm1" "k8s-node-setup-psm1" "install-ssh-psm1" "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance.
- When enabled, the node pool will be provisioned with a Container-Optimized OS image that enforces kernel module signature verification.
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- NodeKubeletConfig JSON representation { "cpuManagerPolicy" : string , "topologyManager" : { object ( TopologyManager ) } , "memoryManager" : { object ( MemoryManager ) } , "cpuCfsQuota" : boolean , "cpuCfsQuotaPeriod" : string , "podPidsLimit" : string , "imageGcLowThresholdPercent" : integer , "imageGcHighThresholdPercent" : integer , "imageMinimumGcAge" : string , "imageMaximumGcAge" : string , "containerLogMaxSize" : string , "containerLogMaxFiles" : integer , "allowedUnsafeSysctls" : [ string ] , "evictionSoft" : { object ( EvictionSignals ) } , "evictionSoftGracePeriod" : { object ( EvictionGracePeriod ) } , "evictionMinimumReclaim" : { object ( EvictionMinimumReclaim ) } , "evictionMaxPodGracePeriodSeconds" : integer , "maxParallelImagePulls" : integer , "crashLoopBackOff" : { object ( CrashLoopBackOffConfig ) } , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . // Union field single process oom kill can be only one of the following: "singleProcessOomKill" : boolean // End of list of possible types for union field single process oom kill . // Union field shutdown grace period seconds can be only one of the following: "shutdownGracePeriodSeconds" : integer // End of list of possible types for union field // shutdown grace period seconds . // Union field shutdown grace period critical pods seconds can be only one of // the following: "shutdownGracePeriodCriticalPodsSeconds" : integer // End of list of possible types for union field // shutdown grace period critical pods seconds . } Fields cpuManagerPolicy string Control the CPU management policy on the node.

