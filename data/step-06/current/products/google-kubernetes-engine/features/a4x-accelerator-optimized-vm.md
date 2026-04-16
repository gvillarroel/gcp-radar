---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.680Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "A4X accelerator-optimized VM"
feature_slug: "a4x-accelerator-optimized-vm"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
keywords:
  - "a4x"
  - "accelerator"
  - "optimized"
  - "vm"
  - "now"
  - "generally"
  - "available"
  - "gke"
---

# A4X accelerator-optimized VM

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The A4X accelerator-optimized VM is now generally available on GKE for AI, machine learning, and high-performance computing workloads.

## Extended Definition

The A4X accelerator-optimized VM is now generally available on GKE for AI, machine learning, and high-performance computing workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)

## Supporting Pages

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- To install the DaemonSet on COS , add the following block in your Terraform configuration: data "http" "nvidia driver installer manifest" { url = "https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/cos/daemonset-preloaded.yaml" } resource "kubectl manifest" "nvidia driver installer" { yaml body = data.http.nvidia driver installer manifest.body } To install DaemonSet on Ubuntu , add the following block in your Terraform configuration: data "http" "nvidia driver installer manifest" { url = "https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/ubuntu/daemonset-preloaded.yaml" } resource "kubectl manifest" "nvidia driver installer" { yaml body = data.http.nvidia driver installer manifest.body } Map the GKE version and Container-Optimized OS node image version to the GPU driver version To find the GPU driver versions that are mapped with GKE versions and Container-Optimized OS node image versions, do the following steps: Map Container-Optimized OS node image versions to GKE patch versions for the specific GKE version where you want to find the GPU driver version.
- Use the following table which lists the available GPU driver versions in each GKE version: GKE NVIDIA driver versions 1.33 R535 (default), R570, R575, or R580 1.32 R535 (default), R570, R575, or R580 1.31 R535 (default), R570, R575, or R580 1.30 R535 (default) or R550 1.29 R535 (default) or R550 1.28 R535 (default) or R550 1.27 R470 (default), R525, R535, or R550 1.26 R470 (default), R525, R535, or R550 Ubuntu The installation DaemonSet that you deploy depends on the GPU type and on the GKE node version as follows: For all GPUs except NVIDIA H200 GPUs, run the following command: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/ubuntu/daemonset-preloaded.yaml For NVIDIA H200 GPUs, install the R550 driver: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/nvidia-driver-installer/ubuntu/daemonset-preloaded-R550.yaml The installation takes several seconds to complete.
- For example, you might want to update the GPU driver to switch to the latest available driver: gcloud container node-pools update p100 \ --accelerator type = nvidia-tesla-p100,count = 2 , gpu-driver-version = latest \ --cluster p100-cluster \ --location us-central1 Console To create a node pool with GPUs: Go to the Google Kubernetes Engine page in the Google Cloud console.
- Monitor your GPU node workload performance If your GKE cluster has system metrics enabled, then the following metrics are available in Cloud Monitoring to monitor your GPU workload performance: Duty Cycle ( container/accelerator/duty cycle ): Percentage of time over the past sample period (10 seconds) during which the accelerator was actively processing.

### "About GPUs in Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Monitor your GPU node workload performance If your GKE cluster has system metrics enabled, then the following metrics are available in Cloud Monitoring to monitor your GPU workload performance: Duty Cycle ( container/accelerator/duty cycle ): Percentage of time over the past sample period (10 seconds) during which the accelerator was actively processing.
- This page is intended for Platform admins and operators and Machine learning (ML) engineers who want to ensure that accelerator infrastructure is optimized for your workloads.
- This page helps you to consider choices for requesting GPUs in GKE, including the following: Choosing your GPU quota , the maximum number of GPUs that can run in your project Deciding between Autopilot and Standard modes Manage the GPU stack through GKE or NVIDIA GPU Operator on GKE Choosing features to reduce the amount of underutilized GPU resources Accessing NVIDIA CUDA-X libraries for CUDA applications Monitoring GPU node metrics Handling disruption due to node maintenance Use GKE Sandbox to secure GPU workloads Available GPU models The GPU hardware that's available for use in GKE is a subset of the GPU models available on Compute Engine .
- Get started with GKE for GPU node management by choosing one of the following: Deploy GPU workloads in Autopilot Run GPUs in Standard node pools Deploy clusters with NVIDIA B200 or NVIDIA H200 141GB GPUs The NVIDIA GPU Operator may be used as an alternative to fully managed GPU support on GKE on both Container-Optimized OS (COS) and Ubuntu node images.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- If the prioritized instance types aren't available, GKE then falls back to any matching reservations in the specification: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : specific : - name : a3-shared-reservation project : reservation-project affinity : Specific - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : affinity : AnyBestEffort whenUnsatisfiable : DoNotScaleUp If you deploy a Pod that uses the accelerator-reservations ComputeClass, GKE first attempts to use the a3-shared-reservation reservation when creating new a3-highgpu-1g instances to run the Pod.
- For example, the following manifest requests the cost-optimized ComputeClass: apiVersion : apps/v1 kind : Deployment metadata : name : custom-workload spec : replicas : 2 selector : matchLabels : app : custom-workload template : metadata : labels : app : custom-workload spec : nodeSelector : cloud.google.com/compute-class : cost-optimized containers : - name : test image : registry.k8s.io/pause resources : requests : cpu : 1.5 memory : "4Gi" Node selectors for system node labels GKE adds system labels to nodes to identify nodes by criteria like the machine type, attached hardware accelerators, or the boot disk type.
- This fallback model helps ensure that even when compute resources are unavailable, your workloads still run on optimized hardware with minimal scheduling delays.
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .

