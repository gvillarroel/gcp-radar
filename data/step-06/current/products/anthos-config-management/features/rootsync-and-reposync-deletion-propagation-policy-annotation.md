---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.287Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync deletion propagation policy annotation"
feature_slug: "rootsync-and-reposync-deletion-propagation-policy-annotation"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations"
keywords:
  - "rootsync"
  - "reposync"
  - "deletion"
  - "propagation"
  - "policy"
  - "annotation"
  - "configsync"
  - "gke"
---

# RootSync and RepoSync deletion propagation policy annotation

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

RootSync and RepoSync support the configsync.gke.io/deletion-propagation-policy annotation to enable foreground cascading deletion.

## Extended Definition

RootSync and RepoSync support the configsync.gke.io/deletion-propagation-policy annotation to enable foreground cascading deletion.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations)

## Supporting Pages

### RootSync and RepoSync fields | Config Sync | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `feature-recovery-http`
- Final score: 367
- Re-rank relevance: N/A

Evidence snippets:
- RootSync CR The following example shows a RootSync object. # root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : sourceType : git sourceFormat : unstructured git : repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples branch : main dir : config-sync-quickstart/multirepo/root auth : none period : 30s RepoSync CR The following example shows a RepoSync object. # repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : repo-sync namespace : gamestore spec : sourceType : git sourceFormat : unstructured git : repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples branch : main dir : config-sync-quickstart/multirepo/root auth : none period : 30s What's next Learn how to monitor your RootSync and RepoSync objects .
- RootSync and RepoSync fields | Config Sync | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Indonesia Italiano Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Google Kubernetes Engine (GKE) Config Sync Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Config Sync All reference gcloud configuration field behavior gcloud apply spec fields ConfigManagement gcloud documentation ConfigManagement fields nomos bugreport contents RootSync and RepoSync fields Labels and annotations Error reference Permissions ConfigDelivery (fleet package) API REST API reference Summary REST Resources projects.locations Overview get list projects.locations.fleetPackages Overview create delete get list patch projects.locations.fleetPackages.rollouts Overview abort get list resume suspend projects.locations.operations Overview cancel delete get list projects.locations.resourceBundles Overview create delete get list patch projects.locations.resourceBundles.releases Overview create delete get list patch projects.locations.resourceBundles.releases.variants Overview create delete get list patch Types DeletionPropagationPolicy RolloutStrategy AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Reference Send feedback RootSync and RepoSync fields Stay organized with collections Save and categorize content based on your preferences.
- RootSync and RepoSync fields RootSync and RepoSync resource objects have the same fields with the exception of the following RootSync-only fields: spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration for the source format Key Description spec.sourceFormat Specifies how the source of truth is formatted.
- This might not include all the encountered errors, because Config Sync truncates errors if there are too many errors. status.sync.errorSummary.totalCount An integer tracking the total number of errors encountered while applying the configs from the source of truth. status.sync.errorSummary.truncated A boolean indicating whether the status.sync.errors field includes all the errors encountered while applying the configs from the source of truth. status.sync.errorSummary.errorCountAfterTruncation An integer tracking the number of errors in the status.sync.errors field. status.conditions A list of conditions tracking the current state of a RootSync or RepoSync object.

### Manage existing cluster objects \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- Source ID: `site-docs-root`
- Final score: 333
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable deletion propagation, you add the configsync.gke.io/deletion-propagation-policy: Foreground annotation to your RootSync or RepoSync object, such as in the following example: example-rootsync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : example-rootsync namespace : config-management-system annotations : configsync.gke.io/deletion-propagation-policy : Foreground spec : sourceType : git sourceFormat : unstructured git : repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples branch : main dir : config-sync-quickstart/multirepo/root auth : none period : 30s Alternatively, you can update an existing RootSync or RepoSync to use deletion propagation by running the following command: RootSync kubectl patch RootSync ROOTSYNC NAME \ --namespace config-management-system \ --type merge \ --patch '{"metadata":{"annotations":{"configsync.gke.io/deletion-propagation-policy":"Foreground"}}}' Replace ROOTSYNC NAME with the name of the RootSync that you want to update.
- RepoSync kubectl patch RepoSync REPOSYNC NAME \ --namespace config-management-system \ --type merge \ --patch '{"metadata":{"annotations":{"configsync.gke.io/deletion-propagation-policy":"Orphan"}}}' Propagate object deletion This example shows how to apply deletion propagation to a RootSync or RepoSync object and then delete the RootSync or RepoSync to delete all objects that were managed by the RootSync or RepoSync.
- RootSync Apply the annotation to a RootSync object to enable deletion propagation: kubectl patch RootSync example-rootsync \ --namespace config-management-system \ --type merge \ --patch '{"metadata":{"annotations":{"configsync.gke.io/deletion-propagation-policy":"Foreground"}}}' Delete the RootSync object and wait for Config Sync to delete it: kubectl delete RootSync example-rootsync --namespace config-management-system --wait Deleting the RootSync can take a few minutes to complete.
- RepoSync Apply the annotation to a RepoSync object to enable deletion propagation: kubectl patch RepoSync example-reposync \ --namespace example-namespace \ --type merge \ --patch '{"metadata":{"annotations":{"configsync.gke.io/deletion-propagation-policy":"Foreground"}}}' Delete the RepoSync object and wait for Config Sync to delete it: kubectl delete RepoSync example-reposync --namespace example-namespace --wait Deleting the RepoSync can take a few minutes to complete.

### Config Sync-managed labels and annotations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations)
- Source ID: `site-docs-reference`
- Final score: 327
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- No. configsync.gke.io/deletion-propagation-policy: Foreground Enables deletion propagation of resources managed by a RootSync or RepoSync.
- This behavior is disabled by default if the annotation is not set or if the annotation is configsync.gke.io/deletion-propagation-policy: Orphan .
- Annotations Annotation Description Safe to modify applyset.kubernetes.io/tooling: configsync.gke.io/v1 Indicates that the ApplySet specified by the applyset.kubernetes.io/id label is managed by Config Sync.
- No. configmanagement.gke.io/sync-namespace: SYNC NAMESPACE Indicates the Namespace of the RootSync or RepoSync associated with the object.

