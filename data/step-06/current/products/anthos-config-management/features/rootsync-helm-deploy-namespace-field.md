---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.223Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync Helm deploy namespace field"
feature_slug: "rootsync-helm-deploy-namespace-field"
latest_feature_date: "2023-05-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
keywords:
  - "RootSync spec.helm.deployNamespace"
  - "RootSync Helm deploy namespace"
  - "RootSync helm deployNamespace"
  - "spec.helm.deployNamespace"
  - "rendered Helm chart namespace"
  - "deployNamespace field"
  - "deployNamespace"
---

# RootSync Helm deploy namespace field

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

RootSync now supports the spec.helm.deployNamespace field to specify the namespace where the rendered Helm chart is deployed.

## Extended Definition

RootSync now supports the spec.helm.deployNamespace field to specify the namespace where the rendered Helm chart is deployed.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)

## Supporting Pages

### RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RootSync and RepoSync fields RootSync and RepoSync resource objects have the same fields with the exception of the following RootSync-only fields: spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration for the source format Key Description spec.sourceFormat Specifies how the source of truth is formatted.
- If the chart version is specified as a single static version, the chart is not re-pulled. spec.helm.releaseName The name of the Helm release. spec.helm.namespace This is mutually exclusive with spec.helm.deployNamespace . namespace sets the target namespace for a release.
- Default: default spec.helm.deployNamespace This is mutually exclusive with spec.helm.namespace . deployNamespace specifies which namespace to deploy the chart.
- If deployNamespace is not set, resources where metadata.namespace is not set are deployed to the default namespace. spec.helm.values Values to use instead of default values that accompany the chart.

