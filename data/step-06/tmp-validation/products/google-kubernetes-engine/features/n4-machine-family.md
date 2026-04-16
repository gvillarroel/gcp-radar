---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.228Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "N4 machine family"
feature_slug: "n4-machine-family"
latest_feature_date: "2024-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
keywords:
  - "available"
  - "family"
  - "standard"
  - "machine"
  - "clusters"
  - "node"
---

# N4 machine family

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The N4 machine family is available for GKE Standard clusters and node pools.

## Extended Definition

The N4 machine family is available for GKE Standard clusters and node pools.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities : defines an array of three different N4 machine family configurations. activeMigration : lets GKE migrate Pods to configurations that are higher in the list of priorities when resources become available.
- This node pool is required to run GKE Standard system Pods that can't run on Autopilot nodes in Standard clusters because of the taints that GKE adds to those nodes.
- Create a new custom Autopilot ComputeClass Save one of the following example ComputeClass manifests: Select specific machines : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : n4-class spec : autopilot : enabled : true priorities : - machineFamily : n4 spot : true minCores : 16 - machineFamily : n4 spot : true - machineFamily : n4 spot : false activeMigration : optimizeRulePriority : true This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities.podFamily : uses the podFamily priority rule to run Pods on the Autopilot container-optimized compute platform. priorityDefaults.location : defines the zones in which GKE should create nodes for Pods that use the ComputeClass.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The following compute class sets a prioritized list of zones that includes AI zones: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-ai-preferred spec : nodePoolAutoCreation : enabled : true priorities : --- Priority 1: TPU in a specific AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zones : - "us-central1-ai1a" # Specify your target AI zone machineFamily: a3 # Optional --- Priority 2: TPU in any AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zoneTypes : - "AI" # All AI zones in the cluster's region --- Priority 3: GPU in a specific Standard zone (On-Demand) --- - gpu : type : nvidia-tesla-a100 count : 1 location : zones : - "us-central1-a" # Fallback to a standard zone - "us-central1-b" whenUnsatisfiable : DoNotScaleUp This ComputeClass configures GKE to provision nodes with v5p TPUs or A100 GPUs for the workload.
- For example, the following ComputeClass specification prioritizes N4 nodes over C4 nodes: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : priorities : - machineFamily : n4 - machineFamily : c4 activeMigration : optimizeRulePriority : true If N4 nodes were unavailable when you deployed a Pod with this ComputeClass, GKE would have used C4 nodes as a fallback option.
- In Standard clusters that use node pool auto-creation, GKE might create a new node pool that uses the default E2 machine series to place the Pod.
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- To create a Standard mode cluster that uses Confidential GKE Nodes, select one of the following options: gcloud When creating a new cluster, specify the --confidential-node-type option in the gcloud CLI: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --machine-type = MACHINE TYPE \ --node-locations = ZONE1,ZONE2,... \ --confidential-node-type = CONFIDENTIAL COMPUTE TECHNOLOGY Replace the following: CLUSTER NAME : the name of your cluster.
- For more information about the supported fields and values for ComputeClasses, see the ComputeClass CustomResourceDefinition . apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : COMPUTE CLASS spec : nodePoolConfig : confidentialNodeType : CONFIDENTIAL COMPUTE TECHNOLOGY nodePoolAutoCreation : enabled : true activeMigration : optimizeRulePriority : true priorityDefaults : location : zones : [ ' ZONE1 ' , ' ZONE2 ' ] priorities : - machineFamily : MACHINE SERIES - machineType : MACHINE TYPE whenUnsatisfiable : DoNotScaleUp Replace the following: COMPUTE CLASS : a name for your new compute class.
- The output is similar to the following: Name: gke-cluster-1-default-pool-affsf335r-asdf Roles: <none> Labels: cloud.google.com/gke-boot-disk=pd-balanced cloud.google.com/gke-container-runtime=containerd cloud.google.com/gke-confidential-nodes-instance-type= CONFIDENTIAL COMPUTE SELECTOR cloud.google.com/gke-nodepool=default-pool cloud.google.com/gke-os-distribution=cos cloud.google.com/machine-family=e2 lines omitted for clarity In this output, the cloud.google.com/gke-confidential-nodes-instance-type node label indicates that the node is a confidential node.
- To disable Confidential GKE Nodes, select one of the following options: gcloud Run the following command: gcloud container node-pools update NODE POOL NAME \ --cluster = CLUSTER NAME \ --location = CLUSTER LOCATION \ --no-enable-confidential-nodes Console In the Google Cloud console, go to the Kubernetes clusters page: Go to Kubernetes clusters Click the name of your Standard cluster.

