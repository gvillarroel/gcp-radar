---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.296Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Cloud TPU v2 Pod"
feature_slug: "cloud-tpu-v2-pod"
latest_feature_date: "2019-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
  - "https://docs.cloud.google.com/tpu/docs/intro-to-tpu"
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
keywords:
  - "tpu"
  - "v2"
  - "pod"
  - "provides"
  - "scalable"
  - "slices"
  - "large"
  - "distributed"
---

# Cloud TPU v2 Pod

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Cloud TPU v2 Pod provides scalable TPU pod slices for large distributed TensorFlow 1.x training workloads; Cloud TPU v2 Pod provides scalable TPU pod slices for large distributed training workloads.

## Extended Definition

Cloud TPU v2 Pod provides scalable TPU pod slices for large distributed TensorFlow 1.x training workloads; Cloud TPU v2 Pod provides scalable TPU pod slices for large distributed training workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)

## Supporting Pages

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Cloud TPU v4, v5p, and TPU7x, ICI resiliency is enabled by default for slices that are one cube or larger, for example: v5p-128 when specifying accelerator type 4x4x4 when specifying accelerator config TPU versions The exact architecture of a TPU chip depends on the TPU version that you use.
- Multislice versus single slice Multislice is a group of slices, extending TPU connectivity beyond the inter-chip interconnect (ICI) connections and leveraging the data-center network (DCN) for transmitting data beyond a slice.
- Using this hybrid connectivity, Multislice enables parallelism across slices and lets you use a greater number of TPU cores for a single job than what a single slice can accommodate.
- However, if you change to a TPU type with a larger or smaller number of TensorCores or chips, you will need to perform significant tuning and optimization.

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Pathways simplifies large-scale machine learning computations by enabling a single JAX client to orchestrate workloads across multiple large TPU slices.
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This document is for Platform admins and operators and Data and AI specialists who run machine learning (ML) models that have characteristics such as being large-scale, long-running, or dominated by matrix computations.
- If you use larger topologies that have more than 64 TPU chips, the values you assign to {A}, {B}, and {C} must meet the following conditions: {A}, {B}, and {C} must be multiples of four.

### Introduction to Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CPUs Quick prototyping that requires maximum flexibility Simple models that don't take long to train Small models with small, effective batch sizes Models that contain many custom TensorFlow operations written in C++ Models that are limited by available I/O or the networking bandwidth of the host system GPUs Models with a significant number of custom PyTorch/JAX operations that must run at least partially on CPUs Models with TensorFlow ops that are not available on Cloud TPU (see the list of available TensorFlow ops ) Medium-to-large models with larger effective batch sizes TPUs Models dominated by matrix computations Models with no custom PyTorch/JAX operations inside the main training loop Models that train for weeks or months Large models with large effective batch sizes Models with ultra-large embeddings common in advanced ranking and recommendation workloads Cloud TPUs are not suited to the following workloads: Linear algebra programs that require frequent branching or contain many element-wise algebra operations Workloads that require high-precision arithmetic Neural network workloads that contain custom operations in the main training loop TPUs in Google Cloud You can use TPUs through Cloud TPU VMs, Google Kubernetes Engine, and Vertex AI.
- TPUs efficiently train your models by using hardware designed for performing large matrix operations often found in machine learning algorithms.
- TPUs can be connected in groups called slices that scale up your workloads with little to no code changes.
- Cloud TPU is a web service that makes TPUs available as scalable computing resources on Google Cloud.

