---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.314Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "ResourceGroup inventory actuation and reconciliation status fields"
feature_slug: "resourcegroup-inventory-actuation-and-reconciliation-status-fields"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus"
keywords:
  - "resourcegroup"
  - "inventory"
  - "actuation"
  - "reconciliation"
  - "status"
  - "fields"
  - "object"
  - "includes"
---

# ResourceGroup inventory actuation and reconciliation status fields

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The ResourceGroup inventory object includes fields that distinguish actuation status, reconciliation status, and intended actuation strategy.

## Extended Definition

The ResourceGroup inventory object includes fields that distinguish actuation status, reconciliation status, and intended actuation strategy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)

## Supporting Pages

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- To view the reconciliation status for the RootSync object, run the following command: kubectl get resourcegroup.kpt.dev ROOT SYNC NAME -n config-management-system -o yaml Replace the ROOT SYNC NAME with the name of the RootSync object.
- To view the reconciliation status for the RepoSync object, run the following command: kubectl get resourcegroup.kpt.dev REPO SYNC NAME -n NAMESPACE -o yaml Replace the following: REPO SYNC NAME : the name of the RepoSync object.
- Confirm resources in the commit are reconciled Because ResourceGroups capture the reconciliation status of the managed resources declared in the source of truth, you can examine them to confirm if resources in the commit are reconciled.
- To confirm that the resources in the commit are reconciled, look for the following in the output: The .status.observedGeneration equals the value of the field .metadata.generation in the ResourceGroup object.

### Config Sync architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- It watches ResourceGroup objects and updates them with the current reconciliation status of each object in their inventory.
- The ResourceGroup Controller then watches all the objects in the ResourceGroup object and updates the status of the ResourceGroup object with the current reconciliation status of the synced objects.
- ResourceGroup Controller and ResourceGroup objects The root and namespace reconcilers create a ResourceGroup inventory object for each RootSync and RepoSync object you set up.
- This lets you check the status of the ResourceGroup object for an overview of the sync status, instead of having to query the status of every individual object yourself.

### Monitor Config Sync with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Histogram stallreason Time distribution of reconciling a ResourceGroup CR (distributed into buckets by duration) config sync rg reconcile duration seconds count Histogram stallreason Time distribution of reconciling a ResourceGroup CR (ignoring duration) config sync rg reconcile duration seconds sum Histogram stallreason Sum of the all time reconciling a ResourceGroup CR config sync kustomize build latency bucket Histogram Latency distribution of kustomize build execution time (distributed into buckets by duration of each operation) config sync kustomize build latency count Histogram Latency distribution of kustomize build execution time (ignoring duration) config sync kustomize build latency sum Histogram Sum of all kustomize build execution time config sync kustomize ordered top tier metrics Gauge top tier field Usage of Resources, Generators, SecretGenerator, ConfigMapGenerator, Transformers, and Validators config sync kustomize builtin transformers Gauge k8s builtin transformer Usage of built-in transformers related to kubernetes object metadata config sync kustomize resource count Gauge Number of resources outputted by kustomize build config sync kustomize field count Gauge field name Number of times a particular field is used in the kustomization files config sync kustomize patch count Gauge patch field Number of patches in the fields patches , patchesStrategicMerge , and patchesJson6902 config sync kustomize base count Gauge base source Number of remote and local bases kustomize deprecating field count Gauge deprecating field Usage of fields that may become deprecated kustomize simplification adoption count Gauge simplification field Usage of simplification transformers images, replicas, and replacements kustomize helm inflator count Gauge helm inflator Usage of helm in kustomize, whether by the built-in fields or the custom function Example debugging procedures for Prometheus The following examples illustrate some patterns for using Prometheus metrics, object status fields, and object annotations to detect and diagnose problems related to Config Sync.
- A value of 1 indicates a failure config sync ready resource count Gauge resourcegroup Total number of ready resources in a ResourceGroup config sync reconcile duration seconds bucket Histogram status Latency distribution of reconcile events handled by the reconciler manager (distributed into buckets by duration of each call) config sync reconcile duration seconds count Histogram status Latency distribution of reconcile events handled by the reconciler manager (ignoring duration) config sync reconcile duration seconds sum Histogram status Sum of the durations of all latency of reconcile events handled by the reconciler manager config sync reconciler errors Gauge component, errorclass Number of errors encountered while syncing resources from the source of the truth to a cluster config sync remediate duration seconds bucket Histogram status Latency distribution of remediator reconciliation events (distributed into buckets by duration) config sync remediate duration seconds count Histogram status Latency distribution of remediator reconciliation events (ignoring duration) config sync remediate duration seconds sum Histogram status Sum of the durations of all latency of remediator reconciliation events config sync resource count Gauge resourcegroup Number of resources tracked by a ResourceGroup config sync resource conflicts total Counter commit Number of resource conflicts resulting from a mismatch between the cached resources and cluster resources.
- Name Type Labels Description config sync api duration seconds bucket Histogram status, operation Latency distribution of API server calls (distributed into buckets by duration of each cycle) config sync api duration seconds count Histogram status, operation Latency distribution of API server calls (ignoring duration) config sync api duration seconds sum Histogram status, operation Sum of the durations of all API server calls config sync apply duration seconds bucket Histogram commit, status Latency distribution of applying resources declared from source of truth to a cluster (distributed into buckets by duration of each cycle) config sync apply duration seconds count Histogram commit, status Latency distribution of applying resources declared from source of truth to a cluster (ignoring duration) config sync apply duration seconds sum Histogram commit, status Sum of the durations of all the latency of applying resources declared from source of truth to a cluster config sync apply operations total Counter operation, status, controller Number of operations that have been performed to sync resources from source of truth to a cluster config sync cluster scoped resource count Gauge resourcegroup Number of cluster scoped resources in a ResourceGroup config sync crd count Gauge resourcegroup Number of CRDs in a ResourceGroup config sync declared resources Gauge commit Number of declared resources parsed from Git config sync internal errors total Counter source Number of internal errors triggered by Config Sync.
- Metric might not appear if no internal error has happened config sync kcc resource count Gauge resourcegroup Number of Config Connector resources in a ResourceGroup config sync last apply timestamp Gauge commit, status Timestamp of the most recent apply operation config sync last sync timestamp Gauge commit, status Timestamp of the most recent sync from Git config sync parser duration seconds bucket Histogram status, trigger, source Latency distribution of different stages involved in syncing from source of truth to a cluster config sync parser duration seconds count Histogram status, trigger, source Latency distribution of different stages involved in syncing from source of truth to a cluster (ignoring duration) config sync parser duration seconds sum Histogram status, trigger, source Sum of the latencies of different stages involved in syncing from source of truth to a cluster config sync pipeline error observed Gauge name, reconciler, component Status of RootSync and RepoSync custom resources.

