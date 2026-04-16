---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.719Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "C4A local SSD support"
feature_slug: "c4a-local-ssd-support"
latest_feature_date: "2024-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "c4a"
  - "local"
  - "ssd"
  - "machine"
  - "family"
  - "available"
  - "public"
  - "preview"
---

# C4A local SSD support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Local SSD support for the C4A machine family is available in public preview.

## Extended Definition

Local SSD support for the C4A machine family is available in public preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- When the machineType field is specified, the resulting set of zones includes only those zones where the specified machine type is available. priorities priorities : - capacityCheckWaitTimeSeconds : integer flexStart : object( flexStart ) gpu : object( gpu ) location : object( location ) machineFamily : string machineType : string maxRunDurationSeconds : integer minCores : integer minCpuPlatform : string minMemoryGb : integer nodeLabels : map nodepools : [] string nodeSystemConfig : object( nodeSystemConfig ) machineType : string location : object( location ) maxPodsPerNode : integer placement : object ( placement ) priorityScore : integer reservations : object( reservations ) spot : boolean storage : object( storage ) taints : [ object ( taints ) ] tpu : object( tpu ) Fields capacityCheckWaitTimeSeconds optional integer Requires GKE version 1.33.1-gke.1788000 or later Duration, in seconds, for which GKE attempts to provision the priority before falling back to lower priorities.
- For details about reservation block consumption, see Consume specific reservation blocks . storage storage : bootDiskKMSKey : string bootDiskSize : integer bootDiskType : string localSSDCount : integer secondaryBootDisks : [ object( secondarybootdisks ) ] Fields bootDiskKMSKey optional string The path to the Cloud Key Management Service key to use to encrypt the boot disk. bootDiskSize optional integer Requires GKE version 1.34.1-gke.1431000 or later for machineFamily priority rules and version 1.30.3-gke.1639000 or later for other priority rule types.
- The following example configures a ComputeClass that prioritizes Spot VMs for the n4-custom-8-20480 custom machine type, and falls back to on-demand VMs of the same type if Spot capacity is unavailable: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : custom-machine-type spec : priorities : - machineType : n4-custom-8-20480 spot : true - machineType : n4-custom-8-20480 spot : false nodePoolAutoCreation : enabled : true priorityDefaults priorityDefaults : nodeSystemConfig : object( nodeSystemConfig ) location : object( location ) Fields nodeSystemConfig optional object ( nodeSystemConfig ) Default values for the node system configuration.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Allowed values are the following: nvidia-gb200 : NVIDIA GB200 (Preview) nvidia-b200 : NVIDIA B200 (180GB) nvidia-h200-141gb : NVIDIA H200 (141GB) nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB) nvidia-h100-80gb : NVIDIA H100 (80GB) nvidia-a100-80gb : NVIDIA A100 (80GB) nvidia-tesla-a100 : NVIDIA A100 (40GB) nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (except for G4 machine types that have less than one GPU, see the limitations ) nvidia-l4 : NVIDIA L4 nvidia-tesla-t4 : NVIDIA T4 or if you use GKE Sandbox, one of the following: nvidia-gb200 : NVIDIA GB200 (Preview) nvidia-b200 : NVIDIA B200 (180GB) (Preview) nvidia-h200-141gb : NVIDIA H200 (141GB) (Preview) nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB) nvidia-h100-80gb : NVIDIA H100 (80GB) nvidia-a100-80gb : NVIDIA A100 (80GB) nvidia-tesla-a100 : NVIDIA A100 (40GB) nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (Preview) (except for G4 machine types that have less than one GPU, see the limitations ) nvidia-l4 : NVIDIA L4 nvidia-tesla-t4 : NVIDIA T4 For more information, see GPU model support .
- This can be one of the following: nvidia-gb200 : NVIDIA GB200 (Preview) nvidia-b200 : NVIDIA B200 (180GB) nvidia-h200-141gb : NVIDIA H200 (141GB) nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB) nvidia-h100-80gb : NVIDIA H100 (80GB) nvidia-a100-80gb : NVIDIA A100 (80GB) nvidia-tesla-a100 : NVIDIA A100 (40GB) nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (except for G4 machine types that have less than one GPU, see the limitations ) nvidia-l4 : NVIDIA L4 nvidia-tesla-t4 : NVIDIA T4 or if you use GKE Sandbox, one of the following: nvidia-gb200 : NVIDIA GB200 (Preview) nvidia-b200 : NVIDIA B200 (180GB) (Preview) nvidia-h200-141gb : NVIDIA H200 (141GB) (Preview) nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB) nvidia-h100-80gb : NVIDIA H100 (80GB) nvidia-a100-80gb : NVIDIA A100 (80GB) nvidia-tesla-a100 : NVIDIA A100 (40GB) nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (Preview) (except for G4 machine types that have less than one GPU, see the limitations ) nvidia-l4 : NVIDIA L4 nvidia-tesla-t4 : NVIDIA T4 For more information, see GPU model support .
- The output is similar to the following: apiVersion: v1 kind: Node metadata: ... labels: ... cloud.google.com/gke-accelerator: nvidia-tesla-t4 cloud.google.com/gke-accelerator-count: "1" cloud.google.com/machine-family: custom-48 ... ...
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type.
- For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type.
- For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage.

