---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.691Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Simplified IAM requirements for attached cluster system components"
feature_slug: "simplified-iam-requirements-for-attached-cluster-system-components"
latest_feature_date: "2023-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster"
keywords:
  - "Google Managed Service for Prometheus collector"
  - "auto-configured system components"
  - "manual IAM bindings removed"
  - "system component permissions"
  - "gke-telemetry-agent"
  - "automatic IAM setup"
  - "no manual bindings"
  - "simplified IAM requirements"
---

# Simplified IAM requirements for attached cluster system components

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Anthos Attached Clusters no longer requires manual Google IAM bindings for key system components such as gke-telemetry-agent, Google Managed Service for Prometheus collectors, and the Binary Authorization agent.

## Extended Definition

For Anthos Attached Clusters, Google Cloud documentation indicates that the manual IAM binding required to authorize `gke-system/gke-telemetry-agent` for logging and monitoring (using `roles/gkemulticloud.telemetryWriter`) is no longer necessary starting with Kubernetes 1.28. This simplification is documented in the attached cluster workflows for AKS and EKS, but the provided excerpts do not explicitly confirm the same no-manual-binding behavior for other components such as Managed Service for Prometheus collectors or the Binary Authorization agent.

## Evidence Summary

Both pages include a command-based manual IAM-binding method for `gke-telemetry-agent` and a note stating this manual binding is no longer required from Kubernetes 1.28 onward for log and metric collection.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster)

## Supporting Pages

### Attach your AKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- To authorize the Kubernetes workload identity gke-system/gke-telemetry-agent to write logs to Google Cloud Logging, and metrics to Google Cloud Monitoring, run this command: gcloud projects add-iam-policy-binding GOOGLE PROJECT ID \ --member = "serviceAccount: GOOGLE PROJECT ID .svc.id.goog[gke-system/gke-telemetry-agent]" \ --role = roles/gkemulticloud.telemetryWriter Replace GOOGLE PROJECT ID with the cluster's Google Cloud project ID.
- Authorize Cloud Logging / Cloud Monitoring Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the gke-system/gke-telemetry-agent service account for log and metric collection is no longer necessary.

### Attach your EKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- To authorize the Kubernetes workload identity gke-system/gke-telemetry-agent to write logs to Google Cloud Logging, and metrics to Google Cloud Monitoring, run this command: gcloud projects add-iam-policy-binding GOOGLE PROJECT ID \ --member = "serviceAccount: GOOGLE PROJECT ID .svc.id.goog[gke-system/gke-telemetry-agent]" \ --role = roles/gkemulticloud.telemetryWriter Replace GOOGLE PROJECT ID with the cluster's Google Cloud project ID.
- Authorize Cloud Logging / Cloud Monitoring Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the gke-system/gke-telemetry-agent service account for log and metric collection is no longer necessary.

