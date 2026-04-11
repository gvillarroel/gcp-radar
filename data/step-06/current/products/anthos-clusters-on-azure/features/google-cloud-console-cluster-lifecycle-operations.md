---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.719Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Google Cloud Console cluster lifecycle operations"
feature_slug: "google-cloud-console-cluster-lifecycle-operations"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes"
keywords:
  - "Console cluster actions"
  - "Anthos on Azure cluster management UI"
  - "UI lifecycle management"
  - "in-console cluster operations"
  - "cluster lifecycle actions"
  - "Google Cloud Console"
  - "delete cluster"
  - "upgrade cluster"
---

# Google Cloud Console cluster lifecycle operations

Product: Anthos clusters on Azure
Coverage: HIGH

## Step 02 Summary

Enabled management actions in Google Cloud Console to update, upgrade, and delete Anthos clusters on Azure.

## Extended Definition

For Anthos clusters on Azure, this feature enables lifecycle management directly in Google Cloud Console by allowing users to update, upgrade, and delete clusters from the UI. The documentation also notes that console-based management requires the cluster to be registered with the Connect agent.

## Evidence Summary

The release notes page explicitly states that Google Cloud Console supports update, upgrade, and delete actions for Azure clusters, and that Cloud Console usage requires cluster registration with Connect.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)

## Supporting Pages

### GKE on Azure release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Announcement You can now launch clusters with the following Kubernetes versions: 1.24.3-gke.2100 1.23.9-gke.2100 1.22.12-gke.2300 Feature You can now use the Google Cloud console to update , upgrade , and delete clusters on Azure.
- You can see the latest product updates for all of Google Cloud on the Google Cloud page, browse and filter all release notes in the Google Cloud console , or programmatically access release notes in BigQuery .
- Clusters you create in other clouds appear in the Google Cloud Console, creating a centralized management view complete with cluster telemetry and logging.
- In order to use the Google Cloud Console, you must register your cluster with the Connect agent.

