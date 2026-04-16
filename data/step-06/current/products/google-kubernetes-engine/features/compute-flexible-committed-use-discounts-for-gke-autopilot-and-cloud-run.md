---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.741Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Compute Flexible Committed Use Discounts for GKE Autopilot and Cloud Run"
feature_slug: "compute-flexible-committed-use-discounts-for-gke-autopilot-and-cloud-run"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "compute"
  - "flexible"
  - "committed"
  - "use"
  - "discounts"
  - "gke"
  - "autopilot"
  - "run"
---

# Compute Flexible Committed Use Discounts for GKE Autopilot and Cloud Run

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This feature expands Compute flexible committed use discounts to additional GKE Autopilot and Cloud Run SKUs.

## Extended Definition

This feature expands Compute flexible committed use discounts to additional GKE Autopilot and Cloud Run SKUs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Accelerator compatibility with GKE capabilities The following table shows the compatible GKE capabilities for each method of selecting accelerators in GKE Autopilot: Accelerator compute class selected Compatibility with GKE capabilities Spot Pods Compute flexible committed use discounts (CUDs) for the Autopilot premium Compute Engine CUDs for the node hardware Compute Engine capacity reservations GKE Sandbox Spot Pods Autopilot committed use discounts (CUDs) for regular Pods Caution: Autopilot committed use discounts (CUDs) are no longer available for purchase.
- If you want to purchase new commitments to cover your Autopilot usage, then purchase compute flexible commitments instead.
- Request specific machine types using custom ComputeClasses In some cases, you might need to run your GPU workload on a specific machine type, for example if the machine type that you want is not a default machine type for Autopilot clusters.
- Before you proceed, ensure that you're familiar with the following concepts: About GPUs in GKE Kubernetes node selectors Select accelerators in Pods Autopilot uses the specialized Accelerator compute class to run GPU Pods.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- Indicates whether nodes created for this compute class should be Autopilot managed. spec.priorities[] required object ( priorities ) Requires GKE version 1.30.3-gke.1451000 or later A list of priority rules that defines how GKE configures nodes during scaling operations.
- If you omit this field, the default value is false . autopilot autopilot : enabled : boolean Fields enabled optional boolean Requires GKE version 1.34.1-gke.1829001 or later Indicates whether to run workloads that use this ComputeClass in Autopilot mode.
- Nodes that GKE creates for the ComputeClass are Autopilot-managed. nodePoolGroup nodePoolGroup : name : string Fields name required string Defines the name of the node pool group, which is used to share configurations between a group of node pools.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- For an interactive guide in the Google Cloud console for deploying and exposing an app in an Autopilot cluster, click Guide me : Guide me The following table shows some common requirements and provides recommendations for what you should do: Use case Resources Control individual node properties when scaling a cluster Create a custom ComputeClass and request it in your workload manifest.
- Pricing Autopilot pricing uses different models depending on the type of hardware that your Pods use, as follows: General-purpose Autopilot Pods : the following types of Pods use a Pod-based billing model and are categorized as general-purpose Pods : Pods that run on the container-optimized compute platform in Autopilot clusters or Standard clusters.
- The container-optimized compute platform provides the following benefits: Compute capacity matches workloads : Autopilot dynamically adjusts the compute capacity for the container-optimized compute platform based on factors like the number of Pods and resource consumption.
- About the Autopilot container-optimized compute platform In GKE version 1.32.3-gke.1927002 and later, Autopilot includes a specialized container-optimized compute platform for your workloads.

