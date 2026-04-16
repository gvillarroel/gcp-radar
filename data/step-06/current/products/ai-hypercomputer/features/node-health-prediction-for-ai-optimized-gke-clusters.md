---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:52:40.539Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "Node health prediction for AI-optimized GKE clusters"
feature_slug: "node-health-prediction-for-ai-optimized-gke-clusters"
latest_feature_date: "2025-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster"
keywords:
  - "prediction"
  - "node"
  - "enables"
  - "health"
  - "clusters"
  - "optimized"
---

# Node health prediction for AI-optimized GKE clusters

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

Enables node health prediction in AI-optimized GKE clusters to avoid scheduling workloads on nodes likely to degrade within five hours.

## Extended Definition

Enables node health prediction in AI-optimized GKE clusters to avoid scheduling workloads on nodes likely to degrade within five hours.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities](https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster)

## Supporting Pages

### Cluster management capabilities | AI Hypercomputer | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities](https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities)
- Source ID: `feature-recovery-direct-http`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cluster management capabilities | AI Hypercomputer | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Indonesia Italiano Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in AI Hypercomputer Start free Overview Guides Resources Technology areas More Overview Guides Resources Cross-product tools More Console Discover Overview Performance-optimized infrastructure GPU machines Networking services GPU networking overview Network services for deployments Networking best practices Storage services Open software OS and Docker images Choose a consumption option Cluster management Overview Configurations Terminology Get started Cluster creation overview Recommended configurations Obtain capacity and quota Overview Reserve capacity View reserved capacity Quickstart: Create a Slurm cluster with A4 machine type Deploy infrastructure Deployment options overview Compact placement policy and workload policy overview Deploy AI-optimized VMs and clusters Create GKE clusters Create an AI-optimized GKE cluster with default configuration Create a custom AI-optimized GKE cluster which uses A4X Max Create a custom AI-optimized GKE cluster which uses A4X Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra Create Slurm clusters Create an instance Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Create instances in bulk Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Create a managed instance group (MIG) Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Run workloads Run workloads with Pathways on Cloud Introduction to Pathways on Cloud Create a GKE cluster with Pathways Run a batch workload with Pathways Run an interactive workload with Pathways Perform multihost inference using Pathways Resilient training with Pathways Port JAX workloads to Pathways Troubleshoot Pathways on Cloud Schedule GKE workloads Schedule workloads with Topology Aware Scheduling (TAS) Enable node health prediction AI workload tutorials Overview GPU Run inference with vLLM on GKE DeepSeek V3.1 DeepSeek V3.2-Speciale Gemma 3 GPT-OSS Llama 4 Qwen3 Run fine-tuning Gemma 3 on a GKE cluster Gemma 3 on a Slurm cluster Gemma 3 for vision tasks on GKE Llama 4 on a Slurm cluster Mixtral-8x7b on a Slurm cluster Run training Qwen2 on a Slurm cluster TPU Serve Qwen2-7B with vLLM on TPUs Serve Qwen2-7B-Instruct with vLLM on TPUs Serve Qwen3-8B-Base with vLLM on TPUs Serve Llama-3.1-8B with vLLM on TPUs Manage infrastructure Manage GKE clusters Manage instances and Slurm clusters View topology of an instance Manage host events Host events in instances Host events in reservations Report faulty host Test and optimize Optimize cluster networking by using NCCL/gIB Run NCCL tests Run NCCL on Compute Engine instances Run NCCL on GKE clusters that use default configuration Run NCCL on custom GKE clusters that use A4X Max Run NCCL on custom GKE clusters that use A4X Run NCCL on custom GKE clusters that use A4 or A3 Ultra Run NCCL on Slurm clusters Collect and understand NCCL logs for troubleshooting Test workloads with recipes Benchmarking recipes Goodput optimization recipes Test clusters Monitor Monitor VMs and Slurm clusters Manage how CoMMA collects NCCL telemetry Collective Communication Analyzer (CoMMA) Enable, disable, and configure CoMMA Troubleshoot Known issues Troubleshoot slow performance Troubleshoot reporting a faulty host Troubleshoot CoMMA AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Compute AI Hypercomputer Guides Send feedback Cluster management capabilities Stay organized with collections Save and categorize content based on your preferences.
- For more information, see the following: Manage host events across instances Manage host events across reservations Cluster monitoring and diagnostic tooling For monitoring and troubleshooting, A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machines include the following services: VM health degradation prediction , which helps you identify VMs that are likely to degrade within the next five hours.
- The A4X Max , A4X , A4 , A3 Ultra , A3 Mega , and A3 High (8 GPUs) machine series are designed to enable you to run large-scale artificial intelligence (AI) and machine learning (ML) clusters and provide the following cluster management capabilities: AI infrastructure resources colocation Cluster topology-aware placement Cluster operational mode Cluster maintenance scheduling and controls Cluster monitoring and diagnostic tooling Note: Cluster management capabilities aren't supported for A3 Mega or A3 High VMs that you created before October 1, 2025.
- To facilitate full control of maintenance events, you can use the following features: Maintenance scheduling type Manage host events Maintenance scheduling type When you reserve capacity to create compute instances or clusters of A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machines, you can define how Compute Engine maintains the infrastructure that your instances run on.

