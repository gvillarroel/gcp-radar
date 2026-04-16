---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.739Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "NVIDIA GPU Operator on GKE"
feature_slug: "nvidia-gpu-operator-on-gke"
latest_feature_date: "2024-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation"
keywords:
  - "nvidia"
  - "gpu"
  - "operator"
  - "gke"
  - "feature"
  - "lets"
  - "you"
  - "manage"
---

# NVIDIA GPU Operator on GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This feature lets you manage your GKE GPU stack with the NVIDIA GPU Operator on COS and Ubuntu node images.

## Extended Definition

This feature lets you manage your GKE GPU stack with the NVIDIA GPU Operator on COS and Ubuntu node images.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)

## Supporting Pages

### "About GPUs in Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page helps you to consider choices for requesting GPUs in GKE, including the following: Choosing your GPU quota , the maximum number of GPUs that can run in your project Deciding between Autopilot and Standard modes Manage the GPU stack through GKE or NVIDIA GPU Operator on GKE Choosing features to reduce the amount of underutilized GPU resources Accessing NVIDIA CUDA-X libraries for CUDA applications Monitoring GPU node metrics Handling disruption due to node maintenance Use GKE Sandbox to secure GPU workloads Available GPU models The GPU hardware that's available for use in GKE is a subset of the GPU models available on Compute Engine .
- Get started with GKE for GPU node management by choosing one of the following: Deploy GPU workloads in Autopilot Run GPUs in Standard node pools Deploy clusters with NVIDIA B200 or NVIDIA H200 141GB GPUs The NVIDIA GPU Operator may be used as an alternative to fully managed GPU support on GKE on both Container-Optimized OS (COS) and Ubuntu node images.
- Manage the GPU stack through GKE or the NVIDIA GPU Operator on GKE By default, GKE manages the entire lifecycle of the GPU nodes, including automatic GPU driver installation, monitoring GPU workloads on GKE with NVIDIA Data Center GPU Manager (DCGM) , and GPU sharing strategies.
- Description Use GKE to manage GPU nodes Use NVIDIA GPU Operator on GKE Management of GPU node lifecycle (installation, upgrade) Fully managed by GKE.

### AI/ML orchestration on GKE documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)
- Source ID: `site-docs-reference-required-5`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Tutorial AI/ML Inference GPUs Training Training and tutorials Manage the GPU Stack with the NVIDIA GPU Operator on GKE Learn when to use the NVIDIA GPU operator and how to enable the NVIDIA GPU Operator on GKE.
- Tutorial TPUs Training Training and tutorials Monitoring GPU workloads on GKE with NVIDIA Data Center GPU Manager (DCGM) Learn how to observe GPU workloads on GKE with NVIDIA Data Center GPU Manager (DCGM).
- AI NVIDIA NIM Use case Use cases Accelerate Ray in production with new Ray Operator on GKE Learn how Ray Operator on GKE simplifies your AI/ML production deployments, boosting performance and scalability.
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. info Manage AI infrastructure and accelerators Concept About accelerator consumption options for AI/ML workloads in GKE Concept About GPUs in GKE Concept About TPUs in GKE Best practice Optimize GPU obtainability with flex-start provisioning mode Best practice Run cost-optimized Kubernetes applications on GKE Best practice Design storage for AI and ML workloads in Google Cloud Quickstart Deploy GPU-accelerated Ray for AI workloads on GKE Video Introduction to Cloud TPUs for machine learning Video Build large-scale machine learning on Cloud TPUs with GKE info Train AI models at scale Quickstart Train a model with GPUs on GKE Standard mode Tutorial Train a model with GPUs on GKE Autopilot mode Tutorial Train a model with PyTorch, Ray, and GKE on GPUs Tutorial Train an LLM using JAX, Ray Train, and TPU Trillium on GKE Quickstart Train Llama2 with Megatron-LM on A3 Mega virtual machines How-to Train large-scale machine learning models on GKE with multi-tier checkpointing Tutorial Optimize GKE resource utilization for mixed AI/ML training and inference workloads info Serve AI models for Inference Best practice Reference architecture for AI/ML inference on GKE Concept About model inference on GKE How-to Analyze model serving performance and costs with GKE Inference Quickstart Quickstart Serve open LLMs on GKE with a pre-configured architecture using Terraform Tutorial Serve LLMs like Deepseek-R1 671B or Llama 3.1 405B on GKE Tutorial Serve Gemma using GPUs on GKE with vLLM Tutorial Serve an LLM using TPU Trillium on GKE with vLLM Tutorial Discover more tutorials for model inference on GKE Related resources Training and tutorials Use cases Code samples Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.

### "About dynamic resource allocation in GKE \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Comparison of DRA and manual device allocation DRA Manual allocation Flexible device selection using CEL expressions Specific node selection using selectors and resource requests Scheduling decisions made by Kubernetes Scheduling decisions made by the operator using node selectors Device filtering is separate from workload creation Device filtering has to be done in the workload manifest Centralized device filtering and needs-based classes, managed by platform administrators Isolated device filtering by application operators App operators don't need to know node capacity, node label information, or the attached device models for each node App operators must know which nodes have specific models and quantities of certain devices attached.
- You should already be familiar with the following: GPUs in GKE Common Expression Language (CEL) Introduction to DRA DRA is a built-in Kubernetes feature that lets you flexibly request, allocate, and share hardware in your cluster among Pods and containers.
- In comparison, DRA lets you use expressions to flexibly filter for devices based on attributes, and doesn't require workload operators to know the exact configuration of nodes in the cluster.
- For nodes that use the DRA GPU drivers, you can't use the managed NVIDIA Data Center GPU Manager (DCGM) metrics package to send DCGM metrics to Cloud Monitoring.

