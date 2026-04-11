---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.215Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync spec.override.roleRefs field"
feature_slug: "rootsync-spec-override-rolerefs-field"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
keywords:
  - "custom role bindings"
  - "beyond cluster-admin"
  - "RootSync spec.override.roleRefs"
  - "spec.override.roleRefs"
  - "reconciler permissions"
  - "roleRefs field"
  - "roleRefs"
  - "RootSync API field"
---

# RootSync spec.override.roleRefs field

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Added the RootSync API field spec.override.roleRefs to allow customizing root reconciler permissions beyond cluster-admin.

## Extended Definition

Added the RootSync API field spec.override.roleRefs to allow customizing root reconciler permissions beyond cluster-admin.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)

## Supporting Pages

### RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RootSync and RepoSync fields RootSync and RepoSync resource objects have the same fields with the exception of the following RootSync-only fields: spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration for the source format Key Description spec.sourceFormat Specifies how the source of truth is formatted.
- Configuration for RBAC bindings (RootSync only) Key Description spec.override.roleRefs 1 roleRefs is a list of Roles or ClusterRoles to create bindings.

