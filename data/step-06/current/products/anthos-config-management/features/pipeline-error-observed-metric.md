---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.246Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "pipeline_error_observed metric"
feature_slug: "pipeline-error-observed-metric"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "pipeline_error_observed metric"
  - "pipeline_error_observed"
  - "pipeline error observed"
  - "error observed metric"
  - "readiness errors metric"
  - "rendering errors metric"
  - "source errors metric"
  - "sync errors metric"
---

# pipeline_error_observed metric

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Adds the metric pipeline_error_observed to report errors across rendering, sync, source, and readiness stages.

## Extended Definition

Adds the metric pipeline_error_observed to report errors across rendering, sync, source, and readiness stages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync metrics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitoring-config-sync)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Understand the pipeline error observed metric The pipeline error observed metric is a metric that can help you quickly identify RepoSync or RootSync CRs that are not in sync or contain resources that are not reconciled to the desired state.
- Name Type Tags Description rg reconcile duration seconds Distribution stallreason The distribution of time taken to reconcile a ResourceGroup CR resource group total Last Value The current number of ResourceGroup CRs resource count Last Value resourcegroup The total number of resources tracked by a ResourceGroup ready resource count Last Value resourcegroup The total number of ready resources in a ResourceGroup resource ns count Last Value resourcegroup The number of namespaces used by resources in a ResourceGroup cluster scoped resource count Last Value resourcegroup The number of cluster scoped resources in a ResourceGroup crd count Last Value resourcegroup The number of CRDs in a ResourceGroup kcc resource count Last Value resourcegroup The total number of KCC resources in a ResourceGroup pipeline error observed Last Value name, reconciler, component The status of RootSync and RepoSync custom resources.
- Metric might not appear in query results if no internal error has happened. last sync timestamp Last Value status The timestamp of the most recent sync from Git. parser duration seconds Distribution status, trigger, source The latency distribution of different stages involved in syncing from source of truth to a cluster. pipeline error observed Last Value name, reconciler, component The status of RootSync and RepoSync custom resources.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- 1.13.1 Fixed Fixed a Prometheus exporter error in the otel-collector by resolving a discrepancy between components regarding the description of the pipeline error observed metric .
- 1.10.0 Feature Added a new metric pipeline error observed to capture if there is any error from different stages: rendering, sync, source, readiness.

