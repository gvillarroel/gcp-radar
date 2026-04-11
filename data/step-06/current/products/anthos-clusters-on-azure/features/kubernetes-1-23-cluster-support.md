---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.724Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Kubernetes 1.23 cluster support"
feature_slug: "kubernetes-1-23-cluster-support"
latest_feature_date: "2022-07-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes"
keywords:
  - "Anthos Azure supported releases"
  - "create cluster version"
  - "kubernetesVersion"
  - "supported Kubernetes version"
  - "K8s 1.23"
  - "cluster version 1.23"
  - "Kubernetes 1.23.x"
  - "Kubernetes 1.23"
---

# Kubernetes 1.23 cluster support

Product: Anthos clusters on Azure
Coverage: HIGH

## Step 02 Summary

Added support to launch Kubernetes 1.23 clusters on Anthos clusters on Azure.

## Extended Definition

Anthos clusters on Azure introduced support for launching clusters running Kubernetes 1.23 starting with the July 13, 2022 release. The release notes explicitly list 1.23.7-gke.1300 in the supported versions and state that users can now launch Kubernetes 1.23 clusters.

## Evidence Summary

The cited release-notes page documents the 2022-07-13 announcement that introduces Kubernetes 1.23 launch support and includes the exact 1.23 version string in the supported versions list.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)

## Supporting Pages

### GKE on Azure release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- July 13, 2022 Announcement You can now launch clusters with the following Kubernetes versions: 1.23.7-gke.1300 1.22.10-gke.1500 1.21.11-gke.1900 Feature You can now launch Kubernetes 1.23 clusters.
- Kubernetes 1.23.7-gke.1300 includes the following changes: Disable profiling endpoint ( /debug/pprof ) by default in kube-scheduler and kube-controller-manager.
- Feature In Kubernetes 1.23 and higher, cluster Cloud Audit Logs is now available and is enabled by default.
- Feature CIS benchmarks are now available for Kubernetes 1.23 clusters.

