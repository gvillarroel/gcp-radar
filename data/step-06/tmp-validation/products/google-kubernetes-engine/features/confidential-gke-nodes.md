---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.299Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Confidential GKE Nodes"
feature_slug: "confidential-gke-nodes"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
keywords:
  - "confidential"
  - "encrypt"
  - "workload"
  - "compute"
  - "nodes"
---

# Confidential GKE Nodes

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Confidential GKE Nodes encrypt workload data in use with Compute Engine Confidential VMs.

## Extended Definition

Confidential GKE Nodes encrypt workload data in use with Compute Engine Confidential VMs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)

## Supporting Pages

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 277
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Learn more about Confidential VM Learn more about Google Cloud encryption at rest Learn more about Google Cloud encryption in transit Learn more about customer-managed encryption keys (CMEK) Learn how to remotely attest that workloads are running on Confidential VM Learn how to run GPUs on Confidential GKE Nodes Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To require that a workload runs on a specific Confidential Computing technology, use a node selector with the cloud.google.com/gke-confidential-nodes-instance-type label, like in the following example: apiVersion : v1 kind : Pod spec : For readability, lines are omitted from this example manifest nodeSelector : cloud.google.com/gke-confidential-nodes-instance-type : " CONFIDENTIAL COMPUTE SELECTOR " Replace CONFIDENTIAL COMPUTE SELECTOR with the name of the technology that the node pool uses.
- Pricing The following pricing applies, depending on how you configure Confidential GKE Nodes: Confidential GKE Nodes pricing Workload-level In Autopilot workloads, both of the following costs apply: Autopilot node-based billing for the Compute Engine machine series that the Pods run on.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE security Send feedback Encrypt workload data in-use with Confidential GKE Nodes Stay organized with collections Save and categorize content based on your preferences.

### "Encrypt your data in-transit in GKE with user-managed encryption keys \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-inter-node-transparent-encryption)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using GKE Confidential Nodes further decreases the risk of keys being compromised because the node memory is also encrypted (with different keys).
- Inter-node transparent encryption along with Confidential GKE Nodes works only on Container-Optimized OS (COS) and Ubuntu, and not on Windows.
- Inter-node transparent encryption incurs 150 microseconds of latency on two nodes in the same zone that don't use Confidential GKE Nodes.
- To do this, we recommend that you use inter-node transparent encryption with Confidential GKE Nodes .

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- In GKE version 1.33 and later, this is the default behavior. activeMigration Choose whether GKE migrates workloads to higher priority nodes for the ComputeClass as resources become available.
- The following example configures a ComputeClass that prioritizes Spot VMs for the n4-custom-8-20480 custom machine type, and falls back to on-demand VMs of the same type if Spot capacity is unavailable: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : custom-machine-type spec : priorities : - machineType : n4-custom-8-20480 spot : true - machineType : n4-custom-8-20480 spot : false nodePoolAutoCreation : enabled : true priorityDefaults priorityDefaults : nodeSystemConfig : object( nodeSystemConfig ) location : object( location ) Fields nodeSystemConfig optional object ( nodeSystemConfig ) Default values for the node system configuration.
- This field is required if the nodePoolGroup is specified. nodePoolConfig nodePoolConfig : imageType : string ipType : string serviceAccount : string autoRepair : boolean autoUpgrade : boolean workloadType : string nodeLabels : map confidentialNodeType : string taints : [ object ( taints ) ] imageStreaming : object( imageStreaming ) gvnic : object( gvnic ) resourceManagerTags : [ object ( resourceManagerTags ) ] loggingConfig : object( loggingConfig ) Fields imageType optional string Requires GKE version 1.32.4-gke.1198000 or later Choose an image type for the node pools.

