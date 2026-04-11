---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.655Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Cloud TPU v3"
feature_slug: "cloud-tpu-v3"
latest_feature_date: "2019-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
  - "https://docs.cloud.google.com/tpu/docs/supported-tpu-versions"
keywords:
  - "tpu"
  - "v3"
  - "is"
  - "generation"
  - "with"
  - "double"
  - "the"
  - "memory"
---

# Cloud TPU v3

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

Cloud TPU v3 is a TPU generation with double the memory of v2 for improved model performance and capacity; Cloud TPU v3 is a TPU generation with double the memory of v2 for improved model performance and capacity.

## Extended Definition

Cloud TPU v3 is a TPU generation with double the memory of v2 for improved model performance and capacity; Cloud TPU v3 is a TPU generation with double the memory of v2 for improved model performance and capacity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)

## Supporting Pages

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud TPU Pod (beta) advantages over a single v3 Cloud TPU device: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models Cloud TPU v3 Pod (beta) advantages over Cloud TPU v2 Pod (beta) : Faster processing and larger memory: v2 Pod: 11.5 petaflops and 4 TB on-chip memory (HBM) v3 Pod: 100 petaflops and 32 TB HBM, with liquid cooling Can train even larger models Feature Cloud TPU v2 Pod is available in Beta release.
- New Implementation of xm.rendezvous with XLA collective communication which scales better ( #4181 ) New PJRT TPU backend through the C-API ( #4077 ) Use PJRT to default if no runtime is configured ( #4599 ) Experimental support for torch.distributed and DDP on TPU v2 and v3 ( #4520 ) FSDP Add auto wrap policy into XLA FSDP for automatic wrapping ( #4318 ) Stable Features Lazy Tensor Core Migration Migration is completed, checkout this dev discussion for more detail.
- TPU7x is the first release within the Ironwood family, Google Cloud's seventh generation TPU.
- TPU7x is the first release within the Ironwood family, Google Cloud's seventh generation TPU.

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- That means a CPU works with software and memory like this: Note: This animation is designed for conceptual presentation purpose only, and does not reflect the actual behavior of real processors.
- TPU topology visualizer The TPU topology visualizer is a tool that lets you visualize the physical layout of TPUs and their associated networking infrastructure within a physical data center.
- For more information about the system architecture and supported configurations, see the following pages: TPU7x (Ironwood) TPU v6e TPU v5p TPU v5e TPU v4 TPU v3 TPU v2 Note: You can run the same code on different versions of TPUs as long as the TPUs have the same number of TensorCores or chips (for example, v3-128 and v4-128 ).
- For Cloud TPU v4, v5p, and TPU7x, ICI resiliency is enabled by default for slices that are one cube or larger, for example: v5p-128 when specifying accelerator type 4x4x4 when specifying accelerator config TPU versions The exact architecture of a TPU chip depends on the TPU version that you use.

### TPU software versions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you're using TensorFlow 2.10.0 or earlier, use a v4-specific TPU software version: TensorFlow version TPU software version 2.10.0 tpu-vm-tf-2.10.0-v4 tpu-vm-tf-2.10.0-pod-v4 2.9.3 tpu-vm-tf-2.9.3-v4 tpu-vm-tf-2.9.3-pod-v4 2.9.2 tpu-vm-tf-2.9.2-v4 tpu-vm-tf-2.9.2-pod-v4 2.9.1 tpu-vm-tf-2.9.1-v4 tpu-vm-tf-2.9.1-pod-v4 TPU v2 and v3 If you are using TPU v2 or v3, use the TPU software version that matches the version of TensorFlow you are using.
- You specify the TPU software version using the form: tpu-vm-tf-x.y.z-{pod}-pjrt where x is the major TensorFlow version, y is the minor version, and z is the TensorFlow patch version.
- When you create TPU resources, you specify the software version, also called runtime version, which refers to the software environment that is pre-installed on your TPU VM.
- If you are using the stream executor API with the same version of TensorFlow, use the tpu-vm-tf-2.16.1-se TPU software version.

