---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.699Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Hyperdisk Balanced High Availability volume provisioning"
feature_slug: "hyperdisk-balanced-high-availability-volume-provisioning"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
keywords:
  - "hyperdisk"
  - "balanced"
  - "high"
  - "availability"
  - "volume"
  - "provisioning"
  - "compute"
  - "engine"
---

# Hyperdisk Balanced High Availability volume provisioning

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Compute Engine persistent disk CSI Driver can provision Hyperdisk Balanced High Availability volumes in multiple access modes.

## Extended Definition

The Compute Engine persistent disk CSI Driver can provision Hyperdisk Balanced High Availability volumes in multiple access modes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)

## Supporting Pages

### "About Hyperdisk for GKE \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk)
- Source ID: `site-docs-reference-2`
- Final score: 199
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations After volume creation, you can only modify the following settings through the Compute Engine API: Throughput: Hyperdisk Throughput and Hyperdisk Balanced volumes IOPS: Hyperdisk Extreme and Hyperdisk Balanced volumes You can only attach Hyperdisk volumes to specific instance types ; Read-Only attachments are not supported.
- Both read and write operations count against the throughput and IOPS limit that's provisioned for a Hyperdisk Balanced High Availability volume.
- The following StorageClass shows how to configure dynamic disk type selection that prioritizes hyperdisk-balanced for supported nodes and automatically uses pd-balanced for others. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : dynamic-volume provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : dynamic pd-type : pd-balanced hyperdisk-type : hyperdisk-balanced use-allowed-disk-topology : "true" The parameters below only apply to the hyperdisk-type and are ignored if the pd-type is selected. provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "3000" Hyperdisk and Autopilot Compute Classes If you want to use Hyperdisk on Autopilot clusters that use Compute Classes , make sure your node's machine type is both supported by Hyperdisk and supported by the Compute Class .
- Hyperdisk Balanced High Availability Autopilot Standard Similar performance level as Hyperdisk Balanced that helps reduce costs with synchronous replication across two zones in a region.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows a priority rule that uses machineFamily : priorities: - machineFamily: n4 spot: true minCores: 16 minMemoryGb: 64 storage: bootDiskType: hyperdisk-balanced bootDiskSize: 100 bootDiskKMSKey: projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks: - diskImageName: pytorch-mnist project: k8s-staging-jobset machineType configurations The machineType field accepts a Compute Engine predefined machine type, like n4-standard-32 , or a custom machine type string , like n4-custom-8-20480 .
- Consume Compute Engine reservations Available in GKE version 1.31.1-gke.2105000 and later If you use Compute Engine capacity reservations to get a higher level of assurance of hardware availability in specific Google Cloud zones, you can configure each fallback priority in your custom ComputeClass so that GKE consumes reservations when creating new nodes.
- The following example defines a ComputeClass for a multi-host TPU collection optimized for high-availability inference workloads. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : multi-host-inference spec : nodePoolGroup : name : my-inference-collection nodePoolConfig : workloadType : HIGH AVAILABILITY nodePoolAutoCreation : enabled : true priorities : - tpu : type : tpu-v6e-slice topology : 2x4 For more information, see the following pages: About TPUs in GKE Plan TPUs in GKE Request ComputeClasses in workloads To use a custom ComputeClass, your Pod must explicitly request that ComputeClass by using a nodeSelector in the Pod specification.
- ComputeClasses can target specific optimizations, like provisioning high-performance nodes or prioritizing cost-optimized configurations for cheaper running costs.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- Only supported for flex-start priorities, except single-host TPUs. flexStart optional object ( flexStart ) Requires GKE version 1.32.2-gke.1652000 or later The flex-start provisioning mode configurations. gpu optional object( gpu ) Requires GKE version 1.30.3-gke.1451000 or later The GPU configuration. machineFamily optional string Requires GKE version 1.30.3-gke.1451000 or later The Compute Engine machine series to use, such as n4 or c3 .
- If you assign a priority score to a priority rule, you must set a priority score for all priority rules that are in the same ComputeClass. reservations optional object ( reservations ) Requires GKE version 1.31.1-gke.2105000 or later The Compute Engine capacity reservations to consume during node provisioning. spot optional boolean Requires GKE version 1.30.3-gke.1451000 or later The Spot VMs configuration.
- The following values are supported: HIGH AVAILABILITY : for availability-focused workloads like serving, which require most of the infrastructure to be running at all times HIGH THROUGHPUT : for batch or training jobs that need all underlying infrastructure running to make progress.

