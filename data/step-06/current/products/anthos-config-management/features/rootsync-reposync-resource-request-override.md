---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.243Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync/RepoSync resource request override"
feature_slug: "rootsync-reposync-resource-request-override"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "reconciler deployment container requests"
  - "CPU request override"
  - "CPU/memory override"
  - "memory request override"
  - "RepoSync spec.override.resources"
  - "RootSync spec.override.resources"
  - "spec.override.resources"
  - "resource override"
---

# RootSync/RepoSync resource request override

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Updates RootSync and RepoSync spec.override.resources to let operators override default CPU and memory requests used by reconciler deployment containers.

## Extended Definition

Updates RootSync and RepoSync spec.override.resources to let operators override default CPU and memory requests used by reconciler deployment containers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- December 08, 2022 1.14.0 Breaking The following five metrics are removed because these metrics aren't needed for monitoring system performance or health: rendering count skip rendering count resource override count git sync depth override count no ssl verify count For information on current metrics, see Monitor Config Sync .
- March 24, 2022 1.11.0 Feature Updated the spec.override.resources field on RootSync and RepoSync to let you override the default resource amounts (for example, CPU or memory) requested by the corresponding containers of the reconciler Deployment.
- 1.8.2 Feature Config Sync provides a way for users to override some system values: Use the spec.override.resources field of a RootSync or RepoSync object to override the resource limits for the reconciler container and the git-sync container.
- 1.14.2 Fixed Updated the spec.override.resources field on RootSync and RepoSync objects to let you override the default resource amounts (for example, CPU or memory) requested by the helm-sync container.

