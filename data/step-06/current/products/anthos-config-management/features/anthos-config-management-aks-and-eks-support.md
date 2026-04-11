---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.259Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Anthos Config Management AKS and EKS support"
feature_slug: "anthos-config-management-aks-and-eks-support"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "Amazon Elastic Kubernetes Service"
  - "GA on AKS"
  - "GA on EKS"
  - "Azure Kubernetes Service"
  - "Anthos Config Management on AKS"
  - "Anthos Config Management on EKS"
  - "Kubernetes 1.16"
  - "AKS"
---

# Anthos Config Management AKS and EKS support

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Anthos Config Management became generally available on AKS and EKS clusters running Kubernetes 1.16 or higher.

## Extended Definition

Anthos Config Management became generally available on AKS and EKS clusters running Kubernetes 1.16 or higher.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- June 25, 2020 1.4.0 Feature Anthos Config Management is now Generally Available on AKS (Kubernetes v1.16 or higher) and EKS (Kubernetes v1.16 or higher).
- This has no effect on Config Sync running on the cluster, but breaks validation when running nomos vet manually against hierarchical repositories.
- 1.4.0 Issue Config Connector is not currently supported on EKS or AKS, as it is unable to run on these providers.
- 1.8.1 Fixed An issue introduced in 1.8.0 nomos hydrate that breaks support for --clusters has been fixed.

