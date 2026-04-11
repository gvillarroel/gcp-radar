---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.359Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "AWS Spot instance node pools"
feature_slug: "aws-spot-instance-node-pools"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
keywords:
  - "node pool provisioned by Spot"
  - "EC2 Spot instances"
  - "spot capacity"
  - "spot nodepool"
  - "Spot instance node pools"
  - "node pool availability"
  - "spot node pool"
  - "Spot pools"
---

# AWS Spot instance node pools

Product: Anthos clusters on AWS
Coverage: MEDIUM

## Step 02 Summary

AWS Spot instance node pools are supported as a GA feature for Anthos clusters.

## Extended Definition

In Anthos clusters on AWS, the AWS node pool API supports creating node pools that are provisioned with Amazon EC2 Spot instances. The API exposes a Spot configuration for a node pool, where you specify a list of instance types (`spotConfig.instanceTypes`) that can be used when creating a Spot node pool.

## Evidence Summary

The cited REST reference confirms that the Anthos `awsNodePools` resource includes configuration for provisioning EC2 Spot instances and allows defining instance types for Spot node pool creation.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)

## Supporting Pages

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page includes a `SpotConfig` representation in the AwsNodePool schema, indicating API-level support for Spot-based node pool configuration.

Evidence snippets:
- Configuration for provisioning EC2 Spot instances When specified, the node pool will provision Spot instances from the set of spotConfig.instance types.
- A list of instance types for creating spot node pool.

