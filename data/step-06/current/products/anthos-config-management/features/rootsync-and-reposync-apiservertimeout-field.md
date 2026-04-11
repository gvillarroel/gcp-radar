---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.235Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync apiServerTimeout field"
feature_slug: "rootsync-and-reposync-apiservertimeout-field"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "API server request timeout"
  - "spec.override.apiServerTimeout"
  - "API request timeout"
  - "apiServerTimeout field"
  - "apiServerTimeout"
  - "Config Sync override field"
  - "RepoSync spec"
  - "RootSync spec"
---

# RootSync and RepoSync apiServerTimeout field

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

A new `spec.override.apiServerTimeout` field was added to `RootSync` and `RepoSync` to set API server request timeouts.

## Extended Definition

A new `spec.override.apiServerTimeout` field was added to `RootSync` and `RepoSync` to set API server request timeouts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Configuration for overriding the timeout for requests to the API server Key Description spec.override.apiServerTimeout 1 apiServerTimeout lets you override the timeout for requests to the API server.
- To change the valuesFile after syncing, you must create a ConfigMap with a different name and update the RootSync or RepoSync spec.valuesFileRefs.name .

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- This allows more requests to succeed with fewer retries when the control plane is under load, and reduces the need to override the timeout with spec.override.apiServerTimeout in RootSync and RepoSync.
- 1.14.0 Feature Added a field spec.override.apiServerTimeout in RootSync and RepoSync, for configuring the timeout for requests to the API server.

