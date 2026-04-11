---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.536Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "VolumeSnapshot v1beta1 API in Anthos clusters on Kubernetes 1.21"
feature_slug: "volumesnapshot-v1beta1-api-in-anthos-clusters-on-kubernetes-1-21"
latest_feature_date: "2021-09-30"
deprecation_date: "2021-09-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "snapshot.storage.k8s.io/v1beta1"
  - "remove VolumeSnapshot v1beta1"
  - "deprecated v1beta1 VolumeSnapshot"
  - "VolumeSnapshot v1beta1 API"
  - "VolumeSnapshot v1beta1"
  - "Kubernetes 1.21 snapshot API"
  - "v1beta1"
---

# VolumeSnapshot v1beta1 API in Anthos clusters on Kubernetes 1.21

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

The VolumeSnapshot resource API version v1beta1 is deprecated in Anthos clusters running Kubernetes 1.21; deprecated on 2021-09-30.

## Extended Definition

In Anthos clusters on AWS (previous generation), the VolumeSnapshot v1beta1 API family is part of a set of deprecated Kubernetes v1beta1 APIs that were removed from serving by the 1.23 release according to GKE on AWS release notes, specifically including VolumeSnapshot, VolumeSnapshotContents, and VolumeSnapshotClass. The notes also indicate Kubernetes 1.22 removes support for several deprecated v1beta1 APIs, showing this is a deprecation-removal sequence across versions. The provided evidence does not explicitly confirm the exact date of 2021-09-30 for this feature.

## Evidence Summary

The cited release notes page confirms that deprecated snapshot.storage.k8s.io v1beta1 APIs (including VolumeSnapshot resources) are removed by Kubernetes 1.23 and that 1.22 removes deprecated v1beta1 APIs.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- In a future release of 1.23 VolumeSnapshot v1beta1 APIs will no longer be served.
- Specifically, the VolumeSnapshot , VolumeSnapshotContents , and VolumeSnapshotClass v1beta1 APIs are no longer available.
- Deprecated Kubernetes 1.22 removes support for several deprecated v1beta1 APIs.

