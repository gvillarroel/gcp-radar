---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.297Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Cloud TPU"
feature_slug: "cloud-tpu"
latest_feature_date: "2018-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/tpu/docs/intro-to-tpu"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
keywords:
  - "tpu"
  - "managed"
  - "accelerating"
  - "tensorflow"
  - "machine"
  - "learning"
  - "workloads"
---

# Cloud TPU

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Cloud TPU is a managed TPU service for accelerating TensorFlow machine learning workloads on Google Cloud; Cloud TPU is a managed TPU service for accelerating TensorFlow machine learning workloads on Google Cloud.

## Extended Definition

Cloud TPU is a managed TPU service for accelerating TensorFlow machine learning workloads on Google Cloud; Cloud TPU is a managed TPU service for accelerating TensorFlow machine learning workloads on Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)

## Supporting Pages

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- TPUs are Google's custom-developed, application-specific integrated circuits (ASICs) for accelerating ML workloads that use frameworks such as TensorFlow , PyTorch , and JAX .
- Pathways simplifies large-scale machine learning computations by enabling a single JAX client to orchestrate workloads across multiple large TPU slices.
- Benefits of using TPUs in GKE include: Consistent operational environment: You can use a single platform for all machine learning and other workloads.

### Introduction to Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Introduction to Cloud TPU Tensor Processing Units (TPUs) are Google's custom-developed, application-specific integrated circuits (ASICs) used to accelerate machine learning workloads.
- In some situations, you might want to use GPUs or CPUs on Compute Engine instances to run your machine learning workloads.
- CPUs Quick prototyping that requires maximum flexibility Simple models that don't take long to train Small models with small, effective batch sizes Models that contain many custom TensorFlow operations written in C++ Models that are limited by available I/O or the networking bandwidth of the host system GPUs Models with a significant number of custom PyTorch/JAX operations that must run at least partially on CPUs Models with TensorFlow ops that are not available on Cloud TPU (see the list of available TensorFlow ops ) Medium-to-large models with larger effective batch sizes TPUs Models dominated by matrix computations Models with no custom PyTorch/JAX operations inside the main training loop Models that train for weeks or months Large models with large effective batch sizes Models with ultra-large embeddings common in advanced ranking and recommendation workloads Cloud TPUs are not suited to the following workloads: Linear algebra programs that require frequent branching or contain many element-wise algebra operations Workloads that require high-precision arithmetic Neural network workloads that contain custom operations in the main training loop TPUs in Google Cloud You can use TPUs through Cloud TPU VMs, Google Kubernetes Engine, and Vertex AI.
- TPUs efficiently train your models by using hardware designed for performing large matrix operations often found in machine learning algorithms.

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TPU architecture Tensor Processing Units (TPUs) are application specific integrated circuits (ASICs) designed by Google to accelerate machine learning workloads.
- TPUs are designed to perform matrix operations quickly making them ideal for machine learning workloads.
- You can run machine learning workloads on TPUs using frameworks such as PyTorch and JAX .
- For more information about common machine learning terms, see Machine Learning Glossary .

