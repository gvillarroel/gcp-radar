---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.543Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Volume snapshot support"
feature_slug: "volume-snapshot-support"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage"
keywords:
  - "snapshot restore"
  - "snapshot feature"
  - "volume snapshot support"
  - "snapshot management"
  - "snapshot creation"
  - "volume snapshots"
  - "volume snapshot"
  - "snapshot support"
---

# Volume snapshot support

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

GKE on AWS 1.5.0 added support for volume snapshots.

## Extended Definition

Volume snapshot support in Anthos clusters on AWS enables snapshotting of storage volumes using the Kubernetes VolumeSnapshot resource. The documentation indicates that Kubernetes storage features such as volume snapshots are supported when CSI drivers are used.

## Evidence Summary

The referenced page identifies VolumeSnapshot as the mechanism for creating volume snapshots and specifies that new Kubernetes snapshot-related storage features in this context depend on CSI driver support.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)

## Supporting Pages

### Storage overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Using volume snapshots You can use the VolumeSnapshot resource to create snapshots of storage volumes.
- New Kubernetes storage features, such as volume snapshots, are supported only with CSI drivers.

