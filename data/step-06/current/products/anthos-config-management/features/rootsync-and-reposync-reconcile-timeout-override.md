---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.240Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync reconcile timeout override"
feature_slug: "rootsync-and-reposync-reconcile-timeout-override"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
keywords:
  - "RepoSync reconcile timeout"
  - "RootSync reconcile timeout"
  - "apply group timeout"
  - "spec.override.reconcileTimeout"
  - "reconcileTimeout field"
  - "reconcileTimeout"
---

# RootSync and RepoSync reconcile timeout override

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Added the spec.override.reconcileTimeout field in RootSync and RepoSync to set the reconciliation timeout for an apply group.

## Extended Definition

Added the spec.override.reconcileTimeout field in RootSync and RepoSync to set the reconciliation timeout for an apply group.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)

## Supporting Pages

### RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Configuration for overriding the reconcile timeout Key Description spec.override.reconcileTimeout 1 reconcileTimeout lets you override the threshold for how long to wait for resources in an apply group to reconcile before giving up.

