---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.715Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "A3 Ultra VM support in GKE"
feature_slug: "a3-ultra-vm-support-in-gke"
latest_feature_date: "2025-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-standard"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/tutorials/train-model-ray-pytorch"
keywords:
  - "a3"
  - "ultra"
  - "vm"
  - "gke"
  - "feature"
  - "lets"
  - "run"
  - "vms"
---

# A3 Ultra VM support in GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This feature lets GKE run A3 Ultra VMs with NVIDIA H200 Tensor Core GPUs, including GPUDirect RDMA support on Standard clusters.

## Extended Definition

This feature lets GKE run A3 Ultra VMs with NVIDIA H200 Tensor Core GPUs, including GPUDirect RDMA support on Standard clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-standard](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-standard)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/tutorials/train-model-ray-pytorch](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/tutorials/train-model-ray-pytorch)

## Supporting Pages

### "Quickstart: Train a model with GPUs on GKE Standard mode \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-standard](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/train-model-gpus-standard)
- Source ID: `site-docs-reference-required-4`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- This feature is available for the A3 Ultra and A4 machine types.
- To consume a specific reservation block, configure your ComputeClass resource as shown in this example: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : specific-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineFamily : a3 gpu : type : nvidia-h200-141gb count : 8 reservations : specific : - name : a3ultra-specific-reservation reservationBlock : name : RESERVATION BLOCK NAME affinity : Specific Replace RESERVATION BLOCK NAME with the target reservation block name.
- For more information, see the following: Plan TPUs in GKE Multi-host TPU slice node pools Schedule TPU collections for inference workloads Node pool configuration The nodePoolConfig field in your ComputeClass specification lets you apply configuration that is reflected in all nodes within the node pools created using that class.
- Target specific node pools in a ComputeClass definition The priorities.nodepools field lets you specify a list of manually created node pools on which GKE attempts to schedule Pods in no specific order in GKE Standard clusters that use cluster autoscaling.

### "Train a model with PyTorch, Ray, and Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/tutorials/train-model-ray-pytorch](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/tutorials/train-model-ray-pytorch)
- Source ID: `site-docs-reference-required-4`
- Final score: 68
- Re-rank relevance: N/A

