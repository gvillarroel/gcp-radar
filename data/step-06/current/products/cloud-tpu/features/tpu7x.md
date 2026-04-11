---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.604Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "TPU7x"
feature_slug: "tpu7x"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/tpu/docs/intro-to-tpu"
keywords:
  - "tpu7x"
  - "is"
  - "seventh"
  - "generation"
  - "tpu"
  - "in"
  - "the"
  - "ironwood"
---

# TPU7x

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

TPU7x is a seventh-generation Cloud TPU in the Ironwood family for large-scale AI training and inference workloads; TPU7x is a seventh-generation Cloud TPU in the Ironwood family for large-scale AI training and inference workloads.

## Extended Definition

TPU7x is a seventh-generation Cloud TPU in the Ironwood family for large-scale AI training and inference workloads; TPU7x is a seventh-generation Cloud TPU in the Ironwood family for large-scale AI training and inference workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)

## Supporting Pages

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Get started with Ironwood (TPU7x) Ironwood (TPU7x) is Google's seventh-generation TPU, designed for large-scale AI workloads.
- You specify a topology as the number of TPU chips in each dimension as follows: For TPU v4, v5p, and Ironwood (TPU7x) scheduled in multi-host TPU slice node pools, you define the topology in 3-tuples ( {A}x{B}x{C} ), for example 4x4x4 .
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Each VM in the TPU slice has four TPU v5e chips connected with high-speed interconnects (ICI), and each TPU v5e chip has one TensorCore: The following diagram shows a GKE cluster that contains one TPU v5litepod-16 (v5e) TPU slice (topology: 4x4 ) and one TPU v5litepod-8 (v5e) slice (topology: 2x4 ): Single-host TPU slice node pools A single-host slice node pool is a node pool that contains one or more independent TPU VMs.

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- TPU7x is the first release within the Ironwood family, Google Cloud's seventh generation TPU.
- TPU7x is the first release within the Ironwood family, Google Cloud's seventh generation TPU.
- For more information, see the TPU7x (Ironwood) documentation .
- For more information, see the TPU7x (Ironwood) documentation .

### Introduction to Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CPUs Quick prototyping that requires maximum flexibility Simple models that don't take long to train Small models with small, effective batch sizes Models that contain many custom TensorFlow operations written in C++ Models that are limited by available I/O or the networking bandwidth of the host system GPUs Models with a significant number of custom PyTorch/JAX operations that must run at least partially on CPUs Models with TensorFlow ops that are not available on Cloud TPU (see the list of available TensorFlow ops ) Medium-to-large models with larger effective batch sizes TPUs Models dominated by matrix computations Models with no custom PyTorch/JAX operations inside the main training loop Models that train for weeks or months Large models with large effective batch sizes Models with ultra-large embeddings common in advanced ranking and recommendation workloads Cloud TPUs are not suited to the following workloads: Linear algebra programs that require frequent branching or contain many element-wise algebra operations Workloads that require high-precision arithmetic Neural network workloads that contain custom operations in the main training loop TPUs in Google Cloud You can use TPUs through Cloud TPU VMs, Google Kubernetes Engine, and Vertex AI.
- The following resources may help: Cloud TPU architecture Cloud TPU pricing Contact sales Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If any subsequent batches have different shapes, the model doesn't work. (Re-compiling the graph every time the shape changes is too slow.) Therefore, any model that has tensors with dynamic shapes isn't well suited to TPUs.
- If you have an active Google Cloud project, be prepared to provide the following information: Your Google Cloud project ID Your TPU name, if one exists Other information you want to provide What's next?

