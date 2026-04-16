---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.703Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Automatic application monitoring"
feature_slug: "automatic-application-monitoring"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics"
keywords:
  - "automatic"
  - "application"
  - "monitoring"
  - "automatically"
  - "collects"
  - "metrics"
  - "provides"
  - "out"
---

# Automatic application monitoring

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Automatic application monitoring automatically collects metrics and provides out-of-the-box dashboards for supported workloads on GKE.

## Extended Definition

Automatic application monitoring automatically collects metrics and provides out-of-the-box dashboards for supported workloads on GKE.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)

## Supporting Pages

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you deploy from the GKE AI/ML page in the Google Cloud console, PodMonitoring and HPA resources are automatically created for you by using the targetNtpot configuration.
- For more information about enabling and configuring auto-monitoring, see Configure automatic application monitoring for workloads .
- The following is an example of a command to enable observability features: gcloud container clusters update $CLUSTER NAME \ --project = $PROJECT ID \ --location = $LOCATION \ --enable-managed-prometheus \ --logging = SYSTEM,WORKLOAD \ --monitoring = SYSTEM,DEPLOYMENT,HPA,POD,DCGM \ --auto-monitoring-scope = ALL For more information, see Monitor your inference workloads . (HPA only) Deploy a metrics adapter : A metrics adapter, such as the Custom Metrics Stackdriver Adapter , is necessary if HPA resources were generated in the deployment manifests.
- These optimizations can improve LLM Pod startup time by more than 7x. (Optional) Autoscaling-optimized configuration : generates a manifest with a Horizontal Pod Autoscaler (HPA) to automatically adjust the number of model server replicas based on traffic.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.
- Best practice : To automatically scale the number of Pods in your cluster, use a mechanism such as Kubernetes horizontal Pod autoscaling , which can scale Pods based on the built-in CPU and memory metrics, or based on custom metrics from Cloud Monitoring.
- Scaling : when your workloads experience high load and you add more Pods to accommodate the traffic, such as with Kubernetes Horizontal Pod Autoscaling, GKE automatically provisions new nodes for those Pods, and automatically expands the resources in your existing nodes based on need.
- The following table shows you how to interact with the collected telemetry based on your requirements: Use case Resources Understand and access your GKE logs To learn about the types of logs that we automatically collect, see What logs are collected .

### "Collect and view logs and metrics for Ray clusters on Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- Source ID: `site-docs-reference-required-4`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This behavior is expected because GKE, by default, automatically collects all workload logs written to standard output or standard error.
- Go to Ray on GKE Overview dashboard The dashboard is automatically populated when you enable metrics collection for your Ray cluster.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE AI/ML Guides Send feedback Collect and view logs and metrics for Ray clusters on Google Kubernetes Engine (GKE) Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard This page shows how to configure Google Kubernetes Engine (GKE) to collect logs and metrics for Ray clusters running on Google Kubernetes Engine (GKE), plus how to view Ray logs and metrics in Cloud Logging and Cloud Monitoring.

