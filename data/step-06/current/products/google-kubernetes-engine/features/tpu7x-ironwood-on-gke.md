---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.668Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "TPU7x (Ironwood) on GKE"
feature_slug: "tpu7x-ironwood-on-gke"
latest_feature_date: "2025-11-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
keywords:
  - "tpu7x"
  - "ironwood"
  - "gke"
  - "available"
  - "preview"
  - "standard"
  - "autopilot"
  - "clusters"
---

# TPU7x (Ironwood) on GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

TPU7x is available in Preview for supported GKE Standard and Autopilot clusters.

## Extended Definition

TPU7x is available in Preview for supported GKE Standard and Autopilot clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard Cluster administrators and application operators can get the benefits of Google Kubernetes Engine (GKE) Autopilot, like pricing and pre-configured settings, in Standard mode clusters.
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You specify a topology as the number of TPU chips in each dimension as follows: For TPU v4, v5p, and Ironwood (TPU7x) scheduled in multi-host TPU slice node pools, you define the topology in 3-tuples ( {A}x{B}x{C} ), for example 4x4x4 .
- Autopilot Standard This document describes how Cloud TPU works with Google Kubernetes Engine (GKE), including terminology, the benefits of Tensor Processing Units (TPUs), and workload scheduling considerations.
- In Standard clusters, multiple Kubernetes Pods can be scheduled on a VM, but only one container in each Pod can access the TPU chips.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- For example: apiVersion: v1 kind: Pod metadata: name: my-gpu-pod spec: containers: - name: my-gpu-container image: nvidia/cuda:11.0.3-runtime-ubuntu20.04 command: ["/bin/bash", "-c", "--"] args: ["while true; do sleep 600; done;"] resources: limits: nvidia.com/gpu: 2 nodeSelector: cloud.google.com/gke-accelerator: nvidia-tesla-t4 Upgrade node pools using accelerators (GPUs and TPUs) GKE automatically upgrades Standard clusters, including node pools.
- Standard This page shows you how to run and optimize your compute-intensive workloads, such as artificial intelligence (AI) and graphics processing, by attaching and using NVIDIA® graphics processing unit (GPU) hardware accelerators in your Google Kubernetes Engine (GKE) Standard clusters' nodes .
- In GKE Standard mode, you can attach GPU hardware to nodes in your clusters, and then allocate GPU resources to containerized workloads running on those nodes.
- GKE Standard clusters running versions earlier than 1.34.1-gke.1279000 don't support node auto-provisioning creating node pools with RTX PRO 6000 GPUs.

