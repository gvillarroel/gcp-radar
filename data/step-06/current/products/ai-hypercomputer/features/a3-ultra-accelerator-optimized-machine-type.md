---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:52:40.547Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "A3 Ultra accelerator-optimized machine type"
feature_slug: "a3-ultra-accelerator-optimized-machine-type"
latest_feature_date: "2024-12-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm"
keywords:
  - "generally"
  - "ultra"
  - "accelerator"
  - "machine"
  - "optimized"
  - "type"
---

# A3 Ultra accelerator-optimized machine type

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

The A3 Ultra machine type is now generally available with NVIDIA H200 GPUs and Titanium ML networking for model training and serving, and is available in europe-west1-b.

## Extended Definition

The A3 Ultra machine type is now generally available with NVIDIA H200 GPUs and Titanium ML networking for model training and serving, and is available in europe-west1-b.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm)

## Supporting Pages

### "Create an AI-optimized MIG with A4 or A3 Ultra machine type \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra)
- Source ID: `site-docs-root-required-2`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To learn more about these accelerator-optimized machine types, see A4 or A3 Ultra .
- Home Documentation Compute AI Hypercomputer Guides Send feedback Create an AI-optimized MIG with A4 or A3 Ultra machine type Stay organized with collections Save and categorize content based on your preferences.
- Overview Creating a MIG with the A4 or A3 Ultra machine type includes the following steps: Create VPC networks Optional: Create a workload policy Create an instance template Create a MIG Create VPC networks Tip: If you are setting up a quick test, you can skip this step and specify a single NIC --network-interface=nic-type=GVNIC instead.
- Limitations for the MIG When you use A4 or A3 Ultra machine types to create a MIG, the following limitations apply: If the instance template to use for the MIG specifies the flex-start provisioning model , then the following limitations apply: You can only add A4 or A3 Ultra instances to the MIG using resize requests .

### "Create an AI-optimized MIG with A3 High or A3 Mega machine type \_|\_ AI\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega)
- Source ID: `site-docs-root-required-2`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document describes how to create a managed instance group (MIG) that uses an A3 High or A3 Mega accelerator-optimized machine type.
- Home Documentation Compute AI Hypercomputer Guides Send feedback Create an AI-optimized MIG with A3 High or A3 Mega machine type Stay organized with collections Save and categorize content based on your preferences.
- Specify either an A4 or A3 Ultra machine type.
- Specify either an A4 or A3 Ultra machine type.

### Create an AI-optimized instance with A4 or A3 Ultra | AI Hypercomputer | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm)
- Source ID: `feature-recovery-direct-http`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To learn more about these accelerator-optimized machine types, see A4 or A3 Ultra .
- Create an AI-optimized instance with A4 or A3 Ultra | AI Hypercomputer | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Indonesia Italiano Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in AI Hypercomputer Start free Overview Guides Resources Technology areas More Overview Guides Resources Cross-product tools More Console Discover Overview Performance-optimized infrastructure GPU machines Networking services GPU networking overview Network services for deployments Networking best practices Storage services Open software OS and Docker images Choose a consumption option Cluster management Overview Configurations Terminology Get started Cluster creation overview Recommended configurations Obtain capacity and quota Overview Reserve capacity View reserved capacity Quickstart: Create a Slurm cluster with A4 machine type Deploy infrastructure Deployment options overview Compact placement policy and workload policy overview Deploy AI-optimized VMs and clusters Create GKE clusters Create an AI-optimized GKE cluster with default configuration Create a custom AI-optimized GKE cluster which uses A4X Max Create a custom AI-optimized GKE cluster which uses A4X Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra Create Slurm clusters Create an instance Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Create instances in bulk Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Create a managed instance group (MIG) Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Run workloads Run workloads with Pathways on Cloud Introduction to Pathways on Cloud Create a GKE cluster with Pathways Run a batch workload with Pathways Run an interactive workload with Pathways Perform multihost inference using Pathways Resilient training with Pathways Port JAX workloads to Pathways Troubleshoot Pathways on Cloud Schedule GKE workloads Schedule workloads with Topology Aware Scheduling (TAS) Enable node health prediction AI workload tutorials Overview GPU Run inference with vLLM on GKE DeepSeek V3.1 DeepSeek V3.2-Speciale Gemma 3 GPT-OSS Llama 4 Qwen3 Run fine-tuning Gemma 3 on a GKE cluster Gemma 3 on a Slurm cluster Gemma 3 for vision tasks on GKE Llama 4 on a Slurm cluster Mixtral-8x7b on a Slurm cluster Run training Qwen2 on a Slurm cluster TPU Serve Qwen2-7B with vLLM on TPUs Serve Qwen2-7B-Instruct with vLLM on TPUs Serve Qwen3-8B-Base with vLLM on TPUs Serve Llama-3.1-8B with vLLM on TPUs Manage infrastructure Manage GKE clusters Manage instances and Slurm clusters View topology of an instance Manage host events Host events in instances Host events in reservations Report faulty host Test and optimize Optimize cluster networking by using NCCL/gIB Run NCCL tests Run NCCL on Compute Engine instances Run NCCL on GKE clusters that use default configuration Run NCCL on custom GKE clusters that use A4X Max Run NCCL on custom GKE clusters that use A4X Run NCCL on custom GKE clusters that use A4 or A3 Ultra Run NCCL on Slurm clusters Collect and understand NCCL logs for troubleshooting Test workloads with recipes Benchmarking recipes Goodput optimization recipes Test clusters Monitor Monitor VMs and Slurm clusters Manage how CoMMA collects NCCL telemetry Collective Communication Analyzer (CoMMA) Enable, disable, and configure CoMMA Troubleshoot Known issues Troubleshoot slow performance Troubleshoot reporting a faulty host Troubleshoot CoMMA AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Compute AI Hypercomputer Guides Send feedback Create an AI-optimized instance with A4 or A3 Ultra Stay organized with collections Save and categorize content based on your preferences.
- Overview Creating an instance with the A4 or A3 Ultra machine type includes the following steps: Create VPC networks Optional: Create a compact placement policy Create an instance Create VPC networks Tip: If you are setting up a quick test, you can skip this step and specify a single NIC --network-interface=nic-type=GVNIC instead.
- Limitations When you create a standalone A4 or A3 Ultra VM, the following limitations apply: A4 You don't receive sustained use discounts and flexible committed use discounts for instances that use an A4 machine type.

