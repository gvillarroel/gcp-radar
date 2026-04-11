---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.368Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Amazon EFS dynamic provisioning on AWS"
feature_slug: "amazon-efs-dynamic-provisioning-on-aws"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "Amazon EFS dynamic provisioning"
  - "EFS CSI driver"
  - "EFS storage on AWS"
  - "EFS dynamic provisioning"
  - "EFS CSI"
  - "efs-csi"
  - "GA dynamic provisioning"
  - "Kubernetes 1.25 or later"
---

# Amazon EFS dynamic provisioning on AWS

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

Amazon EFS dynamic provisioning is available in GA for Anthos on AWS clusters running Kubernetes 1.25 or later.

## Extended Definition

Amazon EFS dynamic provisioning on Anthos on AWS is a storage feature that enables dynamic provisioning of AWS Elastic File System (EFS) volumes via the AWS EFS CSI driver. In Anthos clusters on AWS, it is in preview for Kubernetes 1.24+ and is documented as generally available for clusters running Kubernetes 1.25 or later.

## Evidence Summary

The Anthos on AWS release notes explicitly track the feature progression of EFS dynamic provisioning from preview in Kubernetes 1.24+ to GA in Kubernetes 1.25+.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Fixed an issue with AWS EFS CSI driver where EFS hostnames can't be resolved when AWS VPC is configured to use a custom DNS server.
- Feature In Kubernetes version 1.24 and later, Anthos clusters on AWS supports EFS dynamic provisioning in preview mode.
- Feature Elastic File System (EFS) dynamic provisioning is now available in GA for clusters at version 1.25 or later.

