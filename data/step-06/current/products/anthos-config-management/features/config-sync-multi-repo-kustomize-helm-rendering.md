---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.246Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync multi-repo Kustomize/Helm rendering"
feature_slug: "config-sync-multi-repo-kustomize-helm-rendering"
latest_feature_date: "2021-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "root kustomization.yaml"
  - "kustomization.yaml root"
  - "multi-repo mode"
  - "multi-repo rendering"
  - "multi-repo Config Sync"
  - "Kustomize rendering"
  - "Helm rendering"
  - "sync directory"
---

# Config Sync multi-repo Kustomize/Helm rendering

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Adds support for rendering Kustomize configurations and Helm charts in multi-repo mode, requiring a root kustomization.yaml file in the sync directory.

## Extended Definition

Adds support for rendering Kustomize configurations and Helm charts in multi-repo mode, requiring a root kustomization.yaml file in the sync directory.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- 1.7.0 Issue Config Sync multi-repo mode can't update the reconciler deployment image version when upgrading from 1.6.2 or later because of a new label removed from the immutable label selector.
- 1.6.2 Issue Config Sync multi-repo mode can't update the reconciler deployment image version in the upgrade process because of a new label added to the immutable label selector.
- If you are using kubectl to install and manage Config Sync, you can enable multi-repo mode by setting spec.enableMultiRepo: true in your ConfigManagement object.
- If you use Config Sync in multi-repo mode in private GKE clusters, you no longer need to add a firewall rule to open port 8676.

