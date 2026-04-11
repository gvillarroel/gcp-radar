---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.722Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Supported Kubernetes versions for new Anthos on Azure clusters"
feature_slug: "supported-kubernetes-versions-for-new-anthos-on-azure-clusters"
latest_feature_date: "2022-08-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes"
keywords:
  - "release build tags"
  - "1.21.14-gke.2100"
  - "supported build IDs"
  - "new cluster version list"
  - "cluster creation Kubernetes version"
  - "version matrix"
  - "1.23.8-gke.1700"
  - "1.22.12-gke.200"
---

# Supported Kubernetes versions for new Anthos on Azure clusters

Product: Anthos clusters on Azure
Coverage: HIGH

## Step 02 Summary

Added launch support for specific Kubernetes versions 1.23.8-gke.1700, 1.22.12-gke.200, and 1.21.14-gke.2100 in Anthos clusters on Azure.

## Extended Definition

Anthos on Azure supports launching new clusters with specific Kubernetes version build IDs. According to the GKE on Azure release notes, Google Cloud added support for cluster creation with versions 1.23.8-gke.1700, 1.22.12-gke.200, and 1.21.14-gke.2100. This capability was announced as a Feature release item dated August 4, 2022.

## Evidence Summary

The cited release-notes page directly lists those three Kubernetes version build IDs as newly supported for launching clusters on Anthos (GKE on Azure).

## Source Links

- [https://cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)

## Supporting Pages

### GKE on Azure release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/release-notes)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Security This release includes fixes for following CVEs: CVE-2022-1786 CVE-2022-29582 CVE-2022-29581 CVE-2022-1116 CVE-2022-34903 CVE-2021-4209 CVE-2022-29900 CVE-2022-29901 CVE-2022-2385 CVE-2022-1462 CVE-2022-1882 CVE-2022-21505 CVE-2022-2585 CVE-2022-23816 CVE-2022-2509 CVE-2022-2586 CVE-2022-2588 CVE-2022-26373 CVE-2022-36879 CVE-2022-36946 August 29, 2022 Security This release fixes the following vulnerabilities: CVE-2022-29901 CVE-2022-28693 CVE-2022-29900 CVE-2022-23825 CVE-2022-34903 CVE-2022-32208 CVE-2022-32206 CVE-2022-2097 CVE-2022-31030 CVE-2021-4209 Announcement You can now launch clusters with the following Kubernetes versions: 1.21.14-gke.2900 1.22.12-gke.1100 1.23.9-gke.800 August 04, 2022 Feature You can now launch clusters with the following Kubernetes versions: 1.23.8-gke.1700 1.22.12-gke.200 1.21.14-gke.2100 Security This release fixes the following vulnerabilities: CVE-2016-10228 .

