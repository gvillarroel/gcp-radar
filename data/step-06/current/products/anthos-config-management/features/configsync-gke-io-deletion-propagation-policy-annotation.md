---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.218Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "configsync.gke.io/deletion-propagation-policy annotation"
feature_slug: "configsync-gke-io-deletion-propagation-policy-annotation"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/DeletionPropagationPolicy"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "foreground cascading deletion"
  - "configsync.gke.io/deletion-propagation-policy"
  - "foreground delete policy"
  - "preview deletion annotation"
  - "RepoSync deletion propagation"
  - "RootSync deletion propagation"
  - "deletion-propagation-policy"
  - "deletion propagation policy"
---

# configsync.gke.io/deletion-propagation-policy annotation

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Added a preview configsync.gke.io/deletion-propagation-policy annotation for RootSync and RepoSync to configure foreground cascading deletion.

## Extended Definition

Added a preview configsync.gke.io/deletion-propagation-policy annotation for RootSync and RepoSync to configure foreground cascading deletion.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/DeletionPropagationPolicy](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/DeletionPropagationPolicy)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Manage existing cluster objects \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To disable deletion propagation, remove the annotation or change the value to configsync.gke.io/deletion-propagation-policy: Orphan : Note: Starting in version 1.21.0, Config Sync stops managing all objects when using the Orphan deletion propagation policy.
- To enable deletion propagation, you add the configsync.gke.io/deletion-propagation-policy: Foreground annotation to your RootSync or RepoSync object, such as in the following example: example-rootsync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : example-rootsync namespace : config-management-system annotations : configsync.gke.io/deletion-propagation-policy : Foreground spec : sourceType : git sourceFormat : unstructured git : repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples branch : main dir : config-sync-quickstart/multirepo/root auth : none period : 30s Alternatively, you can update an existing RootSync or RepoSync to use deletion propagation by running the following command: RootSync kubectl patch RootSync ROOTSYNC NAME \ --namespace config-management-system \ --type merge \ --patch '{"metadata":{"annotations":{"configsync.gke.io/deletion-propagation-policy":"Foreground"}}}' Replace ROOTSYNC NAME with the name of the RootSync that you want to update.
- RootSync Apply the annotation to a RootSync object to enable deletion propagation: kubectl patch RootSync example-rootsync \ --namespace config-management-system \ --type merge \ --patch '{"metadata":{"annotations":{"configsync.gke.io/deletion-propagation-policy":"Foreground"}}}' Delete the RootSync object and wait for Config Sync to delete it: kubectl delete RootSync example-rootsync --namespace config-management-system --wait Deleting the RootSync can take a few minutes to complete.
- RepoSync Apply the annotation to a RepoSync object to enable deletion propagation: kubectl patch RepoSync example-reposync \ --namespace example-namespace \ --type merge \ --patch '{"metadata":{"annotations":{"configsync.gke.io/deletion-propagation-policy":"Foreground"}}}' Delete the RepoSync object and wait for Config Sync to delete it: kubectl delete RepoSync example-reposync --namespace example-namespace --wait Deleting the RepoSync can take a few minutes to complete.

### DeletionPropagationPolicy \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/DeletionPropagationPolicy](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/DeletionPropagationPolicy)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Deletion Propagation Policy determines what happens to the underlying Kubernetes resources on a cluster when the FleetPackage managing those resources no longer targets the cluster or is deleted.
- Enums DELETION PROPAGATION POLICY UNSPECIFIED Unspecified deletion propagation policy.
- FOREGROUND Foreground deletion propagation policy.
- ORPHAN Orphan deletion propagation policy.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- 1.16.0 Feature Added a new configsync.gke.io/deletion-propagation-policy annotation for use on RootSync and RepoSync, for configuring foreground cascading deletion as a preview feature.

