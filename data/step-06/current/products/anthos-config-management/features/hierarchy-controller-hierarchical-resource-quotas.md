---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.254Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Hierarchy Controller hierarchical resource quotas"
feature_slug: "hierarchy-controller-hierarchical-resource-quotas"
latest_feature_date: "2021-02-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "quota across descendants"
  - "hierarchical namespace quotas"
  - "Hierarchical Resource Quotas"
  - "HNC quotas"
  - "quota enforcement hierarchy"
  - "Hierarchy Controller quotas"
  - "HRQs"
  - "HRQ"
---

# Hierarchy Controller hierarchical resource quotas

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Hierarchy Controller introduced a preview of Hierarchical Resource Quotas (HRQs) for quota enforcement across namespaces and descendants.

## Extended Definition

Hierarchy Controller introduced a preview of Hierarchical Resource Quotas (HRQs) for quota enforcement across namespaces and descendants.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- February 25, 2021 1.6.2 Feature Hierarchy Controller now includes a preview of Hierarchical Resource Quotas (HRQs).
- HRQs are drop-in replacements for Kubernetes Resource Quotas, but apply to resources in both a namespace as well as all of its descendants.
- 1.8.0 Change Editing rights to Hierarchical Resource Quotas are now aggregated into the cluster-wide 'edit' and 'admin' Cluster Roles.
- To learn more, see Using hierarchical resource quotas .