### Recommended configurations | AI Hypercomputer | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy)
- Source ID: `feature-recovery-direct-http`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Recommended configurations | AI Hypercomputer | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Indonesia Italiano Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in AI Hypercomputer Start free Overview Guides Resources Technology areas More Overview Guides Resources Cross-product tools More Console Discover Overview Performance-optimized infrastructure GPU machines Networking services GPU networking overview Network services for deployments Networking best practices Storage services Open software OS and Docker images Choose a consumption option Cluster management Overview Configurations Terminology Get started Cluster creation overview Recommended configurations Obtain capacity and quota Overview Reserve capacity View reserved capacity Quickstart: Create a Slurm cluster with A4 machine type Deploy infrastructure Deployment options overview Compact placement policy and workload policy overview Deploy AI-optimized VMs and clusters Create GKE clusters Create an AI-optimized GKE cluster with default configuration Create a custom AI-optimized GKE cluster which uses A4X Max Create a custom AI-optimized GKE cluster which uses A4X Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra Create Slurm clusters Create an instance Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Create instances in bulk Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Create a managed instance group (MIG) Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Run workloads Run workloads with Pathways on Cloud Introduction to Pathways on Cloud Create a GKE cluster with Pathways Run a batch workload with Pathways Run an interactive workload with Pathways Perform multihost inference using Pathways Resilient training with Pathways Port JAX workloads to Pathways Troubleshoot Pathways on Cloud Schedule GKE workloads Schedule workloads with Topology Aware Scheduling (TAS) Enable node health prediction AI workload tutorials Overview GPU Run inference with vLLM on GKE DeepSeek V3.1 DeepSeek V3.2-Speciale Gemma 3 GPT-OSS Llama 4 Qwen3 Run fine-tuning Gemma 3 on a GKE cluster Gemma 3 on a Slurm cluster Gemma 3 for vision tasks on GKE Llama 4 on a Slurm cluster Mixtral-8x7b on a Slurm cluster Run training Qwen2 on a Slurm cluster TPU Serve Qwen2-7B with vLLM on TPUs Serve Qwen2-7B-Instruct with vLLM on TPUs Serve Qwen3-8B-Base with vLLM on TPUs Serve Llama-3.1-8B with vLLM on TPUs Manage infrastructure Manage GKE clusters Manage instances and Slurm clusters View topology of an instance Manage host events Host events in instances Host events in reservations Report faulty host Test and optimize Optimize cluster networking by using NCCL/gIB Run NCCL tests Run NCCL on Compute Engine instances Run NCCL on GKE clusters that use default configuration Run NCCL on custom GKE clusters that use A4X Max Run NCCL on custom GKE clusters that use A4X Run NCCL on custom GKE clusters that use A4 or A3 Ultra Run NCCL on Slurm clusters Collect and understand NCCL logs for troubleshooting Test workloads with recipes Benchmarking recipes Goodput optimization recipes Test clusters Monitor Monitor VMs and Slurm clusters Manage how CoMMA collects NCCL telemetry Collective Communication Analyzer (CoMMA) Enable, disable, and configure CoMMA Troubleshoot Known issues Troubleshoot slow performance Troubleshoot reporting a faulty host Troubleshoot CoMMA AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Compute AI Hypercomputer Guides Send feedback Recommended configurations Stay organized with collections Save and categorize content based on your preferences.
- Workloads Recommendations Cluster deployment guide Machine type Orchestrator Frontier model training Large model training A4X Max A4X A4 A3 Ultra GKE Create an AI-optimized GKE cluster with default configuration Slurm Create an AI-optimized cluster based on a template Create an AI-optimized Slurm cluster Frontier model training Large model training A3 Mega GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Create an AI-optimized cluster based on a template Deploy an A3 Mega Slurm cluster for ML training Large model training A3 High GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Deploy an A3 High Slurm cluster Recommended consumption type For a high level of assurance in obtaining large clusters of accelerators at minimum costs, we recommend using a reservation and requesting these reservation for a long duration.
- Workloads Recommendations Cluster deployment guide Machine type Orchestrator Multi-host frontier inference A4X Max A4X A4 A3 Ultra GKE Create an AI-optimized GKE cluster with default configuration Slurm Create an AI-optimized cluster based on a template Create an AI-optimized Slurm cluster Multi-host frontier inference A3 Mega GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Create an AI-optimized cluster based on a template Deploy an A3 Mega Slurm cluster for ML training Large model inference A3 High GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Deploy an A3 High Slurm cluster Recommended accelerators (single host) The following table outlines the recommended accelerators to use when performing single-host frontier inference.
- Workloads Recommendations Cluster deployment guide Machine type Orchestrator Fine-tuning large models A4X Max A4X A4 GKE Create an AI-optimized GKE cluster with default configuration Slurm Create an AI-optimized cluster based on a template Create an AI-optimized Slurm cluster Fine-tuning large models A3 Mega GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Create an AI-optimized cluster based on a template Deploy an A3 Mega Slurm cluster for ML training Fine-tuning large models A3 High GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Deploy an A3 High Slurm cluster Recommended consumption type For fine-tuning workloads we recommend using future reservation in calendar mode to provision resources.

