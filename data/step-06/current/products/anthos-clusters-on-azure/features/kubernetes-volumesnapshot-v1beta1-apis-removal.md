---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.710Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Kubernetes VolumeSnapshot v1beta1 APIs Removal"
feature_slug: "kubernetes-volumesnapshot-v1beta1-apis-removal"
latest_feature_date: "2023-09-06"
deprecation_date: "2023-09-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes"
keywords:
  - "snapshot webhook"
  - "VolumeSnapshotContents v1beta1"
  - "VolumeSnapshotClass v1beta1"
  - "snapshot-controller"
  - "VolumeSnapshot API removal"
  - "v1beta1 API removed"
  - "VolumeSnapshot v1beta1"
  - "v1beta1 removal"
---

# Kubernetes VolumeSnapshot v1beta1 APIs Removal

Product: Anthos clusters on Azure
Coverage: MEDIUM

## Step 02 Summary

The v1beta1 APIs VolumeSnapshot, VolumeSnapshotContents, and VolumeSnapshotClass are no longer available after the snapshot-controller and webhook update; deprecated on 2023-09-06.

## Extended Definition

This feature is the removal of the Kubernetes snapshot APIs `VolumeSnapshot`, `VolumeSnapshotContents`, and `VolumeSnapshotClass` at version `v1beta1` for Anthos clusters on Azure. Google’s GKE on Azure release notes state that these `v1beta1` APIs are no longer available and, in a future 1.23 release, will no longer be served, and this change is associated with an upgrade of `snapshot-controller` and `csi-snapshot-validation-webhook` to v6.2.2. The provided evidence supports that the feature is an API removal tied to snapshot-controller/webhook component updates rather than a new API introduction.

## Evidence Summary

The cited release note page confirms that the Kubernetes `VolumeSnapshot` v1beta1 APIs were removed/no longer served in Anthos on Azure and links that change to the snapshot-controller/webhook update to v6.2.2.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)

## Supporting Pages

### GKE on Azure release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Specifically, the VolumeSnapshot , VolumeSnapshotContents , and VolumeSnapshotClass v1beta1 APIs are no longer available.
- In a future release of 1.23 VolumeSnapshot v1beta1 APIs will no longer be served.
- Upgraded the snapshot-controller and csi-snapshot-validation-webhook to v6.2.2.

