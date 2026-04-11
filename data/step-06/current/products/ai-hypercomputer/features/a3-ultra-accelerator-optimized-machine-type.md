---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.595Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "A3 Ultra accelerator-optimized machine type"
feature_slug: "a3-ultra-accelerator-optimized-machine-type"
latest_feature_date: "2024-12-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-overview"
keywords:
  - "europe-west1-b availability"
  - "A3 Ultra accelerator-optimized machine type"
  - "model training and serving"
  - "A3 Ultra H200"
  - "Titanium ML networking"
  - "NVIDIA H200 GPU"
  - "A3 Ultra machine"
  - "A3 Ultra"
---

# A3 Ultra accelerator-optimized machine type

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

The A3 Ultra machine type is now generally available with NVIDIA H200 GPUs and Titanium ML networking for model training and serving, and is available in europe-west1-b.

## Extended Definition

A3 Ultra is an accelerator-optimized machine type in Google Cloud AI Hypercomputer that can be provisioned as an AI-optimized Compute Engine instance. AI Hypercomputer deployment and guidance materials list A3 Ultra among supported machine families for AI/ML workloads (including model pre-training/fine-tuning and frontier inference scenarios), and describe paths for creating standalone instances or deploying through cluster flows. The creation guidance also states that A3 Ultra instances do not receive sustained-use or flexible committed-use discounts.

## Evidence Summary

These official AI Hypercomputer pages confirm A3 Ultra’s role as an accelerator-optimized machine type, the supported deployment methods, and workload recommendations that reference it for training and inference use cases.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-overview](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-overview)

## Supporting Pages

### "Create an AI-optimized instance with A4 or A3 Ultra \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm)
- Source ID: `site-iam-reference`
- Final score: 82
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about creating standalone VMs with A3 Ultra and explicitly lists key behaviors and limits for that machine type, making it directly relevant to defining the feature.

Evidence snippets:
- Overview Creating an instance with the A4 or A3 Ultra machine type includes the following steps: Create VPC networks Optional: Create a compact placement policy Create an instance Create VPC networks Tip: If you are setting up a quick test, you can skip this step and specify a single NIC --network-interface=nic-type=GVNIC instead.
- To set up the network for A4 or A3 Ultra machine types, create three VPC networks for the following network interfaces: 2 regular VPC networks for the gVNIC network interfaces (NICs).
- A3 Ultra You don't receive sustained use discounts and flexible committed use discounts for instances that use an A3 Ultra machine type.
- This document describes the steps to create standalone virtual machine (VM) instances that use A4 or A3 Ultra machine types.

### Recommended configurations \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is a workload-based configuration guide that recommends accelerator choices, which can support selecting A3 Ultra for certain AI/ML workloads but does not provide the specific GA status, GPU model, or region details.

Evidence snippets:
- Resource Recommendation Model pre-training Machine family Use one of the following accelerator-optimized machine types: A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High Consumption type Use reservations Storage Use a Google Cloud managed service such as Google Cloud Managed Lustre or Cloud Storage FUSE Model fine-tuning Machine family Use A4X Max, A4X, A4, or A3 accelerator-optimized machine types Consumption type Use reservations Storage Use a Google Cloud managed service such as Google Cloud Managed Lustre or Cloud Storage FUSE Inference Machine family Use one of the following accelerator-optimized machine types: A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High Consumption type Use reservations Storage Use a Google Cloud managed service such as Google Cloud Managed Lustre or Cloud Storage FUSE HPC See the summary section of the best practices for running HPC workloads Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Workloads Recommendations Cluster deployment guide Machine type Orchestrator Frontier model training Large model training A4X Max A4X A4 A3 Ultra GKE Create an AI-optimized GKE cluster with default configuration Slurm Create an AI-optimized cluster based on a template Create an AI-optimized Slurm cluster Frontier model training Large model training A3 Mega GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Create an AI-optimized cluster based on a template Deploy an A3 Mega Slurm cluster for ML training Large model training A3 High GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Deploy an A3 High Slurm cluster Recommended consumption type For a high level of assurance in obtaining large clusters of accelerators at minimum costs, we recommend using a reservation and requesting these reservation for a long duration.
- Workloads Recommendations Cluster deployment guide Machine type Orchestrator Multi-host frontier inference A4X Max A4X A4 A3 Ultra GKE Create an AI-optimized GKE cluster with default configuration Slurm Create an AI-optimized cluster based on a template Create an AI-optimized Slurm cluster Multi-host frontier inference A3 Mega GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Create an AI-optimized cluster based on a template Deploy an A3 Mega Slurm cluster for ML training Large model inference A3 High GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Deploy an A3 High Slurm cluster Recommended accelerators (single host) The following table outlines the recommended accelerators to use when performing single-host frontier inference.
- Workloads Recommendations VM deployment guide Machine type Orchestrator Single-host frontier inference A4 A3 Ultra N/A Create an AI-optimized instance Single-host frontier inference A3 High N/A Create an A3 VM with GPUDirect-TCPX enabled Recommended consumption type For inferencing we recommend using either a long running reservation or future reservation in calendar mode.

### Deployment options overview \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-overview](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-overview)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, see the following: Create an AI-optimized instance Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 Mega or A3 High Create AI-optimized instances in bulk Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 Mega or A3 High Create an AI-optimized MIG Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 Mega or A3 High Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To run artificial intelligence (AI), machine learning (ML), or high performance computing (HPC) workloads, you can deploy AI-optimized Compute Engine instances and clusters that use A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machines.
- You can create A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) instances directly from Compute Engine, or through other services that run on Compute Engine instances like Cluster Toolkit or Google Kubernetes Engine.
- Note: This guide only applies to the A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machine types.