### "Create an AI-optimized Slurm cluster \_|\_ AI Hypercomputer \_|\_ Google\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster)
- Source ID: `site-docs-root-required-2`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- From the Connect column of the login node, click SSH . gcloud To connect to the login node, complete the following steps: Identify the login node by using the gcloud compute instances list command . gcloud compute instances list \ --zones= ZONE \ --filter="name login" --format "value(name)" If the output lists multiple Slurm clusters, you can identify your login node by the DEPLOYMENT NAME that you specified.
- To learn how to cleanly destroy infrastructure and for advanced manual deployment instructions, see the deployment folder located at the root of the Cluster Toolkit directory: DEPLOYMENT FOLDER /instructions.txt What's next Verify reservation consumption View the topology of a compute instance Learn how to manage host events: Manage host events across compute instances Manage host events across reservations Monitor Compute Engine instances and Slurm clusters Test and optimize with NCCL/gIB Report faulty host Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- A4 ./gcluster deploy -d a4high-slurm-deployment.yaml examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml --auto-approve A3 Ultra ./gcluster deploy -d a3ultra-slurm-deployment.yaml examples/machine-learning/a3-ultragpu-8g/a3ultra-slurm-blueprint.yaml --auto-approve A3 Mega ./gcluster deploy -d a3mega-slurm-deployment.yaml examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml --auto-approve A3 High ./gcluster deploy -d a3high-slurm-deployment.yaml examples/machine-learning/a3-highgpu-8g/a3high-slurm-blueprint.yaml --auto-approve Connect to the Slurm cluster To access your cluster, you must login to the Slurm login node.
- If you want to enable your cluster to autoscale instead, use examples/machine-learning/a3-ultragpu-8g/a3ultra-slurm-blueprint.yaml file and edit the values of node count static and node count dynamic max to match the following: node count static: 0 node count dynamic max: $(vars.a3u cluster size) Spot To create your deployment file, use a text editor to create a YAML file named a3ultra-slurm-deployment.yaml and add the following content.

