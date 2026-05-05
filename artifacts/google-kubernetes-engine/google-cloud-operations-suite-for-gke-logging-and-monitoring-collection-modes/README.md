# Google Cloud operations suite for GKE logging and monitoring collection modes

Product: Google Kubernetes Engine
Feature slug: `google-cloud-operations-suite-for-gke-logging-and-monitoring-collection-modes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds logging-only and monitoring-only collection modes for GKE clusters.

## Lifecycle

- Latest feature date: 2021-01-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))
- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/collect-view-logs-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container)
