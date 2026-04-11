---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.259Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Hierarchy Controller launch"
feature_slug: "hierarchy-controller-launch"
latest_feature_date: "2020-07-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "hierarchical namespace controller"
  - "Anthos Config Management Hierarchy Controller"
  - "Hierarchy Controller beta"
  - "HNC"
  - "Hierarchy Controller"
  - "hierarchy-controller"
  - "Hierarchy controller"
---

# Hierarchy Controller launch

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Anthos Config Management introduced Hierarchy Controller as a beta feature.

## Extended Definition

Anthos Config Management introduced Hierarchy Controller as a beta feature.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### Disable Hierarchy Controller \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- You need to manually remove those CRDs using kubectl : HierarchyConfiguration HNCConfiguration SubnamespaceAnchor HierarchicalResourceQuota To remove the Hierarchy Controller fields, review the instructions for the method that you used to install Hierarchy Controller: gcloud Remove the hierarchyController block from your Google Cloud CLI apply spec file .
- To determine how to disable Hierarchy Controller, inspect the kubectl ConfigManagement object or gcloud apply spec file and take an action that corresponds to the value in the following fields: hierarchyController.enablePodTreeLabels : if true , and you previously enabled hierarchical observability, don't proceed with the steps on this page.
- Removing the fields doesn't disable Hierarchy Controller and causes the fields to become externally-managed instead of managed by Config Connector. kubectl Remove the hierarchyController block from the ConfigManagement object .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Disable Hierarchy Controller Stay organized with collections Save and categorize content based on your preferences.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you were using Hierarchy Controller 1.5.1 or earlier, you must either update to Hierarchy Controller 1.5.2 or 1.6.0, and follow the HNC v0.6.0 directions to upgrade to v1alpha2.
- To continue using similar functionality, migrate from Hierarchy Controller to Hierarchical Namespace Controller .
- 1.7.2 Change Hierarchy Controller has been updated to use HNC v0.8.0.
- 1.6.1 Feature Hierarchy Controller is upgraded to include HNC v0.7.0.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command to update the cluster in your current kubectl context: nomos migrate --remove-configmanagement shell script Copy the following shell script to a file and then run it to update the cluster in your current kubectl context. #!/bin/bash set -euox pipefail hnc enabled = " $( kubectl get configmanagements.configmanagement.gke.io config-management -o = jsonpath = "{.spec.hierarchyController.enabled}" --ignore-not-found ) " if [[ " ${ hnc enabled } " == "true" ]] ; then echo "Hierarchy Controller is enabled on the ConfigManagement object.
- Caution: Ensure Hierarchy Controller is disabled before proceeding. nomos (recommended) Make sure the nomos CLI is on the latest version.

