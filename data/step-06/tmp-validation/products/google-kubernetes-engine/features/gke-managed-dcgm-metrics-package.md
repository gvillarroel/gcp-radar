---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.218Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Managed DCGM Metrics Package"
feature_slug: "gke-managed-dcgm-metrics-package"
latest_feature_date: "2024-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
keywords:
  - "curated"
  - "dcgm"
  - "package"
  - "exports"
  - "managed"
  - "metrics"
---

# GKE Managed DCGM Metrics Package

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This package exports curated DCGM GPU metrics from GKE-managed NVIDIA drivers to Cloud Monitoring and Managed Service for Prometheus.

## Extended Definition

This package exports curated DCGM GPU metrics from GKE-managed NVIDIA drivers to Cloud Monitoring and Managed Service for Prometheus.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)

## Supporting Pages

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard This page describes how to configure a Google Kubernetes Engine (GKE) cluster to send a curated set of kube state, including metrics for Pods and Deployments, Cloud Monitoring using Google Cloud Managed Service for Prometheus.
- Warning: If you are running a self-deployed kube state metrics package, you must stop collecting it before enabling managed kube state metrics, otherwise you might end up with duplicate or incorrect metrics.
- Click Save Changes . gcloud Update your cluster to collect metrics: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --enable-managed-prometheus \ --monitoring = SYSTEM,DAEMONSET,DEPLOYMENT,HPA,POD,STATEFULSET,STORAGE Replace the following: CLUSTER NAME : the name of the existing cluster.
- Starting with version 1.32.1-gke.1357001, the JobSet metrics package is enabled by default on newly created GKE Standard and Autopilot clusters. kube jobset restarts metric is available in 1.32 clusters starting from 1.32.4-gke.1767000 and in 1.33 clusters starting from 1.33.0-gke.1868000.

### "Collect and view cAdvisor/Kubelet metrics \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot Standard This page describes how to configure a Google Kubernetes Engine (GKE) cluster to send a curated set of cAdvisor/Kubelet metrics to Cloud Monitoring using Google Cloud Managed Service for Prometheus.
- Requirements To collect cAdvisor/Kubelet metrics, your GKE cluster must meet the following requirements: The cluster must be running GKE version 1.29.3-gke.1093000 or later. cAdvisor/Kubelet packages are enabled by default when you create a cluster running version 1.29.3-gke.1093000 or later.
- Click Save Changes . gcloud Update your cluster to collect metrics: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --enable-managed-prometheus \ --monitoring = SYSTEM,CADVISOR,KUBELET Replace the following: CLUSTER NAME : the name of the existing cluster.
- Warning: If you are already ingesting cAdvisor/Kubelet metrics into Google Cloud Managed Service for Prometheus, then you must stop ingesting those metrics before enabling managed cAdvisor/Kubelet metrics, otherwise you might end up with duplicate or incorrect metrics.

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard This page describes how to configure a Google Kubernetes Engine (GKE) cluster to send metrics emitted by the Kubernetes API server, Scheduler, and Controller Manager to Cloud Monitoring using Google Cloud Managed Service for Prometheus.
- Because all Kubernetes control plane metrics are ingested by using Google Cloud Managed Service for Prometheus , Kubernetes control plane metrics can be queried by using Prometheus Query Language (PromQL) .
- When you use the Observability tab, you can preview the available charts and metrics before you enable the metric package.
- Pricing GKE control plane metrics use Google Cloud Managed Service for Prometheus to load metrics into Cloud Monitoring.

