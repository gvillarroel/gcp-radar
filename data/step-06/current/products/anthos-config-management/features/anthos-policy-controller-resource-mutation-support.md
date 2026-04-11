---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.253Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Anthos Policy Controller resource mutation support"
feature_slug: "anthos-policy-controller-resource-mutation-support"
latest_feature_date: "2021-06-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/configs"
keywords:
  - "mutating webhook"
  - "mutation webhook support"
  - "mutating resources"
  - "Anthos Policy Controller mutation"
  - "preview resource mutation"
  - "resource mutation"
  - "mutation"
---

# Anthos Policy Controller resource mutation support

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Anthos Policy Controller added preview support for users to mutate resources.

## Extended Definition

Anthos Policy Controller added preview support for users to mutate resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/configs](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/configs)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The client.lifecycle.config.k8s.io/mutation: ignore annotation was not always effective, causing Config Sync to potentially overwrite changes made directly to annotated resources in the cluster.
- July 24, 2025 1.21.3 Fixed Fixed a regression introduced in 1.21.0 that occasionally caused Config Sync to become stuck when applying mutation ignored objects .
- 1.23.0 Change Config Sync now supports the client.lifecycle.config.k8s.io/mutation: ignore annotation for compatibility with other controllers.
- 1.10.0 Announcement The Policy Controller feature to support mutation is generally available (GA).

### "Organize configuration files in a source of truth \_|\_ Config Sync \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/configs](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/configs)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Ignore object mutations If you don't want Config Sync to maintain the state of the object in the cluster after it exists, add the client.lifecycle.config.k8s.io/mutation: ignore annotation to the object that you want Config Sync to ignore mutations in.
- The following example shows you how to add the annotation to an object: metadata : annotations : client.lifecycle.config.k8s.io/mutation : ignore You cannot manually modify this annotation on managed objects in the cluster.

