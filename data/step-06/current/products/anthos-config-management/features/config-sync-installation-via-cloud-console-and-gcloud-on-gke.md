---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.252Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync installation via Cloud Console and gcloud on GKE"
feature_slug: "config-sync-installation-via-cloud-console-and-gcloud-on-gke"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-default"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "Config Sync setup workflow"
  - "Cloud Console install"
  - "install on GKE"
  - "gcloud install command"
  - "Anthos Config Management install"
  - "console install"
  - "CLI install"
  - "Config Sync installation"
---

# Config Sync installation via Cloud Console and gcloud on GKE

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

GKE users can now install Config Sync using the Google Cloud Console or the gcloud command-line tool.

## Extended Definition

GKE users can now install Config Sync using the Google Cloud Console or the gcloud command-line tool.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-default](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-default)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly documents installing Config Sync on clusters using Google Cloud console and the Google Cloud CLI as supported installation methods.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Customize your Config Sync installation Stay organized with collections Save and categorize content based on your preferences.
- If the default installation instructions don't suit your needs, you might need to customize your Config Sync installation.
- Console Install Config Sync To install Config Sync, all clusters must be registered to a fleet.

### Install Config Sync with default settings \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-default](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-default)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is about installing Config Sync with default settings on GKE and includes GKE cluster setup instructions, which supports installation-related understanding but does not fully detail console-based install flow in the provided excerpt.

Evidence snippets:
- For instructions on installing Config Sync with advanced settings, see Customize your Config Sync installation .
- What's next Customize your Config Sync installation .

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- 1.20.0 Change To optimize resource use, Config Sync installations managed through Fleet no longer include the ConfigManagement Operator or the ConfigManagement CRD.
- Because the default value of this field is false , it causes Config Sync installations to fail when Terraform is upgraded to version 5.41.0.
- 1.18.1 Fixed Fixed an issue where Config Sync installation would fail when using a private registry with a specified port in the image URL.
- 1.5.0 Issue Anthos Config Management installs a resource-group-controller Deployment which fails on non-GKE clusters.

