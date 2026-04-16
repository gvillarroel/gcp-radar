---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.297Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Cloud TPU in Google Kubernetes Engine"
feature_slug: "cloud-tpu-in-google-kubernetes-engine"
latest_feature_date: "2018-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/tpu"
keywords:
  - "tpu"
  - "kubernetes"
  - "engine"
  - "integration"
  - "lets"
  - "you"
  - "run"
  - "machine"
---

# Cloud TPU in Google Kubernetes Engine

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Cloud TPU integration with Google Kubernetes Engine lets you run machine learning workloads in GKE while Google manages TPU resources.

## Extended Definition

Cloud TPU integration with Google Kubernetes Engine lets you run machine learning workloads in GKE while Google manages TPU resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu)

## Supporting Pages

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Machine type naming Machine type naming for TPUs in GKE varies depending on the cluster mode and TPU version: GKE Standard: you select a specific Compute Engine machine type, for example, ct6e-standard-1t for TPU Trillium (v6e).
- Autopilot Standard This document describes how Cloud TPU works with Google Kubernetes Engine (GKE), including terminology, the benefits of Tensor Processing Units (TPUs), and workload scheduling considerations.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE AI/ML Guides Send feedback About TPUs in GKE Stay organized with collections Save and categorize content based on your preferences.
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Cloud TPU roles and permissions \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu)
- Source ID: `site-iam-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) tpu.runtimeversions.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) TPU Admin ( roles/ tpu.admin ) TPU Viewer ( roles/ tpu.viewer ) Support User ( roles/ iam.supportUser ) tpu.runtimeversions.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) TPU Admin ( roles/ tpu.admin ) TPU Viewer ( roles/ tpu.viewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) tpu.tensorflowversions.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) TPU Admin ( roles/ tpu.admin ) TPU Viewer ( roles/ tpu.viewer ) Support User ( roles/ iam.supportUser ) tpu.tensorflowversions.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) TPU Admin ( roles/ tpu.admin ) TPU Viewer ( roles/ tpu.viewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) tpu.nodes.performMaintenance Owner ( roles/ owner ) Editor ( roles/ editor ) TPU Admin ( roles/ tpu.admin ) tpu.nodes.reimage Owner ( roles/ owner ) Editor ( roles/ editor ) TPU Admin ( roles/ tpu.admin ) tpu.nodes.reset Owner ( roles/ owner ) Editor ( roles/ editor ) TPU Admin ( roles/ tpu.admin ) tpu. nodes. simulateMaintenanceEvent Owner ( roles/ owner ) Editor ( roles/ editor ) TPU Admin ( roles/ tpu.admin ) tpu.nodes.start Owner ( roles/ owner ) Editor ( roles/ editor ) TPU Admin ( roles/ tpu.admin ) tpu.nodes.stop Owner ( roles/ owner ) Editor ( roles/ editor ) TPU Admin ( roles/ tpu.admin ) tpu.nodes.update Owner ( roles/ owner ) Editor ( roles/ editor ) TPU Admin ( roles/ tpu.admin ) tpu.operations.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) TPU Admin ( roles/ tpu.admin ) TPU Viewer ( roles/ tpu.viewer ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) tpu.operations.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) TPU Admin ( roles/ tpu.admin ) TPU Viewer ( roles/ tpu.viewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) tpu.locations.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) TPU Admin ( roles/ tpu.admin ) TPU Viewer ( roles/ tpu.viewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can directly use TPU VMs for your workloads or use them through Google Kubernetes Engine or Vertex AI.
- TPU topology visualizer The TPU topology visualizer is a tool that lets you visualize the physical layout of TPUs and their associated networking infrastructure within a physical data center.
- Using this hybrid connectivity, Multislice enables parallelism across slices and lets you use a greater number of TPU cores for a single job than what a single slice can accommodate.
- TPUs can't run word processors, control rocket engines, or execute bank transactions, but they can handle massive matrix operations used in neural networks at fast speeds.

