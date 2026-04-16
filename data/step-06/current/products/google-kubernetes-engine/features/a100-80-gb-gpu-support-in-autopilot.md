---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.786Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "A100 80 GB GPU support in Autopilot"
feature_slug: "a100-80-gb-gpu-support-in-autopilot"
latest_feature_date: "2023-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads"
keywords:
  - "a100"
  - "80"
  - "gb"
  - "gpu"
  - "autopilot"
  - "allows"
  - "workloads"
  - "run"
---

# A100 80 GB GPU support in Autopilot

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Allows workloads to run on A100 80 GB GPUs in GKE Autopilot clusters.

## Extended Definition

Allows workloads to run on A100 80 GB GPUs in GKE Autopilot clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)

## Supporting Pages

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE AI/ML Guides Send feedback Deploy GPU workloads in Autopilot Stay organized with collections Save and categorize content based on your preferences.
- This page also describes how Autopilot runs GPUs, how your pricing model changes depending on your GKE version, how to set Pod resource requests and limits, and how to monitor GPU workloads.
- Autopilot places exactly one GPU Pod on each GPU node, as well as any GKE-managed workloads that run on all nodes, and any DaemonSets that you configure to tolerate all node taints.

### "About privileged workload admission in Autopilot mode \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- At a high level, running privileged workloads in Autopilot nodes involves these steps: The organization administrator verifies that the container.managed.autopilotPrivilegedAdmission managed Organization Policy constraint allows the installation of allowlists from a specific source.
- For more information about the allowlist paths for these workloads, see the following pages: Autopilot partner workloads Privileged open source workloads with Autopilot support SELECTOR : the name of a specific file or the character, which selects every file in that directory.
- Sources of privileged Autopilot workloads The following table describes the types of privileged workloads that you can run in Autopilot: Privileged workload types Autopilot partner workloads A subset of Google Cloud partners provide privileged workloads for Autopilot mode.
- This document describes the default constraints that Autopilot enforces on workloads, the types of privileged workloads that you can run in Autopilot mode, and the methods of controlling privileged workload admission.

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Industry surveys show that 76% of containers run as root, so Autopilot allows running as root to enable most workloads Built-in security configurations In addition to the Pod Security Standards, Google applies many security settings in Autopilot based on industry best practices and our expertise.
- Run as non-root Industry surveys show that 76% of containers run as root, so Autopilot allows running as root to enable most workloads.
- Industry surveys show that 76% of containers run as root, so Autopilot allows running as root to enable most workloads.
- Autopilot also allows some verified partner workloads to set dropped capabilities.

