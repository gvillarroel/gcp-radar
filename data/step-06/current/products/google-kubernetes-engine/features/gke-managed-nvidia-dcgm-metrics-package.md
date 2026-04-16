---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.709Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Managed NVIDIA DCGM Metrics Package"
feature_slug: "gke-managed-nvidia-dcgm-metrics-package"
latest_feature_date: "2025-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
keywords:
  - "gke"
  - "managed"
  - "nvidia"
  - "dcgm"
  - "metrics"
  - "package"
  - "feature"
  - "provides"
---

# GKE Managed NVIDIA DCGM Metrics Package

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This feature provides curated NVIDIA GPU metrics for monitoring utilization, performance, and health in GKE.

## Extended Definition

This feature provides curated NVIDIA GPU metrics for monitoring utilization, performance, and health in GKE.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)

## Supporting Pages

### "About GPUs in Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For instructions on how to deploy the GKE-managed DCGM package, see Collect and view NVIDIA Data Center GPU Manager (DCGM) metrics .
- View NVIDIA Data Center GPU Manager (DCGM) metrics You can collect and visualize NVIDIA DCGM metrics by using Google Cloud Managed Service for Prometheus .
- This page helps you to consider choices for requesting GPUs in GKE, including the following: Choosing your GPU quota , the maximum number of GPUs that can run in your project Deciding between Autopilot and Standard modes Manage the GPU stack through GKE or NVIDIA GPU Operator on GKE Choosing features to reduce the amount of underutilized GPU resources Accessing NVIDIA CUDA-X libraries for CUDA applications Monitoring GPU node metrics Handling disruption due to node maintenance Use GKE Sandbox to secure GPU workloads Available GPU models The GPU hardware that's available for use in GKE is a subset of the GPU models available on Compute Engine .
- Metrics and observability GKE Managed DCGM available With system metrics enabled, the following GPU metrics are available in Cloud Monitoring: duty cycle, memory usage, and memory capacity.

### "About dynamic resource allocation in GKE \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For nodes that use the DRA GPU drivers, you can't use the managed NVIDIA Data Center GPU Manager (DCGM) metrics package to send DCGM metrics to Cloud Monitoring.
- Comparison of ResourceClaims and ResourceClaimTemplates Manually-created ResourceClaims Automatically-created ResourceClaims Managed by you Managed by Kubernetes Provides access to the same devices from multiple Pods Provides access to devices from a single Pod Exists in the cluster independently of Pods Bound to the lifecycle of the corresponding Pod Ideal for multiple workloads that need to share a specific device Ideal for multiple workloads that need independent device access Comparison of DRA with manual device allocation DRA makes allocating attached devices a similar experience to dynamically provisioning PersistentVolumes.
- Comparison of DRA and manual device allocation DRA Manual allocation Flexible device selection using CEL expressions Specific node selection using selectors and resource requests Scheduling decisions made by Kubernetes Scheduling decisions made by the operator using node selectors Device filtering is separate from workload creation Device filtering has to be done in the workload manifest Centralized device filtering and needs-based classes, managed by platform administrators Isolated device filtering by application operators App operators don't need to know node capacity, node label information, or the attached device models for each node App operators must know which nodes have specific models and quantities of certain devices attached.
- You should already be familiar with the following: GPUs in GKE Common Expression Language (CEL) Introduction to DRA DRA is a built-in Kubernetes feature that lets you flexibly request, allocate, and share hardware in your cluster among Pods and containers.

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Warning: If you are running a self-deployed kube state metrics package, you must stop collecting it before enabling managed kube state metrics, otherwise you might end up with duplicate or incorrect metrics.
- Click Save Changes . gcloud Update your cluster to collect metrics: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --enable-managed-prometheus \ --monitoring = SYSTEM,DAEMONSET,DEPLOYMENT,HPA,POD,STATEFULSET,STORAGE Replace the following: CLUSTER NAME : the name of the existing cluster.
- Starting with version 1.32.1-gke.1357001, the JobSet metrics package is enabled by default on newly created GKE Standard and Autopilot clusters. kube jobset restarts metric is available in 1.32 clusters starting from 1.32.4-gke.1767000 and in 1.33 clusters starting from 1.33.0-gke.1868000.
- Requirements To collect kube state metrics, your GKE cluster must meet the following requirements: The cluster must be running the following versions based on the metric that you want to enable: To enable JobSet metrics package, your cluster must run 1.32.1-gke.1357001 or later.

