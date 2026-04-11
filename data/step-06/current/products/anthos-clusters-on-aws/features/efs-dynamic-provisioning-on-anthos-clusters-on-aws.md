---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.375Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "EFS dynamic provisioning on Anthos clusters on AWS"
feature_slug: "efs-dynamic-provisioning-on-anthos-clusters-on-aws"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "dynamic storage provisioning"
  - "EFS dynamic provisioning"
  - "EFS storage"
  - "Amazon EFS"
  - "EFS CSI"
  - "Kubernetes 1.24+ EFS"
  - "preview EFS support"
  - "dynamic EFS"
---

# EFS dynamic provisioning on Anthos clusters on AWS

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

Anthos clusters on AWS in Kubernetes 1.24+ now support dynamic EFS provisioning in preview mode.

## Extended Definition

In Anthos clusters on AWS, EFS dynamic provisioning refers to support for dynamic provisioning of Amazon Elastic File System (EFS) storage through the Kubernetes storage flow on the cluster. The release notes state this feature is available in preview for Kubernetes 1.24+ and is available in general availability (GA) for clusters running Kubernetes 1.25+.

## Evidence Summary

The cited release notes page explicitly document version-gated rollout of EFS dynamic provisioning on Anthos clusters on AWS: preview in Kubernetes 1.24+ and GA in Kubernetes 1.25+.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Fixed an issue with AWS EFS CSI driver where EFS hostnames can't be resolved when AWS VPC is configured to use a custom DNS server.
- Feature In Kubernetes version 1.24 and later, Anthos clusters on AWS supports EFS dynamic provisioning in preview mode.
- Feature Elastic File System (EFS) dynamic provisioning is now available in GA for clusters at version 1.25 or later.

