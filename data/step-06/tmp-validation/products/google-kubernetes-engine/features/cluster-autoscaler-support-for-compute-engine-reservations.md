---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.257Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cluster autoscaler support for Compute Engine Reservations"
feature_slug: "cluster-autoscaler-support-for-compute-engine-reservations"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
keywords:
  - "prioritizes"
  - "unused"
  - "matching"
  - "reservations"
  - "autoscaler"
  - "compute"
  - "cluster"
---

# Cluster autoscaler support for Compute Engine Reservations

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cluster autoscaler prioritizes matching unused Compute Engine Reservations during scale-up decisions starting in GKE 1.27.

## Extended Definition

Cluster autoscaler prioritizes matching unused Compute Engine Reservations during scale-up decisions starting in GKE 1.27.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)

## Supporting Pages

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- The cluster autoscaler prioritizes unused reservations and zones with enough capacity, which can lead to concentration of node pool resources.
- If you need to share reservations across projects, consider using custom compute classes , which let you configure the priority that the cluster autoscaler uses to scale nodes, including shared reservations.
- GKE will try to provision these VMs first. spot : true gpu : type : nvidia-l4 count : 2 If GKE can't satisfy the preceding rule, request on-demand nodes with the same configuration - machineType : g2-standard-24 spot : false gpu : type : nvidia-l4 count : 2 nodePoolAutoCreation : enabled : true Configures active migration behavior for workloads using this ComputeClass. activeMigration : optimizeRulePriority : true Enables Cluster Autoscaler to attempt to migrate workloads to Spot VMs if Spot capacity becomes available and the workload is currently running on an on-demand VM (based on the priority rules in this example).
- Cluster autoscaler increases or decreases the size of the node pool automatically by adding or removing virtual machine (VM) instances in the underlying Compute Engine Managed Instance Group (MIG) for the node pool.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- If the prioritized instance types aren't available, GKE then falls back to any matching reservations in the specification: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : specific : - name : a3-shared-reservation project : reservation-project affinity : Specific - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : affinity : AnyBestEffort whenUnsatisfiable : DoNotScaleUp If you deploy a Pod that uses the accelerator-reservations ComputeClass, GKE first attempts to use the a3-shared-reservation reservation when creating new a3-highgpu-1g instances to run the Pod.
- Consume reservations in manually created node pools To consume reservations in manually created node pools in Standard clusters by using ComputeClasses, follow these steps: Bind the reservations to the node pools by following the steps in Consuming reserved instances in GKE Standard .
- In Standard clusters that don't use node pool auto-creation, GKE tries to scale up any manually created node pool that defines a label and taint matching a given ComputeClass.
- For all ComputeClasses, this is the default behavior because all clusters that use ComputeClasses must use the cluster autoscaler or are Autopilot clusters.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- The following example configures a ComputeClass that prioritizes Spot VMs for the n4-custom-8-20480 custom machine type, and falls back to on-demand VMs of the same type if Spot capacity is unavailable: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : custom-machine-type spec : priorities : - machineType : n4-custom-8-20480 spot : true - machineType : n4-custom-8-20480 spot : false nodePoolAutoCreation : enabled : true priorityDefaults priorityDefaults : nodeSystemConfig : object( nodeSystemConfig ) location : object( location ) Fields nodeSystemConfig optional object ( nodeSystemConfig ) Default values for the node system configuration.
- If you assign a priority score to a priority rule, you must set a priority score for all priority rules that are in the same ComputeClass. reservations optional object ( reservations ) Requires GKE version 1.31.1-gke.2105000 or later The Compute Engine capacity reservations to consume during node provisioning. spot optional boolean Requires GKE version 1.30.3-gke.1451000 or later The Spot VMs configuration.
- The total number of local SSDs (including ephemeral storage local SSDs) must be supported by the machine type. nodePoolAutoCreation nodePoolAutoCreation : enabled : boolean Fields enabled optional boolean Choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.

