---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.693Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Compute classes collection scheduling for TPU node pools"
feature_slug: "compute-classes-collection-scheduling-for-tpu-node-pools"
latest_feature_date: "2025-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
keywords:
  - "compute"
  - "classes"
  - "collection"
  - "scheduling"
  - "tpu"
  - "node"
  - "pools"
  - "can"
---

# Compute classes collection scheduling for TPU node pools

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Compute classes can configure collection scheduling for single-host and multi-host TPU node pools; Compute classes can configure collection scheduling for single-host and multi-host TPU node pools.

## Extended Definition

Compute classes can configure collection scheduling for single-host and multi-host TPU node pools; Compute classes can configure collection scheduling for single-host and multi-host TPU node pools.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)

## Supporting Pages

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- The following example defines a ComputeClass for a multi-host TPU collection optimized for high-availability inference workloads. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : multi-host-inference spec : nodePoolGroup : name : my-inference-collection nodePoolConfig : workloadType : HIGH AVAILABILITY nodePoolAutoCreation : enabled : true priorities : - tpu : type : tpu-v6e-slice topology : 2x4 For more information, see the following pages: About TPUs in GKE Plan TPUs in GKE Request ComputeClasses in workloads To use a custom ComputeClass, your Pod must explicitly request that ComputeClass by using a nodeSelector in the Pod specification.
- For more information, see the following: Plan TPUs in GKE Multi-host TPU slice node pools Schedule TPU collections for inference workloads Node pool configuration The nodePoolConfig field in your ComputeClass specification lets you apply configuration that is reflected in all nodes within the node pools created using that class.
- Consume reservations in manually created node pools To consume reservations in manually created node pools in Standard clusters by using ComputeClasses, follow these steps: Bind the reservations to the node pools by following the steps in Consuming reserved instances in GKE Standard .
- The node pools that you specify in the priorities.nodepools field must be associated with that ComputeClass by using node labels and node taints, as described in the Configure manually created node pools for ComputeClasses section.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- This grouping lets you apply shared configurations, such as a Service Level Objective (SLO), across all node pools within the collection. spec.nodePoolConfig optional object( nodePoolConfig ) Requires GKE version 1.31.4-gke.1072000 or later A specification that lets you configure certain parameters of node pools that are used by the ComputeClass.
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- This field manages the cloud.google.com/private-node node selector; do not manually apply the selector when using this field. serviceAccount optional string Requires GKE version 1.31.4-gke.1072000 or later Specifies the Google Cloud service account used by the nodes within node pools that are managed by the ComputeClass. autoRepair optional string Requires GKE version 1.34.0-gke.2201000 or later Specifies the node auto-repair setting to be used by the node pools.
- Only one of bootDiskProfile, ephemeralLocalSsdProfile, and dedicatedLocalSsdProfile can be set. ephemeralLocalSsdProfile optional object ( ephemeralLocalSsdProfile ) Not supported by custom ComputeClasses. dedicatedLocalSsdProfile optional object ( dedicatedLocalSsdProfile ) Enable memory swap on the dedicated local SSDs for the nodes.

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Workload-level enablement with ComputeClasses You can enable node pool auto-creation for any ComputeClass in your cluster by using one of the following fields in the ComputeClass specification: nodePoolAutoCreation : let GKE auto-create node pools as needed.
- Machine series or machine type selection You can select a Compute Engine machine series or machine type for GKE to use for auto-created node pools in one of the following ways: ComputeClasses : use the machineFamily or the machineType priority rules .
- Enablement methods for node pool auto-creation GKE can automatically create node pools for specific ComputeClasses or for any workload that uses a compatible configuration, depending on how you configure your cluster.
- You can configure workload separation in auto-created node pools in the following ways: ComputeClasses : the nodes that GKE creates for a specific ComputeClass can only run Pods that select that ComputeClass.

