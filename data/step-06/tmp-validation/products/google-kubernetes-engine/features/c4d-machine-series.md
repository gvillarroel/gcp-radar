---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.172Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "C4D machine series"
feature_slug: "c4d-machine-series"
latest_feature_date: "2025-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
keywords:
  - "series"
  - "across"
  - "autopilot"
  - "available"
  - "standard"
  - "machine"
---

# C4D machine series

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The C4D machine series is available in GKE with support across Standard and Autopilot clusters.

## Extended Definition

The C4D machine series is available in GKE with support across Standard and Autopilot clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)

## Supporting Pages

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Add the following block to your Terraform configuration: provider "google" { project = var.project id region = var.region } resource "google container cluster" "ml cluster" { name = var.cluster name location = var.region initial node count = 1 } resource "google container node pool" "gpu pool" { name = google container cluster.ml cluster.name location = var.region node locations = [ var.zones ] cluster = google container cluster.ml cluster.name node count = 3 autoscaling { total min node count = "1" total max node count = "5" } management { auto repair = "true" auto upgrade = "true" } node config { oauth scopes = [ "https://www.googleapis.com/auth/logging.write" , "https://www.googleapis.com/auth/monitoring" , "https://www.googleapis.com/auth/devstorage.read only" , "https://www.googleapis.com/auth/trace.append" , "https://www.googleapis.com/auth/service.management.readonly" , "https://www.googleapis.com/auth/servicecontrol" , ] labels = { env = var.project id } guest accelerator { type = var.gpu type count = 1 gpu driver installation config { gpu driver version = var.gpu driver version } } image type = "cos containerd" machine type = var.machine type tags = [ "gke-node", "${var.project id}-gke" ] disk size gb = "30" disk type = "pd-standard" metadata = { disable-legacy-endpoints = "true" } } } Terraform calls Google Cloud APIs to set create a new cluster with a node pool that uses GPUs.
- G4 machine series : Machine types that have one or more GPUs : 1.34.0-gke.1662000 or later Machine types that have less than one GPU ( Preview ) : Use one of the following patch versions or later, based on the GKE minor version: 1.34 : 1.34.5-gke.1153000 1.35 or later : 1.35.2-gke.1485000 GPUs on Ubuntu nodes : If you use GPUs with Ubuntu nodes, the following requirements apply: Ubuntu driver compatibility : L4 GPUs and H100 GPUs : NVIDIA driver version 535 or later H200 GPUs : NVIDIA driver version 550 or later B200 GPUs : NVIDIA driver version 570 or later RTX PRO 6000 GPUs : NVIDIA driver version 580 or later.
- Required for the following GPU types: NVIDIA B200 GPUs (corresponding to the nvidia-b200 accelerator type and A4 machine series ) NVIDIA H200 141 GB GPUs (corresponding to the nvidia-h200-141gb accelerator type and A3 Ultra machine type), or NVIDIA H100 80 GB GPUs (corresponding to the nvidia-h100-80gb accelerator type and A3 High machine type), or NVIDIA H100 80GB Mega GPUs (corresponding to the nvidia-h100-mega-80gb accelerator type and A3 Mega machine type).
- Required for the following GPU types: NVIDIA B200 GPUs (corresponding to the nvidia-b200 accelerator type and A4 machine series ) NVIDIA H200 141 GB GPUs (corresponding to the nvidia-h200-141gb accelerator type and A3 Ultra machine type), or NVIDIA H100 80 GB GPUs (corresponding to the nvidia-h100-80gb accelerator type and A3 High machine type), or NVIDIA H100 80GB Mega GPUs (corresponding to the nvidia-h100-mega-80gb accelerator type and A3 Mega machine type).

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities : defines an array of three different N4 machine family configurations. activeMigration : lets GKE migrate Pods to configurations that are higher in the list of priorities when resources become available.
- Use a custom Autopilot ComputeClass in situations like the following: Your workloads require specific hardware to run optimally, like GPUs or a certain Compute Engine machine series.
- Create a new custom Autopilot ComputeClass Save one of the following example ComputeClass manifests: Select specific machines : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : n4-class spec : autopilot : enabled : true priorities : - machineFamily : n4 spot : true minCores : 16 - machineFamily : n4 spot : true - machineFamily : n4 spot : false activeMigration : optimizeRulePriority : true This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Custom ComputeClasses are available to use in GKE Autopilot mode and GKE Standard mode in version 1.30.3-gke.1451000 and later, and offer a declarative approach to defining node attributes and autoscaling priorities.
- In Standard clusters that use node pool auto-creation, GKE might create a new node pool that uses the default E2 machine series to place the Pod.
- For example, if the N4 machine series isn't available, you can fall back to C3 machines.
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .

