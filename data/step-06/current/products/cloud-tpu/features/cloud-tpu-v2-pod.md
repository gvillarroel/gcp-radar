---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.654Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Cloud TPU v2 Pod"
feature_slug: "cloud-tpu-v2-pod"
latest_feature_date: "2019-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
keywords:
  - "tpu"
  - "v2"
  - "pod"
  - "provides"
  - "scalable"
  - "slices"
  - "for"
  - "large"
---

# Cloud TPU v2 Pod

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

Cloud TPU v2 Pod provides scalable TPU pod slices for large distributed TensorFlow 1.x training workloads; Cloud TPU v2 Pod provides scalable TPU pod slices for large distributed training workloads.

## Extended Definition

Cloud TPU v2 Pod provides scalable TPU pod slices for large distributed TensorFlow 1.x training workloads; Cloud TPU v2 Pod provides scalable TPU pod slices for large distributed training workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)

## Supporting Pages

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud TPU v2 and v3 Pod advantages over a single v2 or v3 Cloud TPU device: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models Cloud TPU v3 Pod advantages over Cloud TPU v2 Pod: Faster processing and larger memory: v2 Pod: 11.5 petaflops and 4 TB on-chip memory (HBM) v3 Pod: 100 petaflops and 32 TB HBM, with liquid cooling Can train even larger models October 22, 2019 Change Cloud TPU now supports TensorFlow version 1.15 ( Release Notes , API Documentation ).
- Cloud TPU Pod (beta) advantages over a single v3 Cloud TPU device: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models Cloud TPU v3 Pod (beta) advantages over Cloud TPU v2 Pod (beta) : Faster processing and larger memory: v2 Pod: 11.5 petaflops and 4 TB on-chip memory (HBM) v3 Pod: 100 petaflops and 32 TB HBM, with liquid cooling Can train even larger models Feature Cloud TPU v2 Pod is available in Beta release.
- Cloud TPU Pod (beta) advantages over a single Cloud TPU v2 device: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models March 11, 2019 Change Cloud TPU now supports TensorFlow version 1.13 .
- Cloud TPU Pod (alpha) advantages: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models than on a single ML accelerator October 10, 2018 Feature Cloud TPU v3 is available in Beta release.

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Cloud TPU v4, v5p, and TPU7x, ICI resiliency is enabled by default for slices that are one cube or larger, for example: v5p-128 when specifying accelerator type 4x4x4 when specifying accelerator config TPU versions The exact architecture of a TPU chip depends on the TPU version that you use.
- For more information about the system architecture and supported configurations, see the following pages: TPU7x (Ironwood) TPU v6e TPU v5p TPU v5e TPU v4 TPU v3 TPU v2 Note: You can run the same code on different versions of TPUs as long as the TPUs have the same number of TensorCores or chips (for example, v3-128 and v4-128 ).
- Multislice versus single slice Multislice is a group of slices, extending TPU connectivity beyond the inter-chip interconnect (ICI) connections and leveraging the data-center network (DCN) for transmitting data beyond a slice.
- Using this hybrid connectivity, Multislice enables parallelism across slices and lets you use a greater number of TPU cores for a single job than what a single slice can accommodate.

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following describes how collection scheduling behavior depends on the type of TPU slice that you use: Multi-host TPU slice: GKE groups multi-host TPU slices to form a collection.
- If a node within a multi-host TPU slice requires repairing, GKE shuts down all VMs in the TPU slice, forcing eviction of all the Kubernetes Pods in the workload.
- Benefits of using TPUs in GKE GKE provides full support for TPU node and node pool lifecycle management, including creating, configuring, and deleting TPU VMs.

