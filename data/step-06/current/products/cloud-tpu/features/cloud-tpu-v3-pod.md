---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.296Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Cloud TPU v3 Pod"
feature_slug: "cloud-tpu-v3-pod"
latest_feature_date: "2019-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/tpu/docs/quota"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
keywords:
  - "tpu"
  - "v3"
  - "pod"
  - "provides"
  - "larger"
  - "faster"
  - "scalable"
  - "slices"
---

# Cloud TPU v3 Pod

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Cloud TPU v3 Pod provides larger and faster scalable TPU pod slices for large distributed TensorFlow 1.x training workloads; Cloud TPU v3 Pod provides larger and faster scalable TPU pod slices for large distributed training workloads.

## Extended Definition

Cloud TPU v3 Pod provides larger and faster scalable TPU pod slices for large distributed TensorFlow 1.x training workloads; Cloud TPU v3 Pod provides larger and faster scalable TPU pod slices for large distributed training workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/tpu/docs/quota](https://docs.cloud.google.com/tpu/docs/quota)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)

## Supporting Pages

### Cloud TPU quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/quota](https://docs.cloud.google.com/tpu/docs/quota)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.
- If you are creating TPU slices in GKE , you use Compute Engine API quota, which is a different quota.

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud TPU v4, v5p, and TPU7x, ICI resiliency is enabled by default for slices that are one cube or larger, for example: v5p-128 when specifying accelerator type 4x4x4 when specifying accelerator config TPU versions The exact architecture of a TPU chip depends on the TPU version that you use.
- Multislice versus single slice Multislice is a group of slices, extending TPU connectivity beyond the inter-chip interconnect (ICI) connections and leveraging the data-center network (DCN) for transmitting data beyond a slice.
- Using this hybrid connectivity, Multislice enables parallelism across slices and lets you use a greater number of TPU cores for a single job than what a single slice can accommodate.
- However, if you change to a TPU type with a larger or smaller number of TensorCores or chips, you will need to perform significant tuning and optimization.

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- If you use larger topologies that have more than 64 TPU chips, the values you assign to {A}, {B}, and {C} must meet the following conditions: {A}, {B}, and {C} must be multiples of four.
- The following describes how collection scheduling behavior depends on the type of TPU slice that you use: Multi-host TPU slice: GKE groups multi-host TPU slices to form a collection.
- Benefits of using TPUs in GKE GKE provides full support for TPU node and node pool lifecycle management, including creating, configuring, and deleting TPU VMs.
- Pathways simplifies large-scale machine learning computations by enabling a single JAX client to orchestrate workloads across multiple large TPU slices.

