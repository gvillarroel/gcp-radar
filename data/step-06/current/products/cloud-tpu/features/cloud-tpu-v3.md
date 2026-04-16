---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.297Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Cloud TPU v3"
feature_slug: "cloud-tpu-v3"
latest_feature_date: "2019-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
  - "https://docs.cloud.google.com/tpu/docs/intro-to-tpu"
  - "https://docs.cloud.google.com/iam/docs/authentication"
keywords:
  - "tpu"
  - "v3"
  - "generation"
  - "double"
  - "memory"
  - "v2"
  - "improved"
  - "model"
---

# Cloud TPU v3

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Cloud TPU v3 is a TPU generation with double the memory of v2 for improved model performance and capacity; Cloud TPU v3 is a TPU generation with double the memory of v2 for improved model performance and capacity.

## Extended Definition

Cloud TPU v3 is a TPU generation with double the memory of v2 for improved model performance and capacity; Cloud TPU v3 is a TPU generation with double the memory of v2 for improved model performance and capacity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)

## Supporting Pages

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- That means a CPU works with software and memory like this: Note: This animation is designed for conceptual presentation purpose only, and does not reflect the actual behavior of real processors.
- A primary use case is accelerating recommendation models, which rely heavily on embeddings. v5p and TPU7x have four SparseCores per chip, and v6e has two SparseCores per chip.
- For every calculation in the thousands of ALUs, a GPU must access registers or shared memory to read operands and store the intermediate calculation results.
- To understand how TPUs work, it helps to understand how other accelerators address the computational challenges of training ML models.

### Introduction to Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TPUs have on-chip high-bandwidth memory (HBM) letting you use larger models and batch sizes.
- CPUs Quick prototyping that requires maximum flexibility Simple models that don't take long to train Small models with small, effective batch sizes Models that contain many custom TensorFlow operations written in C++ Models that are limited by available I/O or the networking bandwidth of the host system GPUs Models with a significant number of custom PyTorch/JAX operations that must run at least partially on CPUs Models with TensorFlow ops that are not available on Cloud TPU (see the list of available TensorFlow ops ) Medium-to-large models with larger effective batch sizes TPUs Models dominated by matrix computations Models with no custom PyTorch/JAX operations inside the main training loop Models that train for weeks or months Large models with large effective batch sizes Models with ultra-large embeddings common in advanced ranking and recommendation workloads Cloud TPUs are not suited to the following workloads: Linear algebra programs that require frequent branching or contain many element-wise algebra operations Workloads that require high-precision arithmetic Neural network workloads that contain custom operations in the main training loop TPUs in Google Cloud You can use TPUs through Cloud TPU VMs, Google Kubernetes Engine, and Vertex AI.
- Google Cloud service Resources Cloud TPU Get started with Cloud TPU VMs Google Kubernetes Engine About TPUs in GKE Vertex AI Training on Vertex AI with TPUs Use TPUs for online prediction on Vertex AI Best practices for model development A program whose computation is dominated by non-matrix operations such as add, reshape, or concatenate, will likely not achieve high MXU utilization.
- Getting started with Cloud TPU Set up a Google Cloud account Activate the Cloud TPU API Grant Cloud TPU access to your Cloud Storage buckets Run a basic calculation on a TPU Train a reference model on a TPU Analyze your model Requesting help To get help, contact Cloud TPU support .

### "Authenticate to IAM \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

