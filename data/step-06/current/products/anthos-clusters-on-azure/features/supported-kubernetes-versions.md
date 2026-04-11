---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.714Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Supported Kubernetes Versions"
feature_slug: "supported-kubernetes-versions"
latest_feature_date: "2023-04-05"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes"
keywords:
  - "1.24.10-gke.1200"
  - "1.23.16-gke.2800"
  - "k8s patch versions"
  - "1.23.16-gke.200"
  - "1.25.6-gke.1600"
  - "1.25.5-gke.2000"
  - "1.24.9-gke.2000"
  - "version matrix"
---

# Supported Kubernetes Versions

Product: Anthos clusters on Azure
Coverage: HIGH

## Step 02 Summary

Clusters can now be launched with Kubernetes versions 1.23.16-gke.2800, 1.24.10-gke.1200, and 1.25.6-gke.1600; Clusters can now be launched with Kubernetes versions 1.23.16-gke.200, 1.24.9-gke.2000, and 1.25.5-gke.2000.

## Extended Definition

For Anthos clusters on Azure, the **Supported Kubernetes Versions** feature describes which GKE-formatted Kubernetes patch versions are available when launching clusters. In the cited release notes, Google states that cluster launch support was added for Kubernetes versions 1.23.16-gke.2800, 1.24.10-gke.1200, and 1.25.6-gke.1600 on April 5, 2023, and for 1.23.16-gke.200, 1.24.9-gke.2000, and 1.25.5-gke.2000 on March 7, 2023.

## Evidence Summary

The cited GKE on Azure release notes provide explicit date-stamped announcements of newly launchable Kubernetes patch versions, directly supporting the feature’s version-support behavior.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)

## Supporting Pages

### GKE on Azure release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: The release notes explicitly list current launchable and retired Kubernetes patch versions, directly defining supported version availability.

Evidence snippets:
- April 05, 2023 Feature You can now launch clusters with the following Kubernetes versions: 1.23.16-gke.2800 1.24.10-gke.1200 1.25.6-gke.1600 Fixed This release fixes the following vulnerabilities: CVE-2023-25153 CVE-2023-25173 CVE-2023-0286 CVE-2022-4450 CVE-2023-0215 CVE-2022-2097 CVE-2022-4304 Fixed Fixed an issue that could cause cluster upgrades to fail if certain types of validating admission webhooks are registered. (1.24 only) Fixed Cilium security ID propagation so that IDs are properly passed in the tunnel header when requests are forwarded to Services of type NodePort and LoadBalancer.
- March 07, 2023 Feature You can now launch clusters with the following Kubernetes versions: 1.23.16-gke.200 1.24.9-gke.2000 1.25.5-gke.2000 Fixed Fixed an issue where certain errors weren't propagated and reported during cluster create/update operations.

