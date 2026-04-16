---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.941Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud Operations for GKE metrics"
feature_slug: "cloud-operations-for-gke-metrics"
latest_feature_date: "2021-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
keywords:
  - "operations"
  - "gke"
  - "metrics"
  - "provides"
  - "40"
  - "kubernetes"
  - "part"
---

# Cloud Operations for GKE metrics

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Provides 40 Kubernetes metrics as part of Cloud Operations for GKE.

## Extended Definition

Provides 40 Kubernetes metrics as part of Cloud Operations for GKE.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)

## Supporting Pages

### "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot This page provides information about Google Kubernetes Engine (GKE) Autopilot partner organizations and the specialized workloads that they make available in Autopilot clusters.
- Partner Description Aqua Aqua supports securing and ensuring compliance for the full lifecycle of workloads on GKE Autopilot, and specifically the Kubernetes pods, which run multiple containers with shared sets of storage and networking resources.
- Datadog Datadog provides visibility into containerized apps running on GKE Autopilot by collecting metrics, logs, and traces, which helps to identify performance issues and provide context for troubleshooting.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Resources Send feedback Autopilot partners Stay organized with collections Save and categorize content based on your preferences.

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- For example, to measure the API server traffic per instance of the Kubernetes control plane, use the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME "}[1m])) To query the unsuccessful requests, filter the code label for 4xx and 5xx values by using the following PromQL query: sum(rate(apiserver request total{code= "[45].."}[5m])) To query the successful requests, filter the code label for 2xx values by using the following PromQL query: sum(rate(apiserver request total{code= "2.."}[5m])) To query the rejected requests by the API server per instance of the Kubernetes control plane, filter the code label for the value 429 ( http.StatusTooManyRequests ) by using the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME ", code="429"}[1m])) Saturation You can measure the saturation in your system by using the apiserver current inflight requests and apiserver storage objects metrics.
- Click Save Changes . gcloud Update your cluster to collect metrics emitted by the Kubernetes API server, Scheduler, and Controller Manager: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --monitoring = SYSTEM,API SERVER,SCHEDULER,CONTROLLER MANAGER Replace the following: CLUSTER NAME : the name of the cluster.
- To diagnose latency issues with third-party webooks, use the apiserver admission webhook admission duration seconds metric. apiserver admission webhook admission duration seconds and apiserver admission step admission duration seconds These metrics measure the latency in external, third-party admission webhooks.
- To enable control plane metrics from the Observability tab for the cluster, do the following: In the Google Cloud console, go to the Kubernetes clusters page: Go to Kubernetes clusters If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .

### "Modern CI/CD with GKE: A software delivery framework \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- Source ID: `site-docs-reference-required-5`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Yet, even as Kubernetes and container adoption grows, many organizations don't fully realize the benefits in release velocity, stability, and operational efficiencies because their CI/CD practices don't take full advantage of Kubernetes or address operations and security concerns.
- To investigate the operations of their applications, tenants need access to logs and metrics.
- This document is part of a series: Modern CI/CD with GKE: A software delivery framework (this document) Modern CI/CD with GKE: Build a CI/CD system (reference architecture) Modern CI/CD with GKE: Apply the developer workflow This document is intended for enterprise architects and application developers, as well as IT security, DevOps, and Site Reliability Engineering teams.
- Some common configuration items that you can manage centrally include the following: Kubernetes namespaces Quotas Role-based access controls (RBAC) Network policies You should consistently enforce these types of configurations throughout your clusters so that application teams don't misuse or abuse the infrastructure.

