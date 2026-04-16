---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.295Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "PyTorch 1.5 support via PyTorch/XLA"
feature_slug: "pytorch-1-5-support-via-pytorch-xla"
latest_feature_date: "2020-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/tutorials"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
  - "https://docs.cloud.google.com/tpu/docs/supported-tpu-versions"
keywords:
  - "pytorch"
  - "via"
  - "xla"
  - "tpu"
  - "pods"
  - "through"
  - "integration"
---

# PyTorch 1.5 support via PyTorch/XLA

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Cloud TPU and Cloud TPU Pods support PyTorch 1.5 through PyTorch/XLA integration.

## Extended Definition

Cloud TPU and Cloud TPU Pods support PyTorch 1.5 through PyTorch/XLA integration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/tutorials](https://docs.cloud.google.com/tpu/docs/tutorials)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)

## Supporting Pages

### Training Resnet50 on Cloud TPU with PyTorch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/tutorials](https://docs.cloud.google.com/tpu/docs/tutorials)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect to your TPU VM using SSH: gcloud compute tpus tpu-vm ssh your-tpu-name --zone = us-central1-a Install PyTorch/XLA on your TPU VM: ( vm ) $ pip install torch torch xla [ tpu ] torchvision -f https://storage.googleapis.com/libtpu-releases/index.html -f https://storage.googleapis.com/libtpu-wheels/index.html Clone the PyTorch/XLA GitHub repo ( vm ) $ git clone --depth = 1 https://github.com/pytorch/xla.git Run the training script with fake data ( vm ) $ PJRT DEVICE = TPU python3 xla/test/test train mp imagenet.py --fake data --batch size = 256 --num epochs = 1 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Delete your TPU VM. $ gcloud compute tpus tpu-vm delete your-tpu-name \ --zone = us-central1-a What's next Training diffusion models with Pytorch Troubleshooting Pytorch on TPUs Pytorch/XLA documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Cloud TPU Guides Send feedback Training Resnet50 on Cloud TPU with PyTorch Stay organized with collections Save and categorize content based on your preferences.
- You can apply the same pattern to other TPU-optimised image classification models that use PyTorch and the ImageNet dataset.

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- In fact, on a typical training workload for deep learning, a GPU can provide an order of magnitude higher throughput than a CPU.
- How a GPU works To gain higher throughput, GPUs contain thousands of Arithmetic Logic Units (ALUs) in a single processor.
- You can directly use TPU VMs for your workloads or use them through Google Kubernetes Engine or Vertex AI.
- Memory access is slow when compared to the calculation speed and can limit the total throughput of CPUs.

### TPU software versions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TPU version TPU software version Trillium (v6e) v2-alpha-tpuv6e v5p v2-alpha-tpuv5 v5e v2-alpha-tpuv5-lite v4 and older tpu-ubuntu2204-base For more information about installation and getting started with PyTorch or JAX, see Run a calculation on a Cloud TPU VM using PyTorch and Run a calculation on a Cloud TPU VM using JAX .
- PyTorch and JAX Use the following common TPU software versions for PyTorch and JAX, then install the framework you want to use.
- PJRT features automatic device memory defragmentation and simplifies the integration of hardware with frameworks.
- For more information about PJRT, see PJRT: Simplifying ML Hardware and Framework Integration .

