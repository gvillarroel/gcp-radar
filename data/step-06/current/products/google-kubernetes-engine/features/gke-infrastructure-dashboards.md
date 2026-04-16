---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.784Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE infrastructure dashboards"
feature_slug: "gke-infrastructure-dashboards"
latest_feature_date: "2023-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners"
keywords:
  - "gke"
  - "infrastructure"
  - "dashboards"
  - "adds"
  - "observability"
  - "tab"
  - "visualizing"
  - "metrics"
---

# GKE infrastructure dashboards

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Adds Observability tab dashboards for visualizing GKE infrastructure metrics for workload state and persistent storage.

## Extended Definition

Adds Observability tab dashboards for visualizing GKE infrastructure metrics for workload state and persistent storage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg)
- [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)

## Supporting Pages

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- To enable kube state metrics from the Observability tab for a cluster, do the following: In the Google Cloud console, go to the Kubernetes clusters page: Go to Kubernetes clusters If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .
- To enable kube state metrics from the Observability tab for a Deployment, do the following: In the Google Cloud console, go to the Workloads page: Go to Workloads If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .
- Configure the collection of kube state metrics You can enable kube state metrics using the Google Cloud console, the gcloud CLI, or Terraform: Console You can enable kube state metrics from the Observability tab for either a cluster or a Deployment within a cluster.
- On the Observability tab for a cluster, you can filter the set of charts for kube state metrics by the following two items: Workloads State : includes the metrics for Pods, Deployments, StatefulSets, DaemonSets, and HorizontalPodAutoscaler resources.

### "Deploy PostgreSQL to GKE using CloudNativePG \_|\_ Kubernetes Engine \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- It brings the following features to PostgreSQL deployment: A declarative and Kubernetes-native way to manage and configure and PostgreSQL clusters Backup management using volume snapshots or Cloud Storage In-transit encrypted TLS connection, the ability to use your own certificate authority and integration with Certificate Manager for automated TLS certificate issuance and rotation Rolling updates for minor PostgreSQL releases Use of Kubernetes API server to maintain a PostgreSQL cluster status and failovers for high availability with no additional tools required A built-in Prometheus exporter configuration through user-defined metrics written in SQL Objectives Plan and deploy GKE infrastructure for Postgres Deploy and configure the CloudNativePG Postgres operator with Helm Deploy a PostgreSQL cluster Configure PostgreSQL authentication and observability Deployment architecture PostgreSQL has various deployment options from a standalone database server to a replicated highly-available cluster.
- This Service permits querying data but restricts any write operations: psql postgresql:// $CLIENTUSERNAME : $CLIENTPASSWORD @gke-pg-cluster-ro.pg-ns/app Attempt to insert new data: INSERT INTO travel agency clients ( client, address, phone ) VALUES ( 'John' , 'Paris' , '+55555' ) RETURNING ; The output is similar to the following: ERROR: cannot execute INSERT in a read-only transaction Attempt to read data: SELECT FROM travel agency clients ; The output is similar to the following: client address phone --------+---------+--------- Tom Warsaw +55555 (1 row) Logout of the current database session: exit Exit the Pod shell: exit Understand how Prometheus collects metrics for your Postgres cluster The following diagram shows how Prometheus metrics collecting works: In the diagram, a GKE private cluster contains: A Postgres Pod that gathers metrics on path / and port 9187 Prometheus-based collectors that process the metrics from the Postgres Pod A PodMonitoring resource that sends metrics to Cloud Monitoring To enable metrics to be collected from your Pods, perform the following steps: Create the PodMonitoring resource: kubectl apply -f manifests/03-observability/pod-monitoring.yaml -n pg-ns In the Google Cloud console, go to the Metrics explorer page: Go to Metrics explorer The dashboard shows a non-zero metrics ingestion rate.
- To review how dashboards monitor functions you can reuse actions from the Database authentication section, and apply read and write requests on the database, then review gathered metrics visualization in a dashboard.
- Deploy a dashboard: gcloud --project " ${ PROJECT ID } " monitoring dashboards create --config-from-file manifests/03-observability/gcp-pg.json In the Google Cloud console, go to the Dashboards page.

### "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- New Relic The New Relic Kubernetes integration gives you observability into the health and performance of your environment by using the New Relic infrastructure agent, which collects telemetry data from your cluster using several New Relic integrations such as the Kubernetes events integration, the Prometheus Agent, and the New Relic Logs Kubernetes plugin.
- Dash0 Dash0 is an agentic observability platform built on OpenTelemetry that helps you monitor GKE Autopilot workloads with correlated logs, metrics, and traces.
- CrowdStrike Falcon CrowdStrike Falcon helps secure cloud infrastructure and prevent breaches by leveraging machine learning and human-driven threat intelligence to reduce the attack surface and provide visibility of events in the environment.
- Datadog Datadog provides visibility into containerized apps running on GKE Autopilot by collecting metrics, logs, and traces, which helps to identify performance issues and provide context for troubleshooting.

