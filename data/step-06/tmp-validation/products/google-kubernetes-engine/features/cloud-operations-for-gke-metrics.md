---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.391Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud Operations for GKE metrics"
feature_slug: "cloud-operations-for-gke-metrics"
latest_feature_date: "2021-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide"
keywords:
  - "part"
  - "operations"
  - "provides"
  - "metrics"
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
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)

## Supporting Pages

### "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Datadog Datadog provides visibility into containerized apps running on GKE Autopilot by collecting metrics, logs, and traces, which helps to identify performance issues and provide context for troubleshooting.
- Autopilot This page provides information about Google Kubernetes Engine (GKE) Autopilot partner organizations and the specialized workloads that they make available in Autopilot clusters.
- You can deploy these partner workloads to meet requirements such as collecting node-level metrics without needing to run a sidecar container in every Pod.
- Overview of the allowlisting process Every partner workload goes through a review process to ensure that they meet baseline requirements for GKE, such as having the least amount of permissions required to run correctly, and fine-grained control over the resources that the workloads can access.

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- To diagnose latency issues with third-party webooks, use the apiserver admission webhook admission duration seconds metric. apiserver admission webhook admission duration seconds and apiserver admission step admission duration seconds These metrics measure the latency in external, third-party admission webhooks.
- API server metrics This section provides a list of the API server metrics and additional information about interpreting and using the metrics.
- Scheduler metrics This section provides a list of the scheduler metrics and additional information about interpreting and using the metrics.
- PromQL metric name Launch stage Cloud Monitoring metric name Kind, Type, Unit Monitored resources Required GKE version Description Labels apiserver current inflight requests GA apiserver current inflight requests/gauge Gauge , Double , 1 prometheus target 1.22.13+ Maximal number of currently used inflight request limit of this apiserver per request kind in last second. request kind apiserver flowcontrol current executing seats BETA apiserver flowcontrol current executing seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ Concurrency (number of seats) occupied by the currently executing (initial stage for a WATCH, any stage otherwise) requests in the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol current inqueue requests BETA apiserver flowcontrol current inqueue requests/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests currently pending in queues of the API Priority and Fairness subsystem. flow schema priority level apiserver flowcontrol nominal limit seats BETA apiserver flowcontrol nominal limit seats/gauge Gauge , Double , 1 prometheus target 1.28.3+ (1.26.11+, 1.27.8+ for prior minor versions) Nominal number of execution seats configured for each priority level. priority level apiserver flowcontrol rejected requests total BETA apiserver flowcontrol rejected requests total/counter Cumulative , Double , 1 prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Number of requests rejected by the API Priority and Fairness subsystem. flow schema priority level reason apiserver flowcontrol request wait duration seconds BETA apiserver flowcontrol request wait duration seconds/histogram Cumulative , Distribution , s prometheus target 1.28.3+ (1.25.16-gke.1360000+, 1.26.11+, 1.27.8+ for prior minor versions) Length of time a request spent waiting in its queue. execute flow schema priority level apiserver request duration seconds GA apiserver request duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Response latency distribution in seconds for each verb, dry run value, group, version, resource, subresource, scope and component. component dry run group resource scope subresource verb version apiserver request total GA apiserver request total/counter Cumulative , Double , 1 prometheus target 1.22.13+ Counter of apiserver requests broken out for each verb, dry run value, group, version, resource, scope, component, and HTTP response code. code component dry run group resource scope subresource verb version apiserver response sizes GA apiserver response sizes/histogram Cumulative , Distribution , 1 prometheus target 1.22.13+ Response size distribution in bytes for each group, version, verb, resource, subresource, scope and component. component group resource scope subresource verb version apiserver storage objects GA apiserver storage objects/gauge Gauge , Double , 1 prometheus target 1.22.13+ Number of stored objects at the time of last check split by kind. resource apiserver admission controller admission duration seconds GA apiserver admission controller admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.23.6+ Admission controller latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type apiserver admission step admission duration seconds GA apiserver admission step admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission sub-step latency histogram in seconds, broken out for each operation and API resource and step type (validate or admit). operation rejected type apiserver admission webhook admission duration seconds GA apiserver admission webhook admission duration seconds/histogram Cumulative , Distribution , s prometheus target 1.22.13+ Admission webhook latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). name operation rejected type This following sections provide additional information about the API server metrics. apiserver request duration seconds Use this metric to monitor latency in the API server.

### "Modern CI/CD with GKE: A software delivery framework \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- Source ID: `site-docs-reference-required-5`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- To investigate the operations of their applications, tenants need access to logs and metrics.
- This document is part of a series: Modern CI/CD with GKE: A software delivery framework (this document) Modern CI/CD with GKE: Build a CI/CD system (reference architecture) Modern CI/CD with GKE: Apply the developer workflow This document is intended for enterprise architects and application developers, as well as IT security, DevOps, and Site Reliability Engineering teams.
- Yet, even as Kubernetes and container adoption grows, many organizations don't fully realize the benefits in release velocity, stability, and operational efficiencies because their CI/CD practices don't take full advantage of Kubernetes or address operations and security concerns.
- Using the consistent infrastructure offered by the GKE platform, uniform CI/CD methods, and best practices in implementation, your organization can gain the following benefits for development and operations: Reducing lead time for changes.

