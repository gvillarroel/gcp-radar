---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.169Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "M4 machine series"
feature_slug: "m4-machine-series"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
keywords:
  - "series"
  - "generally"
  - "available"
  - "standard"
  - "machine"
  - "clusters"
---

# M4 machine series

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The M4 machine series is generally available in GKE Standard clusters; The M4 machine series is available for use in GKE Standard clusters.

## Extended Definition

The M4 machine series is generally available in GKE Standard clusters; The M4 machine series is available for use in GKE Standard clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities : defines an array of three different N4 machine family configurations. activeMigration : lets GKE migrate Pods to configurations that are higher in the list of priorities when resources become available.
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard Cluster administrators and application operators can get the benefits of Google Kubernetes Engine (GKE) Autopilot, like pricing and pre-configured settings, in Standard mode clusters.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Add the following block to your Terraform configuration: provider "google" { project = var.project id region = var.region } resource "google container cluster" "ml cluster" { name = var.cluster name location = var.region initial node count = 1 } resource "google container node pool" "gpu pool" { name = google container cluster.ml cluster.name location = var.region node locations = [ var.zones ] cluster = google container cluster.ml cluster.name node count = 3 autoscaling { total min node count = "1" total max node count = "5" } management { auto repair = "true" auto upgrade = "true" } node config { oauth scopes = [ "https://www.googleapis.com/auth/logging.write" , "https://www.googleapis.com/auth/monitoring" , "https://www.googleapis.com/auth/devstorage.read only" , "https://www.googleapis.com/auth/trace.append" , "https://www.googleapis.com/auth/service.management.readonly" , "https://www.googleapis.com/auth/servicecontrol" , ] labels = { env = var.project id } guest accelerator { type = var.gpu type count = 1 gpu driver installation config { gpu driver version = var.gpu driver version } } image type = "cos containerd" machine type = var.machine type tags = [ "gke-node", "${var.project id}-gke" ] disk size gb = "30" disk type = "pd-standard" metadata = { disable-legacy-endpoints = "true" } } } Terraform calls Google Cloud APIs to set create a new cluster with a node pool that uses GPUs.
- G4 machine series : Machine types that have one or more GPUs : 1.34.0-gke.1662000 or later Machine types that have less than one GPU ( Preview ) : Use one of the following patch versions or later, based on the GKE minor version: 1.34 : 1.34.5-gke.1153000 1.35 or later : 1.35.2-gke.1485000 GPUs on Ubuntu nodes : If you use GPUs with Ubuntu nodes, the following requirements apply: Ubuntu driver compatibility : L4 GPUs and H100 GPUs : NVIDIA driver version 535 or later H200 GPUs : NVIDIA driver version 550 or later B200 GPUs : NVIDIA driver version 570 or later RTX PRO 6000 GPUs : NVIDIA driver version 580 or later.
- Required for the following GPU types: NVIDIA B200 GPUs (corresponding to the nvidia-b200 accelerator type and A4 machine series ) NVIDIA H200 141 GB GPUs (corresponding to the nvidia-h200-141gb accelerator type and A3 Ultra machine type), or NVIDIA H100 80 GB GPUs (corresponding to the nvidia-h100-80gb accelerator type and A3 High machine type), or NVIDIA H100 80GB Mega GPUs (corresponding to the nvidia-h100-mega-80gb accelerator type and A3 Mega machine type).
- Required for the following GPU types: NVIDIA B200 GPUs (corresponding to the nvidia-b200 accelerator type and A4 machine series ) NVIDIA H200 141 GB GPUs (corresponding to the nvidia-h200-141gb accelerator type and A3 Ultra machine type), or NVIDIA H100 80 GB GPUs (corresponding to the nvidia-h100-80gb accelerator type and A3 High machine type), or NVIDIA H100 80GB Mega GPUs (corresponding to the nvidia-h100-mega-80gb accelerator type and A3 Mega machine type).

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- In Standard clusters that use node pool auto-creation, GKE might create a new node pool that uses the default E2 machine series to place the Pod.
- For example, if the N4 machine series isn't available, you can fall back to C3 machines.
- The following compute class sets a prioritized list of zones that includes AI zones: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-ai-preferred spec : nodePoolAutoCreation : enabled : true priorities : --- Priority 1: TPU in a specific AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zones : - "us-central1-ai1a" # Specify your target AI zone machineFamily: a3 # Optional --- Priority 2: TPU in any AI zone (On-Demand) --- - tpu : type : tpu-v5p-slice count : 4 topology : 4x4x4 location : zoneTypes : - "AI" # All AI zones in the cluster's region --- Priority 3: GPU in a specific Standard zone (On-Demand) --- - gpu : type : nvidia-tesla-a100 count : 1 location : zones : - "us-central1-a" # Fallback to a standard zone - "us-central1-b" whenUnsatisfiable : DoNotScaleUp This ComputeClass configures GKE to provision nodes with v5p TPUs or A100 GPUs for the workload.
- If the prioritized instance types aren't available, GKE then falls back to any matching reservations in the specification: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : specific : - name : a3-shared-reservation project : reservation-project affinity : Specific - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : affinity : AnyBestEffort whenUnsatisfiable : DoNotScaleUp If you deploy a Pod that uses the accelerator-reservations ComputeClass, GKE first attempts to use the a3-shared-reservation reservation when creating new a3-highgpu-1g instances to run the Pod.

