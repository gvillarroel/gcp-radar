---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.992Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Reservations consumption"
feature_slug: "reservations-consumption"
latest_feature_date: "2020-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
keywords:
  - "reservations"
  - "consumption"
  - "gke"
  - "can"
  - "consume"
  - "zonal"
  - "compute"
  - "engine"
---

# Reservations consumption

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can consume zonal Compute Engine reservations to help ensure capacity for workloads.

## Extended Definition

GKE can consume zonal Compute Engine reservations to help ensure capacity for workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)

## Supporting Pages

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- If you assign a priority score to a priority rule, you must set a priority score for all priority rules that are in the same ComputeClass. reservations optional object ( reservations ) Requires GKE version 1.31.1-gke.2105000 or later The Compute Engine capacity reservations to consume during node provisioning. spot optional boolean Requires GKE version 1.30.3-gke.1451000 or later The Spot VMs configuration.
- For more information about reservation sub-block consumption, see Consume specific reservation sub-blocks . reservationSubBlock reservationSubBlock : name : string Fields name required string The name of the specific reservation sub-block to consume. secondaryBootDisks secondaryBootDisks : - diskImageName : string mode : string project : string Fields diskImageName required string The name of the disk image. mode optional string The mode in which the secondary boot disk should be used.
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- For details about reservation block consumption, see Consume specific reservation blocks . storage storage : bootDiskKMSKey : string bootDiskSize : integer bootDiskType : string localSSDCount : integer secondaryBootDisks : [ object( secondarybootdisks ) ] Fields bootDiskKMSKey optional string The path to the Cloud Key Management Service key to use to encrypt the boot disk. bootDiskSize optional integer Requires GKE version 1.34.1-gke.1431000 or later for machineFamily priority rules and version 1.30.3-gke.1639000 or later for other priority rule types.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Consume Compute Engine reservations : optionally, tell GKE to consume existing Compute Engine zonal reservations when creating new nodes.
- Consume Compute Engine reservations Available in GKE version 1.31.1-gke.2105000 and later If you use Compute Engine capacity reservations to get a higher level of assurance of hardware availability in specific Google Cloud zones, you can configure each fallback priority in your custom ComputeClass so that GKE consumes reservations when creating new nodes.
- To consume Compute Engine reservations by using a custom ComputeClass, you can use the following methods: Node pool auto-creation : GKE automatically creates new node pools to consume your specified reservations.
- For details, see the Consume Compute Engine reservations section. location : zones : A list of Google Cloud zones where GKE can provision nodes.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Cluster autoscaler increases or decreases the size of the node pool automatically by adding or removing virtual machine (VM) instances in the underlying Compute Engine Managed Instance Group (MIG) for the node pool.
- If you need to share reservations across projects, consider using custom compute classes , which let you configure the priority that the cluster autoscaler uses to scale nodes, including shared reservations.
- This can lead to node pools failing to scale up or scale down because the Compute Engine autoscaler will be in conflict with GKE's cluster autoscaler.
- Use the ANY policy to prioritize utilization of unused reservations and higher obtainability of scarce compute resources (such as accelerators).

