---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.726Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Autoscaler minimum node count zero setting"
feature_slug: "autoscaler-minimum-node-count-zero-setting"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes"
keywords:
  - "autoscaling floor value"
  - "minimum node count"
  - "min node count 0"
  - "minimum 0 nodes"
  - "scale-to-zero"
  - "scale to 0"
  - "node pool autoscaler"
  - "autoscaler"
---

# Autoscaler minimum node count zero setting

Product: Anthos clusters on Azure
Coverage: HIGH

## Step 02 Summary

The autoscaler now supports setting the minimum node count to zero.

## Extended Definition

For Anthos Clusters on Azure, the Cluster Autoscaler feature added support for configuring a node pool’s minimum node count as 0. This setting allows the minimum autoscaling floor for that node pool to be set to zero nodes.

## Evidence Summary

The release notes explicitly state that this Anthos on Azure release includes the ability to set the autoscaler’s minimum node count to zero.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)

## Supporting Pages

### GKE on Azure release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Feature This release of Anthos Clusters on Azure adds the ability to update your control plane and node pool VM size cluster annotations Azure admin users control plane root volume size Feature You can now set the autoscaler's minimum node count to zero.
- Feature New features include: Private clusters with private IPs gcloud alpha container azure clusters and node-pools support Application-layer secrets encryption Choice of volume type, size, and customer-managed encryption keys Cluster Autoscaler Issue Current limitations include the following: Cluster updates are not supported.
- Scoped down coredns-autoscaler permissions for Nodes, ConfigMaps and Deployments.

