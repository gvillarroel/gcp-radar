---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.369Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Dynamic AWS node pool security group updates"
feature_slug: "dynamic-aws-node-pool-security-group-updates"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "dynamic SG modification"
  - "dynamic node pool security group updates"
  - "required EC2 permissions"
  - "dynamic SG updates"
  - "node-pool SG updates"
  - "security group updates"
  - "AWS node pool"
---

# Dynamic AWS node pool security group updates

Product: Anthos clusters on AWS
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS now support dynamically updating AWS node pool security groups with the required EC2 permissions.

## Extended Definition

In Anthos clusters on AWS, the feature enables operators to dynamically update the security groups associated with an AWS node pool. Google Cloud’s GKE on AWS release notes state: “You can now dynamically update AWS node pool security groups,” indicating post-provisioning security group changes are supported for node pools. The provided excerpt does not provide the detailed IAM/EC2 permission prerequisites.

## Evidence Summary

The release notes page explicitly confirms the availability of dynamic node-pool security group updates on GKE/Anthos for AWS but does not include the required EC2 permission details.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- You can access these features through the API now: Dynamically updating AWS node pool tags Enable and update CloudWatch metrics collection on AWS node pools Feature Administrators can grant AWS cluster access to all members of a Google Group by granting the required RBAC permission to the group.
- Feature You can now enable and update CloudWatch metrics collection on AWS node pool's auto scaling group.
- Feature You can now dynamically update AWS node pool security groups.
- Feature You can now dynamically updating AWS node pool tags.

