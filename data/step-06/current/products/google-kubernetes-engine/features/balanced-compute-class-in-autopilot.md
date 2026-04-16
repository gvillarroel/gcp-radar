---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.806Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Balanced compute class in Autopilot"
feature_slug: "balanced-compute-class-in-autopilot"
latest_feature_date: "2023-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "balanced"
  - "compute"
  - "class"
  - "autopilot"
  - "generally"
  - "available"
  - "clusters"
  - "running"
---

# Balanced compute class in Autopilot

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Balanced compute class is generally available in Autopilot clusters running GKE 1.25 and later.

## Extended Definition

The Balanced compute class is generally available in Autopilot clusters running GKE 1.25 and later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn more about Balanced and Scale-Out ComputeClasses in Autopilot clusters .
- Custom ComputeClasses are available to use in GKE Autopilot mode and GKE Standard mode in version 1.30.3-gke.1451000 and later, and offer a declarative approach to defining node attributes and autoscaling priorities.
- For all ComputeClasses, this is the default behavior because all clusters that use ComputeClasses must use the cluster autoscaler or are Autopilot clusters.
- Custom ComputeClasses are available to configure and use in all eligible GKE clusters by default.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- The following example configures a ComputeClass that prioritizes Spot VMs for the n4-custom-8-20480 custom machine type, and falls back to on-demand VMs of the same type if Spot capacity is unavailable: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : custom-machine-type spec : priorities : - machineType : n4-custom-8-20480 spot : true - machineType : n4-custom-8-20480 spot : false nodePoolAutoCreation : enabled : true priorityDefaults priorityDefaults : nodeSystemConfig : object( nodeSystemConfig ) location : object( location ) Fields nodeSystemConfig optional object ( nodeSystemConfig ) Default values for the node system configuration.
- The total number of local SSDs (including ephemeral storage local SSDs) must be supported by the machine type. nodePoolAutoCreation nodePoolAutoCreation : enabled : boolean Fields enabled optional boolean Choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- Indicates whether nodes created for this compute class should be Autopilot managed. spec.priorities[] required object ( priorities ) Requires GKE version 1.30.3-gke.1451000 or later A list of priority rules that defines how GKE configures nodes during scaling operations.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 207
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities : defines an array of three different N4 machine family configurations. activeMigration : lets GKE migrate Pods to configurations that are higher in the list of priorities when resources become available.
- The following steps show you how to create an example Deployment that selects a ComputeClass and verify that the Pods run in Autopilot mode: Save the following example Deployment as autopilot-cc-deployment.yaml : apiVersion : apps/v1 kind : Deployment metadata : name : helloweb labels : app : hello spec : selector : matchLabels : app : hello template : metadata : labels : app : hello spec : nodeSelector : Replace with the name of a compute class cloud.google.com/compute-class : COMPUTE CLASS containers : - name : hello-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 ports : - containerPort : 8080 resources : requests : cpu : "250m" memory : "1Gi" Replace COMPUTE CLASS with the name of the compute class to use.
- Create a new custom Autopilot ComputeClass Save one of the following example ComputeClass manifests: Select specific machines : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : n4-class spec : autopilot : enabled : true priorities : - machineFamily : n4 spot : true minCores : 16 - machineFamily : n4 spot : true - machineFamily : n4 spot : false activeMigration : optimizeRulePriority : true This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.
- To update an existing custom ComputeClass to use Autopilot mode, follow these steps: In a text editor, update the manifest file for your existing ComputeClass to add the spec.autopilot field: spec : autopilot : enabled : true Replace the existing ComputeClass resource in the Kubernetes API with the updated specification: kubectl replace --force -f PATH TO UPDATED MANIFEST Replace PATH TO UPDATED MANIFEST with the path to your updated manifest file.

