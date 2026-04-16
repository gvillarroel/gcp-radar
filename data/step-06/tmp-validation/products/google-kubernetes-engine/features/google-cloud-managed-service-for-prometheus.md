---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.313Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Google Cloud Managed Service for Prometheus"
feature_slug: "google-cloud-managed-service-for-prometheus"
latest_feature_date: "2021-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
keywords:
  - "stores"
  - "collects"
  - "prometheus"
  - "managed"
  - "metrics"
---

# Google Cloud Managed Service for Prometheus

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

A managed service collects and stores Prometheus metrics in Google Cloud.

## Extended Definition

A managed service collects and stores Prometheus metrics in Google Cloud.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)

## Supporting Pages

### "Collect and view logs and metrics for Ray clusters on Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- Source ID: `site-docs-reference-required-4`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View Ray metrics Google Cloud Managed Service for Prometheus provides a pre-configured Ray on GKE Overview dashboard that offers a centralized view of key Ray metrics.
- For Standard GKE clusters, you must enable Google Cloud Managed Service for Prometheus to enable metrics collection for Ray clusters.
- GKE collects all system metrics exported by Ray in Prometheus format.
- For Standard clusters, you must also enable Google Cloud Managed Service for Prometheus. gcloud Create a cluster using the --addons=RayOperator option and the --enable-ray-cluster-monitoring option: gcloud container clusters create CLUSTER NAME \ --location = LOCATION \ --addons = RayOperator \ --enable-ray-cluster-monitoring Replace the following: CLUSTER NAME : the name of the new cluster.

### "Collect and view cAdvisor/Kubelet metrics \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Save Changes . gcloud Update your cluster to collect metrics: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --enable-managed-prometheus \ --monitoring = SYSTEM,CADVISOR,KUBELET Replace the following: CLUSTER NAME : the name of the existing cluster.
- Warning: If you are already ingesting cAdvisor/Kubelet metrics into Google Cloud Managed Service for Prometheus, then you must stop ingesting those metrics before enabling managed cAdvisor/Kubelet metrics, otherwise you might end up with duplicate or incorrect metrics.
- Autopilot Standard This page describes how to configure a Google Kubernetes Engine (GKE) cluster to send a curated set of cAdvisor/Kubelet metrics to Cloud Monitoring using Google Cloud Managed Service for Prometheus.
- Because all cAdvisor/Kubelet metrics are ingested by using Google Cloud Managed Service for Prometheus , cAdvisor/Kubelet metrics can be queried by using Prometheus Query Language (PromQL) .

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Save Changes . gcloud Update your cluster to collect metrics: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --enable-managed-prometheus \ --monitoring = SYSTEM,DAEMONSET,DEPLOYMENT,HPA,POD,STATEFULSET,STORAGE Replace the following: CLUSTER NAME : the name of the existing cluster.
- Autopilot Standard This page describes how to configure a Google Kubernetes Engine (GKE) cluster to send a curated set of kube state, including metrics for Pods and Deployments, Cloud Monitoring using Google Cloud Managed Service for Prometheus.
- Because all kube state metrics are ingested by using Google Cloud Managed Service for Prometheus , kube state metrics can be queried by using Prometheus Query Language (PromQL) .
- Pricing Kube state metrics use Google Cloud Managed Service for Prometheus to load metrics into Cloud Monitoring.

