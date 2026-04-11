---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.243Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "ResourceGroup inventory actuation and reconciliation status fields"
feature_slug: "resourcegroup-inventory-actuation-and-reconciliation-status-fields"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
keywords:
  - "intended actuation strategy"
  - "inventory actuation fields"
  - "ResourceGroup inventory"
  - "ResourceGroup status fields"
  - "actuation fields"
  - "actuation status"
  - "inventory status"
  - "reconciliation status"
---

# ResourceGroup inventory actuation and reconciliation status fields

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

ResourceGroup inventory objects now include fields for actuation status, reconciliation status, and intended actuation strategy.

## Extended Definition

ResourceGroup inventory objects now include fields for actuation status, reconciliation status, and intended actuation strategy.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- 1.11.0 Feature Added new fields to the ResourceGroup inventory object to distinguish between actuation status and reconciliation status, as well as the intended actuation strategy (apply or delete) before actuation.
- 1.11.0 Fixed Fixed individual resource object status to correspond to actuation and reconciliation of the latest specification from Git, not just reconciliation status of the last specification that was successfully applied.
- It also allows for drilling down to see the reconciliation status for individual resources.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Confirm resources in the commit are reconciled Because ResourceGroups capture the reconciliation status of the managed resources declared in the source of truth, you can examine them to confirm if resources in the commit are reconciled.
- To view the reconciliation status for the RootSync object, run the following command: kubectl get resourcegroup.kpt.dev ROOT SYNC NAME -n config-management-system -o yaml Replace the ROOT SYNC NAME with the name of the RootSync object.
- To view the reconciliation status for the RepoSync object, run the following command: kubectl get resourcegroup.kpt.dev REPO SYNC NAME -n NAMESPACE -o yaml Replace the following: REPO SYNC NAME : the name of the RepoSync object.
- For a source of truth synced to the cluster, the reconciliation statuses of all resources are aggregated in a resource called ResourceGroup.

