---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.728Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Windows node pool image type preview"
feature_slug: "windows-node-pool-image-type-preview"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes"
keywords:
  - "Windows image selection"
  - "imageType Windows"
  - "Windows nodes"
  - "node pool image type"
  - "image type"
  - "Windows node pool"
  - "Windows preview"
  - "Kubernetes 1.22.8"
---

# Windows node pool image type preview

Product: Anthos clusters on Azure
Coverage: HIGH

## Step 02 Summary

Anthos on Azure now offers a preview option to choose Windows as the node pool image type for Kubernetes 1.22.8 clusters.

## Extended Definition

In Anthos clusters on Azure, this preview feature allows users to select **Windows** as the node pool image type when creating node pools on Kubernetes version **1.22.8**. The release notes describe this capability as preview-only, indicating it was introduced experimentally rather than as a generally available option. No additional usage constraints are stated in the provided excerpt.

## Evidence Summary

The release-notes page explicitly states that as a preview feature, Windows can be chosen as a node pool image type when creating node pools with Kubernetes 1.22.8.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)

## Supporting Pages

### GKE on Azure release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Feature As a preview feature, you can now choose Windows as your node pool image type when you create node pools with Kubernetes version 1.22.8.
- June 06, 2022 Announcement You can now launch clusters with the following Kubernetes versions: 1.21.11-gke.1800 1.22.8-gke.2100 Change Windows nodes on 1.22.8-gke.2100 now use pigz to improve image layer extraction performance.
- May 09, 2022 Announcement You can now launch clusters with Kubernetes versions 1.21.11-gke.1100 and 1.22.8-gke.1300 Fixed In 1.22.8-gke.1300, fixed an issue where add ons cannot be applied when Windows node pools are enabled.
- Feature Anthos clusters on Azure now supports Cloud Monitoring for Windows node pools from Kubernetes version 1.24 and later.

