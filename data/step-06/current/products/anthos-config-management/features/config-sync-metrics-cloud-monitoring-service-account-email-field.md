---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.218Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync metrics Cloud Monitoring service account email field"
feature_slug: "config-sync-metrics-cloud-monitoring-service-account-email-field"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
keywords:
  - "metrics GCP service account email"
  - "spec.configSync.metricsGcpServiceAccountEmail"
  - "configSync.metricsGcpServiceAccountEmail"
  - "cluster metrics export"
  - "metricsGcpServiceAccountEmail"
  - "Config Sync Cloud Monitoring"
  - "Workload Identity"
  - "gcloud apply spec"
---

# Config Sync metrics Cloud Monitoring service account email field

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync adds the spec.configSync.metricsGcpServiceAccountEmail field in the gcloud apply spec to simplify exporting cluster metrics to Cloud Monitoring with Workload Identity.

## Extended Definition

Config Sync adds the spec.configSync.metricsGcpServiceAccountEmail field in the gcloud apply spec to simplify exporting cluster metrics to Cloud Monitoring with Workload Identity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- 1.16.0 Feature Added the spec.configSync.metricsGcpServiceAccountEmail field to the gcloud apply spec fields to remove 2 manual steps required to export Config Sync metrics from a cluster with Workload Identity enabled to Cloud Monitoring.
- 1.8.0 Feature Config Sync now supports accessing Cloud Source Repositories through a Google service account when Workload Identity is enabled in your cluster.
- 1.11.1 Feature Added support for using Fleet Workload Identity to authenticate to Git repositories in Cloud Source Repositories.
- For more information on the new file format, see gcloud apply spec fields .

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you are using gcpserviceaccount as the auth type and don't have Workload Identity Federation for GKE enabled, you must create an IAM policy binding between the Kubernetes service account for each namespace and the Google service account.
- If you are using gcpserviceaccount as the auth type and don't have Workload Identity Federation for GKE enabled, you must create an IAM policy binding between the Kubernetes service account for each namespace and the Google service account.
- Only select this option if Workload Identity Federation for GKE is not enabled in your cluster. gcpserviceaccount : Use a Google service account to access an image.
- Only select this option if Workload Identity Federation for GKE is not enabled in your cluster. gcpserviceaccount : Use a Google service account to access an image.

