---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.358Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE logging and monitoring configuration"
feature_slug: "gke-logging-and-monitoring-configuration"
latest_feature_date: "2021-08-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster"
keywords:
  - "which"
  - "configure"
  - "configuration"
  - "monitoring"
  - "logging"
  - "lets"
---

# GKE logging and monitoring configuration

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Lets you configure which logs and metrics GKE sends to Cloud Logging and Cloud Monitoring.

## Extended Definition

Lets you configure which logs and metrics GKE sends to Cloud Logging and Cloud Monitoring.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster)

## Supporting Pages

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.
- Consider the following factors during planning: Estimated cluster size and scale Workload type Cluster layout and usage Networking layout and configuration Security configuration Cluster management and maintenance Workload deployment and management Logging and monitoring The following sections provide information and useful resources for these considerations.
- GKE Autopilot is a mode of operation in GKE in which Google manages your infrastructure configuration, including your nodes, scaling, security, and other preconfigured settings.
- Best practice : To automatically scale the number of Pods in your cluster, use a mechanism such as Kubernetes horizontal Pod autoscaling , which can scale Pods based on the built-in CPU and memory metrics, or based on custom metrics from Cloud Monitoring.

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Go to Policy details Configure log collection Recommended : to reduce operational overhead and to maintain a consolidated view of your logs, implement a consistent logging strategy across your clusters.
- Default security configurations The following sections describe options that are configured by default in new clusters to mitigate specific security concerns, like vulnerabilities or risks.
- The service account that's attached to your nodes should be used only by system workloads that perform tasks like logging and monitoring.
- GKE uses IAM service accounts that are attached to your nodes to run system tasks like logging and monitoring.

### "Quickstart: Deploy GPU-accelerated Ray for AI workloads on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/quickstarts/ray-gpu-cluster)
- Source ID: `site-docs-reference-required-4`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the terminal, run the following gcloud container clusters create command: gcloud container clusters create my-ray-enabled-cluster \ --addons = RayOperator \ --enable-ray-cluster-monitoring \ --enable-ray-cluster-logging \ --location = us-central1 \ --enable-autoprovisioning \ --max-cpu = 10 \ --max-memory = 64 This Google Cloud CLI command creates an Standard cluster named my-ray-enabled-cluster , with these settings: --addons=RayOperator : installs the Ray Operator on the cluster, which simplifies managing Ray clusters within Kubernetes. --enable-ray-cluster-monitoring : sets up integration with Cloud Monitoring for Ray cluster metrics. --enable-ray-cluster-logging : configures integration with Cloud Logging to collect logs from your Ray cluster. --location=us-central1 : specifies the geographical region where the GKE cluster will be created.
- In the terminal, run the following gcloud container clusters create-auto command: gcloud container clusters create-auto my-ray-enabled-cluster \ --enable-ray-operator \ --enable-ray-cluster-monitoring \ --enable-ray-cluster-logging \ --location = us-central1 This Google Cloud CLI command creates an Autopilot cluster named my-ray-enabled-cluster , with these settings: --enable-ray-operator : installs the Ray Operator on the cluster, which simplifies managing Ray clusters within Kubernetes. --enable-ray-cluster-monitoring : sets up integration with Cloud Monitoring for Ray cluster metrics. --enable-ray-cluster-logging : configures integration with Cloud Logging to collect logs from your Ray cluster. --location=us-central1 : specifies the geographical region where the GKE cluster will be created.
- Autopilot In Autopilot mode , Google manages your cluster configuration, including scaling, security, and other preconfigured settings.
- For more information, see GPU regions and zones . --enable-autoprovisioning : automatically creates and deletes node pools and scale nodes within those pools based on your workload's demands. --max-cpu : maximum number of cores to which the cluster can scale. --max-memory : maximum number of gigabytes of memory to which the cluster can scale.

