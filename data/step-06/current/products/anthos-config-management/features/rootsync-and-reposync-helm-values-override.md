---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.236Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync Helm values override"
feature_slug: "rootsync-and-reposync-helm-values-override"
latest_feature_date: "2022-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "Helm values block"
  - "default Helm values"
  - "Helm values override"
  - "spec.helm.values"
  - "helm.values"
  - "RepoSync spec.helm"
  - "RootSync spec.helm"
---

# RootSync and RepoSync Helm values override

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

RootSync and RepoSync now support the spec.helm.values field for overriding default Helm chart values.

## Extended Definition

RootSync and RepoSync now support the spec.helm.values field for overriding default Helm chart values.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If deployNamespace is not set, resources where metadata.namespace is not set are deployed to the default namespace. spec.helm.values Values to use instead of default values that accompany the chart.
- Default: false . spec.helm.valuesFileRefs A list of references to objects in the cluster that represent values to use instead of the default values that accompany the chart.
- If spec.helm.values is also specified, fields from values override fields from valuesFileRefs .

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- October 27, 2022 1.13.1 Feature Added the spec.helm.values field in RootSync and RepoSync to allow overriding the default values that accompany the Helm chart.
- 1.16.0 Feature Added a new field spec.helm.valuesFileRefs in RootSync and RepoSync to allow specifying Helm values files in ConfigMaps.

