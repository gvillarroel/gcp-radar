---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.608Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Reservation sharing"
feature_slug: "reservation-sharing"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
keywords:
  - "reservation"
  - "sharing"
  - "lets"
  - "you"
  - "share"
  - "tpu"
  - "across"
  - "multiple"
---

# Reservation sharing

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

Reservation sharing lets you share a Cloud TPU reservation across multiple projects and with Vertex AI workloads.

## Extended Definition

Reservation sharing lets you share a Cloud TPU reservation across multiple projects and with Vertex AI workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)

## Supporting Pages

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- This feature lets you share a reservation across multiple projects.
- Feature Public preview : You can enable reservation sharing for Cloud TPU.
- These enhancements enable Trillium to excel across a wide range of AI workloads, including: Scaling AI training workloads like LLMs including dense and Mixture of Experts (MoE) models Inference performance and collection scheduling Embedding-intensive models acceleration Delivering training and inference price-performance November 01, 2024 Feature You can now request Cloud TPUs as queued resources in the Google Cloud Console.
- December 14, 2020 Feature Cloud TPU now supports Shared VPC Shared VPC allows an organization to connect resources from multiple projects to a common VPC network to communicate with each other securely and efficiently using internal IPs from that network.

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource management: With Kueue , a Kubernetes-native job queuing system, you can manage resources across multiple tenants within your organization using queuing, preemption, prioritization, and fair sharing.
- If you use larger topologies that have more than 64 TPU chips, the values you assign to {A}, {B}, and {C} must meet the following conditions: {A}, {B}, and {C} must be multiples of four.
- Pathways simplifies large-scale machine learning computations by enabling a single JAX client to orchestrate workloads across multiple large TPU slices.
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Using this hybrid connectivity, Multislice enables parallelism across slices and lets you use a greater number of TPU cores for a single job than what a single slice can accommodate.
- TPU topology visualizer The TPU topology visualizer is a tool that lets you visualize the physical layout of TPUs and their associated networking infrastructure within a physical data center.
- TPU VM architecture The TPU VM architecture lets you directly connect to the VM physically connected to the TPU device using SSH.
- A multi-host workload distributes training across multiple TPU VMs.

