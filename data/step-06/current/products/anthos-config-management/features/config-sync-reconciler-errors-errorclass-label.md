---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.230Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync reconciler_errors errorclass label"
feature_slug: "config-sync-reconciler-errors-errorclass-label"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "reconciler error labels"
  - "errorclass metric label"
  - "reconciler_errors:errorclass"
  - "reconciler error label"
  - "errorclass label"
  - "errorclass"
  - "reconciler_errors metric"
  - "Config Sync reconciler errors"
---

# Config Sync reconciler_errors errorclass label

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync now correctly supports the errorclass label on reconciler_errors metrics.

## Extended Definition

Config Sync now correctly supports the errorclass label on reconciler_errors metrics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Monitor Config Sync with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A value of 1 indicates a failure config sync ready resource count Gauge resourcegroup Total number of ready resources in a ResourceGroup config sync reconcile duration seconds bucket Histogram status Latency distribution of reconcile events handled by the reconciler manager (distributed into buckets by duration of each call) config sync reconcile duration seconds count Histogram status Latency distribution of reconcile events handled by the reconciler manager (ignoring duration) config sync reconcile duration seconds sum Histogram status Sum of the durations of all latency of reconcile events handled by the reconciler manager config sync reconciler errors Gauge component, errorclass Number of errors encountered while syncing resources from the source of the truth to a cluster config sync remediate duration seconds bucket Histogram status Latency distribution of remediator reconciliation events (distributed into buckets by duration) config sync remediate duration seconds count Histogram status Latency distribution of remediator reconciliation events (ignoring duration) config sync remediate duration seconds sum Histogram status Sum of the durations of all latency of remediator reconciliation events config sync resource count Gauge resourcegroup Number of resources tracked by a ResourceGroup config sync resource conflicts total Counter commit Number of resource conflicts resulting from a mismatch between the cached resources and cluster resources.
- In Prometheus, you can use the following filters for the RootSyncs or RepoSyncs: Querying RootSync config sync reconciler errors{configsync sync name= ROOT SYNC NAME } Querying RepoSync config sync reconciler errors{configsync sync name= REPO SYNC NAME } Query import and sync operations by status In Prometheus, you could use the following queries: Check for errors that occurred when sourcing configs. config sync reconciler errors{component="source"} Check for errors that occurred when syncing configs to the cluster. config sync reconciler errors{component="sync"} You can also check the metrics for the source and sync processes themselves: config sync parser duration seconds{status="error"} config sync apply duration seconds{status="error"} config sync remediate duration seconds{status="error"} Monitor resources with Google Cloud Managed Service for Prometheus Google Cloud Managed Service for Prometheus is Google Cloud's fully managed multi-cloud solution for Prometheus metrics.
- You can see if any errors have occurred, and can even set up alerts for them . config sync reconciler errors Query metrics by reconciler If you are using Config Sync RootSync and RepoSync APIs, then you can monitor the RootSync and RepoSync objects.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Support the errorclass label of the reconciler errors metric correctly.

