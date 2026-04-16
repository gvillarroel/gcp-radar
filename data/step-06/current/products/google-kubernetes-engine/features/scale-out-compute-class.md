---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.838Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Scale-Out compute class"
feature_slug: "scale-out-compute-class"
latest_feature_date: "2022-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "scale"
  - "out"
  - "compute"
  - "class"
  - "available"
  - "preview"
  - "gke"
  - "autopilot"
---

# Scale-Out compute class

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Scale-Out compute class is available in Preview for GKE Autopilot clusters.

## Extended Definition

The Scale-Out compute class is available in Preview for GKE Autopilot clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- If the prioritized instance types aren't available, GKE then falls back to any matching reservations in the specification: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : specific : - name : a3-shared-reservation project : reservation-project affinity : Specific - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : affinity : AnyBestEffort whenUnsatisfiable : DoNotScaleUp If you deploy a Pod that uses the accelerator-reservations ComputeClass, GKE first attempts to use the a3-shared-reservation reservation when creating new a3-highgpu-1g instances to run the Pod.
- Custom ComputeClasses are available to use in GKE Autopilot mode and GKE Standard mode in version 1.30.3-gke.1451000 and later, and offer a declarative approach to defining node attributes and autoscaling priorities.
- For all ComputeClasses, this is the default behavior because all clusters that use ComputeClasses must use the cluster autoscaler or are Autopilot clusters.
- DoNotScaleUp : Leave the Pod in the Pending status until a node that meets the ComputeClass requirements is available.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- The following example configures a ComputeClass that prioritizes Spot VMs for the n4-custom-8-20480 custom machine type, and falls back to on-demand VMs of the same type if Spot capacity is unavailable: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : custom-machine-type spec : priorities : - machineType : n4-custom-8-20480 spot : true - machineType : n4-custom-8-20480 spot : false nodePoolAutoCreation : enabled : true priorityDefaults priorityDefaults : nodeSystemConfig : object( nodeSystemConfig ) location : object( location ) Fields nodeSystemConfig optional object ( nodeSystemConfig ) Default values for the node system configuration.
- Indicates whether nodes created for this compute class should be Autopilot managed. spec.priorities[] required object ( priorities ) Requires GKE version 1.30.3-gke.1451000 or later A list of priority rules that defines how GKE configures nodes during scaling operations.
- If you omit this field, the default value is false . autopilot autopilot : enabled : boolean Fields enabled optional boolean Requires GKE version 1.34.1-gke.1829001 or later Indicates whether to run workloads that use this ComputeClass in Autopilot mode.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Pods that select the Balanced or Scale-Out built-in ComputeClasses in Autopilot clusters.
- For an interactive guide in the Google Cloud console for deploying and exposing an app in an Autopilot cluster, click Guide me : Guide me The following table shows some common requirements and provides recommendations for what you should do: Use case Resources Control individual node properties when scaling a cluster Create a custom ComputeClass and request it in your workload manifest.
- The container-optimized compute platform uses GKE Autopilot nodes that can dynamically resize while running, designed to scale up from fractions of a CPU with minimal disruptions.
- Standard clusters : Built-in Autopilot ComputeClasses . podFamily priority rules in custom Autopilot ComputeClasses .

