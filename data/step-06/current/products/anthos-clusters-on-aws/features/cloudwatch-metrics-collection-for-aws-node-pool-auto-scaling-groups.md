---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.369Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "CloudWatch metrics collection for AWS node pool auto scaling groups"
feature_slug: "cloudwatch-metrics-collection-for-aws-node-pool-auto-scaling-groups"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
keywords:
  - "enable CloudWatch collection"
  - "AWS node pool auto scaling group"
  - "update ASG metrics"
  - "CloudWatch ASG"
  - "CloudWatch metrics collection"
  - "ASG metrics collection"
  - "node pool ASG metrics"
---

# CloudWatch metrics collection for AWS node pool auto scaling groups

Product: Anthos clusters on AWS
Coverage: MEDIUM

## Step 02 Summary

CloudWatch metrics collection can now be enabled and updated for AWS node pool auto-scaling groups.

## Extended Definition

For Anthos clusters on AWS, this feature is the node-pool setting that configures CloudWatch metrics collection on the AWS Auto Scaling group associated with the node pool. The official reference describes this specifically as configuration related to CloudWatch metrics collection on the Auto Scaling group, indicating integration is managed through node pool ASG configuration rather than as a separate product-level service. Evidence on explicit enable/disable flow and update mechanics is limited in the provided excerpt.

## Evidence Summary

The cited GKE Multi-Cloud REST resource page includes node-pool fields for AWS that explicitly relate to CloudWatch metrics collection configuration on the AWS Auto Scaling Group.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)

## Supporting Pages

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The AwsNodePool API includes an `AwsAutoscalingGroupMetricsCollection` representation, which is relevant to configuring and reading ASG metrics collection settings.

Evidence snippets:
- Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool.
- Configuration related to CloudWatch metrics collection in an AWS Auto Scaling group.

