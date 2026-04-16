---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.790Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Dataplane V2 observability"
feature_slug: "gke-dataplane-v2-observability"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview"
keywords:
  - "gke"
  - "dataplane"
  - "v2"
  - "observability"
  - "adds"
  - "metrics"
  - "tools"
  - "clusters"
---

# GKE Dataplane V2 observability

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Adds Dataplane V2 metrics and observability tools for GKE clusters.

## Extended Definition

Adds Dataplane V2 metrics and observability tools for GKE clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)

## Supporting Pages

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- To access visualizations, Network Policy verdicts, and flow dumps, configure additional troubleshooting tools using GKE Dataplane V2 observability .
- Observe your Kubernetes network traffic By default, Autopilot use GKE Dataplane V2 for metrics and observability .
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.
- Network policy enforcement is available with GKE Dataplane V2, which is enabled by default in Autopilot clusters.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Challenge: Use a modern, secure dataplane, and provision clusters with the new dataplane Scenarios: The enterprise requires high performance and built-in policy enforcement to support demanding workloads and a zero-trust security posture.
- Challenge: Use observability tools to monitor and troubleshoot workload issues Scenario: you must fix problems with network traffic, and need to understand and monitor GKE traffic flows to diagnose issues effectively.
- Clusters must be configured to use a modern networking dataplane for high performance and security, and they must be deployed within the organization's centrally managed network structure.
- Enable GKE Dataplane V2 observability with Hubble to diagnose and fix misconfigured network policies.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Challenge: Use a modern, secure dataplane, and provision clusters with the new dataplane Scenarios: The enterprise requires high performance and built-in policy enforcement to support demanding workloads and a zero-trust security posture.
- Challenge: Use observability tools to monitor and troubleshoot workload issues Scenario: you must fix problems with network traffic, and need to understand and monitor GKE traffic flows to diagnose issues effectively.
- Clusters must be configured to use a modern networking dataplane for high performance and security, and they must be deployed within the organization's centrally managed network structure.
- Enable GKE Dataplane V2 observability with Hubble to diagnose and fix misconfigured network policies.

