---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.229Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync parser/apply duration histogram bounds"
feature_slug: "config-sync-parser-apply-duration-histogram-bounds"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring"
keywords:
  - "histogram distribution bounds"
  - "duration histogram buckets"
  - "expanded histogram bounds"
  - "parser duration histogram"
  - "parser_duration_seconds"
  - "Config Sync parser duration metrics"
  - "apply duration histogram"
  - "apply_duration_seconds"
---

# Config Sync parser/apply duration histogram bounds

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync metrics now use expanded histogram distribution bounds for parser_duration_seconds and apply_duration_seconds to support longer durations.

## Extended Definition

Config Sync metrics now use expanded histogram distribution bounds for parser_duration_seconds and apply_duration_seconds to support longer durations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring)

## Supporting Pages

### Monitor Config Sync with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Prometheus, you can use the following filters for the RootSyncs or RepoSyncs: Querying RootSync config sync reconciler errors{configsync sync name= ROOT SYNC NAME } Querying RepoSync config sync reconciler errors{configsync sync name= REPO SYNC NAME } Query import and sync operations by status In Prometheus, you could use the following queries: Check for errors that occurred when sourcing configs. config sync reconciler errors{component="source"} Check for errors that occurred when syncing configs to the cluster. config sync reconciler errors{component="sync"} You can also check the metrics for the source and sync processes themselves: config sync parser duration seconds{status="error"} config sync apply duration seconds{status="error"} config sync remediate duration seconds{status="error"} Monitor resources with Google Cloud Managed Service for Prometheus Google Cloud Managed Service for Prometheus is Google Cloud's fully managed multi-cloud solution for Prometheus metrics.
- Name Type Labels Description config sync api duration seconds bucket Histogram status, operation Latency distribution of API server calls (distributed into buckets by duration of each cycle) config sync api duration seconds count Histogram status, operation Latency distribution of API server calls (ignoring duration) config sync api duration seconds sum Histogram status, operation Sum of the durations of all API server calls config sync apply duration seconds bucket Histogram commit, status Latency distribution of applying resources declared from source of truth to a cluster (distributed into buckets by duration of each cycle) config sync apply duration seconds count Histogram commit, status Latency distribution of applying resources declared from source of truth to a cluster (ignoring duration) config sync apply duration seconds sum Histogram commit, status Sum of the durations of all the latency of applying resources declared from source of truth to a cluster config sync apply operations total Counter operation, status, controller Number of operations that have been performed to sync resources from source of truth to a cluster config sync cluster scoped resource count Gauge resourcegroup Number of cluster scoped resources in a ResourceGroup config sync crd count Gauge resourcegroup Number of CRDs in a ResourceGroup config sync declared resources Gauge commit Number of declared resources parsed from Git config sync internal errors total Counter source Number of internal errors triggered by Config Sync.
- Metric might not appear if no internal error has happened config sync kcc resource count Gauge resourcegroup Number of Config Connector resources in a ResourceGroup config sync last apply timestamp Gauge commit, status Timestamp of the most recent apply operation config sync last sync timestamp Gauge commit, status Timestamp of the most recent sync from Git config sync parser duration seconds bucket Histogram status, trigger, source Latency distribution of different stages involved in syncing from source of truth to a cluster config sync parser duration seconds count Histogram status, trigger, source Latency distribution of different stages involved in syncing from source of truth to a cluster (ignoring duration) config sync parser duration seconds sum Histogram status, trigger, source Sum of the latencies of different stages involved in syncing from source of truth to a cluster config sync pipeline error observed Gauge name, reconciler, component Status of RootSync and RepoSync custom resources.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- 1.14.0 Feature The following enhancements are made to Config Sync metrics: Enhanced the histogram distribution bounds for the parser duration seconds and apply duration seconds metrics to support longer durations.
- The affected metrics are apply duration seconds, api duration seconds, declared resources, apply operations total.

### Monitor Config Sync with Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- You can also check the metrics for the source and sync processes themselves by querying the following metrics and filtering by the status tag: custom.googleapis.com/opencensus/config sync/parser duration seconds custom.googleapis.com/opencensus/config sync/apply duration seconds custom.googleapis.com/opencensus/config sync/remediate duration seconds Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Default list of metrics in Cloud Monitoring Name Type api duration seconds Distribution apply duration seconds Distribution apply operations total Count declared resources Last Value internal errors total Count last sync timestamp Last Value pipeline error observed Last Value reconciler errors Last Value resource fights total Count reconcile duration seconds Distribution resource group total Last Value resource count Last Value ready resource count Last Value resource ns count Last Value cluster scoped resource count Last Value kcc resource count Gauge Note: Metrics without data don't appear in Metric Explorer.

