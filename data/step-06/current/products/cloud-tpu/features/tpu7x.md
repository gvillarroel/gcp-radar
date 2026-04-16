---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.272Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "TPU7x"
feature_slug: "tpu7x"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
  - "https://docs.cloud.google.com/tpu/docs/supported-tpu-versions"
keywords:
  - "tpu7x"
  - "seventh"
  - "generation"
  - "tpu"
  - "ironwood"
  - "family"
  - "large"
  - "scale"
---

# TPU7x

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

TPU7x is a seventh-generation Cloud TPU in the Ironwood family for large-scale AI training and inference workloads; TPU7x is a seventh-generation Cloud TPU in the Ironwood family for large-scale AI training and inference workloads.

## Extended Definition

TPU7x is a seventh-generation Cloud TPU in the Ironwood family for large-scale AI training and inference workloads; TPU7x is a seventh-generation Cloud TPU in the Ironwood family for large-scale AI training and inference workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)

## Supporting Pages

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get started with Ironwood (TPU7x) Ironwood (TPU7x) is Google's seventh-generation TPU, designed for large-scale AI workloads.
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You specify a topology as the number of TPU chips in each dimension as follows: For TPU v4, v5p, and Ironwood (TPU7x) scheduled in multi-host TPU slice node pools, you define the topology in 3-tuples ( {A}x{B}x{C} ), for example 4x4x4 .
- This document is for Platform admins and operators and Data and AI specialists who run machine learning (ML) models that have characteristics such as being large-scale, long-running, or dominated by matrix computations.

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the system architecture and supported configurations, see the following pages: TPU7x (Ironwood) TPU v6e TPU v5p TPU v5e TPU v4 TPU v3 TPU v2 Note: You can run the same code on different versions of TPUs as long as the TPUs have the same number of TensorCores or chips (for example, v3-128 and v4-128 ).
- For Cloud TPU v4, v5p, and TPU7x, ICI resiliency is enabled by default for slices that are one cube or larger, for example: v5p-128 when specifying accelerator type 4x4x4 when specifying accelerator config TPU versions The exact architecture of a TPU chip depends on the TPU version that you use.
- A primary use case is accelerating recommendation models, which rely heavily on embeddings. v5p and TPU7x have four SparseCores per chip, and v6e has two SparseCores per chip.
- However, if you change to a TPU type with a larger or smaller number of TensorCores or chips, you will need to perform significant tuning and optimization.

### TPU software versions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Ironwood (TPU7x), you must use Google Kubernetes Engine (GKE).
- TensorFlow Note: TensorFlow is not supported on Ironwood (TPU7x).
- Important: TPU v5e and future TPU generations only support PJRT.

