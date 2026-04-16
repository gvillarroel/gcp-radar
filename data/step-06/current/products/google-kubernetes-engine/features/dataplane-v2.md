---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.935Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Dataplane V2"
feature_slug: "dataplane-v2"
latest_feature_date: "2021-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "dataplane"
  - "v2"
  - "generally"
  - "available"
  - "newly"
  - "created"
  - "gke"
  - "clusters"
---

# Dataplane V2

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Dataplane V2 is generally available in newly created GKE clusters running version 1.20.6-gke.700 and later; Dataplane V2 is available in beta for newly created clusters on supported GKE versions.

## Extended Definition

Dataplane V2 is generally available in newly created GKE clusters running version 1.20.6-gke.700 and later; Dataplane V2 is available in beta for newly created clusters on supported GKE versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### GKE Dataplane V2 \_|\_ GKE networking \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GKE Dataplane V2 technical specifications GKE Dataplane V2 supports clusters with the following specifications: Specification GKE Google Distributed Cloud Edge Google Distributed Cloud Hosted Number of nodes per cluster 7,500 500 500 Number of Pods per cluster 200,000 15,000 27,500 Number of Pods behind one Service 10,000 1,000 1,000 Number of Cluster IP Services 10,000 1,000 1,000 Number of LoadBalancer Services per cluster 750 500 1,000 GKE Dataplane V2 maintains a Service map to keep track of which Services refer to which Pods as their backends.
- Node limits The maximum number of nodes per cluster depends on your GKE Dataplane V2 cluster's Kubernetes version and location: Regional clusters : Kubernetes version 1.31 or later: Up to 7,500 nodes.
- Network policy enforcement without GKE Dataplane V2 See Using network policy enforcement for instructions to enable network policy enforcement in clusters that don't use GKE Dataplane V2.
- Deploy workloads with SCTP You can deploy workloads that use the Stream Control Transmission Protocol (SCTP) on clusters that are enabled with GKE Dataplane V2.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- In most newly created Autopilot clusters, you might notice that the first workloads that you deploy take more time to schedule.
- Network policy enforcement is available with GKE Dataplane V2, which is enabled by default in Autopilot clusters.
- Run highly-available connected services in multiple clusters Use multi-cluster Services (MCS) .
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- By default, all new clusters use GKE Dataplane V2.
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities : defines an array of three different N4 machine family configurations. activeMigration : lets GKE migrate Pods to configurations that are higher in the list of priorities when resources become available.
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.

