---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.249Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync/RepoSync resource limit override"
feature_slug: "rootsync-reposync-resource-limit-override"
latest_feature_date: "2021-08-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "container limits override"
  - "reconciler container resources"
  - "RepoSync resource limits"
  - "RootSync resource limits"
  - "git-sync container resources"
  - "spec.override.resources"
  - "resource override"
  - "override resources"
---

# RootSync/RepoSync resource limit override

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Allows RootSync and RepoSync to override reconciler and git-sync container resource limits via spec.override.resources.

## Extended Definition

Allows RootSync and RepoSync to override reconciler and git-sync container resource limits via spec.override.resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- December 08, 2022 1.14.0 Breaking The following five metrics are removed because these metrics aren't needed for monitoring system performance or health: rendering count skip rendering count resource override count git sync depth override count no ssl verify count For information on current metrics, see Monitor Config Sync .
- March 24, 2022 1.11.0 Feature Updated the spec.override.resources field on RootSync and RepoSync to let you override the default resource amounts (for example, CPU or memory) requested by the corresponding containers of the reconciler Deployment.
- 1.8.2 Feature Config Sync provides a way for users to override some system values: Use the spec.override.resources field of a RootSync or RepoSync object to override the resource limits for the reconciler container and the git-sync container.
- 1.14.2 Fixed Updated the spec.override.resources field on RootSync and RepoSync objects to let you override the default resource amounts (for example, CPU or memory) requested by the helm-sync container.

