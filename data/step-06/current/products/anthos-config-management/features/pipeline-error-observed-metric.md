---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.321Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "pipeline_error_observed metric"
feature_slug: "pipeline-error-observed-metric"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring"
keywords:
  - "pipeline"
  - "error"
  - "observed"
  - "metric"
  - "captures"
  - "whether"
  - "errors"
  - "occur"
---

# pipeline_error_observed metric

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

This metric captures whether errors occur in rendering, sync, source, or readiness pipeline stages.

## Extended Definition

This metric captures whether errors occur in rendering, sync, source, or readiness pipeline stages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring)

## Supporting Pages

### Config Sync metrics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Metric might not appear in query results if no internal error has happened. last sync timestamp Last Value status The timestamp of the most recent sync from Git. parser duration seconds Distribution status, trigger, source The latency distribution of different stages involved in syncing from source of truth to a cluster. pipeline error observed Last Value name, reconciler, component The status of RootSync and RepoSync custom resources.
- Understand the pipeline error observed metric The pipeline error observed metric is a metric that can help you quickly identify RepoSync or RootSync CRs that are not in sync or contain resources that are not reconciled to the desired state.
- Name Type Tags Description rg reconcile duration seconds Distribution stallreason The distribution of time taken to reconcile a ResourceGroup CR resource group total Last Value The current number of ResourceGroup CRs resource count Last Value resourcegroup The total number of resources tracked by a ResourceGroup ready resource count Last Value resourcegroup The total number of ready resources in a ResourceGroup resource ns count Last Value resourcegroup The number of namespaces used by resources in a ResourceGroup cluster scoped resource count Last Value resourcegroup The number of cluster scoped resources in a ResourceGroup crd count Last Value resourcegroup The number of CRDs in a ResourceGroup kcc resource count Last Value resourcegroup The total number of KCC resources in a ResourceGroup pipeline error observed Last Value name, reconciler, component The status of RootSync and RepoSync custom resources.
- Config Sync metrics Name Type Tags Description api duration seconds Distribution operation, status The latency distribution of API server calls. apply duration seconds Distribution status The latency distribution of applying resources declared from source of truth to a cluster. apply operations total Count operation, status, controller The total number of operations that have been performed to sync resources from source of truth to a cluster. declared resources Last Value The number of declared resources parsed from Git. internal errors total Count source The total number of internal errors encountered by Config Sync.

### Monitor Config Sync with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-prometheus)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Metric might not appear if no internal error has happened config sync kcc resource count Gauge resourcegroup Number of Config Connector resources in a ResourceGroup config sync last apply timestamp Gauge commit, status Timestamp of the most recent apply operation config sync last sync timestamp Gauge commit, status Timestamp of the most recent sync from Git config sync parser duration seconds bucket Histogram status, trigger, source Latency distribution of different stages involved in syncing from source of truth to a cluster config sync parser duration seconds count Histogram status, trigger, source Latency distribution of different stages involved in syncing from source of truth to a cluster (ignoring duration) config sync parser duration seconds sum Histogram status, trigger, source Sum of the latencies of different stages involved in syncing from source of truth to a cluster config sync pipeline error observed Gauge name, reconciler, component Status of RootSync and RepoSync custom resources.
- In Prometheus, you can use the following filters for the RootSyncs or RepoSyncs: Querying RootSync config sync reconciler errors{configsync sync name= ROOT SYNC NAME } Querying RepoSync config sync reconciler errors{configsync sync name= REPO SYNC NAME } Query import and sync operations by status In Prometheus, you could use the following queries: Check for errors that occurred when sourcing configs. config sync reconciler errors{component="source"} Check for errors that occurred when syncing configs to the cluster. config sync reconciler errors{component="sync"} You can also check the metrics for the source and sync processes themselves: config sync parser duration seconds{status="error"} config sync apply duration seconds{status="error"} config sync remediate duration seconds{status="error"} Monitor resources with Google Cloud Managed Service for Prometheus Google Cloud Managed Service for Prometheus is Google Cloud's fully managed multi-cloud solution for Prometheus metrics.
- You can see if any errors have occurred, and can even set up alerts for them . config sync reconciler errors Query metrics by reconciler If you are using Config Sync RootSync and RepoSync APIs, then you can monitor the RootSync and RepoSync objects.
- Almost all metrics are tagged by the reconciler name, so you can see if any errors have occurred and can set up alerts for them in Prometheus .

### Monitor Config Sync with Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Default list of metrics in Cloud Monitoring Name Type api duration seconds Distribution apply duration seconds Distribution apply operations total Count declared resources Last Value internal errors total Count last sync timestamp Last Value pipeline error observed Last Value reconciler errors Last Value resource fights total Count reconcile duration seconds Distribution resource group total Last Value resource count Last Value ready resource count Last Value resource ns count Last Value cluster scoped resource count Last Value kcc resource count Gauge Note: Metrics without data don't appear in Metric Explorer.
- Almost all metrics are tagged by the reconciler name, so you can see if any errors have occurred and can set up alerts for them in Cloud Monitoring.
- The reconciler errors metric is labeled by component so you can see where any errors occurred.
- In the Select a metric drop-down list, add: custom.googleapis.com/opencensus/config sync/reconciler errors .

