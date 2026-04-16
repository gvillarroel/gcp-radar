---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.183Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Startup Latency dashboard"
feature_slug: "startup-latency-dashboard"
latest_feature_date: "2025-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql"
keywords:
  - "troubleshoot"
  - "monitor"
  - "helps"
  - "dashboard"
  - "startup"
  - "latency"
  - "workloads"
---

# Startup Latency dashboard

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Startup Latency dashboard helps monitor and troubleshoot startup latency for Kubernetes workloads and nodes in GKE.

## Extended Definition

The Startup Latency dashboard helps monitor and troubleshoot startup latency for Kubernetes workloads and nodes in GKE.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)

## Supporting Pages

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- After enabling the feature, GKE installs prebuilt dashboards for monitoring applications for supported workloads .
- The following is an example of a command to enable observability features: gcloud container clusters update $CLUSTER NAME \ --project = $PROJECT ID \ --location = $LOCATION \ --enable-managed-prometheus \ --logging = SYSTEM,WORKLOAD \ --monitoring = SYSTEM,DEPLOYMENT,HPA,POD,DCGM \ --auto-monitoring-scope = ALL For more information, see Monitor your inference workloads . (HPA only) Deploy a metrics adapter : A metrics adapter, such as the Custom Metrics Stackdriver Adapter , is necessary if HPA resources were generated in the deployment manifests.
- Important: If PodMonitoring resources have already been deployed to collect metrics from supported workloads , remove them before enabling the auto-monitoring feature to avoid double collection.
- This feature scans the cluster for workloads that run on supported model servers and deploys the PodMonitoring resources that enable these workload metrics to be visible in Cloud Monitoring.

### "Best practices for running batch workloads on GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- Source ID: `site-docs-reference-required-4`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard This page introduces the best practices for building and optimizing batch processing platforms with Google Kubernetes Engine (GKE), including best practices for: Architecture Job management Multi-tenancy Security Queueing Storage Performance Cost efficiency Monitoring GKE provides a powerful framework for orchestrating batch workloads such as data processing, training machine learning models , running scientific simulations , and other high performance computing workloads .
- Optimize your workloads networking and latency GKE supports compact placement policy for node pools which specifies that these nodes (and thus the workloads running on them) should be placed in closer physical proximity to each other within a zone.
- Use Cloud Monitoring dashboards Use the Monitoring dashboards for GKE to see a high level overview of cluster and resource utilization and drill down and filter through various metrics and dimensions.
- This is especially useful for tightly coupled and high performance workloads where low latency between different processes comprising the workload is a major concern.

### "Deploy a highly-available PostgreSQL database on GKE \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- To visualize data from your PostgreSQL application and GKE cluster, follow these steps: Create the following dashboards. cd monitoring gcloud monitoring dashboards create \ --config-from-file = dashboard/postgresql-overview.json \ --project = $PROJECT ID gcloud monitoring dashboards create \ --config-from-file dashboard/gke-postgresql.json \ --project $PROJECT ID In the Google Cloud console, navigate to the Cloud Monitoring Dashboard.
- The output is similar to the following: pgbench ( 14 .5 ) starting vacuum...end. progress: 5 .0 s, 354 .8 tps, lat 25 .222 ms stddev 15 .038 progress: 10 .0 s, 393 .8 tps, lat 25 .396 ms stddev 16 .459 progress: 15 .0 s, 412 .8 tps, lat 24 .216 ms stddev 14 .548 progress: 20 .0 s, 405 .0 tps, lat 24 .656 ms stddev 14 .066 In the Google Cloud console, navigate back to the PostgreSQL Overview dashboard in Cloud Monitoring.
- The following dashboards appear: PostgreSQL Overview : Displays metrics from the PostgreSQL application, including database uptime, database size, and transaction latency.
- Go to the Cloud Monitoring Dashboard Select Custom from the dashboard list.

