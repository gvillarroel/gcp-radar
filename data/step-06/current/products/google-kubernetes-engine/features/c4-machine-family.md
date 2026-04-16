---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.735Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "C4 machine family"
feature_slug: "c4-machine-family"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
keywords:
  - "c4"
  - "machine"
  - "family"
  - "generally"
  - "available"
  - "gke"
  - "standard"
  - "autopilot"
---

# C4 machine family

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This machine family is generally available for GKE Standard and Autopilot in the listed versions.

## Extended Definition

This machine family is generally available for GKE Standard and Autopilot in the listed versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities : defines an array of three different N4 machine family configurations. activeMigration : lets GKE migrate Pods to configurations that are higher in the list of priorities when resources become available.
- Create a new custom Autopilot ComputeClass Save one of the following example ComputeClass manifests: Select specific machines : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : n4-class spec : autopilot : enabled : true priorities : - machineFamily : n4 spot : true minCores : 16 - machineFamily : n4 spot : true - machineFamily : n4 spot : false activeMigration : optimizeRulePriority : true This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.
- Use the container-optimized compute platform with modifications : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : general-purpose-class spec : autopilot : enabled : true priorities : - podFamily : general-purpose priorityDefaults : location : zones : [ 'us-central1-a' , 'us-central1-b' , 'us-central1-f' ] This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities.podFamily : uses the podFamily priority rule to run Pods on the Autopilot container-optimized compute platform. priorityDefaults.location : defines the zones in which GKE should create nodes for Pods that use the ComputeClass.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- If you enforce all of the available Autopilot policies, then your Standard cluster has a similar operational environment to an Autopilot cluster.
- Standard clusters : Built-in Autopilot ComputeClasses . podFamily priority rules in custom Autopilot ComputeClasses .
- Pricing Autopilot pricing uses different models depending on the type of hardware that your Pods use, as follows: General-purpose Autopilot Pods : the following types of Pods use a Pod-based billing model and are categorized as general-purpose Pods : Pods that run on the container-optimized compute platform in Autopilot clusters or Standard clusters.
- Autopilot workloads that select specific hardware : Pods that select specific hardware, such as Compute Engine machine series or hardware accelerators, use a node-based billing model .

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .
- The following compute class sets a prioritized list of zones that includes AI zones: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-ai-preferred spec : nodePoolAutoCreation : enabled : true priorities : --- Priority 1: TPU in a specific AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zones : - "us-central1-ai1a" # Specify your target AI zone machineFamily: a3 # Optional --- Priority 2: TPU in any AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zoneTypes : - "AI" # All AI zones in the cluster's region --- Priority 3: GPU in a specific Standard zone (On-Demand) --- - gpu : type : nvidia-tesla-a100 count : 1 location : zones : - "us-central1-a" # Fallback to a standard zone - "us-central1-b" whenUnsatisfiable : DoNotScaleUp This ComputeClass configures GKE to provision nodes with v5p TPUs or A100 GPUs for the workload.
- The following example shows a priority rule that uses machineFamily : priorities: - machineFamily: n4 spot: true minCores: 16 minMemoryGb: 64 storage: bootDiskType: hyperdisk-balanced bootDiskSize: 100 bootDiskKMSKey: projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks: - diskImageName: pytorch-mnist project: k8s-staging-jobset machineType configurations The machineType field accepts a Compute Engine predefined machine type, like n4-standard-32 , or a custom machine type string , like n4-custom-8-20480 .
- For example, the following ComputeClass specification prioritizes N4 nodes over C4 nodes: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : priorities : - machineFamily : n4 - machineFamily : c4 activeMigration : optimizeRulePriority : true If N4 nodes were unavailable when you deployed a Pod with this ComputeClass, GKE would have used C4 nodes as a fallback option.

