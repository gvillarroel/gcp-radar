---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.655Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Cloud TPU in Google Kubernetes Engine"
feature_slug: "cloud-tpu-in-google-kubernetes-engine"
latest_feature_date: "2018-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/tpu/docs/intro-to-tpu"
keywords:
  - "tpu"
  - "in"
  - "kubernetes"
  - "engine"
  - "integration"
  - "with"
  - "lets"
  - "you"
---

# Cloud TPU in Google Kubernetes Engine

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

Cloud TPU integration with Google Kubernetes Engine lets you run machine learning workloads in GKE while Google manages TPU resources.

## Extended Definition

Cloud TPU integration with Google Kubernetes Engine lets you run machine learning workloads in GKE while Google manages TPU resources.

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
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE AI/ML Guides Send feedback About TPUs in GKE Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard This document describes how Cloud TPU works with Google Kubernetes Engine (GKE), including terminology, the benefits of Tensor Processing Units (TPUs), and workload scheduling considerations.
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Machine type naming Machine type naming for TPUs in GKE varies depending on the cluster mode and TPU version: GKE Standard: you select a specific Compute Engine machine type, for example, ct6e-standard-1t for TPU Trillium (v6e).

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- August 29, 2023 Announcement You can now create Cloud Tensor Processing Unit (TPU) nodes in Google Kubernetes Engine (GKE) to run AI workloads, from training to inference models.
- Google supports Cloud TPU integrations with TensorFlow, PyTorch, and JAX, and you can even write your own integrations via a new libtpu shared library on the VM.
- This mode, powered by the Dynamic Workload Scheduler , lets you check TPU availability up to 120 days in advance and request capacity based on your schedule.
- You have root access to every TPU VM you create, so you can install and run any code you wish in a tight loop with your TPU accelerators.

### Introduction to Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CPUs Quick prototyping that requires maximum flexibility Simple models that don't take long to train Small models with small, effective batch sizes Models that contain many custom TensorFlow operations written in C++ Models that are limited by available I/O or the networking bandwidth of the host system GPUs Models with a significant number of custom PyTorch/JAX operations that must run at least partially on CPUs Models with TensorFlow ops that are not available on Cloud TPU (see the list of available TensorFlow ops ) Medium-to-large models with larger effective batch sizes TPUs Models dominated by matrix computations Models with no custom PyTorch/JAX operations inside the main training loop Models that train for weeks or months Large models with large effective batch sizes Models with ultra-large embeddings common in advanced ranking and recommendation workloads Cloud TPUs are not suited to the following workloads: Linear algebra programs that require frequent branching or contain many element-wise algebra operations Workloads that require high-precision arithmetic Neural network workloads that contain custom operations in the main training loop TPUs in Google Cloud You can use TPUs through Cloud TPU VMs, Google Kubernetes Engine, and Vertex AI.
- Google Cloud service Resources Cloud TPU Get started with Cloud TPU VMs Google Kubernetes Engine About TPUs in GKE Vertex AI Training on Vertex AI with TPUs Use TPUs for online prediction on Vertex AI Best practices for model development A program whose computation is dominated by non-matrix operations such as add, reshape, or concatenate, will likely not achieve high MXU utilization.
- Getting started with Cloud TPU Set up a Google Cloud account Activate the Cloud TPU API Grant Cloud TPU access to your Cloud Storage buckets Run a basic calculation on a TPU Train a reference model on a TPU Analyze your model Requesting help To get help, contact Cloud TPU support .
- TPUs can be connected in groups called slices that scale up your workloads with little to no code changes.

