---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.206Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync stopSyncing field"
feature_slug: "config-sync-stopsyncing-field"
latest_feature_date: "2024-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "spec.configSync.stopSyncing"
  - "sync disable flag"
  - "stopSyncing field"
  - "sync pause field"
  - "resume syncing"
  - "pause syncing"
  - "stopSyncing"
  - "RepoSync spec"
---

# Config Sync stopSyncing field

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync introduces the spec.configSync.stopSyncing field to pause and resume syncing behavior.

## Extended Definition

Config Sync introduces the spec.configSync.stopSyncing field to pause and resume syncing behavior.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The new field makes it easier to pause syncing by setting the spec.configSync.stopSyncing field to true .

