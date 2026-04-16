---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.289Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Small host VM memory environment utility"
feature_slug: "small-host-vm-memory-environment-utility"
latest_feature_date: "2020-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/intro-to-tpu"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
  - "https://docs.cloud.google.com/tpu/docs/supported-tpu-versions"
keywords:
  - "small"
  - "host"
  - "vm"
  - "memory"
  - "environment"
  - "utility"
  - "pytorch"
  - "xla"
---

# Small host VM memory environment utility

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

PyTorch/XLA 1.6 adds a utility for small host VM memory environments on Kaggle and Colab.

## Extended Definition

PyTorch/XLA 1.6 adds a utility for small host VM memory environments on Kaggle and Colab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)

## Supporting Pages

### Introduction to Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CPUs Quick prototyping that requires maximum flexibility Simple models that don't take long to train Small models with small, effective batch sizes Models that contain many custom TensorFlow operations written in C++ Models that are limited by available I/O or the networking bandwidth of the host system GPUs Models with a significant number of custom PyTorch/JAX operations that must run at least partially on CPUs Models with TensorFlow ops that are not available on Cloud TPU (see the list of available TensorFlow ops ) Medium-to-large models with larger effective batch sizes TPUs Models dominated by matrix computations Models with no custom PyTorch/JAX operations inside the main training loop Models that train for weeks or months Large models with large effective batch sizes Models with ultra-large embeddings common in advanced ranking and recommendation workloads Cloud TPUs are not suited to the following workloads: Linear algebra programs that require frequent branching or contain many element-wise algebra operations Workloads that require high-precision arithmetic Neural network workloads that contain custom operations in the main training loop TPUs in Google Cloud You can use TPUs through Cloud TPU VMs, Google Kubernetes Engine, and Vertex AI.
- The structure of the MXU hardware, a 128x128 systolic array , and the design of TPUs memory subsystem, which prefers dimensions that are multiples of 8, are used by the XLA compiler for tiling efficiency.
- Layout The XLA compiler performs code transformations, including tiling a matrix multiply into smaller blocks, to efficiently execute computations on the matrix unit (MXU).
- Ideally, batch size and feature dimensions should be multiples of 8, which enables extracting high performance from the memory subsystem.

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The TPU host then reads the results from the outfeed queue and stores them in the host's memory.
- That means a CPU works with software and memory like this: Note: This animation is designed for conceptual presentation purpose only, and does not reflect the actual behavior of real processors.
- For every calculation in the thousands of ALUs, a GPU must access registers or shared memory to read operands and store the intermediate calculation results.
- However, if you change to a TPU type with a larger or smaller number of TensorCores or chips, you will need to perform significant tuning and optimization.

### TPU software versions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TPU software versions for TensorFlow follow a specific naming convention: tpu-vm-tf-x.y.z[-{pod}][-{device api}] x.y.z : Represents the major, minor, and patch versions of TensorFlow. -pod (optional): Indicates that you're using a multi-host TPU slice. -{device api} (optional): Specifies the device API, for example, -pjrt (if you're using the PJRT API ).
- TPU version TPU software version Trillium (v6e) v2-alpha-tpuv6e v5p v2-alpha-tpuv5 v5e v2-alpha-tpuv5-lite v4 and older tpu-ubuntu2204-base For more information about installation and getting started with PyTorch or JAX, see Run a calculation on a Cloud TPU VM using PyTorch and Run a calculation on a Cloud TPU VM using JAX .
- When you create TPU resources, you specify the software version, also called runtime version, which refers to the software environment that is pre-installed on your TPU VM.
- PyTorch and JAX Use the following common TPU software versions for PyTorch and JAX, then install the framework you want to use.

