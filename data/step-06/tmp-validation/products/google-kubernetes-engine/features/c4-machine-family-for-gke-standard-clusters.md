---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.220Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "C4 machine family for GKE Standard clusters"
feature_slug: "c4-machine-family-for-gke-standard-clusters"
latest_feature_date: "2024-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
keywords:
  - "family"
  - "standard"
  - "machine"
  - "clusters"
---

# C4 machine family for GKE Standard clusters

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Standard clusters can use the C4 machine family for node pools and cluster creation.

## Extended Definition

GKE Standard clusters can use the C4 machine family for node pools and cluster creation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Create a new custom Autopilot ComputeClass Save one of the following example ComputeClass manifests: Select specific machines : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : n4-class spec : autopilot : enabled : true priorities : - machineFamily : n4 spot : true minCores : 16 - machineFamily : n4 spot : true - machineFamily : n4 spot : false activeMigration : optimizeRulePriority : true This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities : defines an array of three different N4 machine family configurations. activeMigration : lets GKE migrate Pods to configurations that are higher in the list of priorities when resources become available.
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.
- These priorities help to ensure that your clusters have efficient compute resource usage at scale, like in the following example scenarios: In clusters that have a small number of node pools and less resource usage, GKE creates new node pools more frequently and uses smaller machine types for those node pools.
- Node metadata configuration GKE also configures node metadata (like labels, annotations, and node taints) based on your workload requirements, such as in the following examples: If you request the N2 machine series, GKE adds the cloud.google.com/machine-family: n2 node label to each of the nodes.
- You can manually control the minimum size of the instances that GKE uses for your auto-created node pools by using a ComputeClass that has the priorities.machineFamily field and either the priorities.minCores field or the priorities.minMemoryGb field.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The following compute class sets a prioritized list of zones that includes AI zones: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-ai-preferred spec : nodePoolAutoCreation : enabled : true priorities : --- Priority 1: TPU in a specific AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zones : - "us-central1-ai1a" # Specify your target AI zone machineFamily: a3 # Optional --- Priority 2: TPU in any AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zoneTypes : - "AI" # All AI zones in the cluster's region --- Priority 3: GPU in a specific Standard zone (On-Demand) --- - gpu : type : nvidia-tesla-a100 count : 1 location : zones : - "us-central1-a" # Fallback to a standard zone - "us-central1-b" whenUnsatisfiable : DoNotScaleUp This ComputeClass configures GKE to provision nodes with v5p TPUs or A100 GPUs for the workload.
- The following example shows a priority rule that uses machineFamily : priorities: - machineFamily: n4 spot: true minCores: 16 minMemoryGb: 64 storage: bootDiskType: hyperdisk-balanced bootDiskSize: 100 bootDiskKMSKey: projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks: - diskImageName: pytorch-mnist project: k8s-staging-jobset machineType configurations The machineType field accepts a Compute Engine predefined machine type, like n4-standard-32 , or a custom machine type string , like n4-custom-8-20480 .
- In Standard clusters that use node pool auto-creation, GKE might create a new node pool that uses the default E2 machine series to place the Pod.
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .

