---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.220Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync Helm values file references"
feature_slug: "rootsync-and-reposync-helm-values-file-references"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
keywords:
  - "values files from ConfigMap"
  - "helm values file refs"
  - "Helm values file references"
  - "RepoSync Helm valuesFileRefs"
  - "RootSync Helm valuesFileRefs"
  - "spec.helm.valuesFileRefs"
  - "valuesFileRefs field"
  - "valuesFileRefs"
---

# RootSync and RepoSync Helm values file references

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

RootSync and RepoSync now support spec.helm.valuesFileRefs to specify Helm values files stored in ConfigMaps.

## Extended Definition

RootSync and RepoSync now support spec.helm.valuesFileRefs to specify Helm values files stored in ConfigMaps.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)

## Supporting Pages

### RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Default: false . spec.helm.valuesFileRefs A list of references to objects in the cluster that represent values to use instead of the default values that accompany the chart.
- For example: values : foo : bar : val1 quz : - val2 - val3 If valuesFileRefs is also specified, fields from values override fields from valuesFileRefs .
- To change the valuesFile after syncing, you must create a ConfigMap with a different name and update the RootSync or RepoSync spec.valuesFileRefs.name .
- If spec.helm.values is also specified, fields from values override fields from valuesFileRefs .

