---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.282Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Device Memory XRT API"
feature_slug: "device-memory-xrt-api"
latest_feature_date: "2020-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/supported-tpu-versions"
  - "https://docs.cloud.google.com/tpu/docs/tutorials"
  - "https://docs.cloud.google.com/tpu/docs/intro-to-tpu"
keywords:
  - "device"
  - "memory"
  - "xrt"
  - "pytorch"
  - "xla"
  - "adds"
  - "working"
  - "tpu"
---

# Device Memory XRT API

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

PyTorch/XLA 1.6 adds a Device Memory XRT API for working with TPU device memory.

## Extended Definition

PyTorch/XLA 1.6 adds a Device Memory XRT API for working with TPU device memory.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)
- [https://docs.cloud.google.com/tpu/docs/tutorials](https://docs.cloud.google.com/tpu/docs/tutorials)
- [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)

## Supporting Pages

### TPU software versions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PJRT features automatic device memory defragmentation and simplifies the integration of hardware with frameworks.
- Accelerator Feature PJRT support Stream executor support TPU v2 - v4 Dense compute (no TPU embedding API) Yes Yes TPU v2 - v4 Dense compute API + TPU embedding API No Yes TPU v2 - v4 tf.summary/tf.print with soft device placement No Yes TPU v5e Dense compute (no TPU embedding API) Yes No TPU v5e TPU embedding API N/A No TPU v5p Dense compute (no TPU embedding API) Yes No TPU v5p TPU embedding API Yes No What's next See TPU architecture to learn more about TPU architecture.
- TPU software versions for TensorFlow follow a specific naming convention: tpu-vm-tf-x.y.z[-{pod}][-{device api}] x.y.z : Represents the major, minor, and patch versions of TensorFlow. -pod (optional): Indicates that you're using a multi-host TPU slice. -{device api} (optional): Specifies the device API, for example, -pjrt (if you're using the PJRT API ).
- TPU version TPU software version Trillium (v6e) v2-alpha-tpuv6e v5p v2-alpha-tpuv5 v5e v2-alpha-tpuv5-lite v4 and older tpu-ubuntu2204-base For more information about installation and getting started with PyTorch or JAX, see Run a calculation on a Cloud TPU VM using PyTorch and Run a calculation on a Cloud TPU VM using JAX .

### Training Resnet50 on Cloud TPU with PyTorch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/tutorials](https://docs.cloud.google.com/tpu/docs/tutorials)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect to your TPU VM using SSH: gcloud compute tpus tpu-vm ssh your-tpu-name --zone = us-central1-a Install PyTorch/XLA on your TPU VM: ( vm ) $ pip install torch torch xla [ tpu ] torchvision -f https://storage.googleapis.com/libtpu-releases/index.html -f https://storage.googleapis.com/libtpu-wheels/index.html Clone the PyTorch/XLA GitHub repo ( vm ) $ git clone --depth = 1 https://github.com/pytorch/xla.git Run the training script with fake data ( vm ) $ PJRT DEVICE = TPU python3 xla/test/test train mp imagenet.py --fake data --batch size = 256 --num epochs = 1 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- This tutorial shows you how to train the ResNet-50 model on a Cloud TPU device with PyTorch.
- Delete your TPU VM. $ gcloud compute tpus tpu-vm delete your-tpu-name \ --zone = us-central1-a What's next Training diffusion models with Pytorch Troubleshooting Pytorch on TPUs Pytorch/XLA documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Cloud TPU Guides Send feedback Training Resnet50 on Cloud TPU with PyTorch Stay organized with collections Save and categorize content based on your preferences.

### Introduction to Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CPUs Quick prototyping that requires maximum flexibility Simple models that don't take long to train Small models with small, effective batch sizes Models that contain many custom TensorFlow operations written in C++ Models that are limited by available I/O or the networking bandwidth of the host system GPUs Models with a significant number of custom PyTorch/JAX operations that must run at least partially on CPUs Models with TensorFlow ops that are not available on Cloud TPU (see the list of available TensorFlow ops ) Medium-to-large models with larger effective batch sizes TPUs Models dominated by matrix computations Models with no custom PyTorch/JAX operations inside the main training loop Models that train for weeks or months Large models with large effective batch sizes Models with ultra-large embeddings common in advanced ranking and recommendation workloads Cloud TPUs are not suited to the following workloads: Linear algebra programs that require frequent branching or contain many element-wise algebra operations Workloads that require high-precision arithmetic Neural network workloads that contain custom operations in the main training loop TPUs in Google Cloud You can use TPUs through Cloud TPU VMs, Google Kubernetes Engine, and Vertex AI.
- The structure of the MXU hardware, a 128x128 systolic array , and the design of TPUs memory subsystem, which prefers dimensions that are multiples of 8, are used by the XLA compiler for tiling efficiency.
- Ideally, batch size and feature dimensions should be multiples of 8, which enables extracting high performance from the memory subsystem.
- Padding increases the amount of on-chip memory storage required for a tensor and can lead to an out-of-memory error in the extreme case.

