---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.365Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "etcd v3.4.21 for new clusters"
feature_slug: "etcd-v3-4-21-for-new-clusters"
latest_feature_date: "2023-05-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "cluster state store"
  - "etcd v3.4.21"
  - "etcd upgrade"
  - "default etcd version"
  - "etcd version default"
  - "new cluster etcd"
  - "etcd 3.4.21"
  - "default etcd"
---

# etcd v3.4.21 for new clusters

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

Newly created clusters on Anthos for AWS now default to etcd v3.4.21.

## Extended Definition

In Anthos clusters on AWS (GKE on AWS), the release noted that newly-created clusters now default to etcd version 3.4.21. This means the default cluster state store version for new cluster provisioning is set to v3.4.21, which was done for improved stability.

## Evidence Summary

The cited GKE on AWS release notes explicitly state that newly-created clusters now use default etcd v3.4.21 for improved stability.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Changed default etcd version to v3.4.21 on new clusters for improved stability.
- Newly-created clusters now use etcd v3.4.21 for improved stability.

