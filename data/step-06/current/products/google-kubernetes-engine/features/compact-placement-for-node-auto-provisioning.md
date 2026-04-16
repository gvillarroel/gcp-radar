---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.818Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Compact placement for node auto-provisioning"
feature_slug: "compact-placement-for-node-auto-provisioning"
latest_feature_date: "2022-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
keywords:
  - "compact"
  - "placement"
  - "node"
  - "auto"
  - "provisioning"
  - "improves"
  - "standard"
  - "clusters"
---

# Compact placement for node auto-provisioning

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Compact placement improves node auto-provisioning in Standard clusters.

## Extended Definition

Compact placement improves node auto-provisioning in Standard clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- In clusters that use GKE version 1.33.3-gke.1136000 and later, you can use these fields in a ComputeClass without enabling node auto-provisioning at the cluster level.
- In clusters that use GKE version 1.33.3-gke.1136000 and later, you can use node pool auto-creation in ComputeClasses without enabling node auto-provisioning.
- Standard Google Kubernetes Engine (GKE) can automatically create and manage node pools in your clusters based on the configuration of your workloads.
- You don't need to manually configure node pool auto-creation for Autopilot clusters or for Autopilot workloads in Standard clusters.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Consider the following example: apiVersion: cloud.google.com/v1 kind: ComputeClass metadata: name: my-class spec: priorities: - machineFamily: n4 placement: policyName: my-placement-policy nodePoolAutoCreation: enabled: true In this configuration, GKE applies the compact placement policy for all workloads that use this ComputeClass and provisions their nodes according to the existing resource policy named my-placement-policy .
- Target specific node pools in a ComputeClass definition The priorities.nodepools field lets you specify a list of manually created node pools on which GKE attempts to schedule Pods in no specific order in GKE Standard clusters that use cluster autoscaling.
- In Standard clusters, if you use node pool auto-creation, active migration might trigger the creation of new node pools if existing node pools don't meet the criteria defined in your ComputeClass.
- Request a placement policy Starting with GKE version 1.33.2-gke.1335000, in GKE Autopilot clusters, you can use compact placement with a custom placement policy or workload policy.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- For more information about logging configuration, see Adjust log throughput . nodeRecycling nodeRecycling : leadTimeSeconds : integer Fields leadTimeSeconds required integer The amount of time, in seconds, before a node reaches the end of its run that GKE should start provisioning a replacement node. nodeSystemConfig nodeSystemConfig : kubeletConfig : object( kubeletConfig ) linuxNodeConfig : object( linuxNodeConfig ) Fields kubeletConfig optional object ( kubeletConfig ) The kubelet configuration for the node. linuxNodeConfig optional object ( linuxNodeConfig ) The Linux kernel configuration for the node. placement placement : policyName : string Fields policyName required string The resource policy name to be used in custom compact placement policies .
- The total number of local SSDs (including ephemeral storage local SSDs) must be supported by the machine type. nodePoolAutoCreation nodePoolAutoCreation : enabled : boolean Fields enabled optional boolean Choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- Unsupported when the spec.autopilot.enabled field is set to true . nodeSystemConfig optional object ( nodeSystemConfig ) Requires GKE version 1.32.1-gke.1729000 or later The node system configuration. placement optional object ( placement ) Requires GKE version 1.33.2-gke.1335000 or later The placement configuration.

