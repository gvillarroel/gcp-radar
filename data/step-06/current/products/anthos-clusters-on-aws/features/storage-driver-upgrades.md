---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.368Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Storage driver upgrades"
feature_slug: "storage-driver-upgrades"
latest_feature_date: "2023-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage"
keywords:
  - "storage driver upgrade"
  - "storage plugin update"
  - "storage driver update"
  - "driver version upgrade"
  - "CSI driver version"
  - "storage drivers"
  - "CSI updates"
---

# Storage driver upgrades

Product: Anthos clusters on AWS
Coverage: LOW

## Step 02 Summary

Storage drivers were upgraded in Anthos clusters on AWS.

## Extended Definition

In Anthos clusters on AWS (GKE on AWS), storage drivers are provisioned through specific volume drivers, including CSI drivers, and the EBS CSI Driver version is tied to the Kubernetes version used by the cluster. This means driver version changes are coupled to cluster Kubernetes versioning rather than documented as standalone, manual driver-specific upgrades.

## Evidence Summary

The cited storage overview page confirms the available volume drivers for GKE on AWS and explicitly states that the EBS CSI Driver version is linked to the Kubernetes version.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)

## Supporting Pages

### Storage overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: STRONG
- Re-rank rationale: The page explains that the EBS CSI driver is tied to the GKE on AWS Kubernetes version and is automatically updated when the cluster version is upgraded, directly describing the storage driver upgrade behavior.

Evidence snippets:
- Specific storage drivers The following volume drivers can be used with GKE on AWS.
- The EBS CSI Driver version is tied to a GKE on AWS Kubernetes version.

