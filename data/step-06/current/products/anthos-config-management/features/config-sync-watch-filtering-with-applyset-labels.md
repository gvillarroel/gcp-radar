---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.208Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync watch filtering with ApplySet labels"
feature_slug: "config-sync-watch-filtering-with-applyset-labels"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "watch filter labels"
  - "resource watch selector"
  - "ApplySet annotations"
  - "watch filtering"
  - "ApplySet labels"
  - "reconciler Deployment memory"
  - "watch labels"
  - "ApplySet"
---

# Config Sync watch filtering with ApplySet labels

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync uses ApplySet labels and annotations for watch filtering to reduce reconciler Deployment memory usage.

## Extended Definition

Config Sync uses ApplySet labels and annotations for watch filtering to reduce reconciler Deployment memory usage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync-managed labels and annotations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: The page lists Config Sync-managed ApplySet labels and related metadata fields, which helps identify the labels used for object grouping, but it does not explain watch filtering or reconciler memory-usage effects.

Evidence snippets:
- Annotations Annotation Description Safe to modify applyset.kubernetes.io/tooling: configsync.gke.io/v1 Indicates that the ApplySet specified by the applyset.kubernetes.io/id label is managed by Config Sync.
- No. applyset.kubernetes.io/id: APPLYSET ID Indicates that the RootSync or RepoSync object is the parent of the specified ApplySet.
- No. applyset.kubernetes.io/part-of: APPLYSET ID Indicates that the resource object is a member of the specified ApplySet.
- Only set on ApplySet parents, not members.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- 1.19.0 Feature Optimized Config Sync resource usage by implementing watch filtering with ApplySet ("applyset.kubernetes.io/" labels and annotations).
- 1.20.0 Fixed Fixed a bug that prevented the applyset.kubernetes.io/part-of label from being correctly removed from managed objects when they were no longer managed by Config Sync.
- This reduces reconciler Deployment memory consumption by limiting events and cached objects to those relevant to the managed package.
- For more information on the resource usage optimization, see Config Sync Watch Filtering v1.18 vs v1.19 .

