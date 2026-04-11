---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.725Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "VolumeSnapshot v1beta1 API deprecation"
feature_slug: "volumesnapshot-v1beta1-api-deprecation"
latest_feature_date: "2022-07-13"
deprecation_date: "2022-07-13"
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes"
keywords:
  - "snapshot.storage.k8s.io/v1beta1"
  - "API deprecation warning"
  - "migrate to v1"
  - "v1beta1 snapshot API"
  - "future 1.23 removal"
  - "VolumeSnapshot v1"
  - "snapshot v1beta1"
  - "VolumeSnapshot v1beta1"
---

# VolumeSnapshot v1beta1 API deprecation

Product: Anthos clusters on Azure
Coverage: HIGH

## Step 02 Summary

Noted that VolumeSnapshot v1beta1 APIs will be removed from serving in a future Kubernetes 1.23 release and workloads should migrate to VolumeSnapshot v1; deprecated on 2022-07-13.

## Extended Definition

The feature is a deprecation/removal notice in GKE on Azure stating that the Kubernetes `snapshot.storage.k8s.io/v1beta1` API (`VolumeSnapshot v1beta1`) will no longer be served in a future Kubernetes 1.23 release. It specifically instructs users to migrate workloads to the `VolumeSnapshot v1` API as soon as possible.

## Evidence Summary

The cited release notes explicitly state that `VolumeSnapshot v1beta1` will cease being served in a future 1.23 release and recommend migrating to `VolumeSnapshot v1`.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)

## Supporting Pages

### GKE on Azure release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- In a future release of 1.23 VolumeSnapshot v1beta1 APIs will no longer be served.
- Please update to VolumeSnapshot v1 APIs as soon as possible.

