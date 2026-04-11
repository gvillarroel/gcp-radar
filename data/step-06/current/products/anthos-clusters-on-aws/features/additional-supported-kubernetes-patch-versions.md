---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.377Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Additional supported Kubernetes patch versions"
feature_slug: "additional-supported-kubernetes-patch-versions"
latest_feature_date: "2022-08-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "supported cluster patch level"
  - "1.21.14-gke.2100"
  - "supported patch releases"
  - "patch release support"
  - "supported Kubernetes patch versions"
  - "1.23.8-gke.1700"
  - "patch versions"
  - "1.22.12-gke.200"
---

# Additional supported Kubernetes patch versions

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

The service added support to launch clusters using Kubernetes versions 1.23.8-gke.1700, 1.22.12-gke.200, and 1.21.14-gke.2100.

## Extended Definition

For Anthos clusters on AWS, this feature corresponds to a documented release-note update stating that clusters can be launched using additional Kubernetes patch versions. In the August 4, 2022 release entry, support to launch clusters with patch versions 1.23.8-gke.1700, 1.22.12-gke.200, and 1.21.14-gke.2100 was added.

## Evidence Summary

The official GKE on AWS release notes explicitly list a feature dated Aug 4, 2022 adding those three Kubernetes patch versions to the supported cluster launch versions.

## Source Links

- [https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Security This release fixes the following vulnerabilities: CVE-2022-34903 CVE-2021-4209 CVE-2022-29900 CVE-2022-29901 CVE-2022-2385 CVE-2022-1462 CVE-2022-1882 CVE-2022-21505 CVE-2022-2585 CVE-2022-23816 CVE-2022-2509 CVE-2022-2586 CVE-2022-2588 CVE-2022-26373 CVE-2022-36879 CVE-2022-36946 August 29, 2022 Security This release fixes the following vulnerabilities: CVE-2022-29901 CVE-2022-28693 CVE-2022-29900 CVE-2022-23825 CVE-2022-34903 CVE-2022-32208 CVE-2022-32206 CVE-2022-2097 CVE-2022-31030 CVE-2021-4209 Announcement You can now launch clusters with the following Kubernetes versions: 1.21.14-gke.2900 1.22.12-gke.1100 1.23.9-gke.800 August 04, 2022 Feature You can now launch clusters with the following Kubernetes versions: 1.23.8-gke.1700 1.22.12-gke.200 1.21.14-gke.2100 Security This release fixes the following vulnerabilities: CVE-2016-10228 .
- This issue is resolved in the new Kubernetes patch versions 1.23.9-gke.2200 and 1.24.3-gke.2200.

