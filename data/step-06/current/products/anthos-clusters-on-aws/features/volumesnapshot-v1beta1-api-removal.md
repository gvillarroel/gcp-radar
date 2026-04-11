---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.363Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "VolumeSnapshot v1beta1 API removal"
feature_slug: "volumesnapshot-v1beta1-api-removal"
latest_feature_date: "2023-09-06"
deprecation_date: "2023-09-06"
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "CSI snapshot APIs"
  - "snapshot webhook"
  - "snapshot controller"
  - "v1beta1 deprecation"
  - "snapshot v1beta1"
  - "VolumeSnapshotContents"
  - "VolumeSnapshotClass"
  - "API removed"
---

# VolumeSnapshot v1beta1 API removal

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

The VolumeSnapshot, VolumeSnapshotContents, and VolumeSnapshotClass Kubernetes v1beta1 APIs are no longer available in the upgraded snapshot controller and webhook stack; deprecated on 2023-09-06.

## Extended Definition

In the GKE on AWS release notes, the Kubernetes CSI snapshot APIs `VolumeSnapshot`, `VolumeSnapshotContents`, and `VolumeSnapshotClass` at version `v1beta1` are stated as no longer available. The notes also state that in a future 1.23 release, the `v1beta1` snapshot APIs will no longer be served, indicating deprecation and removal of that API version.

## Evidence Summary

The release notes page is the source for the feature change, explicitly listing the `v1beta1` VolumeSnapshot API types as removed and confirming they will no longer be served in the 1.23 release track.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Specifically, the VolumeSnapshot , VolumeSnapshotContents , and VolumeSnapshotClass v1beta1 APIs are no longer available.
- In a future release of 1.23 VolumeSnapshot v1beta1 APIs will no longer be served.

