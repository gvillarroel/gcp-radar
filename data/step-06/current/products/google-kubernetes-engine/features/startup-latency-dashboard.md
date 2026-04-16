---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.707Z"
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
  - "startup"
  - "latency"
  - "dashboard"
  - "helps"
  - "monitor"
  - "troubleshoot"
  - "kubernetes"
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
- Generate manifests : you have these options for generating manifests: Base configuration : generates the standard Kubernetes Deployment, Service, and PodMonitoring manifests for deploying a single-replica inference server. (Optional) Storage-optimized configuration : generates a manifest optimized for Cloud Storage loading.
- You can specify your workload's latency and throughput requirements by using the Google Cloud console UI or a command-line interface, and get detailed tailored best practices as Kubernetes deployment manifests.

### "Best practices for running batch workloads on GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- Source ID: `site-docs-reference-required-4`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard This page introduces the best practices for building and optimizing batch processing platforms with Google Kubernetes Engine (GKE), including best practices for: Architecture Job management Multi-tenancy Security Queueing Storage Performance Cost efficiency Monitoring GKE provides a powerful framework for orchestrating batch workloads such as data processing, training machine learning models , running scientific simulations , and other high performance computing workloads .
- The following table lists the key recommendations when managing queueing and fair sharing among batch workloads: Recommendation Resources Use Kueue Kueue is a kubernetes-native Job queueing system for batch, high performance computing, machine learning, and similar applications in a Kubernetes cluster.
- Optimize your workloads networking and latency GKE supports compact placement policy for node pools which specifies that these nodes (and thus the workloads running on them) should be placed in closer physical proximity to each other within a zone.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Send feedback Best practices for running batch workloads on GKE Stay organized with collections Save and categorize content based on your preferences.

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

