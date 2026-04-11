---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.205Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync custom OCI signature verification"
feature_slug: "config-sync-custom-oci-signature-verification"
latest_feature_date: "2024-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "custom OCI signature verification"
  - "signature verification webhook"
  - "OCI signature check"
  - "signed OCI content"
  - "custom signature policy"
  - "OCI repository signatures"
  - "admission-based verification"
  - "admission webhook"
---

# Config Sync custom OCI signature verification

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync now supports custom signature verification for OCI repository-based configurations through an admission webhook.

## Extended Definition

Config Sync now supports custom signature verification for OCI repository-based configurations through an admission webhook.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Config Sync integrates with your existing signature verification server deployed as a Kubernetes admission webhook, which helps ensure only trusted OCI images are used in your deployments.
- 1.7.1 Fixed The Config Sync admission webhook in Anthos Config Management 1.7.0 would block requests when a managed resource in the cluster copied annotations to another resource.
- 1.18.0 Change Reduced memory footprint in reconcilers by not loading the OpenAPI when the Config Sync admission webhook is disabled.
- December 09, 2021 1.10.0 Breaking This note was updated on December 14, 2021: Config Sync admission webhook is disabled by default.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Uninstall Config Sync Caution: Deleting a RootSync or RepoSync object does not clean up Config Sync annotations and labels, and the Config Sync admission webhook denies requests trying to delete these resources if Config Sync is still enabled in the cluster.
- If you're using the Config Sync admission webhook (the admission webhook is disabled by default) and are installing Config Sync in a private cluster, add a firewall rule to allow port 10250 .
- The Config Sync admission webhook uses port 10250 for drift prevention.

