---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.283Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "a2-ultragpu machine family"
feature_slug: "a2-ultragpu-machine-family"
latest_feature_date: "2022-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
keywords:
  - "ultragpu"
  - "preview"
  - "available"
  - "family"
  - "machine"
  - "pools"
  - "node"
---

# a2-ultragpu machine family

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The a2-ultragpu machine family is available in Preview for node pools.

## Extended Definition

The a2-ultragpu machine family is available in Preview for node pools.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)

## Supporting Pages

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Test new GKE versions for compatibility in a staging environment before automatic upgrades change the version on your production GPU nodes, or disable automatic upgrades in those node pools. gcloud To create a node pool with GPUs in a cluster, run the following command: gcloud container node-pools create POOL NAME \ --accelerator type = GPU TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type MACHINE TYPE \ --cluster CLUSTER NAME \ --location CONTROL PLANE LOCATION \ --node-locations COMPUTE ZONE1 [ , COMPUTE ZONE2 ] \ [ --sandbox = type = gvisor ] [ --enable-autoscaling \ --min-nodes MIN NODES \ --max-nodes MAX NODES ] \ [ --scopes = SCOPES ] \ [ --service-account = SERVICE ACCOUNT ] \ [ --reservation-affinity = specific --reservation = RESERVATION NAME ] Replace the following: POOL NAME : the name you choose for the node pool.
- G4 machine series : Machine types that have one or more GPUs : 1.34.0-gke.1662000 or later Machine types that have less than one GPU ( Preview ) : Use one of the following patch versions or later, based on the GKE minor version: 1.34 : 1.34.5-gke.1153000 1.35 or later : 1.35.2-gke.1485000 GPUs on Ubuntu nodes : If you use GPUs with Ubuntu nodes, the following requirements apply: Ubuntu driver compatibility : L4 GPUs and H100 GPUs : NVIDIA driver version 535 or later H200 GPUs : NVIDIA driver version 550 or later B200 GPUs : NVIDIA driver version 570 or later RTX PRO 6000 GPUs : NVIDIA driver version 580 or later.
- For example, you might want to update the GPU driver to switch to the latest available driver: gcloud container node-pools update p100 \ --accelerator type = nvidia-tesla-p100,count = 2 , gpu-driver-version = latest \ --cluster p100-cluster \ --location us-central1 Console To create a node pool with GPUs: Go to the Google Kubernetes Engine page in the Google Cloud console.
- Ubuntu version compatibility : When you use A4 machine series on Ubuntu node pools, you must use a GKE version that includes the ubuntu-gke-2404-1-32-amd64-v20250730 image or a later version of the node image.

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the supported fields and values for ComputeClasses, see the ComputeClass CustomResourceDefinition . apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : COMPUTE CLASS spec : nodePoolConfig : confidentialNodeType : CONFIDENTIAL COMPUTE TECHNOLOGY nodePoolAutoCreation : enabled : true activeMigration : optimizeRulePriority : true priorityDefaults : location : zones : [ ' ZONE1 ' , ' ZONE2 ' ] priorities : - machineFamily : MACHINE SERIES - machineType : MACHINE TYPE whenUnsatisfiable : DoNotScaleUp Replace the following: COMPUTE CLASS : a name for your new compute class.
- The output is similar to the following: Name: gke-cluster-1-default-pool-affsf335r-asdf Roles: <none> Labels: cloud.google.com/gke-boot-disk=pd-balanced cloud.google.com/gke-container-runtime=containerd cloud.google.com/gke-confidential-nodes-instance-type= CONFIDENTIAL COMPUTE SELECTOR cloud.google.com/gke-nodepool=default-pool cloud.google.com/gke-os-distribution=cos cloud.google.com/machine-family=e2 lines omitted for clarity In this output, the cloud.google.com/gke-confidential-nodes-instance-type node label indicates that the node is a confidential node.
- Create a new node pool To create a new node pool with Confidential GKE Nodes enabled, select one of the following options: gcloud Run the following command: gcloud container node-pools create NODE POOL NAME \ --location = LOCATION \ --cluster = CLUSTER NAME \ --machine-type = MACHINE TYPE \ --node-locations = ZONE1,ZONE2,... \ --confidential-node-type = CONFIDENTIAL COMPUTE TECHNOLOGY Note: You can enable confidential mode on boot disk storage by passing the --enable-confidential-storage flag and --boot-disk-kms-key= KMS KEY .
- Change the node pool machine type and node locations to supported values for the new Confidential Computing technology: gcloud container node-pools update NODE POOL NAME \ --cluster = CLUSTER NAME \ --location = CLUSTER LOCATION \ --machine-type = MACHINE TYPE \ --node-locations = ZONE1,ZONE2,...

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- You can manually control the minimum size of the instances that GKE uses for your auto-created node pools by using a ComputeClass that has the priorities.machineFamily field and either the priorities.minCores field or the priorities.minMemoryGb field.
- Machine series or machine type selection You can select a Compute Engine machine series or machine type for GKE to use for auto-created node pools in one of the following ways: ComputeClasses : use the machineFamily or the machineType priority rules .
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.
- These priorities help to ensure that your clusters have efficient compute resource usage at scale, like in the following example scenarios: In clusters that have a small number of node pools and less resource usage, GKE creates new node pools more frequently and uses smaller machine types for those node pools.

